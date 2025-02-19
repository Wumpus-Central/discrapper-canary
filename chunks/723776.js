n.d(t, { F: () => v });
var r = n(200651),
    a = n(192379),
    i = n(442837),
    l = n(481060),
    s = n(596454),
    o = n(727637),
    c = n(607070),
    u = n(176354),
    m = n(875752);
function d(e) {
    let { emoji: t, shouldAnimate: n } = e;
    if (null == t) return null;
    let a = u.ZP.isCustomEmoji(t) ? t.name : t.surrogates;
    return (0, r.jsx)(s.Z, {
        className: m.traitEmoji,
        emojiId: t.id,
        emojiName: a,
        animated: t.animated,
        shouldAnimate: n
    });
}
function x(e) {
    let { trait: t } = e,
        n = a.useRef(null),
        s = (0, o.Z)(n),
        u = (0, i.e7)([c.Z], () => c.Z.useReducedMotion);
    return (null == t ? void 0 : t.label) == null || t.label.length <= 0
        ? null
        : (0, r.jsxs)('div', {
              ref: n,
              className: m.trait,
              children: [
                  (0, r.jsx)(d, {
                      emoji: t.emoji,
                      shouldAnimate: !u && s
                  }),
                  (0, r.jsx)(l.Text, {
                      tag: 'span',
                      className: m.traitLabel,
                      variant: 'text-sm/normal',
                      color: 'text-normal',
                      children: t.label
                  })
              ]
          });
}
function v(e) {
    let { profile: t } = e,
        n = a.useMemo(
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
        i = a.useCallback(
            (e) =>
                'string' == typeof e
                    ? (0, r.jsx)(
                          'div',
                          {
                              className: m.trait,
                              children: (0, r.jsx)(l.Text, {
                                  tag: 'span',
                                  variant: 'text-sm/normal',
                                  color: 'text-normal',
                                  children: e
                              })
                          },
                          'overflow'
                      )
                    : (0, r.jsx)(x, { trait: e }, e.label),
            []
        );
    return (0, r.jsx)(l.Epb, {
        className: m.container,
        items: n,
        renderItem: i,
        maxLines: 2,
        itemGapPx: 4
    });
}
