(s.r(l), s.d(l, { default: () => eL }));
var n = s(477900),
    t = s(582128),
    a = s(503698),
    r = s.n(a),
    i = s(806163),
    c = s(132500),
    o = s(364522),
    d = s(689175),
    u = s(944791),
    h = s(444927),
    m = s(688810),
    x = s(354328),
    I = s(475073),
    j = s(611924),
    C = s(744082),
    p = s(561794),
    g = s(440938),
    E = s(12678),
    N = s(706113),
    L = s(841702),
    b = s(983545),
    f = s(464066),
    v = s(235939);
(s(323874), s(14289), s(35956), s(321073));
var A = s(575593),
    _ = s(651162),
    T = s(17928),
    O = s(297264),
    k = s(821609),
    R = s(40474),
    S = s(197935),
    y = s(287809),
    B = s(174459),
    P = s(161918),
    F = s(945810);
let D = { enabled: !1 },
    G = (0, F.mj)({
        name: "2026-10-shop-twelve-days-promo",
        kind: "user",
        defaultConfig: D,
        variations: { 0: D, 1: { enabled: !0 } },
    });
var U = s(511265),
    M = s(304210),
    V = s(350172),
    H = s(730202),
    w = s(510801),
    X = s(652215),
    W = s(828515),
    z = s(442036),
    Y = s(905276),
    K = s(484469),
    Z = s(834730),
    $ = s(683421);
function J(e) {
    let { day: l, skuId: s, tilePosition: t, aspectRatio: a, className: i } = e;
    return (0, n.jsxs)("li", {
        className: r()($.Vs, $.Ml, i),
        style: { "--custom-calendar-tile-aspect-ratio": a },
        children: [
            (0, n.jsx)(g.R9, { newValue: { tilePosition: t }, children: (0, n.jsx)(Y.A, { skuId: s }) }),
            (0, n.jsx)(Z.E, { className: $.vg, variant: "heading-md/medium", color: "none", tag: "span", children: l }),
        ],
    });
}
var q = s(196231),
    Q = s(946052),
    ee = s(758836),
    el = s(105292),
    es = s(146053);
function en(e) {
    return e.skuId;
}
function et(e) {
    let l = (0, x.A)("shop_include_unpublished"),
        { category: s } = (0, N.A)(e, { includeUnpublished: l, includePricing: !0 });
    return s ?? void 0;
}
function ea(e) {
    return e.type === A.R.VARIANTS_GROUP &&
        null != e.variants &&
        e.variants.length > 0 &&
        e.variants.every((e) => e.type === A.R.PROFILE_EFFECT)
        ? A.R.PROFILE_EFFECT
        : e.type;
}
let er = { aspectRatio: "1 / 1" },
    ei = {
        [A.R.PROFILE_EFFECT]: { className: es.I5, aspectRatio: "1 / 2" },
        [A.R.BUNDLE]: { className: es.kP, aspectRatio: "2 / 1" },
    };
function ec(e) {
    let { products: l } = e;
    return (0, n.jsx)("div", {
        className: es.fr,
        children: l.map((e, l) => {
            let { className: s, aspectRatio: t } = ei[ea(e)] ?? er;
            return (0, n.jsx)(
                g.R9,
                {
                    newValue: { tilePosition: l },
                    children: (0, n.jsx)(Y.A, { skuId: e.skuId, cardClassName: s, aspectRatio: t }),
                },
                e.skuId,
            );
        }),
    });
}
function eo(e) {
    let { products: l } = e;
    return (0, n.jsx)("div", {
        className: es.aD,
        children: (0, n.jsx)("ol", {
            className: r()(es.fr, es.ZP),
            children: l.map((e, s) => {
                if (e?.skuId == null) return null;
                let t = s + 1,
                    a = s === l.length - 1,
                    i = a ? er : (ei[ea(e)] ?? er);
                return (0, n.jsx)(
                    J,
                    {
                        day: t,
                        skuId: e.skuId,
                        tilePosition: s,
                        aspectRatio: i.aspectRatio,
                        className: r()(es.Pu, i.className, { [es.pr]: a }),
                    },
                    t,
                );
            }),
        }),
    });
}
function ed(e) {
    let { category: l } = e;
    (0, i.zy)();
    let s = G.useConfig({ location: "collection_index_page" }).enabled && !1,
        t = (0, T.bG)([y.default], () => y.default.getCurrentUser()),
        a = (0, U.p)(),
        r = null != (0, M.ty)(l.skuId),
        c = a(l.products);
    return s || (null != t && 0 !== c.length)
        ? (0, n.jsxs)("div", {
              className: es.hd,
              children: [
                  r && (0, n.jsx)(z.A, { className: es.aQ }),
                  s ? (0, n.jsx)(eo, { products: l.products }) : (0, n.jsx)(ec, { products: c }),
              ],
          })
        : null;
}
function eu(e) {
    let { currentCategorySkuId: l, handleTransition: s } = e,
        { categories: a } = (function (e) {
            let { anchorCollectionId: l, limit: s } = e,
                n = t.useMemo(() => ({ applicationId: X.FYj, anchorCollectionId: l ?? "", limit: s }), [l, s]),
                a = null != l && "" !== l,
                r = (0, V.HX)(n);
            t.useEffect(() => {
                a && (0, V.Su)(n);
            }, [a, n]);
            let { collectionIds: i, fetchState: c } = (0, T.cf)(
                    [H.A],
                    () => ({
                        collectionIds: H.A.getCollectionsAfterIds(r),
                        fetchState: H.A.getCollectionsAfterFetchState(r),
                    }),
                    [r],
                ),
                o = t.useMemo(() => (a ? (i ?? []) : []), [a, i]),
                d = o.join(","),
                u = (0, T.cf)(
                    [H.A],
                    () => {
                        let e = {};
                        for (let l of o) e[l] = H.A.getCollectionOrSummary(l);
                        return e;
                    },
                    [o],
                );
            return {
                categories: t.useMemo(
                    () =>
                        o
                            .map((e) => u[e])
                            .filter((e) => null != e)
                            .map((e) => w.A.fromStorefrontCollectionRecord(e)),
                    [d, u],
                ),
                isLoading: a && null == i && "error" !== c,
            };
        })({ anchorCollectionId: l, limit: 12 }),
        r = t.useCallback(
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
        i = t.useMemo(() => a.filter(r).slice(0, 8), [a, r]);
    return 0 === i.length
        ? null
        : (0, n.jsxs)("div", {
              className: es.t3,
              children: [
                  (0, n.jsx)("div", {
                      className: es.bb,
                      children: (0, n.jsx)(O.D, {
                          variant: "heading-lg/semibold",
                          children: el.intl.string(el.t.EhRZ9o),
                      }),
                  }),
                  (0, n.jsx)(
                      S.A,
                      {
                          gap: "xl",
                          scrollStep: "item",
                          items: i,
                          getItemKey: en,
                          renderItem: (e, l, t) =>
                              (0, n.jsx)(eh, { category: e, index: t, handleTransition: s, listItemProps: l }, e.skuId),
                      },
                      l,
                  ),
              ],
          });
}
function eh(e) {
    let { category: l, index: s, handleTransition: t, listItemProps: a } = e;
    return (0, n.jsx)(g.R9, {
        newValue: { categoryPosition: s, pageCategory: l.name, pageSection: "related_drops", tilePosition: s },
        children: (0, n.jsx)("div", {
            className: es.EU,
            children: (0, n.jsx)(q.S, {
                category: l,
                handleTransition: t,
                pageType: ee.G2.COLLECTION_INDEX,
                className: es.vK,
                listItemProps: a,
            }),
        }),
    });
}
let em = [
    { tab: ee.G2.AVATAR_DECORATIONS, label: () => el.intl.string(el.t.dRZYNE) },
    { tab: ee.G2.PROFILE_EFFECTS, label: () => el.intl.string(el.t["1cNjtx"]) },
    { tab: ee.G2.NAMEPLATES, label: () => el.intl.string(el.t.V68Fqz) },
    { tab: ee.G2.PROFILE_FRAMES, label: () => el.intl.string(el.t.ecTJkR) },
    { tab: ee.G2.BUNDLES, label: () => el.intl.string(el.t.FYFpps) },
];
function ex() {
    let e = (0, i.W6)();
    return (0, n.jsxs)("div", {
        className: es.nb,
        children: [
            (0, n.jsx)(O.D, { variant: "heading-md/semibold", children: el.intl.string(el.t.Yr70c4) }),
            (0, n.jsx)("div", {
                className: es.J2,
                children: em.map((l) => {
                    let { tab: s, label: t } = l;
                    return (0, n.jsx)(
                        k.$,
                        { variant: "secondary", text: t(), onClick: () => e.push(X.BVt.COLLECTIBLES_SHOP_WITH_TAB(s)) },
                        s,
                    );
                }),
            }),
        ],
    });
}
function eI(e) {
    let { collectionId: l } = e,
        s = (0, i.W6)(),
        a = (0, g.uM)(),
        c = et(l)?.name,
        o = t.useMemo(
            () => [
                { id: "shop_all", label: el.intl.string(el.t.xFcotU) },
                { id: "collection", label: c ?? "" },
            ],
            [c],
        ),
        d = t.useCallback(
            (e) => {
                "shop_all" === e.id &&
                    (B.default.track(X.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: a?.sessionId,
                        sku_id: l,
                        page_type: ee.G2.COLLECTION_INDEX,
                        page_category: c,
                        cta_name: "collection breadcrumb shop all",
                    }),
                    s.push(X.BVt.COLLECTIBLES_SHOP_WITH_TAB(ee.G2.CATALOG)));
            },
            [s, a?.sessionId, l, c],
        ),
        u = t.useCallback(
            (e, l) =>
                (0, n.jsxs)("span", {
                    className: r()(es.u, { [es.kG]: l }),
                    children: [e.label, !l && (0, n.jsx)("span", { className: es.Tl, children: "/" })],
                }),
            [],
        );
    return (0, n.jsx)(R.A, {
        className: es.C2,
        separatorClassName: es.Lw,
        breadcrumbs: o,
        activeId: "collection",
        onBreadcrumbClick: d,
        renderCustomBreadcrumb: u,
    });
}
function ej() {
    return (0, n.jsxs)("div", {
        className: es.kL,
        children: [
            (0, n.jsx)(Q.A, { isLoading: !0, hideButton: !0, hideCards: !0, tab: ee.G2.COLLECTION_INDEX }),
            (0, n.jsx)("div", {
                className: es.hd,
                children: (0, n.jsx)("div", {
                    className: es.fr,
                    children: Array.from({ length: 8 }, (e, l) => (0, n.jsx)(K.A, {}, l)),
                }),
            }),
            (0, n.jsxs)("div", {
                className: es.t3,
                children: [
                    (0, n.jsx)("div", { className: es.bb, children: (0, n.jsx)("div", { className: es.M$ }) }),
                    (0, n.jsxs)("div", {
                        className: es.A9,
                        children: [(0, n.jsx)("div", { className: es.nl }), (0, n.jsx)("div", { className: es.nl })],
                    }),
                ],
            }),
        ],
    });
}
let eC = function (e) {
    let { collectionId: l } = e,
        s = (0, i.W6)(),
        a = et(l),
        r = t.useCallback(
            (e) => {
                let { categorySkuId: l } = e;
                null != l && s.push(X.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(l));
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
                          type: _.g.HERO,
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
    return (0, n.jsx)(P.iM, {
        tab: ee.G2.COLLECTION_INDEX,
        children: (0, n.jsxs)("div", {
            className: es.kL,
            children: [
                o && null != c
                    ? (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsxs)("div", {
                                  className: es.rz,
                                  children: [
                                      (0, n.jsx)("div", {
                                          className: es.zn,
                                          children: (0, n.jsx)(eI, { collectionId: l }),
                                      }),
                                      (0, n.jsx)(Q.A, {
                                          heroBlock: c,
                                          isLoading: !1,
                                          tab: ee.G2.COLLECTION_INDEX,
                                          hideButton: !0,
                                          hideCards: !0,
                                      }),
                                  ],
                              }),
                              (0, n.jsx)(ed, { category: a }),
                              (0, n.jsx)(eu, { currentCategorySkuId: a.skuId, handleTransition: r }, a.skuId),
                          ],
                      })
                    : (0, n.jsxs)("div", {
                          className: es.AW,
                          children: [
                              (0, n.jsx)("div", { className: es.zn, children: (0, n.jsx)(eI, { collectionId: l }) }),
                              (0, n.jsx)("div", { className: es.$T, children: (0, n.jsx)(W.A, { category: a }) }),
                              (0, n.jsx)(ed, { category: a }),
                              (0, n.jsx)(eu, { currentCategorySkuId: a.skuId, handleTransition: r }, a.skuId),
                          ],
                      }),
                (0, n.jsx)(ex, {}),
            ],
        }),
    });
};
var ep = s(415926),
    eg = s(783857),
    eE = s(170522);
function eN(e) {
    let { scrollerRef: l, children: s } = e,
        { handleScroll: t } = (0, ep.r)(l, ee.G2.COLLECTION_INDEX);
    return (0, n.jsx)(d.Ch, { ref: l, onScroll: t, children: s });
}
let eL = function (e) {
    let { collectionId: l } = e,
        s = t.useRef(null),
        a = t.useRef(null);
    (0, j.P)(I.a);
    let d = (0, eg.yB)("CollectiblesShopIndexPage");
    (0, eg.gB)();
    let { selectedTab: A, transitionToTab: _, transitionState: T } = (0, b.o)(ee.G2.COLLECTION_INDEX);
    ((0, p.pE)(), (0, L.Wg)(!0), (0, C.A)(X.FYj));
    let O = (0, h.A)((0, c.A)()),
        k = (0, x.A)("shop_include_unpublished"),
        { category: R, state: S } = (0, N.A)(l, { includeUnpublished: k, includePricing: !0 }),
        y = R ?? void 0,
        { analyticsLocations: B } = (0, E.lC)(ee.G2.COLLECTION_INDEX);
    ((0, E.uS)(O, A, y?.name, T, { enabled: null != y }),
        t.useEffect(() => {
            a.current?.scrollTo({ to: 0 });
        }, [l]),
        t.useEffect(() => {
            (0, u.I)(X.BVt.COLLECTIBLES_SHOP);
        }, []));
    let P = "loading" !== S && null == y;
    return null == l || P
        ? (0, n.jsx)(i.rd, { to: X.BVt.COLLECTIBLES_SHOP })
        : y?.isOrbsExclusive === !0
          ? (0, n.jsx)(i.rd, { to: X.BVt.COLLECTIBLES_SHOP_WITH_TAB(ee.G2.ORBS) })
          : null == y
            ? (0, n.jsxs)("div", {
                  className: r()(eE.bx, { [eg.jP]: d }),
                  ref: s,
                  tabIndex: -1,
                  children: [
                      (0, n.jsx)(f.G, { handleTransition: _, selectedTab: A, selectedCollectionId: l }),
                      (0, n.jsx)(o.Ip, { children: (0, n.jsx)(ej, {}) }),
                  ],
              })
            : (0, n.jsx)(m.f5, {
                  value: B,
                  children: (0, n.jsx)(g.R9, {
                      newValue: { sessionId: O },
                      children: (0, n.jsxs)("div", {
                          className: r()(eE.bx, { [eg.jP]: d }),
                          ref: s,
                          tabIndex: -1,
                          children: [
                              (0, n.jsx)(f.G, { handleTransition: _, selectedTab: A, selectedCollectionId: l }),
                              (0, n.jsx)(v.A, { tab: A, handleTransition: _ }),
                              (0, n.jsx)(eN, { scrollerRef: a, children: (0, n.jsx)(eC, { collectionId: l }) }),
                          ],
                      }),
                  }),
              });
};
