n.d(t, { A: () => q });
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
    E = n(821609),
    f = n(793574),
    p = n(688810),
    x = n(321538),
    C = n(604913),
    v = n(773669),
    A = n(318346),
    L = n(287809),
    y = n(129230),
    b = n(857512),
    _ = n(993408);
let I = (0, n(945810).mj)({
    name: "2026-09-orbs-hero-carousel",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var S = n(304210),
    N = n(39196),
    j = n(480750),
    k = n(808598),
    O = n(93955),
    T = n(212407),
    R = n(521e3),
    D = n(532603),
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
    F = n(758836),
    $ = n(652215),
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
function Y(e) {
    let { heroBlockRecord: t, isBlockLoading: n } = e,
        r = I.useConfig({ location: "orbs_hero_block_cards" }).enabled;
    return (0, l.jsx)(M.A, { heroBlockRecord: t, tab: F.G2.ORBS, isBlockLoading: n, layout: r ? "hscroll" : "feed" });
}
let z = (e) => {
        let {
                isLoading: t,
                handleTransition: n,
                category: s,
                heroBlock: I,
                tab: w,
                onVisibilityChange: B,
                badge: H,
                hideButton: U = !1,
                hideCards: z = !1,
                foreground: q,
            } = e,
            X = (0, i.K)(
                (e) => {
                    B?.(e);
                },
                0.1,
                null != B,
            ),
            Q = r.useRef(null),
            Z = (0, D.yB)("HeroBlock"),
            J = (0, c.bG)([L.default], () => L.default.getCurrentUser()),
            ee = (0, c.bG)([v.default], () => v.default.locale),
            et = (0, b.uM)(),
            { analyticsLocations: en } = (0, p.Ay)(f.A.COLLECTIBLES_SHOP_HERO),
            el = (0, S.ST)(),
            er = r.useMemo(
                () =>
                    null != I
                        ? I
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
                [I, s],
            ),
            es = r.useMemo(() => (0, N.HF)(el, er), [el, er]),
            ea = es?.subtype === C.h5.TAKEOVER,
            ei = es?.subtype === C.h5.BASIC,
            eo = ea && el?.endsAt != null && null == (0, k.X)(el.endsAt) && w === F.G2.HOME,
            eu = ea && !eo,
            ec = (eu || ei) && w === F.G2.COLLECTION_INDEX,
            ed = r.useMemo(
                () => (null != er.foregroundBlock || null == el || eo ? er : (0, N.O8)(el, er, w, ee)),
                [el, er, eo, w, ee],
            ),
            {
                bannerDisplayConfig: em,
                logoDisplayConfig: eh,
                heroLogo: eg,
                heroBannerStatic: eE,
                heroBannerAnimated: ef,
                heroBannerRive: ep,
            } = (0, T.Kk)(ed),
            ex = em?.responsive ?? !1,
            eC = em?.backgroundStyle,
            ev = null != ep && !eu,
            eA = w === F.G2.ORBS,
            eL = null != s && s.isOrbsExclusive,
            ey = w === F.G2.COLLECTION_INDEX ? G.S.COLLECTION_INDEX : G.S.HOME,
            eb = eA ? V.intl.string(V.t["1CdL8d"]) : V.intl.string(V.t.xYKa1T);
        function e_() {
            eA
                ? ((0, A.Y)({
                      pageType: $.liQ.SHOP_ORBS_TAB,
                      sectionType: $.JJy.ORBS_SHOP_HERO_BLOCK,
                      ctaObject: $.ZSU.CTA_TO_QUEST_HOME,
                  }),
                  (0, x.mA)({ fromContent: o.u.ORBS_SHOP_HERO_CTA }))
                : (n?.({
                      sourceButton: "shop latest category hero",
                      categorySkuId: ed.categorySkuId,
                      isInternalShopDeeplink: !0,
                      isOrbsExclusive: eL,
                  }),
                  y.default.track($.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                      collectibles_shop_session_id: et?.sessionId,
                      sku_id: ed.categorySkuId,
                      page_type: w,
                      page_section: et?.pageSection,
                      page_category: et?.pageCategory,
                      cta_name: "shop latest category hero button",
                  }));
        }
        if (null == J || (!t && ed === W)) return null;
        function eI() {
            return t || U ? null : (0, l.jsx)(E.$, { variant: "overlay-primary", onClick: e_, text: eb });
        }
        return (0, l.jsx)(p.f5, {
            value: en,
            children: (0, l.jsxs)("div", {
                ref: X,
                className: a()(K.os, {
                    [K.hz]: null != q || (null != ed.foregroundBlock && 0 === ed.rankedSkuIds.length),
                    [K.MW]: null == q && null != ed.foregroundBlock && 0 === ed.rankedSkuIds.length,
                }),
                children: [
                    ev && null == q
                        ? (0, R.VA)({ isCustomCursorEnabled: Z, className: K.Xt, riveEventTargetRef: Q })
                        : null,
                    (0, l.jsx)("div", {
                        className: a()(K.vK, { [K.cN]: ev, [K.no]: ex }),
                        style: null != eC ? { background: eC } : void 0,
                        children:
                            null != eE &&
                            (0, l.jsx)(P.A, {
                                bannerStatic: eE,
                                bannerAnimated: ef,
                                bannerRive: ev ? ep : void 0,
                                isResponsive: ex,
                                eventTargetRef: Q,
                            }),
                    }),
                    (0, l.jsx)("div", {
                        className: a()(K.xX, { [K.ub]: ec, [K._H]: null != q }),
                        children:
                            q ??
                            (0, l.jsxs)(l.Fragment, {
                                children: [
                                    ev
                                        ? (0, l.jsx)("div", { className: K.fy, children: eI() })
                                        : (0, l.jsxs)("div", {
                                              className: a()(K.uZ, { [K.no]: ex, [K.RD]: ec }),
                                              children: [
                                                  t
                                                      ? (0, l.jsx)("div", { className: K.Hw })
                                                      : (0, l.jsxs)("div", {
                                                            className: K.Hw,
                                                            children: [
                                                                (0, _.HF)(ed.unpublishedAt) &&
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
                                                                                draggable: !1,
                                                                                src: eg,
                                                                                alt: ed.name,
                                                                                style: eh?.toDesktopStyles(),
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
                                                                            (0, l.jsx)(h.B, {
                                                                                onClick:
                                                                                    null != el && eu
                                                                                        ? (e) => (0, j.h)(e, el, ey)
                                                                                        : void 0,
                                                                                children: (0, l.jsx)(g.E, {
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
                                                                            surface: ey,
                                                                        }),
                                                                    }),
                                                            ],
                                                        }),
                                                  !U && !t && (0, l.jsx)("div", { className: K.pv, children: eI() }),
                                              ],
                                          }),
                                    !z &&
                                        (w === F.G2.ORBS
                                            ? (0, l.jsx)(Y, { heroBlockRecord: ed, isBlockLoading: t })
                                            : (0, l.jsx)(M.A, {
                                                  heroBlockRecord: ed,
                                                  tab: w,
                                                  isBlockLoading: t,
                                                  layout: w === F.G2.HOME ? "hscroll" : "feed",
                                                  onViewAll: e_,
                                              })),
                                ],
                            }),
                    }),
                    !t &&
                        ei &&
                        w === F.G2.HOME &&
                        (0, l.jsx)("div", {
                            className: a()(K.xX, K.uC),
                            children: (0, l.jsx)(O.A, { collectionId: ed.categorySkuId, variant: "full", surface: ey }),
                        }),
                ],
            }),
        });
    },
    q = function (e) {
        let t = e.heroBlock?.foregroundBlock;
        return null == t
            ? (0, l.jsx)(z, { ...e })
            : (0, l.jsx)(H, {
                  block: t,
                  isLoading: e.isLoading,
                  tab: e.tab,
                  renderHero: (t, n) => (0, l.jsx)(z, { ...e, foreground: t, isLoading: n }),
              });
    };
