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
    E = n(28875),
    p = n(987421),
    f = n(561769),
    x = n(484469),
    v = n(687461),
    A = n(579720),
    C = n(758836),
    y = n(792996),
    L = n(105499);
let _ = { flattenProductVariants: !1 };
function b(e) {
    return String(e);
}
function S(e) {
    return e.skuId;
}
function I(e) {
    let { isLoading: t, products: n, tab: r } = e,
        s = (0, f.Mk)(r);
    return t
        ? (0, l.jsx)("div", {
              className: L.hm,
              children: [void 0, void 0, void 0, void 0].map((e, t) => (0, l.jsx)(x.A, {}, t)),
          })
        : (0, l.jsx)("div", {
              className: L.hm,
              children: (0, l.jsx)(f.v3.Provider, {
                  value: _,
                  children: n.map((e, t) => (0, l.jsx)(R, { item: e, index: t, prioritizedCurrency: s }, e.skuId)),
              }),
          });
}
function j(e) {
    let { isLoading: t, products: n, tab: r } = e,
        s = (0, f.Mk)(r),
        i = y.intl.string(y.t.HP8LNG);
    if (t) {
        let e = [void 0, void 0, void 0, void 0].map((e, t) => t);
        return (0, l.jsx)(a.A, {
            gap: "xl",
            "aria-label": i,
            items: e,
            getItemKey: b,
            renderItem: (e) => (0, l.jsx)(x.A, {}, e),
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
                (0, l.jsx)(R, { item: e, index: n, prioritizedCurrency: s, listItemProps: t }, e.skuId),
        }),
    });
}
function k(e) {
    let { tileProps: t } = e;
    return String(t.day);
}
function N(e, t) {
    let { tileProps: n } = e;
    return (0, l.jsx)(v.A, { ...n, aspectRatio: "auto", tag: "div", listItemProps: t });
}
function O(e) {
    let { collectionId: t, sequencedOffers: n, onViewAll: u } = e,
        c = (0, s.bG)([o.A], () => o.A.getCategory(t)?.products),
        d = (0, m.A)(t),
        h = (0, A.A)(n, c, d),
        g = h.findIndex((e) => {
            let { tileProps: t } = e;
            return t.day === d;
        }),
        { helpCenterArticleId: p } = n,
        x = r.useMemo(() => (null != p ? { id: p, label: y.intl.string(y.t.vaqebJ) } : null), [p]);
    return (0, l.jsx)(i.R9, {
        newValue: { pageSection: "top 4", categoryPosition: 0 },
        children: (0, l.jsxs)("div", {
            className: L.yE,
            children: [
                (0, l.jsx)(E.A, {
                    variant: "sequenced-offer",
                    title: y.intl.string(y.t.a05zGh),
                    helpArticle: x,
                    buttonText: y.intl.string(y.t["kJSKt+"]),
                    onButtonClick: u,
                    className: L.NF,
                }),
                (0, l.jsx)(f.v3.Provider, {
                    value: _,
                    children: (0, l.jsx)(a.A, {
                        gap: "xl",
                        "aria-label": y.intl.string(y.t.HP8LNG),
                        items: h,
                        getItemKey: k,
                        itemClassName: L.xo,
                        renderItem: N,
                        initialScrollIndex: g >= 0 ? g : null,
                    }),
                }),
            ],
        }),
    });
}
function R(e) {
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
                { heroBlockRecord: i, layout: m, tab: E, isBlockLoading: p = !1, onViewAll: f } = e,
                { products: x } =
                    ((t = (0, h.A)()),
                    (n = (0, d.p)()),
                    (a = r.useMemo(() => (p ? [] : n(t(i.rankedSkuIds))), [p, t, i.rankedSkuIds, n])),
                    { products: (0, g.X)(a) }),
                v = i.categorySkuId,
                A = (0, s.bG)([u.A], () => (null != v ? u.A.getSequencedOffersForCollection(v) : null)),
                y = r.useMemo(
                    () =>
                        !p &&
                        0 !== i.rankedSkuIds.length &&
                        !(x.length > 0) &&
                        i.rankedSkuIds.every((e) => o.A.getProduct(e)?.variantGroupStoreListingId != null),
                    [p, i.rankedSkuIds, x.length],
                ),
                L = p || y,
                _ = r.useMemo(() => x.filter((e) => null != o.A.getCategoryForProduct(e.skuId)), [x]),
                b = "hscroll" === m && E === C.G2.HOME && !L && null != v && null != A && A.promotions.length > 0,
                S = (0, c.t)("shop_home_carousel", { autoTrackExposure: b }).enabled;
            switch (m) {
                case "feed":
                    return (0, l.jsx)(I, { isLoading: L, products: _, tab: E });
                case "hscroll":
                    if (b && S) return (0, l.jsx)(O, { collectionId: v, sequencedOffers: A, onViewAll: f });
                    return (0, l.jsx)(j, { isLoading: L, products: _, tab: E });
            }
        },
    },
);
