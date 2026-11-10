(t.r(l), t.d(l, { default: () => eW }));
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
var C = t(611924),
    g = t(744082),
    I = t(634110),
    x = t(371794),
    p = t(857512),
    j = t(662829),
    E = t(821816),
    b = t(806163),
    f = t(95362),
    L = t(516521),
    _ = t(688810),
    N = t(354328),
    k = t(12678),
    A = t(706113),
    O = t(841702),
    T = t(983545),
    v = t(685491),
    S = t(235939);
(t(323874), t(14289), t(35956), t(321073));
var y = t(575593),
    R = t(651162),
    B = t(855986),
    P = t(534514),
    D = t(821609),
    G = t(40474),
    F = t(151869),
    U = t(287809),
    M = t(129230),
    V = t(161918),
    w = t(945810);
let H = { enabled: !1 },
    X = (0, w.mj)({
        name: "2026-10-shop-twelve-days-promo",
        kind: "user",
        defaultConfig: H,
        variations: { 0: H, 1: { enabled: !0 } },
    });
var W = t(511265),
    K = t(304210),
    Y = t(350172),
    z = t(730202),
    $ = t(510801),
    Z = t(652215),
    J = t(223311),
    q = t(65238),
    Q = t(812760),
    ee = t(442036),
    el = t(87719),
    et = t(792996);
let es =
    "https://cdn.discordapp.com/media/v1/collectibles-shop/a0219393f8d994dde33eabd28a379109aaafc054267f2f05a247d605406a8b1c";
function en() {
    (0, el.x)();
}
function ei() {
    let e = et.intl.string(et.t.jVcuVY);
    return {
        title: et.intl.string(et.t.IXKfvy),
        blocks: [
            { id: "gift_nitro_deco", title: et.intl.string(et.t["snV+8b"]), assetUrl: es, ctaText: e, onCtaClick: en },
            { id: "orbs_back_games", title: et.intl.string(et.t.esVpAG), assetUrl: es, ctaText: e, onCtaClick: en },
            { id: "nitro_orbs_items", title: et.intl.string(et.t["0OiA1g"]), assetUrl: es, ctaText: e, onCtaClick: en },
        ],
    };
}
var ea = t(454688),
    er = t(758836),
    eo = t(521420);
function ec(e) {
    return e.id;
}
function ed(e) {
    let { block: l, listItemProps: t } = e,
        i = (0, p.uM)(),
        { onCtaClick: a } = l,
        r = n.useCallback(
            (e) => {
                (M.default.track(Z.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: i?.sessionId,
                    page_type: er.G2.COLLECTION_INDEX,
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
    return (0, s.jsx)(ea.Ay, {
        layout: ea.uf.CAROUSEL,
        backgroundImageUrl: l.assetUrl,
        title: { text: l.title, variant: "heading-lg/semibold", className: eo.D },
        ctaText: l.ctaText,
        onButtonClick: o,
        onBlockClick: c,
        listItemProps: t,
    });
}
function eu(e) {
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
    return (0, s.jsx)(p.R9, { newValue: a, children: (0, s.jsx)(ed, { block: l, listItemProps: i }) });
}
function eh(e, l, t) {
    return (0, s.jsx)(eu, { block: e, index: t, listItemProps: l });
}
function em(e) {
    let { section: l } = e;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(P.D, { variant: "heading-lg/semibold", className: eo.R, children: l.title }),
            (0, s.jsx)(F.A, { gap: "xl", scrollStep: "item", items: l.blocks, getItemKey: ec, renderItem: eh }),
        ],
    });
}
var eC = t(987421),
    eg = t(484469),
    eI = t(834730),
    ex = t(683421);
function ep(e) {
    let { day: l, skuId: t, tilePosition: n, aspectRatio: i, className: r } = e;
    return (0, s.jsxs)("li", {
        className: a()(ex.Vs, ex.Ml, r),
        style: { "--custom-calendar-tile-aspect-ratio": i },
        children: [
            (0, s.jsx)(p.R9, { newValue: { tilePosition: n }, children: (0, s.jsx)(eC.A, { skuId: t }) }),
            (0, s.jsx)(eI.E, {
                className: ex.vg,
                variant: "heading-sm/medium",
                color: "none",
                tag: "span",
                children: l,
            }),
        ],
    });
}
var ej = t(196231),
    eE = t(64018),
    eb = t(215894),
    ef = t(785941);
let eL = (e) => {
    let { heroBlock: l, handleTransition: t } = e,
        { collectionSale: n, handleSaleEnd: i } = (0, eb.A)(l.categorySkuId);
    return null != n
        ? (0, s.jsx)(ef.A, {
              heroBlock: l,
              collectionSale: n,
              handleTransition: t,
              tab: er.G2.COLLECTION_INDEX,
              onSaleEnd: i,
              hideCards: !0,
              hideCountdownCTA: !0,
          })
        : (0, s.jsx)(eE.A, { heroBlock: l, isLoading: !1, tab: er.G2.COLLECTION_INDEX, hideButton: !0, hideCards: !0 });
};
var e_ = t(146053);
function eN(e) {
    return e.skuId;
}
function ek(e) {
    let l = (0, N.A)("shop_include_unpublished"),
        { category: t } = (0, A.A)(e, { includeUnpublished: l, includePricing: !0 });
    return t ?? void 0;
}
function eA(e) {
    return e.type === y.R.VARIANTS_GROUP &&
        null != e.variants &&
        e.variants.length > 0 &&
        e.variants.every((e) => e.type === y.R.PROFILE_EFFECT)
        ? y.R.PROFILE_EFFECT
        : e.type;
}
let eO = { aspectRatio: "1 / 1" },
    eT = {
        [y.R.PROFILE_EFFECT]: { className: e_.I5, aspectRatio: "1 / 2" },
        [y.R.BUNDLE]: { className: e_.kP, aspectRatio: "2 / 1" },
    };
function ev(e) {
    let { products: l } = e;
    return (0, s.jsx)("div", {
        className: e_.fr,
        children: l.map((e, l) => {
            let { className: t, aspectRatio: n } = eT[eA(e)] ?? eO;
            return (0, s.jsx)(
                p.R9,
                {
                    newValue: { tilePosition: l },
                    children: (0, s.jsx)(eC.A, { skuId: e.skuId, cardClassName: t, aspectRatio: n }),
                },
                e.skuId,
            );
        }),
    });
}
function eS(e) {
    let { products: l } = e;
    return (0, s.jsx)("div", {
        className: e_.aD,
        children: (0, s.jsx)("ol", {
            className: a()(e_.fr, e_.ZP),
            children: l.map((e, t) => {
                if (e?.skuId == null) return null;
                let n = t + 1,
                    i = t === l.length - 1,
                    r = i ? eO : (eT[eA(e)] ?? eO);
                return (0, s.jsx)(
                    ep,
                    {
                        day: n,
                        skuId: e.skuId,
                        tilePosition: t,
                        aspectRatio: r.aspectRatio,
                        className: a()(e_.Pu, r.className, { [e_.pr]: i }),
                    },
                    n,
                );
            }),
        }),
    });
}
function ey(e) {
    let { category: l } = e;
    (0, b.zy)();
    let t = X.useConfig({ location: "collection_index_page" }).enabled && !1,
        n = (0, B.bG)([U.default], () => U.default.getCurrentUser()),
        i = (0, W.p)(),
        a = null != (0, K.ty)(l.skuId),
        r = i(l.products);
    return t || (null != n && 0 !== r.length)
        ? (0, s.jsxs)("div", {
              className: e_.hd,
              children: [
                  a && (0, s.jsx)(ee.A, { className: e_.aQ }),
                  t ? (0, s.jsx)(eS, { products: l.products }) : (0, s.jsx)(ev, { products: r }),
              ],
          })
        : null;
}
function eR(e) {
    let { currentCategorySkuId: l, handleTransition: t } = e,
        { categories: i } = (function (e) {
            let { anchorCollectionId: l, limit: t } = e,
                s = n.useMemo(() => ({ applicationId: Z.FYj, anchorCollectionId: l ?? "", limit: t }), [l, t]),
                i = null != l && "" !== l,
                a = (0, Y.HX)(s);
            n.useEffect(() => {
                i && (0, Y.Su)(s);
            }, [i, s]);
            let { collectionIds: r, fetchState: o } = (0, B.cf)(
                    [z.A],
                    () => ({
                        collectionIds: z.A.getCollectionsAfterIds(a),
                        fetchState: z.A.getCollectionsAfterFetchState(a),
                    }),
                    [a],
                ),
                c = n.useMemo(() => (i ? (r ?? []) : []), [i, r]),
                d = c.join(","),
                u = (0, B.cf)(
                    [z.A],
                    () => {
                        let e = {};
                        for (let l of c) e[l] = z.A.getCollectionOrSummary(l);
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
                            .map((e) => $.A.fromStorefrontCollectionRecord(e)),
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
                !er.MS.some((l) => {
                    let { categorySkuId: t } = l;
                    return t === e.skuId;
                }),
            [l],
        ),
        r = n.useMemo(() => i.filter(a).slice(0, 8), [i, a]);
    return 0 === r.length
        ? null
        : (0, s.jsxs)("div", {
              className: e_.t3,
              children: [
                  (0, s.jsx)("div", {
                      className: e_.bb,
                      children: (0, s.jsx)(P.D, {
                          variant: "heading-lg/semibold",
                          children: et.intl.string(et.t.EhRZ9o),
                      }),
                  }),
                  (0, s.jsx)(
                      F.A,
                      {
                          gap: "xl",
                          scrollStep: "item",
                          items: r,
                          getItemKey: eN,
                          renderItem: (e, l, n) =>
                              (0, s.jsx)(eB, { category: e, index: n, handleTransition: t, listItemProps: l }, e.skuId),
                      },
                      l,
                  ),
              ],
          });
}
function eB(e) {
    let { category: l, index: t, handleTransition: n, listItemProps: i } = e;
    return (0, s.jsx)(p.R9, {
        newValue: { categoryPosition: t, pageCategory: l.name, pageSection: "related_drops", tilePosition: t },
        children: (0, s.jsx)(ej.S, {
            layout: ea.uf.CAROUSEL,
            category: l,
            handleTransition: n,
            pageType: er.G2.COLLECTION_INDEX,
            listItemProps: i,
        }),
    });
}
let eP = [
    { tab: er.G2.AVATAR_DECORATIONS, label: () => et.intl.string(et.t.dRZYNE) },
    { tab: er.G2.PROFILE_EFFECTS, label: () => et.intl.string(et.t["1cNjtx"]) },
    { tab: er.G2.NAMEPLATES, label: () => et.intl.string(et.t.V68Fqz) },
    { tab: er.G2.PROFILE_FRAMES, label: () => et.intl.string(et.t.ecTJkR) },
    { tab: er.G2.BUNDLES, label: () => et.intl.string(et.t.FYFpps) },
];
function eD() {
    let e = (0, b.W6)();
    return (0, s.jsxs)("div", {
        className: e_.nb,
        children: [
            (0, s.jsx)(P.D, { variant: "heading-sm/semibold", children: et.intl.string(et.t.Yr70c4) }),
            (0, s.jsx)("div", {
                className: e_.J2,
                children: eP.map((l) => {
                    let { tab: t, label: n } = l;
                    return (0, s.jsx)(
                        D.$,
                        { variant: "secondary", text: n(), onClick: () => e.push(Z.BVt.COLLECTIBLES_SHOP_WITH_TAB(t)) },
                        t,
                    );
                }),
            }),
        ],
    });
}
function eG(e) {
    let { collectionId: l } = e,
        t = (0, b.W6)(),
        i = (0, p.uM)(),
        r = ek(l)?.name,
        o = n.useMemo(
            () => [
                { id: "shop_all", label: et.intl.string(et.t.xFcotU) },
                { id: "collection", label: r ?? "" },
            ],
            [r],
        ),
        c = n.useCallback(
            (e) => {
                "shop_all" === e.id &&
                    (M.default.track(Z.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: i?.sessionId,
                        sku_id: l,
                        page_type: er.G2.COLLECTION_INDEX,
                        page_category: r,
                        cta_name: "collection breadcrumb shop all",
                    }),
                    t.push(Z.BVt.COLLECTIBLES_SHOP_WITH_TAB(er.G2.CATALOG)));
            },
            [t, i?.sessionId, l, r],
        ),
        d = n.useCallback(
            (e, l) =>
                (0, s.jsxs)("span", {
                    className: a()(e_.u, { [e_.kG]: l }),
                    children: [e.label, !l && (0, s.jsx)("span", { className: e_.Tl, children: "/" })],
                }),
            [],
        );
    return (0, s.jsx)(G.A, {
        className: e_.C2,
        separatorClassName: e_.Lw,
        breadcrumbs: o,
        activeId: "collection",
        onBreadcrumbClick: c,
        renderCustomBreadcrumb: d,
    });
}
function eF() {
    return (0, s.jsxs)("div", {
        className: e_.kL,
        children: [
            (0, s.jsx)(eE.A, { isLoading: !0, hideButton: !0, hideCards: !0, tab: er.G2.COLLECTION_INDEX }),
            (0, s.jsx)("div", {
                className: e_.hd,
                children: (0, s.jsx)("div", {
                    className: e_.fr,
                    children: Array.from({ length: 8 }, (e, l) => (0, s.jsx)(eg.A, {}, l)),
                }),
            }),
            (0, s.jsxs)("div", {
                className: e_.t3,
                children: [
                    (0, s.jsx)("div", { className: e_.bb, children: (0, s.jsx)("div", { className: e_.M$ }) }),
                    (0, s.jsxs)("div", { className: e_.A9, children: [(0, s.jsx)(ea.R3, {}), (0, s.jsx)(ea.R3, {})] }),
                ],
            }),
        ],
    });
}
let eU = function (e) {
    let l,
        t,
        { collectionId: i } = e,
        a = (0, b.W6)(),
        r = ek(i),
        o =
            ((l = (0, J.A)(Z.FYj)),
            !(null == (t = (0, q.NN)(l)) || t.collectionId !== i || (l?.endsAt != null && l.endsAt <= new Date())) &&
                t.showUpsellBlocks),
        c = n.useCallback(
            (e) => {
                let { categorySkuId: l } = e;
                null != l && a.push(Z.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(l));
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
                          type: R.g.HERO,
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
    return (0, s.jsx)(V.iM, {
        tab: er.G2.COLLECTION_INDEX,
        children: (0, s.jsxs)("div", {
            className: e_.kL,
            children: [
                u && null != d
                    ? (0, s.jsxs)(s.Fragment, {
                          children: [
                              (0, s.jsxs)("div", {
                                  className: e_.rz,
                                  children: [
                                      (0, s.jsx)("div", {
                                          className: e_.zn,
                                          children: (0, s.jsx)(eG, { collectionId: i }),
                                      }),
                                      (0, s.jsx)(eL, { heroBlock: d, handleTransition: c }),
                                  ],
                              }),
                              (0, s.jsx)(ey, { category: r }),
                              o
                                  ? (0, s.jsx)("div", { className: e_.t3, children: (0, s.jsx)(em, { section: ei() }) })
                                  : (0, s.jsx)(eR, { currentCategorySkuId: r.skuId, handleTransition: c }, r.skuId),
                          ],
                      })
                    : (0, s.jsxs)("div", {
                          className: e_.AW,
                          children: [
                              (0, s.jsx)("div", { className: e_.zn, children: (0, s.jsx)(eG, { collectionId: i }) }),
                              (0, s.jsx)("div", { className: e_.$T, children: (0, s.jsx)(Q.A, { category: r }) }),
                              (0, s.jsx)(ey, { category: r }),
                              o
                                  ? (0, s.jsx)("div", { className: e_.t3, children: (0, s.jsx)(em, { section: ei() }) })
                                  : (0, s.jsx)(eR, { currentCategorySkuId: r.skuId, handleTransition: c }, r.skuId),
                          ],
                      }),
                (0, s.jsx)(eD, {}),
            ],
        }),
    });
};
var eM = t(415926);
function eV(e) {
    let { scrollerRef: l, children: t } = e,
        { handleScroll: n } = (0, eM.r)(l, er.G2.COLLECTION_INDEX);
    return (0, s.jsx)(L.Ch, { ref: l, onScroll: n, children: t });
}
let ew = function (e) {
    let { collectionId: l, sessionId: t } = e,
        i = n.useRef(null),
        { selectedTab: a, transitionToTab: r, transitionState: o } = (0, T.oI)(er.G2.COLLECTION_INDEX);
    (0, O.Wg)(!0);
    let c = (0, N.A)("shop_include_unpublished"),
        { category: d, state: u } = (0, A.A)(l, { includeUnpublished: c, includePricing: !0 }),
        h = d ?? void 0,
        { analyticsLocations: m } = (0, k.lC)(er.G2.COLLECTION_INDEX);
    return ((0, k.uS)(t, a, h?.name, o, { enabled: null != h }),
    n.useEffect(() => {
        i.current?.scrollTo({ to: 0 });
    }, [l]),
    "loading" !== u && null == h)
        ? (0, s.jsx)(b.rd, { to: Z.BVt.COLLECTIBLES_SHOP })
        : h?.isOrbsExclusive === !0
          ? (0, s.jsx)(b.rd, { to: Z.BVt.COLLECTIBLES_SHOP_WITH_TAB(er.G2.ORBS) })
          : null == h
            ? (0, s.jsxs)(s.Fragment, {
                  children: [
                      (0, s.jsx)(v.G, { handleTransition: r, selectedTab: a, selectedCollectionId: l }),
                      (0, s.jsx)(f.Ip, { children: (0, s.jsx)(eF, {}) }),
                  ],
              })
            : (0, s.jsxs)(_.f5, {
                  value: m,
                  children: [
                      (0, s.jsx)(v.G, { handleTransition: r, selectedTab: a, selectedCollectionId: l }),
                      (0, s.jsx)(S.A, { tab: a, handleTransition: r }),
                      (0, s.jsx)(eV, { scrollerRef: i, children: (0, s.jsx)(eU, { collectionId: l }) }),
                  ],
              });
};
var eH = t(460348),
    eX = t(170522);
let eW = (e) => {
    let { tab: l, collectionId: t } = e;
    (0, C.P)(m);
    let i = (0, d.A)(() => (0, r.A)()),
        u = (0, eH.yB)("CollectiblesShop");
    ((0, eH.gB)(u),
        (0, I.pE)(),
        (0, j.X_)(),
        (0, g.A)(Z.FYj),
        n.useEffect(() => {
            (0, x.rW)();
        }, []),
        n.useEffect(() => {
            (0, c.I)(Z.BVt.COLLECTIBLES_SHOP);
        }, []));
    let h = n.useMemo(() => ({ sessionId: i }), [i]),
        b = n.useRef(null),
        f = (0, o.Rv)();
    return (0, s.jsx)(p.R9, {
        newValue: h,
        children: (0, s.jsx)("div", {
            className: a()(eX.bx, { [eH.jP]: u }),
            ref: b,
            inert: f,
            tabIndex: -1,
            children:
                null != t && "" !== t
                    ? (0, s.jsx)(ew, { collectionId: t, sessionId: i })
                    : (0, s.jsx)(E.default, { tab: l, sessionId: i, containerRef: b }),
        }),
    });
};
