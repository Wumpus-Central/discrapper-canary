var l = n(477900),
    r = n(582128),
    s = n(855986),
    a = n(151869),
    i = n(857512),
    o = n(590180),
    u = n(436912),
    c = n(195271),
    d = n(511265),
    m = n(654512),
    g = n(313276),
    h = n(206077),
    p = n(987421),
    f = n(561769),
    E = n(484469),
    x = n(687461),
    v = n(579720),
    C = n(758836),
    A = n(792996),
    y = n(105499);
let _ = { flattenProductVariants: !1 };
function b(e) {
    return String(e);
}
function S(e) {
    return e.skuId;
}
function L(e) {
    let { isLoading: t, products: n, tab: r } = e,
        s = (0, f.Mk)(r);
    return t
        ? (0, l.jsx)("div", {
              className: y.hm,
              children: [void 0, void 0, void 0, void 0].map((e, t) => (0, l.jsx)(E.A, {}, t)),
          })
        : (0, l.jsx)("div", {
              className: y.hm,
              children: (0, l.jsx)(f.v3.Provider, {
                  value: _,
                  children: n.map((e, t) => (0, l.jsx)(O, { item: e, index: t, prioritizedCurrency: s }, e.skuId)),
              }),
          });
}
function I(e) {
    let { isLoading: t, products: n, tab: r } = e,
        s = (0, f.Mk)(r),
        i = A.intl.string(A.t.HP8LNG);
    if (t) {
        let e = [void 0, void 0, void 0, void 0].map((e, t) => t);
        return (0, l.jsx)(a.A, {
            gap: "xl",
            "aria-label": i,
            items: e,
            getItemKey: b,
            renderItem: (e) => (0, l.jsx)(E.A, {}, e),
        });
    }
    return (0, l.jsx)(f.v3.Provider, {
        value: _,
        children: (0, l.jsx)(a.A, {
            gap: "xl",
            "aria-label": i,
            items: n,
            getItemKey: S,
            maintainFocusOnReorder: !0,
            renderItem: (e, t, n) =>
                (0, l.jsx)(O, { item: e, index: n, prioritizedCurrency: s, listItemProps: t }, e.skuId),
        }),
    });
}
function k(e) {
    let { tileProps: t } = e;
    return String(t.day);
}
function j(e, t) {
    let { tileProps: n } = e;
    return (0, l.jsx)(x.A, { ...n, aspectRatio: "auto", tag: "div", listItemProps: t });
}
function N(e) {
    let { collectionId: t, sequencedOffers: n } = e,
        r = (0, s.bG)([o.A], () => o.A.getCategory(t)?.products),
        u = (0, m.A)(t),
        c = (0, v.A)(n, r, u);
    return (0, l.jsx)(i.R9, {
        newValue: { pageSection: "top 4", categoryPosition: 0 },
        children: (0, l.jsx)(f.v3.Provider, {
            value: _,
            children: (0, l.jsx)(a.A, {
                gap: "xl",
                "aria-label": A.intl.string(A.t.HP8LNG),
                items: c,
                getItemKey: k,
                itemClassName: y.xo,
                renderItem: j,
            }),
        }),
    });
}
function O(e) {
    let { item: t, index: n, prioritizedCurrency: r, listItemProps: s } = e;
    return (0, l.jsx)(i.R9, {
        newValue: { tilePosition: n, pageSection: "top 4", categoryPosition: 0 },
        children: (0, l.jsx)(p.A, { skuId: t.skuId, prioritizedCurrency: r, listItemProps: s }),
    });
}
n.d(
    t,
    {},
    {
        A: function (e) {
            let t,
                n,
                a,
                { heroBlockRecord: i, layout: m, tab: p, isBlockLoading: f = !1 } = e,
                { products: E } =
                    ((t = (0, g.A)()),
                    (n = (0, d.p)()),
                    (a = r.useMemo(() => (f ? [] : n(t(i.rankedSkuIds))), [f, t, i.rankedSkuIds, n])),
                    { products: (0, h.X)(a) }),
                x = i.categorySkuId,
                v = (0, s.bG)([u.A], () => (null != x ? u.A.getSequencedOffersForCollection(x) : null)),
                A = r.useMemo(
                    () =>
                        !f &&
                        0 !== i.rankedSkuIds.length &&
                        !(E.length > 0) &&
                        i.rankedSkuIds.every((e) => o.A.getProduct(e)?.variantGroupStoreListingId != null),
                    [f, i.rankedSkuIds, E.length],
                ),
                y = f || A,
                _ = r.useMemo(() => E.filter((e) => null != o.A.getCategoryForProduct(e.skuId)), [E]),
                b = "hscroll" === m && p === C.G2.HOME && !y && null != x && null != v && v.promotions.length > 0,
                S = (0, c.t)("shop_home_carousel", { autoTrackExposure: b }).enabled;
            switch (m) {
                case "feed":
                    return (0, l.jsx)(L, { isLoading: y, products: _, tab: p });
                case "hscroll":
                    if (b && S) return (0, l.jsx)(N, { collectionId: x, sequencedOffers: v });
                    return (0, l.jsx)(I, { isLoading: y, products: _, tab: p });
            }
        },
    },
);
