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
    C = n(484469),
    A = n(127329),
    v = n(579720),
    b = n(504820),
    L = n(758836),
    _ = n(792996),
    y = n(105499);
let I = { flattenProductVariants: !1 };
function S(e) {
    return String(e);
}
function N(e) {
    return e.skuId;
}
function k(e) {
    let { isLoading: t, products: n, tab: r } = e,
        s = (0, x.Mk)(r);
    return t
        ? (0, l.jsx)("div", {
              className: y.hm,
              children: [void 0, void 0, void 0, void 0].map((e, t) => (0, l.jsx)(C.A, {}, t)),
          })
        : (0, l.jsx)("div", {
              className: y.hm,
              children: (0, l.jsx)(x.v3.Provider, {
                  value: I,
                  children: n.map((e, t) => (0, l.jsx)(D, { item: e, index: t, prioritizedCurrency: s }, e.skuId)),
              }),
          });
}
function j(e) {
    let { isLoading: t, products: n, tab: r } = e,
        s = (0, x.Mk)(r),
        i = _.intl.string(_.t.HP8LNG);
    if (t) {
        let e = [void 0, void 0, void 0, void 0].map((e, t) => t);
        return (0, l.jsx)(a.A, {
            gap: "xl",
            "aria-label": i,
            items: e,
            getItemKey: S,
            renderItem: (e) => (0, l.jsx)(C.A, {}, e),
        });
    }
    return (0, l.jsx)(x.v3.Provider, {
        value: I,
        children: (0, l.jsx)(a.A, {
            gap: "xl",
            "aria-label": i,
            items: n,
            getItemKey: N,
            maintainFocusOnReorder: !0,
            renderItem: (e, t, n) =>
                (0, l.jsx)(D, { item: e, index: n, prioritizedCurrency: s, listItemProps: t }, e.skuId),
        }),
    });
}
function O(e) {
    let { tileProps: t } = e;
    return String(t.day);
}
function T(e, t) {
    let { tileProps: n } = e;
    return (0, l.jsx)(A.A, { ...n, surface: b.L.HOME, aspectRatio: "auto", tag: "div", listItemProps: t });
}
function R(e) {
    let { collectionId: t, sequencedOffers: n, products: s, onViewAll: o } = e,
        u = (0, m.A)(t),
        c = (0, v.A)(n, s, u),
        d = c.findIndex((e) => {
            let { tileProps: t } = e;
            return t.day === u;
        }),
        { helpCenterArticleId: g } = n,
        h = r.useMemo(() => (null != g ? { id: g, label: _.intl.string(_.t.vaqebJ) } : null), [g]);
    return (0, l.jsx)(i.R9, {
        newValue: { pageSection: "top 4", categoryPosition: 0 },
        children: (0, l.jsxs)("div", {
            className: y.yE,
            children: [
                (0, l.jsx)(p.A, {
                    variant: "sequenced-offer",
                    title: _.intl.string(_.t.a05zGh),
                    helpArticle: h,
                    buttonText: _.intl.string(_.t["kJSKt+"]),
                    onButtonClick: o,
                    className: y.NF,
                }),
                (0, l.jsx)(x.v3.Provider, {
                    value: I,
                    children: (0, l.jsx)(a.A, {
                        gap: "xl",
                        "aria-label": _.intl.string(_.t.HP8LNG),
                        items: c,
                        getItemKey: O,
                        className: y.tX,
                        scrollerClassName: y.q8,
                        itemClassName: y.xo,
                        renderItem: T,
                        initialScrollIndex: d >= 0 ? Math.max(d - 1, 0) : null,
                    }),
                }),
            ],
        }),
    });
}
function D(e) {
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
                { products: C } =
                    ((t = (0, g.A)()),
                    (n = (0, d.p)()),
                    (a = r.useMemo(() => (f ? [] : n(t(i.rankedSkuIds))), [f, t, i.rankedSkuIds, n])),
                    { products: (0, h.X)(a) }),
                A = i.categorySkuId,
                v = (0, E.A)(A),
                b = (0, c.A)(),
                _ = (0, s.bG)([o.A], () => (null != A ? o.A.getCategory(A)?.products : void 0)),
                y = r.useMemo(
                    () =>
                        !f &&
                        0 !== i.rankedSkuIds.length &&
                        !(C.length > 0) &&
                        i.rankedSkuIds.every((e) => o.A.getProduct(e)?.variantGroupStoreListingId != null),
                    [f, i.rankedSkuIds, C.length],
                ),
                I = f || y,
                S = r.useMemo(() => C.filter((e) => null != o.A.getCategoryForProduct(e.skuId)), [C]),
                N =
                    "hscroll" === m &&
                    p === L.G2.HOME &&
                    !I &&
                    null != A &&
                    null != v &&
                    v.promotions.length > 0 &&
                    null != _,
                O = (0, u.t)("shop_home_carousel", { autoTrackExposure: N }).enabled,
                T = "hscroll" === m && p === L.G2.HOME && null != A && O && !b;
            switch (m) {
                case "feed":
                    return (0, l.jsx)(k, { isLoading: I, products: S, tab: p });
                case "hscroll":
                    if (N && O)
                        return (0, l.jsx)(R, { collectionId: A, sequencedOffers: v, products: _, onViewAll: x });
                    return (0, l.jsx)(j, { isLoading: I || T, products: S, tab: p });
            }
        },
    },
);
