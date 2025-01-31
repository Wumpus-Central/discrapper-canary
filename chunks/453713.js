n.d(t, { P: () => v });
var r = n(200651),
    l = n(192379),
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
    g = n(474083);
let x = o()((e) => {
        let t = !1;
        if (null != e && (0, u.FX)(e)) {
            let n = (0, u._i)(e);
            null != n && (t = 0.3 >= (0, u.Bd)(n));
        }
        return t ? C.TVs.unsafe_rawColors.PRIMARY_700.css : C.TVs.unsafe_rawColors.PRIMARY_200.css;
    }),
    _ = (e) => {
        let { variantGroupProduct: t, variant: n, variantIndex: i, totalVariants: a, selectedVariantIndex: o, onEnter: u, onLeave: h, minimal: _ } = e,
            { isPurchased: v } = (0, m.L)(n),
            { onFocus: b, ...k } = (0, d.JA)('shop-variants-group-'.concat(t.storeListingId, '-').concat(i)),
            j = l.useCallback(
                (e) => {
                    e.preventDefault(), e.stopPropagation(), (0, p.$)(t, i), b();
                },
                [b, t, i]
            );
        return (0, r.jsx)(C.ua7, {
            text: f.intl.string(f.t['/bUsx8']),
            'aria-label': !1,
            shouldShow: !_ && v,
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
                    className: g.colorVariant,
                    children: (0, r.jsx)('div', {
                        className: s()(g.colorSwatch, {
                            [g.open]: !_,
                            [g.selected]: i === o
                        }),
                        style: {
                            backgroundColor: n.variantValue,
                            zIndex: a - i
                        },
                        children: v
                            ? (0, r.jsx)(C.kSu, {
                                  className: g.purchasedIndicator,
                                  color: x(n.variantValue)
                              })
                            : null
                    })
                })
        });
    },
    v = (e) => {
        var t, n;
        let { variantGroupProduct: l, className: i, previewingVariantIndexProps: a, setIsHoveringOnSwitch: o, minimal: u, purchases: m, alternativeBackgroundColor: x } = e,
            v = (0, p.o)(l, m),
            b = a.previewingVariantIndex,
            k = null === (t = l.variants) || void 0 === t ? void 0 : t[v],
            j = null !== b ? (null === (n = l.variants) || void 0 === n ? void 0 : n[b]) : void 0,
            E = (0, h.Z)('shop-variants-group-'.concat(l.storeListingId), c.hy.HORIZONTAL);
        if (null == k) return null;
        let L = null != j ? j.variantLabel : null == k ? void 0 : k.variantLabel;
        return (0, r.jsx)(d.bG, {
            navigator: E,
            children: (0, r.jsx)(d.SJ, {
                children: (e) => {
                    var t;
                    let { ref: n, ...d } = e;
                    return (0, r.jsxs)('div', {
                        ref: n,
                        ...d,
                        className: s()(g.variantsPanel, i, {
                            [g.minimalState]: u,
                            [g.alternativeColor]: x
                        }),
                        onMouseEnter: () => (null == o ? void 0 : o(!0)),
                        onMouseLeave: () => (null == o ? void 0 : o(!1)),
                        children: [
                            (0, r.jsx)('ol', {
                                className: g.variantsList,
                                children:
                                    null === (t = l.variants) || void 0 === t
                                        ? void 0
                                        : t.map((e, t) => {
                                              var n, i;
                                              return (0, r.jsx)(
                                                  _,
                                                  {
                                                      variantGroupProduct: l,
                                                      variant: e,
                                                      variantIndex: t,
                                                      selectedVariantIndex: v,
                                                      totalVariants: null !== (i = null === (n = l.variants) || void 0 === n ? void 0 : n.length) && void 0 !== i ? i : 0,
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
                                children: u ? f.intl.string(f.t.wbgaj4) : L
                            })
                        ]
                    });
                }
            })
        });
    };
