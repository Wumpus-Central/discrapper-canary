(s.r(l), s.d(l, { default: () => ex }));
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
    C = s(444927),
    g = s(688810),
    I = s(354328),
    m = s(475073),
    x = s(611924),
    p = s(744082),
    b = s(561794),
    j = s(440938),
    E = s(590180),
    A = s(395856),
    L = s(790297),
    f = s(350172),
    _ = s(730202),
    N = s(295586),
    v = s(510801),
    O = s(682301);
function T(e) {
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
        c = (0, O.Hd)(r, i),
        d = t.useMemo(() => (null != a ? v.A.fromStorefrontCollectionRecord(a) : null), [a]),
        u = t.useMemo(() => ("error" === i || c ? "error" : null != d ? "ready" : "loading"), [i, c, d]);
    return {
        category: d,
        state: u,
        retry: t.useCallback(() => {
            "" !== r &&
                (0, f._v)({
                    collectionIds: [r],
                    includeUnpublishedCollections: s,
                    includeUnpublishedProducts: s,
                    includePricing: n,
                    ignoreCache: !0,
                });
        }, [r, s, n]),
    };
}
var S = s(841702),
    k = s(983545),
    y = s(691062),
    R = s(235939);
s(321073);
var B = s(575593),
    P = s(651162),
    G = s(297264),
    F = s(821609),
    U = s(40474),
    D = s(197935),
    M = s(287809),
    H = s(174459),
    V = s(161918),
    X = s(511265),
    w = s(304210),
    W = s(652215),
    $ = s(828515),
    Y = s(442036),
    z = s(258245),
    K = s(484469),
    q = s(196231),
    J = s(946052),
    Z = s(758836),
    Q = s(105292),
    ee = s(146053);
function el(e) {
    return e.skuId;
}
function es(e, l) {
    let s = (0, A.$)(l),
        { category: n } = T(e, {
            enabled: s,
            includeUnpublished: (0, I.A)("shop_include_unpublished"),
            includePricing: !0,
        }),
        t = (0, o.bG)([E.A], () => E.A.getCategory(e));
    return s ? (n ?? void 0) : t;
}
let en = { aspectRatio: "1 / 1" },
    et = {
        [B.R.PROFILE_EFFECT]: { className: ee.I5, aspectRatio: "1 / 2" },
        [B.R.BUNDLE]: { className: ee.kP, aspectRatio: "2 / 1" },
    };
function er(e) {
    let { category: l } = e,
        s = (0, o.bG)([M.default], () => M.default.getCurrentUser()),
        t = (0, X.p)(),
        r = null != (0, w.ty)(l.skuId),
        a = t(l.products);
    return null == s || 0 === a.length
        ? null
        : (0, n.jsxs)("div", {
              className: ee.hd,
              children: [
                  r && (0, n.jsx)(Y.A, { className: ee.aQ }),
                  (0, n.jsx)("div", {
                      className: ee.fr,
                      children: a.map((e, l) => {
                          let { className: s, aspectRatio: t } =
                              et[
                                  e.type === B.R.VARIANTS_GROUP &&
                                  null != e.variants &&
                                  e.variants.length > 0 &&
                                  e.variants.every((e) => e.type === B.R.PROFILE_EFFECT)
                                      ? B.R.PROFILE_EFFECT
                                      : e.type
                              ] ?? en;
                          return (0, n.jsx)(
                              j.R9,
                              {
                                  newValue: { tilePosition: l },
                                  children: (0, n.jsx)(z.A, { skuId: e.skuId, cardClassName: s, aspectRatio: t }),
                              },
                              e.skuId,
                          );
                      }),
                  }),
              ],
          });
}
function ea(e) {
    let { currentCategorySkuId: l, handleTransition: s } = e,
        r = (0, A.$)("collection_index_related_drops"),
        { categories: a } = (function (e) {
            let { anchorCollectionId: l, limit: s, enabled: n = !0 } = e,
                r = t.useMemo(() => ({ applicationId: W.FYj, anchorCollectionId: l ?? "", limit: s }), [l, s]),
                a = n && null != l && "" !== l,
                i = (0, f.HX)(r);
            t.useEffect(() => {
                a && (0, f.Su)(r);
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
                C = (0, o.cf)(
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
                            .map((e) => C[e])
                            .filter((e) => null != e)
                            .map((e) => v.A.fromStorefrontCollectionRecord(e)),
                    [h, C],
                ),
                isLoading: a && null == c && "error" !== d,
            };
        })({ anchorCollectionId: l, limit: 12, enabled: r }),
        i = (0, o.bG)([E.A], () => E.A.categories),
        c = t.useCallback(
            (e) =>
                e.skuId !== l &&
                null != e.featuredBlockUrl &&
                !0 !== e.isOrbsExclusive &&
                (null == e.unpublishedAt || e.unpublishedAt > new Date()) &&
                !Z.MS.some((l) => {
                    let { categorySkuId: s } = l;
                    return s === e.skuId;
                }),
            [l],
        ),
        d = t.useMemo(() => {
            if (r) return a.filter(c).slice(0, 8);
            let e = [...i.values()],
                s = e.findIndex((e) => e.skuId === l);
            if (-1 === s) return [];
            let n = [];
            for (let l = 1; l <= e.length && n.length < 8; l++) {
                let t = e[(s + l) % e.length];
                c(t) && t.products.length > 0 && n.push(t);
            }
            return n;
        }, [r, a, i, l, c]);
    return 0 === d.length
        ? null
        : (0, n.jsxs)("div", {
              className: ee.t3,
              children: [
                  (0, n.jsx)("div", {
                      className: ee.bb,
                      children: (0, n.jsx)(G.D, {
                          variant: "heading-lg/semibold",
                          children: Q.intl.string(Q.t.EhRZ9o),
                      }),
                  }),
                  (0, n.jsx)(
                      D.A,
                      {
                          gap: "xl",
                          scrollStep: "item",
                          items: d,
                          getItemKey: el,
                          renderItem: (e, l, t) =>
                              (0, n.jsx)(ei, { category: e, index: t, handleTransition: s, listItemProps: l }, e.skuId),
                      },
                      l,
                  ),
              ],
          });
}
function ei(e) {
    let { category: l, index: s, handleTransition: t, listItemProps: r } = e;
    return (0, n.jsx)(j.R9, {
        newValue: { categoryPosition: s, pageCategory: l.name, pageSection: "related_drops", tilePosition: s },
        children: (0, n.jsx)("div", {
            className: ee.EU,
            children: (0, n.jsx)(q.S, {
                category: l,
                handleTransition: t,
                pageType: Z.G2.COLLECTION_INDEX,
                className: ee.vK,
                listItemProps: r,
            }),
        }),
    });
}
let ec = [
    { tab: Z.G2.AVATAR_DECORATIONS, label: () => Q.intl.string(Q.t.dRZYNE) },
    { tab: Z.G2.PROFILE_EFFECTS, label: () => Q.intl.string(Q.t["1cNjtx"]) },
    { tab: Z.G2.NAMEPLATES, label: () => Q.intl.string(Q.t.V68Fqz) },
    { tab: Z.G2.PROFILE_FRAMES, label: () => Q.intl.string(Q.t.ecTJkR) },
    { tab: Z.G2.BUNDLES, label: () => Q.intl.string(Q.t.FYFpps) },
];
function eo() {
    let e = (0, i.W6)();
    return (0, n.jsxs)("div", {
        className: ee.nb,
        children: [
            (0, n.jsx)(G.D, { variant: "heading-md/semibold", children: Q.intl.string(Q.t.Yr70c4) }),
            (0, n.jsx)("div", {
                className: ee.J2,
                children: ec.map((l) => {
                    let { tab: s, label: t } = l;
                    return (0, n.jsx)(
                        F.$,
                        { variant: "secondary", text: t(), onClick: () => e.push(W.BVt.COLLECTIBLES_SHOP_WITH_TAB(s)) },
                        s,
                    );
                }),
            }),
        ],
    });
}
function ed(e) {
    let { collectionId: l } = e,
        s = (0, i.W6)(),
        r = (0, j.uM)(),
        c = es(l, "collection_index_breadcrumb")?.name,
        o = t.useMemo(
            () => [
                { id: "shop_all", label: Q.intl.string(Q.t.xFcotU) },
                { id: "collection", label: c ?? "" },
            ],
            [c],
        ),
        d = t.useCallback(
            (e) => {
                "shop_all" === e.id &&
                    (H.default.track(W.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: r?.sessionId,
                        sku_id: l,
                        page_type: Z.G2.COLLECTION_INDEX,
                        page_category: c,
                        cta_name: "collection breadcrumb shop all",
                    }),
                    s.push(W.BVt.COLLECTIBLES_SHOP_WITH_TAB(Z.G2.CATALOG)));
            },
            [s, r?.sessionId, l, c],
        ),
        u = t.useCallback(
            (e, l) =>
                (0, n.jsxs)("span", {
                    className: a()(ee.u, { [ee.kG]: l }),
                    children: [e.label, !l && (0, n.jsx)("span", { className: ee.Tl, children: "/" })],
                }),
            [],
        );
    return (0, n.jsx)(U.A, {
        className: ee.C2,
        separatorClassName: ee.Lw,
        breadcrumbs: o,
        activeId: "collection",
        onBreadcrumbClick: d,
        renderCustomBreadcrumb: u,
    });
}
function eu() {
    return (0, n.jsxs)("div", {
        className: ee.kL,
        children: [
            (0, n.jsx)(J.A, { isLoading: !0, hideButton: !0, hideCards: !0, tab: Z.G2.COLLECTION_INDEX }),
            (0, n.jsx)("div", {
                className: ee.hd,
                children: (0, n.jsx)("div", {
                    className: ee.fr,
                    children: Array.from({ length: 8 }, (e, l) => (0, n.jsx)(K.A, {}, l)),
                }),
            }),
            (0, n.jsxs)("div", {
                className: ee.t3,
                children: [
                    (0, n.jsx)("div", { className: ee.bb, children: (0, n.jsx)("div", { className: ee.M$ }) }),
                    (0, n.jsxs)("div", {
                        className: ee.A9,
                        children: [(0, n.jsx)("div", { className: ee.nl }), (0, n.jsx)("div", { className: ee.nl })],
                    }),
                ],
            }),
        ],
    });
}
let eh = function (e) {
    let { collectionId: l } = e,
        s = (0, i.W6)(),
        r = es(l, "collection_index_page_content"),
        a = t.useCallback(
            (e) => {
                let { categorySkuId: l } = e;
                null != l && s.push(W.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(l));
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
    return (0, n.jsx)(V.iM, {
        tab: Z.G2.COLLECTION_INDEX,
        children: (0, n.jsxs)("div", {
            className: ee.kL,
            children: [
                o && null != c
                    ? (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsxs)("div", {
                                  className: ee.rz,
                                  children: [
                                      (0, n.jsx)("div", {
                                          className: ee.zn,
                                          children: (0, n.jsx)(ed, { collectionId: l }),
                                      }),
                                      (0, n.jsx)(J.A, {
                                          heroBlock: c,
                                          isLoading: !1,
                                          tab: Z.G2.COLLECTION_INDEX,
                                          hideButton: !0,
                                          hideCards: !0,
                                      }),
                                  ],
                              }),
                              (0, n.jsx)(er, { category: r }),
                              (0, n.jsx)(ea, { currentCategorySkuId: r.skuId, handleTransition: a }, r.skuId),
                          ],
                      })
                    : (0, n.jsxs)("div", {
                          className: ee.AW,
                          children: [
                              (0, n.jsx)("div", { className: ee.zn, children: (0, n.jsx)(ed, { collectionId: l }) }),
                              (0, n.jsx)("div", { className: ee.$T, children: (0, n.jsx)($.A, { category: r }) }),
                              (0, n.jsx)(er, { category: r }),
                              (0, n.jsx)(ea, { currentCategorySkuId: r.skuId, handleTransition: a }, r.skuId),
                          ],
                      }),
                (0, n.jsx)(eo, {}),
            ],
        }),
    });
};
var eC = s(415926),
    eg = s(783857),
    eI = s(170522);
function em(e) {
    let { scrollerRef: l, children: s } = e,
        { handleScroll: t } = (0, eC.r)(l, Z.G2.COLLECTION_INDEX);
    return (0, n.jsx)(u.Ch, { ref: l, onScroll: t, children: s });
}
let ex = function (e) {
    let { collectionId: l } = e,
        s = t.useRef(null),
        r = t.useRef(null);
    (0, x.P)(m.a);
    let u = (0, eg.yB)("CollectiblesShopIndexPage");
    (0, eg.gB)();
    let { selectedTab: f, transitionToTab: _, transitionState: N } = (0, k.o)(Z.G2.COLLECTION_INDEX);
    (0, b.pE)();
    let v = (0, A.$)("collection_index_page");
    ((0, S.Ay)({ stalePurchasesOK: !0, skipFetch: v }), (0, p.A)(W.FYj));
    let O = (0, C.A)((0, c.A)()),
        { category: B, state: P } = T(l, {
            enabled: v,
            includeUnpublished: (0, I.A)("shop_include_unpublished"),
            includePricing: !0,
        }),
        G = (0, o.bG)([E.A], () => (null != l ? E.A.getCategory(l) : void 0)),
        F = (0, o.bG)([E.A], () => E.A.isFetchingCategories),
        U = (0, o.bG)([E.A], () => null != E.A.lastSuccessfulFetch),
        D = (0, o.bG)([E.A], () => E.A.error),
        M = v ? (B ?? void 0) : G,
        { analyticsLocations: H } = (0, L.lC)(Z.G2.COLLECTION_INDEX);
    ((0, L.uS)(O, f, M?.name, N, { enabled: null != M }),
        t.useEffect(() => {
            r.current?.scrollTo({ to: 0 });
        }, [l]),
        t.useEffect(() => {
            (0, h.I)(W.BVt.COLLECTIBLES_SHOP);
        }, []));
    let V = (v ? "loading" !== P : !F && (U || null != D)) && null == M;
    return null == l || V
        ? (0, n.jsx)(i.rd, { to: W.BVt.COLLECTIBLES_SHOP })
        : M?.isOrbsExclusive === !0
          ? (0, n.jsx)(i.rd, { to: W.BVt.COLLECTIBLES_SHOP_WITH_TAB(Z.G2.ORBS) })
          : null == M
            ? (0, n.jsxs)("div", {
                  className: a()(eI.bx, { [eg.jP]: u }),
                  ref: s,
                  tabIndex: -1,
                  children: [
                      (0, n.jsx)(y.G, { handleTransition: _, selectedTab: f, selectedCollectionId: l }),
                      (0, n.jsx)(d.Ip, { children: (0, n.jsx)(eu, {}) }),
                  ],
              })
            : (0, n.jsx)(g.f5, {
                  value: H,
                  children: (0, n.jsx)(j.R9, {
                      newValue: { sessionId: O },
                      children: (0, n.jsxs)("div", {
                          className: a()(eI.bx, { [eg.jP]: u }),
                          ref: s,
                          tabIndex: -1,
                          children: [
                              (0, n.jsx)(y.G, { handleTransition: _, selectedTab: f, selectedCollectionId: l }),
                              (0, n.jsx)(R.A, { tab: f, handleTransition: _ }),
                              (0, n.jsx)(em, { scrollerRef: r, children: (0, n.jsx)(eh, { collectionId: l }) }),
                          ],
                      }),
                  }),
              });
};
