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
    h = n(313276),
    g = n(206077),
    p = n(987421),
    E = n(561769),
    f = n(484469),
    x = n(687461),
    C = n(579720),
    v = n(758836),
    y = n(792996),
    A = n(105499);
let _ = { flattenProductVariants: !1 };
function L(e) {
    return String(e);
}
function b(e) {
    return e.skuId;
}
function S(e) {
    let { isLoading: t, products: n, tab: r } = e,
        s = (0, E.Mk)(r);
    return t
        ? (0, l.jsx)("div", {
              className: A.hm,
              children: [void 0, void 0, void 0, void 0].map((e, t) => (0, l.jsx)(f.A, {}, t)),
          })
        : (0, l.jsx)("div", {
              className: A.hm,
              children: (0, l.jsx)(E.v3.Provider, {
                  value: _,
                  children: n.map((e, t) => (0, l.jsx)(O, { item: e, index: t, prioritizedCurrency: s }, e.skuId)),
              }),
          });
}
function I(e) {
    let { isLoading: t, products: n, tab: r } = e,
        s = (0, E.Mk)(r),
        i = y.intl.string(y.t.HP8LNG);
    if (t) {
        let e = [void 0, void 0, void 0, void 0].map((e, t) => t);
        return (0, l.jsx)(a.A, {
            gap: "xl",
            "aria-label": i,
            items: e,
            getItemKey: L,
            renderItem: (e) => (0, l.jsx)(f.A, {}, e),
        });
    }
    return (0, l.jsx)(E.v3.Provider, {
        value: _,
        children: (0, l.jsx)(a.A, {
            gap: "xl",
            "aria-label": i,
            items: n,
            getItemKey: b,
            maintainFocusOnReorder: !0,
            renderItem: (e, t, n) =>
                (0, l.jsx)(O, { item: e, index: n, prioritizedCurrency: s, listItemProps: t }, e.skuId),
        }),
    });
}
function j(e) {
    let { tileProps: t } = e;
    return String(t.day);
}
function k(e, t) {
    let { tileProps: n } = e;
    return (0, l.jsx)(x.A, { ...n, aspectRatio: "auto", tag: "div", listItemProps: t });
}
function N(e) {
    let { collectionId: t, sequencedOffers: n } = e,
        r = (0, s.bG)([o.A], () => o.A.getCategory(t)?.products),
        u = (0, m.A)(t),
        c = (0, C.A)(n, r, u),
        d = c.findIndex((e) => {
            let { tileProps: t } = e;
            return t.day === u;
        });
    return (0, l.jsx)(i.R9, {
        newValue: { pageSection: "top 4", categoryPosition: 0 },
        children: (0, l.jsx)(E.v3.Provider, {
            value: _,
            children: (0, l.jsx)(a.A, {
                gap: "xl",
                "aria-label": y.intl.string(y.t.HP8LNG),
                items: c,
                getItemKey: j,
                itemClassName: A.xo,
                renderItem: k,
                initialScrollIndex: d >= 0 ? d : null,
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
                { heroBlockRecord: i, layout: m, tab: p, isBlockLoading: E = !1 } = e,
                { products: f } =
                    ((t = (0, h.A)()),
                    (n = (0, d.p)()),
                    (a = r.useMemo(() => (E ? [] : n(t(i.rankedSkuIds))), [E, t, i.rankedSkuIds, n])),
                    { products: (0, g.X)(a) }),
                x = i.categorySkuId,
                C = (0, s.bG)([u.A], () => (null != x ? u.A.getSequencedOffersForCollection(x) : null)),
                y = r.useMemo(
                    () =>
                        !E &&
                        0 !== i.rankedSkuIds.length &&
                        !(f.length > 0) &&
                        i.rankedSkuIds.every((e) => o.A.getProduct(e)?.variantGroupStoreListingId != null),
                    [E, i.rankedSkuIds, f.length],
                ),
                A = E || y,
                _ = r.useMemo(() => f.filter((e) => null != o.A.getCategoryForProduct(e.skuId)), [f]),
                L = "hscroll" === m && p === v.G2.HOME && !A && null != x && null != C && C.promotions.length > 0,
                b = (0, c.t)("shop_home_carousel", { autoTrackExposure: L }).enabled;
            switch (m) {
                case "feed":
                    return (0, l.jsx)(S, { isLoading: A, products: _, tab: p });
                case "hscroll":
                    if (L && b) return (0, l.jsx)(N, { collectionId: x, sequencedOffers: C });
                    return (0, l.jsx)(I, { isLoading: A, products: _, tab: p });
            }
        },
    },
);
