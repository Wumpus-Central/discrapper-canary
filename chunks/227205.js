r.d(t, { A: () => w });
var n = r(477900),
    l = r(582128),
    s = r(503698),
    a = r.n(s),
    i = r(172218),
    o = r(696292),
    u = r(651162),
    c = r(17928),
    d = r(812993),
    g = r(297264),
    m = r(834730),
    p = r(821609),
    h = r(793574),
    E = r(688810),
    S = r(617986),
    x = r(773669),
    C = r(318346),
    A = r(287809),
    v = r(174459),
    _ = r(440938),
    I = r(993408),
    y = r(304210),
    L = r(39196),
    f = r(320089),
    k = r(212407),
    O = r(521e3),
    j = r(783857),
    B = r(815280),
    N = r(60140),
    P = r(758836),
    b = r(652215),
    R = r(375708),
    T = r(105499);
let G = {
        rankedSkuIds: [],
        name: "",
        unpublishedAt: void 0,
        categorySkuId: void 0,
        summary: void 0,
        type: u.g.HERO,
        categoryStoreListingId: "",
    },
    w = (e) => {
        let {
                isLoading: t,
                handleTransition: r,
                category: s,
                heroBlock: w,
                tab: H,
                onVisibilityChange: M,
                badge: D,
                hideButton: U = !1,
                hideCards: F = !1,
            } = e,
            V = (0, i.K)(
                (e) => {
                    M?.(e);
                },
                0.1,
                null != M,
            ),
            K = l.useRef(null),
            z = (0, j.yB)("HeroBlock"),
            W = (0, c.bG)([A.default], () => A.default.getCurrentUser()),
            X = (0, c.bG)([x.default], () => x.default.locale),
            Y = (0, _.uM)(),
            { analyticsLocations: $ } = (0, E.Ay)(h.A.COLLECTIBLES_SHOP_HERO),
            q = (0, y.S)(),
            Z = l.useMemo(
                () =>
                    null != w
                        ? w
                        : null == s
                          ? G
                          : {
                                rankedSkuIds: s.heroRanking ?? [],
                                name: s.name,
                                unpublishedAt: s.unpublishedAt,
                                categorySkuId: s.skuId,
                                summary: s.summary,
                                type: u.g.HERO,
                                categoryStoreListingId: s.storeListingId,
                                bannerDisplayConfig: s.heroBannerDisplayConfig,
                                logoDisplayConfig: s.heroLogoDisplayConfig,
                                heroLogoUrl: s.heroLogoUrl,
                                heroBannerUrl: s.heroBannerUrl,
                                heroBannerAnimatedUrl: s.heroBannerAnimatedUrl,
                            },
                [w, s],
            ),
            J = l.useMemo(() => (0, L.HF)(q, Z), [q, Z]),
            Q = null != J,
            ee = l.useMemo(() => (null == q ? Z : (0, L.O8)(q, Z, H, X)), [q, Z, H, X]),
            {
                bannerDisplayConfig: et,
                logoDisplayConfig: er,
                heroLogo: en,
                heroBannerStatic: el,
                heroBannerAnimated: es,
                heroBannerRive: ea,
            } = (0, k.Kk)(ee),
            ei = et?.responsive ?? !1,
            eo = et?.backgroundStyle,
            eu = null != ea && !Q,
            ec = H === P.G2.ORBS,
            ed = null != s && s.isOrbsExclusive,
            eg = ec ? R.intl.string(R.t["1CdL8d"]) : R.intl.string(R.t.xYKa1T);
        function em() {
            ec
                ? ((0, C.Y)({
                      pageType: b.liQ.SHOP_ORBS_TAB,
                      sectionType: b.JJy.ORBS_SHOP_HERO_BLOCK,
                      ctaObject: b.ZSU.CTA_TO_QUEST_HOME,
                  }),
                  (0, S.mA)({ fromContent: o.u.ORBS_SHOP_HERO_CTA }))
                : (r?.({
                      sourceButton: "shop latest category hero",
                      categorySkuId: ee.categorySkuId,
                      isInternalShopDeeplink: !0,
                      isOrbsExclusive: ed,
                  }),
                  v.default.track(b.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                      collectibles_shop_session_id: Y?.sessionId,
                      sku_id: ee.categorySkuId,
                      page_type: H,
                      page_section: Y?.pageSection,
                      page_category: Y?.pageCategory,
                      cta_name: "shop latest category hero button",
                  }));
        }
        if (null == W || (!t && ee === G)) return null;
        function ep() {
            return t || U ? null : (0, n.jsx)(p.$, { variant: "overlay-primary", onClick: em, text: eg });
        }
        return (0, n.jsx)(E.f5, {
            value: $,
            children: (0, n.jsxs)("div", {
                ref: V,
                className: T.os,
                children: [
                    eu ? (0, O.VA)({ isCustomCursorEnabled: z, className: T.Xt, riveEventTargetRef: K }) : null,
                    (0, n.jsx)("div", {
                        className: a()(T.vK, { [T.cN]: eu, [T.no]: ei }),
                        style: null != eo ? { background: eo } : void 0,
                        children:
                            null != el &&
                            (0, n.jsx)(B.A, {
                                bannerStatic: el,
                                bannerAnimated: es,
                                bannerRive: eu ? ea : void 0,
                                isResponsive: ei,
                                eventTargetRef: K,
                            }),
                    }),
                    (0, n.jsxs)("div", {
                        className: a()(T.xX, { [T.ub]: Q && H === P.G2.COLLECTION_INDEX }),
                        children: [
                            eu
                                ? (0, n.jsx)("div", { className: T.fy, children: ep() })
                                : (0, n.jsxs)("div", {
                                      className: a()(T.bC, { [T.no]: ei, [T.RD]: Q && H === P.G2.COLLECTION_INDEX }),
                                      children: [
                                          t
                                              ? (0, n.jsx)("div", { className: T.Hw })
                                              : (0, n.jsxs)("div", {
                                                    className: T.Hw,
                                                    children: [
                                                        (0, I.HF)(ee.unpublishedAt) &&
                                                            (0, n.jsx)(d.Lp, {
                                                                disableColor: !0,
                                                                text: R.intl.string(R.t["h/uBCR"]),
                                                                className: T.v0,
                                                            }),
                                                        (0, n.jsxs)("div", {
                                                            className: T.Wq,
                                                            children: [
                                                                null != D &&
                                                                    (0, n.jsx)("div", { className: T._I, children: D }),
                                                                null != en &&
                                                                    (0, n.jsx)("img", {
                                                                        className: T.rm,
                                                                        src: en,
                                                                        alt: ee.name,
                                                                        style: er?.toDesktopStyles(),
                                                                    }),
                                                                null != ee.title &&
                                                                    (0, n.jsx)(g.D, {
                                                                        variant: "heading-xxl/bold",
                                                                        className: ec ? T.DD : void 0,
                                                                        color: "text-strong",
                                                                        children: ee.title,
                                                                    }),
                                                                null != ee.summary &&
                                                                    "" !== ee.summary &&
                                                                    (0, n.jsx)(m.E, {
                                                                        variant: Q
                                                                            ? "text-sm/normal"
                                                                            : "text-md/normal",
                                                                        className: a()(ec ? T.h4 : T.Tm, { [T.vd]: Q }),
                                                                        style: { color: ee.bannerTextColor ?? void 0 },
                                                                        children: ee.summary,
                                                                    }),
                                                            ],
                                                        }),
                                                        null != q &&
                                                            Q &&
                                                            H === P.G2.COLLECTION_INDEX &&
                                                            (0, n.jsx)("div", {
                                                                className: T.Zz,
                                                                children: (0, n.jsx)(f.A, {
                                                                    collectionId: ee.categorySkuId,
                                                                    variant: "full",
                                                                }),
                                                            }),
                                                    ],
                                                }),
                                          !U && !t && (0, n.jsx)("div", { className: T.IS, children: ep() }),
                                      ],
                                  }),
                            !F &&
                                (0, n.jsx)(N.A, {
                                    heroBlockRecord: ee,
                                    tab: H,
                                    isBlockLoading: t,
                                    layout: H === P.G2.HOME ? "hscroll" : "feed",
                                }),
                        ],
                    }),
                    null != q &&
                        null != J &&
                        !Q &&
                        (0, n.jsx)(f.A, { collectionId: ee.categorySkuId, variant: "full" }),
                ],
            }),
        });
    };
