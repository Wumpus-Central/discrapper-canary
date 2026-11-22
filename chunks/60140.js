var l = n(477900),
    r = n(582128),
    s = n(855986),
    a = n(151869),
    i = n(857512),
    o = n(590180),
    u = n(195271),
    c = n(924473),
    d = n(511265),
    m = n(654512),
    g = n(313276),
    h = n(206077),
    E = n(695960),
    p = n(251256),
    f = n(987421),
    x = n(561769),
    A = n(484469),
    v = n(687461),
    C = n(579720),
    b = n(758836),
    y = n(792996),
    L = n(105499);
let _ = { flattenProductVariants: !1 };
function S(e) {
    return String(e);
}
function I(e) {
    return e.skuId;
}
function j(e) {
    let { isLoading: t, products: n, tab: r } = e,
        s = (0, x.Mk)(r);
    return t
        ? (0, l.jsx)("div", {
              className: L.hm,
              children: [void 0, void 0, void 0, void 0].map((e, t) => (0, l.jsx)(A.A, {}, t)),
          })
        : (0, l.jsx)("div", {
              className: L.hm,
              children: (0, l.jsx)(x.v3.Provider, {
                  value: _,
                  children: n.map((e, t) => (0, l.jsx)(R, { item: e, index: t, prioritizedCurrency: s }, e.skuId)),
              }),
          });
}
function k(e) {
    let { isLoading: t, products: n, tab: r } = e,
        s = (0, x.Mk)(r),
        i = y.intl.string(y.t.HP8LNG);
    if (t) {
        let e = [void 0, void 0, void 0, void 0].map((e, t) => t);
        return (0, l.jsx)(a.A, {
            gap: "xl",
            "aria-label": i,
            items: e,
            getItemKey: S,
            renderItem: (e) => (0, l.jsx)(A.A, {}, e),
        });
    }
    return (0, l.jsx)(x.v3.Provider, {
        value: _,
        children: (0, l.jsx)(a.A, {
            gap: "xl",
            "aria-label": i,
            items: n,
            getItemKey: I,
            maintainFocusOnReorder: !0,
            renderItem: (e, t, n) =>
                (0, l.jsx)(R, { item: e, index: n, prioritizedCurrency: s, listItemProps: t }, e.skuId),
        }),
    });
}
function N(e) {
    let { tileProps: t } = e;
    return String(t.day);
}
function O(e, t) {
    let { tileProps: n } = e;
    return (0, l.jsx)(v.A, { ...n, aspectRatio: "auto", tag: "div", listItemProps: t });
}
function T(e) {
    let { collectionId: t, sequencedOffers: n, products: s, onViewAll: o } = e,
        u = (0, m.A)(t),
        c = (0, C.A)(n, s, u),
        d = c.findIndex((e) => {
            let { tileProps: t } = e;
            return t.day === u;
        }),
        { helpCenterArticleId: g } = n,
        h = r.useMemo(() => (null != g ? { id: g, label: y.intl.string(y.t.vaqebJ) } : null), [g]);
    return (0, l.jsx)(i.R9, {
        newValue: { pageSection: "top 4", categoryPosition: 0 },
        children: (0, l.jsxs)("div", {
            className: L.yE,
            children: [
                (0, l.jsx)(p.A, {
                    variant: "sequenced-offer",
                    title: y.intl.string(y.t.a05zGh),
                    helpArticle: h,
                    buttonText: y.intl.string(y.t["kJSKt+"]),
                    onButtonClick: o,
                    className: L.NF,
                }),
                (0, l.jsx)(x.v3.Provider, {
                    value: _,
                    children: (0, l.jsx)(a.A, {
                        gap: "xl",
                        "aria-label": y.intl.string(y.t.HP8LNG),
                        items: c,
                        getItemKey: N,
                        itemClassName: L.xo,
                        renderItem: O,
                        initialScrollIndex: d >= 0 ? Math.max(d - 1, 0) : null,
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
        children: (0, l.jsx)(f.A, { skuId: t.skuId, prioritizedCurrency: r, listItemProps: s }),
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
                { heroBlockRecord: i, layout: m, tab: p, isBlockLoading: f = !1, onViewAll: x } = e,
                { products: A } =
                    ((t = (0, g.A)()),
                    (n = (0, d.p)()),
                    (a = r.useMemo(() => (f ? [] : n(t(i.rankedSkuIds))), [f, t, i.rankedSkuIds, n])),
                    { products: (0, h.X)(a) }),
                v = i.categorySkuId,
                C = (0, E.A)(v),
                y = (0, c.A)(),
                L = (0, s.bG)([o.A], () => (null != v ? o.A.getCategory(v)?.products : void 0)),
                _ = r.useMemo(
                    () =>
                        !f &&
                        0 !== i.rankedSkuIds.length &&
                        !(A.length > 0) &&
                        i.rankedSkuIds.every((e) => o.A.getProduct(e)?.variantGroupStoreListingId != null),
                    [f, i.rankedSkuIds, A.length],
                ),
                S = f || _,
                I = r.useMemo(() => A.filter((e) => null != o.A.getCategoryForProduct(e.skuId)), [A]),
                N =
                    "hscroll" === m &&
                    p === b.G2.HOME &&
                    !S &&
                    null != v &&
                    null != C &&
                    C.promotions.length > 0 &&
                    null != L,
                O = (0, u.t)("shop_home_carousel", { autoTrackExposure: N }).enabled,
                R = "hscroll" === m && p === b.G2.HOME && null != v && O && !y;
            switch (m) {
                case "feed":
                    return (0, l.jsx)(j, { isLoading: S, products: I, tab: p });
                case "hscroll":
                    if (N && O)
                        return (0, l.jsx)(T, { collectionId: v, sequencedOffers: C, products: L, onViewAll: x });
                    return (0, l.jsx)(k, { isLoading: S || R, products: I, tab: p });
            }
        },
    },
);
