s.r(l), s.d(l, { default: () => ex });
var t = s(477900),
    n = s(582128),
    a = s(503698),
    r = s.n(a),
    i = s(806163),
    o = s(132500),
    c = s(17928),
    d = s(364522),
    u = s(944791),
    h = s(444927),
    g = s(688810),
    C = s(354328),
    x = s(475073),
    m = s(611924),
    p = s(744082),
    I = s(561794),
    b = s(440938),
    E = s(590180),
    A = s(50920),
    j = s(395856),
    L = s(790297),
    _ = s(350172),
    f = s(730202),
    N = s(295586),
    v = s(510801),
    O = s(682301);
function T(e) {
    let { enabled: l = !0, includeUnpublished: s = !1 } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        t = l && null != e ? e : "";
    n.useEffect(() => {
        "" !== t && N.p.requestCollections([t], { includeUnpublished: s });
    }, [t, s]);
    let { collection: a, fetchState: r } = (0, c.cf)(
            [f.A],
            () => ({ collection: f.A.getCollection(t), fetchState: f.A.getFetchState(t) }),
            [t],
        ),
        i = (0, O.Hd)(t, r),
        o = n.useMemo(() => (null != a ? v.A.fromStorefrontCollectionRecord(a) : null), [a]),
        d = n.useMemo(() => ("error" === r || i ? "error" : null != o ? "ready" : "loading"), [r, i, o]);
    return {
        category: o,
        state: d,
        retry: n.useCallback(() => {
            "" !== t &&
                (0, _._v)({
                    collectionIds: [t],
                    includeUnpublishedCollections: s,
                    includeUnpublishedProducts: s,
                    ignoreCache: !0,
                });
        }, [t, s]),
    };
}
var S = s(841702),
    R = s(983545),
    k = s(178504),
    y = s(235939);
s(321073);
var B = s(575593),
    F = s(651162),
    P = s(40474),
    G = s(297264),
    U = s(821609),
    M = s(449543),
    D = s(152858),
    H = s(287809),
    V = s(174459),
    w = s(161918),
    X = s(993408),
    W = s(511265),
    $ = s(13875),
    Y = s(652215),
    z = s(828515),
    K = s(110629),
    q = s(258245),
    J = s(484469),
    Z = s(196231),
    Q = s(337183),
    ee = s(758836),
    el = s(375708),
    es = s(146053);
function et(e, l) {
    let s = (0, j.$)(l),
        { category: t } = T(e, { enabled: s, includeUnpublished: (0, C.A)("shop_include_unpublished") }),
        n = (0, c.bG)([E.A], () => E.A.getCategory(e));
    return s ? (t ?? void 0) : n;
}
let en = { aspectRatio: "1 / 1" },
    ea = {
        [B.R.PROFILE_EFFECT]: { className: es.I5, aspectRatio: "1 / 2" },
        [B.R.BUNDLE]: { className: es.kP, aspectRatio: "2 / 1" },
    };
function er(e) {
    let { category: l } = e,
        s = (0, c.bG)([H.default], () => H.default.getCurrentUser()),
        n = (0, W.p)()(l.products);
    return null == s || 0 === n.length
        ? null
        : (0, t.jsx)("div", {
              className: es.hd,
              children: (0, t.jsx)("div", {
                  className: es.fr,
                  children: n.map((e, l) => {
                      let { className: s, aspectRatio: n } =
                          ea[
                              e.type === B.R.VARIANTS_GROUP &&
                              null != e.variants &&
                              e.variants.length > 0 &&
                              e.variants.every((e) => e.type === B.R.PROFILE_EFFECT)
                                  ? B.R.PROFILE_EFFECT
                                  : e.type
                          ] ?? en;
                      return (0, t.jsx)(
                          b.R9,
                          {
                              newValue: { tilePosition: l },
                              children: (0, t.jsx)(q.A, { skuId: e.skuId, cardClassName: s, aspectRatio: n }),
                          },
                          e.skuId,
                      );
                  }),
              }),
          });
}
function ei(e) {
    let { currentCategorySkuId: l, handleTransition: s } = e,
        a = (0, j.$)("collection_index_related_drops"),
        { categories: r } = (function (e) {
            let { anchorCollectionId: l, limit: s, enabled: t = !0 } = e,
                a = n.useMemo(() => ({ applicationId: Y.FYj, anchorCollectionId: l ?? "", limit: s }), [l, s]),
                r = t && null != l && "" !== l,
                i = (0, _.HX)(a);
            n.useEffect(() => {
                r && (0, _.Su)(a);
            }, [r, a]);
            let { collectionIds: o, fetchState: d } = (0, c.cf)(
                    [f.A],
                    () => ({
                        collectionIds: f.A.getCollectionsAfterIds(i),
                        fetchState: f.A.getCollectionsAfterFetchState(i),
                    }),
                    [i],
                ),
                u = n.useMemo(() => (r ? (o ?? []) : []), [r, o]),
                h = u.join(","),
                g = (0, c.cf)([f.A], () => {
                    let e = {};
                    for (let l of u) e[l] = f.A.getCollectionOrSummary(l);
                    return e;
                }, [u]);
            return {
                categories: n.useMemo(
                    () =>
                        u
                            .map((e) => g[e])
                            .filter((e) => null != e)
                            .map((e) => v.A.fromStorefrontCollectionRecord(e)),
                    [h, g],
                ),
                isLoading: r && null == o && "error" !== d,
            };
        })({ anchorCollectionId: l, limit: 12, enabled: a }),
        i = (0, c.bG)([E.A], () => E.A.categories),
        o = n.useCallback(
            (e) =>
                e.skuId !== l &&
                null != e.featuredBlockUrl &&
                !0 !== e.isOrbsExclusive &&
                (null == e.unpublishedAt || e.unpublishedAt > new Date()) &&
                !ee.MS.some((l) => {
                    let { categorySkuId: s } = l;
                    return s === e.skuId;
                }),
            [l],
        ),
        d = n.useMemo(() => {
            if (a) return r.filter(o).slice(0, 8);
            let e = [...i.values()],
                s = e.findIndex((e) => e.skuId === l);
            if (-1 === s) return [];
            let t = [];
            for (let l = 1; l <= e.length && t.length < 8; l++) {
                let n = e[(s + l) % e.length];
                o(n) && n.products.length > 0 && t.push(n);
            }
            return t;
        }, [a, r, i, l, o]);
    return 0 === d.length
        ? null
        : (0, t.jsxs)("div", {
              className: es.t3,
              children: [
                  (0, t.jsx)("div", {
                      className: es.bb,
                      children: (0, t.jsx)(G.D, {
                          variant: "heading-lg/semibold",
                          children: el.intl.string(el.t.EhRZ9o),
                      }),
                  }),
                  (0, t.jsx)(
                      M.A,
                      {
                          gap: "xl",
                          scrollBehavior: D.Uf.ITEM,
                          children: d.map((e, l) =>
                              (0, t.jsx)(
                                  b.R9,
                                  {
                                      newValue: {
                                          categoryPosition: l,
                                          pageCategory: e.name,
                                          pageSection: "related_drops",
                                          tilePosition: l,
                                      },
                                      children: (0, t.jsx)("div", {
                                          className: es.EU,
                                          children: (0, t.jsx)(Z.S, {
                                              category: e,
                                              badgeText: (0, X.HF)(e.unpublishedAt)
                                                  ? el.intl.string(el.t["h/uBCR"])
                                                  : void 0,
                                              handleTransition: s,
                                              pageType: ee.G2.COLLECTION_INDEX,
                                              className: es.vK,
                                          }),
                                      }),
                                  },
                                  e.skuId,
                              ),
                          ),
                      },
                      l,
                  ),
              ],
          });
}
let eo = [
    { tab: ee.G2.AVATAR_DECORATIONS, label: () => el.intl.string(el.t.dRZYNE) },
    { tab: ee.G2.PROFILE_EFFECTS, label: () => el.intl.string(el.t["1cNjtx"]) },
    { tab: ee.G2.NAMEPLATES, label: () => el.intl.string(el.t.V68Fqz) },
    { tab: ee.G2.PROFILE_FRAMES, label: () => el.intl.string(el.t.ecTJkR) },
    { tab: ee.G2.BUNDLES, label: () => el.intl.string(el.t.FYFpps) },
];
function ec() {
    let e = (0, i.W6)(),
        l = (0, $.sk)("CollectionPageFooter"),
        s = n.useMemo(
            () =>
                eo.filter((e) => {
                    let { tab: s } = e;
                    return l || s !== ee.G2.PROFILE_FRAMES;
                }),
            [l],
        );
    return (0, t.jsxs)("div", {
        className: es.nb,
        children: [
            (0, t.jsx)(G.D, { variant: "heading-md/semibold", children: el.intl.string(el.t.Yr70c4) }),
            (0, t.jsx)("div", {
                className: es.J2,
                children: s.map((l) => {
                    let { tab: s, label: n } = l;
                    return (0, t.jsx)(
                        U.$,
                        { variant: "secondary", text: n(), onClick: () => e.push(Y.BVt.COLLECTIBLES_SHOP_WITH_TAB(s)) },
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
        a = (0, b.uM)(),
        o = et(l, "collection_index_breadcrumb")?.name,
        c = n.useMemo(
            () => [
                { id: "shop_all", label: el.intl.string(el.t.xFcotU) },
                { id: "collection", label: o ?? "" },
            ],
            [o],
        ),
        d = n.useCallback(
            (e) => {
                "shop_all" === e.id &&
                    (V.default.track(Y.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: a?.sessionId,
                        sku_id: l,
                        page_type: ee.G2.COLLECTION_INDEX,
                        page_category: o,
                        cta_name: "collection breadcrumb shop all",
                    }),
                    s.push(Y.BVt.COLLECTIBLES_SHOP_WITH_TAB(ee.G2.CATALOG)));
            },
            [s, a?.sessionId, l, o],
        ),
        u = n.useCallback(
            (e, l) =>
                (0, t.jsxs)("span", {
                    className: r()(es.u, { [es.kG]: l }),
                    children: [e.label, !l && (0, t.jsx)("span", { className: es.Tl, children: "/" })],
                }),
            [],
        );
    return (0, t.jsx)(P.A, {
        className: es.C2,
        separatorClassName: es.Lw,
        breadcrumbs: c,
        activeId: "collection",
        onBreadcrumbClick: d,
        renderCustomBreadcrumb: u,
    });
}
function eu() {
    return (0, t.jsxs)("div", {
        className: es.kL,
        children: [
            (0, t.jsx)(Q.A, { isLoading: !0, hideButton: !0, hideCards: !0, tab: ee.G2.COLLECTION_INDEX }),
            (0, t.jsx)("div", {
                className: es.hd,
                children: (0, t.jsx)("div", {
                    className: es.fr,
                    children: Array.from({ length: 8 }, (e, l) => (0, t.jsx)(J.A, {}, l)),
                }),
            }),
            (0, t.jsxs)("div", {
                className: es.t3,
                children: [
                    (0, t.jsx)("div", { className: es.bb, children: (0, t.jsx)("div", { className: es.M$ }) }),
                    (0, t.jsxs)("div", {
                        className: es.A9,
                        children: [(0, t.jsx)("div", { className: es.nl }), (0, t.jsx)("div", { className: es.nl })],
                    }),
                ],
            }),
        ],
    });
}
let eh = function (e) {
    let { collectionId: l } = e,
        s = (0, i.W6)(),
        a = et(l, "collection_index_page_content"),
        r = n.useMemo(() => a?.products.some((e) => e.type === B.R.PROFILE_FRAME) ?? !1, [a]),
        o = n.useCallback(
            (e) => {
                let { categorySkuId: l } = e;
                null != l && s.push(Y.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(l));
            },
            [s],
        ),
        c = n.useMemo(
            () =>
                null == a
                    ? null
                    : {
                          rankedSkuIds: a.heroRanking ?? [],
                          name: a.name,
                          unpublishedAt: a.unpublishedAt,
                          categorySkuId: a.skuId,
                          summary: a.summary,
                          type: F.g.HERO,
                          categoryStoreListingId: a.storeListingId,
                          bannerDisplayConfig: a.heroBannerDisplayConfig,
                          logoDisplayConfig: a.heroLogoDisplayConfig,
                          heroLogoUrl: a.heroLogoUrl,
                          heroBannerUrl: a.heroBannerUrl,
                          heroBannerAnimatedUrl: a.heroBannerAnimatedUrl,
                          heroRiveUrl: a.heroRiveUrl,
                      },
            [a],
        );
    if (null == a) return null;
    let d = null != a.heroBannerUrl || null != a.heroRiveUrl;
    return (0, t.jsx)(w.iM, {
        tab: ee.G2.COLLECTION_INDEX,
        children: (0, t.jsxs)("div", {
            className: es.kL,
            children: [
                d && null != c
                    ? (0, t.jsxs)(t.Fragment, {
                          children: [
                              (0, t.jsxs)("div", {
                                  className: es.rz,
                                  children: [
                                      (0, t.jsx)("div", {
                                          className: es.zn,
                                          children: (0, t.jsx)(ed, { collectionId: l }),
                                      }),
                                      (0, t.jsx)(Q.A, {
                                          heroBlock: c,
                                          isLoading: !1,
                                          tab: ee.G2.COLLECTION_INDEX,
                                          badge: r ? (0, t.jsx)(K.A, { location: "CollectionIndexPage" }) : void 0,
                                          hideButton: !0,
                                          hideCards: !0,
                                      }),
                                  ],
                              }),
                              (0, t.jsx)(er, { category: a }),
                              (0, t.jsx)(ei, { currentCategorySkuId: a.skuId, handleTransition: o }, a.skuId),
                          ],
                      })
                    : (0, t.jsxs)("div", {
                          className: es.AW,
                          children: [
                              (0, t.jsx)("div", { className: es.zn, children: (0, t.jsx)(ed, { collectionId: l }) }),
                              (0, t.jsx)("div", { className: es.$T, children: (0, t.jsx)(z.A, { category: a }) }),
                              (0, t.jsx)(er, { category: a }),
                              (0, t.jsx)(ei, { currentCategorySkuId: a.skuId, handleTransition: o }, a.skuId),
                          ],
                      }),
                (0, t.jsx)(ec, {}),
            ],
        }),
    });
};
var eg = s(146919),
    eC = s(170522);
let ex = function (e) {
    let { collectionId: l } = e,
        s = n.useRef(null),
        a = n.useRef(null);
    (0, m.P)(x.a);
    let _ = (0, eg.yB)("CollectiblesShopIndexPage");
    (0, eg.gB)();
    let { selectedTab: f, transitionToTab: N, transitionState: v } = (0, R.o)(ee.G2.COLLECTION_INDEX);
    (0, I.pE)();
    let O = (0, j.$)("collection_index_page");
    (0, S.Ay)({ stalePurchasesOK: !0, skipFetch: O }), (0, p.A)(Y.FYj);
    let B = (0, h.A)((0, o.A)()),
        F = (0, A.a)("CollectiblesShopIndexPage"),
        { category: P, state: G } = T(l, { enabled: O, includeUnpublished: (0, C.A)("shop_include_unpublished") }),
        U = (0, c.bG)([E.A], () => (null != l ? E.A.getCategory(l) : void 0)),
        M = (0, c.bG)([E.A], () => E.A.isFetchingCategories),
        D = (0, c.bG)([E.A], () => null != E.A.lastSuccessfulFetch),
        H = (0, c.bG)([E.A], () => E.A.error),
        V = O ? (P ?? void 0) : U,
        { analyticsLocations: w } = (0, L.lC)(ee.G2.COLLECTION_INDEX);
    (0, L.uS)(B, f, V?.name, v),
        n.useEffect(() => {
            a.current?.scrollTo({ top: 0 });
        }, [l]),
        n.useEffect(() => {
            (0, u.I)(Y.BVt.COLLECTIBLES_SHOP);
        }, []);
    let X = (O ? "loading" !== G : !M && (D || null != H)) && null == V;
    return null == l || !F || X
        ? (0, t.jsx)(i.rd, { to: Y.BVt.COLLECTIBLES_SHOP })
        : V?.isOrbsExclusive === !0
          ? (0, t.jsx)(i.rd, { to: Y.BVt.COLLECTIBLES_SHOP_WITH_TAB(ee.G2.ORBS) })
          : null == V
            ? (0, t.jsxs)("div", {
                  className: r()(eC.bx, { [eg.jP]: _ }),
                  ref: s,
                  tabIndex: -1,
                  children: [
                      (0, t.jsx)(k.G, { handleTransition: N, selectedTab: f }),
                      (0, t.jsx)(d.Ip, { children: (0, t.jsx)(eu, {}) }),
                  ],
              })
            : (0, t.jsx)(g.f5, {
                  value: w,
                  children: (0, t.jsx)(b.R9, {
                      newValue: { sessionId: B },
                      children: (0, t.jsxs)("div", {
                          className: r()(eC.bx, { [eg.jP]: _ }),
                          ref: s,
                          tabIndex: -1,
                          children: [
                              (0, t.jsx)(k.G, { handleTransition: N, selectedTab: f }),
                              (0, t.jsx)(y.A, { tab: f, handleTransition: N }),
                              (0, t.jsx)(d.Ip, { ref: a, children: (0, t.jsx)(eh, { collectionId: l }) }),
                          ],
                      }),
                  }),
              });
};
