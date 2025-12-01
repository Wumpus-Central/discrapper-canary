n.d(t, { F: () => h });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    c = n(596454),
    u = n(607070),
    d = n(104505),
    f = n(176354),
    p = n(300849);
function _(e) {
    let { emoji: t, shouldAnimate: n } = e;
    if (null == t) return null;
    let i = f.ZP.isCustomEmoji(t) ? t.name : t.surrogates;
    return (0, r.jsx)(c.Z, {
        className: p.traitEmoji,
        emojiId: t.id,
        emojiName: i,
        animated: t.animated,
        shouldAnimate: n,
    });
}
function m(e) {
    let { trait: t, ellipsize: n } = e,
        a = i.useRef(null),
        c = (0, d.X)(a),
        f = !(0, s.e7)([u.Z], () => u.Z.useReducedMotion) && c;
    return null == t.label || t.label.length <= 0
        ? null
        : (0, r.jsxs)("div", {
              ref: a,
              className: o()(p.trait, { [p.ellipsize]: n }),
              children: [
                  (0, r.jsx)(_, {
                      emoji: t.emoji,
                      shouldAnimate: f,
                  }),
                  (0, r.jsx)(l.Text, {
                      tag: "span",
                      className: n ? p.ellipsize : void 0,
                      variant: "text-sm/normal",
                      color: "text-default",
                      children: t.label,
                  }),
              ],
          });
}
function h(e) {
    let { items: t } = e,
        n = i.useCallback(
            (e, t) =>
                "string" == typeof e
                    ? (0, r.jsx)(
                          "div",
                          {
                              className: o()(p.trait, { [p.ellipsize]: t.ellipsize }),
                              children: (0, r.jsx)(l.Text, {
                                  tag: "span",
                                  variant: "text-sm/normal",
                                  color: "text-default",
                                  children: e,
                              }),
                          },
                          "overflow",
                      )
                    : (0, r.jsx)(
                          m,
                          {
                              trait: e,
                              ellipsize: t.ellipsize,
                          },
                          e.key,
                      ),
            [],
        ),
        a = i.useCallback((e) => n(e, { ellipsize: !0 }), [n]),
        s = i.useCallback((e) => n(e, { ellipsize: !1 }), [n]),
        c = i.useCallback(
            (e) =>
                (0, r.jsx)(l.te1, {
                    items: e,
                    renderItem: s,
                }),
            [s],
        );
    return 0 === t.length
        ? null
        : (0, r.jsx)(l.Epb, {
              className: p.container,
              items: t,
              renderItem: a,
              renderOverflow: c,
              maxLines: 2,
              itemGapPx: 4,
          });
}
