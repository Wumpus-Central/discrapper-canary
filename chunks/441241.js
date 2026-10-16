(s.r(l), s.d(l, { default: () => ej }));
var n = s(477900),
    t = s(582128),
    r = s(503698),
    a = s.n(r),
    i = s(806163),
    c = s(132500),
    o = s(17928),
    d = s(364522),
    u = s(689175),
    h = s(944791),
    g = s(444927),
    x = s(688810),
    I = s(354328),
    C = s(475073),
    m = s(611924),
    p = s(744082),
    b = s(594832),
    j = s(440938),
    E = s(590180),
    A = s(395856),
    f = s(790297),
    L = s(350172),
    _ = s(730202),
    N = s(295586),
    v = s(510801),
    T = s(682301);
function O(e) {
    let {
            enabled: l = !0,
            includeUnpublished: s = !1,
            includePricing: n = !1,
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        r = l && null != e ? e : "";
    t.useEffect(() => {
        "" !== r && N.p.requestCollections([r], { includeUnpublished: s, includePricing: n });
    }, [r, s, n]);
    let { collection: a, fetchState: i } = (0, o.cf)(
            [_.A],
            () => ({ collection: _.A.getCollection(r), fetchState: _.A.getFetchState(r) }),
            [r],
        ),
        c = (0, T.Hd)(r, i),
        d = t.useMemo(() => (null != a ? v.A.fromStorefrontCollectionRecord(a) : null), [a]),
        u = t.useMemo(() => ("error" === i || c ? "error" : null != d ? "ready" : "loading"), [i, c, d]);
    return {
        category: d,
        state: u,
        retry: t.useCallback(() => {
            "" !== r &&
                (0, L._v)({
                    collectionIds: [r],
                    includeUnpublishedCollections: s,
                    includeUnpublishedProducts: s,
                    includePricing: n,
                    ignoreCache: !0,
                });
        }, [r, s, n]),
    };
}
var k = s(841702),
    S = s(983545),
    y = s(691062),
    R = s(235939);
s(321073);
var B = s(575593),
    P = s(651162),
    G = s(297264),
    F = s(821609),
    U = s(40474),
    D = s(449543),
    M = s(152858),
    H = s(197935),
    V = s(287809),
    X = s(174459),
    w = s(161918),
    W = s(275161),
    Y = s(511265),
    $ = s(304210),
    z = s(652215),
    K = s(828515),
    q = s(442036),
    J = s(258245),
    Z = s(484469),
    Q = s(196231),
    ee = s(946052),
    el = s(758836),
    es = s(105292),
    en = s(146053);
function et(e) {
    return e.skuId;
}
function er(e, l) {
    let s = (0, A.$)(l),
        { category: n } = O(e, {
            enabled: s,
            includeUnpublished: (0, I.A)("shop_include_unpublished"),
            includePricing: !0,
        }),
        t = (0, o.bG)([E.A], () => E.A.getCategory(e));
    return s ? (n ?? void 0) : t;
}
let ea = { aspectRatio: "1 / 1" },
    ei = {
        [B.R.PROFILE_EFFECT]: { className: en.I5, aspectRatio: "1 / 2" },
        [B.R.BUNDLE]: { className: en.kP, aspectRatio: "2 / 1" },
    };
function ec(e) {
    let { category: l } = e,
        s = (0, o.bG)([V.default], () => V.default.getCurrentUser()),
        t = (0, Y.p)(),
        r = null != (0, $.ty)(l.skuId),
        a = t(l.products);
    return null == s || 0 === a.length
        ? null
        : (0, n.jsxs)("div", {
              className: en.hd,
              children: [
                  r && (0, n.jsx)(q.A, { className: en.aQ }),
                  (0, n.jsx)("div", {
                      className: en.fr,
                      children: a.map((e, l) => {
                          let { className: s, aspectRatio: t } =
                              ei[
                                  e.type === B.R.VARIANTS_GROUP &&
                                  null != e.variants &&
                                  e.variants.length > 0 &&
                                  e.variants.every((e) => e.type === B.R.PROFILE_EFFECT)
                                      ? B.R.PROFILE_EFFECT
                                      : e.type
                              ] ?? ea;
                          return (0, n.jsx)(
                              j.R9,
                              {
                                  newValue: { tilePosition: l },
                                  children: (0, n.jsx)(J.A, { skuId: e.skuId, cardClassName: s, aspectRatio: t }),
                              },
                              e.skuId,
                          );
                      }),
                  }),
              ],
          });
}
function eo(e) {
    let { currentCategorySkuId: l, handleTransition: s } = e,
        r = (0, A.$)("collection_index_related_drops"),
        a = (0, W.Y)("related_drops"),
        { categories: i } = (function (e) {
            let { anchorCollectionId: l, limit: s, enabled: n = !0 } = e,
                r = t.useMemo(() => ({ applicationId: z.FYj, anchorCollectionId: l ?? "", limit: s }), [l, s]),
                a = n && null != l && "" !== l,
                i = (0, L.HX)(r);
            t.useEffect(() => {
                a && (0, L.Su)(r);
            }, [a, r]);
            let { collectionIds: c, fetchState: d } = (0, o.cf)(
                    [_.A],
                    () => ({
                        collectionIds: _.A.getCollectionsAfterIds(i),
                        fetchState: _.A.getCollectionsAfterFetchState(i),
                    }),
                    [i],
                ),
                u = t.useMemo(() => (a ? (c ?? []) : []), [a, c]),
                h = u.join(","),
                g = (0, o.cf)(
                    [_.A],
                    () => {
                        let e = {};
                        for (let l of u) e[l] = _.A.getCollectionOrSummary(l);
                        return e;
                    },
                    [u],
                );
            return {
                categories: t.useMemo(
                    () =>
                        u
                            .map((e) => g[e])
                            .filter((e) => null != e)
                            .map((e) => v.A.fromStorefrontCollectionRecord(e)),
                    [h, g],
                ),
                isLoading: a && null == c && "error" !== d,
            };
        })({ anchorCollectionId: l, limit: 12, enabled: r }),
        c = (0, o.bG)([E.A], () => E.A.categories),
        d = t.useCallback(
            (e) =>
                e.skuId !== l &&
                null != e.featuredBlockUrl &&
                !0 !== e.isOrbsExclusive &&
                (null == e.unpublishedAt || e.unpublishedAt > new Date()) &&
                !el.MS.some((l) => {
                    let { categorySkuId: s } = l;
                    return s === e.skuId;
                }),
            [l],
        ),
        u = t.useMemo(() => {
            if (r) return i.filter(d).slice(0, 8);
            let e = [...c.values()],
                s = e.findIndex((e) => e.skuId === l);
            if (-1 === s) return [];
            let n = [];
            for (let l = 1; l <= e.length && n.length < 8; l++) {
                let t = e[(s + l) % e.length];
                d(t) && t.products.length > 0 && n.push(t);
            }
            return n;
        }, [r, i, c, l, d]);
    return 0 === u.length
        ? null
        : (0, n.jsxs)("div", {
              className: en.t3,
              children: [
                  (0, n.jsx)("div", {
                      className: en.bb,
                      children: (0, n.jsx)(G.D, {
                          variant: "heading-lg/semibold",
                          children: es.intl.string(es.t.EhRZ9o),
                      }),
                  }),
                  a
                      ? (0, n.jsx)(
                            H.A,
                            {
                                gap: "xl",
                                scrollStep: "item",
                                items: u,
                                getItemKey: et,
                                renderItem: (e, l, t) =>
                                    (0, n.jsx)(
                                        ed,
                                        { category: e, index: t, handleTransition: s, listItemProps: l },
                                        e.skuId,
                                    ),
                            },
                            l,
                        )
                      : (0, n.jsx)(
                            D.A,
                            {
                                gap: "xl",
                                scrollBehavior: M.Uf.ITEM,
                                children: u.map((e, l) =>
                                    (0, n.jsx)(ed, { category: e, index: l, handleTransition: s }, e.skuId),
                                ),
                            },
                            l,
                        ),
              ],
          });
}
function ed(e) {
    let { category: l, index: s, handleTransition: t, listItemProps: r } = e;
    return (0, n.jsx)(j.R9, {
        newValue: { categoryPosition: s, pageCategory: l.name, pageSection: "related_drops", tilePosition: s },
        children: (0, n.jsx)("div", {
            className: en.EU,
            children: (0, n.jsx)(Q.S, {
                category: l,
                handleTransition: t,
                pageType: el.G2.COLLECTION_INDEX,
                className: en.vK,
                listItemProps: r,
            }),
        }),
    });
}
let eu = [
    { tab: el.G2.AVATAR_DECORATIONS, label: () => es.intl.string(es.t.dRZYNE) },
    { tab: el.G2.PROFILE_EFFECTS, label: () => es.intl.string(es.t["1cNjtx"]) },
    { tab: el.G2.NAMEPLATES, label: () => es.intl.string(es.t.V68Fqz) },
    { tab: el.G2.PROFILE_FRAMES, label: () => es.intl.string(es.t.ecTJkR) },
    { tab: el.G2.BUNDLES, label: () => es.intl.string(es.t.FYFpps) },
];
function eh() {
    let e = (0, i.W6)();
    return (0, n.jsxs)("div", {
        className: en.nb,
        children: [
            (0, n.jsx)(G.D, { variant: "heading-md/semibold", children: es.intl.string(es.t.Yr70c4) }),
            (0, n.jsx)("div", {
                className: en.J2,
                children: eu.map((l) => {
                    let { tab: s, label: t } = l;
                    return (0, n.jsx)(
                        F.$,
                        { variant: "secondary", text: t(), onClick: () => e.push(z.BVt.COLLECTIBLES_SHOP_WITH_TAB(s)) },
                        s,
                    );
                }),
            }),
        ],
    });
}
function eg(e) {
    let { collectionId: l } = e,
        s = (0, i.W6)(),
        r = (0, j.uM)(),
        c = er(l, "collection_index_breadcrumb")?.name,
        o = t.useMemo(
            () => [
                { id: "shop_all", label: es.intl.string(es.t.xFcotU) },
                { id: "collection", label: c ?? "" },
            ],
            [c],
        ),
        d = t.useCallback(
            (e) => {
                "shop_all" === e.id &&
                    (X.default.track(z.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: r?.sessionId,
                        sku_id: l,
                        page_type: el.G2.COLLECTION_INDEX,
                        page_category: c,
                        cta_name: "collection breadcrumb shop all",
                    }),
                    s.push(z.BVt.COLLECTIBLES_SHOP_WITH_TAB(el.G2.CATALOG)));
            },
            [s, r?.sessionId, l, c],
        ),
        u = t.useCallback(
            (e, l) =>
                (0, n.jsxs)("span", {
                    className: a()(en.u, { [en.kG]: l }),
                    children: [e.label, !l && (0, n.jsx)("span", { className: en.Tl, children: "/" })],
                }),
            [],
        );
    return (0, n.jsx)(U.A, {
        className: en.C2,
        separatorClassName: en.Lw,
        breadcrumbs: o,
        activeId: "collection",
        onBreadcrumbClick: d,
        renderCustomBreadcrumb: u,
    });
}
function ex() {
    return (0, n.jsxs)("div", {
        className: en.kL,
        children: [
            (0, n.jsx)(ee.A, { isLoading: !0, hideButton: !0, hideCards: !0, tab: el.G2.COLLECTION_INDEX }),
            (0, n.jsx)("div", {
                className: en.hd,
                children: (0, n.jsx)("div", {
                    className: en.fr,
                    children: Array.from({ length: 8 }, (e, l) => (0, n.jsx)(Z.A, {}, l)),
                }),
            }),
            (0, n.jsxs)("div", {
                className: en.t3,
                children: [
                    (0, n.jsx)("div", { className: en.bb, children: (0, n.jsx)("div", { className: en.M$ }) }),
                    (0, n.jsxs)("div", {
                        className: en.A9,
                        children: [(0, n.jsx)("div", { className: en.nl }), (0, n.jsx)("div", { className: en.nl })],
                    }),
                ],
            }),
        ],
    });
}
let eI = function (e) {
    let { collectionId: l } = e,
        s = (0, i.W6)(),
        r = er(l, "collection_index_page_content"),
        a = t.useCallback(
            (e) => {
                let { categorySkuId: l } = e;
                null != l && s.push(z.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(l));
            },
            [s],
        ),
        c = t.useMemo(
            () =>
                null == r
                    ? null
                    : {
                          rankedSkuIds: r.heroRanking ?? [],
                          name: r.name,
                          unpublishedAt: r.unpublishedAt,
                          categorySkuId: r.skuId,
                          summary: r.summary,
                          type: P.g.HERO,
                          categoryStoreListingId: r.storeListingId,
                          bannerDisplayConfig: r.heroBannerDisplayConfig,
                          logoDisplayConfig: r.heroLogoDisplayConfig,
                          heroLogoUrl: r.heroLogoUrl,
                          heroBannerUrl: r.heroBannerUrl,
                          heroBannerAnimatedUrl: r.heroBannerAnimatedUrl,
                          heroRiveUrl: r.heroRiveUrl,
                      },
            [r],
        );
    if (null == r) return null;
    let o = null != r.heroBannerUrl || null != r.heroRiveUrl;
    return (0, n.jsx)(w.iM, {
        tab: el.G2.COLLECTION_INDEX,
        children: (0, n.jsxs)("div", {
            className: en.kL,
            children: [
                o && null != c
                    ? (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsxs)("div", {
                                  className: en.rz,
                                  children: [
                                      (0, n.jsx)("div", {
                                          className: en.zn,
                                          children: (0, n.jsx)(eg, { collectionId: l }),
                                      }),
                                      (0, n.jsx)(ee.A, {
                                          heroBlock: c,
                                          isLoading: !1,
                                          tab: el.G2.COLLECTION_INDEX,
                                          hideButton: !0,
                                          hideCards: !0,
                                      }),
                                  ],
                              }),
                              (0, n.jsx)(ec, { category: r }),
                              (0, n.jsx)(eo, { currentCategorySkuId: r.skuId, handleTransition: a }, r.skuId),
                          ],
                      })
                    : (0, n.jsxs)("div", {
                          className: en.AW,
                          children: [
                              (0, n.jsx)("div", { className: en.zn, children: (0, n.jsx)(eg, { collectionId: l }) }),
                              (0, n.jsx)("div", { className: en.$T, children: (0, n.jsx)(K.A, { category: r }) }),
                              (0, n.jsx)(ec, { category: r }),
                              (0, n.jsx)(eo, { currentCategorySkuId: r.skuId, handleTransition: a }, r.skuId),
                          ],
                      }),
                (0, n.jsx)(eh, {}),
            ],
        }),
    });
};
var eC = s(415926),
    em = s(783857),
    ep = s(170522);
function eb(e) {
    let { scrollerRef: l, children: s } = e,
        { handleScroll: t } = (0, eC.r)(l, el.G2.COLLECTION_INDEX);
    return (0, n.jsx)(u.Ch, { ref: l, onScroll: t, children: s });
}
let ej = function (e) {
    let { collectionId: l } = e,
        s = t.useRef(null),
        r = t.useRef(null);
    (0, m.P)(C.a);
    let u = (0, em.yB)("CollectiblesShopIndexPage");
    (0, em.gB)();
    let { selectedTab: L, transitionToTab: _, transitionState: N } = (0, S.o)(el.G2.COLLECTION_INDEX);
    (0, b.pE)();
    let v = (0, A.$)("collection_index_page");
    ((0, k.Ay)({ stalePurchasesOK: !0, skipFetch: v }), (0, p.A)(z.FYj));
    let T = (0, g.A)((0, c.A)()),
        { category: B, state: P } = O(l, {
            enabled: v,
            includeUnpublished: (0, I.A)("shop_include_unpublished"),
            includePricing: !0,
        }),
        G = (0, o.bG)([E.A], () => (null != l ? E.A.getCategory(l) : void 0)),
        F = (0, o.bG)([E.A], () => E.A.isFetchingCategories),
        U = (0, o.bG)([E.A], () => null != E.A.lastSuccessfulFetch),
        D = (0, o.bG)([E.A], () => E.A.error),
        M = v ? (B ?? void 0) : G,
        { analyticsLocations: H } = (0, f.lC)(el.G2.COLLECTION_INDEX);
    ((0, f.uS)(T, L, M?.name, N, { enabled: null != M }),
        t.useEffect(() => {
            r.current?.scrollTo({ to: 0 });
        }, [l]),
        t.useEffect(() => {
            (0, h.I)(z.BVt.COLLECTIBLES_SHOP);
        }, []));
    let V = (v ? "loading" !== P : !F && (U || null != D)) && null == M;
    return null == l || V
        ? (0, n.jsx)(i.rd, { to: z.BVt.COLLECTIBLES_SHOP })
        : M?.isOrbsExclusive === !0
          ? (0, n.jsx)(i.rd, { to: z.BVt.COLLECTIBLES_SHOP_WITH_TAB(el.G2.ORBS) })
          : null == M
            ? (0, n.jsxs)("div", {
                  className: a()(ep.bx, { [em.jP]: u }),
                  ref: s,
                  tabIndex: -1,
                  children: [
                      (0, n.jsx)(y.G, { handleTransition: _, selectedTab: L, selectedCollectionId: l }),
                      (0, n.jsx)(d.Ip, { children: (0, n.jsx)(ex, {}) }),
                  ],
              })
            : (0, n.jsx)(x.f5, {
                  value: H,
                  children: (0, n.jsx)(j.R9, {
                      newValue: { sessionId: T },
                      children: (0, n.jsxs)("div", {
                          className: a()(ep.bx, { [em.jP]: u }),
                          ref: s,
                          tabIndex: -1,
                          children: [
                              (0, n.jsx)(y.G, { handleTransition: _, selectedTab: L, selectedCollectionId: l }),
                              (0, n.jsx)(R.A, { tab: L, handleTransition: _ }),
                              (0, n.jsx)(eb, { scrollerRef: r, children: (0, n.jsx)(eI, { collectionId: l }) }),
                          ],
                      }),
                  }),
              });
};
