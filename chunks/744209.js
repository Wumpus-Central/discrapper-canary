l.r(s), l.d(s, { default: () => er });
var a = l(477900),
    n = l(582128),
    t = l(503698),
    r = l.n(t),
    i = l(806163),
    d = l(132500),
    c = l(17928),
    o = l(364522),
    u = l(944791),
    h = l(444927),
    x = l(688810),
    I = l(475073),
    g = l(611924),
    C = l(744082),
    E = l(594832),
    j = l(440938),
    m = l(590180),
    b = l(50920),
    L = l(790297),
    p = l(841702),
    A = l(983545),
    N = l(178504),
    v = l(235939);
l(321073);
var T = l(575593),
    O = l(651162),
    _ = l(40474),
    R = l(297264),
    f = l(821609),
    k = l(449543),
    B = l(152858),
    S = l(287809),
    y = l(174459),
    F = l(161918),
    G = l(993408),
    P = l(511265),
    D = l(13875),
    U = l(828515),
    M = l(110629),
    H = l(258245),
    V = l(484469),
    w = l(196231),
    W = l(337183),
    X = l(758836),
    z = l(652215),
    Y = l(375708),
    K = l(146053);
let $ = { aspectRatio: "1 / 1" },
    J = {
        [T.R.PROFILE_EFFECT]: { className: K.I5, aspectRatio: "1 / 2" },
        [T.R.BUNDLE]: { className: K.kP, aspectRatio: "2 / 1" },
    };
function Z(e) {
    let { category: s } = e,
        l = (0, c.bG)([S.default], () => S.default.getCurrentUser()),
        n = (0, P.p)()(s.products);
    return null == l || 0 === n.length
        ? null
        : (0, a.jsx)("div", {
              className: K.hd,
              children: (0, a.jsx)("div", {
                  className: K.fr,
                  children: n.map((e, s) => {
                      let { className: l, aspectRatio: n } =
                          J[
                              e.type === T.R.VARIANTS_GROUP &&
                              null != e.variants &&
                              e.variants.length > 0 &&
                              e.variants.every((e) => e.type === T.R.PROFILE_EFFECT)
                                  ? T.R.PROFILE_EFFECT
                                  : e.type
                          ] ?? $;
                      return (0, a.jsx)(
                          j.R9,
                          {
                              newValue: { tilePosition: s },
                              children: (0, a.jsx)(H.A, { skuId: e.skuId, cardClassName: l, aspectRatio: n }),
                          },
                          e.skuId,
                      );
                  }),
              }),
          });
}
function q(e) {
    let { currentCategorySkuId: s, handleTransition: l } = e,
        t = (0, c.bG)([m.A], () => m.A.categories),
        r = n.useMemo(() => {
            let e = [...t.values()],
                l = e.findIndex((e) => e.skuId === s);
            if (-1 === l) return [];
            let a = [];
            for (let n = 1; n <= e.length && a.length < 8; n++) {
                let t = e[(l + n) % e.length];
                (function (e) {
                    return (
                        e.skuId !== s &&
                        null != e.featuredBlockUrl &&
                        !e.isOrbsExclusive &&
                        e.products.length > 0 &&
                        (null == e.unpublishedAt || e.unpublishedAt > new Date()) &&
                        !X.MS.some((s) => {
                            let { categorySkuId: l } = s;
                            return l === e.skuId;
                        })
                    );
                })(t) && a.push(t);
            }
            return a;
        }, [t, s]);
    return 0 === r.length
        ? null
        : (0, a.jsxs)("div", {
              className: K.t3,
              children: [
                  (0, a.jsx)("div", {
                      className: K.bb,
                      children: (0, a.jsx)(R.D, {
                          variant: "heading-lg/semibold",
                          children: Y.intl.string(Y.t.EhRZ9o),
                      }),
                  }),
                  (0, a.jsx)(
                      k.A,
                      {
                          gap: "xl",
                          scrollBehavior: B.Uf.ITEM,
                          children: r.map((e, s) =>
                              (0, a.jsx)(
                                  j.R9,
                                  {
                                      newValue: {
                                          categoryPosition: s,
                                          pageCategory: e.name,
                                          pageSection: "related_drops",
                                          tilePosition: s,
                                      },
                                      children: (0, a.jsx)("div", {
                                          className: K.EU,
                                          children: (0, a.jsx)(w.S, {
                                              category: e,
                                              badgeText: (0, G.HF)(e.unpublishedAt)
                                                  ? Y.intl.string(Y.t["h/uBCR"])
                                                  : void 0,
                                              handleTransition: l,
                                              pageType: X.G2.COLLECTION_INDEX,
                                              className: K.vK,
                                          }),
                                      }),
                                  },
                                  e.skuId,
                              ),
                          ),
                      },
                      s,
                  ),
              ],
          });
}
let Q = [
    { tab: X.G2.AVATAR_DECORATIONS, label: () => Y.intl.string(Y.t.dRZYNE) },
    { tab: X.G2.PROFILE_EFFECTS, label: () => Y.intl.string(Y.t["1cNjtx"]) },
    { tab: X.G2.NAMEPLATES, label: () => Y.intl.string(Y.t.V68Fqz) },
    { tab: X.G2.PROFILE_FRAMES, label: () => Y.intl.string(Y.t.ecTJkR) },
    { tab: X.G2.BUNDLES, label: () => Y.intl.string(Y.t.FYFpps) },
];
function ee() {
    let e = (0, i.W6)(),
        s = (0, D.sk)("CollectionPageFooter"),
        l = n.useMemo(
            () =>
                Q.filter((e) => {
                    let { tab: l } = e;
                    return s || l !== X.G2.PROFILE_FRAMES;
                }),
            [s],
        );
    return (0, a.jsxs)("div", {
        className: K.nb,
        children: [
            (0, a.jsx)(R.D, { variant: "heading-md/semibold", children: Y.intl.string(Y.t.Yr70c4) }),
            (0, a.jsx)("div", {
                className: K.J2,
                children: l.map((s) => {
                    let { tab: l, label: n } = s;
                    return (0, a.jsx)(
                        f.$,
                        { variant: "secondary", text: n(), onClick: () => e.push(z.BVt.COLLECTIBLES_SHOP_WITH_TAB(l)) },
                        l,
                    );
                }),
            }),
        ],
    });
}
function es(e) {
    let { collectionId: s } = e,
        l = (0, i.W6)(),
        t = (0, j.uM)(),
        d = (0, c.bG)([m.A], () => m.A.getCategory(s)?.name),
        o = n.useMemo(
            () => [
                { id: "shop_all", label: Y.intl.string(Y.t.xFcotU) },
                { id: "collection", label: d ?? "" },
            ],
            [d],
        ),
        u = n.useCallback(
            (e) => {
                "shop_all" === e.id &&
                    (y.default.track(z.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: t?.sessionId,
                        sku_id: s,
                        page_type: X.G2.COLLECTION_INDEX,
                        page_category: d,
                        cta_name: "collection breadcrumb shop all",
                    }),
                    l.push(z.BVt.COLLECTIBLES_SHOP_WITH_TAB(X.G2.CATALOG)));
            },
            [l, t?.sessionId, s, d],
        ),
        h = n.useCallback(
            (e, s) =>
                (0, a.jsxs)("span", {
                    className: r()(K.u, { [K.kG]: s }),
                    children: [e.label, !s && (0, a.jsx)("span", { className: K.Tl, children: "/" })],
                }),
            [],
        );
    return (0, a.jsx)(_.A, {
        className: K.C2,
        separatorClassName: K.Lw,
        breadcrumbs: o,
        activeId: "collection",
        onBreadcrumbClick: u,
        renderCustomBreadcrumb: h,
    });
}
function el() {
    return (0, a.jsxs)("div", {
        className: K.kL,
        children: [
            (0, a.jsx)(W.A, { isLoading: !0, hideButton: !0, hideCards: !0, tab: X.G2.COLLECTION_INDEX }),
            (0, a.jsx)("div", {
                className: K.hd,
                children: (0, a.jsx)("div", {
                    className: K.fr,
                    children: Array.from({ length: 8 }, (e, s) => (0, a.jsx)(V.A, {}, s)),
                }),
            }),
            (0, a.jsxs)("div", {
                className: K.t3,
                children: [
                    (0, a.jsx)("div", { className: K.bb, children: (0, a.jsx)("div", { className: K.M$ }) }),
                    (0, a.jsxs)("div", {
                        className: K.A9,
                        children: [(0, a.jsx)("div", { className: K.nl }), (0, a.jsx)("div", { className: K.nl })],
                    }),
                ],
            }),
        ],
    });
}
let ea = function (e) {
    let { collectionId: s } = e,
        l = (0, i.W6)(),
        t = (0, c.bG)([m.A], () => m.A.getCategory(s)),
        r = n.useMemo(() => t?.products.some((e) => e.type === T.R.PROFILE_FRAME) ?? !1, [t]),
        d = n.useCallback(
            (e) => {
                let { categorySkuId: s } = e;
                null != s && l.push(z.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(s));
            },
            [l],
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
                          type: O.g.HERO,
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
        tab: X.G2.COLLECTION_INDEX,
        children: (0, a.jsxs)("div", {
            className: K.kL,
            children: [
                u && null != o
                    ? (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsxs)("div", {
                                  className: K.rz,
                                  children: [
                                      (0, a.jsx)("div", {
                                          className: K.zn,
                                          children: (0, a.jsx)(es, { collectionId: s }),
                                      }),
                                      (0, a.jsx)(W.A, {
                                          heroBlock: o,
                                          isLoading: !1,
                                          tab: X.G2.COLLECTION_INDEX,
                                          badge: r ? (0, a.jsx)(M.A, { location: "CollectionIndexPage" }) : void 0,
                                          hideButton: !0,
                                          hideCards: !0,
                                      }),
                                  ],
                              }),
                              (0, a.jsx)(Z, { category: t }),
                              (0, a.jsx)(q, { currentCategorySkuId: t.skuId, handleTransition: d }, t.skuId),
                          ],
                      })
                    : (0, a.jsxs)("div", {
                          className: K.AW,
                          children: [
                              (0, a.jsx)("div", { className: K.zn, children: (0, a.jsx)(es, { collectionId: s }) }),
                              (0, a.jsx)("div", { className: K.$T, children: (0, a.jsx)(U.A, { category: t }) }),
                              (0, a.jsx)(Z, { category: t }),
                              (0, a.jsx)(q, { currentCategorySkuId: t.skuId, handleTransition: d }, t.skuId),
                          ],
                      }),
                (0, a.jsx)(ee, {}),
            ],
        }),
    });
};
var en = l(146919),
    et = l(170522);
let er = function (e) {
    let { collectionId: s } = e,
        l = n.useRef(null),
        t = n.useRef(null);
    (0, g.P)(I.a);
    let T = (0, en.yB)("CollectiblesShopIndexPage");
    (0, en.gB)();
    let { selectedTab: O, transitionToTab: _, transitionState: R } = (0, A.o)(X.G2.COLLECTION_INDEX);
    (0, E.pE)(), (0, p.Ay)({ stalePurchasesOK: !0 }), (0, C.A)(z.FYj);
    let f = (0, h.A)((0, d.A)()),
        k = (0, b.a)("CollectiblesShopIndexPage"),
        B = (0, c.bG)([m.A], () => (null != s ? m.A.getCategory(s) : void 0)),
        S = (0, c.bG)([m.A], () => m.A.isFetchingCategories),
        y = (0, c.bG)([m.A], () => null != m.A.lastSuccessfulFetch),
        F = (0, c.bG)([m.A], () => m.A.error),
        { analyticsLocations: G } = (0, L.lC)(X.G2.COLLECTION_INDEX);
    (0, L.uS)(f, O, B?.name, R),
        n.useEffect(() => {
            t.current?.scrollTo({ top: 0 });
        }, [s]),
        n.useEffect(() => {
            (0, u.I)(z.BVt.COLLECTIBLES_SHOP);
        }, []);
    let P = !S && (y || null != F) && null == B;
    return null == s || !k || P
        ? (0, a.jsx)(i.rd, { to: z.BVt.COLLECTIBLES_SHOP })
        : B?.isOrbsExclusive === !0
          ? (0, a.jsx)(i.rd, { to: z.BVt.COLLECTIBLES_SHOP_WITH_TAB(X.G2.ORBS) })
          : null == B
            ? (0, a.jsxs)("div", {
                  className: r()(et.bx, { [en.jP]: T }),
                  ref: l,
                  tabIndex: -1,
                  children: [
                      (0, a.jsx)(N.G, { handleTransition: _, selectedTab: O }),
                      (0, a.jsx)(o.Ip, { children: (0, a.jsx)(el, {}) }),
                  ],
              })
            : (0, a.jsx)(x.f5, {
                  value: G,
                  children: (0, a.jsx)(j.R9, {
                      newValue: { sessionId: f },
                      children: (0, a.jsxs)("div", {
                          className: r()(et.bx, { [en.jP]: T }),
                          ref: l,
                          tabIndex: -1,
                          children: [
                              (0, a.jsx)(N.G, { handleTransition: _, selectedTab: O }),
                              (0, a.jsx)(v.A, { tab: O, handleTransition: _ }),
                              (0, a.jsx)(o.Ip, { ref: t, children: (0, a.jsx)(ea, { collectionId: s }) }),
                          ],
                      }),
                  }),
              });
};
