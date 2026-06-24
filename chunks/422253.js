t.d(l, { P: () => v });
var i = t(627968),
    n = t(64700),
    s = t(503698),
    a = t.n(s),
    r = t(834730),
    u = t(115703),
    c = t(81975),
    o = t(17928),
    d = t(3666),
    I = t(565645),
    A = t(775602),
    m = t(713517),
    C = t(690521),
    f = t(446445);
function x(e) {
    let { emoji: l, shouldAnimate: t } = e;
    if (null == l) return null;
    let n = C.Ay.isCustomEmoji(l) ? l.name : l.surrogates;
    return (0, i.jsx)(I.A, { className: f.Pw, emojiId: l.id, emojiName: n, animated: l.animated, shouldAnimate: t });
}
function E(e) {
    let { trait: l, ellipsize: t, traitColor: s } = e,
        u = n.useRef(null),
        c = (0, m.M)(u),
        d = (0, o.bG)([A.Ay], () => A.Ay.useReducedMotion);
    return null == l.label || l.label.length <= 0
        ? null
        : (0, i.jsxs)("div", {
              ref: u,
              className: a()(f.Bj, { [f.mc]: t }),
              children: [
                  (0, i.jsx)(x, { emoji: l.emoji, shouldAnimate: !d && c }),
                  (0, i.jsx)(r.E, {
                      tag: "span",
                      className: t ? f.mc : void 0,
                      variant: "text-sm/normal",
                      color: s,
                      children: l.label,
                  }),
              ],
          });
}
function g(e) {
    let { items: l, traitColor: t = "text-default" } = e,
        s = n.useCallback(
            (e, l) =>
                "string" == typeof e
                    ? (0, i.jsx)(
                          "div",
                          {
                              className: a()(f.Bj, { [f.mc]: l.ellipsize }),
                              children: (0, i.jsx)(r.E, {
                                  tag: "span",
                                  variant: "text-sm/normal",
                                  color: t,
                                  children: e,
                              }),
                          },
                          "overflow",
                      )
                    : (0, i.jsx)(E, { trait: e, ellipsize: l.ellipsize, traitColor: t }, e.key),
            [t],
        ),
        u = n.useCallback((e) => s(e, { ellipsize: !0 }), [s]),
        c = n.useCallback((e) => s(e, { ellipsize: !1 }), [s]),
        o = n.useCallback((e) => (0, i.jsx)(d.g2, { items: e, renderItem: c }), [c]);
    return 0 === l.length
        ? null
        : (0, i.jsx)(d.ZV, { className: f.kL, items: l, renderItem: u, renderOverflow: o, maxLines: 2, itemGapPx: 4 });
}
var N = t(890653);
function v(e) {
    let { profile: l, className: t } = e,
        { gamesToDisplay: s, lastGameToDisplay: o, remainingGames: d } = (0, u.A)(l),
        I = n.useMemo(
            () => l.traits.map((e, l) => ({ key: `trait-${l}`, ...e })).filter((e) => e.label.length > 0),
            [l],
        ),
        A = l.description.length > 0;
    return A || s.length > 0 || I.length > 0
        ? (0, i.jsxs)("div", {
              className: a()(N.rf, t),
              children: [
                  A
                      ? (0, i.jsx)(r.E, { variant: "text-sm/normal", color: "text-subtle", children: l.description })
                      : null,
                  (0, i.jsx)(c.A, {
                      gamesToDisplay: s,
                      lastGameToDisplay: o,
                      remainingGames: d,
                      activity: l.gameActivity,
                  }),
                  (0, i.jsx)(g, { items: I }),
              ],
          })
        : (0, i.jsx)("div", { className: N.C3 });
}
