(s.r(l), s.d(l, { default: () => eb }));
var t = s(477900),
    n = s(582128),
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
            includePricing: t = !1,
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        a = l && null != e ? e : "";
    n.useEffect(() => {
        "" !== a && _.p.requestCollections([a], { includeUnpublished: s, includePricing: t });
    }, [a, s, t]);
    let { collection: i, fetchState: r } = (0, o.cf)(
            [L.A],
            () => ({ collection: L.A.getCollection(a), fetchState: L.A.getFetchState(a) }),
            [a],
        ),
        c = (0, v.Hd)(a, r),
        d = n.useMemo(() => (null != i ? N.A.fromStorefrontCollectionRecord(i) : null), [i]),
        u = n.useMemo(() => ("error" === r || c ? "error" : null != d ? "ready" : "loading"), [r, c, d]);
    return {
        category: d,
        state: u,
        retry: n.useCallback(() => {
            "" !== a &&
                (0, f._v)({
                    collectionIds: [a],
                    includeUnpublishedCollections: s,
                    includeUnpublishedProducts: s,
                    includePricing: t,
                    ignoreCache: !0,
                });
        }, [a, s, t]),
    };
}
var O = s(841702),
    k = s(983545),
    S = s(626148),
    y = s(235939);
s(321073);
var R = s(575593),
    B = s(651162),
    F = s(40474),
    P = s(297264),
    G = s(821609),
    U = s(449543),
    D = s(152858),
    M = s(197935),
    H = s(65238),
    V = s(287809),
    w = s(174459),
    X = s(161918),
    W = s(993408),
    $ = s(879221),
    Y = s(511265),
    z = s(304210),
    K = s(652215),
    q = s(828515),
    J = s(442036),
    Z = s(258245),
    Q = s(484469),
    ee = s(196231),
    el = s(227205),
    es = s(758836),
    et = s(375708),
    en = s(146053);
function ea(e) {
    return e.skuId;
}
function ei(e, l) {
    let s = (0, A.$)(l),
        { category: t } = T(e, {
            enabled: s,
            includeUnpublished: (0, x.A)("shop_include_unpublished"),
            includePricing: !0,
        }),
        n = (0, o.bG)([j.A], () => j.A.getCategory(e));
    return s ? (t ?? void 0) : n;
}
let er = { aspectRatio: "1 / 1" },
    ec = {
        [R.R.PROFILE_EFFECT]: { className: en.I5, aspectRatio: "1 / 2" },
        [R.R.BUNDLE]: { className: en.kP, aspectRatio: "2 / 1" },
    };
function eo(e) {
    let l,
        s,
        { category: n } = e,
        a = (0, o.bG)([V.default], () => V.default.getCurrentUser()),
        i = (0, Y.p)(),
        r =
            ((l = (0, z.S)()),
            (s = (0, H.XF)(l)),
            null != l && s?.collectionId === n.skuId && (null == l.endsAt || l.endsAt > new Date())),
        c = i(n.products);
    return null == a || 0 === c.length
        ? null
        : (0, t.jsxs)("div", {
              className: en.hd,
              children: [
                  r && (0, t.jsx)(J.A, { className: en.aQ }),
                  (0, t.jsx)("div", {
                      className: en.fr,
                      children: c.map((e, l) => {
                          let { className: s, aspectRatio: n } =
                              ec[
                                  e.type === R.R.VARIANTS_GROUP &&
                                  null != e.variants &&
                                  e.variants.length > 0 &&
                                  e.variants.every((e) => e.type === R.R.PROFILE_EFFECT)
                                      ? R.R.PROFILE_EFFECT
                                      : e.type
                              ] ?? er;
                          return (0, t.jsx)(
                              b.R9,
                              {
                                  newValue: { tilePosition: l },
                                  children: (0, t.jsx)(Z.A, { skuId: e.skuId, cardClassName: s, aspectRatio: n }),
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
        i = (0, $.O)("related_drops"),
        { categories: r } = (function (e) {
            let { anchorCollectionId: l, limit: s, enabled: t = !0 } = e,
                a = n.useMemo(() => ({ applicationId: K.FYj, anchorCollectionId: l ?? "", limit: s }), [l, s]),
                i = t && null != l && "" !== l,
                r = (0, f.HX)(a);
            n.useEffect(() => {
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
                u = n.useMemo(() => (i ? (c ?? []) : []), [i, c]),
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
                categories: n.useMemo(
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
        d = n.useCallback(
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
        u = n.useMemo(() => {
            if (a) return r.filter(d).slice(0, 8);
            let e = [...c.values()],
                s = e.findIndex((e) => e.skuId === l);
            if (-1 === s) return [];
            let t = [];
            for (let l = 1; l <= e.length && t.length < 8; l++) {
                let n = e[(s + l) % e.length];
                d(n) && n.products.length > 0 && t.push(n);
            }
            return t;
        }, [a, r, c, l, d]);
    return 0 === u.length
        ? null
        : (0, t.jsxs)("div", {
              className: en.t3,
              children: [
                  (0, t.jsx)("div", {
                      className: en.bb,
                      children: (0, t.jsx)(P.D, {
                          variant: "heading-lg/semibold",
                          children: et.intl.string(et.t.EhRZ9o),
                      }),
                  }),
                  i
                      ? (0, t.jsx)(
                            M.A,
                            {
                                gap: "xl",
                                scrollStep: "item",
                                items: u,
                                getItemKey: ea,
                                renderItem: (e, l, n) =>
                                    (0, t.jsx)(
                                        eu,
                                        { category: e, index: n, handleTransition: s, listItemProps: l },
                                        e.skuId,
                                    ),
                            },
                            l,
                        )
                      : (0, t.jsx)(
                            U.A,
                            {
                                gap: "xl",
                                scrollBehavior: D.Uf.ITEM,
                                children: u.map((e, l) =>
                                    (0, t.jsx)(eu, { category: e, index: l, handleTransition: s }, e.skuId),
                                ),
                            },
                            l,
                        ),
              ],
          });
}
function eu(e) {
    let { category: l, index: s, handleTransition: n, listItemProps: a } = e;
    return (0, t.jsx)(b.R9, {
        newValue: { categoryPosition: s, pageCategory: l.name, pageSection: "related_drops", tilePosition: s },
        children: (0, t.jsx)("div", {
            className: en.EU,
            children: (0, t.jsx)(ee.S, {
                category: l,
                badgeText: (0, W.HF)(l.unpublishedAt) ? et.intl.string(et.t["h/uBCR"]) : void 0,
                handleTransition: n,
                pageType: es.G2.COLLECTION_INDEX,
                className: en.vK,
                listItemProps: a,
            }),
        }),
    });
}
let eh = [
    { tab: es.G2.AVATAR_DECORATIONS, label: () => et.intl.string(et.t.dRZYNE) },
    { tab: es.G2.PROFILE_EFFECTS, label: () => et.intl.string(et.t["1cNjtx"]) },
    { tab: es.G2.NAMEPLATES, label: () => et.intl.string(et.t.V68Fqz) },
    { tab: es.G2.PROFILE_FRAMES, label: () => et.intl.string(et.t.ecTJkR) },
    { tab: es.G2.BUNDLES, label: () => et.intl.string(et.t.FYFpps) },
];
function eg() {
    let e = (0, r.W6)();
    return (0, t.jsxs)("div", {
        className: en.nb,
        children: [
            (0, t.jsx)(P.D, { variant: "heading-md/semibold", children: et.intl.string(et.t.Yr70c4) }),
            (0, t.jsx)("div", {
                className: en.J2,
                children: eh.map((l) => {
                    let { tab: s, label: n } = l;
                    return (0, t.jsx)(
                        G.$,
                        { variant: "secondary", text: n(), onClick: () => e.push(K.BVt.COLLECTIBLES_SHOP_WITH_TAB(s)) },
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
        o = n.useMemo(
            () => [
                { id: "shop_all", label: et.intl.string(et.t.xFcotU) },
                { id: "collection", label: c ?? "" },
            ],
            [c],
        ),
        d = n.useCallback(
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
        u = n.useCallback(
            (e, l) =>
                (0, t.jsxs)("span", {
                    className: i()(en.u, { [en.kG]: l }),
                    children: [e.label, !l && (0, t.jsx)("span", { className: en.Tl, children: "/" })],
                }),
            [],
        );
    return (0, t.jsx)(F.A, {
        className: en.C2,
        separatorClassName: en.Lw,
        breadcrumbs: o,
        activeId: "collection",
        onBreadcrumbClick: d,
        renderCustomBreadcrumb: u,
    });
}
function eI() {
    return (0, t.jsxs)("div", {
        className: en.kL,
        children: [
            (0, t.jsx)(el.A, { isLoading: !0, hideButton: !0, hideCards: !0, tab: es.G2.COLLECTION_INDEX }),
            (0, t.jsx)("div", {
                className: en.hd,
                children: (0, t.jsx)("div", {
                    className: en.fr,
                    children: Array.from({ length: 8 }, (e, l) => (0, t.jsx)(Q.A, {}, l)),
                }),
            }),
            (0, t.jsxs)("div", {
                className: en.t3,
                children: [
                    (0, t.jsx)("div", { className: en.bb, children: (0, t.jsx)("div", { className: en.M$ }) }),
                    (0, t.jsxs)("div", {
                        className: en.A9,
                        children: [(0, t.jsx)("div", { className: en.nl }), (0, t.jsx)("div", { className: en.nl })],
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
        i = n.useCallback(
            (e) => {
                let { categorySkuId: l } = e;
                null != l && s.push(K.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(l));
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
    return (0, t.jsx)(X.iM, {
        tab: es.G2.COLLECTION_INDEX,
        children: (0, t.jsxs)("div", {
            className: en.kL,
            children: [
                o && null != c
                    ? (0, t.jsxs)(t.Fragment, {
                          children: [
                              (0, t.jsxs)("div", {
                                  className: en.rz,
                                  children: [
                                      (0, t.jsx)("div", {
                                          className: en.zn,
                                          children: (0, t.jsx)(ex, { collectionId: l }),
                                      }),
                                      (0, t.jsx)(el.A, {
                                          heroBlock: c,
                                          isLoading: !1,
                                          tab: es.G2.COLLECTION_INDEX,
                                          hideButton: !0,
                                          hideCards: !0,
                                      }),
                                  ],
                              }),
                              (0, t.jsx)(eo, { category: a }),
                              (0, t.jsx)(ed, { currentCategorySkuId: a.skuId, handleTransition: i }, a.skuId),
                          ],
                      })
                    : (0, t.jsxs)("div", {
                          className: en.AW,
                          children: [
                              (0, t.jsx)("div", { className: en.zn, children: (0, t.jsx)(ex, { collectionId: l }) }),
                              (0, t.jsx)("div", { className: en.$T, children: (0, t.jsx)(q.A, { category: a }) }),
                              (0, t.jsx)(eo, { category: a }),
                              (0, t.jsx)(ed, { currentCategorySkuId: a.skuId, handleTransition: i }, a.skuId),
                          ],
                      }),
                (0, t.jsx)(eg, {}),
            ],
        }),
    });
};
var eC = s(783857),
    ep = s(170522);
let eb = function (e) {
    let { collectionId: l } = e,
        s = n.useRef(null),
        a = n.useRef(null);
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
    ((0, E.uS)(R, L, M?.name, N),
        n.useEffect(() => {
            a.current?.scrollTo({ top: 0 });
        }, [l]),
        n.useEffect(() => {
            (0, u.I)(K.BVt.COLLECTIBLES_SHOP);
        }, []));
    let V = (v ? "loading" !== F : !G && (U || null != D)) && null == M;
    return null == l || V
        ? (0, t.jsx)(r.rd, { to: K.BVt.COLLECTIBLES_SHOP })
        : M?.isOrbsExclusive === !0
          ? (0, t.jsx)(r.rd, { to: K.BVt.COLLECTIBLES_SHOP_WITH_TAB(es.G2.ORBS) })
          : null == M
            ? (0, t.jsxs)("div", {
                  className: i()(ep.bx, { [eC.jP]: f }),
                  ref: s,
                  tabIndex: -1,
                  children: [
                      (0, t.jsx)(S.G, { handleTransition: _, selectedTab: L, selectedCollectionId: l }),
                      (0, t.jsx)(d.Ip, { children: (0, t.jsx)(eI, {}) }),
                  ],
              })
            : (0, t.jsx)(g.f5, {
                  value: H,
                  children: (0, t.jsx)(b.R9, {
                      newValue: { sessionId: R },
                      children: (0, t.jsxs)("div", {
                          className: i()(ep.bx, { [eC.jP]: f }),
                          ref: s,
                          tabIndex: -1,
                          children: [
                              (0, t.jsx)(S.G, { handleTransition: _, selectedTab: L, selectedCollectionId: l }),
                              (0, t.jsx)(y.A, { tab: L, handleTransition: _ }),
                              (0, t.jsx)(d.Ip, { ref: a, children: (0, t.jsx)(em, { collectionId: l }) }),
                          ],
                      }),
                  }),
              });
};
