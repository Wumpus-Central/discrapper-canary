(s.r(l), s.d(l, { default: () => eM }));
var t = s(477900),
    n = s(582128),
    i = s(503698),
    a = s.n(i),
    r = s(115560),
    o = s(192308),
    c = s(944791),
    d = s(444927),
    u = s(840251),
    h = s(688151);
let m = new u.E([], h.$G.COLLECTIBLES_SHOP_OPEN, { location: "collectibles shop open" });
var g = s(611924),
    x = s(744082),
    p = s(634110),
    I = s(371794),
    j = s(857512),
    C = s(821816),
    E = s(806163),
    b = s(95362),
    N = s(516521),
    f = s(688810),
    _ = s(354328),
    L = s(12678),
    v = s(706113),
    k = s(841702),
    A = s(983545),
    O = s(685491),
    T = s(235939);
(s(323874), s(14289), s(35956), s(321073));
var y = s(575593),
    S = s(651162),
    R = s(855986),
    B = s(534514),
    P = s(821609),
    D = s(40474),
    F = s(151869),
    G = s(287809),
    U = s(129230),
    M = s(161918),
    V = s(945810);
let H = { enabled: !1 },
    w = (0, V.mj)({
        name: "2026-10-shop-twelve-days-promo",
        kind: "user",
        defaultConfig: H,
        variations: { 0: H, 1: { enabled: !0 } },
    });
var X = s(511265),
    W = s(304210),
    K = s(350172),
    Y = s(730202),
    z = s(510801),
    $ = s(652215),
    Z = s(223311),
    J = s(65238),
    q = s(812760),
    Q = s(442036),
    ee = s(87719),
    el = s(792996);
let es =
    "https://cdn.discordapp.com/media/v1/collectibles-shop/a0219393f8d994dde33eabd28a379109aaafc054267f2f05a247d605406a8b1c";
function et() {
    (0, ee.x)();
}
function en() {
    let e = el.intl.string(el.t.jVcuVY);
    return {
        title: el.intl.string(el.t.IXKfvy),
        blocks: [
            { id: "gift_nitro_deco", title: el.intl.string(el.t["snV+8b"]), assetUrl: es, ctaText: e, onCtaClick: et },
            { id: "orbs_back_games", title: el.intl.string(el.t.esVpAG), assetUrl: es, ctaText: e, onCtaClick: et },
            { id: "nitro_orbs_items", title: el.intl.string(el.t["0OiA1g"]), assetUrl: es, ctaText: e, onCtaClick: et },
        ],
    };
}
var ei = s(758836),
    ea = s(521420);
function er(e) {
    return e.id;
}
function eo(e) {
    let { block: l, listItemProps: s } = e,
        i = (0, j.uM)(),
        a = n.useId(),
        { onCtaClick: r } = l,
        o = n.useCallback(() => {
            (U.default.track($.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                collectibles_shop_session_id: i?.sessionId,
                page_type: ei.G2.COLLECTION_INDEX,
                page_section: i?.pageSection,
                page_category: i?.pageCategory,
                tile_type: "MARKETING_BLOCK",
                tile_position: String(i?.tilePosition),
                cta_name: "Take me there button",
            }),
                r());
        }, [i?.sessionId, i?.pageSection, i?.pageCategory, i?.tilePosition, r]);
    return (0, t.jsxs)("div", {
        className: ea.Nr,
        style: { backgroundImage: `url(${l.assetUrl})` },
        children: [
            (0, t.jsx)("div", {
                className: ea.kz,
                id: a,
                children: (0, t.jsx)(B.D, {
                    variant: "heading-lg/semibold",
                    color: "text-overlay-light",
                    children: l.title,
                }),
            }),
            (0, t.jsx)(P.$, { ...s, variant: "overlay-primary", text: l.ctaText, "aria-describedby": a, onClick: o }),
        ],
    });
}
function ec(e) {
    let { block: l, index: s, listItemProps: i } = e,
        a = n.useMemo(
            () => ({
                categoryPosition: s,
                pageCategory: l.id,
                pageSection: "collection_marketing_blocks",
                tilePosition: s,
            }),
            [l.id, s],
        );
    return (0, t.jsx)(j.R9, { newValue: a, children: (0, t.jsx)(eo, { block: l, listItemProps: i }) });
}
function ed(e, l, s) {
    return (0, t.jsx)(ec, { block: e, index: s, listItemProps: l });
}
function eu(e) {
    let { section: l } = e;
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsx)(B.D, { variant: "heading-lg/semibold", className: ea.R_, children: l.title }),
            (0, t.jsx)(F.A, { gap: "xl", scrollStep: "item", items: l.blocks, getItemKey: er, renderItem: ed }),
        ],
    });
}
var eh = s(987421),
    em = s(484469),
    eg = s(834730),
    ex = s(683421);
function ep(e) {
    let { day: l, skuId: s, tilePosition: n, aspectRatio: i, className: r } = e;
    return (0, t.jsxs)("li", {
        className: a()(ex.Vs, ex.Ml, r),
        style: { "--custom-calendar-tile-aspect-ratio": i },
        children: [
            (0, t.jsx)(j.R9, { newValue: { tilePosition: n }, children: (0, t.jsx)(eh.A, { skuId: s }) }),
            (0, t.jsx)(eg.E, {
                className: ex.vg,
                variant: "heading-sm/medium",
                color: "none",
                tag: "span",
                children: l,
            }),
        ],
    });
}
var eI = s(196231),
    ej = s(353448),
    eC = s(146053);
function eE(e) {
    return e.skuId;
}
function eb(e) {
    let l = (0, _.A)("shop_include_unpublished"),
        { category: s } = (0, v.A)(e, { includeUnpublished: l, includePricing: !0 });
    return s ?? void 0;
}
function eN(e) {
    return e.type === y.R.VARIANTS_GROUP &&
        null != e.variants &&
        e.variants.length > 0 &&
        e.variants.every((e) => e.type === y.R.PROFILE_EFFECT)
        ? y.R.PROFILE_EFFECT
        : e.type;
}
let ef = { aspectRatio: "1 / 1" },
    e_ = {
        [y.R.PROFILE_EFFECT]: { className: eC.I5, aspectRatio: "1 / 2" },
        [y.R.BUNDLE]: { className: eC.kP, aspectRatio: "2 / 1" },
    };
function eL(e) {
    let { products: l } = e;
    return (0, t.jsx)("div", {
        className: eC.fr,
        children: l.map((e, l) => {
            let { className: s, aspectRatio: n } = e_[eN(e)] ?? ef;
            return (0, t.jsx)(
                j.R9,
                {
                    newValue: { tilePosition: l },
                    children: (0, t.jsx)(eh.A, { skuId: e.skuId, cardClassName: s, aspectRatio: n }),
                },
                e.skuId,
            );
        }),
    });
}
function ev(e) {
    let { products: l } = e;
    return (0, t.jsx)("div", {
        className: eC.aD,
        children: (0, t.jsx)("ol", {
            className: a()(eC.fr, eC.ZP),
            children: l.map((e, s) => {
                if (e?.skuId == null) return null;
                let n = s + 1,
                    i = s === l.length - 1,
                    r = i ? ef : (e_[eN(e)] ?? ef);
                return (0, t.jsx)(
                    ep,
                    {
                        day: n,
                        skuId: e.skuId,
                        tilePosition: s,
                        aspectRatio: r.aspectRatio,
                        className: a()(eC.Pu, r.className, { [eC.pr]: i }),
                    },
                    n,
                );
            }),
        }),
    });
}
function ek(e) {
    let { category: l } = e;
    (0, E.zy)();
    let s = w.useConfig({ location: "collection_index_page" }).enabled && !1,
        n = (0, R.bG)([G.default], () => G.default.getCurrentUser()),
        i = (0, X.p)(),
        a = null != (0, W.ty)(l.skuId),
        r = i(l.products);
    return s || (null != n && 0 !== r.length)
        ? (0, t.jsxs)("div", {
              className: eC.hd,
              children: [
                  a && (0, t.jsx)(Q.A, { className: eC.aQ }),
                  s ? (0, t.jsx)(ev, { products: l.products }) : (0, t.jsx)(eL, { products: r }),
              ],
          })
        : null;
}
function eA(e) {
    let { currentCategorySkuId: l, handleTransition: s } = e,
        { categories: i } = (function (e) {
            let { anchorCollectionId: l, limit: s } = e,
                t = n.useMemo(() => ({ applicationId: $.FYj, anchorCollectionId: l ?? "", limit: s }), [l, s]),
                i = null != l && "" !== l,
                a = (0, K.HX)(t);
            n.useEffect(() => {
                i && (0, K.Su)(t);
            }, [i, t]);
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
                !ei.MS.some((l) => {
                    let { categorySkuId: s } = l;
                    return s === e.skuId;
                }),
            [l],
        ),
        r = n.useMemo(() => i.filter(a).slice(0, 8), [i, a]);
    return 0 === r.length
        ? null
        : (0, t.jsxs)("div", {
              className: eC.t3,
              children: [
                  (0, t.jsx)("div", {
                      className: eC.bb,
                      children: (0, t.jsx)(B.D, {
                          variant: "heading-lg/semibold",
                          children: el.intl.string(el.t.EhRZ9o),
                      }),
                  }),
                  (0, t.jsx)(
                      F.A,
                      {
                          gap: "xl",
                          scrollStep: "item",
                          items: r,
                          getItemKey: eE,
                          renderItem: (e, l, n) =>
                              (0, t.jsx)(eO, { category: e, index: n, handleTransition: s, listItemProps: l }, e.skuId),
                      },
                      l,
                  ),
              ],
          });
}
function eO(e) {
    let { category: l, index: s, handleTransition: n, listItemProps: i } = e;
    return (0, t.jsx)(j.R9, {
        newValue: { categoryPosition: s, pageCategory: l.name, pageSection: "related_drops", tilePosition: s },
        children: (0, t.jsx)("div", {
            className: eC.EU,
            children: (0, t.jsx)(eI.S, {
                category: l,
                handleTransition: n,
                pageType: ei.G2.COLLECTION_INDEX,
                className: eC.vK,
                listItemProps: i,
            }),
        }),
    });
}
let eT = [
    { tab: ei.G2.AVATAR_DECORATIONS, label: () => el.intl.string(el.t.dRZYNE) },
    { tab: ei.G2.PROFILE_EFFECTS, label: () => el.intl.string(el.t["1cNjtx"]) },
    { tab: ei.G2.NAMEPLATES, label: () => el.intl.string(el.t.V68Fqz) },
    { tab: ei.G2.PROFILE_FRAMES, label: () => el.intl.string(el.t.ecTJkR) },
    { tab: ei.G2.BUNDLES, label: () => el.intl.string(el.t.FYFpps) },
];
function ey() {
    let e = (0, E.W6)();
    return (0, t.jsxs)("div", {
        className: eC.nb,
        children: [
            (0, t.jsx)(B.D, { variant: "heading-sm/semibold", children: el.intl.string(el.t.Yr70c4) }),
            (0, t.jsx)("div", {
                className: eC.J2,
                children: eT.map((l) => {
                    let { tab: s, label: n } = l;
                    return (0, t.jsx)(
                        P.$,
                        { variant: "secondary", text: n(), onClick: () => e.push($.BVt.COLLECTIBLES_SHOP_WITH_TAB(s)) },
                        s,
                    );
                }),
            }),
        ],
    });
}
function eS(e) {
    let { collectionId: l } = e,
        s = (0, E.W6)(),
        i = (0, j.uM)(),
        r = eb(l)?.name,
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
                        page_type: ei.G2.COLLECTION_INDEX,
                        page_category: r,
                        cta_name: "collection breadcrumb shop all",
                    }),
                    s.push($.BVt.COLLECTIBLES_SHOP_WITH_TAB(ei.G2.CATALOG)));
            },
            [s, i?.sessionId, l, r],
        ),
        d = n.useCallback(
            (e, l) =>
                (0, t.jsxs)("span", {
                    className: a()(eC.u, { [eC.kG]: l }),
                    children: [e.label, !l && (0, t.jsx)("span", { className: eC.Tl, children: "/" })],
                }),
            [],
        );
    return (0, t.jsx)(D.A, {
        className: eC.C2,
        separatorClassName: eC.Lw,
        breadcrumbs: o,
        activeId: "collection",
        onBreadcrumbClick: c,
        renderCustomBreadcrumb: d,
    });
}
function eR() {
    return (0, t.jsxs)("div", {
        className: eC.kL,
        children: [
            (0, t.jsx)(ej.A, { isLoading: !0, hideButton: !0, hideCards: !0, tab: ei.G2.COLLECTION_INDEX }),
            (0, t.jsx)("div", {
                className: eC.hd,
                children: (0, t.jsx)("div", {
                    className: eC.fr,
                    children: Array.from({ length: 8 }, (e, l) => (0, t.jsx)(em.A, {}, l)),
                }),
            }),
            (0, t.jsxs)("div", {
                className: eC.t3,
                children: [
                    (0, t.jsx)("div", { className: eC.bb, children: (0, t.jsx)("div", { className: eC.M$ }) }),
                    (0, t.jsxs)("div", {
                        className: eC.A9,
                        children: [(0, t.jsx)("div", { className: eC.nl }), (0, t.jsx)("div", { className: eC.nl })],
                    }),
                ],
            }),
        ],
    });
}
let eB = function (e) {
    let l,
        s,
        { collectionId: i } = e,
        a = (0, E.W6)(),
        r = eb(i),
        o =
            ((l = (0, Z.A)($.FYj)),
            !(null == (s = (0, J.NN)(l)) || s.collectionId !== i || (l?.endsAt != null && l.endsAt <= new Date())) &&
                s.showUpsellBlocks),
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
                          type: S.g.HERO,
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
    return (0, t.jsx)(M.iM, {
        tab: ei.G2.COLLECTION_INDEX,
        children: (0, t.jsxs)("div", {
            className: eC.kL,
            children: [
                u && null != d
                    ? (0, t.jsxs)(t.Fragment, {
                          children: [
                              (0, t.jsxs)("div", {
                                  className: eC.rz,
                                  children: [
                                      (0, t.jsx)("div", {
                                          className: eC.zn,
                                          children: (0, t.jsx)(eS, { collectionId: i }),
                                      }),
                                      (0, t.jsx)(ej.A, {
                                          heroBlock: d,
                                          isLoading: !1,
                                          tab: ei.G2.COLLECTION_INDEX,
                                          hideButton: !0,
                                          hideCards: !0,
                                      }),
                                  ],
                              }),
                              (0, t.jsx)(ek, { category: r }),
                              o
                                  ? (0, t.jsx)("div", { className: eC.t3, children: (0, t.jsx)(eu, { section: en() }) })
                                  : (0, t.jsx)(eA, { currentCategorySkuId: r.skuId, handleTransition: c }, r.skuId),
                          ],
                      })
                    : (0, t.jsxs)("div", {
                          className: eC.AW,
                          children: [
                              (0, t.jsx)("div", { className: eC.zn, children: (0, t.jsx)(eS, { collectionId: i }) }),
                              (0, t.jsx)("div", { className: eC.$T, children: (0, t.jsx)(q.A, { category: r }) }),
                              (0, t.jsx)(ek, { category: r }),
                              o
                                  ? (0, t.jsx)("div", { className: eC.t3, children: (0, t.jsx)(eu, { section: en() }) })
                                  : (0, t.jsx)(eA, { currentCategorySkuId: r.skuId, handleTransition: c }, r.skuId),
                          ],
                      }),
                (0, t.jsx)(ey, {}),
            ],
        }),
    });
};
var eP = s(415926);
function eD(e) {
    let { scrollerRef: l, children: s } = e,
        { handleScroll: n } = (0, eP.r)(l, ei.G2.COLLECTION_INDEX);
    return (0, t.jsx)(N.Ch, { ref: l, onScroll: n, children: s });
}
let eF = function (e) {
    let { collectionId: l, sessionId: s } = e,
        i = n.useRef(null),
        { selectedTab: a, transitionToTab: r, transitionState: o } = (0, A.oI)(ei.G2.COLLECTION_INDEX);
    (0, k.Wg)(!0);
    let c = (0, _.A)("shop_include_unpublished"),
        { category: d, state: u } = (0, v.A)(l, { includeUnpublished: c, includePricing: !0 }),
        h = d ?? void 0,
        { analyticsLocations: m } = (0, L.lC)(ei.G2.COLLECTION_INDEX);
    return ((0, L.uS)(s, a, h?.name, o, { enabled: null != h }),
    n.useEffect(() => {
        i.current?.scrollTo({ to: 0 });
    }, [l]),
    "loading" !== u && null == h)
        ? (0, t.jsx)(E.rd, { to: $.BVt.COLLECTIBLES_SHOP })
        : h?.isOrbsExclusive === !0
          ? (0, t.jsx)(E.rd, { to: $.BVt.COLLECTIBLES_SHOP_WITH_TAB(ei.G2.ORBS) })
          : null == h
            ? (0, t.jsxs)(t.Fragment, {
                  children: [
                      (0, t.jsx)(O.G, { handleTransition: r, selectedTab: a, selectedCollectionId: l }),
                      (0, t.jsx)(b.Ip, { children: (0, t.jsx)(eR, {}) }),
                  ],
              })
            : (0, t.jsxs)(f.f5, {
                  value: m,
                  children: [
                      (0, t.jsx)(O.G, { handleTransition: r, selectedTab: a, selectedCollectionId: l }),
                      (0, t.jsx)(T.A, { tab: a, handleTransition: r }),
                      (0, t.jsx)(eD, { scrollerRef: i, children: (0, t.jsx)(eB, { collectionId: l }) }),
                  ],
              });
};
var eG = s(460348),
    eU = s(170522);
let eM = (e) => {
    let { tab: l, collectionId: s } = e;
    (0, g.P)(m);
    let i = (0, d.A)(() => (0, r.A)()),
        u = (0, eG.yB)("CollectiblesShop");
    ((0, eG.gB)(u),
        (0, p.pE)(),
        (0, x.A)($.FYj),
        n.useEffect(() => {
            (0, I.rW)();
        }, []),
        n.useEffect(() => {
            (0, c.I)($.BVt.COLLECTIBLES_SHOP);
        }, []));
    let h = n.useMemo(() => ({ sessionId: i }), [i]),
        E = n.useRef(null),
        b = (0, o.Rv)();
    return (0, t.jsx)(j.R9, {
        newValue: h,
        children: (0, t.jsx)("div", {
            className: a()(eU.bx, { [eG.jP]: u }),
            ref: E,
            inert: b,
            tabIndex: -1,
            children:
                null != s && "" !== s
                    ? (0, t.jsx)(eF, { collectionId: s, sessionId: i })
                    : (0, t.jsx)(C.default, { tab: l, sessionId: i, containerRef: E }),
        }),
    });
};
