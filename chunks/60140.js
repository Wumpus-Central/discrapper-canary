r.d(t, { A: () => A });
var n = r(477900),
    l = r(582128),
    s = r(449543),
    a = r(197935),
    i = r(440938),
    o = r(590180),
    u = r(879221),
    c = r(511265),
    d = r(313276),
    g = r(206077),
    p = r(258245),
    m = r(561769),
    h = r(484469),
    E = r(375708),
    _ = r(105499);
function S(e) {
    return String(e);
}
function x(e) {
    return e.skuId;
}
function I(e) {
    let { isLoading: t, products: r, tab: l } = e,
        s = (0, m.Mk)(l);
    return t
        ? (0, n.jsx)("div", {
              className: _.hm,
              children: [void 0, void 0, void 0, void 0].map((e, t) => (0, n.jsx)(h.A, {}, t)),
          })
        : (0, n.jsx)("div", {
              className: _.hm,
              children: (0, n.jsx)(m.v3.Provider, {
                  value: { flattenProductVariants: !1 },
                  children: r.map((e, t) => (0, n.jsx)(L, { item: e, index: t, prioritizedCurrency: s }, e.skuId)),
              }),
          });
}
function v(e) {
    let { isLoading: t, products: r, tab: l } = e,
        i = (0, m.Mk)(l),
        o = E.intl.string(E.t.HP8LNG);
    if ((0, u.O)("hero_block_cards")) {
        if (t) {
            let e = [void 0, void 0, void 0, void 0].map((e, t) => t);
            return (0, n.jsx)(a.A, {
                gap: "xl",
                "aria-label": o,
                items: e,
                getItemKey: S,
                renderItem: (e) => (0, n.jsx)(h.A, {}, e),
            });
        }
        return (0, n.jsx)(m.v3.Provider, {
            value: { flattenProductVariants: !1 },
            children: (0, n.jsx)(a.A, {
                gap: "xl",
                "aria-label": o,
                items: r,
                getItemKey: x,
                maintainFocusOnReorder: !0,
                renderItem: (e, t, r) =>
                    (0, n.jsx)(L, { item: e, index: r, prioritizedCurrency: i, listItemProps: t }, e.skuId),
            }),
        });
    }
    if (t) {
        let e = [void 0, void 0, void 0, void 0].map((e, t) => t);
        return (0, n.jsx)(s.A, { gap: "xl", "aria-label": o, children: e.map((e) => (0, n.jsx)(h.A, {}, e)) });
    }
    return (0, n.jsx)(m.v3.Provider, {
        value: { flattenProductVariants: !1 },
        children: (0, n.jsx)(s.A, {
            gap: "xl",
            "aria-label": o,
            children: r.map((e, t) => (0, n.jsx)(L, { item: e, index: t, prioritizedCurrency: i }, e.skuId)),
        }),
    });
}
function L(e) {
    let { item: t, index: r, prioritizedCurrency: l, listItemProps: s } = e;
    return (0, n.jsx)(i.R9, {
        newValue: { tilePosition: r, pageSection: "top 4", categoryPosition: 0 },
        children: (0, n.jsx)(p.A, { skuId: t.skuId, prioritizedCurrency: l, listItemProps: s }),
    });
}
let A = function (e) {
    let t,
        r,
        s,
        { heroBlockRecord: a, layout: i, tab: u, isBlockLoading: p = !1 } = e,
        { products: m } =
            ((t = (0, d.A)()),
            (r = (0, c.p)()),
            (s = l.useMemo(() => (p ? [] : r(t(a.rankedSkuIds))), [p, t, a.rankedSkuIds, r])),
            { products: (0, g.X)(s) }),
        h = l.useMemo(
            () =>
                !p &&
                0 !== a.rankedSkuIds.length &&
                !(m.length > 0) &&
                a.rankedSkuIds.every((e) => o.A.getProduct(e)?.variantGroupStoreListingId != null),
            [p, a.rankedSkuIds, m.length],
        ),
        E = p || h,
        _ = l.useMemo(() => m.filter((e) => null != o.A.getCategoryForProduct(e.skuId)), [m]);
    switch (i) {
        case "feed":
            return (0, n.jsx)(I, { isLoading: E, products: _, tab: u });
        case "hscroll":
            return (0, n.jsx)(v, { isLoading: E, products: _, tab: u });
    }
};
