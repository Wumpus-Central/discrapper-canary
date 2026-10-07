(s.r(l), s.d(l, { default: () => eE }));
var n = s(477900),
    t = s(582128),
    r = s(503698),
    i = s.n(r),
    a = s(806163),
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
    A = s(590180),
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
        r = l && null != e ? e : "";
    t.useEffect(() => {
        "" !== r && N.p.requestCollections([r], { includeUnpublished: s, includePricing: n });
    }, [r, s, n]);
    let { collection: i, fetchState: a } = (0, o.cf)(
            [_.A],
            () => ({ collection: _.A.getCollection(r), fetchState: _.A.getFetchState(r) }),
            [r],
        ),
        c = (0, T.Hd)(r, a),
        d = t.useMemo(() => (null != i ? v.A.fromStorefrontCollectionRecord(i) : null), [i]),
        u = t.useMemo(() => ("error" === a || c ? "error" : null != d ? "ready" : "loading"), [a, c, d]);
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
var S = s(841702),
    k = s(983545),
    y = s(626148),
    R = s(235939);
s(321073);
var B = s(575593),
    F = s(651162),
    P = s(297264),
    G = s(821609),
    U = s(40474),
    D = s(449543),
    M = s(152858),
    H = s(197935),
    V = s(65238),
    X = s(287809),
    w = s(174459),
    W = s(161918),
    Y = s(993408),
    $ = s(275161),
    z = s(511265),
    K = s(304210),
    q = s(652215),
    J = s(828515),
    Z = s(442036),
    Q = s(258245),
    ee = s(484469),
    el = s(196231),
    es = s(946052),
    en = s(758836),
    et = s(375708),
    er = s(146053);
function ei(e) {
    return e.skuId;
}
function ea(e, l) {
    let s = (0, E.$)(l),
        { category: n } = O(e, {
            enabled: s,
            includeUnpublished: (0, I.A)("shop_include_unpublished"),
            includePricing: !0,
        }),
        t = (0, o.bG)([A.A], () => A.A.getCategory(e));
    return s ? (n ?? void 0) : t;
}
let ec = { aspectRatio: "1 / 1" },
    eo = {
        [B.R.PROFILE_EFFECT]: { className: er.I5, aspectRatio: "1 / 2" },
        [B.R.BUNDLE]: { className: er.kP, aspectRatio: "2 / 1" },
    };
function ed(e) {
    let l,
        s,
        { category: t } = e,
        r = (0, o.bG)([X.default], () => X.default.getCurrentUser()),
        i = (0, z.p)(),
        a =
            ((l = (0, K.S)()),
            (s = (0, V.XF)(l)),
            null != l && s?.collectionId === t.skuId && (null == l.endsAt || l.endsAt > new Date())),
        c = i(t.products);
    return null == r || 0 === c.length
        ? null
        : (0, n.jsxs)("div", {
              className: er.hd,
              children: [
                  a && (0, n.jsx)(Z.A, { className: er.aQ }),
                  (0, n.jsx)("div", {
                      className: er.fr,
                      children: c.map((e, l) => {
                          let { className: s, aspectRatio: t } =
                              eo[
                                  e.type === B.R.VARIANTS_GROUP &&
                                  null != e.variants &&
                                  e.variants.length > 0 &&
                                  e.variants.every((e) => e.type === B.R.PROFILE_EFFECT)
                                      ? B.R.PROFILE_EFFECT
                                      : e.type
                              ] ?? ec;
                          return (0, n.jsx)(
                              j.R9,
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
        r = (0, E.$)("collection_index_related_drops"),
        i = (0, $.Y)("related_drops"),
        { categories: a } = (function (e) {
            let { anchorCollectionId: l, limit: s, enabled: n = !0 } = e,
                r = t.useMemo(() => ({ applicationId: q.FYj, anchorCollectionId: l ?? "", limit: s }), [l, s]),
                i = n && null != l && "" !== l,
                a = (0, L.HX)(r);
            t.useEffect(() => {
                i && (0, L.Su)(r);
            }, [i, r]);
            let { collectionIds: c, fetchState: d } = (0, o.cf)(
                    [_.A],
                    () => ({
                        collectionIds: _.A.getCollectionsAfterIds(a),
                        fetchState: _.A.getCollectionsAfterFetchState(a),
                    }),
                    [a],
                ),
                u = t.useMemo(() => (i ? (c ?? []) : []), [i, c]),
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
                isLoading: i && null == c && "error" !== d,
            };
        })({ anchorCollectionId: l, limit: 12, enabled: r }),
        c = (0, o.bG)([A.A], () => A.A.categories),
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
            if (r) return a.filter(d).slice(0, 8);
            let e = [...c.values()],
                s = e.findIndex((e) => e.skuId === l);
            if (-1 === s) return [];
            let n = [];
            for (let l = 1; l <= e.length && n.length < 8; l++) {
                let t = e[(s + l) % e.length];
                d(t) && t.products.length > 0 && n.push(t);
            }
            return n;
        }, [r, a, c, l, d]);
    return 0 === u.length
        ? null
        : (0, n.jsxs)("div", {
              className: er.t3,
              children: [
                  (0, n.jsx)("div", {
                      className: er.bb,
                      children: (0, n.jsx)(P.D, {
                          variant: "heading-lg/semibold",
                          children: et.intl.string(et.t.EhRZ9o),
                      }),
                  }),
                  i
                      ? (0, n.jsx)(
                            H.A,
                            {
                                gap: "xl",
                                scrollStep: "item",
                                items: u,
                                getItemKey: ei,
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
    let { category: l, index: s, handleTransition: t, listItemProps: r } = e;
    return (0, n.jsx)(j.R9, {
        newValue: { categoryPosition: s, pageCategory: l.name, pageSection: "related_drops", tilePosition: s },
        children: (0, n.jsx)("div", {
            className: er.EU,
            children: (0, n.jsx)(el.S, {
                category: l,
                badgeText: (0, Y.HF)(l.unpublishedAt) ? et.intl.string(et.t["h/uBCR"]) : void 0,
                handleTransition: t,
                pageType: en.G2.COLLECTION_INDEX,
                className: er.vK,
                listItemProps: r,
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
    let e = (0, a.W6)();
    return (0, n.jsxs)("div", {
        className: er.nb,
        children: [
            (0, n.jsx)(P.D, { variant: "heading-md/semibold", children: et.intl.string(et.t.Yr70c4) }),
            (0, n.jsx)("div", {
                className: er.J2,
                children: eg.map((l) => {
                    let { tab: s, label: t } = l;
                    return (0, n.jsx)(
                        G.$,
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
        s = (0, a.W6)(),
        r = (0, j.uM)(),
        c = ea(l, "collection_index_breadcrumb")?.name,
        o = t.useMemo(
            () => [
                { id: "shop_all", label: et.intl.string(et.t.xFcotU) },
                { id: "collection", label: c ?? "" },
            ],
            [c],
        ),
        d = t.useCallback(
            (e) => {
                "shop_all" === e.id &&
                    (w.default.track(q.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: r?.sessionId,
                        sku_id: l,
                        page_type: en.G2.COLLECTION_INDEX,
                        page_category: c,
                        cta_name: "collection breadcrumb shop all",
                    }),
                    s.push(q.BVt.COLLECTIBLES_SHOP_WITH_TAB(en.G2.CATALOG)));
            },
            [s, r?.sessionId, l, c],
        ),
        u = t.useCallback(
            (e, l) =>
                (0, n.jsxs)("span", {
                    className: i()(er.u, { [er.kG]: l }),
                    children: [e.label, !l && (0, n.jsx)("span", { className: er.Tl, children: "/" })],
                }),
            [],
        );
    return (0, n.jsx)(U.A, {
        className: er.C2,
        separatorClassName: er.Lw,
        breadcrumbs: o,
        activeId: "collection",
        onBreadcrumbClick: d,
        renderCustomBreadcrumb: u,
    });
}
function eC() {
    return (0, n.jsxs)("div", {
        className: er.kL,
        children: [
            (0, n.jsx)(es.A, { isLoading: !0, hideButton: !0, hideCards: !0, tab: en.G2.COLLECTION_INDEX }),
            (0, n.jsx)("div", {
                className: er.hd,
                children: (0, n.jsx)("div", {
                    className: er.fr,
                    children: Array.from({ length: 8 }, (e, l) => (0, n.jsx)(ee.A, {}, l)),
                }),
            }),
            (0, n.jsxs)("div", {
                className: er.t3,
                children: [
                    (0, n.jsx)("div", { className: er.bb, children: (0, n.jsx)("div", { className: er.M$ }) }),
                    (0, n.jsxs)("div", {
                        className: er.A9,
                        children: [(0, n.jsx)("div", { className: er.nl }), (0, n.jsx)("div", { className: er.nl })],
                    }),
                ],
            }),
        ],
    });
}
let em = function (e) {
    let { collectionId: l } = e,
        s = (0, a.W6)(),
        r = ea(l, "collection_index_page_content"),
        i = t.useCallback(
            (e) => {
                let { categorySkuId: l } = e;
                null != l && s.push(q.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(l));
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
                          type: F.g.HERO,
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
    return (0, n.jsx)(W.iM, {
        tab: en.G2.COLLECTION_INDEX,
        children: (0, n.jsxs)("div", {
            className: er.kL,
            children: [
                o && null != c
                    ? (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsxs)("div", {
                                  className: er.rz,
                                  children: [
                                      (0, n.jsx)("div", {
                                          className: er.zn,
                                          children: (0, n.jsx)(eI, { collectionId: l }),
                                      }),
                                      (0, n.jsx)(es.A, {
                                          heroBlock: c,
                                          isLoading: !1,
                                          tab: en.G2.COLLECTION_INDEX,
                                          hideButton: !0,
                                          hideCards: !0,
                                      }),
                                  ],
                              }),
                              (0, n.jsx)(ed, { category: r }),
                              (0, n.jsx)(eu, { currentCategorySkuId: r.skuId, handleTransition: i }, r.skuId),
                          ],
                      })
                    : (0, n.jsxs)("div", {
                          className: er.AW,
                          children: [
                              (0, n.jsx)("div", { className: er.zn, children: (0, n.jsx)(eI, { collectionId: l }) }),
                              (0, n.jsx)("div", { className: er.$T, children: (0, n.jsx)(J.A, { category: r }) }),
                              (0, n.jsx)(ed, { category: r }),
                              (0, n.jsx)(eu, { currentCategorySkuId: r.skuId, handleTransition: i }, r.skuId),
                          ],
                      }),
                (0, n.jsx)(ex, {}),
            ],
        }),
    });
};
var ep = s(415926),
    eb = s(783857),
    ej = s(170522);
function eA(e) {
    let { scrollerRef: l, children: s } = e,
        { handleScroll: t } = (0, ep.r)(l, en.G2.COLLECTION_INDEX);
    return (0, n.jsx)(u.Ch, { ref: l, onScroll: t, children: s });
}
let eE = function (e) {
    let { collectionId: l } = e,
        s = t.useRef(null),
        r = t.useRef(null);
    (0, m.P)(C.a);
    let u = (0, eb.yB)("CollectiblesShopIndexPage");
    (0, eb.gB)();
    let { selectedTab: L, transitionToTab: _, transitionState: N } = (0, k.o)(en.G2.COLLECTION_INDEX);
    (0, b.pE)();
    let v = (0, E.$)("collection_index_page");
    ((0, S.Ay)({ stalePurchasesOK: !0, skipFetch: v }), (0, p.A)(q.FYj));
    let T = (0, g.A)((0, c.A)()),
        { category: B, state: F } = O(l, {
            enabled: v,
            includeUnpublished: (0, I.A)("shop_include_unpublished"),
            includePricing: !0,
        }),
        P = (0, o.bG)([A.A], () => (null != l ? A.A.getCategory(l) : void 0)),
        G = (0, o.bG)([A.A], () => A.A.isFetchingCategories),
        U = (0, o.bG)([A.A], () => null != A.A.lastSuccessfulFetch),
        D = (0, o.bG)([A.A], () => A.A.error),
        M = v ? (B ?? void 0) : P,
        { analyticsLocations: H } = (0, f.lC)(en.G2.COLLECTION_INDEX);
    ((0, f.uS)(T, L, M?.name, N, { enabled: null != M }),
        t.useEffect(() => {
            r.current?.scrollTo({ to: 0 });
        }, [l]),
        t.useEffect(() => {
            (0, h.I)(q.BVt.COLLECTIBLES_SHOP);
        }, []));
    let V = (v ? "loading" !== F : !G && (U || null != D)) && null == M;
    return null == l || V
        ? (0, n.jsx)(a.rd, { to: q.BVt.COLLECTIBLES_SHOP })
        : M?.isOrbsExclusive === !0
          ? (0, n.jsx)(a.rd, { to: q.BVt.COLLECTIBLES_SHOP_WITH_TAB(en.G2.ORBS) })
          : null == M
            ? (0, n.jsxs)("div", {
                  className: i()(ej.bx, { [eb.jP]: u }),
                  ref: s,
                  tabIndex: -1,
                  children: [
                      (0, n.jsx)(y.G, { handleTransition: _, selectedTab: L, selectedCollectionId: l }),
                      (0, n.jsx)(d.Ip, { children: (0, n.jsx)(eC, {}) }),
                  ],
              })
            : (0, n.jsx)(x.f5, {
                  value: H,
                  children: (0, n.jsx)(j.R9, {
                      newValue: { sessionId: T },
                      children: (0, n.jsxs)("div", {
                          className: i()(ej.bx, { [eb.jP]: u }),
                          ref: s,
                          tabIndex: -1,
                          children: [
                              (0, n.jsx)(y.G, { handleTransition: _, selectedTab: L, selectedCollectionId: l }),
                              (0, n.jsx)(R.A, { tab: L, handleTransition: _ }),
                              (0, n.jsx)(eA, { scrollerRef: r, children: (0, n.jsx)(em, { collectionId: l }) }),
                          ],
                      }),
                  }),
              });
};
