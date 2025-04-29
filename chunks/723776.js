n.d(t, { F: () => m });
var r = n(200651),
    i = n(192379),
    o = n(442837),
    a = n(481060),
    s = n(596454),
    l = n(727637),
    c = n(607070),
    u = n(176354),
    d = n(942466);
function f(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                f(e, t, n[t]);
            });
    }
    return e;
}
function p(e) {
    let { emoji: t, shouldAnimate: n } = e;
    if (null == t) return null;
    let i = u.ZP.isCustomEmoji(t) ? t.name : t.surrogates;
    return (0, r.jsx)(s.Z, {
        className: d.traitEmoji,
        emojiId: t.id,
        emojiName: i,
        animated: t.animated,
        shouldAnimate: n
    });
}
function h(e) {
    let { trait: t } = e,
        n = i.useRef(null),
        s = (0, l.Z)(n),
        u = !(0, o.e7)([c.Z], () => c.Z.useReducedMotion) && s;
    return (null == t ? void 0 : t.label) == null || t.label.length <= 0
        ? null
        : (0, r.jsxs)('div', {
              ref: n,
              className: d.trait,
              children: [
                  (0, r.jsx)(p, {
                      emoji: t.emoji,
                      shouldAnimate: u
                  }),
                  (0, r.jsx)(a.Text, {
                      tag: 'span',
                      className: d.traitLabel,
                      variant: 'text-sm/normal',
                      color: 'text-normal',
                      children: t.label
                  })
              ]
          });
}
function m(e) {
    let { profile: t } = e,
        n = i.useMemo(() => t.traits.map((e, t) => _({ key: 'trait-'.concat(t) }, e)).filter((e) => e.label.length > 0), [t]),
        o = i.useCallback(
            (e) =>
                'string' == typeof e
                    ? (0, r.jsx)(
                          'div',
                          {
                              className: d.trait,
                              children: (0, r.jsx)(a.Text, {
                                  tag: 'span',
                                  variant: 'text-sm/normal',
                                  color: 'text-normal',
                                  children: e
                              })
                          },
                          'overflow'
                      )
                    : (0, r.jsx)(h, { trait: e }, e.key),
            []
        );
    return 0 === n.length
        ? null
        : (0, r.jsx)(a.Epb, {
              className: d.container,
              items: n,
              renderItem: o,
              maxLines: 2,
              itemGapPx: 4
          });
}
