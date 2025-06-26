r.d(t, { P: () => j });
var n = r(255367),
    i = r(73800),
    o = r(120356),
    l = r.n(o),
    a = r(404759),
    s = r.n(a),
    c = r(91192),
    u = r(536895),
    d = r(866442),
    p = r(481060),
    b = r(209613),
    f = r(429368),
    v = r(724994),
    m = r(388032),
    h = r(820612);
function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
function x(e, t) {
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
function _(e, t) {
    if (null == e) return {};
    var r,
        n,
        i = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                i = {},
                o = Object.keys(e);
            for (n = 0; n < o.length; n++) (r = o[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
            return i;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (n = 0; n < o.length; n++) (r = o[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
    }
    return i;
}
let y = s()((e) => {
        let t = !1;
        if (null != e && (0, d.FX)(e)) {
            let r = (0, d._i)(e);
            null != r && (t = 0.3 >= (0, d.Bd)(r));
        }
        return t ? p.TVs.unsafe_rawColors.PRIMARY_700.css : p.TVs.unsafe_rawColors.PRIMARY_200.css;
    }),
    O = (e) => {
        let { variantGroupProduct: t, variant: r, variantIndex: o, totalVariants: a, selectedVariantIndex: s, onEnter: d, onLeave: b, minimal: O } = e,
            { isPurchased: j } = (0, v.L)(r),
            P = (0, c.JA)('shop-variants-group-'.concat(t.storeListingId, '-').concat(o)),
            { onFocus: C } = P,
            w = _(P, ['onFocus']),
            k = i.useCallback(
                (e) => {
                    e.preventDefault(), e.stopPropagation(), (0, f.$)(t, o), C();
                },
                [C, t, o]
            );
        return (0, n.jsx)(p.ua7, {
            text: m.intl.string(m.t['6cfuDg']),
            'aria-label': !1,
            shouldShow: !O && j,
            children: (e) =>
                (0, n.jsx)(
                    p.P3F,
                    x(g({}, w), {
                        tag: 'li',
                        onMouseEnter: () => {
                            var t;
                            d(), null == (t = e.onMouseEnter) || t.call(e);
                        },
                        onMouseLeave: () => {
                            var t;
                            b(), null == (t = e.onMouseLeave) || t.call(e);
                        },
                        onFocus: () => {
                            var t;
                            d(), null == (t = e.onMouseEnter) || t.call(e);
                        },
                        onBlur: () => {
                            var t;
                            b(), null == (t = e.onMouseLeave) || t.call(e);
                        },
                        onClick: k,
                        onKeyDown: (e) => {
                            e.key === u.R8.ENTER && k(e);
                        },
                        className: h.colorVariant,
                        children: (0, n.jsx)('div', {
                            className: l()(h.colorSwatch, {
                                [h.open]: !O,
                                [h.selected]: o === s
                            }),
                            style: {
                                backgroundColor: r.variantValue,
                                zIndex: a - o
                            },
                            children: j
                                ? (0, n.jsx)(p.kSu, {
                                      className: h.purchasedIndicator,
                                      color: y(r.variantValue)
                                  })
                                : null
                        })
                    })
                )
        });
    },
    j = (e) => {
        var t, r;
        let { variantGroupProduct: i, className: o, previewingVariantIndexProps: a, setIsHoveringOnSwitch: s, minimal: d, selectedVariantIndex: f, alternativeBackgroundColor: v } = e,
            y = a.previewingVariantIndex,
            j = null == (t = i.variants) ? void 0 : t[f],
            P = null !== y ? (null == (r = i.variants) ? void 0 : r[y]) : void 0,
            C = (0, b.Z)('shop-variants-group-'.concat(i.storeListingId), u.hy.HORIZONTAL);
        if (null == j) return null;
        let w = null != P ? P.variantLabel : null == j ? void 0 : j.variantLabel;
        return (0, n.jsx)(c.bG, {
            navigator: C,
            children: (0, n.jsx)(c.SJ, {
                children: (e) => {
                    var t,
                        { ref: r } = e,
                        c = _(e, ['ref']);
                    return (0, n.jsxs)(
                        'div',
                        x(g({ ref: r }, c), {
                            className: l()(h.variantsPanel, o, {
                                [h.minimalState]: d,
                                [h.alternativeColor]: v
                            }),
                            onMouseEnter: () => (null == s ? void 0 : s(!0)),
                            onMouseLeave: () => (null == s ? void 0 : s(!1)),
                            children: [
                                (0, n.jsx)('ol', {
                                    className: h.variantsList,
                                    children:
                                        null == (t = i.variants)
                                            ? void 0
                                            : t.map((e, t) => {
                                                  var r, o;
                                                  return (0, n.jsx)(
                                                      O,
                                                      {
                                                          variantGroupProduct: i,
                                                          variant: e,
                                                          variantIndex: t,
                                                          selectedVariantIndex: f,
                                                          totalVariants: null != (o = null == (r = i.variants) ? void 0 : r.length) ? o : 0,
                                                          onEnter: () => a.handleEntering(t),
                                                          onLeave: a.handleLeaving,
                                                          minimal: d
                                                      },
                                                      t
                                                  );
                                              })
                                }),
                                (0, n.jsx)(p.Text, {
                                    variant: 'text-xs/medium',
                                    color: 'text-secondary',
                                    className: h.variantLabel,
                                    children: d ? m.intl.string(m.t.wbgaj4) : w
                                })
                            ]
                        })
                    );
                }
            })
        });
    };
