n.d(t, { P: () => _ });
var r = n(200651),
    l = n(192379),
    a = n(120356),
    i = n.n(a),
    s = n(404759),
    o = n.n(s),
    d = n(91192),
    c = n(536895),
    u = n(866442),
    C = n(481060),
    h = n(209613),
    p = n(429368),
    m = n(724994),
    g = n(388032),
    f = n(240314);
let x = o()((e) => {
        let t = !1;
        if (null != e && (0, u.FX)(e)) {
            let n = (0, u._i)(e);
            null != n && (t = 0.3 >= (0, u.Bd)(n));
        }
        return t ? C.TVs.unsafe_rawColors.PRIMARY_700.css : C.TVs.unsafe_rawColors.PRIMARY_200.css;
    }),
    b = (e) => {
        let { variantGroupProduct: t, variant: n, variantIndex: a, totalVariants: s, selectedVariantIndex: o, onEnter: u, onLeave: h, minimal: b } = e,
            { isPurchased: _ } = (0, m.L)(n),
            { onFocus: v, ...k } = (0, d.JA)('shop-variants-group-'.concat(t.storeListingId, '-').concat(a)),
            j = l.useCallback(
                (e) => {
                    e.preventDefault(), e.stopPropagation(), (0, p.$)(t, a), v();
                },
                [v, t, a]
            );
        return (0, r.jsx)(C.ua7, {
            text: g.intl.string(g.t['/bUsx8']),
            'aria-label': !1,
            shouldShow: !b && _,
            children: (e) =>
                (0, r.jsx)(C.P3F, {
                    ...k,
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
                    onClick: j,
                    onKeyDown: (e) => {
                        e.key === c.R8.ENTER && j(e);
                    },
                    className: f.colorVariant,
                    children: (0, r.jsx)('div', {
                        className: i()(f.colorSwatch, {
                            [f.open]: !b,
                            [f.selected]: a === o
                        }),
                        style: {
                            backgroundColor: n.variantValue,
                            zIndex: s - a
                        },
                        children: _
                            ? (0, r.jsx)(C.kSu, {
                                  className: f.purchasedIndicator,
                                  color: x(n.variantValue)
                              })
                            : null
                    })
                })
        });
    },
    _ = (e) => {
        var t, n;
        let { variantGroupProduct: l, className: a, previewingVariantIndexProps: s, setIsHoveringOnSwitch: o, minimal: u, purchases: m, alternativeBackgroundColor: x } = e,
            _ = (0, p.o)(l, m),
            v = s.previewingVariantIndex,
            k = null === (t = l.variants) || void 0 === t ? void 0 : t[_],
            j = null !== v ? (null === (n = l.variants) || void 0 === n ? void 0 : n[v]) : void 0,
            L = (0, h.Z)('shop-variants-group-'.concat(l.storeListingId), c.hy.HORIZONTAL);
        if (null == k) return null;
        let E = null != j ? j.variantLabel : null == k ? void 0 : k.variantLabel;
        return (0, r.jsx)(d.bG, {
            navigator: L,
            children: (0, r.jsx)(d.SJ, {
                children: (e) => {
                    var t;
                    let { ref: n, ...d } = e;
                    return (0, r.jsxs)('div', {
                        ref: n,
                        ...d,
                        className: i()(f.variantsPanel, a, {
                            [f.minimalState]: u,
                            [f.alternativeColor]: x
                        }),
                        onMouseEnter: () => (null == o ? void 0 : o(!0)),
                        onMouseLeave: () => (null == o ? void 0 : o(!1)),
                        children: [
                            (0, r.jsx)('ol', {
                                className: f.variantsList,
                                children:
                                    null === (t = l.variants) || void 0 === t
                                        ? void 0
                                        : t.map((e, t) => {
                                              var n, a;
                                              return (0, r.jsx)(
                                                  b,
                                                  {
                                                      variantGroupProduct: l,
                                                      variant: e,
                                                      variantIndex: t,
                                                      selectedVariantIndex: _,
                                                      totalVariants: null !== (a = null === (n = l.variants) || void 0 === n ? void 0 : n.length) && void 0 !== a ? a : 0,
                                                      onEnter: () => s.handleEntering(t),
                                                      onLeave: s.handleLeaving,
                                                      minimal: u
                                                  },
                                                  t
                                              );
                                          })
                            }),
                            (0, r.jsx)(C.Text, {
                                variant: 'text-xs/medium',
                                color: 'text-secondary',
                                className: f.variantLabel,
                                children: u ? g.intl.string(g.t.wbgaj4) : E
                            })
                        ]
                    });
                }
            })
        });
    };
