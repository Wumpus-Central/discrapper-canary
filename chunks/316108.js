(n.d(t, { r8: () => ep, rK: () => eL, Vp: () => ef, Ay: () => ej }), n(321073));
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
    h = n(40474),
    E = n(354328),
    f = n(151869),
    x = n(287809),
    C = n(129230),
    p = n(857512),
    S = n(161918),
    A = n(195271),
    I = n(924473),
    _ = n(511265),
    b = n(304210),
    v = n(706113),
    L = n(350172),
    j = n(730202),
    N = n(510801),
    O = n(652215),
    T = n(654512),
    y = n(695960),
    R = n(812760),
    k = n(28875),
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
                (C.default.track(O.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
    V = n(687461),
    K = n(198329),
    Y = n(579720),
    W = n(517352),
    $ = n(462887),
    q = n(736653),
    Z = n(775602),
    X = n(412260),
    Q = n(498470),
    J = n(807098),
    ee = n(223311),
    et = n(65238),
    en = n(792996),
    el = n(196231),
    es = n(64018),
    ea = n(643306),
    ei = n(200420);
let er = (e) => {
    let { heroBlock: t, handleTransition: n } = e,
        { collectionPromotion: s, handlePromotionEnd: a } = (0, ea.A)(t.categorySkuId);
    return null != s
        ? (0, l.jsx)(ei.A, {
              heroBlock: t,
              collectionPromotion: s,
              handleTransition: n,
              tab: P.G2.COLLECTION_INDEX,
              onPromotionEnd: a,
              hideCards: !0,
              forceHideCountdownCta: !0,
          })
        : (0, l.jsx)(es.A, { heroBlock: t, isLoading: !1, tab: P.G2.COLLECTION_INDEX, hideButton: !0, hideCards: !0 });
};
var eo = n(146053);
function ec(e) {
    return e.skuId;
}
function eu(e) {
    let t = (0, E.A)("shop_include_unpublished"),
        { category: n } = (0, v.A)(e, { includeUnpublished: t, includePricing: !0 });
    return n ?? void 0;
}
let ed = { aspectRatio: "1 / 1" },
    em = {
        [c.R.PROFILE_EFFECT]: { className: eo.I5, aspectRatio: "1 / 2" },
        [c.R.BUNDLE]: { className: eo.kP, aspectRatio: "2 / 1" },
    },
    eg = {
        [o.G.SMALL_SQUARE]: ed,
        [o.G.TALL]: { className: eo.I5, aspectRatio: "1 / 2" },
        [o.G.WIDE]: { className: eo.kP, aspectRatio: "2 / 1" },
        [o.G.LARGE_SQUARE]: { className: eo.pr, aspectRatio: "1 / 1" },
    },
    eh = Array.from({ length: 8 }, (e, t) => t);
function eE(e) {
    return (0, l.jsx)(z.A, {}, e);
}
let ef = () => (0, l.jsx)("div", { className: eo.fr, children: eh.map(eE) });
function ex(e) {
    let { products: t } = e;
    return (0, l.jsx)("div", {
        className: eo.fr,
        children: t.map((e, t) => {
            let { className: n, aspectRatio: s } =
                em[
                    e.type === c.R.VARIANTS_GROUP &&
                    null != e.variants &&
                    e.variants.length > 0 &&
                    e.variants.every((e) => e.type === c.R.PROFILE_EFFECT)
                        ? c.R.PROFILE_EFFECT
                        : e.type
                ] ?? ed;
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
let eC = [4, 3, 2],
    ep = (e) => {
        let { sequencedOffers: t, products: n, openPosition: a, isSmallSquaresOnly: r = !1 } = e,
            c = (0, Y.A)(t, n, a, !r),
            u = s.useMemo(() => {
                var e;
                let t;
                return r
                    ? null
                    : ((e = c.map((e) => {
                          let { cardShape: t } = e;
                          return t;
                      })),
                      (t = eC.map((t) => (0, K.Vv)(e, t))),
                      e.map((e, n) => {
                          let l = {};
                          return (
                              eC.forEach((e, s) => {
                                  ((l[`--custom-calendar-${e}-row`] = t[s][n].row),
                                      (l[`--custom-calendar-${e}-column`] = t[s][n].column));
                              }),
                              l
                          );
                      }));
            }, [c, r]);
        return (0, l.jsx)("div", {
            className: eo.aD,
            children: (0, l.jsx)("ol", {
                className: i()(eo.fr, eo.ZP),
                children: c.map((e, t) => {
                    let { cardShape: n, tileProps: s } = e,
                        { className: a, aspectRatio: c } = eg[r ? o.G.SMALL_SQUARE : n] ?? eg[o.G.SMALL_SQUARE];
                    return (0, l.jsx)(
                        V.A,
                        { ...s, aspectRatio: c, className: i()(null != u && eo.Pu, a), style: u?.[t] },
                        s.day,
                    );
                }),
            }),
        });
    };
function eS(e) {
    let t,
        { category: n } = e,
        s = (0, y.A)(n.skuId),
        a = (0, A.t)("collection_index_page", { autoTrackExposure: null != s }).enabled,
        i = (0, I.A)(),
        r = (0, T.A)(n.skuId),
        o = (0, d.bG)([x.default], () => x.default.getCurrentUser()),
        c = (0, _.p)(),
        u = null != (0, b.ty)(n.skuId),
        m = c(n.products);
    return null == s && (null == o || 0 === m.length)
        ? null
        : ((t =
              a && !i
                  ? (0, l.jsx)(ef, {})
                  : null != s && a
                    ? (0, l.jsx)(ep, { sequencedOffers: s, products: n.products, openPosition: r })
                    : (0, l.jsx)(ex, { products: m })),
          (0, l.jsxs)("div", {
              className: eo.hd,
              children: [u && (0, l.jsx)(k.A, { title: en.intl.string(en.t.Pla5Vk), className: eo.aQ }), t],
          }));
}
function eA(e) {
    let { currentCategorySkuId: t, handleTransition: n } = e,
        { categories: a } = (function (e) {
            let { anchorCollectionId: t, limit: n } = e,
                l = s.useMemo(() => ({ applicationId: O.FYj, anchorCollectionId: t ?? "", limit: n }), [t, n]),
                a = null != t && "" !== t,
                i = (0, L.HX)(l);
            s.useEffect(() => {
                a && (0, L.Su)(l);
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
              className: eo.t3,
              children: [
                  (0, l.jsx)("div", {
                      className: eo.bb,
                      children: (0, l.jsx)(m.D, {
                          variant: "heading-lg/semibold",
                          children: en.intl.string(en.t.EhRZ9o),
                      }),
                  }),
                  (0, l.jsx)(
                      f.A,
                      {
                          gap: "xl",
                          scrollStep: "item",
                          items: r,
                          getItemKey: ec,
                          renderItem: (e, t, s) =>
                              (0, l.jsx)(eI, { category: e, index: s, handleTransition: n, listItemProps: t }, e.skuId),
                      },
                      t,
                  ),
              ],
          });
}
function eI(e) {
    let { category: t, index: n, handleTransition: s, listItemProps: a } = e;
    return (0, l.jsx)(p.R9, {
        newValue: { categoryPosition: n, pageCategory: t.name, pageSection: "related_drops", tilePosition: n },
        children: (0, l.jsx)(el.S, {
            layout: M.uf.CAROUSEL,
            category: t,
            handleTransition: s,
            pageType: P.G2.COLLECTION_INDEX,
            listItemProps: a,
        }),
    });
}
let e_ = [
    { tab: P.G2.AVATAR_DECORATIONS, label: () => en.intl.string(en.t.dRZYNE) },
    { tab: P.G2.PROFILE_EFFECTS, label: () => en.intl.string(en.t["1cNjtx"]) },
    { tab: P.G2.NAMEPLATES, label: () => en.intl.string(en.t.V68Fqz) },
    { tab: P.G2.PROFILE_FRAMES, label: () => en.intl.string(en.t.ecTJkR) },
    { tab: P.G2.BUNDLES, label: () => en.intl.string(en.t.FYFpps) },
];
function eb() {
    let e = (0, r.W6)();
    return (0, l.jsxs)("div", {
        className: eo.nb,
        children: [
            (0, l.jsx)(m.D, { variant: "heading-sm/semibold", children: en.intl.string(en.t.Yr70c4) }),
            (0, l.jsx)("div", {
                className: eo.J2,
                children: e_.map((t) => {
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
function ev(e) {
    let { collectionId: t } = e,
        n = (0, r.W6)(),
        a = (0, p.uM)(),
        o = eu(t)?.name,
        c = s.useMemo(
            () => [
                { id: "shop_all", label: en.intl.string(en.t.xFcotU) },
                { id: "collection", label: o ?? "" },
            ],
            [o],
        ),
        u = s.useCallback(
            (e) => {
                "shop_all" === e.id &&
                    (C.default.track(O.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
                    className: i()(eo.u, { [eo.kG]: t }),
                    children: [e.label, !t && (0, l.jsx)("span", { className: eo.Tl, children: "/" })],
                }),
            [],
        );
    return (0, l.jsx)(h.A, {
        className: eo.C2,
        separatorClassName: eo.Lw,
        breadcrumbs: c,
        activeId: "collection",
        onBreadcrumbClick: u,
        renderCustomBreadcrumb: d,
    });
}
function eL() {
    return (0, l.jsxs)("div", {
        className: eo.kL,
        children: [
            (0, l.jsx)(es.A, { isLoading: !0, hideButton: !0, hideCards: !0, tab: P.G2.COLLECTION_INDEX }),
            (0, l.jsx)("div", { className: eo.hd, children: (0, l.jsx)(ef, {}) }),
            (0, l.jsxs)("div", {
                className: eo.t3,
                children: [
                    (0, l.jsx)("div", { className: eo.bb, children: (0, l.jsx)("div", { className: eo.M$ }) }),
                    (0, l.jsxs)("div", { className: eo.A9, children: [(0, l.jsx)(M.R3, {}), (0, l.jsx)(M.R3, {})] }),
                ],
            }),
        ],
    });
}
let ej = function (e) {
    var t;
    let n,
        a,
        i,
        o,
        c,
        m,
        { collectionId: g } = e,
        h = (0, r.W6)(),
        E = eu(g),
        f =
            ((n = (0, ee.A)(O.FYj)),
            (t = W.oW.COLLECTION_PAGE_MARKETING_BLOCK),
            (a = (0, d.yK)([X.A], () => X.A.getMarketingComponentsBySurfaceAcrossPromotions(t), [t])),
            (i = (0, $.M)((0, q.Ay)())),
            (o = (0, d.bG)([Z.Ay], () => Z.Ay.useReducedMotion)),
            (c = s.useMemo(
                () =>
                    a.map((e) => {
                        let { title: t, art: n, button: l } = e.surface;
                        return {
                            id: e.id,
                            title: t,
                            assetUrl: (0, J.c)(n, i, o) ?? "",
                            ctaText: l?.copy ?? "",
                            onCtaClick: (0, Q.h)({
                                buttonAction: l?.buttonAction,
                                deeplinkSection: l?.deeplinkSection,
                                applicationId: l?.navigableStorefrontApplicationId?.value,
                                shopCollectionId: l?.shopCollectionId?.value,
                                giftModalDestination: l?.giftModalDestination,
                            }),
                        };
                    }),
                [a, i, o],
            )),
            null == (m = (0, et.NN)(n)) ||
            m.collectionId !== g ||
            !m.showUpsellBlocks ||
            (n?.endsAt != null && n.endsAt <= new Date()) ||
            0 === c.length
                ? null
                : { title: en.intl.string(en.t.IXKfvy), blocks: c }),
        x = s.useCallback(
            (e) => {
                let { categorySkuId: t } = e;
                null != t && h.push(O.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(t));
            },
            [h],
        ),
        C = s.useMemo(
            () =>
                null == E
                    ? null
                    : {
                          rankedSkuIds: E.heroRanking ?? [],
                          name: E.name,
                          unpublishedAt: E.unpublishedAt,
                          categorySkuId: E.skuId,
                          summary: E.summary,
                          type: u.g.HERO,
                          categoryStoreListingId: E.storeListingId,
                          bannerDisplayConfig: E.heroBannerDisplayConfig,
                          logoDisplayConfig: E.heroLogoDisplayConfig,
                          heroLogoUrl: E.heroLogoUrl,
                          heroBannerUrl: E.heroBannerUrl,
                          heroBannerAnimatedUrl: E.heroBannerAnimatedUrl,
                          heroRiveUrl: E.heroRiveUrl,
                      },
            [E],
        );
    if (null == E) return null;
    let p = null != E.heroBannerUrl || null != E.heroRiveUrl;
    return (0, l.jsx)(S.iM, {
        tab: P.G2.COLLECTION_INDEX,
        children: (0, l.jsxs)("div", {
            className: eo.kL,
            children: [
                p && null != C
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsxs)("div", {
                                  className: eo.rz,
                                  children: [
                                      (0, l.jsx)("div", {
                                          className: eo.zn,
                                          children: (0, l.jsx)(ev, { collectionId: g }),
                                      }),
                                      (0, l.jsx)(er, { heroBlock: C, handleTransition: x }),
                                  ],
                              }),
                              (0, l.jsx)(eS, { category: E }),
                              null != f
                                  ? (0, l.jsx)("div", { className: eo.t3, children: (0, l.jsx)(w, { section: f }) })
                                  : (0, l.jsx)(eA, { currentCategorySkuId: E.skuId, handleTransition: x }, E.skuId),
                          ],
                      })
                    : (0, l.jsxs)("div", {
                          className: eo.AW,
                          children: [
                              (0, l.jsx)("div", { className: eo.zn, children: (0, l.jsx)(ev, { collectionId: g }) }),
                              (0, l.jsx)("div", { className: eo.$T, children: (0, l.jsx)(R.A, { category: E }) }),
                              (0, l.jsx)(eS, { category: E }),
                              null != f
                                  ? (0, l.jsx)("div", { className: eo.t3, children: (0, l.jsx)(w, { section: f }) })
                                  : (0, l.jsx)(eA, { currentCategorySkuId: E.skuId, handleTransition: x }, E.skuId),
                          ],
                      }),
                (0, l.jsx)(eb, {}),
            ],
        }),
    });
};
