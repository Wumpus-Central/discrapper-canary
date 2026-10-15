r.d(t, { A: () => I });
var n = r(477900),
    l = r(582128),
    s = r(449543),
    a = r(197935),
    i = r(440938),
    o = r(590180),
    u = r(275161),
    c = r(511265),
    d = r(313276),
    g = r(206077),
    h = r(258245),
    m = r(561769),
    E = r(484469),
    p = r(105292),
    _ = r(105499);
function C(e) {
    return String(e);
}
function v(e) {
    return e.skuId;
}
function L(e) {
    let { isLoading: t, products: r, tab: l } = e,
        s = (0, m.Mk)(l);
    return t
        ? (0, n.jsx)("div", {
              className: _.hm,
              children: [void 0, void 0, void 0, void 0].map((e, t) => (0, n.jsx)(E.A, {}, t)),
          })
        : (0, n.jsx)("div", {
              className: _.hm,
              children: (0, n.jsx)(m.v3.Provider, {
                  value: { flattenProductVariants: !1 },
                  children: r.map((e, t) => (0, n.jsx)(S, { item: e, index: t, prioritizedCurrency: s }, e.skuId)),
              }),
          });
}
function f(e) {
    let { isLoading: t, products: r, tab: l } = e,
        i = (0, m.Mk)(l),
        o = p.intl.string(p.t.HP8LNG);
    if ((0, u.Y)("hero_block_cards")) {
        if (t) {
            let e = [void 0, void 0, void 0, void 0].map((e, t) => t);
            return (0, n.jsx)(a.A, {
                gap: "xl",
                "aria-label": o,
                items: e,
                getItemKey: C,
                renderItem: (e) => (0, n.jsx)(E.A, {}, e),
            });
        }
        return (0, n.jsx)(m.v3.Provider, {
            value: { flattenProductVariants: !1 },
            children: (0, n.jsx)(a.A, {
                gap: "xl",
                "aria-label": o,
                items: r,
                getItemKey: v,
                maintainFocusOnReorder: !0,
                renderItem: (e, t, r) =>
                    (0, n.jsx)(S, { item: e, index: r, prioritizedCurrency: i, listItemProps: t }, e.skuId),
            }),
        });
    }
    if (t) {
        let e = [void 0, void 0, void 0, void 0].map((e, t) => t);
        return (0, n.jsx)(s.A, { gap: "xl", "aria-label": o, children: e.map((e) => (0, n.jsx)(E.A, {}, e)) });
    }
    return (0, n.jsx)(m.v3.Provider, {
        value: { flattenProductVariants: !1 },
        children: (0, n.jsx)(s.A, {
            gap: "xl",
            "aria-label": o,
            children: r.map((e, t) => (0, n.jsx)(S, { item: e, index: t, prioritizedCurrency: i }, e.skuId)),
        }),
    });
}
function S(e) {
    let { item: t, index: r, prioritizedCurrency: l, listItemProps: s } = e;
    return (0, n.jsx)(i.R9, {
        newValue: { tilePosition: r, pageSection: "top 4", categoryPosition: 0 },
        children: (0, n.jsx)(h.A, { skuId: t.skuId, prioritizedCurrency: l, listItemProps: s }),
    });
}
let I = function (e) {
    let t,
        r,
        s,
        { heroBlockRecord: a, layout: i, tab: u, isBlockLoading: h = !1 } = e,
        { products: m } =
            ((t = (0, d.A)()),
            (r = (0, c.p)()),
            (s = l.useMemo(() => (h ? [] : r(t(a.rankedSkuIds))), [h, t, a.rankedSkuIds, r])),
            { products: (0, g.X)(s) }),
        E = l.useMemo(
            () =>
                !h &&
                0 !== a.rankedSkuIds.length &&
                !(m.length > 0) &&
                a.rankedSkuIds.every((e) => o.A.getProduct(e)?.variantGroupStoreListingId != null),
            [h, a.rankedSkuIds, m.length],
        ),
        p = h || E,
        _ = l.useMemo(() => m.filter((e) => null != o.A.getCategoryForProduct(e.skuId)), [m]);
    switch (i) {
        case "feed":
            return (0, n.jsx)(L, { isLoading: p, products: _, tab: u });
        case "hscroll":
            return (0, n.jsx)(f, { isLoading: p, products: _, tab: u });
    }
};
