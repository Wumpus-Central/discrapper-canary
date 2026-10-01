r.d(t, { A: () => x });
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
    m = r(258245),
    _ = r(561769),
    E = r(484469),
    C = r(375708),
    p = r(105499);
function h(e) {
    return String(e);
}
function I(e) {
    return e.skuId;
}
function S(e) {
    let { isLoading: t, products: r, tab: l } = e,
        s = (0, _.Mk)(l);
    return t
        ? (0, n.jsx)("div", {
              className: p.hm,
              children: [void 0, void 0, void 0, void 0].map((e, t) => (0, n.jsx)(E.A, {}, t)),
          })
        : (0, n.jsx)("div", {
              className: p.hm,
              children: (0, n.jsx)(_.v3.Provider, {
                  value: { flattenProductVariants: !1 },
                  children: r.map((e, t) => (0, n.jsx)(A, { item: e, index: t, prioritizedCurrency: s }, e.skuId)),
              }),
          });
}
function L(e) {
    let { isLoading: t, products: r, tab: l } = e,
        i = (0, _.Mk)(l),
        o = C.intl.string(C.t.HP8LNG);
    if ((0, u.Y)("hero_block_cards")) {
        if (t) {
            let e = [void 0, void 0, void 0, void 0].map((e, t) => t);
            return (0, n.jsx)(a.A, {
                gap: "xl",
                "aria-label": o,
                items: e,
                getItemKey: h,
                renderItem: (e) => (0, n.jsx)(E.A, {}, e),
            });
        }
        return (0, n.jsx)(_.v3.Provider, {
            value: { flattenProductVariants: !1 },
            children: (0, n.jsx)(a.A, {
                gap: "xl",
                "aria-label": o,
                items: r,
                getItemKey: I,
                maintainFocusOnReorder: !0,
                renderItem: (e, t, r) =>
                    (0, n.jsx)(A, { item: e, index: r, prioritizedCurrency: i, listItemProps: t }, e.skuId),
            }),
        });
    }
    if (t) {
        let e = [void 0, void 0, void 0, void 0].map((e, t) => t);
        return (0, n.jsx)(s.A, { gap: "xl", "aria-label": o, children: e.map((e) => (0, n.jsx)(E.A, {}, e)) });
    }
    return (0, n.jsx)(_.v3.Provider, {
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
let x = function (e) {
    let t,
        r,
        s,
        { heroBlockRecord: a, layout: i, tab: u, isBlockLoading: m = !1 } = e,
        { products: _ } =
            ((t = (0, d.A)()),
            (r = (0, c.p)()),
            (s = l.useMemo(() => (m ? [] : r(t(a.rankedSkuIds))), [m, t, a.rankedSkuIds, r])),
            { products: (0, g.X)(s) }),
        E = l.useMemo(
            () =>
                !m &&
                0 !== a.rankedSkuIds.length &&
                !(_.length > 0) &&
                a.rankedSkuIds.every((e) => o.A.getProduct(e)?.variantGroupStoreListingId != null),
            [m, a.rankedSkuIds, _.length],
        ),
        C = m || E,
        p = l.useMemo(() => _.filter((e) => null != o.A.getCategoryForProduct(e.skuId)), [_]);
    switch (i) {
        case "feed":
            return (0, n.jsx)(S, { isLoading: C, products: p, tab: u });
        case "hscroll":
            return (0, n.jsx)(L, { isLoading: C, products: p, tab: u });
    }
};
