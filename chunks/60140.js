r.d(t, { A: () => I });
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
    m = r(258245),
    p = r(561769),
    h = r(484469),
    E = r(375708),
    S = r(105499);
function x(e) {
    return String(e);
}
function v(e) {
    return e.skuId;
}
function C(e) {
    let { isLoading: t, products: r, tab: l } = e,
        s = (0, p.Mk)(l);
    return t
        ? (0, n.jsx)("div", {
              className: S.hm,
              children: [void 0, void 0, void 0, void 0].map((e, t) => (0, n.jsx)(h.A, {}, t)),
          })
        : (0, n.jsx)("div", {
              className: S.hm,
              children: (0, n.jsx)(p.v3.Provider, {
                  value: { flattenProductVariants: !1 },
                  children: r.map((e, t) => (0, n.jsx)(A, { item: e, index: t, prioritizedCurrency: s }, e.skuId)),
              }),
          });
}
function _(e) {
    let { isLoading: t, products: r, tab: l } = e,
        i = (0, p.Mk)(l),
        o = E.intl.string(E.t.HP8LNG);
    if ((0, u.O)("hero_block_cards")) {
        if (t) {
            let e = [void 0, void 0, void 0, void 0].map((e, t) => t);
            return (0, n.jsx)(a.A, {
                gap: "xl",
                "aria-label": o,
                items: e,
                getItemKey: x,
                renderItem: (e) => (0, n.jsx)(h.A, {}, e),
            });
        }
        return (0, n.jsx)(p.v3.Provider, {
            value: { flattenProductVariants: !1 },
            children: (0, n.jsx)(a.A, {
                gap: "xl",
                "aria-label": o,
                items: r,
                getItemKey: v,
                maintainFocusOnReorder: !0,
                renderItem: (e, t, r) =>
                    (0, n.jsx)(A, { item: e, index: r, prioritizedCurrency: i, listItemProps: t }, e.skuId),
            }),
        });
    }
    if (t) {
        let e = [void 0, void 0, void 0, void 0].map((e, t) => t);
        return (0, n.jsx)(s.A, { gap: "xl", "aria-label": o, children: e.map((e) => (0, n.jsx)(h.A, {}, e)) });
    }
    return (0, n.jsx)(p.v3.Provider, {
        value: { flattenProductVariants: !1 },
        children: (0, n.jsx)(s.A, {
            gap: "xl",
            "aria-label": o,
            children: r.map((e, t) => (0, n.jsx)(A, { item: e, index: t, prioritizedCurrency: i }, e.skuId)),
        }),
    });
}
function A(e) {
    let { item: t, index: r, prioritizedCurrency: l, listItemProps: s } = e;
    return (0, n.jsx)(i.R9, {
        newValue: { tilePosition: r, pageSection: "top 4", categoryPosition: 0 },
        children: (0, n.jsx)(m.A, { skuId: t.skuId, prioritizedCurrency: l, listItemProps: s }),
    });
}
let I = function (e) {
    let t,
        r,
        s,
        { heroBlockRecord: a, layout: i, tab: u, isBlockLoading: m = !1 } = e,
        { products: p } =
            ((t = (0, d.A)()),
            (r = (0, c.p)()),
            (s = l.useMemo(() => (m ? [] : r(t(a.rankedSkuIds))), [m, t, a.rankedSkuIds, r])),
            { products: (0, g.X)(s) }),
        h = l.useMemo(
            () =>
                !m &&
                0 !== a.rankedSkuIds.length &&
                !(p.length > 0) &&
                a.rankedSkuIds.every((e) => o.A.getProduct(e)?.variantGroupStoreListingId != null),
            [m, a.rankedSkuIds, p.length],
        ),
        E = m || h,
        S = l.useMemo(() => p.filter((e) => null != o.A.getCategoryForProduct(e.skuId)), [p]);
    switch (i) {
        case "feed":
            return (0, n.jsx)(C, { isLoading: E, products: S, tab: u });
        case "hscroll":
            return (0, n.jsx)(_, { isLoading: E, products: S, tab: u });
    }
};
