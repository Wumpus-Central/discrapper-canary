(s.r(l), s.d(l, { default: () => eI }));
var n = s(477900),
    t = s(582128),
    a = s(503698),
    i = s.n(a),
    r = s(806163),
    c = s(132500),
    o = s(364522),
    d = s(689175),
    u = s(944791),
    h = s(444927),
    I = s(688810),
    m = s(354328),
    x = s(475073),
    C = s(611924),
    j = s(744082),
    E = s(561794),
    g = s(440938),
    p = s(12678),
    L = s(706113),
    N = s(841702),
    b = s(983545),
    f = s(854104),
    A = s(235939);
s(321073);
var _ = s(575593),
    T = s(651162),
    O = s(17928),
    v = s(297264),
    k = s(821609),
    S = s(40474),
    R = s(197935),
    B = s(287809),
    y = s(174459),
    P = s(161918),
    F = s(511265),
    G = s(304210),
    D = s(350172),
    U = s(730202),
    H = s(510801),
    M = s(652215),
    V = s(828515),
    X = s(442036),
    w = s(905276),
    W = s(484469),
    Y = s(196231),
    z = s(946052),
    K = s(758836),
    $ = s(105292),
    J = s(146053);
function Z(e) {
    return e.skuId;
}
function q(e) {
    let l = (0, m.A)("shop_include_unpublished"),
        { category: s } = (0, L.A)(e, { includeUnpublished: l, includePricing: !0 });
    return s ?? void 0;
}
let Q = { aspectRatio: "1 / 1" },
    ee = {
        [_.R.PROFILE_EFFECT]: { className: J.I5, aspectRatio: "1 / 2" },
        [_.R.BUNDLE]: { className: J.kP, aspectRatio: "2 / 1" },
    };
function el(e) {
    let { category: l } = e,
        s = (0, O.bG)([B.default], () => B.default.getCurrentUser()),
        t = (0, F.p)(),
        a = null != (0, G.ty)(l.skuId),
        i = t(l.products);
    return null == s || 0 === i.length
        ? null
        : (0, n.jsxs)("div", {
              className: J.hd,
              children: [
                  a && (0, n.jsx)(X.A, { className: J.aQ }),
                  (0, n.jsx)("div", {
                      className: J.fr,
                      children: i.map((e, l) => {
                          let { className: s, aspectRatio: t } =
                              ee[
                                  e.type === _.R.VARIANTS_GROUP &&
                                  null != e.variants &&
                                  e.variants.length > 0 &&
                                  e.variants.every((e) => e.type === _.R.PROFILE_EFFECT)
                                      ? _.R.PROFILE_EFFECT
                                      : e.type
                              ] ?? Q;
                          return (0, n.jsx)(
                              g.R9,
                              {
                                  newValue: { tilePosition: l },
                                  children: (0, n.jsx)(w.A, { skuId: e.skuId, cardClassName: s, aspectRatio: t }),
                              },
                              e.skuId,
                          );
                      }),
                  }),
              ],
          });
}
function es(e) {
    let { currentCategorySkuId: l, handleTransition: s } = e,
        { categories: a } = (function (e) {
            let { anchorCollectionId: l, limit: s } = e,
                n = t.useMemo(() => ({ applicationId: M.FYj, anchorCollectionId: l ?? "", limit: s }), [l, s]),
                a = null != l && "" !== l,
                i = (0, D.HX)(n);
            t.useEffect(() => {
                a && (0, D.Su)(n);
            }, [a, n]);
            let { collectionIds: r, fetchState: c } = (0, O.cf)(
                    [U.A],
                    () => ({
                        collectionIds: U.A.getCollectionsAfterIds(i),
                        fetchState: U.A.getCollectionsAfterFetchState(i),
                    }),
                    [i],
                ),
                o = t.useMemo(() => (a ? (r ?? []) : []), [a, r]),
                d = o.join(","),
                u = (0, O.cf)(
                    [U.A],
                    () => {
                        let e = {};
                        for (let l of o) e[l] = U.A.getCollectionOrSummary(l);
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
                            .map((e) => H.A.fromStorefrontCollectionRecord(e)),
                    [d, u],
                ),
                isLoading: a && null == r && "error" !== c,
            };
        })({ anchorCollectionId: l, limit: 12 }),
        i = t.useCallback(
            (e) =>
                e.skuId !== l &&
                null != e.featuredBlockUrl &&
                !0 !== e.isOrbsExclusive &&
                (null == e.unpublishedAt || e.unpublishedAt > new Date()) &&
                !K.MS.some((l) => {
                    let { categorySkuId: s } = l;
                    return s === e.skuId;
                }),
            [l],
        ),
        r = t.useMemo(() => a.filter(i).slice(0, 8), [a, i]);
    return 0 === r.length
        ? null
        : (0, n.jsxs)("div", {
              className: J.t3,
              children: [
                  (0, n.jsx)("div", {
                      className: J.bb,
                      children: (0, n.jsx)(v.D, {
                          variant: "heading-lg/semibold",
                          children: $.intl.string($.t.EhRZ9o),
                      }),
                  }),
                  (0, n.jsx)(
                      R.A,
                      {
                          gap: "xl",
                          scrollStep: "item",
                          items: r,
                          getItemKey: Z,
                          renderItem: (e, l, t) =>
                              (0, n.jsx)(en, { category: e, index: t, handleTransition: s, listItemProps: l }, e.skuId),
                      },
                      l,
                  ),
              ],
          });
}
function en(e) {
    let { category: l, index: s, handleTransition: t, listItemProps: a } = e;
    return (0, n.jsx)(g.R9, {
        newValue: { categoryPosition: s, pageCategory: l.name, pageSection: "related_drops", tilePosition: s },
        children: (0, n.jsx)("div", {
            className: J.EU,
            children: (0, n.jsx)(Y.S, {
                category: l,
                handleTransition: t,
                pageType: K.G2.COLLECTION_INDEX,
                className: J.vK,
                listItemProps: a,
            }),
        }),
    });
}
let et = [
    { tab: K.G2.AVATAR_DECORATIONS, label: () => $.intl.string($.t.dRZYNE) },
    { tab: K.G2.PROFILE_EFFECTS, label: () => $.intl.string($.t["1cNjtx"]) },
    { tab: K.G2.NAMEPLATES, label: () => $.intl.string($.t.V68Fqz) },
    { tab: K.G2.PROFILE_FRAMES, label: () => $.intl.string($.t.ecTJkR) },
    { tab: K.G2.BUNDLES, label: () => $.intl.string($.t.FYFpps) },
];
function ea() {
    let e = (0, r.W6)();
    return (0, n.jsxs)("div", {
        className: J.nb,
        children: [
            (0, n.jsx)(v.D, { variant: "heading-md/semibold", children: $.intl.string($.t.Yr70c4) }),
            (0, n.jsx)("div", {
                className: J.J2,
                children: et.map((l) => {
                    let { tab: s, label: t } = l;
                    return (0, n.jsx)(
                        k.$,
                        { variant: "secondary", text: t(), onClick: () => e.push(M.BVt.COLLECTIBLES_SHOP_WITH_TAB(s)) },
                        s,
                    );
                }),
            }),
        ],
    });
}
function ei(e) {
    let { collectionId: l } = e,
        s = (0, r.W6)(),
        a = (0, g.uM)(),
        c = q(l)?.name,
        o = t.useMemo(
            () => [
                { id: "shop_all", label: $.intl.string($.t.xFcotU) },
                { id: "collection", label: c ?? "" },
            ],
            [c],
        ),
        d = t.useCallback(
            (e) => {
                "shop_all" === e.id &&
                    (y.default.track(M.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: a?.sessionId,
                        sku_id: l,
                        page_type: K.G2.COLLECTION_INDEX,
                        page_category: c,
                        cta_name: "collection breadcrumb shop all",
                    }),
                    s.push(M.BVt.COLLECTIBLES_SHOP_WITH_TAB(K.G2.CATALOG)));
            },
            [s, a?.sessionId, l, c],
        ),
        u = t.useCallback(
            (e, l) =>
                (0, n.jsxs)("span", {
                    className: i()(J.u, { [J.kG]: l }),
                    children: [e.label, !l && (0, n.jsx)("span", { className: J.Tl, children: "/" })],
                }),
            [],
        );
    return (0, n.jsx)(S.A, {
        className: J.C2,
        separatorClassName: J.Lw,
        breadcrumbs: o,
        activeId: "collection",
        onBreadcrumbClick: d,
        renderCustomBreadcrumb: u,
    });
}
function er() {
    return (0, n.jsxs)("div", {
        className: J.kL,
        children: [
            (0, n.jsx)(z.A, { isLoading: !0, hideButton: !0, hideCards: !0, tab: K.G2.COLLECTION_INDEX }),
            (0, n.jsx)("div", {
                className: J.hd,
                children: (0, n.jsx)("div", {
                    className: J.fr,
                    children: Array.from({ length: 8 }, (e, l) => (0, n.jsx)(W.A, {}, l)),
                }),
            }),
            (0, n.jsxs)("div", {
                className: J.t3,
                children: [
                    (0, n.jsx)("div", { className: J.bb, children: (0, n.jsx)("div", { className: J.M$ }) }),
                    (0, n.jsxs)("div", {
                        className: J.A9,
                        children: [(0, n.jsx)("div", { className: J.nl }), (0, n.jsx)("div", { className: J.nl })],
                    }),
                ],
            }),
        ],
    });
}
let ec = function (e) {
    let { collectionId: l } = e,
        s = (0, r.W6)(),
        a = q(l),
        i = t.useCallback(
            (e) => {
                let { categorySkuId: l } = e;
                null != l && s.push(M.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(l));
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
                          type: T.g.HERO,
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
        tab: K.G2.COLLECTION_INDEX,
        children: (0, n.jsxs)("div", {
            className: J.kL,
            children: [
                o && null != c
                    ? (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsxs)("div", {
                                  className: J.rz,
                                  children: [
                                      (0, n.jsx)("div", {
                                          className: J.zn,
                                          children: (0, n.jsx)(ei, { collectionId: l }),
                                      }),
                                      (0, n.jsx)(z.A, {
                                          heroBlock: c,
                                          isLoading: !1,
                                          tab: K.G2.COLLECTION_INDEX,
                                          hideButton: !0,
                                          hideCards: !0,
                                      }),
                                  ],
                              }),
                              (0, n.jsx)(el, { category: a }),
                              (0, n.jsx)(es, { currentCategorySkuId: a.skuId, handleTransition: i }, a.skuId),
                          ],
                      })
                    : (0, n.jsxs)("div", {
                          className: J.AW,
                          children: [
                              (0, n.jsx)("div", { className: J.zn, children: (0, n.jsx)(ei, { collectionId: l }) }),
                              (0, n.jsx)("div", { className: J.$T, children: (0, n.jsx)(V.A, { category: a }) }),
                              (0, n.jsx)(el, { category: a }),
                              (0, n.jsx)(es, { currentCategorySkuId: a.skuId, handleTransition: i }, a.skuId),
                          ],
                      }),
                (0, n.jsx)(ea, {}),
            ],
        }),
    });
};
var eo = s(415926),
    ed = s(783857),
    eu = s(170522);
function eh(e) {
    let { scrollerRef: l, children: s } = e,
        { handleScroll: t } = (0, eo.r)(l, K.G2.COLLECTION_INDEX);
    return (0, n.jsx)(d.Ch, { ref: l, onScroll: t, children: s });
}
let eI = function (e) {
    let { collectionId: l } = e,
        s = t.useRef(null),
        a = t.useRef(null);
    (0, C.P)(x.a);
    let d = (0, ed.yB)("CollectiblesShopIndexPage");
    (0, ed.gB)();
    let { selectedTab: _, transitionToTab: T, transitionState: O } = (0, b.o)(K.G2.COLLECTION_INDEX);
    ((0, E.pE)(), (0, N.Wg)(!0), (0, j.A)(M.FYj));
    let v = (0, h.A)((0, c.A)()),
        k = (0, m.A)("shop_include_unpublished"),
        { category: S, state: R } = (0, L.A)(l, { includeUnpublished: k, includePricing: !0 }),
        B = S ?? void 0,
        { analyticsLocations: y } = (0, p.lC)(K.G2.COLLECTION_INDEX);
    ((0, p.uS)(v, _, B?.name, O, { enabled: null != B }),
        t.useEffect(() => {
            a.current?.scrollTo({ to: 0 });
        }, [l]),
        t.useEffect(() => {
            (0, u.I)(M.BVt.COLLECTIBLES_SHOP);
        }, []));
    let P = "loading" !== R && null == B;
    return null == l || P
        ? (0, n.jsx)(r.rd, { to: M.BVt.COLLECTIBLES_SHOP })
        : B?.isOrbsExclusive === !0
          ? (0, n.jsx)(r.rd, { to: M.BVt.COLLECTIBLES_SHOP_WITH_TAB(K.G2.ORBS) })
          : null == B
            ? (0, n.jsxs)("div", {
                  className: i()(eu.bx, { [ed.jP]: d }),
                  ref: s,
                  tabIndex: -1,
                  children: [
                      (0, n.jsx)(f.G, { handleTransition: T, selectedTab: _, selectedCollectionId: l }),
                      (0, n.jsx)(o.Ip, { children: (0, n.jsx)(er, {}) }),
                  ],
              })
            : (0, n.jsx)(I.f5, {
                  value: y,
                  children: (0, n.jsx)(g.R9, {
                      newValue: { sessionId: v },
                      children: (0, n.jsxs)("div", {
                          className: i()(eu.bx, { [ed.jP]: d }),
                          ref: s,
                          tabIndex: -1,
                          children: [
                              (0, n.jsx)(f.G, { handleTransition: T, selectedTab: _, selectedCollectionId: l }),
                              (0, n.jsx)(A.A, { tab: _, handleTransition: T }),
                              (0, n.jsx)(eh, { scrollerRef: a, children: (0, n.jsx)(ec, { collectionId: l }) }),
                          ],
                      }),
                  }),
              });
};
