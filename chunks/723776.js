n.d(t, { F: () => m });
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(442837),
    l = n(481060),
    c = n(596454),
    u = n(727637),
    d = n(607070),
    f = n(176354),
    _ = n(942466);
function p(e) {
    let { emoji: t, shouldAnimate: n } = e;
    if (null == t) return null;
    let i = f.ZP.isCustomEmoji(t) ? t.name : t.surrogates;
    return (0, r.jsx)(c.Z, {
        className: _.traitEmoji,
        emojiId: t.id,
        emojiName: i,
        animated: t.animated,
        shouldAnimate: n
    });
}
function h(e) {
    let { trait: t, ellipsize: n } = e,
        o = i.useRef(null),
        c = (0, u.Z)(o),
        f = !(0, s.e7)([d.Z], () => d.Z.useReducedMotion) && c;
    return null == t.label || t.label.length <= 0
        ? null
        : (0, r.jsxs)('div', {
              ref: o,
              className: a()(_.trait, { [_.ellipsize]: n }),
              children: [
                  (0, r.jsx)(p, {
                      emoji: t.emoji,
                      shouldAnimate: f
                  }),
                  (0, r.jsx)(l.Text, {
                      tag: 'span',
                      className: n ? _.ellipsize : void 0,
                      variant: 'text-sm/normal',
                      color: 'text-normal',
                      children: t.label
                  })
              ]
          });
}
function m(e) {
    let { items: t } = e,
        n = i.useCallback(
            (e, t) =>
                'string' == typeof e
                    ? (0, r.jsx)(
                          'div',
                          {
                              className: a()(_.trait, { [_.ellipsize]: t.ellipsize }),
                              children: (0, r.jsx)(l.Text, {
                                  tag: 'span',
                                  variant: 'text-sm/normal',
                                  color: 'text-normal',
                                  children: e
                              })
                          },
                          'overflow'
                      )
                    : (0, r.jsx)(
                          h,
                          {
                              trait: e,
                              ellipsize: t.ellipsize
                          },
                          e.key
                      ),
            []
        ),
        o = i.useCallback((e) => n(e, { ellipsize: !0 }), [n]),
        s = i.useCallback((e) => n(e, { ellipsize: !1 }), [n]),
        c = i.useCallback(
            (e) =>
                (0, r.jsx)(l.te1, {
                    items: e,
                    renderItem: s
                }),
            [s]
        );
    return 0 === t.length
        ? null
        : (0, r.jsx)(l.Epb, {
              className: _.container,
              items: t,
              renderItem: o,
              renderOverflow: c,
              maxLines: 2,
              itemGapPx: 4
          });
}
