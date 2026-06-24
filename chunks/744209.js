s.r(l), s.d(l, { default: () => el });
var n = s(627968),
    r = s(64700),
    t = s(503698),
    i = s.n(t),
    a = s(873263),
    d = s(835245),
    o = s(17928),
    c = s(364522),
    u = s(944791),
    h = s(444927),
    x = s(688810),
    g = s(475073),
    I = s(611924),
    C = s(561794),
    j = s(440938),
    L = s(590180),
    m = s(50920),
    p = s(790297),
    b = s(841702),
    A = s(621653),
    E = s(983545),
    v = s(956123);
s(321073);
var N = s(575593),
    O = s(651162),
    T = s(40474),
    _ = s(534514),
    f = s(449543),
    k = s(287809),
    y = s(174459),
    B = s(161918),
    S = s(993408),
    G = s(940980),
    P = s(511265),
    R = s(206077),
    D = s(828515),
    U = s(110629),
    H = s(828614),
    M = s(561769),
    F = s(484469),
    V = s(196231),
    X = s(337183),
    w = s(758836),
    W = s(652215),
    K = s(375708),
    $ = s(339202);
function z(e) {
    let { category: l } = e,
        s = (0, o.bG)([k.default], () => k.default.getCurrentUser()),
        r = (0, R.X)(l.products),
        t = (0, P.p)()(r),
        i = (0, G.W)("CollectionIndexPage");
    return null == s || 0 === t.length
        ? null
        : (0, n.jsx)("div", {
              className: $.hd,
              children: (0, n.jsx)("div", {
                  className: $.fr,
                  children: t.map((e, l) =>
                      (0, n.jsx)(
                          j.R9,
                          {
                              newValue: { tilePosition: l },
                              children: (0, n.jsx)(H.A, {
                                  skuId: e.skuId,
                                  skipLimitedTimeCheck: !0,
                                  prioritizedCurrency: i ? M.Hi.FIAT : void 0,
                              }),
                          },
                          e.skuId,
                      ),
                  ),
              }),
          });
}
let Z = (e) => {
    let { currentCategorySkuId: l, handleTransition: s } = e,
        t = (0, o.bG)([L.A], () => L.A.categories),
        i = r.useMemo(() => {
            let e = [...t.values()],
                s = e.findIndex((e) => e.skuId === l);
            if (-1 === s) return [];
            let n = [];
            for (let r = 1; r <= e.length && n.length < 4; r++) {
                let t = e[(s + r) % e.length];
                (function (e) {
                    return (
                        e.skuId !== l &&
                        null != e.featuredBlockUrl &&
                        !e.isOrbsExclusive &&
                        e.products.length > 0 &&
                        (null == e.unpublishedAt || e.unpublishedAt > new Date()) &&
                        !w.MS.some((l) => {
                            let { categorySkuId: s } = l;
                            return s === e.skuId;
                        })
                    );
                })(t) && n.push(t);
            }
            return n;
        }, [t, l]);
    return 0 === i.length
        ? null
        : (0, n.jsxs)("div", {
              className: $.t3,
              children: [
                  (0, n.jsx)("div", {
                      className: $.bb,
                      children: (0, n.jsx)(_.D, {
                          variant: "heading-lg/semibold",
                          children: K.intl.string(K.t.EhRZ9o),
                      }),
                  }),
                  (0, n.jsx)(
                      f.A,
                      {
                          gap: "xl",
                          children: i.map((e, l) =>
                              (0, n.jsx)(
                                  j.R9,
                                  {
                                      newValue: {
                                          categoryPosition: l,
                                          pageCategory: e.name,
                                          pageSection: "related_drops",
                                          tilePosition: l,
                                      },
                                      children: (0, n.jsx)("div", {
                                          className: $.EU,
                                          children: (0, n.jsx)(V.S, {
                                              category: e,
                                              badgeText: (0, S.HF)(e.unpublishedAt)
                                                  ? K.intl.string(K.t["h/uBCR"])
                                                  : void 0,
                                              handleTransition: s,
                                              pageType: w.G2.COLLECTION_INDEX,
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
};
function q(e) {
    let { collectionId: l } = e,
        s = (0, a.W6)(),
        t = (0, j.uM)(),
        i = (0, o.bG)([L.A], () => L.A.getCategory(l)?.name),
        d = r.useMemo(
            () => [
                { id: "shop_all", label: K.intl.string(K.t.xFcotU) },
                { id: "collection", label: i ?? "" },
            ],
            [i],
        ),
        c = r.useCallback(
            (e) => {
                "shop_all" === e.id &&
                    (y.default.track(W.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: t?.sessionId,
                        sku_id: l,
                        page_type: w.G2.COLLECTION_INDEX,
                        page_category: i,
                        cta_name: "collection breadcrumb shop all",
                    }),
                    s.push(W.BVt.COLLECTIBLES_SHOP_WITH_TAB(w.G2.CATALOG)));
            },
            [s, t?.sessionId, l, i],
        );
    return (0, n.jsx)("div", {
        className: $.tK,
        children: (0, n.jsx)(T.A, { breadcrumbs: d, activeId: "collection", onBreadcrumbClick: c }),
    });
}
function J() {
    return (0, n.jsxs)("div", {
        className: $.kL,
        children: [
            (0, n.jsx)(X.A, { isLoading: !0, hideButton: !0, hideCards: !0, tab: w.G2.COLLECTION_INDEX }),
            (0, n.jsx)("div", {
                className: $.hd,
                children: (0, n.jsx)("div", {
                    className: $.fr,
                    children: Array.from({ length: 8 }, (e, l) => (0, n.jsx)(F.A, {}, l)),
                }),
            }),
            (0, n.jsxs)("div", {
                className: $.t3,
                children: [
                    (0, n.jsx)("div", { className: $.bb, children: (0, n.jsx)("div", { className: $.M$ }) }),
                    (0, n.jsxs)("div", {
                        className: $.A9,
                        children: [(0, n.jsx)("div", { className: $.nl }), (0, n.jsx)("div", { className: $.nl })],
                    }),
                ],
            }),
        ],
    });
}
let Q = function (e) {
    let { collectionId: l } = e,
        s = (0, a.W6)(),
        t = (0, o.bG)([L.A], () => L.A.getCategory(l)),
        i = r.useMemo(() => t?.products.some((e) => e.type === N.R.PROFILE_FRAME) ?? !1, [t]),
        d = r.useCallback(
            (e) => {
                let { categorySkuId: l } = e;
                null != l && s.push(W.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(l));
            },
            [s],
        ),
        c = r.useMemo(
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
    return (0, n.jsx)(B.iM, {
        tab: w.G2.COLLECTION_INDEX,
        children: (0, n.jsx)("div", {
            className: $.kL,
            children:
                u && null != c
                    ? (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)(X.A, {
                                  heroBlock: c,
                                  isLoading: !1,
                                  tab: w.G2.COLLECTION_INDEX,
                                  badge: i ? (0, n.jsx)(U.A, { location: "CollectionIndexPage" }) : void 0,
                                  hideButton: !0,
                                  hideCards: !0,
                              }),
                              (0, n.jsx)(z, { category: t }),
                              (0, n.jsx)(Z, { currentCategorySkuId: t.skuId, handleTransition: d }, t.skuId),
                          ],
                      })
                    : (0, n.jsxs)("div", {
                          className: $.AW,
                          children: [
                              (0, n.jsx)("div", { className: $.$T, children: (0, n.jsx)(D.A, { category: t }) }),
                              (0, n.jsx)(z, { category: t }),
                              (0, n.jsx)(Z, { currentCategorySkuId: t.skuId, handleTransition: d }, t.skuId),
                          ],
                      }),
        }),
    });
};
var Y = s(146919),
    ee = s(647685);
let el = function (e) {
    let { collectionId: l } = e,
        s = r.useRef(null),
        t = r.useRef(null);
    (0, I.P)(g.a), (0, A.g)();
    let N = (0, Y.yB)("CollectiblesShopIndexPage");
    (0, Y.gB)();
    let { selectedTab: O, transitionToTab: T, transitionState: _ } = (0, E.o)(w.G2.COLLECTION_INDEX);
    (0, C.pE)(), (0, b.Ay)({ stalePurchasesOK: !0 });
    let f = (0, h.A)((0, d.A)()),
        k = (0, m.a)("CollectiblesShopIndexPage"),
        y = (0, o.bG)([L.A], () => (null != l ? L.A.getCategory(l) : void 0)),
        B = (0, o.bG)([L.A], () => L.A.isFetchingCategories),
        S = (0, o.bG)([L.A], () => null != L.A.lastSuccessfulFetch),
        G = (0, o.bG)([L.A], () => L.A.error),
        { analyticsLocations: P } = (0, p.lC)(w.G2.COLLECTION_INDEX);
    (0, p.uS)(f, O, y?.name, _),
        r.useEffect(() => {
            t.current?.scrollTo({ top: 0 });
        }, [l]),
        r.useEffect(() => {
            (0, u.I)(W.BVt.COLLECTIBLES_SHOP);
        }, []);
    let R = !B && (S || null != G) && null == y;
    return null == l || !k || R
        ? (0, n.jsx)(a.rd, { to: W.BVt.COLLECTIBLES_SHOP })
        : y?.isOrbsExclusive === !0
          ? (0, n.jsx)(a.rd, { to: W.BVt.COLLECTIBLES_SHOP_WITH_TAB(w.G2.ORBS) })
          : null == y
            ? (0, n.jsxs)("div", {
                  className: i()(ee.bx, { [Y.jP]: N }),
                  ref: s,
                  tabIndex: -1,
                  children: [
                      (0, n.jsx)(v.G, { handleTransition: T, selectedTab: O }),
                      (0, n.jsx)(c.Ip, { children: (0, n.jsx)(J, {}) }),
                  ],
              })
            : (0, n.jsx)(x.f5, {
                  value: P,
                  children: (0, n.jsx)(j.R9, {
                      newValue: { sessionId: f },
                      children: (0, n.jsxs)("div", {
                          className: i()(ee.bx, { [Y.jP]: N }),
                          ref: s,
                          tabIndex: -1,
                          children: [
                              (0, n.jsx)(v.G, { handleTransition: T, selectedTab: O }),
                              (0, n.jsx)(q, { collectionId: l }),
                              (0, n.jsx)(c.Ip, { ref: t, children: (0, n.jsx)(Q, { collectionId: l }) }),
                          ],
                      }),
                  }),
              });
};
