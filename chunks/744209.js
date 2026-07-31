s.r(l), s.d(l, { default: () => ei });
var a = s(477900),
    n = s(582128),
    t = s(503698),
    r = s.n(t),
    i = s(806163),
    d = s(132500),
    c = s(17928),
    o = s(364522),
    u = s(944791),
    h = s(444927),
    x = s(688810),
    I = s(475073),
    g = s(611924),
    C = s(744082),
    E = s(561794),
    j = s(440938),
    m = s(590180),
    b = s(50920),
    p = s(71604),
    L = s(790297),
    A = s(841702),
    N = s(983545),
    v = s(956123),
    T = s(235939);
s(321073);
var O = s(575593),
    _ = s(651162),
    R = s(40474),
    f = s(297264),
    k = s(821609),
    B = s(449543),
    S = s(152858),
    y = s(287809),
    P = s(174459),
    F = s(161918),
    G = s(993408),
    D = s(511265),
    U = s(13875),
    M = s(828515),
    H = s(110629),
    V = s(258245),
    w = s(484469),
    W = s(196231),
    X = s(337183),
    z = s(758836),
    Y = s(652215),
    K = s(375708),
    $ = s(186954);
let J = { aspectRatio: "1 / 1" },
    Z = {
        [O.R.PROFILE_EFFECT]: { className: $.I5, aspectRatio: "1 / 2" },
        [O.R.BUNDLE]: { className: $.kP, aspectRatio: "2 / 1" },
    };
function q(e) {
    let { category: l } = e,
        s = (0, c.bG)([y.default], () => y.default.getCurrentUser()),
        n = (0, D.p)()(l.products);
    return null == s || 0 === n.length
        ? null
        : (0, a.jsx)("div", {
              className: $.hd,
              children: (0, a.jsx)("div", {
                  className: $.fr,
                  children: n.map((e, l) => {
                      let { className: s, aspectRatio: n } =
                          Z[
                              e.type === O.R.VARIANTS_GROUP &&
                              null != e.variants &&
                              e.variants.length > 0 &&
                              e.variants.every((e) => e.type === O.R.PROFILE_EFFECT)
                                  ? O.R.PROFILE_EFFECT
                                  : e.type
                          ] ?? J;
                      return (0, a.jsx)(
                          j.R9,
                          {
                              newValue: { tilePosition: l },
                              children: (0, a.jsx)(V.A, { skuId: e.skuId, cardClassName: s, aspectRatio: n }),
                          },
                          e.skuId,
                      );
                  }),
              }),
          });
}
function Q(e) {
    let { currentCategorySkuId: l, handleTransition: s } = e,
        t = (0, c.bG)([m.A], () => m.A.categories),
        r = n.useMemo(() => {
            let e = [...t.values()],
                s = e.findIndex((e) => e.skuId === l);
            if (-1 === s) return [];
            let a = [];
            for (let n = 1; n <= e.length && a.length < 8; n++) {
                let t = e[(s + n) % e.length];
                (function (e) {
                    return (
                        e.skuId !== l &&
                        null != e.featuredBlockUrl &&
                        !e.isOrbsExclusive &&
                        e.products.length > 0 &&
                        (null == e.unpublishedAt || e.unpublishedAt > new Date()) &&
                        !z.MS.some((l) => {
                            let { categorySkuId: s } = l;
                            return s === e.skuId;
                        })
                    );
                })(t) && a.push(t);
            }
            return a;
        }, [t, l]);
    return 0 === r.length
        ? null
        : (0, a.jsxs)("div", {
              className: $.t3,
              children: [
                  (0, a.jsx)("div", {
                      className: $.bb,
                      children: (0, a.jsx)(f.D, {
                          variant: "heading-lg/semibold",
                          children: K.intl.string(K.t.EhRZ9o),
                      }),
                  }),
                  (0, a.jsx)(
                      B.A,
                      {
                          gap: "xl",
                          scrollBehavior: S.Uf.ITEM,
                          children: r.map((e, l) =>
                              (0, a.jsx)(
                                  j.R9,
                                  {
                                      newValue: {
                                          categoryPosition: l,
                                          pageCategory: e.name,
                                          pageSection: "related_drops",
                                          tilePosition: l,
                                      },
                                      children: (0, a.jsx)("div", {
                                          className: $.EU,
                                          children: (0, a.jsx)(W.S, {
                                              category: e,
                                              badgeText: (0, G.HF)(e.unpublishedAt)
                                                  ? K.intl.string(K.t["h/uBCR"])
                                                  : void 0,
                                              handleTransition: s,
                                              pageType: z.G2.COLLECTION_INDEX,
                                              className: $.vK,
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
let ee = [
    { tab: z.G2.AVATAR_DECORATIONS, label: () => K.intl.string(K.t.dRZYNE) },
    { tab: z.G2.PROFILE_EFFECTS, label: () => K.intl.string(K.t["1cNjtx"]) },
    { tab: z.G2.NAMEPLATES, label: () => K.intl.string(K.t.V68Fqz) },
    { tab: z.G2.PROFILE_FRAMES, label: () => K.intl.string(K.t.ecTJkR) },
    { tab: z.G2.BUNDLES, label: () => K.intl.string(K.t.FYFpps) },
];
function el() {
    let e = (0, i.W6)(),
        l = (0, U.sk)("CollectionPageFooter"),
        s = n.useMemo(
            () =>
                ee.filter((e) => {
                    let { tab: s } = e;
                    return l || s !== z.G2.PROFILE_FRAMES;
                }),
            [l],
        );
    return (0, a.jsxs)("div", {
        className: $.nb,
        children: [
            (0, a.jsx)(f.D, { variant: "heading-md/semibold", children: K.intl.string(K.t.Yr70c4) }),
            (0, a.jsx)("div", {
                className: $.J2,
                children: s.map((l) => {
                    let { tab: s, label: n } = l;
                    return (0, a.jsx)(
                        k.$,
                        { variant: "secondary", text: n(), onClick: () => e.push(Y.BVt.COLLECTIBLES_SHOP_WITH_TAB(s)) },
                        s,
                    );
                }),
            }),
        ],
    });
}
function es(e) {
    let { collectionId: l } = e,
        s = (0, i.W6)(),
        t = (0, j.uM)(),
        d = (0, c.bG)([m.A], () => m.A.getCategory(l)?.name),
        o = n.useMemo(
            () => [
                { id: "shop_all", label: K.intl.string(K.t.xFcotU) },
                { id: "collection", label: d ?? "" },
            ],
            [d],
        ),
        u = n.useCallback(
            (e) => {
                "shop_all" === e.id &&
                    (P.default.track(Y.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: t?.sessionId,
                        sku_id: l,
                        page_type: z.G2.COLLECTION_INDEX,
                        page_category: d,
                        cta_name: "collection breadcrumb shop all",
                    }),
                    s.push(Y.BVt.COLLECTIBLES_SHOP_WITH_TAB(z.G2.CATALOG)));
            },
            [s, t?.sessionId, l, d],
        ),
        h = n.useCallback(
            (e, l) =>
                (0, a.jsxs)("span", {
                    className: r()($.u, { [$.kG]: l }),
                    children: [e.label, !l && (0, a.jsx)("span", { className: $.Tl, children: "/" })],
                }),
            [],
        );
    return (0, a.jsx)(R.A, {
        className: $.C2,
        separatorClassName: $.Lw,
        breadcrumbs: o,
        activeId: "collection",
        onBreadcrumbClick: u,
        renderCustomBreadcrumb: h,
    });
}
function ea() {
    return (0, a.jsxs)("div", {
        className: $.kL,
        children: [
            (0, a.jsx)(X.A, { isLoading: !0, hideButton: !0, hideCards: !0, tab: z.G2.COLLECTION_INDEX }),
            (0, a.jsx)("div", {
                className: $.hd,
                children: (0, a.jsx)("div", {
                    className: $.fr,
                    children: Array.from({ length: 8 }, (e, l) => (0, a.jsx)(w.A, {}, l)),
                }),
            }),
            (0, a.jsxs)("div", {
                className: $.t3,
                children: [
                    (0, a.jsx)("div", { className: $.bb, children: (0, a.jsx)("div", { className: $.M$ }) }),
                    (0, a.jsxs)("div", {
                        className: $.A9,
                        children: [(0, a.jsx)("div", { className: $.nl }), (0, a.jsx)("div", { className: $.nl })],
                    }),
                ],
            }),
        ],
    });
}
let en = function (e) {
    let { collectionId: l } = e,
        s = (0, i.W6)(),
        t = (0, c.bG)([m.A], () => m.A.getCategory(l)),
        r = n.useMemo(() => t?.products.some((e) => e.type === O.R.PROFILE_FRAME) ?? !1, [t]),
        d = n.useCallback(
            (e) => {
                let { categorySkuId: l } = e;
                null != l && s.push(Y.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(l));
            },
            [s],
        ),
        o = n.useMemo(
            () =>
                null == t
                    ? null
                    : {
                          rankedSkuIds: t.heroRanking ?? [],
                          name: t.name,
                          unpublishedAt: t.unpublishedAt,
                          categorySkuId: t.skuId,
                          summary: t.summary,
                          type: _.g.HERO,
                          categoryStoreListingId: t.storeListingId,
                          bannerDisplayConfig: t.heroBannerDisplayConfig,
                          logoDisplayConfig: t.heroLogoDisplayConfig,
                          heroLogoUrl: t.heroLogoUrl,
                          heroBannerUrl: t.heroBannerUrl,
                          heroBannerAnimatedUrl: t.heroBannerAnimatedUrl,
                          heroRiveUrl: t.heroRiveUrl,
                      },
            [t],
        );
    if (null == t) return null;
    let u = null != t.heroBannerUrl || null != t.heroRiveUrl;
    return (0, a.jsx)(F.iM, {
        tab: z.G2.COLLECTION_INDEX,
        children: (0, a.jsxs)("div", {
            className: $.kL,
            children: [
                u && null != o
                    ? (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsxs)("div", {
                                  className: $.rz,
                                  children: [
                                      (0, a.jsx)("div", {
                                          className: $.zn,
                                          children: (0, a.jsx)(es, { collectionId: l }),
                                      }),
                                      (0, a.jsx)(X.A, {
                                          heroBlock: o,
                                          isLoading: !1,
                                          tab: z.G2.COLLECTION_INDEX,
                                          badge: r ? (0, a.jsx)(H.A, { location: "CollectionIndexPage" }) : void 0,
                                          hideButton: !0,
                                          hideCards: !0,
                                      }),
                                  ],
                              }),
                              (0, a.jsx)(q, { category: t }),
                              (0, a.jsx)(Q, { currentCategorySkuId: t.skuId, handleTransition: d }, t.skuId),
                          ],
                      })
                    : (0, a.jsxs)("div", {
                          className: $.AW,
                          children: [
                              (0, a.jsx)("div", { className: $.zn, children: (0, a.jsx)(es, { collectionId: l }) }),
                              (0, a.jsx)("div", { className: $.$T, children: (0, a.jsx)(M.A, { category: t }) }),
                              (0, a.jsx)(q, { category: t }),
                              (0, a.jsx)(Q, { currentCategorySkuId: t.skuId, handleTransition: d }, t.skuId),
                          ],
                      }),
                (0, a.jsx)(el, {}),
            ],
        }),
    });
};
var et = s(146919),
    er = s(195261);
let ei = function (e) {
    let { collectionId: l } = e,
        s = n.useRef(null),
        t = n.useRef(null);
    (0, g.P)(I.a);
    let O = (0, et.yB)("CollectiblesShopIndexPage");
    (0, et.gB)();
    let { selectedTab: _, transitionToTab: R, transitionState: f } = (0, N.o)(z.G2.COLLECTION_INDEX);
    (0, E.pE)(), (0, A.Ay)({ stalePurchasesOK: !0 });
    let k = (0, p.M)("CollectiblesShopIndexPage");
    (0, C.A)(k ? Y.FYj : void 0);
    let B = (0, h.A)((0, d.A)()),
        S = (0, b.a)("CollectiblesShopIndexPage"),
        y = (0, c.bG)([m.A], () => (null != l ? m.A.getCategory(l) : void 0)),
        P = (0, c.bG)([m.A], () => m.A.isFetchingCategories),
        F = (0, c.bG)([m.A], () => null != m.A.lastSuccessfulFetch),
        G = (0, c.bG)([m.A], () => m.A.error),
        { analyticsLocations: D } = (0, L.lC)(z.G2.COLLECTION_INDEX);
    (0, L.uS)(B, _, y?.name, f),
        n.useEffect(() => {
            t.current?.scrollTo({ top: 0 });
        }, [l]),
        n.useEffect(() => {
            (0, u.I)(Y.BVt.COLLECTIBLES_SHOP);
        }, []);
    let U = !P && (F || null != G) && null == y;
    return null == l || !S || U
        ? (0, a.jsx)(i.rd, { to: Y.BVt.COLLECTIBLES_SHOP })
        : y?.isOrbsExclusive === !0
          ? (0, a.jsx)(i.rd, { to: Y.BVt.COLLECTIBLES_SHOP_WITH_TAB(z.G2.ORBS) })
          : null == y
            ? (0, a.jsxs)("div", {
                  className: r()(er.bx, { [et.jP]: O }),
                  ref: s,
                  tabIndex: -1,
                  children: [
                      (0, a.jsx)(v.G, { handleTransition: R, selectedTab: _ }),
                      (0, a.jsx)(o.Ip, { children: (0, a.jsx)(ea, {}) }),
                  ],
              })
            : (0, a.jsx)(x.f5, {
                  value: D,
                  children: (0, a.jsx)(j.R9, {
                      newValue: { sessionId: B },
                      children: (0, a.jsxs)("div", {
                          className: r()(er.bx, { [et.jP]: O }),
                          ref: s,
                          tabIndex: -1,
                          children: [
                              (0, a.jsx)(v.G, { handleTransition: R, selectedTab: _ }),
                              (0, a.jsx)(T.A, { tab: _, handleTransition: R }),
                              (0, a.jsx)(o.Ip, { ref: t, children: (0, a.jsx)(en, { collectionId: l }) }),
                          ],
                      }),
                  }),
              });
};
