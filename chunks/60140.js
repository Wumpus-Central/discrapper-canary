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
    E = r(258245),
    m = r(561769),
    p = r(484469),
    _ = r(660183),
    h = r(105499);
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
              className: h.hm,
              children: [void 0, void 0, void 0, void 0].map((e, t) => (0, n.jsx)(p.A, {}, t)),
          })
        : (0, n.jsx)("div", {
              className: h.hm,
              children: (0, n.jsx)(m.v3.Provider, {
                  value: { flattenProductVariants: !1 },
                  children: r.map((e, t) => (0, n.jsx)(f, { item: e, index: t, prioritizedCurrency: s }, e.skuId)),
              }),
          });
}
function S(e) {
    let { isLoading: t, products: r, tab: l } = e,
        i = (0, m.Mk)(l),
        o = _.intl.string(_.t.HP8LNG);
    if ((0, u.Y)("hero_block_cards")) {
        if (t) {
            let e = [void 0, void 0, void 0, void 0].map((e, t) => t);
            return (0, n.jsx)(a.A, {
                gap: "xl",
                "aria-label": o,
                items: e,
                getItemKey: C,
                renderItem: (e) => (0, n.jsx)(p.A, {}, e),
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
                    (0, n.jsx)(f, { item: e, index: r, prioritizedCurrency: i, listItemProps: t }, e.skuId),
            }),
        });
    }
    if (t) {
        let e = [void 0, void 0, void 0, void 0].map((e, t) => t);
        return (0, n.jsx)(s.A, { gap: "xl", "aria-label": o, children: e.map((e) => (0, n.jsx)(p.A, {}, e)) });
    }
    return (0, n.jsx)(m.v3.Provider, {
        value: { flattenProductVariants: !1 },
        children: (0, n.jsx)(s.A, {
            gap: "xl",
            "aria-label": o,
            children: r.map((e, t) => (0, n.jsx)(f, { item: e, index: t, prioritizedCurrency: i }, e.skuId)),
        }),
    });
}
function f(e) {
    let { item: t, index: r, prioritizedCurrency: l, listItemProps: s } = e;
    return (0, n.jsx)(i.R9, {
        newValue: { tilePosition: r, pageSection: "top 4", categoryPosition: 0 },
        children: (0, n.jsx)(E.A, { skuId: t.skuId, prioritizedCurrency: l, listItemProps: s }),
    });
}
let I = function (e) {
    let t,
        r,
        s,
        { heroBlockRecord: a, layout: i, tab: u, isBlockLoading: E = !1 } = e,
        { products: m } =
            ((t = (0, d.A)()),
            (r = (0, c.p)()),
            (s = l.useMemo(() => (E ? [] : r(t(a.rankedSkuIds))), [E, t, a.rankedSkuIds, r])),
            { products: (0, g.X)(s) }),
        p = l.useMemo(
            () =>
                !E &&
                0 !== a.rankedSkuIds.length &&
                !(m.length > 0) &&
                a.rankedSkuIds.every((e) => o.A.getProduct(e)?.variantGroupStoreListingId != null),
            [E, a.rankedSkuIds, m.length],
        ),
        _ = E || p,
        h = l.useMemo(() => m.filter((e) => null != o.A.getCategoryForProduct(e.skuId)), [m]);
    switch (i) {
        case "feed":
            return (0, n.jsx)(L, { isLoading: _, products: h, tab: u });
        case "hscroll":
            return (0, n.jsx)(S, { isLoading: _, products: h, tab: u });
    }
};
