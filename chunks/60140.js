n.d(t, { A: () => y });
var l = n(477900),
    r = n(582128),
    s = n(197935),
    a = n(440938),
    i = n(590180),
    o = n(511265),
    c = n(313276),
    u = n(206077),
    d = n(905276),
    m = n(561769),
    g = n(484469),
    h = n(105292),
    p = n(105499);
let x = { flattenProductVariants: !1 };
function f(e) {
    return String(e);
}
function E(e) {
    return e.skuId;
}
function v(e) {
    let { isLoading: t, products: n, tab: r } = e,
        s = (0, m.Mk)(r);
    return t
        ? (0, l.jsx)("div", {
              className: p.hm,
              children: [void 0, void 0, void 0, void 0].map((e, t) => (0, l.jsx)(g.A, {}, t)),
          })
        : (0, l.jsx)("div", {
              className: p.hm,
              children: (0, l.jsx)(m.v3.Provider, {
                  value: x,
                  children: n.map((e, t) => (0, l.jsx)(C, { item: e, index: t, prioritizedCurrency: s }, e.skuId)),
              }),
          });
}
function _(e) {
    let { isLoading: t, products: n, tab: r } = e,
        a = (0, m.Mk)(r),
        i = h.intl.string(h.t.HP8LNG);
    if (t) {
        let e = [void 0, void 0, void 0, void 0].map((e, t) => t);
        return (0, l.jsx)(s.A, {
            gap: "xl",
            "aria-label": i,
            items: e,
            getItemKey: f,
            renderItem: (e) => (0, l.jsx)(g.A, {}, e),
        });
    }
    return (0, l.jsx)(m.v3.Provider, {
        value: x,
        children: (0, l.jsx)(s.A, {
            gap: "xl",
            "aria-label": i,
            items: n,
            getItemKey: E,
            maintainFocusOnReorder: !0,
            renderItem: (e, t, n) =>
                (0, l.jsx)(C, { item: e, index: n, prioritizedCurrency: a, listItemProps: t }, e.skuId),
        }),
    });
}
function C(e) {
    let { item: t, index: n, prioritizedCurrency: r, listItemProps: s } = e;
    return (0, l.jsx)(a.R9, {
        newValue: { tilePosition: n, pageSection: "top 4", categoryPosition: 0 },
        children: (0, l.jsx)(d.A, { skuId: t.skuId, prioritizedCurrency: r, listItemProps: s }),
    });
}
let y = function (e) {
    let t,
        n,
        s,
        { heroBlockRecord: a, layout: d, tab: m, isBlockLoading: g = !1 } = e,
        { products: h } =
            ((t = (0, c.A)()),
            (n = (0, o.p)()),
            (s = r.useMemo(() => (g ? [] : n(t(a.rankedSkuIds))), [g, t, a.rankedSkuIds, n])),
            { products: (0, u.X)(s) }),
        p = r.useMemo(
            () =>
                !g &&
                0 !== a.rankedSkuIds.length &&
                !(h.length > 0) &&
                a.rankedSkuIds.every((e) => i.A.getProduct(e)?.variantGroupStoreListingId != null),
            [g, a.rankedSkuIds, h.length],
        ),
        x = g || p,
        f = r.useMemo(() => h.filter((e) => null != i.A.getCategoryForProduct(e.skuId)), [h]);
    switch (d) {
        case "feed":
            return (0, l.jsx)(v, { isLoading: x, products: f, tab: m });
        case "hscroll":
            return (0, l.jsx)(_, { isLoading: x, products: f, tab: m });
    }
};
