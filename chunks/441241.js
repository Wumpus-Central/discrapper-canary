(s.r(l), s.d(l, { default: () => ej }));
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
        a = l && null != e ? e : "";
    n.useEffect(() => {
        "" !== a && N.p.requestCollections([a], { includeUnpublished: s, includePricing: t });
    }, [a, s, t]);
    let { collection: i, fetchState: r } = (0, o.cf)(
            [_.A],
            () => ({ collection: _.A.getCollection(a), fetchState: _.A.getFetchState(a) }),
            [a],
        ),
        c = (0, T.Hd)(a, r),
        d = n.useMemo(() => (null != i ? v.A.fromStorefrontCollectionRecord(i) : null), [i]),
        u = n.useMemo(() => ("error" === r || c ? "error" : null != d ? "ready" : "loading"), [r, c, d]);
    return {
        category: d,
        state: u,
        retry: n.useCallback(() => {
            "" !== a &&
                (0, L._v)({
                    collectionIds: [a],
                    includeUnpublishedCollections: s,
                    includeUnpublishedProducts: s,
                    includePricing: t,
                    ignoreCache: !0,
                });
        }, [a, s, t]),
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
    et = s(758836),
    en = s(375708),
    ea = s(146053);
function ei(e) {
    return e.skuId;
}
function er(e, l) {
    let s = (0, E.$)(l),
        { category: t } = O(e, {
            enabled: s,
            includeUnpublished: (0, x.A)("shop_include_unpublished"),
            includePricing: !0,
        }),
        n = (0, o.bG)([j.A], () => j.A.getCategory(e));
    return s ? (t ?? void 0) : n;
}
let ec = { aspectRatio: "1 / 1" },
    eo = {
        [B.R.PROFILE_EFFECT]: { className: ea.I5, aspectRatio: "1 / 2" },
        [B.R.BUNDLE]: { className: ea.kP, aspectRatio: "2 / 1" },
    };
function ed(e) {
    let l,
        s,
        { category: n } = e,
        a = (0, o.bG)([w.default], () => w.default.getCurrentUser()),
        i = (0, z.p)(),
        r =
            ((l = (0, K.S)()),
            (s = (0, V.XF)(l)),
            null != l && s?.collectionId === n.skuId && (null == l.endsAt || l.endsAt > new Date())),
        c = i(n.products);
    return null == a || 0 === c.length
        ? null
        : (0, t.jsxs)("div", {
              className: ea.hd,
              children: [
                  r && (0, t.jsx)(Z.A, { className: ea.aQ }),
                  (0, t.jsx)("div", {
                      className: ea.fr,
                      children: c.map((e, l) => {
                          let { className: s, aspectRatio: n } =
                              eo[
                                  e.type === B.R.VARIANTS_GROUP &&
                                  null != e.variants &&
                                  e.variants.length > 0 &&
                                  e.variants.every((e) => e.type === B.R.PROFILE_EFFECT)
                                      ? B.R.PROFILE_EFFECT
                                      : e.type
                              ] ?? ec;
                          return (0, t.jsx)(
                              b.R9,
                              {
                                  newValue: { tilePosition: l },
                                  children: (0, t.jsx)(Q.A, { skuId: e.skuId, cardClassName: s, aspectRatio: n }),
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
        a = (0, E.$)("collection_index_related_drops"),
        i = (0, Y.O)("related_drops"),
        { categories: r } = (function (e) {
            let { anchorCollectionId: l, limit: s, enabled: t = !0 } = e,
                a = n.useMemo(() => ({ applicationId: q.FYj, anchorCollectionId: l ?? "", limit: s }), [l, s]),
                i = t && null != l && "" !== l,
                r = (0, L.HX)(a);
            n.useEffect(() => {
                i && (0, L.Su)(a);
            }, [i, a]);
            let { collectionIds: c, fetchState: d } = (0, o.cf)(
                    [_.A],
                    () => ({
                        collectionIds: _.A.getCollectionsAfterIds(r),
                        fetchState: _.A.getCollectionsAfterFetchState(r),
                    }),
                    [r],
                ),
                u = n.useMemo(() => (i ? (c ?? []) : []), [i, c]),
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
                categories: n.useMemo(
                    () =>
                        u
                            .map((e) => g[e])
                            .filter((e) => null != e)
                            .map((e) => v.A.fromStorefrontCollectionRecord(e)),
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
                !et.MS.some((l) => {
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
              className: ea.t3,
              children: [
                  (0, t.jsx)("div", {
                      className: ea.bb,
                      children: (0, t.jsx)(G.D, {
                          variant: "heading-lg/semibold",
                          children: en.intl.string(en.t.EhRZ9o),
                      }),
                  }),
                  i
                      ? (0, t.jsx)(
                            H.A,
                            {
                                gap: "xl",
                                scrollStep: "item",
                                items: u,
                                getItemKey: ei,
                                renderItem: (e, l, n) =>
                                    (0, t.jsx)(
                                        eh,
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
                                    (0, t.jsx)(eh, { category: e, index: l, handleTransition: s }, e.skuId),
                                ),
                            },
                            l,
                        ),
              ],
          });
}
function eh(e) {
    let { category: l, index: s, handleTransition: n, listItemProps: a } = e;
    return (0, t.jsx)(b.R9, {
        newValue: { categoryPosition: s, pageCategory: l.name, pageSection: "related_drops", tilePosition: s },
        children: (0, t.jsx)("div", {
            className: ea.EU,
            children: (0, t.jsx)(el.S, {
                category: l,
                badgeText: (0, $.HF)(l.unpublishedAt) ? en.intl.string(en.t["h/uBCR"]) : void 0,
                handleTransition: n,
                pageType: et.G2.COLLECTION_INDEX,
                className: ea.vK,
                listItemProps: a,
            }),
        }),
    });
}
let eg = [
    { tab: et.G2.AVATAR_DECORATIONS, label: () => en.intl.string(en.t.dRZYNE) },
    { tab: et.G2.PROFILE_EFFECTS, label: () => en.intl.string(en.t["1cNjtx"]) },
    { tab: et.G2.NAMEPLATES, label: () => en.intl.string(en.t.V68Fqz) },
    { tab: et.G2.PROFILE_FRAMES, label: () => en.intl.string(en.t.ecTJkR) },
    { tab: et.G2.BUNDLES, label: () => en.intl.string(en.t.FYFpps) },
];
function ex() {
    let e = (0, r.W6)();
    return (0, t.jsxs)("div", {
        className: ea.nb,
        children: [
            (0, t.jsx)(G.D, { variant: "heading-md/semibold", children: en.intl.string(en.t.Yr70c4) }),
            (0, t.jsx)("div", {
                className: ea.J2,
                children: eg.map((l) => {
                    let { tab: s, label: n } = l;
                    return (0, t.jsx)(
                        U.$,
                        { variant: "secondary", text: n(), onClick: () => e.push(q.BVt.COLLECTIBLES_SHOP_WITH_TAB(s)) },
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
        a = (0, b.uM)(),
        c = er(l, "collection_index_breadcrumb")?.name,
        o = n.useMemo(
            () => [
                { id: "shop_all", label: en.intl.string(en.t.xFcotU) },
                { id: "collection", label: c ?? "" },
            ],
            [c],
        ),
        d = n.useCallback(
            (e) => {
                "shop_all" === e.id &&
                    (X.default.track(q.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: a?.sessionId,
                        sku_id: l,
                        page_type: et.G2.COLLECTION_INDEX,
                        page_category: c,
                        cta_name: "collection breadcrumb shop all",
                    }),
                    s.push(q.BVt.COLLECTIBLES_SHOP_WITH_TAB(et.G2.CATALOG)));
            },
            [s, a?.sessionId, l, c],
        ),
        u = n.useCallback(
            (e, l) =>
                (0, t.jsxs)("span", {
                    className: i()(ea.u, { [ea.kG]: l }),
                    children: [e.label, !l && (0, t.jsx)("span", { className: ea.Tl, children: "/" })],
                }),
            [],
        );
    return (0, t.jsx)(F.A, {
        className: ea.C2,
        separatorClassName: ea.Lw,
        breadcrumbs: o,
        activeId: "collection",
        onBreadcrumbClick: d,
        renderCustomBreadcrumb: u,
    });
}
function em() {
    return (0, t.jsxs)("div", {
        className: ea.kL,
        children: [
            (0, t.jsx)(es.A, { isLoading: !0, hideButton: !0, hideCards: !0, tab: et.G2.COLLECTION_INDEX }),
            (0, t.jsx)("div", {
                className: ea.hd,
                children: (0, t.jsx)("div", {
                    className: ea.fr,
                    children: Array.from({ length: 8 }, (e, l) => (0, t.jsx)(ee.A, {}, l)),
                }),
            }),
            (0, t.jsxs)("div", {
                className: ea.t3,
                children: [
                    (0, t.jsx)("div", { className: ea.bb, children: (0, t.jsx)("div", { className: ea.M$ }) }),
                    (0, t.jsxs)("div", {
                        className: ea.A9,
                        children: [(0, t.jsx)("div", { className: ea.nl }), (0, t.jsx)("div", { className: ea.nl })],
                    }),
                ],
            }),
        ],
    });
}
let eC = function (e) {
    let { collectionId: l } = e,
        s = (0, r.W6)(),
        a = er(l, "collection_index_page_content"),
        i = n.useCallback(
            (e) => {
                let { categorySkuId: l } = e;
                null != l && s.push(q.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(l));
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
                          type: P.g.HERO,
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
    return (0, t.jsx)(W.iM, {
        tab: et.G2.COLLECTION_INDEX,
        children: (0, t.jsxs)("div", {
            className: ea.kL,
            children: [
                o && null != c
                    ? (0, t.jsxs)(t.Fragment, {
                          children: [
                              (0, t.jsxs)("div", {
                                  className: ea.rz,
                                  children: [
                                      (0, t.jsx)("div", {
                                          className: ea.zn,
                                          children: (0, t.jsx)(eI, { collectionId: l }),
                                      }),
                                      (0, t.jsx)(es.A, {
                                          heroBlock: c,
                                          isLoading: !1,
                                          tab: et.G2.COLLECTION_INDEX,
                                          hideButton: !0,
                                          hideCards: !0,
                                      }),
                                  ],
                              }),
                              (0, t.jsx)(ed, { category: a }),
                              (0, t.jsx)(eu, { currentCategorySkuId: a.skuId, handleTransition: i }, a.skuId),
                          ],
                      })
                    : (0, t.jsxs)("div", {
                          className: ea.AW,
                          children: [
                              (0, t.jsx)("div", { className: ea.zn, children: (0, t.jsx)(eI, { collectionId: l }) }),
                              (0, t.jsx)("div", { className: ea.$T, children: (0, t.jsx)(J.A, { category: a }) }),
                              (0, t.jsx)(ed, { category: a }),
                              (0, t.jsx)(eu, { currentCategorySkuId: a.skuId, handleTransition: i }, a.skuId),
                          ],
                      }),
                (0, t.jsx)(ex, {}),
            ],
        }),
    });
};
var ep = s(783857),
    eb = s(170522);
let ej = function (e) {
    let { collectionId: l } = e,
        s = n.useRef(null),
        a = n.useRef(null);
    (0, m.P)(I.a);
    let L = (0, ep.yB)("CollectiblesShopIndexPage");
    (0, ep.gB)();
    let { selectedTab: _, transitionToTab: N, transitionState: v } = (0, k.o)(et.G2.COLLECTION_INDEX);
    (0, p.pE)();
    let T = (0, E.$)("collection_index_page");
    ((0, S.Ay)({ stalePurchasesOK: !0, skipFetch: T }), (0, C.A)(q.FYj));
    let B = (0, h.A)((0, c.A)()),
        P = (0, A.a)("CollectiblesShopIndexPage"),
        { category: F, state: G } = O(l, {
            enabled: T,
            includeUnpublished: (0, x.A)("shop_include_unpublished"),
            includePricing: !0,
        }),
        U = (0, o.bG)([j.A], () => (null != l ? j.A.getCategory(l) : void 0)),
        D = (0, o.bG)([j.A], () => j.A.isFetchingCategories),
        M = (0, o.bG)([j.A], () => null != j.A.lastSuccessfulFetch),
        H = (0, o.bG)([j.A], () => j.A.error),
        V = T ? (F ?? void 0) : U,
        { analyticsLocations: w } = (0, f.lC)(et.G2.COLLECTION_INDEX);
    ((0, f.uS)(B, _, V?.name, v),
        n.useEffect(() => {
            a.current?.scrollTo({ top: 0 });
        }, [l]),
        n.useEffect(() => {
            (0, u.I)(q.BVt.COLLECTIBLES_SHOP);
        }, []));
    let X = (T ? "loading" !== G : !D && (M || null != H)) && null == V;
    return null == l || !P || X
        ? (0, t.jsx)(r.rd, { to: q.BVt.COLLECTIBLES_SHOP })
        : V?.isOrbsExclusive === !0
          ? (0, t.jsx)(r.rd, { to: q.BVt.COLLECTIBLES_SHOP_WITH_TAB(et.G2.ORBS) })
          : null == V
            ? (0, t.jsxs)("div", {
                  className: i()(eb.bx, { [ep.jP]: L }),
                  ref: s,
                  tabIndex: -1,
                  children: [
                      (0, t.jsx)(y.G, { handleTransition: N, selectedTab: _, selectedCollectionId: l }),
                      (0, t.jsx)(d.Ip, { children: (0, t.jsx)(em, {}) }),
                  ],
              })
            : (0, t.jsx)(g.f5, {
                  value: w,
                  children: (0, t.jsx)(b.R9, {
                      newValue: { sessionId: B },
                      children: (0, t.jsxs)("div", {
                          className: i()(eb.bx, { [ep.jP]: L }),
                          ref: s,
                          tabIndex: -1,
                          children: [
                              (0, t.jsx)(y.G, { handleTransition: N, selectedTab: _, selectedCollectionId: l }),
                              (0, t.jsx)(R.A, { tab: _, handleTransition: N }),
                              (0, t.jsx)(d.Ip, { ref: a, children: (0, t.jsx)(eC, { collectionId: l }) }),
                          ],
                      }),
                  }),
              });
};
