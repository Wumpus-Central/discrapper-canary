r.d(t, { P: () => x });
var n = r(255367),
    i = r(73800),
    l = r(120356),
    a = r.n(l),
    o = r(404759),
    s = r.n(o),
    c = r(91192),
    u = r(536895),
    d = r(866442),
    p = r(481060),
    v = r(209613),
    b = r(429368),
    f = r(724994),
    m = r(388032),
    h = r(820612);
function g(e) {
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
function y(e, t) {
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
function O(e, t) {
    if (null == e) return {};
    var r,
        n,
        i = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                i = {},
                l = Object.keys(e);
            for (n = 0; n < l.length; n++) ((r = l[n]), t.indexOf(r) >= 0 || (i[r] = e[r]));
            return i;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (n = 0; n < l.length; n++) ((r = l[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]));
    }
    return i;
}
let _ = s()((e) => {
        let t = !1;
        if (null != e && (0, d.FX)(e)) {
            let r = (0, d._i)(e);
            null != r && (t = 0.3 >= (0, d.Bd)(r));
        }
        return t ? p.TVs.unsafe_rawColors.PRIMARY_700.css : p.TVs.unsafe_rawColors.PRIMARY_200.css;
    }),
    j = (e) => {
        let { variantGroupProduct: t, variant: r, variantIndex: l, totalVariants: o, selectedVariantIndex: s, onEnter: d, onLeave: v, minimal: j } = e,
            { isPurchased: x } = (0, f.L)(r),
            P = (0, c.JA)('shop-variants-group-'.concat(t.storeListingId, '-').concat(l)),
            { onFocus: w } = P,
            C = O(P, ['onFocus']),
            S = i.useCallback(
                (e) => {
                    (e.preventDefault(), e.stopPropagation(), (0, b.$)(t, l), w());
                },
                [w, t, l]
            );
        return (0, n.jsx)(p.ua7, {
            text: m.intl.string(m.t['6cfuDg']),
            'aria-label': !1,
            shouldShow: !j && x,
            children: (e) =>
                (0, n.jsx)(
                    p.P3F,
                    y(g({}, C), {
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
                        onClick: S,
                        onKeyDown: (e) => {
                            e.key === u.R8.ENTER && S(e);
                        },
                        className: h.colorVariant,
                        children: (0, n.jsx)('div', {
                            className: a()(h.colorSwatch, {
                                [h.open]: !j,
                                [h.selected]: l === s
                            }),
                            style: {
                                backgroundColor: r.variantValue,
                                zIndex: o - l
                            },
                            children: x
                                ? (0, n.jsx)(p.kSu, {
                                      className: h.purchasedIndicator,
                                      color: _(r.variantValue)
                                  })
                                : null
                        })
                    })
                )
        });
    },
    x = (e) => {
        var t, r;
        let { variantGroupProduct: i, className: l, previewingVariantIndexProps: o, setIsHoveringOnSwitch: s, minimal: d, selectedVariantIndex: b, alternativeBackgroundColor: f } = e,
            _ = o.previewingVariantIndex,
            x = null == (t = i.variants) ? void 0 : t[b],
            P = null !== _ ? (null == (r = i.variants) ? void 0 : r[_]) : void 0,
            w = (0, v.Z)('shop-variants-group-'.concat(i.storeListingId), u.hy.HORIZONTAL);
        if (null == x) return null;
        let C = null != P ? P.variantLabel : null == x ? void 0 : x.variantLabel;
        return (0, n.jsx)(c.bG, {
            navigator: w,
            children: (0, n.jsx)(c.SJ, {
                children: (e) => {
                    var t,
                        { ref: r } = e,
                        c = O(e, ['ref']);
                    return (0, n.jsxs)(
                        'div',
                        y(g({ ref: r }, c), {
                            className: a()(h.variantsPanel, l, {
                                [h.minimalState]: d,
                                [h.alternativeColor]: f
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
                                                  var r, l;
                                                  return (0, n.jsx)(
                                                      j,
                                                      {
                                                          variantGroupProduct: i,
                                                          variant: e,
                                                          variantIndex: t,
                                                          selectedVariantIndex: b,
                                                          totalVariants: null != (l = null == (r = i.variants) ? void 0 : r.length) ? l : 0,
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
                                    className: h.variantLabel,
                                    children: d ? m.intl.string(m.t.wbgaj4) : C
                                })
                            ]
                        })
                    );
                }
            })
        });
    };
