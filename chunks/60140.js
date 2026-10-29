n.d(t, { A: () => _ });
var r = n(477900),
    l = n(582128),
    s = n(197935),
    a = n(440938),
    o = n(590180),
    i = n(511265),
    c = n(313276),
    u = n(206077),
    d = n(905276),
    p = n(561769),
    m = n(484469),
    g = n(105292),
    h = n(105499);
let E = { flattenProductVariants: !1 };
function C(e) {
    return String(e);
}
function f(e) {
    return e.skuId;
}
function v(e) {
    let { isLoading: t, products: n, tab: l } = e,
        s = (0, p.Mk)(l);
    return t
        ? (0, r.jsx)("div", {
              className: h.hm,
              children: [void 0, void 0, void 0, void 0].map((e, t) => (0, r.jsx)(m.A, {}, t)),
          })
        : (0, r.jsx)("div", {
              className: h.hm,
              children: (0, r.jsx)(p.v3.Provider, {
                  value: E,
                  children: n.map((e, t) => (0, r.jsx)(y, { item: e, index: t, prioritizedCurrency: s }, e.skuId)),
              }),
          });
}
function x(e) {
    let { isLoading: t, products: n, tab: l } = e,
        a = (0, p.Mk)(l),
        o = g.intl.string(g.t.HP8LNG);
    if (t) {
        let e = [void 0, void 0, void 0, void 0].map((e, t) => t);
        return (0, r.jsx)(s.A, {
            gap: "xl",
            "aria-label": o,
            items: e,
            getItemKey: C,
            renderItem: (e) => (0, r.jsx)(m.A, {}, e),
        });
    }
    return (0, r.jsx)(p.v3.Provider, {
        value: E,
        children: (0, r.jsx)(s.A, {
            gap: "xl",
            "aria-label": o,
            items: n,
            getItemKey: f,
            maintainFocusOnReorder: !0,
            renderItem: (e, t, n) =>
                (0, r.jsx)(y, { item: e, index: n, prioritizedCurrency: a, listItemProps: t }, e.skuId),
        }),
    });
}
function y(e) {
    let { item: t, index: n, prioritizedCurrency: l, listItemProps: s } = e;
    return (0, r.jsx)(a.R9, {
        newValue: { tilePosition: n, pageSection: "top 4", categoryPosition: 0 },
        children: (0, r.jsx)(d.A, { skuId: t.skuId, prioritizedCurrency: l, listItemProps: s }),
    });
}
let _ = function (e) {
    let t,
        n,
        s,
        { heroBlockRecord: a, layout: d, tab: p, isBlockLoading: m = !1 } = e,
        { products: g } =
            ((t = (0, c.A)()),
            (n = (0, i.p)()),
            (s = l.useMemo(() => (m ? [] : n(t(a.rankedSkuIds))), [m, t, a.rankedSkuIds, n])),
            { products: (0, u.X)(s) }),
        h = l.useMemo(
            () =>
                !m &&
                0 !== a.rankedSkuIds.length &&
                !(g.length > 0) &&
                a.rankedSkuIds.every((e) => o.A.getProduct(e)?.variantGroupStoreListingId != null),
            [m, a.rankedSkuIds, g.length],
        ),
        E = m || h,
        C = l.useMemo(() => g.filter((e) => null != o.A.getCategoryForProduct(e.skuId)), [g]);
    switch (d) {
        case "feed":
            return (0, r.jsx)(v, { isLoading: E, products: C, tab: p });
        case "hscroll":
            return (0, r.jsx)(x, { isLoading: E, products: C, tab: p });
    }
};
