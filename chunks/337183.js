n.d(t, { A: () => V });
var s = n(627968),
    l = n(64700),
    r = n(503698),
    a = n.n(r),
    i = n(172218),
    o = n(696292),
    u = n(651162),
    c = n(17928),
    d = n(812993),
    g = n(534514),
    E = n(834730),
    _ = n(821609),
    m = n(793574),
    S = n(688810),
    A = n(617986),
    L = n(318346),
    p = n(287809),
    h = n(174459),
    y = n(440938),
    C = n(993408),
    O = n(212407),
    I = n(521e3),
    x = n(146919),
    v = n(815280),
    k = n(449543),
    f = n(590180),
    T = n(511265),
    b = n(313276),
    B = n(206077),
    j = n(828614),
    N = n(561769),
    P = n(484469),
    R = n(375708),
    H = n(941734);
function G(e) {
    return (0, s.jsx)("div", { className: H.hm, children: (0, s.jsx)(M, { ...e }) });
}
function D(e) {
    return (0, s.jsx)(k.A, { gap: "xl", "aria-label": R.intl.string(R.t.HP8LNG), children: (0, s.jsx)(M, { ...e }) });
}
function M(e) {
    let { isLoading: t, products: n, tab: l, totalCards: r } = e,
        a = (0, N.Mk)(l, "HeroBlockCards");
    if (t) return (0, s.jsx)(s.Fragment, { children: [...Array(r ?? 4)].map((e, t) => (0, s.jsx)(P.A, {}, t)) });
    let i = null != r ? n.slice(0, r) : n;
    return (0, s.jsx)(N.v3.Provider, {
        value: { flattenProductVariants: !1 },
        children: i.map((e, t) => {
            let n = f.A.getCategoryForProduct(e.skuId);
            return null == e || null == n
                ? null
                : (0, s.jsx)(
                      y.R9,
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
                a.rankedSkuIds.every((e) => f.A.getProduct(e)?.variantGroupStoreListingId != null),
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
let K = {
        rankedSkuIds: [],
        name: "",
        unpublishedAt: void 0,
        categorySkuId: void 0,
        summary: void 0,
        type: u.g.HERO,
        categoryStoreListingId: "",
    },
    V = (e) => {
        let {
                isLoading: t,
                handleTransition: n,
                category: r,
                heroBlock: k,
                tab: f,
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
            P = l.useRef(null),
            G = (0, x.yB)("HeroBlock"),
            D = (0, c.bG)([p.default], () => p.default.getCurrentUser()),
            M = (0, y.uM)(),
            { analyticsLocations: V } = (0, S.Ay)(m.A.COLLECTIBLES_SHOP_HERO),
            W = l.useMemo(
                () =>
                    null != k
                        ? k
                        : null == r
                          ? K
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
                [k, r],
            ),
            {
                bannerDisplayConfig: X,
                logoDisplayConfig: Y,
                heroLogo: $,
                heroBannerStatic: z,
                heroBannerAnimated: Q,
                heroBannerRive: q,
            } = (0, O.Kk)(W),
            J = X?.responsive ?? !1,
            Z = X?.backgroundStyle,
            ee = null != q,
            et = f === U.G2.ORBS,
            en = null != r && r.isOrbsExclusive,
            es = et ? R.intl.string(R.t["1CdL8d"]) : R.intl.string(R.t.xYKa1T),
            el = () => {
                et
                    ? ((0, L.Y)({
                          pageType: w.liQ.SHOP_ORBS_TAB,
                          sectionType: w.JJy.ORBS_SHOP_HERO_BLOCK,
                          ctaObject: w.ZSU.CTA_TO_QUEST_HOME,
                      }),
                      (0, A.navigateToQuestHome)({ fromContent: o.u.ORBS_SHOP_HERO_CTA }))
                    : (n?.({
                          sourceButton: "shop latest category hero",
                          categorySkuId: W.categorySkuId,
                          isInternalShopDeeplink: !0,
                          isOrbsExclusive: en,
                      }),
                      h.default.track(w.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                          collectibles_shop_session_id: M?.sessionId,
                          sku_id: W.categorySkuId,
                          page_type: f,
                          page_section: M?.pageSection,
                          page_category: M?.pageCategory,
                          cta_name: "shop latest category hero button",
                      }));
            };
        if (null == D || (!t && W === K)) return null;
        function er() {
            return t || B ? null : (0, s.jsx)(_.$, { variant: "overlay-primary", onClick: el, text: es });
        }
        return (0, s.jsx)(S.f5, {
            value: V,
            children: (0, s.jsxs)("div", {
                ref: N,
                className: H.os,
                children: [
                    ee ? (0, I.VA)({ isCustomCursorEnabled: G, className: H.Xt, riveEventTargetRef: P }) : null,
                    (0, s.jsx)("div", {
                        className: a()(H.vK, { [H.cN]: ee, [H.no]: J }),
                        style: null != Z ? { background: Z } : void 0,
                        children:
                            null != z &&
                            (0, s.jsx)(v.A, {
                                bannerStatic: z,
                                bannerAnimated: Q,
                                bannerRive: q,
                                isResponsive: J,
                                eventTargetRef: P,
                            }),
                    }),
                    (0, s.jsxs)("div", {
                        className: H.xX,
                        children: [
                            ee
                                ? (0, s.jsx)("div", { className: H.fy, children: er() })
                                : (0, s.jsxs)("div", {
                                      className: a()(H.bC, { [H.no]: J }),
                                      children: [
                                          t
                                              ? (0, s.jsx)("div", { className: H.Hw })
                                              : (0, s.jsxs)("div", {
                                                    className: H.Hw,
                                                    children: [
                                                        (0, C.HF)(W.unpublishedAt) &&
                                                            (0, s.jsx)(d.Lp, {
                                                                disableColor: !0,
                                                                text: R.intl.string(R.t["h/uBCR"]),
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
                                    tab: f,
                                    isBlockLoading: t,
                                    layout: f === U.G2.HOME ? "hscroll" : "feed",
                                }),
                        ],
                    }),
                ],
            }),
        });
    };
