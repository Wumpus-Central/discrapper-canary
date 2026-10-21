n.d(t, { A: () => L });
var r = n(477900),
    l = n(582128),
    s = n(449543),
    a = n(197935),
    o = n(440938),
    i = n(590180),
    u = n(275161),
    c = n(511265),
    d = n(313276),
    p = n(206077),
    m = n(258245),
    g = n(561769),
    h = n(484469),
    C = n(105292),
    f = n(105499);
let E = { flattenProductVariants: !1 };
function v(e) {
    return String(e);
}
function x(e) {
    return e.skuId;
}
function y(e) {
    let { isLoading: t, products: n, tab: l } = e,
        s = (0, g.Mk)(l);
    return t
        ? (0, r.jsx)("div", {
              className: f.hm,
              children: [void 0, void 0, void 0, void 0].map((e, t) => (0, r.jsx)(h.A, {}, t)),
          })
        : (0, r.jsx)("div", {
              className: f.hm,
              children: (0, r.jsx)(g.v3.Provider, {
                  value: E,
                  children: n.map((e, t) => (0, r.jsx)(I, { item: e, index: t, prioritizedCurrency: s }, e.skuId)),
              }),
          });
}
function _(e) {
    let { isLoading: t, products: n, tab: l } = e,
        o = (0, g.Mk)(l),
        i = C.intl.string(C.t.HP8LNG);
    if ((0, u.Y)("hero_block_cards")) {
        if (t) {
            let e = [void 0, void 0, void 0, void 0].map((e, t) => t);
            return (0, r.jsx)(a.A, {
                gap: "xl",
                "aria-label": i,
                items: e,
                getItemKey: v,
                renderItem: (e) => (0, r.jsx)(h.A, {}, e),
            });
        }
        return (0, r.jsx)(g.v3.Provider, {
            value: E,
            children: (0, r.jsx)(a.A, {
                gap: "xl",
                "aria-label": i,
                items: n,
                getItemKey: x,
                maintainFocusOnReorder: !0,
                renderItem: (e, t, n) =>
                    (0, r.jsx)(I, { item: e, index: n, prioritizedCurrency: o, listItemProps: t }, e.skuId),
            }),
        });
    }
    if (t) {
        let e = [void 0, void 0, void 0, void 0].map((e, t) => t);
        return (0, r.jsx)(s.A, { gap: "xl", "aria-label": i, children: e.map((e) => (0, r.jsx)(h.A, {}, e)) });
    }
    return (0, r.jsx)(g.v3.Provider, {
        value: E,
        children: (0, r.jsx)(s.A, {
            gap: "xl",
            "aria-label": i,
            children: n.map((e, t) => (0, r.jsx)(I, { item: e, index: t, prioritizedCurrency: o }, e.skuId)),
        }),
    });
}
function I(e) {
    let { item: t, index: n, prioritizedCurrency: l, listItemProps: s } = e;
    return (0, r.jsx)(o.R9, {
        newValue: { tilePosition: n, pageSection: "top 4", categoryPosition: 0 },
        children: (0, r.jsx)(m.A, { skuId: t.skuId, prioritizedCurrency: l, listItemProps: s }),
    });
}
let L = function (e) {
    let t,
        n,
        s,
        { heroBlockRecord: a, layout: o, tab: u, isBlockLoading: m = !1 } = e,
        { products: g } =
            ((t = (0, d.A)()),
            (n = (0, c.p)()),
            (s = l.useMemo(() => (m ? [] : n(t(a.rankedSkuIds))), [m, t, a.rankedSkuIds, n])),
            { products: (0, p.X)(s) }),
        h = l.useMemo(
            () =>
                !m &&
                0 !== a.rankedSkuIds.length &&
                !(g.length > 0) &&
                a.rankedSkuIds.every((e) => i.A.getProduct(e)?.variantGroupStoreListingId != null),
            [m, a.rankedSkuIds, g.length],
        ),
        C = m || h,
        f = l.useMemo(() => g.filter((e) => null != i.A.getCategoryForProduct(e.skuId)), [g]);
    switch (o) {
        case "feed":
            return (0, r.jsx)(y, { isLoading: C, products: f, tab: u });
        case "hscroll":
            return (0, r.jsx)(_, { isLoading: C, products: f, tab: u });
    }
};
