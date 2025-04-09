n.d(t, { P: () => O });
var r = n(200651),
    l = n(192379),
    a = n(120356),
    o = n.n(a),
    i = n(404759),
    s = n.n(i),
    c = n(91192),
    u = n(536895),
    d = n(866442),
    b = n(481060),
    p = n(209613),
    f = n(429368),
    g = n(724994),
    m = n(388032),
    h = n(820612);
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
}
function v(e, t) {
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
function C(e, t) {
    if (null == e) return {};
    var n,
        r,
        l = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l = {},
                a = Object.keys(e);
            for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
            return l;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
    }
    return l;
}
let x = s()((e) => {
        let t = !1;
        if (null != e && (0, d.FX)(e)) {
            let n = (0, d._i)(e);
            null != n && (t = 0.3 >= (0, d.Bd)(n));
        }
        return t ? b.TVs.unsafe_rawColors.PRIMARY_700.css : b.TVs.unsafe_rawColors.PRIMARY_200.css;
    }),
    y = (e) => {
        let { variantGroupProduct: t, variant: n, variantIndex: a, totalVariants: i, selectedVariantIndex: s, onEnter: d, onLeave: p, minimal: y } = e,
            { isPurchased: O } = (0, g.L)(n),
            j = (0, c.JA)('shop-variants-group-'.concat(t.storeListingId, '-').concat(a)),
            { onFocus: k } = j,
            S = C(j, ['onFocus']),
            P = l.useCallback(
                (e) => {
                    e.preventDefault(), e.stopPropagation(), (0, f.$)(t, a), k();
                },
                [k, t, a]
            );
        return (0, r.jsx)(b.ua7, {
            text: m.NW.string(m.t['/bUsx8']),
            'aria-label': !1,
            shouldShow: !y && O,
            children: (e) =>
                (0, r.jsx)(
                    b.P3F,
                    v(_({}, S), {
                        tag: 'li',
                        onMouseEnter: () => {
                            var t;
                            d(), null == (t = e.onMouseEnter) || t.call(e);
                        },
                        onMouseLeave: () => {
                            var t;
                            p(), null == (t = e.onMouseLeave) || t.call(e);
                        },
                        onFocus: () => {
                            var t;
                            d(), null == (t = e.onMouseEnter) || t.call(e);
                        },
                        onBlur: () => {
                            var t;
                            p(), null == (t = e.onMouseLeave) || t.call(e);
                        },
                        onClick: P,
                        onKeyDown: (e) => {
                            e.key === u.R8.ENTER && P(e);
                        },
                        className: h.colorVariant,
                        children: (0, r.jsx)('div', {
                            className: o()(h.colorSwatch, {
                                [h.open]: !y,
                                [h.selected]: a === s
                            }),
                            style: {
                                backgroundColor: n.variantValue,
                                zIndex: i - a
                            },
                            children: O
                                ? (0, r.jsx)(b.kSu, {
                                      className: h.purchasedIndicator,
                                      color: x(n.variantValue)
                                  })
                                : null
                        })
                    })
                )
        });
    },
    O = (e) => {
        var t, n;
        let { variantGroupProduct: l, className: a, previewingVariantIndexProps: i, setIsHoveringOnSwitch: s, minimal: d, purchases: g, alternativeBackgroundColor: x } = e,
            O = (0, f.o)(l, g),
            j = i.previewingVariantIndex,
            k = null == (t = l.variants) ? void 0 : t[O],
            S = null !== j ? (null == (n = l.variants) ? void 0 : n[j]) : void 0,
            P = (0, p.Z)('shop-variants-group-'.concat(l.storeListingId), u.hy.HORIZONTAL);
        if (null == k) return null;
        let E = null != S ? S.variantLabel : null == k ? void 0 : k.variantLabel;
        return (0, r.jsx)(c.bG, {
            navigator: P,
            children: (0, r.jsx)(c.SJ, {
                children: (e) => {
                    var t,
                        { ref: n } = e,
                        c = C(e, ['ref']);
                    return (0, r.jsxs)(
                        'div',
                        v(_({ ref: n }, c), {
                            className: o()(h.variantsPanel, a, {
                                [h.minimalState]: d,
                                [h.alternativeColor]: x
                            }),
                            onMouseEnter: () => (null == s ? void 0 : s(!0)),
                            onMouseLeave: () => (null == s ? void 0 : s(!1)),
                            children: [
                                (0, r.jsx)('ol', {
                                    className: h.variantsList,
                                    children:
                                        null == (t = l.variants)
                                            ? void 0
                                            : t.map((e, t) => {
                                                  var n, a;
                                                  return (0, r.jsx)(
                                                      y,
                                                      {
                                                          variantGroupProduct: l,
                                                          variant: e,
                                                          variantIndex: t,
                                                          selectedVariantIndex: O,
                                                          totalVariants: null != (a = null == (n = l.variants) ? void 0 : n.length) ? a : 0,
                                                          onEnter: () => i.handleEntering(t),
                                                          onLeave: i.handleLeaving,
                                                          minimal: d
                                                      },
                                                      t
                                                  );
                                              })
                                }),
                                (0, r.jsx)(b.Text, {
                                    variant: 'text-xs/medium',
                                    color: 'text-secondary',
                                    className: h.variantLabel,
                                    children: d ? m.NW.string(m.t.wbgaj4) : E
                                })
                            ]
                        })
                    );
                }
            })
        });
    };
