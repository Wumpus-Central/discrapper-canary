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
    h = n(331322),
    g = n(834730),
    p = n(821609),
    E = n(793574),
    f = n(688810),
    x = n(321538),
    C = n(604913),
    v = n(773669),
    y = n(318346),
    A = n(287809),
    _ = n(129230),
    L = n(857512),
    b = n(993408);
let S = (0, n(945810).mj)({
    name: "2026-09-orbs-hero-carousel",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var I = n(304210),
    j = n(39196),
    k = n(480750),
    N = n(808598),
    O = n(93955),
    R = n(212407),
    T = n(521e3),
    D = n(460348),
    P = n(815280),
    M = n(60140),
    w = n(700444),
    B = n(467499);
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
        { skuIds: c, isLoading: d } = (0, B.l)(t.skuIds, t.applicationId),
        m = u || (d && 0 === c.length);
    return d || 0 !== c.length
        ? a((0, l.jsx)(w.A, { ...t, resolvedSkuIds: c, isLoading: m, tab: s }), m)
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
    return (0, l.jsx)(M.A, { heroBlockRecord: t, tab: $.G2.ORBS, isBlockLoading: n, layout: r ? "hscroll" : "feed" });
}
let Y = (e) => {
        let {
                isLoading: t,
                handleTransition: n,
                category: s,
                heroBlock: S,
                tab: w,
                onVisibilityChange: B,
                badge: H,
                hideButton: U = !1,
                hideCards: Y = !1,
                foreground: X,
            } = e,
            q = (0, i.K)(
                (e) => {
                    B?.(e);
                },
                0.1,
                null != B,
            ),
            Z = r.useRef(null),
            Q = (0, D.yB)("HeroBlock"),
            J = (0, c.bG)([A.default], () => A.default.getCurrentUser()),
            ee = (0, c.bG)([v.default], () => v.default.locale),
            et = (0, L.uM)(),
            { analyticsLocations: en } = (0, f.Ay)(E.A.COLLECTIBLES_SHOP_HERO),
            el = (0, I.ST)(),
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
            ea = es?.subtype === C.h5.TAKEOVER,
            ei = es?.subtype === C.h5.BASIC,
            eo = ea && el?.endsAt != null && null == (0, N.X)(el.endsAt) && w === $.G2.HOME,
            eu = ea && !eo,
            ec = (eu || ei) && w === $.G2.COLLECTION_INDEX,
            ed = r.useMemo(
                () => (null != er.foregroundBlock || null == el || eo ? er : (0, j.O8)(el, er, w, ee)),
                [el, er, eo, w, ee],
            ),
            {
                bannerDisplayConfig: em,
                logoDisplayConfig: eh,
                heroLogo: eg,
                heroBannerStatic: ep,
                heroBannerAnimated: eE,
                heroBannerRive: ef,
            } = (0, R.Kk)(ed),
            ex = em?.responsive ?? !1,
            eC = em?.backgroundStyle,
            ev = null != ef && !eu,
            ey = w === $.G2.ORBS,
            eA = null != s && s.isOrbsExclusive,
            e_ = w === $.G2.COLLECTION_INDEX ? G.S.COLLECTION_INDEX : G.S.HOME,
            eL = ey ? V.intl.string(V.t["1CdL8d"]) : V.intl.string(V.t.xYKa1T);
        function eb() {
            ey
                ? ((0, y.Y)({
                      pageType: F.liQ.SHOP_ORBS_TAB,
                      sectionType: F.JJy.ORBS_SHOP_HERO_BLOCK,
                      ctaObject: F.ZSU.CTA_TO_QUEST_HOME,
                  }),
                  (0, x.mA)({ fromContent: o.u.ORBS_SHOP_HERO_CTA }))
                : (n?.({
                      sourceButton: "shop latest category hero",
                      categorySkuId: ed.categorySkuId,
                      isInternalShopDeeplink: !0,
                      isOrbsExclusive: eA,
                  }),
                  _.default.track(F.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                      collectibles_shop_session_id: et?.sessionId,
                      sku_id: ed.categorySkuId,
                      page_type: w,
                      page_section: et?.pageSection,
                      page_category: et?.pageCategory,
                      cta_name: "shop latest category hero button",
                  }));
        }
        if (null == J || (!t && ed === W)) return null;
        function eS() {
            return t || U ? null : (0, l.jsx)(p.$, { variant: "overlay-primary", onClick: eb, text: eL });
        }
        return (0, l.jsx)(f.f5, {
            value: en,
            children: (0, l.jsxs)("div", {
                ref: q,
                className: a()(K.os, {
                    [K.hz]: null != X || (null != ed.foregroundBlock && 0 === ed.rankedSkuIds.length),
                    [K.MW]: null == X && null != ed.foregroundBlock && 0 === ed.rankedSkuIds.length,
                }),
                children: [
                    ev && null == X
                        ? (0, T.VA)({ isCustomCursorEnabled: Q, className: K.Xt, riveEventTargetRef: Z })
                        : null,
                    (0, l.jsx)("div", {
                        className: a()(K.vK, { [K.cN]: ev, [K.no]: ex }),
                        style: null != eC ? { background: eC } : void 0,
                        children:
                            null != ep &&
                            (0, l.jsx)(P.A, {
                                bannerStatic: ep,
                                bannerAnimated: eE,
                                bannerRive: ev ? ef : void 0,
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
                                    ev
                                        ? (0, l.jsx)("div", { className: K.fy, children: eS() })
                                        : (0, l.jsxs)("div", {
                                              className: a()(K.uZ, { [K.no]: ex, [K.RD]: ec }),
                                              children: [
                                                  t
                                                      ? (0, l.jsx)("div", { className: K.Hw })
                                                      : (0, l.jsxs)("div", {
                                                            className: K.Hw,
                                                            children: [
                                                                (0, b.HF)(ed.unpublishedAt) &&
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
                                                                        null != eg &&
                                                                            (0, l.jsx)("img", {
                                                                                className: K.rm,
                                                                                src: eg,
                                                                                alt: ed.name,
                                                                                style: eh?.toDesktopStyles(),
                                                                            }),
                                                                        null != ed.title &&
                                                                            (0, l.jsx)(m.D, {
                                                                                variant: "heading-xxl/semibold",
                                                                                className: ey ? K.DD : void 0,
                                                                                color: "text-strong",
                                                                                children: ed.title,
                                                                            }),
                                                                        null != ed.summary &&
                                                                            "" !== ed.summary &&
                                                                            (0, l.jsx)(h.B, {
                                                                                onClick:
                                                                                    null != el && eu
                                                                                        ? (e) => (0, k.h)(e, el, e_)
                                                                                        : void 0,
                                                                                children: (0, l.jsx)(g.E, {
                                                                                    variant: eu
                                                                                        ? "body-sm/normal"
                                                                                        : "body-md/normal",
                                                                                    className: a()(ey ? K.h4 : K.Tm, {
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
                                                  !U && !t && (0, l.jsx)("div", { className: K.pv, children: eS() }),
                                              ],
                                          }),
                                    !Y &&
                                        (w === $.G2.ORBS
                                            ? (0, l.jsx)(z, { heroBlockRecord: ed, isBlockLoading: t })
                                            : (0, l.jsx)(M.A, {
                                                  heroBlockRecord: ed,
                                                  tab: w,
                                                  isBlockLoading: t,
                                                  layout: w === $.G2.HOME ? "hscroll" : "feed",
                                              })),
                                ],
                            }),
                    }),
                    !t &&
                        ei &&
                        w === $.G2.HOME &&
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
