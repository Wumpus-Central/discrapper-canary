n.d(t, { A: () => Y });
var l = n(477900),
    r = n(582128),
    s = n(503698),
    a = n.n(s),
    i = n(172218),
    o = n(696292),
    u = n(651162),
    c = n(855986),
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
    _ = n(318346),
    y = n(287809),
    b = n(129230),
    A = n(857512),
    I = n(993408);
let S = (0, n(945810).mj)({
    name: "2026-09-orbs-hero-carousel",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var k = n(304210),
    j = n(39196),
    L = n(480750),
    N = n(808598),
    O = n(93955),
    R = n(212407),
    T = n(521e3),
    M = n(460348),
    D = n(815280),
    B = n(60140),
    P = n(700444),
    w = n(467499);
function H(e) {
    let { block: t, ...n } = e;
    return t.type === u.g.SOCIAL_LAYER_STOREFRONT_PROMOTIONAL_BANNER
        ? (0, l.jsx)(U, { ...n, banner: t })
        : n.renderHero(void 0, n.isLoading);
}
function U(e) {
    let { banner: t, isLoading: n, tab: s, renderHero: a } = e,
        [i, o] = r.useState(!n);
    n || i || o(!0);
    let u = !0 === n && !i,
        { skuIds: c, isLoading: d } = (0, w.l)(t.skuIds, t.applicationId),
        m = u || (d && 0 === c.length);
    return d || 0 !== c.length
        ? a((0, l.jsx)(P.A, { ...t, resolvedSkuIds: c, isLoading: m, tab: s }), m)
        : a(void 0, u);
}
var G = n(602051),
    $ = n(758836),
    F = n(652215),
    V = n(792996),
    K = n(105499);
let W = {
    rankedSkuIds: [],
    name: "",
    unpublishedAt: void 0,
    categorySkuId: void 0,
    summary: void 0,
    type: u.g.HERO,
    categoryStoreListingId: "",
};
function z(e) {
    let { heroBlockRecord: t, isBlockLoading: n } = e,
        r = S.useConfig({ location: "orbs_hero_block_cards" }).enabled;
    return (0, l.jsx)(B.A, { heroBlockRecord: t, tab: $.G2.ORBS, isBlockLoading: n, layout: r ? "hscroll" : "feed" });
}
let X = (e) => {
        let {
                isLoading: t,
                handleTransition: n,
                category: s,
                heroBlock: S,
                tab: P,
                onVisibilityChange: w,
                badge: H,
                hideButton: U = !1,
                hideCards: X = !1,
                foreground: Y,
            } = e,
            q = (0, i.K)(
                (e) => {
                    w?.(e);
                },
                0.1,
                null != w,
            ),
            Z = r.useRef(null),
            J = (0, M.yB)("HeroBlock"),
            Q = (0, c.bG)([y.default], () => y.default.getCurrentUser()),
            ee = (0, c.bG)([C.default], () => C.default.locale),
            et = (0, A.uM)(),
            { analyticsLocations: en } = (0, x.Ay)(f.A.COLLECTIBLES_SHOP_HERO),
            el = (0, k.ST)(),
            er = r.useMemo(
                () =>
                    null != S
                        ? S
                        : null == s
                          ? W
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
                [S, s],
            ),
            es = r.useMemo(() => (0, j.HF)(el, er), [el, er]),
            ea = es?.subtype === v.h5.TAKEOVER,
            ei = es?.subtype === v.h5.BASIC,
            eo = ea && el?.endsAt != null && null == (0, N.X)(el.endsAt) && P === $.G2.HOME,
            eu = ea && !eo,
            ec = (eu || ei) && P === $.G2.COLLECTION_INDEX,
            ed = r.useMemo(
                () => (null != er.foregroundBlock || null == el || eo ? er : (0, j.O8)(el, er, P, ee)),
                [el, er, eo, P, ee],
            ),
            {
                bannerDisplayConfig: em,
                logoDisplayConfig: eg,
                heroLogo: eh,
                heroBannerStatic: ep,
                heroBannerAnimated: ef,
                heroBannerRive: ex,
            } = (0, R.Kk)(ed),
            eE = em?.responsive ?? !1,
            ev = em?.backgroundStyle,
            eC = null != ex && !eu,
            e_ = P === $.G2.ORBS,
            ey = null != s && s.isOrbsExclusive,
            eb = P === $.G2.COLLECTION_INDEX ? G.S.COLLECTION_INDEX : G.S.HOME,
            eA = e_ ? V.intl.string(V.t["1CdL8d"]) : V.intl.string(V.t.xYKa1T);
        function eI() {
            e_
                ? ((0, _.Y)({
                      pageType: F.liQ.SHOP_ORBS_TAB,
                      sectionType: F.JJy.ORBS_SHOP_HERO_BLOCK,
                      ctaObject: F.ZSU.CTA_TO_QUEST_HOME,
                  }),
                  (0, E.mA)({ fromContent: o.u.ORBS_SHOP_HERO_CTA }))
                : (n?.({
                      sourceButton: "shop latest category hero",
                      categorySkuId: ed.categorySkuId,
                      isInternalShopDeeplink: !0,
                      isOrbsExclusive: ey,
                  }),
                  b.default.track(F.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                      collectibles_shop_session_id: et?.sessionId,
                      sku_id: ed.categorySkuId,
                      page_type: P,
                      page_section: et?.pageSection,
                      page_category: et?.pageCategory,
                      cta_name: "shop latest category hero button",
                  }));
        }
        if (null == Q || (!t && ed === W)) return null;
        function eS() {
            return t || U ? null : (0, l.jsx)(p.$, { variant: "overlay-primary", onClick: eI, text: eA });
        }
        return (0, l.jsx)(x.f5, {
            value: en,
            children: (0, l.jsxs)("div", {
                ref: q,
                className: a()(K.os, {
                    [K.hz]: null != Y || (null != ed.foregroundBlock && 0 === ed.rankedSkuIds.length),
                    [K.MW]: null == Y && null != ed.foregroundBlock && 0 === ed.rankedSkuIds.length,
                }),
                children: [
                    eC && null == Y
                        ? (0, T.VA)({ isCustomCursorEnabled: J, className: K.Xt, riveEventTargetRef: Z })
                        : null,
                    (0, l.jsx)("div", {
                        className: a()(K.vK, { [K.cN]: eC, [K.no]: eE }),
                        style: null != ev ? { background: ev } : void 0,
                        children:
                            null != ep &&
                            (0, l.jsx)(D.A, {
                                bannerStatic: ep,
                                bannerAnimated: ef,
                                bannerRive: eC ? ex : void 0,
                                isResponsive: eE,
                                eventTargetRef: Z,
                            }),
                    }),
                    (0, l.jsx)("div", {
                        className: a()(K.xX, { [K.ub]: ec, [K._H]: null != Y }),
                        children:
                            Y ??
                            (0, l.jsxs)(l.Fragment, {
                                children: [
                                    eC
                                        ? (0, l.jsx)("div", { className: K.fy, children: eS() })
                                        : (0, l.jsxs)("div", {
                                              className: a()(K.uZ, { [K.no]: eE, [K.RD]: ec }),
                                              children: [
                                                  t
                                                      ? (0, l.jsx)("div", { className: K.Hw })
                                                      : (0, l.jsxs)("div", {
                                                            className: K.Hw,
                                                            children: [
                                                                (0, I.HF)(ed.unpublishedAt) &&
                                                                    (0, l.jsx)("div", {
                                                                        className: K.v0,
                                                                        children: (0, l.jsx)(d.E, {
                                                                            type: {
                                                                                text: V.intl.string(V.t["h/uBCR"]),
                                                                            },
                                                                            variant: "inverted",
                                                                        }),
                                                                    }),
                                                                (0, l.jsxs)("div", {
                                                                    className: K.Wq,
                                                                    children: [
                                                                        null != H &&
                                                                            (0, l.jsx)("div", {
                                                                                className: K._I,
                                                                                children: H,
                                                                            }),
                                                                        null != eh &&
                                                                            (0, l.jsx)("img", {
                                                                                className: K.rm,
                                                                                src: eh,
                                                                                alt: ed.name,
                                                                                style: eg?.toDesktopStyles(),
                                                                            }),
                                                                        null != ed.title &&
                                                                            (0, l.jsx)(m.D, {
                                                                                variant: "heading-xxl/semibold",
                                                                                className: e_ ? K.DD : void 0,
                                                                                color: "text-strong",
                                                                                children: ed.title,
                                                                            }),
                                                                        null != ed.summary &&
                                                                            "" !== ed.summary &&
                                                                            (0, l.jsx)(g.B, {
                                                                                onClick:
                                                                                    null != el && eu
                                                                                        ? (e) => (0, L.h)(e, el, eb)
                                                                                        : void 0,
                                                                                children: (0, l.jsx)(h.E, {
                                                                                    variant: eu
                                                                                        ? "body-sm/normal"
                                                                                        : "body-md/normal",
                                                                                    className: a()(e_ ? K.h4 : K.Tm, {
                                                                                        [K.vd]: eu || ei,
                                                                                    }),
                                                                                    style: {
                                                                                        color:
                                                                                            ed.bannerTextColor ??
                                                                                            void 0,
                                                                                    },
                                                                                    children: ed.summary,
                                                                                }),
                                                                            }),
                                                                    ],
                                                                }),
                                                                null != el &&
                                                                    ec &&
                                                                    (0, l.jsx)("div", {
                                                                        className: K.Zz,
                                                                        children: (0, l.jsx)(O.A, {
                                                                            collectionId: ed.categorySkuId,
                                                                            variant: "full",
                                                                            surface: eb,
                                                                        }),
                                                                    }),
                                                            ],
                                                        }),
                                                  !U && !t && (0, l.jsx)("div", { className: K.pv, children: eS() }),
                                              ],
                                          }),
                                    !X &&
                                        (P === $.G2.ORBS
                                            ? (0, l.jsx)(z, { heroBlockRecord: ed, isBlockLoading: t })
                                            : (0, l.jsx)(B.A, {
                                                  heroBlockRecord: ed,
                                                  tab: P,
                                                  isBlockLoading: t,
                                                  layout: P === $.G2.HOME ? "hscroll" : "feed",
                                              })),
                                ],
                            }),
                    }),
                    !t &&
                        ei &&
                        P === $.G2.HOME &&
                        (0, l.jsx)("div", {
                            className: a()(K.xX, K.uC),
                            children: (0, l.jsx)(O.A, { collectionId: ed.categorySkuId, variant: "full", surface: eb }),
                        }),
                ],
            }),
        });
    },
    Y = function (e) {
        let t = e.heroBlock?.foregroundBlock;
        return null == t
            ? (0, l.jsx)(X, { ...e })
            : (0, l.jsx)(H, {
                  block: t,
                  isLoading: e.isLoading,
                  tab: e.tab,
                  renderHero: (t, n) => (0, l.jsx)(X, { ...e, foreground: t, isLoading: n }),
              });
    };
