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
    f = r(304210),
    y = r(39196),
    L = r(808598),
    k = r(320089),
    O = r(212407),
    j = r(521e3),
    B = r(783857),
    N = r(815280),
    P = r(60140),
    b = r(758836),
    R = r(652215),
    T = r(375708),
    w = r(105499);
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
                tab: M,
                onVisibilityChange: D,
                badge: U,
                hideButton: F = !1,
                hideCards: V = !1,
            } = e,
            K = (0, i.K)(
                (e) => {
                    D?.(e);
                },
                0.1,
                null != D,
            ),
            W = l.useRef(null),
            z = (0, B.yB)("HeroBlock"),
            X = (0, c.bG)([A.default], () => A.default.getCurrentUser()),
            Y = (0, c.bG)([x.default], () => x.default.locale),
            $ = (0, _.uM)(),
            { analyticsLocations: q } = (0, E.Ay)(h.A.COLLECTIBLES_SHOP_HERO),
            Z = (0, f.S)(),
            J = l.useMemo(
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
            Q = l.useMemo(() => (0, y.HF)(Z, J), [Z, J]),
            ee = null != Q,
            et = null != Q && Z?.endsAt != null && null == (0, L.X)(Z.endsAt) && M === b.G2.COLLECTION_INDEX,
            er = l.useMemo(() => (null == Z ? J : (0, y.O8)(Z, J, M, Y)), [Z, J, M, Y]),
            {
                bannerDisplayConfig: en,
                logoDisplayConfig: el,
                heroLogo: es,
                heroBannerStatic: ea,
                heroBannerAnimated: ei,
                heroBannerRive: eo,
            } = (0, O.Kk)(er),
            eu = en?.responsive ?? !1,
            ec = en?.backgroundStyle,
            ed = null != eo && !ee,
            eg = M === b.G2.ORBS,
            em = null != s && s.isOrbsExclusive,
            ep = eg ? T.intl.string(T.t["1CdL8d"]) : T.intl.string(T.t.xYKa1T);
        function eh() {
            eg
                ? ((0, C.Y)({
                      pageType: R.liQ.SHOP_ORBS_TAB,
                      sectionType: R.JJy.ORBS_SHOP_HERO_BLOCK,
                      ctaObject: R.ZSU.CTA_TO_QUEST_HOME,
                  }),
                  (0, S.mA)({ fromContent: o.u.ORBS_SHOP_HERO_CTA }))
                : (r?.({
                      sourceButton: "shop latest category hero",
                      categorySkuId: er.categorySkuId,
                      isInternalShopDeeplink: !0,
                      isOrbsExclusive: em,
                  }),
                  v.default.track(R.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                      collectibles_shop_session_id: $?.sessionId,
                      sku_id: er.categorySkuId,
                      page_type: M,
                      page_section: $?.pageSection,
                      page_category: $?.pageCategory,
                      cta_name: "shop latest category hero button",
                  }));
        }
        if (null == X || (!t && er === G)) return null;
        function eE() {
            return t || F ? null : (0, n.jsx)(p.$, { variant: "overlay-primary", onClick: eh, text: ep });
        }
        return (0, n.jsx)(E.f5, {
            value: q,
            children: (0, n.jsxs)("div", {
                ref: K,
                className: w.os,
                children: [
                    ed ? (0, j.VA)({ isCustomCursorEnabled: z, className: w.Xt, riveEventTargetRef: W }) : null,
                    (0, n.jsx)("div", {
                        className: a()(w.vK, { [w.cN]: ed, [w.no]: eu }),
                        style: null != ec ? { background: ec } : void 0,
                        children:
                            null != ea &&
                            (0, n.jsx)(N.A, {
                                bannerStatic: ea,
                                bannerAnimated: ei,
                                bannerRive: ed ? eo : void 0,
                                isResponsive: eu,
                                eventTargetRef: W,
                            }),
                    }),
                    (0, n.jsxs)("div", {
                        className: a()(w.xX, { [w.ub]: ee && M === b.G2.COLLECTION_INDEX }),
                        children: [
                            ed
                                ? (0, n.jsx)("div", { className: w.fy, children: eE() })
                                : (0, n.jsxs)("div", {
                                      className: a()(w.bC, { [w.no]: eu, [w.RD]: ee && M === b.G2.COLLECTION_INDEX }),
                                      children: [
                                          t
                                              ? (0, n.jsx)("div", { className: w.Hw })
                                              : (0, n.jsxs)("div", {
                                                    className: w.Hw,
                                                    children: [
                                                        (0, I.HF)(er.unpublishedAt) &&
                                                            (0, n.jsx)(d.Lp, {
                                                                disableColor: !0,
                                                                text: T.intl.string(T.t["h/uBCR"]),
                                                                className: w.v0,
                                                            }),
                                                        (0, n.jsxs)("div", {
                                                            className: w.Wq,
                                                            children: [
                                                                null != U &&
                                                                    (0, n.jsx)("div", { className: w._I, children: U }),
                                                                null != es &&
                                                                    (0, n.jsx)("img", {
                                                                        className: w.rm,
                                                                        src: es,
                                                                        alt: er.name,
                                                                        style: el?.toDesktopStyles(),
                                                                    }),
                                                                !et &&
                                                                    null != er.title &&
                                                                    (0, n.jsx)(g.D, {
                                                                        variant: "heading-xxl/bold",
                                                                        className: eg ? w.DD : void 0,
                                                                        color: "text-strong",
                                                                        children: er.title,
                                                                    }),
                                                                !et &&
                                                                    null != er.summary &&
                                                                    "" !== er.summary &&
                                                                    (0, n.jsx)(m.E, {
                                                                        variant: ee
                                                                            ? "text-sm/normal"
                                                                            : "text-md/normal",
                                                                        className: a()(eg ? w.h4 : w.Tm, {
                                                                            [w.vd]: ee,
                                                                        }),
                                                                        style: { color: er.bannerTextColor ?? void 0 },
                                                                        children: er.summary,
                                                                    }),
                                                            ],
                                                        }),
                                                        null != Z &&
                                                            ee &&
                                                            M === b.G2.COLLECTION_INDEX &&
                                                            (0, n.jsx)("div", {
                                                                className: w.Zz,
                                                                children: (0, n.jsx)(k.A, {
                                                                    collectionId: er.categorySkuId,
                                                                    variant: "full",
                                                                }),
                                                            }),
                                                    ],
                                                }),
                                          !F && !t && (0, n.jsx)("div", { className: w.IS, children: eE() }),
                                      ],
                                  }),
                            !V &&
                                (0, n.jsx)(P.A, {
                                    heroBlockRecord: er,
                                    tab: M,
                                    isBlockLoading: t,
                                    layout: M === b.G2.HOME ? "hscroll" : "feed",
                                }),
                        ],
                    }),
                    null != Z &&
                        null != Q &&
                        !ee &&
                        (0, n.jsx)(k.A, { collectionId: er.categorySkuId, variant: "full" }),
                ],
            }),
        });
    };
