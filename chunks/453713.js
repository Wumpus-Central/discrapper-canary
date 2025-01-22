n.d(t, {
    P: function () {
        return v;
    }
});
var r = n(200651),
    i = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(404759),
    o = n.n(a),
    c = n(91192),
    d = n(536895),
    u = n(866442),
    C = n(481060),
    h = n(209613),
    p = n(429368),
    f = n(724994),
    m = n(388032),
    g = n(474083);
let b = o()((e) => {
        let t = !1;
        if (null != e && (0, u.FX)(e)) {
            let n = (0, u._i)(e);
            null != n && (t = 0.3 >= (0, u.Bd)(n));
        }
        return t ? C.tokens.unsafe_rawColors.PRIMARY_700.css : C.tokens.unsafe_rawColors.PRIMARY_200.css;
    }),
    x = (e) => {
        let { variantGroupProduct: t, variant: n, variantIndex: l, totalVariants: a, selectedVariantIndex: o, onEnter: u, onLeave: h, minimal: x } = e,
            { isPurchased: v } = (0, f.L)(n),
            { onFocus: _, ...k } = (0, c.JA)('shop-variants-group-'.concat(t.storeListingId, '-').concat(l)),
            j = i.useCallback(
                (e) => {
                    e.preventDefault(), e.stopPropagation(), (0, p.$)(t, l), _();
                },
                [_, t, l]
            );
        return (0, r.jsx)(C.Tooltip, {
            text: m.intl.string(m.t['/bUsx8']),
            'aria-label': !1,
            shouldShow: !x && v,
            children: (e) =>
                (0, r.jsx)(C.Clickable, {
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
                        e.key === d.R8.ENTER && j(e);
                    },
                    className: g.colorVariant,
                    children: (0, r.jsx)('div', {
                        className: s()(g.colorSwatch, {
                            [g.open]: !x,
                            [g.selected]: l === o
                        }),
                        style: {
                            backgroundColor: n.variantValue,
                            zIndex: a - l
                        },
                        children: v
                            ? (0, r.jsx)(C.CheckmarkSmallBoldIcon, {
                                  className: g.purchasedIndicator,
                                  color: b(n.variantValue)
                              })
                            : null
                    })
                })
        });
    },
    v = (e) => {
        var t, n;
        let { variantGroupProduct: i, className: l, previewingVariantIndexProps: a, setIsHoveringOnSwitch: o, minimal: u, purchases: f, alternativeBackgroundColor: b } = e,
            v = (0, p.o)(i, f),
            _ = a.previewingVariantIndex,
            k = null === (t = i.variants) || void 0 === t ? void 0 : t[v],
            j = null !== _ ? (null === (n = i.variants) || void 0 === n ? void 0 : n[_]) : void 0,
            E = (0, h.Z)('shop-variants-group-'.concat(i.storeListingId), d.hy.HORIZONTAL);
        if (null == k) return null;
        let L = null != j ? j.variantLabel : null == k ? void 0 : k.variantLabel;
        return (0, r.jsx)(c.bG, {
            navigator: E,
            children: (0, r.jsx)(c.SJ, {
                children: (e) => {
                    var t;
                    let { ref: n, ...c } = e;
                    return (0, r.jsxs)('div', {
                        ref: n,
                        ...c,
                        className: s()(g.variantsPanel, l, {
                            [g.minimalState]: u,
                            [g.alternativeColor]: b
                        }),
                        onMouseEnter: () => (null == o ? void 0 : o(!0)),
                        onMouseLeave: () => (null == o ? void 0 : o(!1)),
                        children: [
                            (0, r.jsx)('ol', {
                                className: g.variantsList,
                                children:
                                    null === (t = i.variants) || void 0 === t
                                        ? void 0
                                        : t.map((e, t) => {
                                              var n, l;
                                              return (0, r.jsx)(
                                                  x,
                                                  {
                                                      variantGroupProduct: i,
                                                      variant: e,
                                                      variantIndex: t,
                                                      selectedVariantIndex: v,
                                                      totalVariants: null !== (l = null === (n = i.variants) || void 0 === n ? void 0 : n.length) && void 0 !== l ? l : 0,
                                                      onEnter: () => a.handleEntering(t),
                                                      onLeave: a.handleLeaving,
                                                      minimal: u
                                                  },
                                                  t
                                              );
                                          })
                            }),
                            (0, r.jsx)(C.Text, {
                                variant: 'text-xs/medium',
                                color: 'text-secondary',
                                className: g.variantLabel,
                                children: u ? m.intl.string(m.t.wbgaj4) : L
                            })
                        ]
                    });
                }
            })
        });
    };
