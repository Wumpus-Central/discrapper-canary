var l = n(477900),
    r = n(582128),
    s = n(151869),
    a = n(857512),
    i = n(590180),
    o = n(511265),
    u = n(313276),
    c = n(206077),
    d = n(987421),
    m = n(561769),
    g = n(484469),
    h = n(792996),
    p = n(105499);
let f = { flattenProductVariants: !1 };
function x(e) {
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
                  value: f,
                  children: n.map((e, t) => (0, l.jsx)(_, { item: e, index: t, prioritizedCurrency: s }, e.skuId)),
              }),
          });
}
function C(e) {
    let { isLoading: t, products: n, tab: r } = e,
        a = (0, m.Mk)(r),
        i = h.intl.string(h.t.HP8LNG);
    if (t) {
        let e = [void 0, void 0, void 0, void 0].map((e, t) => t);
        return (0, l.jsx)(s.A, {
            gap: "xl",
            "aria-label": i,
            items: e,
            getItemKey: x,
            renderItem: (e) => (0, l.jsx)(g.A, {}, e),
        });
    }
    return (0, l.jsx)(m.v3.Provider, {
        value: f,
        children: (0, l.jsx)(s.A, {
            gap: "xl",
            "aria-label": i,
            items: n,
            getItemKey: E,
            maintainFocusOnReorder: !0,
            renderItem: (e, t, n) =>
                (0, l.jsx)(_, { item: e, index: n, prioritizedCurrency: a, listItemProps: t }, e.skuId),
        }),
    });
}
function _(e) {
    let { item: t, index: n, prioritizedCurrency: r, listItemProps: s } = e;
    return (0, l.jsx)(a.R9, {
        newValue: { tilePosition: n, pageSection: "top 4", categoryPosition: 0 },
        children: (0, l.jsx)(d.A, { skuId: t.skuId, prioritizedCurrency: r, listItemProps: s }),
    });
}
n.d(
    t,
    {},
    {
        A: function (e) {
            let t,
                n,
                s,
                { heroBlockRecord: a, layout: d, tab: m, isBlockLoading: g = !1 } = e,
                { products: h } =
                    ((t = (0, u.A)()),
                    (n = (0, o.p)()),
                    (s = r.useMemo(() => (g ? [] : n(t(a.rankedSkuIds))), [g, t, a.rankedSkuIds, n])),
                    { products: (0, c.X)(s) }),
                p = r.useMemo(
                    () =>
                        !g &&
                        0 !== a.rankedSkuIds.length &&
                        !(h.length > 0) &&
                        a.rankedSkuIds.every((e) => i.A.getProduct(e)?.variantGroupStoreListingId != null),
                    [g, a.rankedSkuIds, h.length],
                ),
                f = g || p,
                x = r.useMemo(() => h.filter((e) => null != i.A.getCategoryForProduct(e.skuId)), [h]);
            switch (d) {
                case "feed":
                    return (0, l.jsx)(v, { isLoading: f, products: x, tab: m });
                case "hscroll":
                    return (0, l.jsx)(C, { isLoading: f, products: x, tab: m });
            }
        },
    },
);
