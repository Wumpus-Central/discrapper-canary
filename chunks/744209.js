l.r(s), l.d(s, { default: () => et });
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
    C = l(475073),
    I = l(611924),
    g = l(561794),
    m = l(440938),
    E = l(590180),
    j = l(50920),
    p = l(790297),
    b = l(841702),
    L = l(621653),
    N = l(983545),
    A = l(956123);
l(321073);
var v = l(575593),
    T = l(651162),
    O = l(40474),
    _ = l(297264),
    k = l(821609),
    R = l(449543),
    B = l(287809),
    f = l(174459),
    y = l(161918),
    S = l(993408),
    G = l(940980),
    P = l(511265),
    F = l(828515),
    D = l(110629),
    U = l(828614),
    H = l(561769),
    M = l(484469),
    V = l(196231),
    w = l(337183),
    W = l(758836),
    X = l(652215),
    z = l(375708),
    K = l(339202);
let Y = { aspectRatio: "1 / 1" },
    $ = {
        [v.R.PROFILE_EFFECT]: { className: K.I5, aspectRatio: "1 / 2" },
        [v.R.BUNDLE]: { className: K.kP, aspectRatio: "2 / 1" },
    };
function J(e) {
    let { category: s } = e,
        l = (0, c.bG)([B.default], () => B.default.getCurrentUser()),
        n = (0, P.p)()(s.products),
        t = (0, G.W)("CollectionIndexPage");
    return null == l || 0 === n.length
        ? null
        : (0, a.jsx)("div", {
              className: K.hd,
              children: (0, a.jsx)("div", {
                  className: K.fr,
                  children: n.map((e, s) => {
                      let { className: l, aspectRatio: n } =
                          $[
                              e.type === v.R.VARIANTS_GROUP &&
                              null != e.variants &&
                              e.variants.length > 0 &&
                              e.variants.every((e) => e.type === v.R.PROFILE_EFFECT)
                                  ? v.R.PROFILE_EFFECT
                                  : e.type
                          ] ?? Y;
                      return (0, a.jsx)(
                          m.R9,
                          {
                              newValue: { tilePosition: s },
                              children: (0, a.jsx)(U.A, {
                                  skuId: e.skuId,
                                  skipLimitedTimeCheck: !0,
                                  prioritizedCurrency: t ? H.Hi.FIAT : void 0,
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
let Z = (e) => {
        let { currentCategorySkuId: s, handleTransition: l } = e,
            t = (0, c.bG)([E.A], () => E.A.categories),
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
                            !W.MS.some((s) => {
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
                          children: (0, a.jsx)(_.D, {
                              variant: "heading-lg/semibold",
                              children: z.intl.string(z.t.EhRZ9o),
                          }),
                      }),
                      (0, a.jsx)(
                          R.A,
                          {
                              gap: "xl",
                              children: r.map((e, s) =>
                                  (0, a.jsx)(
                                      m.R9,
                                      {
                                          newValue: {
                                              categoryPosition: s,
                                              pageCategory: e.name,
                                              pageSection: "related_drops",
                                              tilePosition: s,
                                          },
                                          children: (0, a.jsx)("div", {
                                              className: K.EU,
                                              children: (0, a.jsx)(V.S, {
                                                  category: e,
                                                  badgeText: (0, S.HF)(e.unpublishedAt)
                                                      ? z.intl.string(z.t["h/uBCR"])
                                                      : void 0,
                                                  handleTransition: l,
                                                  pageType: W.G2.COLLECTION_INDEX,
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
    },
    q = [
        { tab: W.G2.AVATAR_DECORATIONS, label: () => z.intl.string(z.t.dRZYNE) },
        { tab: W.G2.PROFILE_EFFECTS, label: () => z.intl.string(z.t["1cNjtx"]) },
        { tab: W.G2.NAMEPLATES, label: () => z.intl.string(z.t.V68Fqz) },
        { tab: W.G2.PROFILE_FRAMES, label: () => z.intl.string(z.t.ecTJkR) },
        { tab: W.G2.BUNDLES, label: () => z.intl.string(z.t.FYFpps) },
    ],
    Q = () => {
        let e = (0, i.W6)();
        return (0, a.jsxs)("div", {
            className: K.nb,
            children: [
                (0, a.jsx)(_.D, { variant: "heading-md/semibold", children: z.intl.string(z.t.Yr70c4) }),
                (0, a.jsx)("div", {
                    className: K.J2,
                    children: q.map((s) => {
                        let { tab: l, label: n } = s;
                        return (0, a.jsx)(
                            k.$,
                            {
                                variant: "secondary",
                                text: n(),
                                onClick: () => e.push(X.BVt.COLLECTIBLES_SHOP_WITH_TAB(l)),
                            },
                            l,
                        );
                    }),
                }),
            ],
        });
    };
function ee(e) {
    let { collectionId: s } = e,
        l = (0, i.W6)(),
        t = (0, m.uM)(),
        d = (0, c.bG)([E.A], () => E.A.getCategory(s)?.name),
        o = n.useMemo(
            () => [
                { id: "shop_all", label: z.intl.string(z.t.xFcotU) },
                { id: "collection", label: d ?? "" },
            ],
            [d],
        ),
        u = n.useCallback(
            (e) => {
                "shop_all" === e.id &&
                    (f.default.track(X.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: t?.sessionId,
                        sku_id: s,
                        page_type: W.G2.COLLECTION_INDEX,
                        page_category: d,
                        cta_name: "collection breadcrumb shop all",
                    }),
                    l.push(X.BVt.COLLECTIBLES_SHOP_WITH_TAB(W.G2.CATALOG)));
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
    return (0, a.jsx)(O.A, {
        className: K.C2,
        separatorClassName: K.Lw,
        breadcrumbs: o,
        activeId: "collection",
        onBreadcrumbClick: u,
        renderCustomBreadcrumb: h,
    });
}
function es() {
    return (0, a.jsxs)("div", {
        className: K.kL,
        children: [
            (0, a.jsx)(w.A, { isLoading: !0, hideButton: !0, hideCards: !0, tab: W.G2.COLLECTION_INDEX }),
            (0, a.jsx)("div", {
                className: K.hd,
                children: (0, a.jsx)("div", {
                    className: K.fr,
                    children: Array.from({ length: 8 }, (e, s) => (0, a.jsx)(M.A, {}, s)),
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
let el = function (e) {
    let { collectionId: s } = e,
        l = (0, i.W6)(),
        t = (0, c.bG)([E.A], () => E.A.getCategory(s)),
        r = n.useMemo(() => t?.products.some((e) => e.type === v.R.PROFILE_FRAME) ?? !1, [t]),
        d = n.useCallback(
            (e) => {
                let { categorySkuId: s } = e;
                null != s && l.push(X.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(s));
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
                          type: T.g.HERO,
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
    return (0, a.jsx)(y.iM, {
        tab: W.G2.COLLECTION_INDEX,
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
                                          children: (0, a.jsx)(ee, { collectionId: s }),
                                      }),
                                      (0, a.jsx)(w.A, {
                                          heroBlock: o,
                                          isLoading: !1,
                                          tab: W.G2.COLLECTION_INDEX,
                                          badge: r ? (0, a.jsx)(D.A, { location: "CollectionIndexPage" }) : void 0,
                                          hideButton: !0,
                                          hideCards: !0,
                                      }),
                                  ],
                              }),
                              (0, a.jsx)(J, { category: t }),
                              (0, a.jsx)(Z, { currentCategorySkuId: t.skuId, handleTransition: d }, t.skuId),
                          ],
                      })
                    : (0, a.jsxs)("div", {
                          className: K.AW,
                          children: [
                              (0, a.jsx)("div", { className: K.zn, children: (0, a.jsx)(ee, { collectionId: s }) }),
                              (0, a.jsx)("div", { className: K.$T, children: (0, a.jsx)(F.A, { category: t }) }),
                              (0, a.jsx)(J, { category: t }),
                              (0, a.jsx)(Z, { currentCategorySkuId: t.skuId, handleTransition: d }, t.skuId),
                          ],
                      }),
                (0, a.jsx)(Q, {}),
            ],
        }),
    });
};
var ea = l(146919),
    en = l(647685);
let et = function (e) {
    let { collectionId: s } = e,
        l = n.useRef(null),
        t = n.useRef(null);
    (0, I.P)(C.a), (0, L.g)();
    let v = (0, ea.yB)("CollectiblesShopIndexPage");
    (0, ea.gB)();
    let { selectedTab: T, transitionToTab: O, transitionState: _ } = (0, N.o)(W.G2.COLLECTION_INDEX);
    (0, g.pE)(), (0, b.Ay)({ stalePurchasesOK: !0 });
    let k = (0, h.A)((0, d.A)()),
        R = (0, j.a)("CollectiblesShopIndexPage"),
        B = (0, c.bG)([E.A], () => (null != s ? E.A.getCategory(s) : void 0)),
        f = (0, c.bG)([E.A], () => E.A.isFetchingCategories),
        y = (0, c.bG)([E.A], () => null != E.A.lastSuccessfulFetch),
        S = (0, c.bG)([E.A], () => E.A.error),
        { analyticsLocations: G } = (0, p.lC)(W.G2.COLLECTION_INDEX);
    (0, p.uS)(k, T, B?.name, _),
        n.useEffect(() => {
            t.current?.scrollTo({ top: 0 });
        }, [s]),
        n.useEffect(() => {
            (0, u.I)(X.BVt.COLLECTIBLES_SHOP);
        }, []);
    let P = !f && (y || null != S) && null == B;
    return null == s || !R || P
        ? (0, a.jsx)(i.rd, { to: X.BVt.COLLECTIBLES_SHOP })
        : B?.isOrbsExclusive === !0
          ? (0, a.jsx)(i.rd, { to: X.BVt.COLLECTIBLES_SHOP_WITH_TAB(W.G2.ORBS) })
          : null == B
            ? (0, a.jsxs)("div", {
                  className: r()(en.bx, { [ea.jP]: v }),
                  ref: l,
                  tabIndex: -1,
                  children: [
                      (0, a.jsx)(A.G, { handleTransition: O, selectedTab: T }),
                      (0, a.jsx)(o.Ip, { children: (0, a.jsx)(es, {}) }),
                  ],
              })
            : (0, a.jsx)(x.f5, {
                  value: G,
                  children: (0, a.jsx)(m.R9, {
                      newValue: { sessionId: k },
                      children: (0, a.jsxs)("div", {
                          className: r()(en.bx, { [ea.jP]: v }),
                          ref: l,
                          tabIndex: -1,
                          children: [
                              (0, a.jsx)(A.G, { handleTransition: O, selectedTab: T }),
                              (0, a.jsx)(o.Ip, { ref: t, children: (0, a.jsx)(el, { collectionId: s }) }),
                          ],
                      }),
                  }),
              });
};
