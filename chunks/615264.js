(s.r(l), s.d(l, { default: () => eO }));
var n = s(477900),
    t = s(582128),
    a = s(503698),
    r = s.n(a),
    i = s(115560),
    c = s(192308),
    o = s(944791),
    d = s(444927),
    u = s(840251),
    h = s(688151);
let m = new u.E([], h.$G.COLLECTIBLES_SHOP_OPEN, { location: "collectibles shop open" });
var I = s(611924),
    x = s(744082),
    j = s(634110),
    C = s(371794),
    p = s(440938),
    E = s(821816),
    g = s(806163),
    L = s(95362),
    N = s(516521),
    f = s(688810),
    b = s(354328),
    v = s(12678),
    _ = s(706113),
    A = s(841702),
    O = s(983545),
    T = s(685491),
    k = s(235939);
(s(323874), s(14289), s(35956), s(321073));
var R = s(575593),
    S = s(651162),
    y = s(855986),
    B = s(534514),
    P = s(821609),
    F = s(40474),
    G = s(151869),
    D = s(287809),
    U = s(129230),
    M = s(161918),
    H = s(945810);
let V = { enabled: !1 },
    w = (0, H.mj)({
        name: "2026-10-shop-twelve-days-promo",
        kind: "user",
        defaultConfig: V,
        variations: { 0: V, 1: { enabled: !0 } },
    });
var W = s(511265),
    X = s(304210),
    z = s(350172),
    Y = s(730202),
    $ = s(510801),
    K = s(652215),
    Z = s(812760),
    J = s(442036),
    q = s(987421),
    Q = s(484469),
    ee = s(834730),
    el = s(683421);
function es(e) {
    let { day: l, skuId: s, tilePosition: t, aspectRatio: a, className: i } = e;
    return (0, n.jsxs)("li", {
        className: r()(el.Vs, el.Ml, i),
        style: { "--custom-calendar-tile-aspect-ratio": a },
        children: [
            (0, n.jsx)(p.R9, { newValue: { tilePosition: t }, children: (0, n.jsx)(q.A, { skuId: s }) }),
            (0, n.jsx)(ee.E, {
                className: el.vg,
                variant: "heading-sm/medium",
                color: "none",
                tag: "span",
                children: l,
            }),
        ],
    });
}
var en = s(196231),
    et = s(353448),
    ea = s(758836),
    er = s(792996),
    ei = s(146053);
function ec(e) {
    return e.skuId;
}
function eo(e) {
    let l = (0, b.A)("shop_include_unpublished"),
        { category: s } = (0, _.A)(e, { includeUnpublished: l, includePricing: !0 });
    return s ?? void 0;
}
function ed(e) {
    return e.type === R.R.VARIANTS_GROUP &&
        null != e.variants &&
        e.variants.length > 0 &&
        e.variants.every((e) => e.type === R.R.PROFILE_EFFECT)
        ? R.R.PROFILE_EFFECT
        : e.type;
}
let eu = { aspectRatio: "1 / 1" },
    eh = {
        [R.R.PROFILE_EFFECT]: { className: ei.I5, aspectRatio: "1 / 2" },
        [R.R.BUNDLE]: { className: ei.kP, aspectRatio: "2 / 1" },
    };
function em(e) {
    let { products: l } = e;
    return (0, n.jsx)("div", {
        className: ei.fr,
        children: l.map((e, l) => {
            let { className: s, aspectRatio: t } = eh[ed(e)] ?? eu;
            return (0, n.jsx)(
                p.R9,
                {
                    newValue: { tilePosition: l },
                    children: (0, n.jsx)(q.A, { skuId: e.skuId, cardClassName: s, aspectRatio: t }),
                },
                e.skuId,
            );
        }),
    });
}
function eI(e) {
    let { products: l } = e;
    return (0, n.jsx)("div", {
        className: ei.aD,
        children: (0, n.jsx)("ol", {
            className: r()(ei.fr, ei.ZP),
            children: l.map((e, s) => {
                if (e?.skuId == null) return null;
                let t = s + 1,
                    a = s === l.length - 1,
                    i = a ? eu : (eh[ed(e)] ?? eu);
                return (0, n.jsx)(
                    es,
                    {
                        day: t,
                        skuId: e.skuId,
                        tilePosition: s,
                        aspectRatio: i.aspectRatio,
                        className: r()(ei.Pu, i.className, { [ei.pr]: a }),
                    },
                    t,
                );
            }),
        }),
    });
}
function ex(e) {
    let { category: l } = e;
    (0, g.zy)();
    let s = w.useConfig({ location: "collection_index_page" }).enabled && !1,
        t = (0, y.bG)([D.default], () => D.default.getCurrentUser()),
        a = (0, W.p)(),
        r = null != (0, X.ty)(l.skuId),
        i = a(l.products);
    return s || (null != t && 0 !== i.length)
        ? (0, n.jsxs)("div", {
              className: ei.hd,
              children: [
                  r && (0, n.jsx)(J.A, { className: ei.aQ }),
                  s ? (0, n.jsx)(eI, { products: l.products }) : (0, n.jsx)(em, { products: i }),
              ],
          })
        : null;
}
function ej(e) {
    let { currentCategorySkuId: l, handleTransition: s } = e,
        { categories: a } = (function (e) {
            let { anchorCollectionId: l, limit: s } = e,
                n = t.useMemo(() => ({ applicationId: K.FYj, anchorCollectionId: l ?? "", limit: s }), [l, s]),
                a = null != l && "" !== l,
                r = (0, z.HX)(n);
            t.useEffect(() => {
                a && (0, z.Su)(n);
            }, [a, n]);
            let { collectionIds: i, fetchState: c } = (0, y.cf)(
                    [Y.A],
                    () => ({
                        collectionIds: Y.A.getCollectionsAfterIds(r),
                        fetchState: Y.A.getCollectionsAfterFetchState(r),
                    }),
                    [r],
                ),
                o = t.useMemo(() => (a ? (i ?? []) : []), [a, i]),
                d = o.join(","),
                u = (0, y.cf)(
                    [Y.A],
                    () => {
                        let e = {};
                        for (let l of o) e[l] = Y.A.getCollectionOrSummary(l);
                        return e;
                    },
                    [o],
                );
            return {
                categories: t.useMemo(
                    () =>
                        o
                            .map((e) => u[e])
                            .filter((e) => null != e)
                            .map((e) => $.A.fromStorefrontCollectionRecord(e)),
                    [d, u],
                ),
                isLoading: a && null == i && "error" !== c,
            };
        })({ anchorCollectionId: l, limit: 12 }),
        r = t.useCallback(
            (e) =>
                e.skuId !== l &&
                null != e.featuredBlockUrl &&
                !0 !== e.isOrbsExclusive &&
                (null == e.unpublishedAt || e.unpublishedAt > new Date()) &&
                !ea.MS.some((l) => {
                    let { categorySkuId: s } = l;
                    return s === e.skuId;
                }),
            [l],
        ),
        i = t.useMemo(() => a.filter(r).slice(0, 8), [a, r]);
    return 0 === i.length
        ? null
        : (0, n.jsxs)("div", {
              className: ei.t3,
              children: [
                  (0, n.jsx)("div", {
                      className: ei.bb,
                      children: (0, n.jsx)(B.D, {
                          variant: "heading-lg/semibold",
                          children: er.intl.string(er.t.EhRZ9o),
                      }),
                  }),
                  (0, n.jsx)(
                      G.A,
                      {
                          gap: "xl",
                          scrollStep: "item",
                          items: i,
                          getItemKey: ec,
                          renderItem: (e, l, t) =>
                              (0, n.jsx)(eC, { category: e, index: t, handleTransition: s, listItemProps: l }, e.skuId),
                      },
                      l,
                  ),
              ],
          });
}
function eC(e) {
    let { category: l, index: s, handleTransition: t, listItemProps: a } = e;
    return (0, n.jsx)(p.R9, {
        newValue: { categoryPosition: s, pageCategory: l.name, pageSection: "related_drops", tilePosition: s },
        children: (0, n.jsx)("div", {
            className: ei.EU,
            children: (0, n.jsx)(en.S, {
                category: l,
                handleTransition: t,
                pageType: ea.G2.COLLECTION_INDEX,
                className: ei.vK,
                listItemProps: a,
            }),
        }),
    });
}
let ep = [
    { tab: ea.G2.AVATAR_DECORATIONS, label: () => er.intl.string(er.t.dRZYNE) },
    { tab: ea.G2.PROFILE_EFFECTS, label: () => er.intl.string(er.t["1cNjtx"]) },
    { tab: ea.G2.NAMEPLATES, label: () => er.intl.string(er.t.V68Fqz) },
    { tab: ea.G2.PROFILE_FRAMES, label: () => er.intl.string(er.t.ecTJkR) },
    { tab: ea.G2.BUNDLES, label: () => er.intl.string(er.t.FYFpps) },
];
function eE() {
    let e = (0, g.W6)();
    return (0, n.jsxs)("div", {
        className: ei.nb,
        children: [
            (0, n.jsx)(B.D, { variant: "heading-sm/semibold", children: er.intl.string(er.t.Yr70c4) }),
            (0, n.jsx)("div", {
                className: ei.J2,
                children: ep.map((l) => {
                    let { tab: s, label: t } = l;
                    return (0, n.jsx)(
                        P.$,
                        { variant: "secondary", text: t(), onClick: () => e.push(K.BVt.COLLECTIBLES_SHOP_WITH_TAB(s)) },
                        s,
                    );
                }),
            }),
        ],
    });
}
function eg(e) {
    let { collectionId: l } = e,
        s = (0, g.W6)(),
        a = (0, p.uM)(),
        i = eo(l)?.name,
        c = t.useMemo(
            () => [
                { id: "shop_all", label: er.intl.string(er.t.xFcotU) },
                { id: "collection", label: i ?? "" },
            ],
            [i],
        ),
        o = t.useCallback(
            (e) => {
                "shop_all" === e.id &&
                    (U.default.track(K.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: a?.sessionId,
                        sku_id: l,
                        page_type: ea.G2.COLLECTION_INDEX,
                        page_category: i,
                        cta_name: "collection breadcrumb shop all",
                    }),
                    s.push(K.BVt.COLLECTIBLES_SHOP_WITH_TAB(ea.G2.CATALOG)));
            },
            [s, a?.sessionId, l, i],
        ),
        d = t.useCallback(
            (e, l) =>
                (0, n.jsxs)("span", {
                    className: r()(ei.u, { [ei.kG]: l }),
                    children: [e.label, !l && (0, n.jsx)("span", { className: ei.Tl, children: "/" })],
                }),
            [],
        );
    return (0, n.jsx)(F.A, {
        className: ei.C2,
        separatorClassName: ei.Lw,
        breadcrumbs: c,
        activeId: "collection",
        onBreadcrumbClick: o,
        renderCustomBreadcrumb: d,
    });
}
function eL() {
    return (0, n.jsxs)("div", {
        className: ei.kL,
        children: [
            (0, n.jsx)(et.A, { isLoading: !0, hideButton: !0, hideCards: !0, tab: ea.G2.COLLECTION_INDEX }),
            (0, n.jsx)("div", {
                className: ei.hd,
                children: (0, n.jsx)("div", {
                    className: ei.fr,
                    children: Array.from({ length: 8 }, (e, l) => (0, n.jsx)(Q.A, {}, l)),
                }),
            }),
            (0, n.jsxs)("div", {
                className: ei.t3,
                children: [
                    (0, n.jsx)("div", { className: ei.bb, children: (0, n.jsx)("div", { className: ei.M$ }) }),
                    (0, n.jsxs)("div", {
                        className: ei.A9,
                        children: [(0, n.jsx)("div", { className: ei.nl }), (0, n.jsx)("div", { className: ei.nl })],
                    }),
                ],
            }),
        ],
    });
}
let eN = function (e) {
    let { collectionId: l } = e,
        s = (0, g.W6)(),
        a = eo(l),
        r = t.useCallback(
            (e) => {
                let { categorySkuId: l } = e;
                null != l && s.push(K.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(l));
            },
            [s],
        ),
        i = t.useMemo(
            () =>
                null == a
                    ? null
                    : {
                          rankedSkuIds: a.heroRanking ?? [],
                          name: a.name,
                          unpublishedAt: a.unpublishedAt,
                          categorySkuId: a.skuId,
                          summary: a.summary,
                          type: S.g.HERO,
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
    let c = null != a.heroBannerUrl || null != a.heroRiveUrl;
    return (0, n.jsx)(M.iM, {
        tab: ea.G2.COLLECTION_INDEX,
        children: (0, n.jsxs)("div", {
            className: ei.kL,
            children: [
                c && null != i
                    ? (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsxs)("div", {
                                  className: ei.rz,
                                  children: [
                                      (0, n.jsx)("div", {
                                          className: ei.zn,
                                          children: (0, n.jsx)(eg, { collectionId: l }),
                                      }),
                                      (0, n.jsx)(et.A, {
                                          heroBlock: i,
                                          isLoading: !1,
                                          tab: ea.G2.COLLECTION_INDEX,
                                          hideButton: !0,
                                          hideCards: !0,
                                      }),
                                  ],
                              }),
                              (0, n.jsx)(ex, { category: a }),
                              (0, n.jsx)(ej, { currentCategorySkuId: a.skuId, handleTransition: r }, a.skuId),
                          ],
                      })
                    : (0, n.jsxs)("div", {
                          className: ei.AW,
                          children: [
                              (0, n.jsx)("div", { className: ei.zn, children: (0, n.jsx)(eg, { collectionId: l }) }),
                              (0, n.jsx)("div", { className: ei.$T, children: (0, n.jsx)(Z.A, { category: a }) }),
                              (0, n.jsx)(ex, { category: a }),
                              (0, n.jsx)(ej, { currentCategorySkuId: a.skuId, handleTransition: r }, a.skuId),
                          ],
                      }),
                (0, n.jsx)(eE, {}),
            ],
        }),
    });
};
var ef = s(415926);
function eb(e) {
    let { scrollerRef: l, children: s } = e,
        { handleScroll: t } = (0, ef.r)(l, ea.G2.COLLECTION_INDEX);
    return (0, n.jsx)(N.Ch, { ref: l, onScroll: t, children: s });
}
let ev = function (e) {
    let { collectionId: l, sessionId: s } = e,
        a = t.useRef(null),
        { selectedTab: r, transitionToTab: i, transitionState: c } = (0, O.o)(ea.G2.COLLECTION_INDEX);
    (0, A.Wg)(!0);
    let o = (0, b.A)("shop_include_unpublished"),
        { category: d, state: u } = (0, _.A)(l, { includeUnpublished: o, includePricing: !0 }),
        h = d ?? void 0,
        { analyticsLocations: m } = (0, v.lC)(ea.G2.COLLECTION_INDEX);
    return ((0, v.uS)(s, r, h?.name, c, { enabled: null != h }),
    t.useEffect(() => {
        a.current?.scrollTo({ to: 0 });
    }, [l]),
    "loading" !== u && null == h)
        ? (0, n.jsx)(g.rd, { to: K.BVt.COLLECTIBLES_SHOP })
        : h?.isOrbsExclusive === !0
          ? (0, n.jsx)(g.rd, { to: K.BVt.COLLECTIBLES_SHOP_WITH_TAB(ea.G2.ORBS) })
          : null == h
            ? (0, n.jsxs)(n.Fragment, {
                  children: [
                      (0, n.jsx)(T.G, { handleTransition: i, selectedTab: r, selectedCollectionId: l }),
                      (0, n.jsx)(L.Ip, { children: (0, n.jsx)(eL, {}) }),
                  ],
              })
            : (0, n.jsxs)(f.f5, {
                  value: m,
                  children: [
                      (0, n.jsx)(T.G, { handleTransition: i, selectedTab: r, selectedCollectionId: l }),
                      (0, n.jsx)(k.A, { tab: r, handleTransition: i }),
                      (0, n.jsx)(eb, { scrollerRef: a, children: (0, n.jsx)(eN, { collectionId: l }) }),
                  ],
              });
};
var e_ = s(460348),
    eA = s(170522);
let eO = (e) => {
    let { tab: l, collectionId: s } = e;
    (0, I.P)(m);
    let a = (0, d.A)(() => (0, i.A)()),
        u = (0, e_.yB)("CollectiblesShop");
    ((0, e_.gB)(u),
        (0, j.pE)(),
        (0, x.A)(K.FYj),
        t.useEffect(() => {
            (0, C.rW)();
        }, []),
        t.useEffect(() => {
            (0, o.I)(K.BVt.COLLECTIBLES_SHOP);
        }, []));
    let h = t.useMemo(() => ({ sessionId: a }), [a]),
        g = t.useRef(null),
        L = (0, c.Rv)();
    return (0, n.jsx)(p.R9, {
        newValue: h,
        children: (0, n.jsx)("div", {
            className: r()(eA.bx, { [e_.jP]: u }),
            ref: g,
            inert: L,
            tabIndex: -1,
            children:
                null != s && "" !== s
                    ? (0, n.jsx)(ev, { collectionId: s, sessionId: a })
                    : (0, n.jsx)(E.default, { tab: l, sessionId: a, containerRef: g }),
        }),
    });
};
