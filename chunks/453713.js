r.d(t, { P: () => S });
var n = r(255367),
    l = r(73800),
    i = r(120356),
    o = r.n(i),
    a = r(404759),
    s = r.n(a),
    c = r(91192),
    u = r(536895),
    d = r(866442),
    p = r(481060),
    f = r(209613),
    g = r(429368),
    h = r(724994),
    b = r(388032),
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
function C(e, t) {
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
        l = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                l = {},
                i = Object.keys(e);
            for (n = 0; n < i.length; n++) ((r = i[n]), t.indexOf(r) >= 0 || (l[r] = e[r]));
            return l;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (n = 0; n < i.length; n++) ((r = i[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]));
    }
    return l;
}
let v = s()((e) => {
        let t = !1;
        if (null != e && (0, d.FX)(e)) {
            let r = (0, d._i)(e);
            null != r && (t = 0.3 >= (0, d.Bd)(r));
        }
        return t ? p.TVs.unsafe_rawColors.PRIMARY_700.css : p.TVs.unsafe_rawColors.PRIMARY_200.css;
    }),
    E = (e) => {
        let { variantGroupProduct: t, variant: r, variantIndex: i, totalVariants: a, selectedVariantIndex: s, onEnter: d, onLeave: f, minimal: E } = e,
            { isPurchased: S } = (0, h.L)(r),
            y = (0, c.JA)('shop-variants-group-'.concat(t.storeListingId, '-').concat(i)),
            { onFocus: x } = y,
            j = O(y, ['onFocus']),
            T = l.useCallback(
                (e) => {
                    (e.preventDefault(), e.stopPropagation(), (0, g.$)(t, i), x());
                },
                [x, t, i]
            );
        return (0, n.jsx)(p.ua7, {
            text: b.intl.string(b.t['6cfuDg']),
            'aria-label': !1,
            shouldShow: !E && S,
            children: (e) =>
                (0, n.jsx)(
                    p.P3F,
                    C(_({}, j), {
                        tag: 'li',
                        onMouseEnter: () => {
                            var t;
                            (d(), null == (t = e.onMouseEnter) || t.call(e));
                        },
                        onMouseLeave: () => {
                            var t;
                            (f(), null == (t = e.onMouseLeave) || t.call(e));
                        },
                        onFocus: () => {
                            var t;
                            (d(), null == (t = e.onMouseEnter) || t.call(e));
                        },
                        onBlur: () => {
                            var t;
                            (f(), null == (t = e.onMouseLeave) || t.call(e));
                        },
                        onClick: T,
                        onKeyDown: (e) => {
                            e.key === u.R8.ENTER && T(e);
                        },
                        className: m.colorVariant,
                        children: (0, n.jsx)('div', {
                            className: o()(m.colorSwatch, {
                                [m.open]: !E,
                                [m.selected]: i === s
                            }),
                            style: {
                                backgroundColor: r.variantValue,
                                zIndex: a - i
                            },
                            children: S
                                ? (0, n.jsx)(p.kSu, {
                                      className: m.purchasedIndicator,
                                      color: v(r.variantValue)
                                  })
                                : null
                        })
                    })
                )
        });
    },
    S = (e) => {
        var t, r;
        let { variantGroupProduct: l, className: i, previewingVariantIndexProps: a, setIsHoveringOnSwitch: s, minimal: d, selectedVariantIndex: g, alternativeBackgroundColor: h } = e,
            v = a.previewingVariantIndex,
            S = null == (t = l.variants) ? void 0 : t[g],
            y = null !== v ? (null == (r = l.variants) ? void 0 : r[v]) : void 0,
            x = (0, f.Z)('shop-variants-group-'.concat(l.storeListingId), u.hy.HORIZONTAL);
        if (null == S) return null;
        let j = null != y ? y.variantLabel : null == S ? void 0 : S.variantLabel;
        return (0, n.jsx)(c.bG, {
            navigator: x,
            children: (0, n.jsx)(c.SJ, {
                children: (e) => {
                    var t,
                        { ref: r } = e,
                        c = O(e, ['ref']);
                    return (0, n.jsxs)(
                        'div',
                        C(_({ ref: r }, c), {
                            className: o()(m.variantsPanel, i, {
                                [m.minimalState]: d,
                                [m.alternativeColor]: h
                            }),
                            onMouseEnter: () => (null == s ? void 0 : s(!0)),
                            onMouseLeave: () => (null == s ? void 0 : s(!1)),
                            children: [
                                (0, n.jsx)('ol', {
                                    className: m.variantsList,
                                    children:
                                        null == (t = l.variants)
                                            ? void 0
                                            : t.map((e, t) => {
                                                  var r, i;
                                                  return (0, n.jsx)(
                                                      E,
                                                      {
                                                          variantGroupProduct: l,
                                                          variant: e,
                                                          variantIndex: t,
                                                          selectedVariantIndex: g,
                                                          totalVariants: null != (i = null == (r = l.variants) ? void 0 : r.length) ? i : 0,
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
                                    className: m.variantLabel,
                                    children: d ? b.intl.string(b.t.wbgaj4) : j
                                })
                            ]
                        })
                    );
                }
            })
        });
    };
