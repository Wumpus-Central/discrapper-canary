i.d(l, { P: () => v });
var t = i(477900),
    n = i(582128),
    s = i(503698),
    a = i.n(s),
    r = i(834730),
    u = i(115703),
    c = i(81975),
    o = i(17928),
    d = i(3666),
    I = i(565645),
    m = i(775602),
    A = i(713517),
    C = i(690521),
    x = i(229576);
function g(e) {
    let { emoji: l, shouldAnimate: i } = e;
    if (null == l) return null;
    let n = C.Ay.isCustomEmoji(l) ? l.name : l.surrogates;
    return (0, t.jsx)(I.A, { className: x.Pw, emojiId: l.id, emojiName: n, animated: l.animated, shouldAnimate: i });
}
function N(e) {
    let { trait: l, ellipsize: i, traitColor: s } = e,
        u = n.useRef(null),
        c = (0, A.M)(u),
        d = (0, o.bG)([m.Ay], () => m.Ay.useReducedMotion);
    return null == l.label || l.label.length <= 0
        ? null
        : (0, t.jsxs)("div", {
              ref: u,
              className: a()(x.Bj, { [x.mc]: i }),
              children: [
                  (0, t.jsx)(g, { emoji: l.emoji, shouldAnimate: !d && c }),
                  (0, t.jsx)(r.E, {
                      tag: "span",
                      className: i ? x.mc : void 0,
                      variant: "text-sm/normal",
                      color: s,
                      children: l.label,
                  }),
              ],
          });
}
function E(e) {
    let { items: l, traitColor: i = "text-default" } = e,
        s = n.useCallback(
            (e, l) =>
                "string" == typeof e
                    ? (0, t.jsx)(
                          "div",
                          {
                              className: a()(x.Bj, { [x.mc]: l.ellipsize }),
                              children: (0, t.jsx)(r.E, {
                                  tag: "span",
                                  variant: "text-sm/normal",
                                  color: i,
                                  children: e,
                              }),
                          },
                          "overflow",
                      )
                    : (0, t.jsx)(N, { trait: e, ellipsize: l.ellipsize, traitColor: i }, e.key),
            [i],
        ),
        u = n.useCallback((e) => s(e, { ellipsize: !0 }), [s]),
        c = n.useCallback((e) => s(e, { ellipsize: !1 }), [s]),
        o = n.useCallback((e) => (0, t.jsx)(d.g2, { items: e, renderItem: c }), [c]);
    return 0 === l.length
        ? null
        : (0, t.jsx)(d.ZV, { className: x.kL, items: l, renderItem: u, renderOverflow: o, maxLines: 2, itemGapPx: 4 });
}
var h = i(377476);
function v(e) {
    let { profile: l, className: i } = e,
        { gamesToDisplay: s, lastGameToDisplay: o, remainingGames: d } = (0, u.A)(l),
        I = n.useMemo(
            () => l.traits.map((e, l) => ({ key: `trait-${l}`, ...e })).filter((e) => e.label.length > 0),
            [l],
        ),
        m = l.description.length > 0;
    return m || s.length > 0 || I.length > 0
        ? (0, t.jsxs)("div", {
              className: a()(h.rf, i),
              children: [
                  m
                      ? (0, t.jsx)(r.E, { variant: "text-sm/normal", color: "text-subtle", children: l.description })
                      : null,
                  (0, t.jsx)(c.A, {
                      gamesToDisplay: s,
                      lastGameToDisplay: o,
                      remainingGames: d,
                      activity: l.gameActivity,
                  }),
                  (0, t.jsx)(E, { items: I }),
              ],
          })
        : (0, t.jsx)("div", { className: h.C3 });
}
