n.d(t, { A: () => V });
var l = n(477900),
    r = n(582128),
    s = n(503698),
    a = n.n(s),
    i = n(172218),
    o = n(696292),
    c = n(651162),
    u = n(855986),
    d = n(805251),
    m = n(534514),
    g = n(331322),
    h = n(834730),
    p = n(821609),
    f = n(793574),
    x = n(688810),
    E = n(321538),
    v = n(604913),
    C = n(773669),
    y = n(318346),
    _ = n(287809),
    b = n(129230),
    S = n(857512),
    I = n(993408);
let A = (0, n(945810).mj)({
    name: "2026-09-orbs-hero-carousel",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var j = n(304210),
    L = n(39196),
    k = n(480750),
    N = n(808598),
    O = n(93955),
    R = n(212407),
    T = n(521e3),
    M = n(460348),
    D = n(815280),
    P = n(60140),
    B = n(602051),
    w = n(758836),
    H = n(652215),
    U = n(792996),
    G = n(105499);
let $ = {
    rankedSkuIds: [],
    name: "",
    unpublishedAt: void 0,
    categorySkuId: void 0,
    summary: void 0,
    type: c.g.HERO,
    categoryStoreListingId: "",
};
function F(e) {
    let { heroBlockRecord: t, isBlockLoading: n } = e,
        r = A.useConfig({ location: "orbs_hero_block_cards" }).enabled;
    return (0, l.jsx)(P.A, { heroBlockRecord: t, tab: w.G2.ORBS, isBlockLoading: n, layout: r ? "hscroll" : "feed" });
}
let V = (e) => {
    let {
            isLoading: t,
            handleTransition: n,
            category: s,
            heroBlock: A,
            tab: V,
            onVisibilityChange: K,
            badge: W,
            hideButton: z = !1,
            hideCards: X = !1,
        } = e,
        Y = (0, i.K)(
            (e) => {
                K?.(e);
            },
            0.1,
            null != K,
        ),
        q = r.useRef(null),
        Z = (0, M.yB)("HeroBlock"),
        J = (0, u.bG)([_.default], () => _.default.getCurrentUser()),
        Q = (0, u.bG)([C.default], () => C.default.locale),
        ee = (0, S.uM)(),
        { analyticsLocations: et } = (0, x.Ay)(f.A.COLLECTIBLES_SHOP_HERO),
        en = (0, j.ST)(),
        el = r.useMemo(
            () =>
                null != A
                    ? A
                    : null == s
                      ? $
                      : {
                            rankedSkuIds: s.heroRanking ?? [],
                            name: s.name,
                            unpublishedAt: s.unpublishedAt,
                            categorySkuId: s.skuId,
                            summary: s.summary,
                            type: c.g.HERO,
                            categoryStoreListingId: s.storeListingId,
                            bannerDisplayConfig: s.heroBannerDisplayConfig,
                            logoDisplayConfig: s.heroLogoDisplayConfig,
                            heroLogoUrl: s.heroLogoUrl,
                            heroBannerUrl: s.heroBannerUrl,
                            heroBannerAnimatedUrl: s.heroBannerAnimatedUrl,
                        },
            [A, s],
        ),
        er = r.useMemo(() => (0, L.HF)(en, el), [en, el]),
        es = er?.subtype === v.h5.TAKEOVER,
        ea = er?.subtype === v.h5.BASIC,
        ei = es && en?.endsAt != null && null == (0, N.X)(en.endsAt) && V === w.G2.HOME,
        eo = es && !ei,
        ec = (eo || ea) && V === w.G2.COLLECTION_INDEX,
        eu = r.useMemo(() => (null == en || ei ? el : (0, L.O8)(en, el, V, Q)), [en, el, ei, V, Q]),
        {
            bannerDisplayConfig: ed,
            logoDisplayConfig: em,
            heroLogo: eg,
            heroBannerStatic: eh,
            heroBannerAnimated: ep,
            heroBannerRive: ef,
        } = (0, R.Kk)(eu),
        ex = ed?.responsive ?? !1,
        eE = ed?.backgroundStyle,
        ev = null != ef && !eo,
        eC = V === w.G2.ORBS,
        ey = null != s && s.isOrbsExclusive,
        e_ = V === w.G2.COLLECTION_INDEX ? B.S.COLLECTION_INDEX : B.S.HOME,
        eb = eC ? U.intl.string(U.t["1CdL8d"]) : U.intl.string(U.t.xYKa1T);
    function eS() {
        eC
            ? ((0, y.Y)({
                  pageType: H.liQ.SHOP_ORBS_TAB,
                  sectionType: H.JJy.ORBS_SHOP_HERO_BLOCK,
                  ctaObject: H.ZSU.CTA_TO_QUEST_HOME,
              }),
              (0, E.mA)({ fromContent: o.u.ORBS_SHOP_HERO_CTA }))
            : (n?.({
                  sourceButton: "shop latest category hero",
                  categorySkuId: eu.categorySkuId,
                  isInternalShopDeeplink: !0,
                  isOrbsExclusive: ey,
              }),
              b.default.track(H.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                  collectibles_shop_session_id: ee?.sessionId,
                  sku_id: eu.categorySkuId,
                  page_type: V,
                  page_section: ee?.pageSection,
                  page_category: ee?.pageCategory,
                  cta_name: "shop latest category hero button",
              }));
    }
    if (null == J || (!t && eu === $)) return null;
    function eI() {
        return t || z ? null : (0, l.jsx)(p.$, { variant: "overlay-primary", onClick: eS, text: eb });
    }
    return (0, l.jsx)(x.f5, {
        value: et,
        children: (0, l.jsxs)("div", {
            ref: Y,
            className: G.os,
            children: [
                ev ? (0, T.VA)({ isCustomCursorEnabled: Z, className: G.Xt, riveEventTargetRef: q }) : null,
                (0, l.jsx)("div", {
                    className: a()(G.vK, { [G.cN]: ev, [G.no]: ex }),
                    style: null != eE ? { background: eE } : void 0,
                    children:
                        null != eh &&
                        (0, l.jsx)(D.A, {
                            bannerStatic: eh,
                            bannerAnimated: ep,
                            bannerRive: ev ? ef : void 0,
                            isResponsive: ex,
                            eventTargetRef: q,
                        }),
                }),
                (0, l.jsxs)("div", {
                    className: a()(G.xX, { [G.ub]: ec }),
                    children: [
                        ev
                            ? (0, l.jsx)("div", { className: G.fy, children: eI() })
                            : (0, l.jsxs)("div", {
                                  className: a()(G.uZ, { [G.no]: ex, [G.RD]: ec }),
                                  children: [
                                      t
                                          ? (0, l.jsx)("div", { className: G.Hw })
                                          : (0, l.jsxs)("div", {
                                                className: G.Hw,
                                                children: [
                                                    (0, I.HF)(eu.unpublishedAt) &&
                                                        (0, l.jsx)("div", {
                                                            className: G.v0,
                                                            children: (0, l.jsx)(d.E, {
                                                                type: { text: U.intl.string(U.t["h/uBCR"]) },
                                                                variant: "inverted",
                                                            }),
                                                        }),
                                                    (0, l.jsxs)("div", {
                                                        className: G.Wq,
                                                        children: [
                                                            null != W &&
                                                                (0, l.jsx)("div", { className: G._I, children: W }),
                                                            null != eg &&
                                                                (0, l.jsx)("img", {
                                                                    className: G.rm,
                                                                    src: eg,
                                                                    alt: eu.name,
                                                                    style: em?.toDesktopStyles(),
                                                                }),
                                                            null != eu.title &&
                                                                (0, l.jsx)(m.D, {
                                                                    variant: "heading-xxl/semibold",
                                                                    className: eC ? G.DD : void 0,
                                                                    color: "text-strong",
                                                                    children: eu.title,
                                                                }),
                                                            null != eu.summary &&
                                                                "" !== eu.summary &&
                                                                (0, l.jsx)(g.B, {
                                                                    onClick:
                                                                        null != en && eo
                                                                            ? (e) => (0, k.h)(e, en, e_)
                                                                            : void 0,
                                                                    children: (0, l.jsx)(h.E, {
                                                                        variant: eo
                                                                            ? "body-sm/normal"
                                                                            : "body-md/normal",
                                                                        className: a()(eC ? G.h4 : G.Tm, {
                                                                            [G.vd]: eo || ea,
                                                                        }),
                                                                        style: { color: eu.bannerTextColor ?? void 0 },
                                                                        children: eu.summary,
                                                                    }),
                                                                }),
                                                        ],
                                                    }),
                                                    null != en &&
                                                        ec &&
                                                        (0, l.jsx)("div", {
                                                            className: G.Zz,
                                                            children: (0, l.jsx)(O.A, {
                                                                collectionId: eu.categorySkuId,
                                                                variant: "full",
                                                                surface: e_,
                                                            }),
                                                        }),
                                                ],
                                            }),
                                      !z && !t && (0, l.jsx)("div", { className: G.pv, children: eI() }),
                                  ],
                              }),
                        !X &&
                            (V === w.G2.ORBS
                                ? (0, l.jsx)(F, { heroBlockRecord: eu, isBlockLoading: t })
                                : (0, l.jsx)(P.A, {
                                      heroBlockRecord: eu,
                                      tab: V,
                                      isBlockLoading: t,
                                      layout: V === w.G2.HOME ? "hscroll" : "feed",
                                  })),
                    ],
                }),
                !t &&
                    ea &&
                    V === w.G2.HOME &&
                    (0, l.jsx)("div", {
                        className: a()(G.xX, G.uC),
                        children: (0, l.jsx)(O.A, { collectionId: eu.categorySkuId, variant: "full", surface: e_ }),
                    }),
            ],
        }),
    });
};
