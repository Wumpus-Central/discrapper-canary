(n.d(t, { r8: () => e_, rK: () => eT, Vp: () => eS, Ay: () => ey }), n(321073));
var l = n(477900),
    s = n(582128),
    a = n(503698),
    i = n.n(a),
    r = n(806163),
    o = n(690352),
    c = n(575593),
    u = n(651162),
    d = n(855986),
    m = n(534514),
    g = n(821609),
    E = n(40474),
    h = n(354328),
    f = n(151869),
    C = n(287809),
    x = n(129230),
    p = n(857512),
    S = n(161918),
    A = n(195271),
    I = n(924473),
    _ = n(511265),
    b = n(304210),
    L = n(706113),
    v = n(350172),
    j = n(730202),
    N = n(510801),
    O = n(652215),
    T = n(654512),
    y = n(695960),
    R = n(812760),
    k = n(251256),
    M = n(454688),
    P = n(758836),
    G = n(521420);
function D(e) {
    return e.id;
}
function B(e) {
    let { block: t, listItemProps: n } = e,
        a = (0, p.uM)(),
        { onCtaClick: i } = t,
        r = s.useCallback(
            (e) => {
                (x.default.track(O.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: a?.sessionId,
                    page_type: P.G2.COLLECTION_INDEX,
                    page_section: a?.pageSection,
                    page_category: a?.pageCategory,
                    tile_type: "MARKETING_BLOCK",
                    tile_position: String(a?.tilePosition),
                    cta_name: e,
                }),
                    i());
            },
            [a?.sessionId, a?.pageSection, a?.pageCategory, a?.tilePosition, i],
        ),
        o = s.useCallback(() => {
            r("Take me there button");
        }, [r]),
        c = s.useCallback(() => {
            r(null);
        }, [r]);
    return (0, l.jsx)(M.Ay, {
        layout: M.uf.CAROUSEL,
        backgroundImageUrl: t.assetUrl,
        title: { text: t.title, variant: "heading-lg/semibold", className: G.D },
        ctaText: t.ctaText,
        onButtonClick: o,
        onBlockClick: c,
        listItemProps: n,
    });
}
function F(e) {
    let { block: t, index: n, listItemProps: a } = e,
        i = s.useMemo(
            () => ({
                categoryPosition: n,
                pageCategory: t.id,
                pageSection: "collection_marketing_blocks",
                tilePosition: n,
            }),
            [t.id, n],
        );
    return (0, l.jsx)(p.R9, { newValue: i, children: (0, l.jsx)(B, { block: t, listItemProps: a }) });
}
function H(e, t, n) {
    return (0, l.jsx)(F, { block: e, index: n, listItemProps: t });
}
function w(e) {
    let { section: t } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(m.D, { variant: "heading-lg/semibold", className: G.R, children: t.title }),
            (0, l.jsx)(f.A, { gap: "xl", scrollStep: "item", items: t.blocks, getItemKey: D, renderItem: H }),
        ],
    });
}
var U = n(987421),
    z = n(484469),
    V = n(127329),
    K = n(198329),
    Y = n(579720),
    W = n(517352),
    $ = n(462887),
    q = n(736653),
    Z = n(775602),
    X = n(793574),
    Q = n(688810),
    J = n(412260),
    ee = n(498470),
    et = n(807098),
    en = n(223311),
    el = n(65238),
    es = n(792996);
let ea = { page: O.liQ.COLLECTIBLES_SHOP, section: O.JJy.COLLECTIBLES_SHOP };
var ei = n(196231),
    er = n(64018),
    eo = n(643306),
    ec = n(686471);
let eu = (e) => {
    let { heroBlock: t, handleTransition: n } = e,
        { collectionPromotion: s, handlePromotionEnd: a } = (0, eo.A)(t.categorySkuId);
    return null != s
        ? (0, l.jsx)(ec.A, {
              heroBlock: t,
              collectionPromotion: s,
              handleTransition: n,
              tab: P.G2.COLLECTION_INDEX,
              onPromotionEnd: a,
              hideCards: !0,
              forceHideCountdownCta: !0,
          })
        : (0, l.jsx)(er.A, { heroBlock: t, isLoading: !1, tab: P.G2.COLLECTION_INDEX, hideButton: !0, hideCards: !0 });
};
var ed = n(504820),
    em = n(146053);
function eg(e) {
    return e.skuId;
}
function eE(e) {
    let t = (0, h.A)("shop_include_unpublished"),
        { category: n } = (0, L.A)(e, { includeUnpublished: t, includePricing: !0 });
    return n ?? void 0;
}
let eh = { aspectRatio: "1 / 1" },
    ef = {
        [c.R.PROFILE_EFFECT]: { className: em.I5, aspectRatio: "1 / 2" },
        [c.R.BUNDLE]: { className: em.kP, aspectRatio: "2 / 1" },
    },
    eC = {
        [o.G.SMALL_SQUARE]: eh,
        [o.G.TALL]: { className: em.I5, aspectRatio: "1 / 2" },
        [o.G.WIDE]: { className: em.kP, aspectRatio: "2 / 1" },
        [o.G.LARGE_SQUARE]: { className: em.pr, aspectRatio: "1 / 1" },
    },
    ex = Array.from({ length: 8 }, (e, t) => t);
function ep(e) {
    return (0, l.jsx)(z.A, {}, e);
}
let eS = () => (0, l.jsx)("div", { className: em.fr, children: ex.map(ep) });
function eA(e) {
    let { products: t } = e;
    return (0, l.jsx)("div", {
        className: em.fr,
        children: t.map((e, t) => {
            let { className: n, aspectRatio: s } =
                ef[
                    e.type === c.R.VARIANTS_GROUP &&
                    null != e.variants &&
                    e.variants.length > 0 &&
                    e.variants.every((e) => e.type === c.R.PROFILE_EFFECT)
                        ? c.R.PROFILE_EFFECT
                        : e.type
                ] ?? eh;
            return (0, l.jsx)(
                p.R9,
                {
                    newValue: { tilePosition: t },
                    children: (0, l.jsx)(U.A, { skuId: e.skuId, cardClassName: n, aspectRatio: s }),
                },
                e.skuId,
            );
        }),
    });
}
let eI = [4, 3, 2],
    e_ = (e) => {
        let { sequencedOffers: t, products: n, openPosition: a, surface: r, isSmallSquaresOnly: c = !1 } = e,
            u = (0, Y.A)(t, n, a, !c),
            d = s.useMemo(() => {
                var e;
                let t;
                return c
                    ? null
                    : ((e = u.map((e) => {
                          let { cardShape: t } = e;
                          return t;
                      })),
                      (t = eI.map((t) => (0, K.Vv)(e, t))),
                      e.map((e, n) => {
                          let l = {};
                          return (
                              eI.forEach((e, s) => {
                                  ((l[`--custom-calendar-${e}-row`] = t[s][n].row),
                                      (l[`--custom-calendar-${e}-column`] = t[s][n].column));
                              }),
                              l
                          );
                      }));
            }, [u, c]);
        return (0, l.jsx)("div", {
            className: em.aD,
            children: (0, l.jsx)("ol", {
                className: i()(em.fr, em.ZP),
                children: u.map((e, t) => {
                    let { cardShape: n, tileProps: s } = e,
                        { className: a, aspectRatio: u } = eC[c ? o.G.SMALL_SQUARE : n] ?? eC[o.G.SMALL_SQUARE];
                    return (0, l.jsx)(
                        V.A,
                        { ...s, surface: r, aspectRatio: u, className: i()(null != d && em.Pu, a), style: d?.[t] },
                        s.day,
                    );
                }),
            }),
        });
    };
function eb(e) {
    let t,
        { category: n } = e,
        s = (0, y.A)(n.skuId),
        a = (0, A.t)("collection_index_page", { autoTrackExposure: null != s }).enabled,
        i = (0, I.A)(),
        r = (0, T.A)(n.skuId),
        o = (0, d.bG)([C.default], () => C.default.getCurrentUser()),
        c = (0, _.p)(),
        u = null != (0, b.ty)(n.skuId),
        m = c(n.products);
    return null == s && (null == o || 0 === m.length)
        ? null
        : ((t =
              a && !i
                  ? (0, l.jsx)(eS, {})
                  : null != s && a
                    ? (0, l.jsx)(e_, {
                          sequencedOffers: s,
                          products: n.products,
                          openPosition: r,
                          surface: ed.L.COLLECTION_INDEX,
                      })
                    : (0, l.jsx)(eA, { products: m })),
          (0, l.jsxs)("div", {
              className: em.hd,
              children: [u && (0, l.jsx)(k.A, { title: es.intl.string(es.t.Pla5Vk), className: em.aQ }), t],
          }));
}
function eL(e) {
    let { currentCategorySkuId: t, handleTransition: n } = e,
        { categories: a } = (function (e) {
            let { anchorCollectionId: t, limit: n } = e,
                l = s.useMemo(() => ({ applicationId: O.FYj, anchorCollectionId: t ?? "", limit: n }), [t, n]),
                a = null != t && "" !== t,
                i = (0, v.HX)(l);
            s.useEffect(() => {
                a && (0, v.Su)(l);
            }, [a, l]);
            let { collectionIds: r, fetchState: o } = (0, d.cf)(
                    [j.A],
                    () => ({
                        collectionIds: j.A.getCollectionsAfterIds(i),
                        fetchState: j.A.getCollectionsAfterFetchState(i),
                    }),
                    [i],
                ),
                c = s.useMemo(() => (a ? (r ?? []) : []), [a, r]),
                u = c.join(","),
                m = (0, d.cf)(
                    [j.A],
                    () => {
                        let e = {};
                        for (let t of c) e[t] = j.A.getCollectionOrSummary(t);
                        return e;
                    },
                    [c],
                );
            return {
                categories: s.useMemo(
                    () =>
                        c
                            .map((e) => m[e])
                            .filter((e) => null != e)
                            .map((e) => N.A.fromStorefrontCollectionRecord(e)),
                    [u, m],
                ),
                isLoading: a && null == r && "error" !== o,
            };
        })({ anchorCollectionId: t, limit: 12 }),
        i = s.useCallback(
            (e) =>
                e.skuId !== t &&
                null != e.featuredBlockUrl &&
                !0 !== e.isOrbsExclusive &&
                (null == e.unpublishedAt || e.unpublishedAt > new Date()) &&
                !P.MS.some((t) => {
                    let { categorySkuId: n } = t;
                    return n === e.skuId;
                }),
            [t],
        ),
        r = s.useMemo(() => a.filter(i).slice(0, 8), [a, i]);
    return 0 === r.length
        ? null
        : (0, l.jsxs)("div", {
              className: em.t3,
              children: [
                  (0, l.jsx)("div", {
                      className: em.bb,
                      children: (0, l.jsx)(m.D, {
                          variant: "heading-lg/semibold",
                          children: es.intl.string(es.t.EhRZ9o),
                      }),
                  }),
                  (0, l.jsx)(
                      f.A,
                      {
                          gap: "xl",
                          scrollStep: "item",
                          items: r,
                          getItemKey: eg,
                          renderItem: (e, t, s) =>
                              (0, l.jsx)(ev, { category: e, index: s, handleTransition: n, listItemProps: t }, e.skuId),
                      },
                      t,
                  ),
              ],
          });
}
function ev(e) {
    let { category: t, index: n, handleTransition: s, listItemProps: a } = e;
    return (0, l.jsx)(p.R9, {
        newValue: { categoryPosition: n, pageCategory: t.name, pageSection: "related_drops", tilePosition: n },
        children: (0, l.jsx)(ei.S, {
            layout: M.uf.CAROUSEL,
            category: t,
            handleTransition: s,
            pageType: P.G2.COLLECTION_INDEX,
            listItemProps: a,
        }),
    });
}
let ej = [
    { tab: P.G2.AVATAR_DECORATIONS, label: () => es.intl.string(es.t.dRZYNE) },
    { tab: P.G2.PROFILE_EFFECTS, label: () => es.intl.string(es.t["1cNjtx"]) },
    { tab: P.G2.NAMEPLATES, label: () => es.intl.string(es.t.V68Fqz) },
    { tab: P.G2.PROFILE_FRAMES, label: () => es.intl.string(es.t.ecTJkR) },
    { tab: P.G2.BUNDLES, label: () => es.intl.string(es.t.FYFpps) },
];
function eN() {
    let e = (0, r.W6)();
    return (0, l.jsxs)("div", {
        className: em.nb,
        children: [
            (0, l.jsx)(m.D, { variant: "heading-sm/semibold", children: es.intl.string(es.t.Yr70c4) }),
            (0, l.jsx)("div", {
                className: em.J2,
                children: ej.map((t) => {
                    let { tab: n, label: s } = t;
                    return (0, l.jsx)(
                        g.$,
                        { variant: "secondary", text: s(), onClick: () => e.push(O.BVt.COLLECTIBLES_SHOP_WITH_TAB(n)) },
                        n,
                    );
                }),
            }),
        ],
    });
}
function eO(e) {
    let { collectionId: t } = e,
        n = (0, r.W6)(),
        a = (0, p.uM)(),
        o = eE(t)?.name,
        c = s.useMemo(
            () => [
                { id: "shop_all", label: es.intl.string(es.t.xFcotU) },
                { id: "collection", label: o ?? "" },
            ],
            [o],
        ),
        u = s.useCallback(
            (e) => {
                "shop_all" === e.id &&
                    (x.default.track(O.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: a?.sessionId,
                        sku_id: t,
                        page_type: P.G2.COLLECTION_INDEX,
                        page_category: o,
                        cta_name: "collection breadcrumb shop all",
                    }),
                    n.push(O.BVt.COLLECTIBLES_SHOP_WITH_TAB(P.G2.CATALOG)));
            },
            [n, a?.sessionId, t, o],
        ),
        d = s.useCallback(
            (e, t) =>
                (0, l.jsxs)("span", {
                    className: i()(em.u, { [em.kG]: t }),
                    children: [e.label, !t && (0, l.jsx)("span", { className: em.Tl, children: "/" })],
                }),
            [],
        );
    return (0, l.jsx)(E.A, {
        className: em.C2,
        separatorClassName: em.Lw,
        breadcrumbs: c,
        activeId: "collection",
        onBreadcrumbClick: u,
        renderCustomBreadcrumb: d,
    });
}
function eT() {
    return (0, l.jsxs)("div", {
        className: em.kL,
        children: [
            (0, l.jsx)(er.A, { isLoading: !0, hideButton: !0, hideCards: !0, tab: P.G2.COLLECTION_INDEX }),
            (0, l.jsx)("div", { className: em.hd, children: (0, l.jsx)(eS, {}) }),
            (0, l.jsxs)("div", {
                className: em.t3,
                children: [
                    (0, l.jsx)("div", { className: em.bb, children: (0, l.jsx)("div", { className: em.M$ }) }),
                    (0, l.jsxs)("div", { className: em.A9, children: [(0, l.jsx)(M.R3, {}), (0, l.jsx)(M.R3, {})] }),
                ],
            }),
        ],
    });
}
let ey = function (e) {
    let { collectionId: t } = e,
        n = (0, r.W6)(),
        a = eE(t),
        i = (function (e) {
            var t;
            let n = (0, en.A)(O.FYj),
                l =
                    ((t = W.oW.COLLECTION_PAGE_MARKETING_BLOCK),
                    (0, d.yK)([J.A], () => J.A.getMarketingComponentsBySurfaceAcrossPromotions(t), [t])),
                a = (0, $.M)((0, q.Ay)()),
                i = (0, d.bG)([Z.Ay], () => Z.Ay.useReducedMotion),
                { analyticsLocations: r } = (0, Q.Ay)(X.A.COLLECTIBLES_SHOP_COLLECTION_MARKETING_BLOCK),
                o = s.useMemo(
                    () =>
                        l.map((e) => {
                            let { title: t, art: n, button: l } = e.surface;
                            return {
                                id: e.id,
                                title: t,
                                assetUrl: (0, et.c)(n, a, i) ?? "",
                                ctaText: l?.copy ?? "",
                                onCtaClick: (0, ee.h)({
                                    buttonAction: l?.buttonAction,
                                    deeplinkSection: l?.deeplinkSection,
                                    applicationId: l?.navigableStorefrontApplicationId?.value,
                                    shopCollectionId: l?.shopCollectionId?.value,
                                    giftModalDestination: l?.giftModalDestination,
                                    analyticsLocations: r,
                                    analyticsLocation: ea,
                                }),
                            };
                        }),
                    [l, a, i, r],
                ),
                c = (0, el.NN)(n);
            return null == c ||
                c.collectionId !== e ||
                !c.showUpsellBlocks ||
                (n?.endsAt != null && n.endsAt <= new Date()) ||
                0 === o.length
                ? null
                : { title: es.intl.string(es.t.IXKfvy), blocks: o };
        })(t),
        o = s.useCallback(
            (e) => {
                let { categorySkuId: t } = e;
                null != t && n.push(O.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(t));
            },
            [n],
        ),
        c = s.useMemo(
            () =>
                null == a
                    ? null
                    : {
                          rankedSkuIds: a.heroRanking ?? [],
                          name: a.name,
                          unpublishedAt: a.unpublishedAt,
                          categorySkuId: a.skuId,
                          summary: a.summary,
                          type: u.g.HERO,
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
    let m = null != a.heroBannerUrl || null != a.heroRiveUrl;
    return (0, l.jsx)(S.iM, {
        tab: P.G2.COLLECTION_INDEX,
        children: (0, l.jsxs)("div", {
            className: em.kL,
            children: [
                m && null != c
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsxs)("div", {
                                  className: em.rz,
                                  children: [
                                      (0, l.jsx)("div", {
                                          className: em.zn,
                                          children: (0, l.jsx)(eO, { collectionId: t }),
                                      }),
                                      (0, l.jsx)(eu, { heroBlock: c, handleTransition: o }),
                                  ],
                              }),
                              (0, l.jsx)(eb, { category: a }),
                              null != i
                                  ? (0, l.jsx)("div", { className: em.t3, children: (0, l.jsx)(w, { section: i }) })
                                  : (0, l.jsx)(eL, { currentCategorySkuId: a.skuId, handleTransition: o }, a.skuId),
                          ],
                      })
                    : (0, l.jsxs)("div", {
                          className: em.AW,
                          children: [
                              (0, l.jsx)("div", { className: em.zn, children: (0, l.jsx)(eO, { collectionId: t }) }),
                              (0, l.jsx)("div", { className: em.$T, children: (0, l.jsx)(R.A, { category: a }) }),
                              (0, l.jsx)(eb, { category: a }),
                              null != i
                                  ? (0, l.jsx)("div", { className: em.t3, children: (0, l.jsx)(w, { section: i }) })
                                  : (0, l.jsx)(eL, { currentCategorySkuId: a.skuId, handleTransition: o }, a.skuId),
                          ],
                      }),
                (0, l.jsx)(eN, {}),
            ],
        }),
    });
};
