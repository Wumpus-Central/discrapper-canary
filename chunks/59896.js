n.d(t, { A: () => z });
var r = n(477900),
    s = n(582128),
    l = n(503698),
    i = n.n(l),
    a = n(172218),
    o = n(696292),
    u = n(651162),
    c = n(17928),
    d = n(812993),
    _ = n(297264),
    g = n(834730),
    E = n(821609),
    S = n(793574),
    p = n(688810),
    L = n(617986),
    m = n(318346),
    A = n(287809),
    C = n(174459),
    I = n(440938),
    y = n(993408),
    O = n(212407),
    h = n(521e3),
    v = n(146919),
    k = n(815280),
    f = n(449543),
    x = n(197935),
    T = n(590180);
let B = (0, n(945810).mj)({
    name: "2026-09-new-hscroll",
    kind: "user",
    defaultConfig: { useNewHScroll: !1 },
    variations: { 0: { useNewHScroll: !1 }, 1: { useNewHScroll: !0 } },
});
var P = n(511265),
    b = n(313276),
    R = n(206077),
    j = n(258245),
    H = n(561769),
    N = n(484469),
    G = n(375708),
    M = n(105499);
function D(e) {
    return String(e);
}
function U(e) {
    return e.skuId;
}
function w(e) {
    let { isLoading: t, products: n, tab: s } = e,
        l = (0, H.Mk)(s);
    return t
        ? (0, r.jsx)("div", {
              className: M.hm,
              children: [void 0, void 0, void 0, void 0].map((e, t) => (0, r.jsx)(N.A, {}, t)),
          })
        : (0, r.jsx)("div", {
              className: M.hm,
              children: (0, r.jsx)(H.v3.Provider, {
                  value: { flattenProductVariants: !1 },
                  children: n.map((e, t) => (0, r.jsx)(V, { item: e, index: t, prioritizedCurrency: l }, e.skuId)),
              }),
          });
}
function F(e) {
    let { isLoading: t, products: n, tab: s } = e,
        l = (0, H.Mk)(s),
        i = G.intl.string(G.t.HP8LNG);
    if (B.useConfig({ location: "hero_block_cards" }).useNewHScroll) {
        if (t) {
            let e = [void 0, void 0, void 0, void 0].map((e, t) => t);
            return (0, r.jsx)(x.A, {
                gap: "xl",
                "aria-label": i,
                items: e,
                getItemKey: D,
                renderItem: (e) => (0, r.jsx)(N.A, {}, e),
            });
        }
        return (0, r.jsx)(H.v3.Provider, {
            value: { flattenProductVariants: !1 },
            children: (0, r.jsx)(x.A, {
                gap: "xl",
                "aria-label": i,
                items: n,
                getItemKey: U,
                maintainFocusOnReorder: !0,
                renderItem: (e, t, n) =>
                    (0, r.jsx)(V, { item: e, index: n, prioritizedCurrency: l, listItemProps: t }, e.skuId),
            }),
        });
    }
    if (t) {
        let e = [void 0, void 0, void 0, void 0].map((e, t) => t);
        return (0, r.jsx)(f.A, { gap: "xl", "aria-label": i, children: e.map((e) => (0, r.jsx)(N.A, {}, e)) });
    }
    return (0, r.jsx)(H.v3.Provider, {
        value: { flattenProductVariants: !1 },
        children: (0, r.jsx)(f.A, {
            gap: "xl",
            "aria-label": i,
            children: n.map((e, t) => (0, r.jsx)(V, { item: e, index: t, prioritizedCurrency: l }, e.skuId)),
        }),
    });
}
function V(e) {
    let { item: t, index: n, prioritizedCurrency: s, listItemProps: l } = e;
    return (0, r.jsx)(I.R9, {
        newValue: { tilePosition: n, pageSection: "top 4", categoryPosition: 0 },
        children: (0, r.jsx)(j.A, { skuId: t.skuId, prioritizedCurrency: s, listItemProps: l }),
    });
}
let K = function (e) {
    let t,
        n,
        l,
        { heroBlockRecord: i, layout: a, tab: o, isBlockLoading: u = !1 } = e,
        { products: c } =
            ((t = (0, b.A)()),
            (n = (0, P.p)()),
            (l = s.useMemo(() => (u ? [] : n(t(i.rankedSkuIds))), [u, t, i.rankedSkuIds, n])),
            { products: (0, R.X)(l) }),
        d = s.useMemo(
            () =>
                !u &&
                0 !== i.rankedSkuIds.length &&
                !(c.length > 0) &&
                i.rankedSkuIds.every((e) => T.A.getProduct(e)?.variantGroupStoreListingId != null),
            [u, i.rankedSkuIds, c.length],
        ),
        _ = u || d,
        g = s.useMemo(() => c.filter((e) => null != T.A.getCategoryForProduct(e.skuId)), [c]);
    switch (a) {
        case "feed":
            return (0, r.jsx)(w, { isLoading: _, products: g, tab: o });
        case "hscroll":
            return (0, r.jsx)(F, { isLoading: _, products: g, tab: o });
    }
};
var W = n(758836),
    X = n(652215);
let Y = {
        rankedSkuIds: [],
        name: "",
        unpublishedAt: void 0,
        categorySkuId: void 0,
        summary: void 0,
        type: u.g.HERO,
        categoryStoreListingId: "",
    },
    z = (e) => {
        let {
                isLoading: t,
                handleTransition: n,
                category: l,
                heroBlock: f,
                tab: x,
                onVisibilityChange: T,
                badge: B,
                hideButton: P = !1,
                hideCards: b = !1,
            } = e,
            R = (0, a.K)(
                (e) => {
                    T?.(e);
                },
                0.1,
                null != T,
            ),
            j = s.useRef(null),
            H = (0, v.yB)("HeroBlock"),
            N = (0, c.bG)([A.default], () => A.default.getCurrentUser()),
            D = (0, I.uM)(),
            { analyticsLocations: U } = (0, p.Ay)(S.A.COLLECTIBLES_SHOP_HERO),
            w = s.useMemo(
                () =>
                    null != f
                        ? f
                        : null == l
                          ? Y
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
                bannerDisplayConfig: F,
                logoDisplayConfig: V,
                heroLogo: z,
                heroBannerStatic: $,
                heroBannerAnimated: q,
                heroBannerRive: Z,
            } = (0, O.Kk)(w),
            J = F?.responsive ?? !1,
            Q = F?.backgroundStyle,
            ee = null != Z,
            et = x === W.G2.ORBS,
            en = null != l && l.isOrbsExclusive,
            er = et ? G.intl.string(G.t["1CdL8d"]) : G.intl.string(G.t.xYKa1T);
        function es() {
            et
                ? ((0, m.Y)({
                      pageType: X.liQ.SHOP_ORBS_TAB,
                      sectionType: X.JJy.ORBS_SHOP_HERO_BLOCK,
                      ctaObject: X.ZSU.CTA_TO_QUEST_HOME,
                  }),
                  (0, L.mA)({ fromContent: o.u.ORBS_SHOP_HERO_CTA }))
                : (n?.({
                      sourceButton: "shop latest category hero",
                      categorySkuId: w.categorySkuId,
                      isInternalShopDeeplink: !0,
                      isOrbsExclusive: en,
                  }),
                  C.default.track(X.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                      collectibles_shop_session_id: D?.sessionId,
                      sku_id: w.categorySkuId,
                      page_type: x,
                      page_section: D?.pageSection,
                      page_category: D?.pageCategory,
                      cta_name: "shop latest category hero button",
                  }));
        }
        if (null == N || (!t && w === Y)) return null;
        function el() {
            return t || P ? null : (0, r.jsx)(E.$, { variant: "overlay-primary", onClick: es, text: er });
        }
        return (0, r.jsx)(p.f5, {
            value: U,
            children: (0, r.jsxs)("div", {
                ref: R,
                className: M.os,
                children: [
                    ee ? (0, h.VA)({ isCustomCursorEnabled: H, className: M.Xt, riveEventTargetRef: j }) : null,
                    (0, r.jsx)("div", {
                        className: i()(M.vK, { [M.cN]: ee, [M.no]: J }),
                        style: null != Q ? { background: Q } : void 0,
                        children:
                            null != $ &&
                            (0, r.jsx)(k.A, {
                                bannerStatic: $,
                                bannerAnimated: q,
                                bannerRive: Z,
                                isResponsive: J,
                                eventTargetRef: j,
                            }),
                    }),
                    (0, r.jsxs)("div", {
                        className: M.xX,
                        children: [
                            ee
                                ? (0, r.jsx)("div", { className: M.fy, children: el() })
                                : (0, r.jsxs)("div", {
                                      className: i()(M.bC, { [M.no]: J }),
                                      children: [
                                          t
                                              ? (0, r.jsx)("div", { className: M.Hw })
                                              : (0, r.jsxs)("div", {
                                                    className: M.Hw,
                                                    children: [
                                                        (0, y.HF)(w.unpublishedAt) &&
                                                            (0, r.jsx)(d.Lp, {
                                                                disableColor: !0,
                                                                text: G.intl.string(G.t["h/uBCR"]),
                                                                className: M.v0,
                                                            }),
                                                        (0, r.jsxs)("div", {
                                                            className: M.Wq,
                                                            children: [
                                                                null != B &&
                                                                    (0, r.jsx)("div", { className: M._I, children: B }),
                                                                null != z &&
                                                                    (0, r.jsx)("img", {
                                                                        className: M.rm,
                                                                        src: z,
                                                                        alt: w.name,
                                                                        style: V?.toDesktopStyles(),
                                                                    }),
                                                                null != w.title &&
                                                                    (0, r.jsx)(_.D, {
                                                                        variant: "heading-xxl/bold",
                                                                        className: M.DD,
                                                                        color: "text-strong",
                                                                        children: w.title,
                                                                    }),
                                                                null != w.summary &&
                                                                    "" !== w.summary &&
                                                                    (0, r.jsx)(g.E, {
                                                                        variant: "text-md/normal",
                                                                        className: et ? M.h4 : M.Tm,
                                                                        style:
                                                                            null != w.bannerTextColor
                                                                                ? { color: w.bannerTextColor }
                                                                                : void 0,
                                                                        children: w.summary,
                                                                    }),
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                          !P && !t && (0, r.jsx)("div", { className: M.IS, children: el() }),
                                      ],
                                  }),
                            !b &&
                                (0, r.jsx)(K, {
                                    heroBlockRecord: w,
                                    tab: x,
                                    isBlockLoading: t,
                                    layout: x === W.G2.HOME ? "hscroll" : "feed",
                                }),
                        ],
                    }),
                ],
            }),
        });
    };
