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
    f = n(481060),
    b = n(209613),
    p = n(429368),
    g = n(724994),
    h = n(388032),
    m = n(820612);
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
function v(e, t) {
    if (null == e) return {};
    var n,
        r,
        l = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l = {},
                i = Object.keys(e);
            for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
            return l;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (r = 0; r < i.length; r++) (n = i[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
    }
    return l;
}
let O = s()((e) => {
        let t = !1;
        if (null != e && (0, d.FX)(e)) {
            let n = (0, d._i)(e);
            null != n && (t = 0.3 >= (0, d.Bd)(n));
        }
        return t ? f.TVs.unsafe_rawColors.PRIMARY_700.css : f.TVs.unsafe_rawColors.PRIMARY_200.css;
    }),
    x = (e) => {
        let { variantGroupProduct: t, variant: n, variantIndex: i, totalVariants: o, selectedVariantIndex: s, onEnter: d, onLeave: b, minimal: x } = e,
            { isPurchased: S } = (0, g.L)(n),
            j = (0, c.JA)('shop-variants-group-'.concat(t.storeListingId, '-').concat(i)),
            { onFocus: y } = j,
            E = v(j, ['onFocus']),
            P = l.useCallback(
                (e) => {
                    e.preventDefault(), e.stopPropagation(), (0, p.$)(t, i), y();
                },
                [y, t, i]
            );
        return (0, r.jsx)(f.ua7, {
            text: h.intl.string(h.t['6cfuDg']),
            'aria-label': !1,
            shouldShow: !x && S,
            children: (e) =>
                (0, r.jsx)(
                    f.P3F,
                    C(_({}, E), {
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
                        onClick: P,
                        onKeyDown: (e) => {
                            e.key === u.R8.ENTER && P(e);
                        },
                        className: m.colorVariant,
                        children: (0, r.jsx)('div', {
                            className: a()(m.colorSwatch, {
                                [m.open]: !x,
                                [m.selected]: i === s
                            }),
                            style: {
                                backgroundColor: n.variantValue,
                                zIndex: o - i
                            },
                            children: S
                                ? (0, r.jsx)(f.kSu, {
                                      className: m.purchasedIndicator,
                                      color: O(n.variantValue)
                                  })
                                : null
                        })
                    })
                )
        });
    },
    S = (e) => {
        var t, n;
        let { variantGroupProduct: l, className: i, previewingVariantIndexProps: o, setIsHoveringOnSwitch: s, minimal: d, purchases: g, alternativeBackgroundColor: O } = e,
            S = (0, p.o)(l, g),
            j = o.previewingVariantIndex,
            y = null == (t = l.variants) ? void 0 : t[S],
            E = null !== j ? (null == (n = l.variants) ? void 0 : n[j]) : void 0,
            P = (0, b.Z)('shop-variants-group-'.concat(l.storeListingId), u.hy.HORIZONTAL);
        if (null == y) return null;
        let k = null != E ? E.variantLabel : null == y ? void 0 : y.variantLabel;
        return (0, r.jsx)(c.bG, {
            navigator: P,
            children: (0, r.jsx)(c.SJ, {
                children: (e) => {
                    var t,
                        { ref: n } = e,
                        c = v(e, ['ref']);
                    return (0, r.jsxs)(
                        'div',
                        C(_({ ref: n }, c), {
                            className: a()(m.variantsPanel, i, {
                                [m.minimalState]: d,
                                [m.alternativeColor]: O
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
                                                      x,
                                                      {
                                                          variantGroupProduct: l,
                                                          variant: e,
                                                          variantIndex: t,
                                                          selectedVariantIndex: S,
                                                          totalVariants: null != (i = null == (n = l.variants) ? void 0 : n.length) ? i : 0,
                                                          onEnter: () => o.handleEntering(t),
                                                          onLeave: o.handleLeaving,
                                                          minimal: d
                                                      },
                                                      t
                                                  );
                                              })
                                }),
                                (0, r.jsx)(f.Text, {
                                    variant: 'text-xs/medium',
                                    color: 'text-secondary',
                                    className: m.variantLabel,
                                    children: d ? h.intl.string(h.t.wbgaj4) : k
                                })
                            ]
                        })
                    );
                }
            })
        });
    };
