n.d(t, { P: () => j });
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(404759),
    s = n.n(o),
    c = n(91192),
    u = n(536895),
    d = n(866442),
    p = n(481060),
    v = n(209613),
    f = n(429368),
    m = n(724994),
    b = n(388032),
    h = n(820612);
function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function y(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = {},
                l = Object.keys(e);
            for (r = 0; r < l.length; r++) ((n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
            return i;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (r = 0; r < l.length; r++) ((n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
let O = s()((e) => {
        let t = !1;
        if (null != e && (0, d.FX)(e)) {
            let n = (0, d._i)(e);
            null != n && (t = 0.3 >= (0, d.Bd)(n));
        }
        return t ? p.TVs.unsafe_rawColors.PRIMARY_700.css : p.TVs.unsafe_rawColors.PRIMARY_200.css;
    }),
    x = (e) => {
        let { variantGroupProduct: t, variant: n, variantIndex: l, totalVariants: o, selectedVariantIndex: s, onEnter: d, onLeave: v, minimal: x } = e,
            { isPurchased: j } = (0, m.L)(n),
            P = (0, c.JA)('shop-variants-group-'.concat(t.storeListingId, '-').concat(l)),
            { onFocus: w } = P,
            C = y(P, ['onFocus']),
            I = i.useCallback(
                (e) => {
                    (e.preventDefault(), e.stopPropagation(), (0, f.$)(t, l), w());
                },
                [w, t, l]
            );
        return (0, r.jsx)(p.ua7, {
            text: b.intl.string(b.t['6cfuDg']),
            'aria-label': !1,
            shouldShow: !x && j,
            children: (e) =>
                (0, r.jsx)(
                    p.P3F,
                    _(g({}, C), {
                        tag: 'li',
                        onMouseEnter: () => {
                            var t;
                            (d(), null == (t = e.onMouseEnter) || t.call(e));
                        },
                        onMouseLeave: () => {
                            var t;
                            (v(), null == (t = e.onMouseLeave) || t.call(e));
                        },
                        onFocus: () => {
                            var t;
                            (d(), null == (t = e.onMouseEnter) || t.call(e));
                        },
                        onBlur: () => {
                            var t;
                            (v(), null == (t = e.onMouseLeave) || t.call(e));
                        },
                        onClick: I,
                        onKeyDown: (e) => {
                            e.key === u.R8.ENTER && I(e);
                        },
                        className: h.colorVariant,
                        children: (0, r.jsx)('div', {
                            className: a()(h.colorSwatch, {
                                [h.open]: !x,
                                [h.selected]: l === s
                            }),
                            style: {
                                backgroundColor: n.variantValue,
                                zIndex: o - l
                            },
                            children: j
                                ? (0, r.jsx)(p.kSu, {
                                      className: h.purchasedIndicator,
                                      color: O(n.variantValue)
                                  })
                                : null
                        })
                    })
                )
        });
    },
    j = (e) => {
        var t, n;
        let { variantGroupProduct: i, className: l, previewingVariantIndexProps: o, setIsHoveringOnSwitch: s, minimal: d, selectedVariantIndex: f, alternativeBackgroundColor: m } = e,
            O = o.previewingVariantIndex,
            j = null == (t = i.variants) ? void 0 : t[f],
            P = null !== O ? (null == (n = i.variants) ? void 0 : n[O]) : void 0,
            w = (0, v.Z)('shop-variants-group-'.concat(i.storeListingId), u.hy.HORIZONTAL);
        if (null == j) return null;
        let C = null != P ? P.variantLabel : null == j ? void 0 : j.variantLabel;
        return (0, r.jsx)(c.bG, {
            navigator: w,
            children: (0, r.jsx)(c.SJ, {
                children: (e) => {
                    var t,
                        { ref: n } = e,
                        c = y(e, ['ref']);
                    return (0, r.jsxs)(
                        'div',
                        _(g({ ref: n }, c), {
                            className: a()(h.variantsPanel, l, {
                                [h.minimalState]: d,
                                [h.alternativeColor]: m
                            }),
                            onMouseEnter: () => (null == s ? void 0 : s(!0)),
                            onMouseLeave: () => (null == s ? void 0 : s(!1)),
                            children: [
                                (0, r.jsx)('ol', {
                                    className: h.variantsList,
                                    children:
                                        null == (t = i.variants)
                                            ? void 0
                                            : t.map((e, t) => {
                                                  var n, l;
                                                  return (0, r.jsx)(
                                                      x,
                                                      {
                                                          variantGroupProduct: i,
                                                          variant: e,
                                                          variantIndex: t,
                                                          selectedVariantIndex: f,
                                                          totalVariants: null != (l = null == (n = i.variants) ? void 0 : n.length) ? l : 0,
                                                          onEnter: () => o.handleEntering(t),
                                                          onLeave: o.handleLeaving,
                                                          minimal: d
                                                      },
                                                      t
                                                  );
                                              })
                                }),
                                (0, r.jsx)(p.Text, {
                                    variant: 'text-xs/medium',
                                    color: 'text-secondary',
                                    className: h.variantLabel,
                                    children: d ? b.intl.string(b.t.wbgaj4) : C
                                })
                            ]
                        })
                    );
                }
            })
        });
    };
