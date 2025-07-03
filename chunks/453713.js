n.d(t, { P: () => S });
var r = n(255367),
    l = n(73800),
    i = n(120356),
    a = n.n(i),
    o = n(404759),
    s = n.n(o),
    c = n(91192),
    u = n(536895),
    d = n(866442),
    p = n(481060),
    g = n(209613),
    f = n(429368),
    h = n(724994),
    b = n(388032),
    m = n(820612);
function _(e) {
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
function C(e, t) {
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
function O(e, t) {
    if (null == e) return {};
    var n,
        r,
        l = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l = {},
                i = Object.keys(e);
            for (r = 0; r < i.length; r++) ((n = i[r]), t.indexOf(n) >= 0 || (l[n] = e[n]));
            return l;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (r = 0; r < i.length; r++) ((n = i[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]));
    }
    return l;
}
let v = s()((e) => {
        let t = !1;
        if (null != e && (0, d.FX)(e)) {
            let n = (0, d._i)(e);
            null != n && (t = 0.3 >= (0, d.Bd)(n));
        }
        return t ? p.TVs.unsafe_rawColors.PRIMARY_700.css : p.TVs.unsafe_rawColors.PRIMARY_200.css;
    }),
    E = (e) => {
        let { variantGroupProduct: t, variant: n, variantIndex: i, totalVariants: o, selectedVariantIndex: s, onEnter: d, onLeave: g, minimal: E } = e,
            { isPurchased: S } = (0, h.L)(n),
            x = (0, c.JA)('shop-variants-group-'.concat(t.storeListingId, '-').concat(i)),
            { onFocus: y } = x,
            T = O(x, ['onFocus']),
            j = l.useCallback(
                (e) => {
                    (e.preventDefault(), e.stopPropagation(), (0, f.$)(t, i), y());
                },
                [y, t, i]
            );
        return (0, r.jsx)(p.ua7, {
            text: b.intl.string(b.t['6cfuDg']),
            'aria-label': !1,
            shouldShow: !E && S,
            children: (e) =>
                (0, r.jsx)(
                    p.P3F,
                    C(_({}, T), {
                        tag: 'li',
                        onMouseEnter: () => {
                            var t;
                            (d(), null == (t = e.onMouseEnter) || t.call(e));
                        },
                        onMouseLeave: () => {
                            var t;
                            (g(), null == (t = e.onMouseLeave) || t.call(e));
                        },
                        onFocus: () => {
                            var t;
                            (d(), null == (t = e.onMouseEnter) || t.call(e));
                        },
                        onBlur: () => {
                            var t;
                            (g(), null == (t = e.onMouseLeave) || t.call(e));
                        },
                        onClick: j,
                        onKeyDown: (e) => {
                            e.key === u.R8.ENTER && j(e);
                        },
                        className: m.colorVariant,
                        children: (0, r.jsx)('div', {
                            className: a()(m.colorSwatch, {
                                [m.open]: !E,
                                [m.selected]: i === s
                            }),
                            style: {
                                backgroundColor: n.variantValue,
                                zIndex: o - i
                            },
                            children: S
                                ? (0, r.jsx)(p.kSu, {
                                      className: m.purchasedIndicator,
                                      color: v(n.variantValue)
                                  })
                                : null
                        })
                    })
                )
        });
    },
    S = (e) => {
        var t, n;
        let { variantGroupProduct: l, className: i, previewingVariantIndexProps: o, setIsHoveringOnSwitch: s, minimal: d, selectedVariantIndex: f, alternativeBackgroundColor: h } = e,
            v = o.previewingVariantIndex,
            S = null == (t = l.variants) ? void 0 : t[f],
            x = null !== v ? (null == (n = l.variants) ? void 0 : n[v]) : void 0,
            y = (0, g.Z)('shop-variants-group-'.concat(l.storeListingId), u.hy.HORIZONTAL);
        if (null == S) return null;
        let T = null != x ? x.variantLabel : null == S ? void 0 : S.variantLabel;
        return (0, r.jsx)(c.bG, {
            navigator: y,
            children: (0, r.jsx)(c.SJ, {
                children: (e) => {
                    var t,
                        { ref: n } = e,
                        c = O(e, ['ref']);
                    return (0, r.jsxs)(
                        'div',
                        C(_({ ref: n }, c), {
                            className: a()(m.variantsPanel, i, {
                                [m.minimalState]: d,
                                [m.alternativeColor]: h
                            }),
                            onMouseEnter: () => (null == s ? void 0 : s(!0)),
                            onMouseLeave: () => (null == s ? void 0 : s(!1)),
                            children: [
                                (0, r.jsx)('ol', {
                                    className: m.variantsList,
                                    children:
                                        null == (t = l.variants)
                                            ? void 0
                                            : t.map((e, t) => {
                                                  var n, i;
                                                  return (0, r.jsx)(
                                                      E,
                                                      {
                                                          variantGroupProduct: l,
                                                          variant: e,
                                                          variantIndex: t,
                                                          selectedVariantIndex: f,
                                                          totalVariants: null != (i = null == (n = l.variants) ? void 0 : n.length) ? i : 0,
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
                                    className: m.variantLabel,
                                    children: d ? b.intl.string(b.t.wbgaj4) : T
                                })
                            ]
                        })
                    );
                }
            })
        });
    };
