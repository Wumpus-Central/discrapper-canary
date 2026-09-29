r.d(t, { A: () => U });
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
    m = r(331322),
    E = r(834730),
    _ = r(821609),
    C = r(793574),
    p = r(688810),
    h = r(617986),
    I = r(773669),
    S = r(318346),
    A = r(287809),
    L = r(174459),
    x = r(440938),
    v = r(993408),
    f = r(304210),
    O = r(39196),
    y = r(480750),
    k = r(808598),
    N = r(320089),
    T = r(212407),
    j = r(521e3),
    B = r(783857),
    b = r(815280),
    P = r(60140),
    R = r(602051),
    w = r(758836),
    D = r(652215),
    G = r(375708),
    H = r(105499);
let M = {
        rankedSkuIds: [],
        name: "",
        unpublishedAt: void 0,
        categorySkuId: void 0,
        summary: void 0,
        type: u.g.HERO,
        categoryStoreListingId: "",
    },
    U = (e) => {
        let {
                isLoading: t,
                handleTransition: r,
                category: s,
                heroBlock: U,
                tab: F,
                onVisibilityChange: K,
                badge: V,
                hideButton: W = !1,
                hideCards: X = !1,
            } = e,
            z = (0, i.K)(
                (e) => {
                    K?.(e);
                },
                0.1,
                null != K,
            ),
            Y = l.useRef(null),
            Z = (0, B.yB)("HeroBlock"),
            $ = (0, c.bG)([A.default], () => A.default.getCurrentUser()),
            q = (0, c.bG)([I.default], () => I.default.locale),
            J = (0, x.uM)(),
            { analyticsLocations: Q } = (0, p.Ay)(C.A.COLLECTIBLES_SHOP_HERO),
            ee = (0, f.S)(),
            et = l.useMemo(
                () =>
                    null != U
                        ? U
                        : null == s
                          ? M
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
                [U, s],
            ),
            er = null != l.useMemo(() => (0, O.HF)(ee, et), [ee, et]),
            en = er && ee?.endsAt != null && null == (0, k.X)(ee.endsAt) && F === w.G2.HOME,
            el = er && !en,
            es = l.useMemo(() => (null == ee || en ? et : (0, O.O8)(ee, et, F, q)), [ee, et, en, F, q]),
            {
                bannerDisplayConfig: ea,
                logoDisplayConfig: ei,
                heroLogo: eo,
                heroBannerStatic: eu,
                heroBannerAnimated: ec,
                heroBannerRive: ed,
            } = (0, T.Kk)(es),
            eg = ea?.responsive ?? !1,
            em = ea?.backgroundStyle,
            eE = null != ed && !el,
            e_ = F === w.G2.ORBS,
            eC = null != s && s.isOrbsExclusive,
            ep = F === w.G2.COLLECTION_INDEX ? R.S.COLLECTION_INDEX : R.S.HOME,
            eh = e_ ? G.intl.string(G.t["1CdL8d"]) : G.intl.string(G.t.xYKa1T);
        function eI() {
            e_
                ? ((0, S.Y)({
                      pageType: D.liQ.SHOP_ORBS_TAB,
                      sectionType: D.JJy.ORBS_SHOP_HERO_BLOCK,
                      ctaObject: D.ZSU.CTA_TO_QUEST_HOME,
                  }),
                  (0, h.mA)({ fromContent: o.u.ORBS_SHOP_HERO_CTA }))
                : (r?.({
                      sourceButton: "shop latest category hero",
                      categorySkuId: es.categorySkuId,
                      isInternalShopDeeplink: !0,
                      isOrbsExclusive: eC,
                  }),
                  L.default.track(D.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                      collectibles_shop_session_id: J?.sessionId,
                      sku_id: es.categorySkuId,
                      page_type: F,
                      page_section: J?.pageSection,
                      page_category: J?.pageCategory,
                      cta_name: "shop latest category hero button",
                  }));
        }
        if (null == $ || (!t && es === M)) return null;
        function eS() {
            return t || W ? null : (0, n.jsx)(_.$, { variant: "overlay-primary", onClick: eI, text: eh });
        }
        return (0, n.jsx)(p.f5, {
            value: Q,
            children: (0, n.jsxs)("div", {
                ref: z,
                className: H.os,
                children: [
                    eE ? (0, j.VA)({ isCustomCursorEnabled: Z, className: H.Xt, riveEventTargetRef: Y }) : null,
                    (0, n.jsx)("div", {
                        className: a()(H.vK, { [H.cN]: eE, [H.no]: eg }),
                        style: null != em ? { background: em } : void 0,
                        children:
                            null != eu &&
                            (0, n.jsx)(b.A, {
                                bannerStatic: eu,
                                bannerAnimated: ec,
                                bannerRive: eE ? ed : void 0,
                                isResponsive: eg,
                                eventTargetRef: Y,
                            }),
                    }),
                    (0, n.jsxs)("div", {
                        className: a()(H.xX, { [H.ub]: el && F === w.G2.COLLECTION_INDEX }),
                        children: [
                            eE
                                ? (0, n.jsx)("div", { className: H.fy, children: eS() })
                                : (0, n.jsxs)("div", {
                                      className: a()(H.bC, { [H.no]: eg, [H.RD]: el && F === w.G2.COLLECTION_INDEX }),
                                      children: [
                                          t
                                              ? (0, n.jsx)("div", { className: H.Hw })
                                              : (0, n.jsxs)("div", {
                                                    className: H.Hw,
                                                    children: [
                                                        (0, v.HF)(es.unpublishedAt) &&
                                                            (0, n.jsx)(d.Lp, {
                                                                disableColor: !0,
                                                                text: G.intl.string(G.t["h/uBCR"]),
                                                                className: H.v0,
                                                            }),
                                                        (0, n.jsxs)("div", {
                                                            className: H.Wq,
                                                            children: [
                                                                null != V &&
                                                                    (0, n.jsx)("div", { className: H._I, children: V }),
                                                                null != eo &&
                                                                    (0, n.jsx)("img", {
                                                                        className: H.rm,
                                                                        src: eo,
                                                                        alt: es.name,
                                                                        style: ei?.toDesktopStyles(),
                                                                    }),
                                                                null != es.title &&
                                                                    (0, n.jsx)(g.D, {
                                                                        variant: "heading-xxl/bold",
                                                                        className: e_ ? H.DD : void 0,
                                                                        color: "text-strong",
                                                                        children: es.title,
                                                                    }),
                                                                null != es.summary &&
                                                                    "" !== es.summary &&
                                                                    (0, n.jsx)(m.B, {
                                                                        onClick:
                                                                            null != ee && el
                                                                                ? (e) => (0, y.h)(e, ee, ep)
                                                                                : void 0,
                                                                        children: (0, n.jsx)(E.E, {
                                                                            variant: el
                                                                                ? "text-sm/normal"
                                                                                : "text-md/normal",
                                                                            className: a()(e_ ? H.h4 : H.Tm, {
                                                                                [H.vd]: el,
                                                                            }),
                                                                            style: {
                                                                                color: es.bannerTextColor ?? void 0,
                                                                            },
                                                                            children: es.summary,
                                                                        }),
                                                                    }),
                                                            ],
                                                        }),
                                                        null != ee &&
                                                            el &&
                                                            F === w.G2.COLLECTION_INDEX &&
                                                            (0, n.jsx)("div", {
                                                                className: H.Zz,
                                                                children: (0, n.jsx)(N.A, {
                                                                    collectionId: es.categorySkuId,
                                                                    variant: "full",
                                                                    surface: ep,
                                                                }),
                                                            }),
                                                    ],
                                                }),
                                          !W && !t && (0, n.jsx)("div", { className: H.IS, children: eS() }),
                                      ],
                                  }),
                            !X &&
                                (0, n.jsx)(P.A, {
                                    heroBlockRecord: es,
                                    tab: F,
                                    isBlockLoading: t,
                                    layout: F === w.G2.HOME ? "hscroll" : "feed",
                                }),
                        ],
                    }),
                ],
            }),
        });
    };
