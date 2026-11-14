n.d(t, { A: () => X });
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
    E = n(688810),
    x = n(321538),
    v = n(604913),
    C = n(773669),
    A = n(318346),
    y = n(287809),
    _ = n(129230),
    b = n(857512),
    S = n(993408);
let L = (0, n(945810).mj)({
    name: "2026-09-orbs-hero-carousel",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var I = n(304210),
    k = n(39196),
    j = n(480750),
    N = n(808598),
    O = n(93955),
    R = n(212407),
    T = n(521e3),
    D = n(460348),
    P = n(815280),
    M = n(60140),
    B = n(700444),
    w = n(467499);
function H(e) {
    let { block: t, ...n } = e;
    return t.type === u.g.SOCIAL_LAYER_STOREFRONT_PROMOTIONAL_BANNER
        ? (0, l.jsx)(G, { ...n, banner: t })
        : n.renderHero(void 0, n.isLoading);
}
function G(e) {
    let { banner: t, isLoading: n, tab: s, renderHero: a } = e,
        [i, o] = r.useState(!n);
    n || i || o(!0);
    let u = !0 === n && !i,
        { skuIds: c, isLoading: d } = (0, w.l)(t.skuIds, t.applicationId),
        m = u || (d && 0 === c.length);
    return d || 0 !== c.length
        ? a((0, l.jsx)(B.A, { ...t, resolvedSkuIds: c, isLoading: m, tab: s }), m)
        : a(void 0, u);
}
var U = n(602051),
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
        r = L.useConfig({ location: "orbs_hero_block_cards" }).enabled;
    return (0, l.jsx)(M.A, { heroBlockRecord: t, tab: $.G2.ORBS, isBlockLoading: n, layout: r ? "hscroll" : "feed" });
}
let Y = (e) => {
        let {
                isLoading: t,
                handleTransition: n,
                category: s,
                heroBlock: L,
                tab: B,
                onVisibilityChange: w,
                badge: H,
                hideButton: G = !1,
                hideCards: Y = !1,
                foreground: X,
            } = e,
            q = (0, i.K)(
                (e) => {
                    w?.(e);
                },
                0.1,
                null != w,
            ),
            Z = r.useRef(null),
            J = (0, D.yB)("HeroBlock"),
            Q = (0, c.bG)([y.default], () => y.default.getCurrentUser()),
            ee = (0, c.bG)([C.default], () => C.default.locale),
            et = (0, b.uM)(),
            { analyticsLocations: en } = (0, E.Ay)(f.A.COLLECTIBLES_SHOP_HERO),
            el = (0, I.ST)(),
            er = r.useMemo(
                () =>
                    null != L
                        ? L
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
                [L, s],
            ),
            es = r.useMemo(() => (0, k.HF)(el, er), [el, er]),
            ea = es?.subtype === v.h5.TAKEOVER,
            ei = es?.subtype === v.h5.BASIC,
            eo = ea && el?.endsAt != null && null == (0, N.X)(el.endsAt) && B === $.G2.HOME,
            eu = ea && !eo,
            ec = (eu || ei) && B === $.G2.COLLECTION_INDEX,
            ed = r.useMemo(
                () => (null != er.foregroundBlock || null == el || eo ? er : (0, k.O8)(el, er, B, ee)),
                [el, er, eo, B, ee],
            ),
            {
                bannerDisplayConfig: em,
                logoDisplayConfig: eg,
                heroLogo: eh,
                heroBannerStatic: ep,
                heroBannerAnimated: ef,
                heroBannerRive: eE,
            } = (0, R.Kk)(ed),
            ex = em?.responsive ?? !1,
            ev = em?.backgroundStyle,
            eC = null != eE && !eu,
            eA = B === $.G2.ORBS,
            ey = null != s && s.isOrbsExclusive,
            e_ = B === $.G2.COLLECTION_INDEX ? U.S.COLLECTION_INDEX : U.S.HOME,
            eb = eA ? V.intl.string(V.t["1CdL8d"]) : V.intl.string(V.t.xYKa1T);
        function eS() {
            eA
                ? ((0, A.Y)({
                      pageType: F.liQ.SHOP_ORBS_TAB,
                      sectionType: F.JJy.ORBS_SHOP_HERO_BLOCK,
                      ctaObject: F.ZSU.CTA_TO_QUEST_HOME,
                  }),
                  (0, x.mA)({ fromContent: o.u.ORBS_SHOP_HERO_CTA }))
                : (n?.({
                      sourceButton: "shop latest category hero",
                      categorySkuId: ed.categorySkuId,
                      isInternalShopDeeplink: !0,
                      isOrbsExclusive: ey,
                  }),
                  _.default.track(F.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                      collectibles_shop_session_id: et?.sessionId,
                      sku_id: ed.categorySkuId,
                      page_type: B,
                      page_section: et?.pageSection,
                      page_category: et?.pageCategory,
                      cta_name: "shop latest category hero button",
                  }));
        }
        if (null == Q || (!t && ed === W)) return null;
        function eL() {
            return t || G ? null : (0, l.jsx)(p.$, { variant: "overlay-primary", onClick: eS, text: eb });
        }
        return (0, l.jsx)(E.f5, {
            value: en,
            children: (0, l.jsxs)("div", {
                ref: q,
                className: a()(K.os, {
                    [K.hz]: null != X || (null != ed.foregroundBlock && 0 === ed.rankedSkuIds.length),
                    [K.MW]: null == X && null != ed.foregroundBlock && 0 === ed.rankedSkuIds.length,
                }),
                children: [
                    eC && null == X
                        ? (0, T.VA)({ isCustomCursorEnabled: J, className: K.Xt, riveEventTargetRef: Z })
                        : null,
                    (0, l.jsx)("div", {
                        className: a()(K.vK, { [K.cN]: eC, [K.no]: ex }),
                        style: null != ev ? { background: ev } : void 0,
                        children:
                            null != ep &&
                            (0, l.jsx)(P.A, {
                                bannerStatic: ep,
                                bannerAnimated: ef,
                                bannerRive: eC ? eE : void 0,
                                isResponsive: ex,
                                eventTargetRef: Z,
                            }),
                    }),
                    (0, l.jsx)("div", {
                        className: a()(K.xX, { [K.ub]: ec, [K._H]: null != X }),
                        children:
                            X ??
                            (0, l.jsxs)(l.Fragment, {
                                children: [
                                    eC
                                        ? (0, l.jsx)("div", { className: K.fy, children: eL() })
                                        : (0, l.jsxs)("div", {
                                              className: a()(K.uZ, { [K.no]: ex, [K.RD]: ec }),
                                              children: [
                                                  t
                                                      ? (0, l.jsx)("div", { className: K.Hw })
                                                      : (0, l.jsxs)("div", {
                                                            className: K.Hw,
                                                            children: [
                                                                (0, S.HF)(ed.unpublishedAt) &&
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
                                                                                className: eA ? K.DD : void 0,
                                                                                color: "text-strong",
                                                                                children: ed.title,
                                                                            }),
                                                                        null != ed.summary &&
                                                                            "" !== ed.summary &&
                                                                            (0, l.jsx)(g.B, {
                                                                                onClick:
                                                                                    null != el && eu
                                                                                        ? (e) => (0, j.h)(e, el, e_)
                                                                                        : void 0,
                                                                                children: (0, l.jsx)(h.E, {
                                                                                    variant: eu
                                                                                        ? "body-sm/normal"
                                                                                        : "body-md/normal",
                                                                                    className: a()(eA ? K.h4 : K.Tm, {
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
                                                                            surface: e_,
                                                                        }),
                                                                    }),
                                                            ],
                                                        }),
                                                  !G && !t && (0, l.jsx)("div", { className: K.pv, children: eL() }),
                                              ],
                                          }),
                                    !Y &&
                                        (B === $.G2.ORBS
                                            ? (0, l.jsx)(z, { heroBlockRecord: ed, isBlockLoading: t })
                                            : (0, l.jsx)(M.A, {
                                                  heroBlockRecord: ed,
                                                  tab: B,
                                                  isBlockLoading: t,
                                                  layout: B === $.G2.HOME ? "hscroll" : "feed",
                                              })),
                                ],
                            }),
                    }),
                    !t &&
                        ei &&
                        B === $.G2.HOME &&
                        (0, l.jsx)("div", {
                            className: a()(K.xX, K.uC),
                            children: (0, l.jsx)(O.A, { collectionId: ed.categorySkuId, variant: "full", surface: e_ }),
                        }),
                ],
            }),
        });
    },
    X = function (e) {
        let t = e.heroBlock?.foregroundBlock;
        return null == t
            ? (0, l.jsx)(Y, { ...e })
            : (0, l.jsx)(H, {
                  block: t,
                  isLoading: e.isLoading,
                  tab: e.tab,
                  renderHero: (t, n) => (0, l.jsx)(Y, { ...e, foreground: t, isLoading: n }),
              });
    };
