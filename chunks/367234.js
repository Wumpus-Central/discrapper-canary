(t.r(l), t.d(l, { default: () => eV }));
var s = t(477900),
    n = t(582128),
    i = t(503698),
    a = t.n(i),
    r = t(115560),
    o = t(192308),
    c = t(944791),
    d = t(444927),
    u = t(840251),
    h = t(688151);
let m = new u.E([], h.$G.COLLECTIBLES_SHOP_OPEN, { location: "collectibles shop open" });
var g = t(611924),
    p = t(744082),
    C = t(634110),
    I = t(371794),
    x = t(857512),
    j = t(821816),
    E = t(806163),
    b = t(95362),
    f = t(516521),
    L = t(688810),
    _ = t(354328),
    N = t(12678),
    k = t(706113),
    A = t(841702),
    v = t(983545),
    O = t(443751),
    T = t(235939);
(t(323874), t(14289), t(35956), t(321073));
var S = t(575593),
    y = t(651162),
    R = t(855986),
    B = t(534514),
    P = t(821609),
    D = t(40474),
    F = t(151869),
    G = t(287809),
    U = t(129230),
    M = t(161918),
    V = t(945810);
let H = { enabled: !1 },
    w = (0, V.mj)({
        name: "2026-10-shop-twelve-days-promo",
        kind: "user",
        defaultConfig: H,
        variations: { 0: H, 1: { enabled: !0 } },
    });
var X = t(511265),
    W = t(304210),
    K = t(350172),
    Y = t(730202),
    z = t(510801),
    $ = t(652215),
    Z = t(223311),
    J = t(65238),
    q = t(812760),
    Q = t(442036),
    ee = t(87719),
    el = t(792996);
let et =
    "https://cdn.discordapp.com/media/v1/collectibles-shop/a0219393f8d994dde33eabd28a379109aaafc054267f2f05a247d605406a8b1c";
function es() {
    (0, ee.x)();
}
function en() {
    let e = el.intl.string(el.t.jVcuVY);
    return {
        title: el.intl.string(el.t.IXKfvy),
        blocks: [
            { id: "gift_nitro_deco", title: el.intl.string(el.t["snV+8b"]), assetUrl: et, ctaText: e, onCtaClick: es },
            { id: "orbs_back_games", title: el.intl.string(el.t.esVpAG), assetUrl: et, ctaText: e, onCtaClick: es },
            { id: "nitro_orbs_items", title: el.intl.string(el.t["0OiA1g"]), assetUrl: et, ctaText: e, onCtaClick: es },
        ],
    };
}
var ei = t(454688),
    ea = t(758836),
    er = t(521420);
function eo(e) {
    return e.id;
}
function ec(e) {
    let { block: l, listItemProps: t } = e,
        i = (0, x.uM)(),
        { onCtaClick: a } = l,
        r = n.useCallback(
            (e) => {
                (U.default.track($.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: i?.sessionId,
                    page_type: ea.G2.COLLECTION_INDEX,
                    page_section: i?.pageSection,
                    page_category: i?.pageCategory,
                    tile_type: "MARKETING_BLOCK",
                    tile_position: String(i?.tilePosition),
                    cta_name: e,
                }),
                    a());
            },
            [i?.sessionId, i?.pageSection, i?.pageCategory, i?.tilePosition, a],
        ),
        o = n.useCallback(() => {
            r("Take me there button");
        }, [r]),
        c = n.useCallback(() => {
            r(null);
        }, [r]);
    return (0, s.jsx)(ei.Ay, {
        layout: ei.uf.CAROUSEL,
        backgroundImageUrl: l.assetUrl,
        title: { text: l.title, variant: "heading-lg/semibold", className: er.D },
        ctaText: l.ctaText,
        onButtonClick: o,
        onBlockClick: c,
        listItemProps: t,
    });
}
function ed(e) {
    let { block: l, index: t, listItemProps: i } = e,
        a = n.useMemo(
            () => ({
                categoryPosition: t,
                pageCategory: l.id,
                pageSection: "collection_marketing_blocks",
                tilePosition: t,
            }),
            [l.id, t],
        );
    return (0, s.jsx)(x.R9, { newValue: a, children: (0, s.jsx)(ec, { block: l, listItemProps: i }) });
}
function eu(e, l, t) {
    return (0, s.jsx)(ed, { block: e, index: t, listItemProps: l });
}
function eh(e) {
    let { section: l } = e;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(B.D, { variant: "heading-lg/semibold", className: er.R, children: l.title }),
            (0, s.jsx)(F.A, { gap: "xl", scrollStep: "item", items: l.blocks, getItemKey: eo, renderItem: eu }),
        ],
    });
}
var em = t(987421),
    eg = t(484469),
    ep = t(834730),
    eC = t(683421);
function eI(e) {
    let { day: l, skuId: t, tilePosition: n, aspectRatio: i, className: r } = e;
    return (0, s.jsxs)("li", {
        className: a()(eC.Vs, eC.Ml, r),
        style: { "--custom-calendar-tile-aspect-ratio": i },
        children: [
            (0, s.jsx)(x.R9, { newValue: { tilePosition: n }, children: (0, s.jsx)(em.A, { skuId: t }) }),
            (0, s.jsx)(ep.E, {
                className: eC.vg,
                variant: "heading-sm/medium",
                color: "none",
                tag: "span",
                children: l,
            }),
        ],
    });
}
var ex = t(196231),
    ej = t(353448),
    eE = t(146053);
function eb(e) {
    return e.skuId;
}
function ef(e) {
    let l = (0, _.A)("shop_include_unpublished"),
        { category: t } = (0, k.A)(e, { includeUnpublished: l, includePricing: !0 });
    return t ?? void 0;
}
function eL(e) {
    return e.type === S.R.VARIANTS_GROUP &&
        null != e.variants &&
        e.variants.length > 0 &&
        e.variants.every((e) => e.type === S.R.PROFILE_EFFECT)
        ? S.R.PROFILE_EFFECT
        : e.type;
}
let e_ = { aspectRatio: "1 / 1" },
    eN = {
        [S.R.PROFILE_EFFECT]: { className: eE.I5, aspectRatio: "1 / 2" },
        [S.R.BUNDLE]: { className: eE.kP, aspectRatio: "2 / 1" },
    };
function ek(e) {
    let { products: l } = e;
    return (0, s.jsx)("div", {
        className: eE.fr,
        children: l.map((e, l) => {
            let { className: t, aspectRatio: n } = eN[eL(e)] ?? e_;
            return (0, s.jsx)(
                x.R9,
                {
                    newValue: { tilePosition: l },
                    children: (0, s.jsx)(em.A, { skuId: e.skuId, cardClassName: t, aspectRatio: n }),
                },
                e.skuId,
            );
        }),
    });
}
function eA(e) {
    let { products: l } = e;
    return (0, s.jsx)("div", {
        className: eE.aD,
        children: (0, s.jsx)("ol", {
            className: a()(eE.fr, eE.ZP),
            children: l.map((e, t) => {
                if (e?.skuId == null) return null;
                let n = t + 1,
                    i = t === l.length - 1,
                    r = i ? e_ : (eN[eL(e)] ?? e_);
                return (0, s.jsx)(
                    eI,
                    {
                        day: n,
                        skuId: e.skuId,
                        tilePosition: t,
                        aspectRatio: r.aspectRatio,
                        className: a()(eE.Pu, r.className, { [eE.pr]: i }),
                    },
                    n,
                );
            }),
        }),
    });
}
function ev(e) {
    let { category: l } = e;
    (0, E.zy)();
    let t = w.useConfig({ location: "collection_index_page" }).enabled && !1,
        n = (0, R.bG)([G.default], () => G.default.getCurrentUser()),
        i = (0, X.p)(),
        a = null != (0, W.ty)(l.skuId),
        r = i(l.products);
    return t || (null != n && 0 !== r.length)
        ? (0, s.jsxs)("div", {
              className: eE.hd,
              children: [
                  a && (0, s.jsx)(Q.A, { className: eE.aQ }),
                  t ? (0, s.jsx)(eA, { products: l.products }) : (0, s.jsx)(ek, { products: r }),
              ],
          })
        : null;
}
function eO(e) {
    let { currentCategorySkuId: l, handleTransition: t } = e,
        { categories: i } = (function (e) {
            let { anchorCollectionId: l, limit: t } = e,
                s = n.useMemo(() => ({ applicationId: $.FYj, anchorCollectionId: l ?? "", limit: t }), [l, t]),
                i = null != l && "" !== l,
                a = (0, K.HX)(s);
            n.useEffect(() => {
                i && (0, K.Su)(s);
            }, [i, s]);
            let { collectionIds: r, fetchState: o } = (0, R.cf)(
                    [Y.A],
                    () => ({
                        collectionIds: Y.A.getCollectionsAfterIds(a),
                        fetchState: Y.A.getCollectionsAfterFetchState(a),
                    }),
                    [a],
                ),
                c = n.useMemo(() => (i ? (r ?? []) : []), [i, r]),
                d = c.join(","),
                u = (0, R.cf)(
                    [Y.A],
                    () => {
                        let e = {};
                        for (let l of c) e[l] = Y.A.getCollectionOrSummary(l);
                        return e;
                    },
                    [c],
                );
            return {
                categories: n.useMemo(
                    () =>
                        c
                            .map((e) => u[e])
                            .filter((e) => null != e)
                            .map((e) => z.A.fromStorefrontCollectionRecord(e)),
                    [d, u],
                ),
                isLoading: i && null == r && "error" !== o,
            };
        })({ anchorCollectionId: l, limit: 12 }),
        a = n.useCallback(
            (e) =>
                e.skuId !== l &&
                null != e.featuredBlockUrl &&
                !0 !== e.isOrbsExclusive &&
                (null == e.unpublishedAt || e.unpublishedAt > new Date()) &&
                !ea.MS.some((l) => {
                    let { categorySkuId: t } = l;
                    return t === e.skuId;
                }),
            [l],
        ),
        r = n.useMemo(() => i.filter(a).slice(0, 8), [i, a]);
    return 0 === r.length
        ? null
        : (0, s.jsxs)("div", {
              className: eE.t3,
              children: [
                  (0, s.jsx)("div", {
                      className: eE.bb,
                      children: (0, s.jsx)(B.D, {
                          variant: "heading-lg/semibold",
                          children: el.intl.string(el.t.EhRZ9o),
                      }),
                  }),
                  (0, s.jsx)(
                      F.A,
                      {
                          gap: "xl",
                          scrollStep: "item",
                          items: r,
                          getItemKey: eb,
                          renderItem: (e, l, n) =>
                              (0, s.jsx)(eT, { category: e, index: n, handleTransition: t, listItemProps: l }, e.skuId),
                      },
                      l,
                  ),
              ],
          });
}
function eT(e) {
    let { category: l, index: t, handleTransition: n, listItemProps: i } = e;
    return (0, s.jsx)(x.R9, {
        newValue: { categoryPosition: t, pageCategory: l.name, pageSection: "related_drops", tilePosition: t },
        children: (0, s.jsx)(ex.S, {
            layout: ei.uf.CAROUSEL,
            category: l,
            handleTransition: n,
            pageType: ea.G2.COLLECTION_INDEX,
            listItemProps: i,
        }),
    });
}
let eS = [
    { tab: ea.G2.AVATAR_DECORATIONS, label: () => el.intl.string(el.t.dRZYNE) },
    { tab: ea.G2.PROFILE_EFFECTS, label: () => el.intl.string(el.t["1cNjtx"]) },
    { tab: ea.G2.NAMEPLATES, label: () => el.intl.string(el.t.V68Fqz) },
    { tab: ea.G2.PROFILE_FRAMES, label: () => el.intl.string(el.t.ecTJkR) },
    { tab: ea.G2.BUNDLES, label: () => el.intl.string(el.t.FYFpps) },
];
function ey() {
    let e = (0, E.W6)();
    return (0, s.jsxs)("div", {
        className: eE.nb,
        children: [
            (0, s.jsx)(B.D, { variant: "heading-sm/semibold", children: el.intl.string(el.t.Yr70c4) }),
            (0, s.jsx)("div", {
                className: eE.J2,
                children: eS.map((l) => {
                    let { tab: t, label: n } = l;
                    return (0, s.jsx)(
                        P.$,
                        { variant: "secondary", text: n(), onClick: () => e.push($.BVt.COLLECTIBLES_SHOP_WITH_TAB(t)) },
                        t,
                    );
                }),
            }),
        ],
    });
}
function eR(e) {
    let { collectionId: l } = e,
        t = (0, E.W6)(),
        i = (0, x.uM)(),
        r = ef(l)?.name,
        o = n.useMemo(
            () => [
                { id: "shop_all", label: el.intl.string(el.t.xFcotU) },
                { id: "collection", label: r ?? "" },
            ],
            [r],
        ),
        c = n.useCallback(
            (e) => {
                "shop_all" === e.id &&
                    (U.default.track($.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: i?.sessionId,
                        sku_id: l,
                        page_type: ea.G2.COLLECTION_INDEX,
                        page_category: r,
                        cta_name: "collection breadcrumb shop all",
                    }),
                    t.push($.BVt.COLLECTIBLES_SHOP_WITH_TAB(ea.G2.CATALOG)));
            },
            [t, i?.sessionId, l, r],
        ),
        d = n.useCallback(
            (e, l) =>
                (0, s.jsxs)("span", {
                    className: a()(eE.u, { [eE.kG]: l }),
                    children: [e.label, !l && (0, s.jsx)("span", { className: eE.Tl, children: "/" })],
                }),
            [],
        );
    return (0, s.jsx)(D.A, {
        className: eE.C2,
        separatorClassName: eE.Lw,
        breadcrumbs: o,
        activeId: "collection",
        onBreadcrumbClick: c,
        renderCustomBreadcrumb: d,
    });
}
function eB() {
    return (0, s.jsxs)("div", {
        className: eE.kL,
        children: [
            (0, s.jsx)(ej.A, { isLoading: !0, hideButton: !0, hideCards: !0, tab: ea.G2.COLLECTION_INDEX }),
            (0, s.jsx)("div", {
                className: eE.hd,
                children: (0, s.jsx)("div", {
                    className: eE.fr,
                    children: Array.from({ length: 8 }, (e, l) => (0, s.jsx)(eg.A, {}, l)),
                }),
            }),
            (0, s.jsxs)("div", {
                className: eE.t3,
                children: [
                    (0, s.jsx)("div", { className: eE.bb, children: (0, s.jsx)("div", { className: eE.M$ }) }),
                    (0, s.jsxs)("div", { className: eE.A9, children: [(0, s.jsx)(ei.R3, {}), (0, s.jsx)(ei.R3, {})] }),
                ],
            }),
        ],
    });
}
let eP = function (e) {
    let l,
        t,
        { collectionId: i } = e,
        a = (0, E.W6)(),
        r = ef(i),
        o =
            ((l = (0, Z.A)($.FYj)),
            !(null == (t = (0, J.NN)(l)) || t.collectionId !== i || (l?.endsAt != null && l.endsAt <= new Date())) &&
                t.showUpsellBlocks),
        c = n.useCallback(
            (e) => {
                let { categorySkuId: l } = e;
                null != l && a.push($.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(l));
            },
            [a],
        ),
        d = n.useMemo(
            () =>
                null == r
                    ? null
                    : {
                          rankedSkuIds: r.heroRanking ?? [],
                          name: r.name,
                          unpublishedAt: r.unpublishedAt,
                          categorySkuId: r.skuId,
                          summary: r.summary,
                          type: y.g.HERO,
                          categoryStoreListingId: r.storeListingId,
                          bannerDisplayConfig: r.heroBannerDisplayConfig,
                          logoDisplayConfig: r.heroLogoDisplayConfig,
                          heroLogoUrl: r.heroLogoUrl,
                          heroBannerUrl: r.heroBannerUrl,
                          heroBannerAnimatedUrl: r.heroBannerAnimatedUrl,
                          heroRiveUrl: r.heroRiveUrl,
                      },
            [r],
        );
    if (null == r) return null;
    let u = null != r.heroBannerUrl || null != r.heroRiveUrl;
    return (0, s.jsx)(M.iM, {
        tab: ea.G2.COLLECTION_INDEX,
        children: (0, s.jsxs)("div", {
            className: eE.kL,
            children: [
                u && null != d
                    ? (0, s.jsxs)(s.Fragment, {
                          children: [
                              (0, s.jsxs)("div", {
                                  className: eE.rz,
                                  children: [
                                      (0, s.jsx)("div", {
                                          className: eE.zn,
                                          children: (0, s.jsx)(eR, { collectionId: i }),
                                      }),
                                      (0, s.jsx)(ej.A, {
                                          heroBlock: d,
                                          isLoading: !1,
                                          tab: ea.G2.COLLECTION_INDEX,
                                          hideButton: !0,
                                          hideCards: !0,
                                      }),
                                  ],
                              }),
                              (0, s.jsx)(ev, { category: r }),
                              o
                                  ? (0, s.jsx)("div", { className: eE.t3, children: (0, s.jsx)(eh, { section: en() }) })
                                  : (0, s.jsx)(eO, { currentCategorySkuId: r.skuId, handleTransition: c }, r.skuId),
                          ],
                      })
                    : (0, s.jsxs)("div", {
                          className: eE.AW,
                          children: [
                              (0, s.jsx)("div", { className: eE.zn, children: (0, s.jsx)(eR, { collectionId: i }) }),
                              (0, s.jsx)("div", { className: eE.$T, children: (0, s.jsx)(q.A, { category: r }) }),
                              (0, s.jsx)(ev, { category: r }),
                              o
                                  ? (0, s.jsx)("div", { className: eE.t3, children: (0, s.jsx)(eh, { section: en() }) })
                                  : (0, s.jsx)(eO, { currentCategorySkuId: r.skuId, handleTransition: c }, r.skuId),
                          ],
                      }),
                (0, s.jsx)(ey, {}),
            ],
        }),
    });
};
var eD = t(415926);
function eF(e) {
    let { scrollerRef: l, children: t } = e,
        { handleScroll: n } = (0, eD.r)(l, ea.G2.COLLECTION_INDEX);
    return (0, s.jsx)(f.Ch, { ref: l, onScroll: n, children: t });
}
let eG = function (e) {
    let { collectionId: l, sessionId: t } = e,
        i = n.useRef(null),
        { selectedTab: a, transitionToTab: r, transitionState: o } = (0, v.oI)(ea.G2.COLLECTION_INDEX);
    (0, A.Wg)(!0);
    let c = (0, _.A)("shop_include_unpublished"),
        { category: d, state: u } = (0, k.A)(l, { includeUnpublished: c, includePricing: !0 }),
        h = d ?? void 0,
        { analyticsLocations: m } = (0, N.lC)(ea.G2.COLLECTION_INDEX);
    return ((0, N.uS)(t, a, h?.name, o, { enabled: null != h }),
    n.useEffect(() => {
        i.current?.scrollTo({ to: 0 });
    }, [l]),
    "loading" !== u && null == h)
        ? (0, s.jsx)(E.rd, { to: $.BVt.COLLECTIBLES_SHOP })
        : h?.isOrbsExclusive === !0
          ? (0, s.jsx)(E.rd, { to: $.BVt.COLLECTIBLES_SHOP_WITH_TAB(ea.G2.ORBS) })
          : null == h
            ? (0, s.jsxs)(s.Fragment, {
                  children: [
                      (0, s.jsx)(O.G, { handleTransition: r, selectedTab: a, selectedCollectionId: l }),
                      (0, s.jsx)(b.Ip, { children: (0, s.jsx)(eB, {}) }),
                  ],
              })
            : (0, s.jsxs)(L.f5, {
                  value: m,
                  children: [
                      (0, s.jsx)(O.G, { handleTransition: r, selectedTab: a, selectedCollectionId: l }),
                      (0, s.jsx)(T.A, { tab: a, handleTransition: r }),
                      (0, s.jsx)(eF, { scrollerRef: i, children: (0, s.jsx)(eP, { collectionId: l }) }),
                  ],
              });
};
var eU = t(460348),
    eM = t(170522);
let eV = (e) => {
    let { tab: l, collectionId: t } = e;
    (0, g.P)(m);
    let i = (0, d.A)(() => (0, r.A)()),
        u = (0, eU.yB)("CollectiblesShop");
    ((0, eU.gB)(u),
        (0, C.pE)(),
        (0, p.A)($.FYj),
        n.useEffect(() => {
            (0, I.rW)();
        }, []),
        n.useEffect(() => {
            (0, c.I)($.BVt.COLLECTIBLES_SHOP);
        }, []));
    let h = n.useMemo(() => ({ sessionId: i }), [i]),
        E = n.useRef(null),
        b = (0, o.Rv)();
    return (0, s.jsx)(x.R9, {
        newValue: h,
        children: (0, s.jsx)("div", {
            className: a()(eM.bx, { [eU.jP]: u }),
            ref: E,
            inert: b,
            tabIndex: -1,
            children:
                null != t && "" !== t
                    ? (0, s.jsx)(eG, { collectionId: t, sessionId: i })
                    : (0, s.jsx)(j.default, { tab: l, sessionId: i, containerRef: E }),
        }),
    });
};
