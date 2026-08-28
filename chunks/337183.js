n.d(t, { A: () => K });
var r = n(477900),
    s = n(582128),
    l = n(503698),
    a = n.n(l),
    i = n(172218),
    o = n(696292),
    u = n(651162),
    c = n(17928),
    d = n(812993),
    E = n(297264),
    _ = n(834730),
    S = n(821609),
    L = n(793574),
    g = n(688810),
    A = n(617986),
    C = n(318346),
    p = n(287809),
    O = n(174459),
    m = n(440938),
    I = n(993408),
    y = n(212407),
    h = n(521e3),
    k = n(146919),
    T = n(815280),
    f = n(449543),
    B = n(590180),
    v = n(511265),
    x = n(313276),
    b = n(206077),
    P = n(258245),
    R = n(561769),
    H = n(484469),
    N = n(375708),
    j = n(105499);
function G(e) {
    return (0, r.jsx)("div", { className: j.hm, children: (0, r.jsx)(M, { ...e }) });
}
function D(e) {
    return (0, r.jsx)(f.A, { gap: "xl", "aria-label": N.intl.string(N.t.HP8LNG), children: (0, r.jsx)(M, { ...e }) });
}
function M(e) {
    let { isLoading: t, products: n, tab: s, totalCards: l } = e,
        a = (0, R.Mk)(s);
    if (t) return (0, r.jsx)(r.Fragment, { children: [...Array(l ?? 4)].map((e, t) => (0, r.jsx)(H.A, {}, t)) });
    let i = null != l ? n.slice(0, l) : n;
    return (0, r.jsx)(R.v3.Provider, {
        value: { flattenProductVariants: !1 },
        children: i.map((e, t) => {
            let n = B.A.getCategoryForProduct(e.skuId);
            return null == e || null == n
                ? null
                : (0, r.jsx)(
                      m.R9,
                      {
                          newValue: { tilePosition: t, pageSection: "top 4", categoryPosition: 0 },
                          children: (0, r.jsx)(P.A, { skuId: e.skuId, prioritizedCurrency: a }),
                      },
                      e.skuId,
                  );
        }),
    });
}
let U = function (e) {
    let t,
        n,
        l,
        { heroBlockRecord: a, layout: i, tab: o, isBlockLoading: u = !1 } = e,
        { products: c } =
            ((t = (0, x.A)()),
            (n = s.useMemo(() => (u ? [] : t(a.rankedSkuIds)), [u, t, a.rankedSkuIds])),
            (l = (0, v.p)()(n)),
            { products: (0, b.X)(l) }),
        d = s.useMemo(
            () =>
                !u &&
                0 !== a.rankedSkuIds.length &&
                !(c.length > 0) &&
                a.rankedSkuIds.every((e) => B.A.getProduct(e)?.variantGroupStoreListingId != null),
            [u, a.rankedSkuIds, c.length],
        ),
        E = u || d;
    switch (i) {
        case "feed":
            return (0, r.jsx)(G, { heroBlockRecord: a, isLoading: E, products: c, tab: o });
        case "hscroll":
            return (0, r.jsx)(D, { heroBlockRecord: a, isLoading: E, products: c, tab: o });
    }
};
var F = n(758836),
    w = n(652215);
let V = {
        rankedSkuIds: [],
        name: "",
        unpublishedAt: void 0,
        categorySkuId: void 0,
        summary: void 0,
        type: u.g.HERO,
        categoryStoreListingId: "",
    },
    K = (e) => {
        let {
                isLoading: t,
                handleTransition: n,
                category: l,
                heroBlock: f,
                tab: B,
                onVisibilityChange: v,
                badge: x,
                hideButton: b = !1,
                hideCards: P = !1,
            } = e,
            R = (0, i.K)(
                (e) => {
                    v?.(e);
                },
                0.1,
                null != v,
            ),
            H = s.useRef(null),
            G = (0, k.yB)("HeroBlock"),
            D = (0, c.bG)([p.default], () => p.default.getCurrentUser()),
            M = (0, m.uM)(),
            { analyticsLocations: K } = (0, g.Ay)(L.A.COLLECTIBLES_SHOP_HERO),
            W = s.useMemo(
                () =>
                    null != f
                        ? f
                        : null == l
                          ? V
                          : {
                                rankedSkuIds: l.heroRanking ?? [],
                                name: l.name,
                                unpublishedAt: l.unpublishedAt,
                                categorySkuId: l.skuId,
                                summary: l.summary,
                                type: u.g.HERO,
                                categoryStoreListingId: l.storeListingId,
                                bannerDisplayConfig: l.heroBannerDisplayConfig,
                                logoDisplayConfig: l.heroLogoDisplayConfig,
                                heroLogoUrl: l.heroLogoUrl,
                                heroBannerUrl: l.heroBannerUrl,
                                heroBannerAnimatedUrl: l.heroBannerAnimatedUrl,
                            },
                [f, l],
            ),
            {
                bannerDisplayConfig: X,
                logoDisplayConfig: Y,
                heroLogo: $,
                heroBannerStatic: q,
                heroBannerAnimated: J,
                heroBannerRive: Q,
            } = (0, y.Kk)(W),
            Z = X?.responsive ?? !1,
            z = X?.backgroundStyle,
            ee = null != Q,
            et = B === F.G2.ORBS,
            en = null != l && l.isOrbsExclusive,
            er = et ? N.intl.string(N.t["1CdL8d"]) : N.intl.string(N.t.xYKa1T);
        function es() {
            et
                ? ((0, C.Y)({
                      pageType: w.liQ.SHOP_ORBS_TAB,
                      sectionType: w.JJy.ORBS_SHOP_HERO_BLOCK,
                      ctaObject: w.ZSU.CTA_TO_QUEST_HOME,
                  }),
                  (0, A.mA)({ fromContent: o.u.ORBS_SHOP_HERO_CTA }))
                : (n?.({
                      sourceButton: "shop latest category hero",
                      categorySkuId: W.categorySkuId,
                      isInternalShopDeeplink: !0,
                      isOrbsExclusive: en,
                  }),
                  O.default.track(w.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                      collectibles_shop_session_id: M?.sessionId,
                      sku_id: W.categorySkuId,
                      page_type: B,
                      page_section: M?.pageSection,
                      page_category: M?.pageCategory,
                      cta_name: "shop latest category hero button",
                  }));
        }
        if (null == D || (!t && W === V)) return null;
        function el() {
            return t || b ? null : (0, r.jsx)(S.$, { variant: "overlay-primary", onClick: es, text: er });
        }
        return (0, r.jsx)(g.f5, {
            value: K,
            children: (0, r.jsxs)("div", {
                ref: R,
                className: j.os,
                children: [
                    ee ? (0, h.VA)({ isCustomCursorEnabled: G, className: j.Xt, riveEventTargetRef: H }) : null,
                    (0, r.jsx)("div", {
                        className: a()(j.vK, { [j.cN]: ee, [j.no]: Z }),
                        style: null != z ? { background: z } : void 0,
                        children:
                            null != q &&
                            (0, r.jsx)(T.A, {
                                bannerStatic: q,
                                bannerAnimated: J,
                                bannerRive: Q,
                                isResponsive: Z,
                                eventTargetRef: H,
                            }),
                    }),
                    (0, r.jsxs)("div", {
                        className: j.xX,
                        children: [
                            ee
                                ? (0, r.jsx)("div", { className: j.fy, children: el() })
                                : (0, r.jsxs)("div", {
                                      className: a()(j.bC, { [j.no]: Z }),
                                      children: [
                                          t
                                              ? (0, r.jsx)("div", { className: j.Hw })
                                              : (0, r.jsxs)("div", {
                                                    className: j.Hw,
                                                    children: [
                                                        (0, I.HF)(W.unpublishedAt) &&
                                                            (0, r.jsx)(d.Lp, {
                                                                disableColor: !0,
                                                                text: N.intl.string(N.t["h/uBCR"]),
                                                                className: j.v0,
                                                            }),
                                                        (0, r.jsxs)("div", {
                                                            className: j.Wq,
                                                            children: [
                                                                null != x &&
                                                                    (0, r.jsx)("div", { className: j._I, children: x }),
                                                                null != $ &&
                                                                    (0, r.jsx)("img", {
                                                                        className: j.rm,
                                                                        src: $,
                                                                        alt: W.name,
                                                                        style: Y?.toDesktopStyles(),
                                                                    }),
                                                                null != W.title &&
                                                                    (0, r.jsx)(E.D, {
                                                                        variant: "heading-xxl/bold",
                                                                        className: j.DD,
                                                                        color: "text-strong",
                                                                        children: W.title,
                                                                    }),
                                                                null != W.summary &&
                                                                    "" !== W.summary &&
                                                                    (0, r.jsx)(_.E, {
                                                                        variant: "text-md/normal",
                                                                        className: et ? j.h4 : j.Tm,
                                                                        style:
                                                                            null != W.bannerTextColor
                                                                                ? { color: W.bannerTextColor }
                                                                                : void 0,
                                                                        children: W.summary,
                                                                    }),
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                          !b && !t && (0, r.jsx)("div", { className: j.IS, children: el() }),
                                      ],
                                  }),
                            !P &&
                                (0, r.jsx)(U, {
                                    heroBlockRecord: W,
                                    tab: B,
                                    isBlockLoading: t,
                                    layout: B === F.G2.HOME ? "hscroll" : "feed",
                                }),
                        ],
                    }),
                ],
            }),
        });
    };
