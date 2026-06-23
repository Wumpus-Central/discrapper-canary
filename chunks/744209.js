s.r(l), s.d(l, { default: () => el });
var n = s(627968),
    r = s(64700),
    a = s(503698),
    i = s.n(a),
    t = s(873263),
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
    k = s(449543),
    y = s(287809),
    B = s(174459),
    f = s(161918),
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
let z = (e) => {
        let { category: l } = e,
            s = (0, o.bG)([y.default], () => y.default.getCurrentUser()),
            r = (0, R.X)(l.products),
            a = (0, P.p)()(r),
            i = (0, G.W)("CollectionIndexPage");
        return null == s || 0 === a.length
            ? null
            : (0, n.jsx)("div", {
                  className: $.hd,
                  children: (0, n.jsx)("div", {
                      className: $.fr,
                      children: a.map((e, l) =>
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
    },
    Z = (e) => {
        let { currentCategorySkuId: l, handleTransition: s } = e,
            a = (0, o.bG)([L.A], () => L.A.categories),
            i = r.useMemo(() => {
                let e = [...a.values()],
                    s = e.findIndex((e) => e.skuId === l);
                if (-1 === s) return [];
                let n = (e) =>
                        e.skuId !== l &&
                        null != e.featuredBlockUrl &&
                        !e.isOrbsExclusive &&
                        e.products.length > 0 &&
                        (null == e.unpublishedAt || e.unpublishedAt > new Date()) &&
                        !w.MS.some((l) => {
                            let { categorySkuId: s } = l;
                            return s === e.skuId;
                        }),
                    r = [];
                for (let l = 1; l <= e.length && r.length < 4; l++) {
                    let a = e[(s + l) % e.length];
                    n(a) && r.push(a);
                }
                return r;
            }, [a, l]);
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
                          k.A,
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
    },
    q = (e) => {
        let { collectionId: l } = e,
            s = (0, t.W6)(),
            a = (0, j.uM)(),
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
                        (B.default.track(W.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                            collectibles_shop_session_id: a?.sessionId,
                            sku_id: l,
                            page_type: w.G2.COLLECTION_INDEX,
                            page_category: i,
                            cta_name: "collection breadcrumb shop all",
                        }),
                        s.push(W.BVt.COLLECTIBLES_SHOP_WITH_TAB(w.G2.CATALOG)));
                },
                [s, a?.sessionId, l, i],
            );
        return (0, n.jsx)("div", {
            className: $.tK,
            children: (0, n.jsx)(T.A, { breadcrumbs: d, activeId: "collection", onBreadcrumbClick: c }),
        });
    },
    J = () =>
        (0, n.jsxs)("div", {
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
        }),
    Q = (e) => {
        let { collectionId: l } = e,
            s = (0, t.W6)(),
            a = (0, o.bG)([L.A], () => L.A.getCategory(l)),
            i = r.useMemo(() => a?.products.some((e) => e.type === N.R.PROFILE_FRAME) ?? !1, [a]),
            d = r.useCallback(
                (e) => {
                    let { categorySkuId: l } = e;
                    null != l && s.push(W.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(l));
                },
                [s],
            ),
            c = r.useMemo(
                () =>
                    null == a
                        ? null
                        : {
                              rankedSkuIds: a.heroRanking ?? [],
                              name: a.name,
                              unpublishedAt: a.unpublishedAt,
                              categorySkuId: a.skuId,
                              summary: a.summary,
                              type: O.g.HERO,
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
        let u = null != a.heroBannerUrl || null != a.heroRiveUrl;
        return (0, n.jsx)(f.iM, {
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
                                  (0, n.jsx)(z, { category: a }),
                                  (0, n.jsx)(Z, { currentCategorySkuId: a.skuId, handleTransition: d }, a.skuId),
                              ],
                          })
                        : (0, n.jsxs)("div", {
                              className: $.AW,
                              children: [
                                  (0, n.jsx)("div", { className: $.$T, children: (0, n.jsx)(D.A, { category: a }) }),
                                  (0, n.jsx)(z, { category: a }),
                                  (0, n.jsx)(Z, { currentCategorySkuId: a.skuId, handleTransition: d }, a.skuId),
                              ],
                          }),
            }),
        });
    };
var Y = s(146919),
    ee = s(647685);
let el = (e) => {
    let { collectionId: l } = e,
        s = r.useRef(null),
        a = r.useRef(null);
    (0, I.P)(g.a), (0, A.g)();
    let N = (0, Y.yB)("CollectiblesShopIndexPage");
    (0, Y.gB)();
    let { selectedTab: O, transitionToTab: T, transitionState: _ } = (0, E.o)(w.G2.COLLECTION_INDEX);
    (0, C.pE)(), (0, b.Ay)({ stalePurchasesOK: !0 });
    let k = (0, h.A)((0, d.A)()),
        y = (0, m.a)("CollectiblesShopIndexPage"),
        B = (0, o.bG)([L.A], () => (null != l ? L.A.getCategory(l) : void 0)),
        f = (0, o.bG)([L.A], () => L.A.isFetchingCategories),
        S = (0, o.bG)([L.A], () => null != L.A.lastSuccessfulFetch),
        G = (0, o.bG)([L.A], () => L.A.error),
        { analyticsLocations: P } = (0, p.lC)(w.G2.COLLECTION_INDEX);
    (0, p.uS)(k, O, B?.name, _),
        r.useEffect(() => {
            a.current?.scrollTo({ top: 0 });
        }, [l]),
        r.useEffect(() => {
            (0, u.I)(W.BVt.COLLECTIBLES_SHOP);
        }, []);
    let R = !f && (S || null != G) && null == B;
    return null == l || !y || R
        ? (0, n.jsx)(t.rd, { to: W.BVt.COLLECTIBLES_SHOP })
        : B?.isOrbsExclusive === !0
          ? (0, n.jsx)(t.rd, { to: W.BVt.COLLECTIBLES_SHOP_WITH_TAB(w.G2.ORBS) })
          : null == B
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
                      newValue: { sessionId: k },
                      children: (0, n.jsxs)("div", {
                          className: i()(ee.bx, { [Y.jP]: N }),
                          ref: s,
                          tabIndex: -1,
                          children: [
                              (0, n.jsx)(v.G, { handleTransition: T, selectedTab: O }),
                              (0, n.jsx)(q, { collectionId: l }),
                              (0, n.jsx)(c.Ip, { ref: a, children: (0, n.jsx)(Q, { collectionId: l }) }),
                          ],
                      }),
                  }),
              });
};
