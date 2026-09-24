r.d(t, { A: () => M });
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
    L = r(304210),
    y = r(39196),
    f = r(320089),
    k = r(212407),
    O = r(521e3),
    j = r(783857),
    b = r(815280),
    P = r(60140),
    B = r(758836),
    N = r(652215),
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
    M = (e) => {
        let {
                isLoading: t,
                handleTransition: r,
                category: s,
                heroBlock: M,
                tab: D,
                onVisibilityChange: H,
                badge: w,
                hideButton: U = !1,
                hideCards: F = !1,
            } = e,
            V = (0, i.K)(
                (e) => {
                    H?.(e);
                },
                0.1,
                null != H,
            ),
            K = l.useRef(null),
            z = (0, j.yB)("HeroBlock"),
            W = (0, c.bG)([A.default], () => A.default.getCurrentUser()),
            X = (0, c.bG)([x.default], () => x.default.locale),
            Y = (0, _.uM)(),
            { analyticsLocations: $ } = (0, E.Ay)(h.A.COLLECTIBLES_SHOP_HERO),
            q = (0, L.S)(),
            Z = l.useMemo(
                () =>
                    null != M
                        ? M
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
                [M, s],
            ),
            J = l.useMemo(() => (0, y.HF)(q, Z), [q, Z]),
            Q = null != J,
            ee = l.useMemo(() => (null == q ? Z : (0, y.O8)(q, Z, D, X)), [q, Z, D, X]),
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
            ec = D === B.G2.ORBS,
            ed = null != s && s.isOrbsExclusive,
            eg = ec ? R.intl.string(R.t["1CdL8d"]) : R.intl.string(R.t.xYKa1T);
        function em() {
            ec
                ? ((0, C.Y)({
                      pageType: N.liQ.SHOP_ORBS_TAB,
                      sectionType: N.JJy.ORBS_SHOP_HERO_BLOCK,
                      ctaObject: N.ZSU.CTA_TO_QUEST_HOME,
                  }),
                  (0, S.mA)({ fromContent: o.u.ORBS_SHOP_HERO_CTA }))
                : (r?.({
                      sourceButton: "shop latest category hero",
                      categorySkuId: ee.categorySkuId,
                      isInternalShopDeeplink: !0,
                      isOrbsExclusive: ed,
                  }),
                  v.default.track(N.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                      collectibles_shop_session_id: Y?.sessionId,
                      sku_id: ee.categorySkuId,
                      page_type: D,
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
                            (0, n.jsx)(b.A, {
                                bannerStatic: el,
                                bannerAnimated: es,
                                bannerRive: eu ? ea : void 0,
                                isResponsive: ei,
                                eventTargetRef: K,
                            }),
                    }),
                    (0, n.jsxs)("div", {
                        className: a()(T.xX, { [T.ub]: Q && D === B.G2.COLLECTION_INDEX }),
                        children: [
                            eu
                                ? (0, n.jsx)("div", { className: T.fy, children: ep() })
                                : (0, n.jsxs)("div", {
                                      className: a()(T.bC, { [T.no]: ei, [T.RD]: Q && D === B.G2.COLLECTION_INDEX }),
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
                                                                null != w &&
                                                                    (0, n.jsx)("div", { className: T._I, children: w }),
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
                                                            D === B.G2.COLLECTION_INDEX &&
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
                                (0, n.jsx)(P.A, {
                                    heroBlockRecord: ee,
                                    tab: D,
                                    isBlockLoading: t,
                                    layout: D === B.G2.HOME ? "hscroll" : "feed",
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
