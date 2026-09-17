(s.r(l), s.d(l, { default: () => em }));
var t = s(477900),
    n = s(582128),
    i = s(503698),
    a = s.n(i),
    r = s(806163),
    o = s(132500),
    c = s(17928),
    d = s(364522),
    u = s(944791),
    h = s(444927),
    g = s(688810),
    x = s(354328),
    I = s(475073),
    C = s(611924),
    m = s(744082),
    p = s(594832),
    b = s(440938),
    j = s(590180),
    A = s(50920),
    E = s(395856),
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
            includePricing: t = !1,
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        i = l && null != e ? e : "";
    n.useEffect(() => {
        "" !== i && N.p.requestCollections([i], { includeUnpublished: s, includePricing: t });
    }, [i, s, t]);
    let { collection: a, fetchState: r } = (0, c.cf)(
            [_.A],
            () => ({ collection: _.A.getCollection(i), fetchState: _.A.getFetchState(i) }),
            [i],
        ),
        o = (0, T.Hd)(i, r),
        d = n.useMemo(() => (null != a ? v.A.fromStorefrontCollectionRecord(a) : null), [a]),
        u = n.useMemo(() => ("error" === r || o ? "error" : null != d ? "ready" : "loading"), [r, o, d]);
    return {
        category: d,
        state: u,
        retry: n.useCallback(() => {
            "" !== i &&
                (0, L._v)({
                    collectionIds: [i],
                    includeUnpublishedCollections: s,
                    includeUnpublishedProducts: s,
                    includePricing: t,
                    ignoreCache: !0,
                });
        }, [i, s, t]),
    };
}
var S = s(841702),
    k = s(983545),
    y = s(626148),
    R = s(235939);
s(321073);
var B = s(575593),
    P = s(651162),
    F = s(40474),
    G = s(297264),
    U = s(821609),
    D = s(449543),
    M = s(152858),
    H = s(197935),
    V = s(287809),
    w = s(174459),
    X = s(161918),
    W = s(993408),
    $ = s(879221),
    Y = s(511265),
    z = s(652215),
    K = s(828515),
    q = s(258245),
    J = s(484469),
    Z = s(196231),
    Q = s(93938),
    ee = s(758836),
    el = s(375708),
    es = s(146053);
function et(e) {
    return e.skuId;
}
function en(e, l) {
    let s = (0, E.$)(l),
        { category: t } = O(e, {
            enabled: s,
            includeUnpublished: (0, x.A)("shop_include_unpublished"),
            includePricing: !0,
        }),
        n = (0, c.bG)([j.A], () => j.A.getCategory(e));
    return s ? (t ?? void 0) : n;
}
let ei = { aspectRatio: "1 / 1" },
    ea = {
        [B.R.PROFILE_EFFECT]: { className: es.I5, aspectRatio: "1 / 2" },
        [B.R.BUNDLE]: { className: es.kP, aspectRatio: "2 / 1" },
    };
function er(e) {
    let { category: l } = e,
        s = (0, c.bG)([V.default], () => V.default.getCurrentUser()),
        n = (0, Y.p)()(l.products);
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
                          ] ?? ei;
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
function eo(e) {
    let { currentCategorySkuId: l, handleTransition: s } = e,
        i = (0, E.$)("collection_index_related_drops"),
        a = (0, $.O)("related_drops"),
        { categories: r } = (function (e) {
            let { anchorCollectionId: l, limit: s, enabled: t = !0 } = e,
                i = n.useMemo(() => ({ applicationId: z.FYj, anchorCollectionId: l ?? "", limit: s }), [l, s]),
                a = t && null != l && "" !== l,
                r = (0, L.HX)(i);
            n.useEffect(() => {
                a && (0, L.Su)(i);
            }, [a, i]);
            let { collectionIds: o, fetchState: d } = (0, c.cf)(
                    [_.A],
                    () => ({
                        collectionIds: _.A.getCollectionsAfterIds(r),
                        fetchState: _.A.getCollectionsAfterFetchState(r),
                    }),
                    [r],
                ),
                u = n.useMemo(() => (a ? (o ?? []) : []), [a, o]),
                h = u.join(","),
                g = (0, c.cf)(
                    [_.A],
                    () => {
                        let e = {};
                        for (let l of u) e[l] = _.A.getCollectionOrSummary(l);
                        return e;
                    },
                    [u],
                );
            return {
                categories: n.useMemo(
                    () =>
                        u
                            .map((e) => g[e])
                            .filter((e) => null != e)
                            .map((e) => v.A.fromStorefrontCollectionRecord(e)),
                    [h, g],
                ),
                isLoading: a && null == o && "error" !== d,
            };
        })({ anchorCollectionId: l, limit: 12, enabled: i }),
        o = (0, c.bG)([j.A], () => j.A.categories),
        d = n.useCallback(
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
        u = n.useMemo(() => {
            if (i) return r.filter(d).slice(0, 8);
            let e = [...o.values()],
                s = e.findIndex((e) => e.skuId === l);
            if (-1 === s) return [];
            let t = [];
            for (let l = 1; l <= e.length && t.length < 8; l++) {
                let n = e[(s + l) % e.length];
                d(n) && n.products.length > 0 && t.push(n);
            }
            return t;
        }, [i, r, o, l, d]);
    return 0 === u.length
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
                  a
                      ? (0, t.jsx)(
                            H.A,
                            {
                                gap: "xl",
                                scrollStep: "item",
                                items: u,
                                getItemKey: et,
                                renderItem: (e, l, n) =>
                                    (0, t.jsx)(
                                        ec,
                                        { category: e, index: n, handleTransition: s, listItemProps: l },
                                        e.skuId,
                                    ),
                            },
                            l,
                        )
                      : (0, t.jsx)(
                            D.A,
                            {
                                gap: "xl",
                                scrollBehavior: M.Uf.ITEM,
                                children: u.map((e, l) =>
                                    (0, t.jsx)(ec, { category: e, index: l, handleTransition: s }, e.skuId),
                                ),
                            },
                            l,
                        ),
              ],
          });
}
function ec(e) {
    let { category: l, index: s, handleTransition: n, listItemProps: i } = e;
    return (0, t.jsx)(b.R9, {
        newValue: { categoryPosition: s, pageCategory: l.name, pageSection: "related_drops", tilePosition: s },
        children: (0, t.jsx)("div", {
            className: es.EU,
            children: (0, t.jsx)(Z.S, {
                category: l,
                badgeText: (0, W.HF)(l.unpublishedAt) ? el.intl.string(el.t["h/uBCR"]) : void 0,
                handleTransition: n,
                pageType: ee.G2.COLLECTION_INDEX,
                className: es.vK,
                listItemProps: i,
            }),
        }),
    });
}
let ed = [
    { tab: ee.G2.AVATAR_DECORATIONS, label: () => el.intl.string(el.t.dRZYNE) },
    { tab: ee.G2.PROFILE_EFFECTS, label: () => el.intl.string(el.t["1cNjtx"]) },
    { tab: ee.G2.NAMEPLATES, label: () => el.intl.string(el.t.V68Fqz) },
    { tab: ee.G2.PROFILE_FRAMES, label: () => el.intl.string(el.t.ecTJkR) },
    { tab: ee.G2.BUNDLES, label: () => el.intl.string(el.t.FYFpps) },
];
function eu() {
    let e = (0, r.W6)();
    return (0, t.jsxs)("div", {
        className: es.nb,
        children: [
            (0, t.jsx)(G.D, { variant: "heading-md/semibold", children: el.intl.string(el.t.Yr70c4) }),
            (0, t.jsx)("div", {
                className: es.J2,
                children: ed.map((l) => {
                    let { tab: s, label: n } = l;
                    return (0, t.jsx)(
                        U.$,
                        { variant: "secondary", text: n(), onClick: () => e.push(z.BVt.COLLECTIBLES_SHOP_WITH_TAB(s)) },
                        s,
                    );
                }),
            }),
        ],
    });
}
function eh(e) {
    let { collectionId: l } = e,
        s = (0, r.W6)(),
        i = (0, b.uM)(),
        o = en(l, "collection_index_breadcrumb")?.name,
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
                    (w.default.track(z.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: i?.sessionId,
                        sku_id: l,
                        page_type: ee.G2.COLLECTION_INDEX,
                        page_category: o,
                        cta_name: "collection breadcrumb shop all",
                    }),
                    s.push(z.BVt.COLLECTIBLES_SHOP_WITH_TAB(ee.G2.CATALOG)));
            },
            [s, i?.sessionId, l, o],
        ),
        u = n.useCallback(
            (e, l) =>
                (0, t.jsxs)("span", {
                    className: a()(es.u, { [es.kG]: l }),
                    children: [e.label, !l && (0, t.jsx)("span", { className: es.Tl, children: "/" })],
                }),
            [],
        );
    return (0, t.jsx)(F.A, {
        className: es.C2,
        separatorClassName: es.Lw,
        breadcrumbs: c,
        activeId: "collection",
        onBreadcrumbClick: d,
        renderCustomBreadcrumb: u,
    });
}
function eg() {
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
let ex = function (e) {
    let { collectionId: l } = e,
        s = (0, r.W6)(),
        i = en(l, "collection_index_page_content"),
        a = n.useCallback(
            (e) => {
                let { categorySkuId: l } = e;
                null != l && s.push(z.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(l));
            },
            [s],
        ),
        o = n.useMemo(
            () =>
                null == i
                    ? null
                    : {
                          rankedSkuIds: i.heroRanking ?? [],
                          name: i.name,
                          unpublishedAt: i.unpublishedAt,
                          categorySkuId: i.skuId,
                          summary: i.summary,
                          type: P.g.HERO,
                          categoryStoreListingId: i.storeListingId,
                          bannerDisplayConfig: i.heroBannerDisplayConfig,
                          logoDisplayConfig: i.heroLogoDisplayConfig,
                          heroLogoUrl: i.heroLogoUrl,
                          heroBannerUrl: i.heroBannerUrl,
                          heroBannerAnimatedUrl: i.heroBannerAnimatedUrl,
                          heroRiveUrl: i.heroRiveUrl,
                      },
            [i],
        );
    if (null == i) return null;
    let c = null != i.heroBannerUrl || null != i.heroRiveUrl;
    return (0, t.jsx)(X.iM, {
        tab: ee.G2.COLLECTION_INDEX,
        children: (0, t.jsxs)("div", {
            className: es.kL,
            children: [
                c && null != o
                    ? (0, t.jsxs)(t.Fragment, {
                          children: [
                              (0, t.jsxs)("div", {
                                  className: es.rz,
                                  children: [
                                      (0, t.jsx)("div", {
                                          className: es.zn,
                                          children: (0, t.jsx)(eh, { collectionId: l }),
                                      }),
                                      (0, t.jsx)(Q.A, {
                                          heroBlock: o,
                                          isLoading: !1,
                                          tab: ee.G2.COLLECTION_INDEX,
                                          hideButton: !0,
                                          hideCards: !0,
                                      }),
                                  ],
                              }),
                              (0, t.jsx)(er, { category: i }),
                              (0, t.jsx)(eo, { currentCategorySkuId: i.skuId, handleTransition: a }, i.skuId),
                          ],
                      })
                    : (0, t.jsxs)("div", {
                          className: es.AW,
                          children: [
                              (0, t.jsx)("div", { className: es.zn, children: (0, t.jsx)(eh, { collectionId: l }) }),
                              (0, t.jsx)("div", { className: es.$T, children: (0, t.jsx)(K.A, { category: i }) }),
                              (0, t.jsx)(er, { category: i }),
                              (0, t.jsx)(eo, { currentCategorySkuId: i.skuId, handleTransition: a }, i.skuId),
                          ],
                      }),
                (0, t.jsx)(eu, {}),
            ],
        }),
    });
};
var eI = s(146919),
    eC = s(170522);
let em = function (e) {
    let { collectionId: l } = e,
        s = n.useRef(null),
        i = n.useRef(null);
    (0, C.P)(I.a);
    let L = (0, eI.yB)("CollectiblesShopIndexPage");
    (0, eI.gB)();
    let { selectedTab: _, transitionToTab: N, transitionState: v } = (0, k.o)(ee.G2.COLLECTION_INDEX);
    (0, p.pE)();
    let T = (0, E.$)("collection_index_page");
    ((0, S.Ay)({ stalePurchasesOK: !0, skipFetch: T }), (0, m.A)(z.FYj));
    let B = (0, h.A)((0, o.A)()),
        P = (0, A.a)("CollectiblesShopIndexPage"),
        { category: F, state: G } = O(l, {
            enabled: T,
            includeUnpublished: (0, x.A)("shop_include_unpublished"),
            includePricing: !0,
        }),
        U = (0, c.bG)([j.A], () => (null != l ? j.A.getCategory(l) : void 0)),
        D = (0, c.bG)([j.A], () => j.A.isFetchingCategories),
        M = (0, c.bG)([j.A], () => null != j.A.lastSuccessfulFetch),
        H = (0, c.bG)([j.A], () => j.A.error),
        V = T ? (F ?? void 0) : U,
        { analyticsLocations: w } = (0, f.lC)(ee.G2.COLLECTION_INDEX);
    ((0, f.uS)(B, _, V?.name, v),
        n.useEffect(() => {
            i.current?.scrollTo({ top: 0 });
        }, [l]),
        n.useEffect(() => {
            (0, u.I)(z.BVt.COLLECTIBLES_SHOP);
        }, []));
    let X = (T ? "loading" !== G : !D && (M || null != H)) && null == V;
    return null == l || !P || X
        ? (0, t.jsx)(r.rd, { to: z.BVt.COLLECTIBLES_SHOP })
        : V?.isOrbsExclusive === !0
          ? (0, t.jsx)(r.rd, { to: z.BVt.COLLECTIBLES_SHOP_WITH_TAB(ee.G2.ORBS) })
          : null == V
            ? (0, t.jsxs)("div", {
                  className: a()(eC.bx, { [eI.jP]: L }),
                  ref: s,
                  tabIndex: -1,
                  children: [
                      (0, t.jsx)(y.G, { handleTransition: N, selectedTab: _, selectedCollectionId: l }),
                      (0, t.jsx)(d.Ip, { children: (0, t.jsx)(eg, {}) }),
                  ],
              })
            : (0, t.jsx)(g.f5, {
                  value: w,
                  children: (0, t.jsx)(b.R9, {
                      newValue: { sessionId: B },
                      children: (0, t.jsxs)("div", {
                          className: a()(eC.bx, { [eI.jP]: L }),
                          ref: s,
                          tabIndex: -1,
                          children: [
                              (0, t.jsx)(y.G, { handleTransition: N, selectedTab: _, selectedCollectionId: l }),
                              (0, t.jsx)(R.A, { tab: _, handleTransition: N }),
                              (0, t.jsx)(d.Ip, { ref: i, children: (0, t.jsx)(ex, { collectionId: l }) }),
                          ],
                      }),
                  }),
              });
};
