n.d(t, { A: () => K });
var s = n(627968),
    l = n(64700),
    r = n(503698),
    a = n.n(r),
    i = n(172218),
    o = n(696292),
    u = n(651162),
    c = n(17928),
    d = n(812993),
    g = n(297264),
    E = n(834730),
    _ = n(821609),
    A = n(793574),
    S = n(688810),
    m = n(617986),
    L = n(318346),
    p = n(287809),
    C = n(174459),
    h = n(440938),
    y = n(993408),
    O = n(212407),
    I = n(521e3),
    k = n(146919),
    x = n(815280),
    f = n(449543),
    v = n(590180),
    T = n(511265),
    b = n(313276),
    B = n(206077),
    j = n(828614),
    N = n(561769),
    R = n(484469),
    P = n(375708),
    H = n(941734);
function G(e) {
    return (0, s.jsx)("div", { className: H.hm, children: (0, s.jsx)(M, { ...e }) });
}
function D(e) {
    return (0, s.jsx)(f.A, { gap: "xl", "aria-label": P.intl.string(P.t.HP8LNG), children: (0, s.jsx)(M, { ...e }) });
}
function M(e) {
    let { isLoading: t, products: n, tab: l, totalCards: r } = e,
        a = (0, N.Mk)(l, "HeroBlockCards");
    if (t) return (0, s.jsx)(s.Fragment, { children: [...Array(r ?? 4)].map((e, t) => (0, s.jsx)(R.A, {}, t)) });
    let i = null != r ? n.slice(0, r) : n;
    return (0, s.jsx)(N.v3.Provider, {
        value: { flattenProductVariants: !1 },
        children: i.map((e, t) => {
            let n = v.A.getCategoryForProduct(e.skuId);
            return null == e || null == n
                ? null
                : (0, s.jsx)(
                      h.R9,
                      {
                          newValue: { tilePosition: t, pageSection: "top 4", categoryPosition: 0 },
                          children: (0, s.jsx)(j.A, { skuId: e.skuId, prioritizedCurrency: a }),
                      },
                      e.skuId,
                  );
        }),
    });
}
let F = function (e) {
    let t,
        n,
        r,
        { heroBlockRecord: a, layout: i, tab: o, isBlockLoading: u = !1 } = e,
        { products: c } =
            ((t = (0, b.A)()),
            (n = l.useMemo(() => (u ? [] : t(a.rankedSkuIds)), [u, t, a.rankedSkuIds])),
            (r = (0, T.p)()(n)),
            { products: (0, B.X)(r) }),
        d = l.useMemo(
            () =>
                !u &&
                0 !== a.rankedSkuIds.length &&
                !(c.length > 0) &&
                a.rankedSkuIds.every((e) => v.A.getProduct(e)?.variantGroupStoreListingId != null),
            [u, a.rankedSkuIds, c.length],
        ),
        g = u || d;
    switch (i) {
        case "feed":
            return (0, s.jsx)(G, { heroBlockRecord: a, isLoading: g, products: c, tab: o });
        case "hscroll":
            return (0, s.jsx)(D, { heroBlockRecord: a, isLoading: g, products: c, tab: o });
    }
};
var U = n(758836),
    w = n(652215);
let V = {
        rankedSkuIds: [],
        name: "",
        unpublishedAt: void 0,
        categorySkuId: void 0,
        summary: void 0,
        type: u.g.HERO,
        categoryStoreListingId: "",
    },
    K = (e) => {
        let {
                isLoading: t,
                handleTransition: n,
                category: r,
                heroBlock: f,
                tab: v,
                onVisibilityChange: T,
                badge: b,
                hideButton: B = !1,
                hideCards: j = !1,
            } = e,
            N = (0, i.K)(
                (e) => {
                    T?.(e);
                },
                0.1,
                null != T,
            ),
            R = l.useRef(null),
            G = (0, k.yB)("HeroBlock"),
            D = (0, c.bG)([p.default], () => p.default.getCurrentUser()),
            M = (0, h.uM)(),
            { analyticsLocations: K } = (0, S.Ay)(A.A.COLLECTIBLES_SHOP_HERO),
            W = l.useMemo(
                () =>
                    null != f
                        ? f
                        : null == r
                          ? V
                          : {
                                rankedSkuIds: r.heroRanking ?? [],
                                name: r.name,
                                unpublishedAt: r.unpublishedAt,
                                categorySkuId: r.skuId,
                                summary: r.summary,
                                type: u.g.HERO,
                                categoryStoreListingId: r.storeListingId,
                                bannerDisplayConfig: r.heroBannerDisplayConfig,
                                logoDisplayConfig: r.heroLogoDisplayConfig,
                                heroLogoUrl: r.heroLogoUrl,
                                heroBannerUrl: r.heroBannerUrl,
                                heroBannerAnimatedUrl: r.heroBannerAnimatedUrl,
                            },
                [f, r],
            ),
            {
                bannerDisplayConfig: X,
                logoDisplayConfig: Y,
                heroLogo: $,
                heroBannerStatic: z,
                heroBannerAnimated: q,
                heroBannerRive: J,
            } = (0, O.Kk)(W),
            Q = X?.responsive ?? !1,
            Z = X?.backgroundStyle,
            ee = null != J,
            et = v === U.G2.ORBS,
            en = null != r && r.isOrbsExclusive,
            es = et ? P.intl.string(P.t["1CdL8d"]) : P.intl.string(P.t.xYKa1T);
        function el() {
            et
                ? ((0, L.Y)({
                      pageType: w.liQ.SHOP_ORBS_TAB,
                      sectionType: w.JJy.ORBS_SHOP_HERO_BLOCK,
                      ctaObject: w.ZSU.CTA_TO_QUEST_HOME,
                  }),
                  (0, m.mA)({ fromContent: o.u.ORBS_SHOP_HERO_CTA }))
                : (n?.({
                      sourceButton: "shop latest category hero",
                      categorySkuId: W.categorySkuId,
                      isInternalShopDeeplink: !0,
                      isOrbsExclusive: en,
                  }),
                  C.default.track(w.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                      collectibles_shop_session_id: M?.sessionId,
                      sku_id: W.categorySkuId,
                      page_type: v,
                      page_section: M?.pageSection,
                      page_category: M?.pageCategory,
                      cta_name: "shop latest category hero button",
                  }));
        }
        if (null == D || (!t && W === V)) return null;
        function er() {
            return t || B ? null : (0, s.jsx)(_.$, { variant: "overlay-primary", onClick: el, text: es });
        }
        return (0, s.jsx)(S.f5, {
            value: K,
            children: (0, s.jsxs)("div", {
                ref: N,
                className: H.os,
                children: [
                    ee ? (0, I.VA)({ isCustomCursorEnabled: G, className: H.Xt, riveEventTargetRef: R }) : null,
                    (0, s.jsx)("div", {
                        className: a()(H.vK, { [H.cN]: ee, [H.no]: Q }),
                        style: null != Z ? { background: Z } : void 0,
                        children:
                            null != z &&
                            (0, s.jsx)(x.A, {
                                bannerStatic: z,
                                bannerAnimated: q,
                                bannerRive: J,
                                isResponsive: Q,
                                eventTargetRef: R,
                            }),
                    }),
                    (0, s.jsxs)("div", {
                        className: H.xX,
                        children: [
                            ee
                                ? (0, s.jsx)("div", { className: H.fy, children: er() })
                                : (0, s.jsxs)("div", {
                                      className: a()(H.bC, { [H.no]: Q }),
                                      children: [
                                          t
                                              ? (0, s.jsx)("div", { className: H.Hw })
                                              : (0, s.jsxs)("div", {
                                                    className: H.Hw,
                                                    children: [
                                                        (0, y.HF)(W.unpublishedAt) &&
                                                            (0, s.jsx)(d.Lp, {
                                                                disableColor: !0,
                                                                text: P.intl.string(P.t["h/uBCR"]),
                                                                className: H.v0,
                                                            }),
                                                        (0, s.jsxs)("div", {
                                                            className: H.Wq,
                                                            children: [
                                                                null != b &&
                                                                    (0, s.jsx)("div", { className: H._I, children: b }),
                                                                null != $ &&
                                                                    (0, s.jsx)("img", {
                                                                        className: H.rm,
                                                                        src: $,
                                                                        alt: W.name,
                                                                        style: Y?.toDesktopStyles(),
                                                                    }),
                                                                null != W.title &&
                                                                    (0, s.jsx)(g.D, {
                                                                        variant: "heading-xxl/bold",
                                                                        className: H.DD,
                                                                        color: "text-strong",
                                                                        children: W.title,
                                                                    }),
                                                                null != W.summary &&
                                                                    "" !== W.summary &&
                                                                    (0, s.jsx)(E.E, {
                                                                        variant: "text-md/normal",
                                                                        className: et ? H.h4 : H.Tm,
                                                                        style:
                                                                            null != W.bannerTextColor
                                                                                ? { color: W.bannerTextColor }
                                                                                : void 0,
                                                                        children: W.summary,
                                                                    }),
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                          !B && !t && (0, s.jsx)("div", { className: H.IS, children: er() }),
                                      ],
                                  }),
                            !j &&
                                (0, s.jsx)(F, {
                                    heroBlockRecord: W,
                                    tab: v,
                                    isBlockLoading: t,
                                    layout: v === U.G2.HOME ? "hscroll" : "feed",
                                }),
                        ],
                    }),
                ],
            }),
        });
    };
