(s.r(l), s.d(l, { default: () => eC }));
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
    C = s(688810),
    g = s(354328),
    x = s(475073),
    I = s(611924),
    p = s(744082),
    m = s(594832),
    b = s(440938),
    j = s(590180),
    E = s(50920),
    A = s(395856),
    L = s(790297),
    f = s(350172),
    _ = s(730202),
    N = s(295586),
    v = s(510801),
    T = s(682301);
function O(e) {
    let { enabled: l = !0, includeUnpublished: s = !1 } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        t = l && null != e ? e : "";
    n.useEffect(() => {
        "" !== t && N.p.requestCollections([t], { includeUnpublished: s });
    }, [t, s]);
    let { collection: a, fetchState: i } = (0, o.cf)(
            [_.A],
            () => ({ collection: _.A.getCollection(t), fetchState: _.A.getFetchState(t) }),
            [t],
        ),
        r = (0, T.Hd)(t, i),
        c = n.useMemo(() => (null != a ? v.A.fromStorefrontCollectionRecord(a) : null), [a]),
        d = n.useMemo(() => ("error" === i || r ? "error" : null != c ? "ready" : "loading"), [i, r, c]);
    return {
        category: c,
        state: d,
        retry: n.useCallback(() => {
            "" !== t &&
                (0, f._v)({
                    collectionIds: [t],
                    includeUnpublishedCollections: s,
                    includeUnpublishedProducts: s,
                    ignoreCache: !0,
                });
        }, [t, s]),
    };
}
var S = s(841702),
    k = s(983545),
    R = s(545631),
    y = s(235939);
s(321073);
var B = s(575593),
    F = s(651162),
    G = s(40474),
    P = s(297264),
    U = s(821609),
    D = s(449543),
    M = s(152858),
    H = s(287809),
    V = s(174459),
    w = s(161918),
    X = s(993408),
    W = s(511265),
    $ = s(652215),
    Y = s(828515),
    z = s(258245),
    K = s(484469),
    q = s(196231),
    J = s(59896),
    Z = s(758836),
    Q = s(375708),
    ee = s(146053);
function el(e, l) {
    let s = (0, A.$)(l),
        { category: t } = O(e, { enabled: s, includeUnpublished: (0, g.A)("shop_include_unpublished") }),
        n = (0, o.bG)([j.A], () => j.A.getCategory(e));
    return s ? (t ?? void 0) : n;
}
let es = { aspectRatio: "1 / 1" },
    et = {
        [B.R.PROFILE_EFFECT]: { className: ee.I5, aspectRatio: "1 / 2" },
        [B.R.BUNDLE]: { className: ee.kP, aspectRatio: "2 / 1" },
    };
function en(e) {
    let { category: l } = e,
        s = (0, o.bG)([H.default], () => H.default.getCurrentUser()),
        n = (0, W.p)()(l.products);
    return null == s || 0 === n.length
        ? null
        : (0, t.jsx)("div", {
              className: ee.hd,
              children: (0, t.jsx)("div", {
                  className: ee.fr,
                  children: n.map((e, l) => {
                      let { className: s, aspectRatio: n } =
                          et[
                              e.type === B.R.VARIANTS_GROUP &&
                              null != e.variants &&
                              e.variants.length > 0 &&
                              e.variants.every((e) => e.type === B.R.PROFILE_EFFECT)
                                  ? B.R.PROFILE_EFFECT
                                  : e.type
                          ] ?? es;
                      return (0, t.jsx)(
                          b.R9,
                          {
                              newValue: { tilePosition: l },
                              children: (0, t.jsx)(z.A, { skuId: e.skuId, cardClassName: s, aspectRatio: n }),
                          },
                          e.skuId,
                      );
                  }),
              }),
          });
}
function ea(e) {
    let { currentCategorySkuId: l, handleTransition: s } = e,
        a = (0, A.$)("collection_index_related_drops"),
        { categories: i } = (function (e) {
            let { anchorCollectionId: l, limit: s, enabled: t = !0 } = e,
                a = n.useMemo(() => ({ applicationId: $.FYj, anchorCollectionId: l ?? "", limit: s }), [l, s]),
                i = t && null != l && "" !== l,
                r = (0, f.HX)(a);
            n.useEffect(() => {
                i && (0, f.Su)(a);
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
                categories: n.useMemo(
                    () =>
                        u
                            .map((e) => C[e])
                            .filter((e) => null != e)
                            .map((e) => v.A.fromStorefrontCollectionRecord(e)),
                    [h, C],
                ),
                isLoading: i && null == c && "error" !== d,
            };
        })({ anchorCollectionId: l, limit: 12, enabled: a }),
        r = (0, o.bG)([j.A], () => j.A.categories),
        c = n.useCallback(
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
        d = n.useMemo(() => {
            if (a) return i.filter(c).slice(0, 8);
            let e = [...r.values()],
                s = e.findIndex((e) => e.skuId === l);
            if (-1 === s) return [];
            let t = [];
            for (let l = 1; l <= e.length && t.length < 8; l++) {
                let n = e[(s + l) % e.length];
                c(n) && n.products.length > 0 && t.push(n);
            }
            return t;
        }, [a, i, r, l, c]);
    return 0 === d.length
        ? null
        : (0, t.jsxs)("div", {
              className: ee.t3,
              children: [
                  (0, t.jsx)("div", {
                      className: ee.bb,
                      children: (0, t.jsx)(P.D, {
                          variant: "heading-lg/semibold",
                          children: Q.intl.string(Q.t.EhRZ9o),
                      }),
                  }),
                  (0, t.jsx)(
                      D.A,
                      {
                          gap: "xl",
                          scrollBehavior: M.Uf.ITEM,
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
                                          className: ee.EU,
                                          children: (0, t.jsx)(q.S, {
                                              category: e,
                                              badgeText: (0, X.HF)(e.unpublishedAt)
                                                  ? Q.intl.string(Q.t["h/uBCR"])
                                                  : void 0,
                                              handleTransition: s,
                                              pageType: Z.G2.COLLECTION_INDEX,
                                              className: ee.vK,
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
let ei = [
    { tab: Z.G2.AVATAR_DECORATIONS, label: () => Q.intl.string(Q.t.dRZYNE) },
    { tab: Z.G2.PROFILE_EFFECTS, label: () => Q.intl.string(Q.t["1cNjtx"]) },
    { tab: Z.G2.NAMEPLATES, label: () => Q.intl.string(Q.t.V68Fqz) },
    { tab: Z.G2.PROFILE_FRAMES, label: () => Q.intl.string(Q.t.ecTJkR) },
    { tab: Z.G2.BUNDLES, label: () => Q.intl.string(Q.t.FYFpps) },
];
function er() {
    let e = (0, r.W6)();
    return (0, t.jsxs)("div", {
        className: ee.nb,
        children: [
            (0, t.jsx)(P.D, { variant: "heading-md/semibold", children: Q.intl.string(Q.t.Yr70c4) }),
            (0, t.jsx)("div", {
                className: ee.J2,
                children: ei.map((l) => {
                    let { tab: s, label: n } = l;
                    return (0, t.jsx)(
                        U.$,
                        { variant: "secondary", text: n(), onClick: () => e.push($.BVt.COLLECTIBLES_SHOP_WITH_TAB(s)) },
                        s,
                    );
                }),
            }),
        ],
    });
}
function ec(e) {
    let { collectionId: l } = e,
        s = (0, r.W6)(),
        a = (0, b.uM)(),
        c = el(l, "collection_index_breadcrumb")?.name,
        o = n.useMemo(
            () => [
                { id: "shop_all", label: Q.intl.string(Q.t.xFcotU) },
                { id: "collection", label: c ?? "" },
            ],
            [c],
        ),
        d = n.useCallback(
            (e) => {
                "shop_all" === e.id &&
                    (V.default.track($.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: a?.sessionId,
                        sku_id: l,
                        page_type: Z.G2.COLLECTION_INDEX,
                        page_category: c,
                        cta_name: "collection breadcrumb shop all",
                    }),
                    s.push($.BVt.COLLECTIBLES_SHOP_WITH_TAB(Z.G2.CATALOG)));
            },
            [s, a?.sessionId, l, c],
        ),
        u = n.useCallback(
            (e, l) =>
                (0, t.jsxs)("span", {
                    className: i()(ee.u, { [ee.kG]: l }),
                    children: [e.label, !l && (0, t.jsx)("span", { className: ee.Tl, children: "/" })],
                }),
            [],
        );
    return (0, t.jsx)(G.A, {
        className: ee.C2,
        separatorClassName: ee.Lw,
        breadcrumbs: o,
        activeId: "collection",
        onBreadcrumbClick: d,
        renderCustomBreadcrumb: u,
    });
}
function eo() {
    return (0, t.jsxs)("div", {
        className: ee.kL,
        children: [
            (0, t.jsx)(J.A, { isLoading: !0, hideButton: !0, hideCards: !0, tab: Z.G2.COLLECTION_INDEX }),
            (0, t.jsx)("div", {
                className: ee.hd,
                children: (0, t.jsx)("div", {
                    className: ee.fr,
                    children: Array.from({ length: 8 }, (e, l) => (0, t.jsx)(K.A, {}, l)),
                }),
            }),
            (0, t.jsxs)("div", {
                className: ee.t3,
                children: [
                    (0, t.jsx)("div", { className: ee.bb, children: (0, t.jsx)("div", { className: ee.M$ }) }),
                    (0, t.jsxs)("div", {
                        className: ee.A9,
                        children: [(0, t.jsx)("div", { className: ee.nl }), (0, t.jsx)("div", { className: ee.nl })],
                    }),
                ],
            }),
        ],
    });
}
let ed = function (e) {
    let { collectionId: l } = e,
        s = (0, r.W6)(),
        a = el(l, "collection_index_page_content"),
        i = n.useCallback(
            (e) => {
                let { categorySkuId: l } = e;
                null != l && s.push($.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(l));
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
    let o = null != a.heroBannerUrl || null != a.heroRiveUrl;
    return (0, t.jsx)(w.iM, {
        tab: Z.G2.COLLECTION_INDEX,
        children: (0, t.jsxs)("div", {
            className: ee.kL,
            children: [
                o && null != c
                    ? (0, t.jsxs)(t.Fragment, {
                          children: [
                              (0, t.jsxs)("div", {
                                  className: ee.rz,
                                  children: [
                                      (0, t.jsx)("div", {
                                          className: ee.zn,
                                          children: (0, t.jsx)(ec, { collectionId: l }),
                                      }),
                                      (0, t.jsx)(J.A, {
                                          heroBlock: c,
                                          isLoading: !1,
                                          tab: Z.G2.COLLECTION_INDEX,
                                          hideButton: !0,
                                          hideCards: !0,
                                      }),
                                  ],
                              }),
                              (0, t.jsx)(en, { category: a }),
                              (0, t.jsx)(ea, { currentCategorySkuId: a.skuId, handleTransition: i }, a.skuId),
                          ],
                      })
                    : (0, t.jsxs)("div", {
                          className: ee.AW,
                          children: [
                              (0, t.jsx)("div", { className: ee.zn, children: (0, t.jsx)(ec, { collectionId: l }) }),
                              (0, t.jsx)("div", { className: ee.$T, children: (0, t.jsx)(Y.A, { category: a }) }),
                              (0, t.jsx)(en, { category: a }),
                              (0, t.jsx)(ea, { currentCategorySkuId: a.skuId, handleTransition: i }, a.skuId),
                          ],
                      }),
                (0, t.jsx)(er, {}),
            ],
        }),
    });
};
var eu = s(146919),
    eh = s(170522);
let eC = function (e) {
    let { collectionId: l } = e,
        s = n.useRef(null),
        a = n.useRef(null);
    (0, I.P)(x.a);
    let f = (0, eu.yB)("CollectiblesShopIndexPage");
    (0, eu.gB)();
    let { selectedTab: _, transitionToTab: N, transitionState: v } = (0, k.o)(Z.G2.COLLECTION_INDEX);
    (0, m.pE)();
    let T = (0, A.$)("collection_index_page");
    ((0, S.Ay)({ stalePurchasesOK: !0, skipFetch: T }), (0, p.A)($.FYj));
    let B = (0, h.A)((0, c.A)()),
        F = (0, E.a)("CollectiblesShopIndexPage"),
        { category: G, state: P } = O(l, { enabled: T, includeUnpublished: (0, g.A)("shop_include_unpublished") }),
        U = (0, o.bG)([j.A], () => (null != l ? j.A.getCategory(l) : void 0)),
        D = (0, o.bG)([j.A], () => j.A.isFetchingCategories),
        M = (0, o.bG)([j.A], () => null != j.A.lastSuccessfulFetch),
        H = (0, o.bG)([j.A], () => j.A.error),
        V = T ? (G ?? void 0) : U,
        { analyticsLocations: w } = (0, L.lC)(Z.G2.COLLECTION_INDEX);
    ((0, L.uS)(B, _, V?.name, v),
        n.useEffect(() => {
            a.current?.scrollTo({ top: 0 });
        }, [l]),
        n.useEffect(() => {
            (0, u.I)($.BVt.COLLECTIBLES_SHOP);
        }, []));
    let X = (T ? "loading" !== P : !D && (M || null != H)) && null == V;
    return null == l || !F || X
        ? (0, t.jsx)(r.rd, { to: $.BVt.COLLECTIBLES_SHOP })
        : V?.isOrbsExclusive === !0
          ? (0, t.jsx)(r.rd, { to: $.BVt.COLLECTIBLES_SHOP_WITH_TAB(Z.G2.ORBS) })
          : null == V
            ? (0, t.jsxs)("div", {
                  className: i()(eh.bx, { [eu.jP]: f }),
                  ref: s,
                  tabIndex: -1,
                  children: [
                      (0, t.jsx)(R.G, { handleTransition: N, selectedTab: _, selectedCollectionId: l }),
                      (0, t.jsx)(d.Ip, { children: (0, t.jsx)(eo, {}) }),
                  ],
              })
            : (0, t.jsx)(C.f5, {
                  value: w,
                  children: (0, t.jsx)(b.R9, {
                      newValue: { sessionId: B },
                      children: (0, t.jsxs)("div", {
                          className: i()(eh.bx, { [eu.jP]: f }),
                          ref: s,
                          tabIndex: -1,
                          children: [
                              (0, t.jsx)(R.G, { handleTransition: N, selectedTab: _, selectedCollectionId: l }),
                              (0, t.jsx)(y.A, { tab: _, handleTransition: N }),
                              (0, t.jsx)(d.Ip, { ref: a, children: (0, t.jsx)(ed, { collectionId: l }) }),
                          ],
                      }),
                  }),
              });
};
