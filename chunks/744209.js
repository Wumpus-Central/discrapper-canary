l.r(s), l.d(s, { default: () => en });
var a = l(627968),
    n = l(64700),
    t = l(503698),
    r = l.n(t),
    i = l(873263),
    d = l(132500),
    c = l(17928),
    o = l(364522),
    u = l(944791),
    h = l(444927),
    x = l(688810),
    I = l(475073),
    C = l(611924),
    g = l(561794),
    E = l(440938),
    m = l(590180),
    j = l(50920),
    L = l(790297),
    b = l(841702),
    p = l(983545),
    N = l(956123);
l(321073);
var A = l(575593),
    v = l(651162),
    T = l(40474),
    O = l(297264),
    _ = l(821609),
    k = l(449543),
    R = l(152858),
    f = l(287809),
    B = l(174459),
    S = l(161918),
    y = l(993408),
    G = l(511265),
    P = l(13875),
    F = l(828515),
    D = l(110629),
    U = l(828614),
    M = l(484469),
    H = l(196231),
    V = l(337183),
    w = l(758836),
    W = l(652215),
    X = l(375708),
    z = l(186954);
let K = { aspectRatio: "1 / 1" },
    Y = {
        [A.R.PROFILE_EFFECT]: { className: z.I5, aspectRatio: "1 / 2" },
        [A.R.BUNDLE]: { className: z.kP, aspectRatio: "2 / 1" },
    };
function $(e) {
    let { category: s } = e,
        l = (0, c.bG)([f.default], () => f.default.getCurrentUser()),
        n = (0, G.p)()(s.products);
    return null == l || 0 === n.length
        ? null
        : (0, a.jsx)("div", {
              className: z.hd,
              children: (0, a.jsx)("div", {
                  className: z.fr,
                  children: n.map((e, s) => {
                      let { className: l, aspectRatio: n } =
                          Y[
                              e.type === A.R.VARIANTS_GROUP &&
                              null != e.variants &&
                              e.variants.length > 0 &&
                              e.variants.every((e) => e.type === A.R.PROFILE_EFFECT)
                                  ? A.R.PROFILE_EFFECT
                                  : e.type
                          ] ?? K;
                      return (0, a.jsx)(
                          E.R9,
                          {
                              newValue: { tilePosition: s },
                              children: (0, a.jsx)(U.A, {
                                  skuId: e.skuId,
                                  skipLimitedTimeCheck: !0,
                                  cardClassName: l,
                                  aspectRatio: n,
                              }),
                          },
                          e.skuId,
                      );
                  }),
              }),
          });
}
function J(e) {
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
                        !w.MS.some((s) => {
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
              className: z.t3,
              children: [
                  (0, a.jsx)("div", {
                      className: z.bb,
                      children: (0, a.jsx)(O.D, {
                          variant: "heading-lg/semibold",
                          children: X.intl.string(X.t.EhRZ9o),
                      }),
                  }),
                  (0, a.jsx)(
                      k.A,
                      {
                          gap: "xl",
                          scrollBehavior: R.Uf.ITEM,
                          children: r.map((e, s) =>
                              (0, a.jsx)(
                                  E.R9,
                                  {
                                      newValue: {
                                          categoryPosition: s,
                                          pageCategory: e.name,
                                          pageSection: "related_drops",
                                          tilePosition: s,
                                      },
                                      children: (0, a.jsx)("div", {
                                          className: z.EU,
                                          children: (0, a.jsx)(H.S, {
                                              category: e,
                                              badgeText: (0, y.HF)(e.unpublishedAt)
                                                  ? X.intl.string(X.t["h/uBCR"])
                                                  : void 0,
                                              handleTransition: l,
                                              pageType: w.G2.COLLECTION_INDEX,
                                              className: z.vK,
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
let Z = [
    { tab: w.G2.AVATAR_DECORATIONS, label: () => X.intl.string(X.t.dRZYNE) },
    { tab: w.G2.PROFILE_EFFECTS, label: () => X.intl.string(X.t["1cNjtx"]) },
    { tab: w.G2.NAMEPLATES, label: () => X.intl.string(X.t.V68Fqz) },
    { tab: w.G2.PROFILE_FRAMES, label: () => X.intl.string(X.t.ecTJkR) },
    { tab: w.G2.BUNDLES, label: () => X.intl.string(X.t.FYFpps) },
];
function q() {
    let e = (0, i.W6)(),
        s = (0, P.sk)("CollectionPageFooter"),
        l = n.useMemo(
            () =>
                Z.filter((e) => {
                    let { tab: l } = e;
                    return s || l !== w.G2.PROFILE_FRAMES;
                }),
            [s],
        );
    return (0, a.jsxs)("div", {
        className: z.nb,
        children: [
            (0, a.jsx)(O.D, { variant: "heading-md/semibold", children: X.intl.string(X.t.Yr70c4) }),
            (0, a.jsx)("div", {
                className: z.J2,
                children: l.map((s) => {
                    let { tab: l, label: n } = s;
                    return (0, a.jsx)(
                        _.$,
                        { variant: "secondary", text: n(), onClick: () => e.push(W.BVt.COLLECTIBLES_SHOP_WITH_TAB(l)) },
                        l,
                    );
                }),
            }),
        ],
    });
}
function Q(e) {
    let { collectionId: s } = e,
        l = (0, i.W6)(),
        t = (0, E.uM)(),
        d = (0, c.bG)([m.A], () => m.A.getCategory(s)?.name),
        o = n.useMemo(
            () => [
                { id: "shop_all", label: X.intl.string(X.t.xFcotU) },
                { id: "collection", label: d ?? "" },
            ],
            [d],
        ),
        u = n.useCallback(
            (e) => {
                "shop_all" === e.id &&
                    (B.default.track(W.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: t?.sessionId,
                        sku_id: s,
                        page_type: w.G2.COLLECTION_INDEX,
                        page_category: d,
                        cta_name: "collection breadcrumb shop all",
                    }),
                    l.push(W.BVt.COLLECTIBLES_SHOP_WITH_TAB(w.G2.CATALOG)));
            },
            [l, t?.sessionId, s, d],
        ),
        h = n.useCallback(
            (e, s) =>
                (0, a.jsxs)("span", {
                    className: r()(z.u, { [z.kG]: s }),
                    children: [e.label, !s && (0, a.jsx)("span", { className: z.Tl, children: "/" })],
                }),
            [],
        );
    return (0, a.jsx)(T.A, {
        className: z.C2,
        separatorClassName: z.Lw,
        breadcrumbs: o,
        activeId: "collection",
        onBreadcrumbClick: u,
        renderCustomBreadcrumb: h,
    });
}
function ee() {
    return (0, a.jsxs)("div", {
        className: z.kL,
        children: [
            (0, a.jsx)(V.A, { isLoading: !0, hideButton: !0, hideCards: !0, tab: w.G2.COLLECTION_INDEX }),
            (0, a.jsx)("div", {
                className: z.hd,
                children: (0, a.jsx)("div", {
                    className: z.fr,
                    children: Array.from({ length: 8 }, (e, s) => (0, a.jsx)(M.A, {}, s)),
                }),
            }),
            (0, a.jsxs)("div", {
                className: z.t3,
                children: [
                    (0, a.jsx)("div", { className: z.bb, children: (0, a.jsx)("div", { className: z.M$ }) }),
                    (0, a.jsxs)("div", {
                        className: z.A9,
                        children: [(0, a.jsx)("div", { className: z.nl }), (0, a.jsx)("div", { className: z.nl })],
                    }),
                ],
            }),
        ],
    });
}
let es = function (e) {
    let { collectionId: s } = e,
        l = (0, i.W6)(),
        t = (0, c.bG)([m.A], () => m.A.getCategory(s)),
        r = n.useMemo(() => t?.products.some((e) => e.type === A.R.PROFILE_FRAME) ?? !1, [t]),
        d = n.useCallback(
            (e) => {
                let { categorySkuId: s } = e;
                null != s && l.push(W.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(s));
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
                          type: v.g.HERO,
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
    return (0, a.jsx)(S.iM, {
        tab: w.G2.COLLECTION_INDEX,
        children: (0, a.jsxs)("div", {
            className: z.kL,
            children: [
                u && null != o
                    ? (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsxs)("div", {
                                  className: z.rz,
                                  children: [
                                      (0, a.jsx)("div", {
                                          className: z.zn,
                                          children: (0, a.jsx)(Q, { collectionId: s }),
                                      }),
                                      (0, a.jsx)(V.A, {
                                          heroBlock: o,
                                          isLoading: !1,
                                          tab: w.G2.COLLECTION_INDEX,
                                          badge: r ? (0, a.jsx)(D.A, { location: "CollectionIndexPage" }) : void 0,
                                          hideButton: !0,
                                          hideCards: !0,
                                      }),
                                  ],
                              }),
                              (0, a.jsx)($, { category: t }),
                              (0, a.jsx)(J, { currentCategorySkuId: t.skuId, handleTransition: d }, t.skuId),
                          ],
                      })
                    : (0, a.jsxs)("div", {
                          className: z.AW,
                          children: [
                              (0, a.jsx)("div", { className: z.zn, children: (0, a.jsx)(Q, { collectionId: s }) }),
                              (0, a.jsx)("div", { className: z.$T, children: (0, a.jsx)(F.A, { category: t }) }),
                              (0, a.jsx)($, { category: t }),
                              (0, a.jsx)(J, { currentCategorySkuId: t.skuId, handleTransition: d }, t.skuId),
                          ],
                      }),
                (0, a.jsx)(q, {}),
            ],
        }),
    });
};
var el = l(146919),
    ea = l(195261);
let en = function (e) {
    let { collectionId: s } = e,
        l = n.useRef(null),
        t = n.useRef(null);
    (0, C.P)(I.a);
    let A = (0, el.yB)("CollectiblesShopIndexPage");
    (0, el.gB)();
    let { selectedTab: v, transitionToTab: T, transitionState: O } = (0, p.o)(w.G2.COLLECTION_INDEX);
    (0, g.pE)(), (0, b.Ay)({ stalePurchasesOK: !0 });
    let _ = (0, h.A)((0, d.A)()),
        k = (0, j.a)("CollectiblesShopIndexPage"),
        R = (0, c.bG)([m.A], () => (null != s ? m.A.getCategory(s) : void 0)),
        f = (0, c.bG)([m.A], () => m.A.isFetchingCategories),
        B = (0, c.bG)([m.A], () => null != m.A.lastSuccessfulFetch),
        S = (0, c.bG)([m.A], () => m.A.error),
        { analyticsLocations: y } = (0, L.lC)(w.G2.COLLECTION_INDEX);
    (0, L.uS)(_, v, R?.name, O),
        n.useEffect(() => {
            t.current?.scrollTo({ top: 0 });
        }, [s]),
        n.useEffect(() => {
            (0, u.I)(W.BVt.COLLECTIBLES_SHOP);
        }, []);
    let G = !f && (B || null != S) && null == R;
    return null == s || !k || G
        ? (0, a.jsx)(i.rd, { to: W.BVt.COLLECTIBLES_SHOP })
        : R?.isOrbsExclusive === !0
          ? (0, a.jsx)(i.rd, { to: W.BVt.COLLECTIBLES_SHOP_WITH_TAB(w.G2.ORBS) })
          : null == R
            ? (0, a.jsxs)("div", {
                  className: r()(ea.bx, { [el.jP]: A }),
                  ref: l,
                  tabIndex: -1,
                  children: [
                      (0, a.jsx)(N.G, { handleTransition: T, selectedTab: v }),
                      (0, a.jsx)(o.Ip, { children: (0, a.jsx)(ee, {}) }),
                  ],
              })
            : (0, a.jsx)(x.f5, {
                  value: y,
                  children: (0, a.jsx)(E.R9, {
                      newValue: { sessionId: _ },
                      children: (0, a.jsxs)("div", {
                          className: r()(ea.bx, { [el.jP]: A }),
                          ref: l,
                          tabIndex: -1,
                          children: [
                              (0, a.jsx)(N.G, { handleTransition: T, selectedTab: v }),
                              (0, a.jsx)(o.Ip, { ref: t, children: (0, a.jsx)(es, { collectionId: s }) }),
                          ],
                      }),
                  }),
              });
};
