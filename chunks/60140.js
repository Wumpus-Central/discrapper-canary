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
    h = n(313276),
    g = n(206077),
    E = n(695960),
    f = n(251256),
    p = n(987421),
    x = n(561769),
    C = n(484469),
    v = n(127329),
    A = n(579720),
    L = n(504820),
    y = n(758836),
    b = n(792996),
    _ = n(105499);
let I = { flattenProductVariants: !1 };
function S(e) {
    return String(e);
}
function N(e) {
    return e.skuId;
}
function j(e) {
    let { isLoading: t, products: n, tab: r } = e,
        s = (0, x.Mk)(r);
    return t
        ? (0, l.jsx)("div", {
              className: _.hm,
              children: [void 0, void 0, void 0, void 0].map((e, t) => (0, l.jsx)(C.A, {}, t)),
          })
        : (0, l.jsx)("div", {
              className: _.hm,
              children: (0, l.jsx)(x.v3.Provider, {
                  value: I,
                  children: n.map((e, t) => (0, l.jsx)(D, { item: e, index: t, prioritizedCurrency: s }, e.skuId)),
              }),
          });
}
function k(e) {
    let { isLoading: t, products: n, tab: r } = e,
        s = (0, x.Mk)(r),
        i = b.intl.string(b.t.HP8LNG);
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
    return (0, l.jsx)(v.A, { ...n, surface: L.L.HOME, aspectRatio: "auto", tag: "div", listItemProps: t });
}
function R(e) {
    let { collectionId: t, sequencedOffers: n, products: s, onViewAll: o } = e,
        u = (0, m.A)(t),
        c = (0, A.A)(n, s, u),
        d = c.findIndex((e) => {
            let { tileProps: t } = e;
            return t.day === u;
        }),
        { helpCenterArticleId: h } = n,
        g = r.useMemo(() => (null != h ? { id: h, label: b.intl.string(b.t.vaqebJ) } : null), [h]);
    return (0, l.jsx)(i.R9, {
        newValue: { pageSection: "top 4", categoryPosition: 0 },
        children: (0, l.jsxs)("div", {
            className: _.yE,
            children: [
                (0, l.jsx)(f.A, {
                    variant: "sequenced-offer",
                    title: b.intl.string(b.t.a05zGh),
                    helpArticle: g,
                    buttonText: b.intl.string(b.t["kJSKt+"]),
                    onButtonClick: o,
                    className: _.NF,
                }),
                (0, l.jsx)(x.v3.Provider, {
                    value: I,
                    children: (0, l.jsx)(a.A, {
                        gap: "xl",
                        "aria-label": b.intl.string(b.t.HP8LNG),
                        items: c,
                        getItemKey: O,
                        className: _.tX,
                        scrollerClassName: _.q8,
                        itemClassName: _.xo,
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
                { heroBlockRecord: i, layout: m, tab: f, isBlockLoading: p = !1, onViewAll: x } = e,
                { products: C } =
                    ((t = (0, h.A)()),
                    (n = (0, d.p)()),
                    (a = r.useMemo(() => (p ? [] : n(t(i.rankedSkuIds))), [p, t, i.rankedSkuIds, n])),
                    { products: (0, g.X)(a) }),
                v = i.categorySkuId,
                A = (0, E.A)(v),
                L = (0, c.A)(),
                b = (0, s.bG)([o.A], () => (null != v ? o.A.getCategory(v)?.products : void 0)),
                _ = r.useMemo(
                    () =>
                        !p &&
                        0 !== i.rankedSkuIds.length &&
                        !(C.length > 0) &&
                        i.rankedSkuIds.every((e) => o.A.getProduct(e)?.variantGroupStoreListingId != null),
                    [p, i.rankedSkuIds, C.length],
                ),
                I = p || _,
                S = r.useMemo(() => C.filter((e) => null != o.A.getCategoryForProduct(e.skuId)), [C]),
                N =
                    "hscroll" === m &&
                    f === y.G2.HOME &&
                    !I &&
                    null != v &&
                    null != A &&
                    A.promotions.length > 0 &&
                    null != b,
                O = (0, u.t)("shop_home_carousel", { autoTrackExposure: N }).enabled,
                T = "hscroll" === m && f === y.G2.HOME && null != v && O && !L;
            switch (m) {
                case "feed":
                    return (0, l.jsx)(j, { isLoading: I, products: S, tab: f });
                case "hscroll":
                    if (N && O)
                        return (0, l.jsx)(R, { collectionId: v, sequencedOffers: A, products: b, onViewAll: x });
                    return (0, l.jsx)(k, { isLoading: I || T, products: S, tab: f });
            }
        },
    },
);
