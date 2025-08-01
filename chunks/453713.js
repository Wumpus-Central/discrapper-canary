r.d(t, { P: () => j });
var n = r(255367),
    a = r(73800),
    l = r(120356),
    i = r.n(l),
    o = r(404759),
    s = r.n(o),
    c = r(91192),
    u = r(536895),
    d = r(866442),
    p = r(481060),
    b = r(209613),
    h = r(429368),
    f = r(724994),
    v = r(388032),
    m = r(820612);
function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                ((n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n));
            }));
    }
    return e;
}
function O(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              }),
        e
    );
}
function y(e, t) {
    if (null == e) return {};
    var r,
        n,
        a = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                a = {},
                l = Object.keys(e);
            for (n = 0; n < l.length; n++) ((r = l[n]), t.indexOf(r) >= 0 || (a[r] = e[r]));
            return a;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (n = 0; n < l.length; n++) ((r = l[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]));
    }
    return a;
}
let g = s()((e) => {
        let t = !1;
        if (null != e && (0, d.FX)(e)) {
            let r = (0, d._i)(e);
            null != r && (t = 0.3 >= (0, d.Bd)(r));
        }
        return t ? p.TVs.unsafe_rawColors.PRIMARY_700.css : p.TVs.unsafe_rawColors.PRIMARY_200.css;
    }),
    C = (e) => {
        let { variantGroupProduct: t, variant: r, variantIndex: l, totalVariants: o, selectedVariantIndex: s, onEnter: d, onLeave: b, minimal: C } = e,
            { isPurchased: j } = (0, f.L)(r),
            P = (0, c.JA)('shop-variants-group-'.concat(t.storeListingId, '-').concat(l)),
            { onFocus: E } = P,
            x = y(P, ['onFocus']),
            S = a.useCallback(
                (e) => {
                    (e.preventDefault(), e.stopPropagation(), (0, h.$)(t, l), E());
                },
                [E, t, l]
            );
        return (0, n.jsx)(p.ua7, {
            text: v.intl.string(v.t['6cfuDg']),
            'aria-label': !1,
            shouldShow: !C && j,
            children: (e) =>
                (0, n.jsx)(
                    p.P3F,
                    O(_({}, x), {
                        tag: 'li',
                        onMouseEnter: () => {
                            var t;
                            (d(), null == (t = e.onMouseEnter) || t.call(e));
                        },
                        onMouseLeave: () => {
                            var t;
                            (b(), null == (t = e.onMouseLeave) || t.call(e));
                        },
                        onFocus: () => {
                            var t;
                            (d(), null == (t = e.onMouseEnter) || t.call(e));
                        },
                        onBlur: () => {
                            var t;
                            (b(), null == (t = e.onMouseLeave) || t.call(e));
                        },
                        onClick: S,
                        onKeyDown: (e) => {
                            e.key === u.R8.ENTER && S(e);
                        },
                        className: m.colorVariant,
                        children: (0, n.jsx)('div', {
                            className: i()(m.colorSwatch, {
                                [m.open]: !C,
                                [m.selected]: l === s
                            }),
                            style: {
                                backgroundColor: r.variantValue,
                                zIndex: o - l
                            },
                            children: j
                                ? (0, n.jsx)(p.kSu, {
                                      className: m.purchasedIndicator,
                                      color: g(r.variantValue)
                                  })
                                : null
                        })
                    })
                )
        });
    },
    j = (e) => {
        var t, r;
        let { variantGroupProduct: a, className: l, previewingVariantIndexProps: o, setIsHoveringOnSwitch: s, minimal: d, selectedVariantIndex: h, alternativeBackgroundColor: f } = e,
            g = o.previewingVariantIndex,
            j = null == (t = a.variants) ? void 0 : t[h],
            P = null !== g ? (null == (r = a.variants) ? void 0 : r[g]) : void 0,
            E = (0, b.Z)('shop-variants-group-'.concat(a.storeListingId), u.hy.HORIZONTAL);
        if (null == j) return null;
        let x = null != P ? P.variantLabel : null == j ? void 0 : j.variantLabel;
        return (0, n.jsx)(c.bG, {
            navigator: E,
            children: (0, n.jsx)(c.SJ, {
                children: (e) => {
                    var t,
                        { ref: r } = e,
                        c = y(e, ['ref']);
                    return (0, n.jsxs)(
                        'div',
                        O(_({ ref: r }, c), {
                            className: i()(m.variantsPanel, l, {
                                [m.minimalState]: d,
                                [m.alternativeColor]: f
                            }),
                            onMouseEnter: () => (null == s ? void 0 : s(!0)),
                            onMouseLeave: () => (null == s ? void 0 : s(!1)),
                            children: [
                                (0, n.jsx)('ol', {
                                    className: m.variantsList,
                                    children:
                                        null == (t = a.variants)
                                            ? void 0
                                            : t.map((e, t) => {
                                                  var r, l;
                                                  return (0, n.jsx)(
                                                      C,
                                                      {
                                                          variantGroupProduct: a,
                                                          variant: e,
                                                          variantIndex: t,
                                                          selectedVariantIndex: h,
                                                          totalVariants: null != (l = null == (r = a.variants) ? void 0 : r.length) ? l : 0,
                                                          onEnter: () => o.handleEntering(t),
                                                          onLeave: o.handleLeaving,
                                                          minimal: d
                                                      },
                                                      t
                                                  );
                                              })
                                }),
                                (0, n.jsx)(p.Text, {
                                    variant: 'text-xs/medium',
                                    color: 'text-secondary',
                                    className: m.variantLabel,
                                    children: d ? v.intl.string(v.t.wbgaj4) : x
                                })
                            ]
                        })
                    );
                }
            })
        });
    };
