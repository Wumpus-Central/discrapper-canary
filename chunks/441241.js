(s.r(l), s.d(l, { default: () => ej }));
var n = s(477900),
    t = s(582128),
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
            includePricing: n = !1,
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        i = l && null != e ? e : "";
    t.useEffect(() => {
        "" !== i && N.p.requestCollections([i], { includeUnpublished: s, includePricing: n });
    }, [i, s, n]);
    let { collection: a, fetchState: r } = (0, c.cf)(
            [_.A],
            () => ({ collection: _.A.getCollection(i), fetchState: _.A.getFetchState(i) }),
            [i],
        ),
        o = (0, T.Hd)(i, r),
        d = t.useMemo(() => (null != a ? v.A.fromStorefrontCollectionRecord(a) : null), [a]),
        u = t.useMemo(() => ("error" === r || o ? "error" : null != d ? "ready" : "loading"), [r, o, d]);
    return {
        category: d,
        state: u,
        retry: t.useCallback(() => {
            "" !== i &&
                (0, L._v)({
                    collectionIds: [i],
                    includeUnpublishedCollections: s,
                    includeUnpublishedProducts: s,
                    includePricing: n,
                    ignoreCache: !0,
                });
        }, [i, s, n]),
    };
}
var k = s(841702),
    S = s(983545),
    y = s(626148),
    B = s(235939);
s(321073);
var R = s(575593),
    P = s(651162),
    F = s(40474),
    G = s(297264),
    U = s(821609),
    D = s(449543),
    M = s(152858),
    H = s(197935),
    V = s(65238),
    w = s(287809),
    X = s(174459),
    W = s(161918),
    $ = s(993408),
    Y = s(879221),
    z = s(511265),
    K = s(304210),
    q = s(652215),
    J = s(828515),
    Z = s(442036),
    Q = s(258245),
    ee = s(484469),
    el = s(196231),
    es = s(227205),
    en = s(758836),
    et = s(375708),
    ei = s(146053);
function ea(e) {
    return e.skuId;
}
function er(e, l) {
    let s = (0, E.$)(l),
        { category: n } = O(e, {
            enabled: s,
            includeUnpublished: (0, x.A)("shop_include_unpublished"),
            includePricing: !0,
        }),
        t = (0, c.bG)([j.A], () => j.A.getCategory(e));
    return s ? (n ?? void 0) : t;
}
let eo = { aspectRatio: "1 / 1" },
    ec = {
        [R.R.PROFILE_EFFECT]: { className: ei.I5, aspectRatio: "1 / 2" },
        [R.R.BUNDLE]: { className: ei.kP, aspectRatio: "2 / 1" },
    };
function ed(e) {
    let l,
        s,
        { category: t } = e,
        i = (0, c.bG)([w.default], () => w.default.getCurrentUser()),
        a = (0, z.p)(),
        r =
            ((l = (0, K.S)()),
            (s = (0, V.XF)(l)),
            null != l && s?.collectionId === t.skuId && (null == l.endsAt || l.endsAt > new Date())),
        o = a(t.products);
    return null == i || 0 === o.length
        ? null
        : (0, n.jsxs)("div", {
              className: ei.hd,
              children: [
                  r && (0, n.jsx)(Z.A, { handleButtonClick: null }),
                  (0, n.jsx)("div", {
                      className: ei.fr,
                      children: o.map((e, l) => {
                          let { className: s, aspectRatio: t } =
                              ec[
                                  e.type === R.R.VARIANTS_GROUP &&
                                  null != e.variants &&
                                  e.variants.length > 0 &&
                                  e.variants.every((e) => e.type === R.R.PROFILE_EFFECT)
                                      ? R.R.PROFILE_EFFECT
                                      : e.type
                              ] ?? eo;
                          return (0, n.jsx)(
                              b.R9,
                              {
                                  newValue: { tilePosition: l },
                                  children: (0, n.jsx)(Q.A, { skuId: e.skuId, cardClassName: s, aspectRatio: t }),
                              },
                              e.skuId,
                          );
                      }),
                  }),
              ],
          });
}
function eu(e) {
    let { currentCategorySkuId: l, handleTransition: s } = e,
        i = (0, E.$)("collection_index_related_drops"),
        a = (0, Y.O)("related_drops"),
        { categories: r } = (function (e) {
            let { anchorCollectionId: l, limit: s, enabled: n = !0 } = e,
                i = t.useMemo(() => ({ applicationId: q.FYj, anchorCollectionId: l ?? "", limit: s }), [l, s]),
                a = n && null != l && "" !== l,
                r = (0, L.HX)(i);
            t.useEffect(() => {
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
                u = t.useMemo(() => (a ? (o ?? []) : []), [a, o]),
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
                categories: t.useMemo(
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
        d = t.useCallback(
            (e) =>
                e.skuId !== l &&
                null != e.featuredBlockUrl &&
                !0 !== e.isOrbsExclusive &&
                (null == e.unpublishedAt || e.unpublishedAt > new Date()) &&
                !en.MS.some((l) => {
                    let { categorySkuId: s } = l;
                    return s === e.skuId;
                }),
            [l],
        ),
        u = t.useMemo(() => {
            if (i) return r.filter(d).slice(0, 8);
            let e = [...o.values()],
                s = e.findIndex((e) => e.skuId === l);
            if (-1 === s) return [];
            let n = [];
            for (let l = 1; l <= e.length && n.length < 8; l++) {
                let t = e[(s + l) % e.length];
                d(t) && t.products.length > 0 && n.push(t);
            }
            return n;
        }, [i, r, o, l, d]);
    return 0 === u.length
        ? null
        : (0, n.jsxs)("div", {
              className: ei.t3,
              children: [
                  (0, n.jsx)("div", {
                      className: ei.bb,
                      children: (0, n.jsx)(G.D, {
                          variant: "heading-lg/semibold",
                          children: et.intl.string(et.t.EhRZ9o),
                      }),
                  }),
                  a
                      ? (0, n.jsx)(
                            H.A,
                            {
                                gap: "xl",
                                scrollStep: "item",
                                items: u,
                                getItemKey: ea,
                                renderItem: (e, l, t) =>
                                    (0, n.jsx)(
                                        eh,
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
                                    (0, n.jsx)(eh, { category: e, index: l, handleTransition: s }, e.skuId),
                                ),
                            },
                            l,
                        ),
              ],
          });
}
function eh(e) {
    let { category: l, index: s, handleTransition: t, listItemProps: i } = e;
    return (0, n.jsx)(b.R9, {
        newValue: { categoryPosition: s, pageCategory: l.name, pageSection: "related_drops", tilePosition: s },
        children: (0, n.jsx)("div", {
            className: ei.EU,
            children: (0, n.jsx)(el.S, {
                category: l,
                badgeText: (0, $.HF)(l.unpublishedAt) ? et.intl.string(et.t["h/uBCR"]) : void 0,
                handleTransition: t,
                pageType: en.G2.COLLECTION_INDEX,
                className: ei.vK,
                listItemProps: i,
            }),
        }),
    });
}
let eg = [
    { tab: en.G2.AVATAR_DECORATIONS, label: () => et.intl.string(et.t.dRZYNE) },
    { tab: en.G2.PROFILE_EFFECTS, label: () => et.intl.string(et.t["1cNjtx"]) },
    { tab: en.G2.NAMEPLATES, label: () => et.intl.string(et.t.V68Fqz) },
    { tab: en.G2.PROFILE_FRAMES, label: () => et.intl.string(et.t.ecTJkR) },
    { tab: en.G2.BUNDLES, label: () => et.intl.string(et.t.FYFpps) },
];
function ex() {
    let e = (0, r.W6)();
    return (0, n.jsxs)("div", {
        className: ei.nb,
        children: [
            (0, n.jsx)(G.D, { variant: "heading-md/semibold", children: et.intl.string(et.t.Yr70c4) }),
            (0, n.jsx)("div", {
                className: ei.J2,
                children: eg.map((l) => {
                    let { tab: s, label: t } = l;
                    return (0, n.jsx)(
                        U.$,
                        { variant: "secondary", text: t(), onClick: () => e.push(q.BVt.COLLECTIBLES_SHOP_WITH_TAB(s)) },
                        s,
                    );
                }),
            }),
        ],
    });
}
function eI(e) {
    let { collectionId: l } = e,
        s = (0, r.W6)(),
        i = (0, b.uM)(),
        o = er(l, "collection_index_breadcrumb")?.name,
        c = t.useMemo(
            () => [
                { id: "shop_all", label: et.intl.string(et.t.xFcotU) },
                { id: "collection", label: o ?? "" },
            ],
            [o],
        ),
        d = t.useCallback(
            (e) => {
                "shop_all" === e.id &&
                    (X.default.track(q.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: i?.sessionId,
                        sku_id: l,
                        page_type: en.G2.COLLECTION_INDEX,
                        page_category: o,
                        cta_name: "collection breadcrumb shop all",
                    }),
                    s.push(q.BVt.COLLECTIBLES_SHOP_WITH_TAB(en.G2.CATALOG)));
            },
            [s, i?.sessionId, l, o],
        ),
        u = t.useCallback(
            (e, l) =>
                (0, n.jsxs)("span", {
                    className: a()(ei.u, { [ei.kG]: l }),
                    children: [e.label, !l && (0, n.jsx)("span", { className: ei.Tl, children: "/" })],
                }),
            [],
        );
    return (0, n.jsx)(F.A, {
        className: ei.C2,
        separatorClassName: ei.Lw,
        breadcrumbs: c,
        activeId: "collection",
        onBreadcrumbClick: d,
        renderCustomBreadcrumb: u,
    });
}
function eC() {
    return (0, n.jsxs)("div", {
        className: ei.kL,
        children: [
            (0, n.jsx)(es.A, { isLoading: !0, hideButton: !0, hideCards: !0, tab: en.G2.COLLECTION_INDEX }),
            (0, n.jsx)("div", {
                className: ei.hd,
                children: (0, n.jsx)("div", {
                    className: ei.fr,
                    children: Array.from({ length: 8 }, (e, l) => (0, n.jsx)(ee.A, {}, l)),
                }),
            }),
            (0, n.jsxs)("div", {
                className: ei.t3,
                children: [
                    (0, n.jsx)("div", { className: ei.bb, children: (0, n.jsx)("div", { className: ei.M$ }) }),
                    (0, n.jsxs)("div", {
                        className: ei.A9,
                        children: [(0, n.jsx)("div", { className: ei.nl }), (0, n.jsx)("div", { className: ei.nl })],
                    }),
                ],
            }),
        ],
    });
}
let em = function (e) {
    let { collectionId: l } = e,
        s = (0, r.W6)(),
        i = er(l, "collection_index_page_content"),
        a = t.useCallback(
            (e) => {
                let { categorySkuId: l } = e;
                null != l && s.push(q.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(l));
            },
            [s],
        ),
        o = t.useMemo(
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
    return (0, n.jsx)(W.iM, {
        tab: en.G2.COLLECTION_INDEX,
        children: (0, n.jsxs)("div", {
            className: ei.kL,
            children: [
                c && null != o
                    ? (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsxs)("div", {
                                  className: ei.rz,
                                  children: [
                                      (0, n.jsx)("div", {
                                          className: ei.zn,
                                          children: (0, n.jsx)(eI, { collectionId: l }),
                                      }),
                                      (0, n.jsx)(es.A, {
                                          heroBlock: o,
                                          isLoading: !1,
                                          tab: en.G2.COLLECTION_INDEX,
                                          hideButton: !0,
                                          hideCards: !0,
                                      }),
                                  ],
                              }),
                              (0, n.jsx)(ed, { category: i }),
                              (0, n.jsx)(eu, { currentCategorySkuId: i.skuId, handleTransition: a }, i.skuId),
                          ],
                      })
                    : (0, n.jsxs)("div", {
                          className: ei.AW,
                          children: [
                              (0, n.jsx)("div", { className: ei.zn, children: (0, n.jsx)(eI, { collectionId: l }) }),
                              (0, n.jsx)("div", { className: ei.$T, children: (0, n.jsx)(J.A, { category: i }) }),
                              (0, n.jsx)(ed, { category: i }),
                              (0, n.jsx)(eu, { currentCategorySkuId: i.skuId, handleTransition: a }, i.skuId),
                          ],
                      }),
                (0, n.jsx)(ex, {}),
            ],
        }),
    });
};
var ep = s(783857),
    eb = s(170522);
let ej = function (e) {
    let { collectionId: l } = e,
        s = t.useRef(null),
        i = t.useRef(null);
    (0, C.P)(I.a);
    let L = (0, ep.yB)("CollectiblesShopIndexPage");
    (0, ep.gB)();
    let { selectedTab: _, transitionToTab: N, transitionState: v } = (0, S.o)(en.G2.COLLECTION_INDEX);
    (0, p.pE)();
    let T = (0, E.$)("collection_index_page");
    ((0, k.Ay)({ stalePurchasesOK: !0, skipFetch: T }), (0, m.A)(q.FYj));
    let R = (0, h.A)((0, o.A)()),
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
        { analyticsLocations: w } = (0, f.lC)(en.G2.COLLECTION_INDEX);
    ((0, f.uS)(R, _, V?.name, v),
        t.useEffect(() => {
            i.current?.scrollTo({ top: 0 });
        }, [l]),
        t.useEffect(() => {
            (0, u.I)(q.BVt.COLLECTIBLES_SHOP);
        }, []));
    let X = (T ? "loading" !== G : !D && (M || null != H)) && null == V;
    return null == l || !P || X
        ? (0, n.jsx)(r.rd, { to: q.BVt.COLLECTIBLES_SHOP })
        : V?.isOrbsExclusive === !0
          ? (0, n.jsx)(r.rd, { to: q.BVt.COLLECTIBLES_SHOP_WITH_TAB(en.G2.ORBS) })
          : null == V
            ? (0, n.jsxs)("div", {
                  className: a()(eb.bx, { [ep.jP]: L }),
                  ref: s,
                  tabIndex: -1,
                  children: [
                      (0, n.jsx)(y.G, { handleTransition: N, selectedTab: _, selectedCollectionId: l }),
                      (0, n.jsx)(d.Ip, { children: (0, n.jsx)(eC, {}) }),
                  ],
              })
            : (0, n.jsx)(g.f5, {
                  value: w,
                  children: (0, n.jsx)(b.R9, {
                      newValue: { sessionId: R },
                      children: (0, n.jsxs)("div", {
                          className: a()(eb.bx, { [ep.jP]: L }),
                          ref: s,
                          tabIndex: -1,
                          children: [
                              (0, n.jsx)(y.G, { handleTransition: N, selectedTab: _, selectedCollectionId: l }),
                              (0, n.jsx)(B.A, { tab: _, handleTransition: N }),
                              (0, n.jsx)(d.Ip, { ref: i, children: (0, n.jsx)(em, { collectionId: l }) }),
                          ],
                      }),
                  }),
              });
};
