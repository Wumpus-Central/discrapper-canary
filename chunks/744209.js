s.r(l), s.d(l, { default: () => ei });
var n = s(627968),
    a = s(64700),
    t = s(503698),
    r = s.n(t),
    i = s(873263),
    d = s(132500),
    c = s(17928),
    o = s(364522),
    u = s(944791),
    h = s(444927),
    x = s(688810),
    I = s(475073),
    C = s(611924),
    g = s(561794),
    E = s(440938),
    m = s(590180),
    j = s(50920),
    p = s(790297),
    L = s(841702),
    b = s(621653),
    N = s(983545),
    A = s(956123);
s(321073);
var v = s(575593),
    T = s(651162),
    O = s(40474),
    _ = s(297264),
    k = s(821609),
    R = s(449543),
    f = s(152858),
    B = s(287809),
    S = s(174459),
    y = s(161918),
    P = s(993408),
    F = s(940980),
    G = s(511265),
    D = s(13875),
    U = s(828515),
    M = s(110629),
    H = s(828614),
    V = s(561769),
    w = s(484469),
    W = s(196231),
    X = s(337183),
    z = s(758836),
    K = s(652215),
    Y = s(375708),
    $ = s(339202);
let J = { aspectRatio: "1 / 1" },
    Z = {
        [v.R.PROFILE_EFFECT]: { className: $.I5, aspectRatio: "1 / 2" },
        [v.R.BUNDLE]: { className: $.kP, aspectRatio: "2 / 1" },
    };
function q(e) {
    let { category: l } = e,
        s = (0, c.bG)([B.default], () => B.default.getCurrentUser()),
        a = (0, G.p)()(l.products),
        t = (0, F.W)("CollectionIndexPage");
    return null == s || 0 === a.length
        ? null
        : (0, n.jsx)("div", {
              className: $.hd,
              children: (0, n.jsx)("div", {
                  className: $.fr,
                  children: a.map((e, l) => {
                      let { className: s, aspectRatio: a } =
                          Z[
                              e.type === v.R.VARIANTS_GROUP &&
                              null != e.variants &&
                              e.variants.length > 0 &&
                              e.variants.every((e) => e.type === v.R.PROFILE_EFFECT)
                                  ? v.R.PROFILE_EFFECT
                                  : e.type
                          ] ?? J;
                      return (0, n.jsx)(
                          E.R9,
                          {
                              newValue: { tilePosition: l },
                              children: (0, n.jsx)(H.A, {
                                  skuId: e.skuId,
                                  skipLimitedTimeCheck: !0,
                                  prioritizedCurrency: t ? V.Hi.FIAT : void 0,
                                  cardClassName: s,
                                  aspectRatio: a,
                              }),
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
        r = a.useMemo(() => {
            let e = [...t.values()],
                s = e.findIndex((e) => e.skuId === l);
            if (-1 === s) return [];
            let n = [];
            for (let a = 1; a <= e.length && n.length < 8; a++) {
                let t = e[(s + a) % e.length];
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
                })(t) && n.push(t);
            }
            return n;
        }, [t, l]);
    return 0 === r.length
        ? null
        : (0, n.jsxs)("div", {
              className: $.t3,
              children: [
                  (0, n.jsx)("div", {
                      className: $.bb,
                      children: (0, n.jsx)(_.D, {
                          variant: "heading-lg/semibold",
                          children: Y.intl.string(Y.t.EhRZ9o),
                      }),
                  }),
                  (0, n.jsx)(
                      R.A,
                      {
                          gap: "xl",
                          scrollBehavior: f.Uf.ITEM,
                          children: r.map((e, l) =>
                              (0, n.jsx)(
                                  E.R9,
                                  {
                                      newValue: {
                                          categoryPosition: l,
                                          pageCategory: e.name,
                                          pageSection: "related_drops",
                                          tilePosition: l,
                                      },
                                      children: (0, n.jsx)("div", {
                                          className: $.EU,
                                          children: (0, n.jsx)(W.S, {
                                              category: e,
                                              badgeText: (0, P.HF)(e.unpublishedAt)
                                                  ? Y.intl.string(Y.t["h/uBCR"])
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
    { tab: z.G2.AVATAR_DECORATIONS, label: () => Y.intl.string(Y.t.dRZYNE) },
    { tab: z.G2.PROFILE_EFFECTS, label: () => Y.intl.string(Y.t["1cNjtx"]) },
    { tab: z.G2.NAMEPLATES, label: () => Y.intl.string(Y.t.V68Fqz) },
    { tab: z.G2.PROFILE_FRAMES, label: () => Y.intl.string(Y.t.ecTJkR) },
    { tab: z.G2.BUNDLES, label: () => Y.intl.string(Y.t.FYFpps) },
];
function el() {
    let e = (0, i.W6)(),
        l = (0, D.sk)("CollectionPageFooter"),
        s = a.useMemo(
            () =>
                ee.filter((e) => {
                    let { tab: s } = e;
                    return l || s !== z.G2.PROFILE_FRAMES;
                }),
            [l],
        );
    return (0, n.jsxs)("div", {
        className: $.nb,
        children: [
            (0, n.jsx)(_.D, { variant: "heading-md/semibold", children: Y.intl.string(Y.t.Yr70c4) }),
            (0, n.jsx)("div", {
                className: $.J2,
                children: s.map((l) => {
                    let { tab: s, label: a } = l;
                    return (0, n.jsx)(
                        k.$,
                        { variant: "secondary", text: a(), onClick: () => e.push(K.BVt.COLLECTIBLES_SHOP_WITH_TAB(s)) },
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
        t = (0, E.uM)(),
        d = (0, c.bG)([m.A], () => m.A.getCategory(l)?.name),
        o = a.useMemo(
            () => [
                { id: "shop_all", label: Y.intl.string(Y.t.xFcotU) },
                { id: "collection", label: d ?? "" },
            ],
            [d],
        ),
        u = a.useCallback(
            (e) => {
                "shop_all" === e.id &&
                    (S.default.track(K.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: t?.sessionId,
                        sku_id: l,
                        page_type: z.G2.COLLECTION_INDEX,
                        page_category: d,
                        cta_name: "collection breadcrumb shop all",
                    }),
                    s.push(K.BVt.COLLECTIBLES_SHOP_WITH_TAB(z.G2.CATALOG)));
            },
            [s, t?.sessionId, l, d],
        ),
        h = a.useCallback(
            (e, l) =>
                (0, n.jsxs)("span", {
                    className: r()($.u, { [$.kG]: l }),
                    children: [e.label, !l && (0, n.jsx)("span", { className: $.Tl, children: "/" })],
                }),
            [],
        );
    return (0, n.jsx)(O.A, {
        className: $.C2,
        separatorClassName: $.Lw,
        breadcrumbs: o,
        activeId: "collection",
        onBreadcrumbClick: u,
        renderCustomBreadcrumb: h,
    });
}
function en() {
    return (0, n.jsxs)("div", {
        className: $.kL,
        children: [
            (0, n.jsx)(X.A, { isLoading: !0, hideButton: !0, hideCards: !0, tab: z.G2.COLLECTION_INDEX }),
            (0, n.jsx)("div", {
                className: $.hd,
                children: (0, n.jsx)("div", {
                    className: $.fr,
                    children: Array.from({ length: 8 }, (e, l) => (0, n.jsx)(w.A, {}, l)),
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
let ea = function (e) {
    let { collectionId: l } = e,
        s = (0, i.W6)(),
        t = (0, c.bG)([m.A], () => m.A.getCategory(l)),
        r = a.useMemo(() => t?.products.some((e) => e.type === v.R.PROFILE_FRAME) ?? !1, [t]),
        d = a.useCallback(
            (e) => {
                let { categorySkuId: l } = e;
                null != l && s.push(K.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(l));
            },
            [s],
        ),
        o = a.useMemo(
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
    return (0, n.jsx)(y.iM, {
        tab: z.G2.COLLECTION_INDEX,
        children: (0, n.jsxs)("div", {
            className: $.kL,
            children: [
                u && null != o
                    ? (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsxs)("div", {
                                  className: $.rz,
                                  children: [
                                      (0, n.jsx)("div", {
                                          className: $.zn,
                                          children: (0, n.jsx)(es, { collectionId: l }),
                                      }),
                                      (0, n.jsx)(X.A, {
                                          heroBlock: o,
                                          isLoading: !1,
                                          tab: z.G2.COLLECTION_INDEX,
                                          badge: r ? (0, n.jsx)(M.A, { location: "CollectionIndexPage" }) : void 0,
                                          hideButton: !0,
                                          hideCards: !0,
                                      }),
                                  ],
                              }),
                              (0, n.jsx)(q, { category: t }),
                              (0, n.jsx)(Q, { currentCategorySkuId: t.skuId, handleTransition: d }, t.skuId),
                          ],
                      })
                    : (0, n.jsxs)("div", {
                          className: $.AW,
                          children: [
                              (0, n.jsx)("div", { className: $.zn, children: (0, n.jsx)(es, { collectionId: l }) }),
                              (0, n.jsx)("div", { className: $.$T, children: (0, n.jsx)(U.A, { category: t }) }),
                              (0, n.jsx)(q, { category: t }),
                              (0, n.jsx)(Q, { currentCategorySkuId: t.skuId, handleTransition: d }, t.skuId),
                          ],
                      }),
                (0, n.jsx)(el, {}),
            ],
        }),
    });
};
var et = s(146919),
    er = s(647685);
let ei = function (e) {
    let { collectionId: l } = e,
        s = a.useRef(null),
        t = a.useRef(null);
    (0, C.P)(I.a), (0, b.g)();
    let v = (0, et.yB)("CollectiblesShopIndexPage");
    (0, et.gB)();
    let { selectedTab: T, transitionToTab: O, transitionState: _ } = (0, N.o)(z.G2.COLLECTION_INDEX);
    (0, g.pE)(), (0, L.Ay)({ stalePurchasesOK: !0 });
    let k = (0, h.A)((0, d.A)()),
        R = (0, j.a)("CollectiblesShopIndexPage"),
        f = (0, c.bG)([m.A], () => (null != l ? m.A.getCategory(l) : void 0)),
        B = (0, c.bG)([m.A], () => m.A.isFetchingCategories),
        S = (0, c.bG)([m.A], () => null != m.A.lastSuccessfulFetch),
        y = (0, c.bG)([m.A], () => m.A.error),
        { analyticsLocations: P } = (0, p.lC)(z.G2.COLLECTION_INDEX);
    (0, p.uS)(k, T, f?.name, _),
        a.useEffect(() => {
            t.current?.scrollTo({ top: 0 });
        }, [l]),
        a.useEffect(() => {
            (0, u.I)(K.BVt.COLLECTIBLES_SHOP);
        }, []);
    let F = !B && (S || null != y) && null == f;
    return null == l || !R || F
        ? (0, n.jsx)(i.rd, { to: K.BVt.COLLECTIBLES_SHOP })
        : f?.isOrbsExclusive === !0
          ? (0, n.jsx)(i.rd, { to: K.BVt.COLLECTIBLES_SHOP_WITH_TAB(z.G2.ORBS) })
          : null == f
            ? (0, n.jsxs)("div", {
                  className: r()(er.bx, { [et.jP]: v }),
                  ref: s,
                  tabIndex: -1,
                  children: [
                      (0, n.jsx)(A.G, { handleTransition: O, selectedTab: T }),
                      (0, n.jsx)(o.Ip, { children: (0, n.jsx)(en, {}) }),
                  ],
              })
            : (0, n.jsx)(x.f5, {
                  value: P,
                  children: (0, n.jsx)(E.R9, {
                      newValue: { sessionId: k },
                      children: (0, n.jsxs)("div", {
                          className: r()(er.bx, { [et.jP]: v }),
                          ref: s,
                          tabIndex: -1,
                          children: [
                              (0, n.jsx)(A.G, { handleTransition: O, selectedTab: T }),
                              (0, n.jsx)(o.Ip, { ref: t, children: (0, n.jsx)(ea, { collectionId: l }) }),
                          ],
                      }),
                  }),
              });
};
