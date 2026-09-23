r.d(t, { A: () => H });
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
    p = r(834730),
    m = r(821609),
    h = r(793574),
    E = r(688810),
    _ = r(617986),
    x = r(773669),
    S = r(318346),
    v = r(287809),
    I = r(174459),
    L = r(440938),
    A = r(993408),
    C = r(304210),
    y = r(39196),
    f = r(655583),
    O = r(212407),
    k = r(521e3),
    j = r(146919),
    T = r(815280),
    P = r(60140),
    b = r(758836),
    B = r(652215),
    N = r(375708),
    R = r(105499);
let G = {
        rankedSkuIds: [],
        name: "",
        unpublishedAt: void 0,
        categorySkuId: void 0,
        summary: void 0,
        type: u.g.HERO,
        categoryStoreListingId: "",
    },
    H = (e) => {
        let {
                isLoading: t,
                handleTransition: r,
                category: s,
                heroBlock: H,
                tab: D,
                onVisibilityChange: M,
                badge: U,
                hideButton: w = !1,
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
            X = (0, j.yB)("HeroBlock"),
            z = (0, c.bG)([v.default], () => v.default.getCurrentUser()),
            W = (0, c.bG)([x.default], () => x.default.locale),
            Y = (0, L.uM)(),
            { analyticsLocations: $ } = (0, E.Ay)(h.A.COLLECTIBLES_SHOP_HERO),
            Z = (0, C.S)(),
            q = l.useMemo(
                () =>
                    null != H
                        ? H
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
                [H, s],
            ),
            J = l.useMemo(() => (0, y.HF)(Z, q), [Z, q]),
            Q = null != J,
            ee = l.useMemo(() => (null == Z ? q : (0, y.O8)(Z, q, D, W)), [Z, q, D, W]),
            {
                bannerDisplayConfig: et,
                logoDisplayConfig: er,
                heroLogo: en,
                heroBannerStatic: el,
                heroBannerAnimated: es,
                heroBannerRive: ea,
            } = (0, O.Kk)(ee),
            ei = et?.responsive ?? !1,
            eo = et?.backgroundStyle,
            eu = null != ea && !Q,
            ec = D === b.G2.ORBS,
            ed = null != s && s.isOrbsExclusive,
            eg = ec ? N.intl.string(N.t["1CdL8d"]) : N.intl.string(N.t.xYKa1T);
        function ep() {
            ec
                ? ((0, S.Y)({
                      pageType: B.liQ.SHOP_ORBS_TAB,
                      sectionType: B.JJy.ORBS_SHOP_HERO_BLOCK,
                      ctaObject: B.ZSU.CTA_TO_QUEST_HOME,
                  }),
                  (0, _.mA)({ fromContent: o.u.ORBS_SHOP_HERO_CTA }))
                : (r?.({
                      sourceButton: "shop latest category hero",
                      categorySkuId: ee.categorySkuId,
                      isInternalShopDeeplink: !0,
                      isOrbsExclusive: ed,
                  }),
                  I.default.track(B.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                      collectibles_shop_session_id: Y?.sessionId,
                      sku_id: ee.categorySkuId,
                      page_type: D,
                      page_section: Y?.pageSection,
                      page_category: Y?.pageCategory,
                      cta_name: "shop latest category hero button",
                  }));
        }
        if (null == z || (!t && ee === G)) return null;
        function em() {
            return t || w ? null : (0, n.jsx)(m.$, { variant: "overlay-primary", onClick: ep, text: eg });
        }
        return (0, n.jsx)(E.f5, {
            value: $,
            children: (0, n.jsxs)("div", {
                ref: V,
                className: R.os,
                children: [
                    eu ? (0, k.VA)({ isCustomCursorEnabled: X, className: R.Xt, riveEventTargetRef: K }) : null,
                    (0, n.jsx)("div", {
                        className: a()(R.vK, { [R.cN]: eu, [R.no]: ei }),
                        style: null != eo ? { background: eo } : void 0,
                        children:
                            null != el &&
                            (0, n.jsx)(T.A, {
                                bannerStatic: el,
                                bannerAnimated: es,
                                bannerRive: eu ? ea : void 0,
                                isResponsive: ei,
                                eventTargetRef: K,
                            }),
                    }),
                    (0, n.jsxs)("div", {
                        className: a()(R.xX, { [R.ub]: Q && D === b.G2.COLLECTION_INDEX }),
                        children: [
                            eu
                                ? (0, n.jsx)("div", { className: R.fy, children: em() })
                                : (0, n.jsxs)("div", {
                                      className: a()(R.bC, { [R.no]: ei, [R.RD]: Q && D === b.G2.COLLECTION_INDEX }),
                                      children: [
                                          t
                                              ? (0, n.jsx)("div", { className: R.Hw })
                                              : (0, n.jsxs)("div", {
                                                    className: R.Hw,
                                                    children: [
                                                        (0, A.HF)(ee.unpublishedAt) &&
                                                            (0, n.jsx)(d.Lp, {
                                                                disableColor: !0,
                                                                text: N.intl.string(N.t["h/uBCR"]),
                                                                className: R.v0,
                                                            }),
                                                        (0, n.jsxs)("div", {
                                                            className: R.Wq,
                                                            children: [
                                                                null != U &&
                                                                    (0, n.jsx)("div", { className: R._I, children: U }),
                                                                null != en &&
                                                                    (0, n.jsx)("img", {
                                                                        className: R.rm,
                                                                        src: en,
                                                                        alt: ee.name,
                                                                        style: er?.toDesktopStyles(),
                                                                    }),
                                                                null != ee.title &&
                                                                    (0, n.jsx)(g.D, {
                                                                        variant: "heading-xxl/bold",
                                                                        className: ec ? R.DD : void 0,
                                                                        color: "text-strong",
                                                                        children: ee.title,
                                                                    }),
                                                                null != ee.summary &&
                                                                    "" !== ee.summary &&
                                                                    (0, n.jsx)(p.E, {
                                                                        variant: "text-md/normal",
                                                                        className: a()(ec ? R.h4 : R.Tm, { [R.vd]: Q }),
                                                                        style: { color: ee.bannerTextColor ?? void 0 },
                                                                        children: ee.summary,
                                                                    }),
                                                            ],
                                                        }),
                                                        null != Z &&
                                                            Q &&
                                                            D === b.G2.COLLECTION_INDEX &&
                                                            (0, n.jsx)("div", {
                                                                className: R.Zz,
                                                                children: (0, n.jsx)(f.A, {
                                                                    collectionId: ee.categorySkuId,
                                                                    variant: "full",
                                                                }),
                                                            }),
                                                    ],
                                                }),
                                          !w && !t && (0, n.jsx)("div", { className: R.IS, children: em() }),
                                      ],
                                  }),
                            !F &&
                                (0, n.jsx)(P.A, {
                                    heroBlockRecord: ee,
                                    tab: D,
                                    isBlockLoading: t,
                                    layout: D === b.G2.HOME ? "hscroll" : "feed",
                                }),
                        ],
                    }),
                    null != Z &&
                        null != J &&
                        !Q &&
                        (0, n.jsx)(f.A, { collectionId: ee.categorySkuId, variant: "full" }),
                ],
            }),
        });
    };
