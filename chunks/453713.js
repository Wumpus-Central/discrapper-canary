n.d(t, { P: () => v });
var l = n(200651),
    r = n(192379),
    i = n(120356),
    a = n.n(i),
    s = n(404759),
    o = n.n(s),
    d = n(91192),
    c = n(536895),
    u = n(866442),
    C = n(481060),
    h = n(209613),
    m = n(429368),
    p = n(724994),
    g = n(388032),
    f = n(457985);
let x = o()((e) => {
        let t = !1;
        if (null != e && (0, u.FX)(e)) {
            let n = (0, u._i)(e);
            null != n && (t = 0.3 >= (0, u.Bd)(n));
        }
        return t ? C.TVs.unsafe_rawColors.PRIMARY_700.css : C.TVs.unsafe_rawColors.PRIMARY_200.css;
    }),
    b = (e) => {
        let { variantGroupProduct: t, variant: n, variantIndex: i, totalVariants: s, selectedVariantIndex: o, onEnter: u, onLeave: h, minimal: b } = e,
            { isPurchased: v } = (0, p.L)(n),
            { onFocus: _, ...j } = (0, d.JA)('shop-variants-group-'.concat(t.storeListingId, '-').concat(i)),
            k = r.useCallback(
                (e) => {
                    e.preventDefault(), e.stopPropagation(), (0, m.$)(t, i), _();
                },
                [_, t, i]
            );
        return (0, l.jsx)(C.ua7, {
            text: g.intl.string(g.t['/bUsx8']),
            'aria-label': !1,
            shouldShow: !b && v,
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
                    className: f.colorVariant,
                    children: (0, l.jsx)('div', {
                        className: a()(f.colorSwatch, {
                            [f.open]: !b,
                            [f.selected]: i === o
                        }),
                        style: {
                            backgroundColor: n.variantValue,
                            zIndex: s - i
                        },
                        children: v
                            ? (0, l.jsx)(C.kSu, {
                                  className: f.purchasedIndicator,
                                  color: x(n.variantValue)
                              })
                            : null
                    })
                })
        });
    },
    v = (e) => {
        var t, n;
        let { variantGroupProduct: r, className: i, previewingVariantIndexProps: s, setIsHoveringOnSwitch: o, minimal: u, purchases: p, alternativeBackgroundColor: x } = e,
            v = (0, m.o)(r, p),
            _ = s.previewingVariantIndex,
            j = null === (t = r.variants) || void 0 === t ? void 0 : t[v],
            k = null !== _ ? (null === (n = r.variants) || void 0 === n ? void 0 : n[_]) : void 0,
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
                        className: a()(f.variantsPanel, i, {
                            [f.minimalState]: u,
                            [f.alternativeColor]: x
                        }),
                        onMouseEnter: () => (null == o ? void 0 : o(!0)),
                        onMouseLeave: () => (null == o ? void 0 : o(!1)),
                        children: [
                            (0, l.jsx)('ol', {
                                className: f.variantsList,
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
                                                      selectedVariantIndex: v,
                                                      totalVariants: null !== (i = null === (n = r.variants) || void 0 === n ? void 0 : n.length) && void 0 !== i ? i : 0,
                                                      onEnter: () => s.handleEntering(t),
                                                      onLeave: s.handleLeaving,
                                                      minimal: u
                                                  },
                                                  t
                                              );
                                          })
                            }),
                            (0, l.jsx)(C.Text, {
                                variant: 'text-xs/medium',
                                color: 'text-secondary',
                                className: f.variantLabel,
                                children: u ? g.intl.string(g.t.wbgaj4) : L
                            })
                        ]
                    });
                }
            })
        });
    };
