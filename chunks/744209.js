s.r(l), s.d(l, { default: () => en });
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
    C = s(561794),
    E = s(440938),
    m = s(590180),
    j = s(50920),
    b = s(790297),
    L = s(841702),
    p = s(983545),
    N = s(956123);
s(321073);
var A = s(575593),
    v = s(651162),
    O = s(40474),
    T = s(297264),
    _ = s(821609),
    R = s(449543),
    f = s(152858),
    k = s(287809),
    B = s(174459),
    S = s(161918),
    y = s(993408),
    G = s(511265),
    P = s(13875),
    F = s(828515),
    D = s(110629),
    U = s(828614),
    M = s(484469),
    H = s(196231),
    V = s(337183),
    w = s(758836),
    W = s(652215),
    X = s(375708),
    z = s(186954);
let K = { aspectRatio: "1 / 1" },
    Y = {
        [A.R.PROFILE_EFFECT]: { className: z.I5, aspectRatio: "1 / 2" },
        [A.R.BUNDLE]: { className: z.kP, aspectRatio: "2 / 1" },
    };
function $(e) {
    let { category: l } = e,
        s = (0, c.bG)([k.default], () => k.default.getCurrentUser()),
        n = (0, G.p)()(l.products);
    return null == s || 0 === n.length
        ? null
        : (0, a.jsx)("div", {
              className: z.hd,
              children: (0, a.jsx)("div", {
                  className: z.fr,
                  children: n.map((e, l) => {
                      let { className: s, aspectRatio: n } =
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
                              newValue: { tilePosition: l },
                              children: (0, a.jsx)(U.A, { skuId: e.skuId, cardClassName: s, aspectRatio: n }),
                          },
                          e.skuId,
                      );
                  }),
              }),
          });
}
function J(e) {
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
                        !w.MS.some((l) => {
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
              className: z.t3,
              children: [
                  (0, a.jsx)("div", {
                      className: z.bb,
                      children: (0, a.jsx)(T.D, {
                          variant: "heading-lg/semibold",
                          children: X.intl.string(X.t.EhRZ9o),
                      }),
                  }),
                  (0, a.jsx)(
                      R.A,
                      {
                          gap: "xl",
                          scrollBehavior: f.Uf.ITEM,
                          children: r.map((e, l) =>
                              (0, a.jsx)(
                                  E.R9,
                                  {
                                      newValue: {
                                          categoryPosition: l,
                                          pageCategory: e.name,
                                          pageSection: "related_drops",
                                          tilePosition: l,
                                      },
                                      children: (0, a.jsx)("div", {
                                          className: z.EU,
                                          children: (0, a.jsx)(H.S, {
                                              category: e,
                                              badgeText: (0, y.HF)(e.unpublishedAt)
                                                  ? X.intl.string(X.t["h/uBCR"])
                                                  : void 0,
                                              handleTransition: s,
                                              pageType: w.G2.COLLECTION_INDEX,
                                              className: z.vK,
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
let Z = [
    { tab: w.G2.AVATAR_DECORATIONS, label: () => X.intl.string(X.t.dRZYNE) },
    { tab: w.G2.PROFILE_EFFECTS, label: () => X.intl.string(X.t["1cNjtx"]) },
    { tab: w.G2.NAMEPLATES, label: () => X.intl.string(X.t.V68Fqz) },
    { tab: w.G2.PROFILE_FRAMES, label: () => X.intl.string(X.t.ecTJkR) },
    { tab: w.G2.BUNDLES, label: () => X.intl.string(X.t.FYFpps) },
];
function q() {
    let e = (0, i.W6)(),
        l = (0, P.sk)("CollectionPageFooter"),
        s = n.useMemo(
            () =>
                Z.filter((e) => {
                    let { tab: s } = e;
                    return l || s !== w.G2.PROFILE_FRAMES;
                }),
            [l],
        );
    return (0, a.jsxs)("div", {
        className: z.nb,
        children: [
            (0, a.jsx)(T.D, { variant: "heading-md/semibold", children: X.intl.string(X.t.Yr70c4) }),
            (0, a.jsx)("div", {
                className: z.J2,
                children: s.map((l) => {
                    let { tab: s, label: n } = l;
                    return (0, a.jsx)(
                        _.$,
                        { variant: "secondary", text: n(), onClick: () => e.push(W.BVt.COLLECTIBLES_SHOP_WITH_TAB(s)) },
                        s,
                    );
                }),
            }),
        ],
    });
}
function Q(e) {
    let { collectionId: l } = e,
        s = (0, i.W6)(),
        t = (0, E.uM)(),
        d = (0, c.bG)([m.A], () => m.A.getCategory(l)?.name),
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
                        sku_id: l,
                        page_type: w.G2.COLLECTION_INDEX,
                        page_category: d,
                        cta_name: "collection breadcrumb shop all",
                    }),
                    s.push(W.BVt.COLLECTIBLES_SHOP_WITH_TAB(w.G2.CATALOG)));
            },
            [s, t?.sessionId, l, d],
        ),
        h = n.useCallback(
            (e, l) =>
                (0, a.jsxs)("span", {
                    className: r()(z.u, { [z.kG]: l }),
                    children: [e.label, !l && (0, a.jsx)("span", { className: z.Tl, children: "/" })],
                }),
            [],
        );
    return (0, a.jsx)(O.A, {
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
                    children: Array.from({ length: 8 }, (e, l) => (0, a.jsx)(M.A, {}, l)),
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
let el = function (e) {
    let { collectionId: l } = e,
        s = (0, i.W6)(),
        t = (0, c.bG)([m.A], () => m.A.getCategory(l)),
        r = n.useMemo(() => t?.products.some((e) => e.type === A.R.PROFILE_FRAME) ?? !1, [t]),
        d = n.useCallback(
            (e) => {
                let { categorySkuId: l } = e;
                null != l && s.push(W.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(l));
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
                                          children: (0, a.jsx)(Q, { collectionId: l }),
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
                              (0, a.jsx)("div", { className: z.zn, children: (0, a.jsx)(Q, { collectionId: l }) }),
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
var es = s(146919),
    ea = s(195261);
let en = function (e) {
    let { collectionId: l } = e,
        s = n.useRef(null),
        t = n.useRef(null);
    (0, g.P)(I.a);
    let A = (0, es.yB)("CollectiblesShopIndexPage");
    (0, es.gB)();
    let { selectedTab: v, transitionToTab: O, transitionState: T } = (0, p.o)(w.G2.COLLECTION_INDEX);
    (0, C.pE)(), (0, L.Ay)({ stalePurchasesOK: !0 });
    let _ = (0, h.A)((0, d.A)()),
        R = (0, j.a)("CollectiblesShopIndexPage"),
        f = (0, c.bG)([m.A], () => (null != l ? m.A.getCategory(l) : void 0)),
        k = (0, c.bG)([m.A], () => m.A.isFetchingCategories),
        B = (0, c.bG)([m.A], () => null != m.A.lastSuccessfulFetch),
        S = (0, c.bG)([m.A], () => m.A.error),
        { analyticsLocations: y } = (0, b.lC)(w.G2.COLLECTION_INDEX);
    (0, b.uS)(_, v, f?.name, T),
        n.useEffect(() => {
            t.current?.scrollTo({ top: 0 });
        }, [l]),
        n.useEffect(() => {
            (0, u.I)(W.BVt.COLLECTIBLES_SHOP);
        }, []);
    let G = !k && (B || null != S) && null == f;
    return null == l || !R || G
        ? (0, a.jsx)(i.rd, { to: W.BVt.COLLECTIBLES_SHOP })
        : f?.isOrbsExclusive === !0
          ? (0, a.jsx)(i.rd, { to: W.BVt.COLLECTIBLES_SHOP_WITH_TAB(w.G2.ORBS) })
          : null == f
            ? (0, a.jsxs)("div", {
                  className: r()(ea.bx, { [es.jP]: A }),
                  ref: s,
                  tabIndex: -1,
                  children: [
                      (0, a.jsx)(N.G, { handleTransition: O, selectedTab: v }),
                      (0, a.jsx)(o.Ip, { children: (0, a.jsx)(ee, {}) }),
                  ],
              })
            : (0, a.jsx)(x.f5, {
                  value: y,
                  children: (0, a.jsx)(E.R9, {
                      newValue: { sessionId: _ },
                      children: (0, a.jsxs)("div", {
                          className: r()(ea.bx, { [es.jP]: A }),
                          ref: s,
                          tabIndex: -1,
                          children: [
                              (0, a.jsx)(N.G, { handleTransition: O, selectedTab: v }),
                              (0, a.jsx)(o.Ip, { ref: t, children: (0, a.jsx)(el, { collectionId: l }) }),
                          ],
                      }),
                  }),
              });
};
