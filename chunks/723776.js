n.d(t, { F: () => E });
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    c = n(596454),
    u = n(727637),
    d = n(607070),
    f = n(176354),
    _ = n(942466);
function p(e, t, n) {
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
function h(e) {
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
                p(e, t, n[t]);
            });
    }
    return e;
}
function m(e) {
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
function g(e) {
    let { trait: t, ellipsize: n } = e,
        a = i.useRef(null),
        c = (0, u.Z)(a),
        f = !(0, s.e7)([d.Z], () => d.Z.useReducedMotion) && c;
    return null == t.label || t.label.length <= 0
        ? null
        : (0, r.jsxs)('div', {
              ref: a,
              className: o()(_.trait, { [_.ellipsize]: n }),
              children: [
                  (0, r.jsx)(m, {
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
function E(e) {
    let { profile: t } = e,
        n = i.useMemo(() => t.traits.map((e, t) => h({ key: 'trait-'.concat(t) }, e)).filter((e) => e.label.length > 0), [t]),
        a = i.useCallback(
            (e, t) =>
                'string' == typeof e
                    ? (0, r.jsx)(
                          'div',
                          {
                              className: o()(_.trait, { [_.ellipsize]: t.ellipsize }),
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
                          g,
                          {
                              trait: e,
                              ellipsize: t.ellipsize
                          },
                          e.key
                      ),
            []
        ),
        s = i.useCallback((e) => a(e, { ellipsize: !0 }), [a]),
        c = i.useCallback((e) => a(e, { ellipsize: !1 }), [a]),
        u = i.useCallback(
            (e) =>
                (0, r.jsx)(l.te1, {
                    items: e,
                    renderItem: c
                }),
            [c]
        );
    return 0 === n.length
        ? null
        : (0, r.jsx)(l.Epb, {
              className: _.container,
              items: n,
              renderItem: s,
              renderOverflow: u,
              maxLines: 2,
              itemGapPx: 4
          });
}
