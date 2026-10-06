(s.r(l), s.d(l, { default: () => eb }));
var n = s(477900),
    t = s(582128),
    a = s(503698),
    i = s.n(a),
    r = s(806163),
    c = s(132500),
    o = s(17928),
    d = s(364522),
    u = s(944791),
    h = s(444927),
    g = s(688810),
    x = s(354328),
    I = s(475073),
    m = s(611924),
    C = s(744082),
    p = s(594832),
    b = s(440938),
    j = s(590180),
    A = s(395856),
    E = s(790297),
    f = s(350172),
    L = s(730202),
    _ = s(295586),
    N = s(510801),
    v = s(682301);
function T(e) {
    let {
            enabled: l = !0,
            includeUnpublished: s = !1,
            includePricing: n = !1,
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        a = l && null != e ? e : "";
    t.useEffect(() => {
        "" !== a && _.p.requestCollections([a], { includeUnpublished: s, includePricing: n });
    }, [a, s, n]);
    let { collection: i, fetchState: r } = (0, o.cf)(
            [L.A],
            () => ({ collection: L.A.getCollection(a), fetchState: L.A.getFetchState(a) }),
            [a],
        ),
        c = (0, v.Hd)(a, r),
        d = t.useMemo(() => (null != i ? N.A.fromStorefrontCollectionRecord(i) : null), [i]),
        u = t.useMemo(() => ("error" === r || c ? "error" : null != d ? "ready" : "loading"), [r, c, d]);
    return {
        category: d,
        state: u,
        retry: t.useCallback(() => {
            "" !== a &&
                (0, f._v)({
                    collectionIds: [a],
                    includeUnpublishedCollections: s,
                    includeUnpublishedProducts: s,
                    includePricing: n,
                    ignoreCache: !0,
                });
        }, [a, s, n]),
    };
}
var O = s(841702),
    k = s(983545),
    S = s(626148),
    y = s(235939);
s(321073);
var R = s(575593),
    B = s(651162),
    F = s(297264),
    P = s(821609),
    G = s(40474),
    U = s(449543),
    D = s(152858),
    M = s(197935),
    H = s(65238),
    V = s(287809),
    w = s(174459),
    X = s(161918),
    W = s(993408),
    Y = s(275161),
    $ = s(511265),
    z = s(304210),
    K = s(652215),
    q = s(828515),
    J = s(442036),
    Z = s(258245),
    Q = s(484469),
    ee = s(196231),
    el = s(946052),
    es = s(758836),
    en = s(375708),
    et = s(146053);
function ea(e) {
    return e.skuId;
}
function ei(e, l) {
    let s = (0, A.$)(l),
        { category: n } = T(e, {
            enabled: s,
            includeUnpublished: (0, x.A)("shop_include_unpublished"),
            includePricing: !0,
        }),
        t = (0, o.bG)([j.A], () => j.A.getCategory(e));
    return s ? (n ?? void 0) : t;
}
let er = { aspectRatio: "1 / 1" },
    ec = {
        [R.R.PROFILE_EFFECT]: { className: et.I5, aspectRatio: "1 / 2" },
        [R.R.BUNDLE]: { className: et.kP, aspectRatio: "2 / 1" },
    };
function eo(e) {
    let l,
        s,
        { category: t } = e,
        a = (0, o.bG)([V.default], () => V.default.getCurrentUser()),
        i = (0, $.p)(),
        r =
            ((l = (0, z.S)()),
            (s = (0, H.XF)(l)),
            null != l && s?.collectionId === t.skuId && (null == l.endsAt || l.endsAt > new Date())),
        c = i(t.products);
    return null == a || 0 === c.length
        ? null
        : (0, n.jsxs)("div", {
              className: et.hd,
              children: [
                  r && (0, n.jsx)(J.A, { className: et.aQ }),
                  (0, n.jsx)("div", {
                      className: et.fr,
                      children: c.map((e, l) => {
                          let { className: s, aspectRatio: t } =
                              ec[
                                  e.type === R.R.VARIANTS_GROUP &&
                                  null != e.variants &&
                                  e.variants.length > 0 &&
                                  e.variants.every((e) => e.type === R.R.PROFILE_EFFECT)
                                      ? R.R.PROFILE_EFFECT
                                      : e.type
                              ] ?? er;
                          return (0, n.jsx)(
                              b.R9,
                              {
                                  newValue: { tilePosition: l },
                                  children: (0, n.jsx)(Z.A, { skuId: e.skuId, cardClassName: s, aspectRatio: t }),
                              },
                              e.skuId,
                          );
                      }),
                  }),
              ],
          });
}
function ed(e) {
    let { currentCategorySkuId: l, handleTransition: s } = e,
        a = (0, A.$)("collection_index_related_drops"),
        i = (0, Y.Y)("related_drops"),
        { categories: r } = (function (e) {
            let { anchorCollectionId: l, limit: s, enabled: n = !0 } = e,
                a = t.useMemo(() => ({ applicationId: K.FYj, anchorCollectionId: l ?? "", limit: s }), [l, s]),
                i = n && null != l && "" !== l,
                r = (0, f.HX)(a);
            t.useEffect(() => {
                i && (0, f.Su)(a);
            }, [i, a]);
            let { collectionIds: c, fetchState: d } = (0, o.cf)(
                    [L.A],
                    () => ({
                        collectionIds: L.A.getCollectionsAfterIds(r),
                        fetchState: L.A.getCollectionsAfterFetchState(r),
                    }),
                    [r],
                ),
                u = t.useMemo(() => (i ? (c ?? []) : []), [i, c]),
                h = u.join(","),
                g = (0, o.cf)(
                    [L.A],
                    () => {
                        let e = {};
                        for (let l of u) e[l] = L.A.getCollectionOrSummary(l);
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
                            .map((e) => N.A.fromStorefrontCollectionRecord(e)),
                    [h, g],
                ),
                isLoading: i && null == c && "error" !== d,
            };
        })({ anchorCollectionId: l, limit: 12, enabled: a }),
        c = (0, o.bG)([j.A], () => j.A.categories),
        d = t.useCallback(
            (e) =>
                e.skuId !== l &&
                null != e.featuredBlockUrl &&
                !0 !== e.isOrbsExclusive &&
                (null == e.unpublishedAt || e.unpublishedAt > new Date()) &&
                !es.MS.some((l) => {
                    let { categorySkuId: s } = l;
                    return s === e.skuId;
                }),
            [l],
        ),
        u = t.useMemo(() => {
            if (a) return r.filter(d).slice(0, 8);
            let e = [...c.values()],
                s = e.findIndex((e) => e.skuId === l);
            if (-1 === s) return [];
            let n = [];
            for (let l = 1; l <= e.length && n.length < 8; l++) {
                let t = e[(s + l) % e.length];
                d(t) && t.products.length > 0 && n.push(t);
            }
            return n;
        }, [a, r, c, l, d]);
    return 0 === u.length
        ? null
        : (0, n.jsxs)("div", {
              className: et.t3,
              children: [
                  (0, n.jsx)("div", {
                      className: et.bb,
                      children: (0, n.jsx)(F.D, {
                          variant: "heading-lg/semibold",
                          children: en.intl.string(en.t.EhRZ9o),
                      }),
                  }),
                  i
                      ? (0, n.jsx)(
                            M.A,
                            {
                                gap: "xl",
                                scrollStep: "item",
                                items: u,
                                getItemKey: ea,
                                renderItem: (e, l, t) =>
                                    (0, n.jsx)(
                                        eu,
                                        { category: e, index: t, handleTransition: s, listItemProps: l },
                                        e.skuId,
                                    ),
                            },
                            l,
                        )
                      : (0, n.jsx)(
                            U.A,
                            {
                                gap: "xl",
                                scrollBehavior: D.Uf.ITEM,
                                children: u.map((e, l) =>
                                    (0, n.jsx)(eu, { category: e, index: l, handleTransition: s }, e.skuId),
                                ),
                            },
                            l,
                        ),
              ],
          });
}
function eu(e) {
    let { category: l, index: s, handleTransition: t, listItemProps: a } = e;
    return (0, n.jsx)(b.R9, {
        newValue: { categoryPosition: s, pageCategory: l.name, pageSection: "related_drops", tilePosition: s },
        children: (0, n.jsx)("div", {
            className: et.EU,
            children: (0, n.jsx)(ee.S, {
                category: l,
                badgeText: (0, W.HF)(l.unpublishedAt) ? en.intl.string(en.t["h/uBCR"]) : void 0,
                handleTransition: t,
                pageType: es.G2.COLLECTION_INDEX,
                className: et.vK,
                listItemProps: a,
            }),
        }),
    });
}
let eh = [
    { tab: es.G2.AVATAR_DECORATIONS, label: () => en.intl.string(en.t.dRZYNE) },
    { tab: es.G2.PROFILE_EFFECTS, label: () => en.intl.string(en.t["1cNjtx"]) },
    { tab: es.G2.NAMEPLATES, label: () => en.intl.string(en.t.V68Fqz) },
    { tab: es.G2.PROFILE_FRAMES, label: () => en.intl.string(en.t.ecTJkR) },
    { tab: es.G2.BUNDLES, label: () => en.intl.string(en.t.FYFpps) },
];
function eg() {
    let e = (0, r.W6)();
    return (0, n.jsxs)("div", {
        className: et.nb,
        children: [
            (0, n.jsx)(F.D, { variant: "heading-md/semibold", children: en.intl.string(en.t.Yr70c4) }),
            (0, n.jsx)("div", {
                className: et.J2,
                children: eh.map((l) => {
                    let { tab: s, label: t } = l;
                    return (0, n.jsx)(
                        P.$,
                        { variant: "secondary", text: t(), onClick: () => e.push(K.BVt.COLLECTIBLES_SHOP_WITH_TAB(s)) },
                        s,
                    );
                }),
            }),
        ],
    });
}
function ex(e) {
    let { collectionId: l } = e,
        s = (0, r.W6)(),
        a = (0, b.uM)(),
        c = ei(l, "collection_index_breadcrumb")?.name,
        o = t.useMemo(
            () => [
                { id: "shop_all", label: en.intl.string(en.t.xFcotU) },
                { id: "collection", label: c ?? "" },
            ],
            [c],
        ),
        d = t.useCallback(
            (e) => {
                "shop_all" === e.id &&
                    (w.default.track(K.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: a?.sessionId,
                        sku_id: l,
                        page_type: es.G2.COLLECTION_INDEX,
                        page_category: c,
                        cta_name: "collection breadcrumb shop all",
                    }),
                    s.push(K.BVt.COLLECTIBLES_SHOP_WITH_TAB(es.G2.CATALOG)));
            },
            [s, a?.sessionId, l, c],
        ),
        u = t.useCallback(
            (e, l) =>
                (0, n.jsxs)("span", {
                    className: i()(et.u, { [et.kG]: l }),
                    children: [e.label, !l && (0, n.jsx)("span", { className: et.Tl, children: "/" })],
                }),
            [],
        );
    return (0, n.jsx)(G.A, {
        className: et.C2,
        separatorClassName: et.Lw,
        breadcrumbs: o,
        activeId: "collection",
        onBreadcrumbClick: d,
        renderCustomBreadcrumb: u,
    });
}
function eI() {
    return (0, n.jsxs)("div", {
        className: et.kL,
        children: [
            (0, n.jsx)(el.A, { isLoading: !0, hideButton: !0, hideCards: !0, tab: es.G2.COLLECTION_INDEX }),
            (0, n.jsx)("div", {
                className: et.hd,
                children: (0, n.jsx)("div", {
                    className: et.fr,
                    children: Array.from({ length: 8 }, (e, l) => (0, n.jsx)(Q.A, {}, l)),
                }),
            }),
            (0, n.jsxs)("div", {
                className: et.t3,
                children: [
                    (0, n.jsx)("div", { className: et.bb, children: (0, n.jsx)("div", { className: et.M$ }) }),
                    (0, n.jsxs)("div", {
                        className: et.A9,
                        children: [(0, n.jsx)("div", { className: et.nl }), (0, n.jsx)("div", { className: et.nl })],
                    }),
                ],
            }),
        ],
    });
}
let em = function (e) {
    let { collectionId: l } = e,
        s = (0, r.W6)(),
        a = ei(l, "collection_index_page_content"),
        i = t.useCallback(
            (e) => {
                let { categorySkuId: l } = e;
                null != l && s.push(K.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(l));
            },
            [s],
        ),
        c = t.useMemo(
            () =>
                null == a
                    ? null
                    : {
                          rankedSkuIds: a.heroRanking ?? [],
                          name: a.name,
                          unpublishedAt: a.unpublishedAt,
                          categorySkuId: a.skuId,
                          summary: a.summary,
                          type: B.g.HERO,
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
    let o = null != a.heroBannerUrl || null != a.heroRiveUrl;
    return (0, n.jsx)(X.iM, {
        tab: es.G2.COLLECTION_INDEX,
        children: (0, n.jsxs)("div", {
            className: et.kL,
            children: [
                o && null != c
                    ? (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsxs)("div", {
                                  className: et.rz,
                                  children: [
                                      (0, n.jsx)("div", {
                                          className: et.zn,
                                          children: (0, n.jsx)(ex, { collectionId: l }),
                                      }),
                                      (0, n.jsx)(el.A, {
                                          heroBlock: c,
                                          isLoading: !1,
                                          tab: es.G2.COLLECTION_INDEX,
                                          hideButton: !0,
                                          hideCards: !0,
                                      }),
                                  ],
                              }),
                              (0, n.jsx)(eo, { category: a }),
                              (0, n.jsx)(ed, { currentCategorySkuId: a.skuId, handleTransition: i }, a.skuId),
                          ],
                      })
                    : (0, n.jsxs)("div", {
                          className: et.AW,
                          children: [
                              (0, n.jsx)("div", { className: et.zn, children: (0, n.jsx)(ex, { collectionId: l }) }),
                              (0, n.jsx)("div", { className: et.$T, children: (0, n.jsx)(q.A, { category: a }) }),
                              (0, n.jsx)(eo, { category: a }),
                              (0, n.jsx)(ed, { currentCategorySkuId: a.skuId, handleTransition: i }, a.skuId),
                          ],
                      }),
                (0, n.jsx)(eg, {}),
            ],
        }),
    });
};
var eC = s(783857),
    ep = s(170522);
let eb = function (e) {
    let { collectionId: l } = e,
        s = t.useRef(null),
        a = t.useRef(null);
    (0, m.P)(I.a);
    let f = (0, eC.yB)("CollectiblesShopIndexPage");
    (0, eC.gB)();
    let { selectedTab: L, transitionToTab: _, transitionState: N } = (0, k.o)(es.G2.COLLECTION_INDEX);
    (0, p.pE)();
    let v = (0, A.$)("collection_index_page");
    ((0, O.Ay)({ stalePurchasesOK: !0, skipFetch: v }), (0, C.A)(K.FYj));
    let R = (0, h.A)((0, c.A)()),
        { category: B, state: F } = T(l, {
            enabled: v,
            includeUnpublished: (0, x.A)("shop_include_unpublished"),
            includePricing: !0,
        }),
        P = (0, o.bG)([j.A], () => (null != l ? j.A.getCategory(l) : void 0)),
        G = (0, o.bG)([j.A], () => j.A.isFetchingCategories),
        U = (0, o.bG)([j.A], () => null != j.A.lastSuccessfulFetch),
        D = (0, o.bG)([j.A], () => j.A.error),
        M = v ? (B ?? void 0) : P,
        { analyticsLocations: H } = (0, E.lC)(es.G2.COLLECTION_INDEX);
    ((0, E.uS)(R, L, M?.name, N, { enabled: null != M }),
        t.useEffect(() => {
            a.current?.scrollTo({ top: 0 });
        }, [l]),
        t.useEffect(() => {
            (0, u.I)(K.BVt.COLLECTIBLES_SHOP);
        }, []));
    let V = (v ? "loading" !== F : !G && (U || null != D)) && null == M;
    return null == l || V
        ? (0, n.jsx)(r.rd, { to: K.BVt.COLLECTIBLES_SHOP })
        : M?.isOrbsExclusive === !0
          ? (0, n.jsx)(r.rd, { to: K.BVt.COLLECTIBLES_SHOP_WITH_TAB(es.G2.ORBS) })
          : null == M
            ? (0, n.jsxs)("div", {
                  className: i()(ep.bx, { [eC.jP]: f }),
                  ref: s,
                  tabIndex: -1,
                  children: [
                      (0, n.jsx)(S.G, { handleTransition: _, selectedTab: L, selectedCollectionId: l }),
                      (0, n.jsx)(d.Ip, { children: (0, n.jsx)(eI, {}) }),
                  ],
              })
            : (0, n.jsx)(g.f5, {
                  value: H,
                  children: (0, n.jsx)(b.R9, {
                      newValue: { sessionId: R },
                      children: (0, n.jsxs)("div", {
                          className: i()(ep.bx, { [eC.jP]: f }),
                          ref: s,
                          tabIndex: -1,
                          children: [
                              (0, n.jsx)(S.G, { handleTransition: _, selectedTab: L, selectedCollectionId: l }),
                              (0, n.jsx)(y.A, { tab: L, handleTransition: _ }),
                              (0, n.jsx)(d.Ip, { ref: a, children: (0, n.jsx)(em, { collectionId: l }) }),
                          ],
                      }),
                  }),
              });
};
