n.d(t, { P: () => x });
var r = n(255367),
    l = n(73800),
    a = n(120356),
    i = n.n(a),
    o = n(404759),
    s = n.n(o),
    c = n(91192),
    u = n(536895),
    d = n(866442),
    p = n(481060),
    f = n(209613),
    g = n(429368),
    b = n(724994),
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
let O = s()((e) => {
        let t = !1;
        if (null != e && (0, d.FX)(e)) {
            let n = (0, d._i)(e);
            null != n && (t = 0.3 >= (0, d.Bd)(n));
        }
        return t ? p.TVs.unsafe_rawColors.PRIMARY_700.css : p.TVs.unsafe_rawColors.PRIMARY_200.css;
    }),
    S = (e) => {
        let { variantGroupProduct: t, variant: n, variantIndex: a, totalVariants: o, selectedVariantIndex: s, onEnter: d, onLeave: f, minimal: S } = e,
            { isPurchased: x } = (0, b.L)(n),
            E = (0, c.JA)('shop-variants-group-'.concat(t.storeListingId, '-').concat(a)),
            { onFocus: y } = E,
            j = v(E, ['onFocus']),
            P = l.useCallback(
                (e) => {
                    e.preventDefault(), e.stopPropagation(), (0, g.$)(t, a), y();
                },
                [y, t, a]
            );
        return (0, r.jsx)(p.ua7, {
            text: h.intl.string(h.t['6cfuDg']),
            'aria-label': !1,
            shouldShow: !S && x,
            children: (e) =>
                (0, r.jsx)(
                    p.P3F,
                    C(_({}, j), {
                        tag: 'li',
                        onMouseEnter: () => {
                            var t;
                            d(), null == (t = e.onMouseEnter) || t.call(e);
                        },
                        onMouseLeave: () => {
                            var t;
                            f(), null == (t = e.onMouseLeave) || t.call(e);
                        },
                        onFocus: () => {
                            var t;
                            d(), null == (t = e.onMouseEnter) || t.call(e);
                        },
                        onBlur: () => {
                            var t;
                            f(), null == (t = e.onMouseLeave) || t.call(e);
                        },
                        onClick: P,
                        onKeyDown: (e) => {
                            e.key === u.R8.ENTER && P(e);
                        },
                        className: m.colorVariant,
                        children: (0, r.jsx)('div', {
                            className: i()(m.colorSwatch, {
                                [m.open]: !S,
                                [m.selected]: a === s
                            }),
                            style: {
                                backgroundColor: n.variantValue,
                                zIndex: o - a
                            },
                            children: x
                                ? (0, r.jsx)(p.kSu, {
                                      className: m.purchasedIndicator,
                                      color: O(n.variantValue)
                                  })
                                : null
                        })
                    })
                )
        });
    },
    x = (e) => {
        var t, n;
        let { variantGroupProduct: l, className: a, previewingVariantIndexProps: o, setIsHoveringOnSwitch: s, minimal: d, selectedVariantIndex: g, alternativeBackgroundColor: b } = e,
            O = o.previewingVariantIndex,
            x = null == (t = l.variants) ? void 0 : t[g],
            E = null !== O ? (null == (n = l.variants) ? void 0 : n[O]) : void 0,
            y = (0, f.Z)('shop-variants-group-'.concat(l.storeListingId), u.hy.HORIZONTAL);
        if (null == x) return null;
        let j = null != E ? E.variantLabel : null == x ? void 0 : x.variantLabel;
        return (0, r.jsx)(c.bG, {
            navigator: y,
            children: (0, r.jsx)(c.SJ, {
                children: (e) => {
                    var t,
                        { ref: n } = e,
                        c = v(e, ['ref']);
                    return (0, r.jsxs)(
                        'div',
                        C(_({ ref: n }, c), {
                            className: i()(m.variantsPanel, a, {
                                [m.minimalState]: d,
                                [m.alternativeColor]: b
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
                                                  var n, a;
                                                  return (0, r.jsx)(
                                                      S,
                                                      {
                                                          variantGroupProduct: l,
                                                          variant: e,
                                                          variantIndex: t,
                                                          selectedVariantIndex: g,
                                                          totalVariants: null != (a = null == (n = l.variants) ? void 0 : n.length) ? a : 0,
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
                                    children: d ? h.intl.string(h.t.wbgaj4) : j
                                })
                            ]
                        })
                    );
                }
            })
        });
    };
