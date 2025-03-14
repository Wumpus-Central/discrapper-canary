n.d(t, { F: () => f });
var r = n(200651),
    l = n(192379),
    i = n(442837),
    a = n(481060),
    o = n(596454),
    c = n(727637),
    s = n(607070),
    u = n(176354),
    d = n(204690);
function m(e) {
    let { emoji: t, shouldAnimate: n } = e;
    if (null == t) return null;
    let l = u.ZP.isCustomEmoji(t) ? t.name : t.surrogates;
    return (0, r.jsx)(o.Z, {
        className: d.traitEmoji,
        emojiId: t.id,
        emojiName: l,
        animated: t.animated,
        shouldAnimate: n
    });
}
function v(e) {
    let { trait: t } = e,
        n = l.useRef(null),
        o = (0, c.Z)(n),
        u = (0, i.e7)([s.Z], () => s.Z.useReducedMotion);
    return (null == t ? void 0 : t.label) == null || t.label.length <= 0
        ? null
        : (0, r.jsxs)('div', {
              ref: n,
              className: d.trait,
              children: [
                  (0, r.jsx)(m, {
                      emoji: t.emoji,
                      shouldAnimate: !u && o
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
function f(e) {
    let { profile: t } = e,
        n = l.useMemo(
            () =>
                t.traits
                    .map((e, t) =>
                        (function (e) {
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
                                        var r;
                                        (r = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: r,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0
                                                  })
                                                : (e[t] = r);
                                    });
                            }
                            return e;
                        })({ key: 'trait-'.concat(t) }, e)
                    )
                    .filter((e) => e.label.length > 0),
            [t]
        ),
        i = l.useCallback(
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
                    : (0, r.jsx)(v, { trait: e }, e.key),
            []
        );
    return 0 === n.length
        ? null
        : (0, r.jsx)(a.Epb, {
              className: d.container,
              items: n,
              renderItem: i,
              maxLines: 2,
              itemGapPx: 4
          });
}
