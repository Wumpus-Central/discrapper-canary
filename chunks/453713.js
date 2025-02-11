n.d(t, { P: () => _ });
var l = n(200651),
    r = n(192379),
    i = n(120356),
    s = n.n(i),
    a = n(404759),
    o = n.n(a),
    d = n(91192),
    c = n(536895),
    u = n(866442),
    C = n(481060),
    h = n(209613),
    p = n(429368),
    m = n(724994),
    f = n(388032),
    g = n(240314);
let x = o()((e) => {
        let t = !1;
        if (null != e && (0, u.FX)(e)) {
            let n = (0, u._i)(e);
            null != n && (t = 0.3 >= (0, u.Bd)(n));
        }
        return t ? C.TVs.unsafe_rawColors.PRIMARY_700.css : C.TVs.unsafe_rawColors.PRIMARY_200.css;
    }),
    b = (e) => {
        let { variantGroupProduct: t, variant: n, variantIndex: i, totalVariants: a, selectedVariantIndex: o, onEnter: u, onLeave: h, minimal: b } = e,
            { isPurchased: _ } = (0, m.L)(n),
            { onFocus: v, ...j } = (0, d.JA)('shop-variants-group-'.concat(t.storeListingId, '-').concat(i)),
            k = r.useCallback(
                (e) => {
                    e.preventDefault(), e.stopPropagation(), (0, p.$)(t, i), v();
                },
                [v, t, i]
            );
        return (0, l.jsx)(C.ua7, {
            text: f.intl.string(f.t['/bUsx8']),
            'aria-label': !1,
            shouldShow: !b && _,
            children: (e) =>
                (0, l.jsx)(C.P3F, {
                    ...j,
                    tag: 'li',
                    onMouseEnter: () => {
                        var t;
                        u(), null === (t = e.onMouseEnter) || void 0 === t || t.call(e);
                    },
                    onMouseLeave: () => {
                        var t;
                        h(), null === (t = e.onMouseLeave) || void 0 === t || t.call(e);
                    },
                    onFocus: () => {
                        var t;
                        u(), null === (t = e.onMouseEnter) || void 0 === t || t.call(e);
                    },
                    onBlur: () => {
                        var t;
                        h(), null === (t = e.onMouseLeave) || void 0 === t || t.call(e);
                    },
                    onClick: k,
                    onKeyDown: (e) => {
                        e.key === c.R8.ENTER && k(e);
                    },
                    className: g.colorVariant,
                    children: (0, l.jsx)('div', {
                        className: s()(g.colorSwatch, {
                            [g.open]: !b,
                            [g.selected]: i === o
                        }),
                        style: {
                            backgroundColor: n.variantValue,
                            zIndex: a - i
                        },
                        children: _
                            ? (0, l.jsx)(C.kSu, {
                                  className: g.purchasedIndicator,
                                  color: x(n.variantValue)
                              })
                            : null
                    })
                })
        });
    },
    _ = (e) => {
        var t, n;
        let { variantGroupProduct: r, className: i, previewingVariantIndexProps: a, setIsHoveringOnSwitch: o, minimal: u, purchases: m, alternativeBackgroundColor: x } = e,
            _ = (0, p.o)(r, m),
            v = a.previewingVariantIndex,
            j = null === (t = r.variants) || void 0 === t ? void 0 : t[_],
            k = null !== v ? (null === (n = r.variants) || void 0 === n ? void 0 : n[v]) : void 0,
            E = (0, h.Z)('shop-variants-group-'.concat(r.storeListingId), c.hy.HORIZONTAL);
        if (null == j) return null;
        let L = null != k ? k.variantLabel : null == j ? void 0 : j.variantLabel;
        return (0, l.jsx)(d.bG, {
            navigator: E,
            children: (0, l.jsx)(d.SJ, {
                children: (e) => {
                    var t;
                    let { ref: n, ...d } = e;
                    return (0, l.jsxs)('div', {
                        ref: n,
                        ...d,
                        className: s()(g.variantsPanel, i, {
                            [g.minimalState]: u,
                            [g.alternativeColor]: x
                        }),
                        onMouseEnter: () => (null == o ? void 0 : o(!0)),
                        onMouseLeave: () => (null == o ? void 0 : o(!1)),
                        children: [
                            (0, l.jsx)('ol', {
                                className: g.variantsList,
                                children:
                                    null === (t = r.variants) || void 0 === t
                                        ? void 0
                                        : t.map((e, t) => {
                                              var n, i;
                                              return (0, l.jsx)(
                                                  b,
                                                  {
                                                      variantGroupProduct: r,
                                                      variant: e,
                                                      variantIndex: t,
                                                      selectedVariantIndex: _,
                                                      totalVariants: null !== (i = null === (n = r.variants) || void 0 === n ? void 0 : n.length) && void 0 !== i ? i : 0,
                                                      onEnter: () => a.handleEntering(t),
                                                      onLeave: a.handleLeaving,
                                                      minimal: u
                                                  },
                                                  t
                                              );
                                          })
                            }),
                            (0, l.jsx)(C.Text, {
                                variant: 'text-xs/medium',
                                color: 'text-secondary',
                                className: g.variantLabel,
                                children: u ? f.intl.string(f.t.wbgaj4) : L
                            })
                        ]
                    });
                }
            })
        });
    };
