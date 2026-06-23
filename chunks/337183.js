s.d(t, { A: () => V });
var l = s(627968),
    r = s(64700),
    n = s(503698),
    a = s.n(n),
    i = s(172218),
    o = s(696292),
    u = s(651162),
    c = s(17928),
    d = s(812993),
    g = s(534514),
    E = s(834730),
    _ = s(821609),
    m = s(793574),
    S = s(688810),
    A = s(617986),
    L = s(318346),
    p = s(287809),
    h = s(174459),
    y = s(440938),
    C = s(993408),
    O = s(212407),
    I = s(521e3),
    x = s(146919),
    v = s(815280),
    k = s(449543),
    T = s(590180),
    b = s(511265),
    B = s(313276),
    f = s(206077),
    j = s(828614),
    N = s(561769),
    P = s(484469),
    R = s(375708),
    H = s(941734);
let G = (e) => (0, l.jsx)("div", { className: H.hm, children: (0, l.jsx)(M, { ...e }) }),
    D = (e) =>
        (0, l.jsx)(k.A, { gap: "xl", "aria-label": R.intl.string(R.t.HP8LNG), children: (0, l.jsx)(M, { ...e }) }),
    M = (e) => {
        let { isLoading: t, products: s, tab: r, totalCards: n } = e,
            a = (0, N.Mk)(r, "HeroBlockCards");
        if (t) return (0, l.jsx)(l.Fragment, { children: [...Array(n ?? 4)].map((e, t) => (0, l.jsx)(P.A, {}, t)) });
        let i = null != n ? s.slice(0, n) : s;
        return (0, l.jsx)(N.v3.Provider, {
            value: { flattenProductVariants: !1 },
            children: i.map((e, t) => {
                let s = T.A.getCategoryForProduct(e.skuId);
                return null == e || null == s
                    ? null
                    : (0, l.jsx)(
                          y.R9,
                          {
                              newValue: { tilePosition: t, pageSection: "top 4", categoryPosition: 0 },
                              children: (0, l.jsx)(j.A, { skuId: e.skuId, prioritizedCurrency: a }),
                          },
                          e.skuId,
                      );
            }),
        });
    },
    F = (e) => {
        let t,
            s,
            n,
            { heroBlockRecord: a, layout: i, tab: o, isBlockLoading: u = !1 } = e,
            { products: c } =
                ((t = (0, B.A)()),
                (s = r.useMemo(() => (u ? [] : t(a.rankedSkuIds)), [u, t, a.rankedSkuIds])),
                (n = (0, b.p)()(s)),
                { products: (0, f.X)(n) }),
            d = r.useMemo(
                () =>
                    !u &&
                    0 !== a.rankedSkuIds.length &&
                    !(c.length > 0) &&
                    a.rankedSkuIds.every((e) => T.A.getProduct(e)?.variantGroupStoreListingId != null),
                [u, a.rankedSkuIds, c.length],
            ),
            g = u || d;
        switch (i) {
            case "feed":
                return (0, l.jsx)(G, { heroBlockRecord: a, isLoading: g, products: c, tab: o });
            case "hscroll":
                return (0, l.jsx)(D, { heroBlockRecord: a, isLoading: g, products: c, tab: o });
        }
    };
var U = s(758836),
    w = s(652215);
let K = {
        rankedSkuIds: [],
        name: "",
        unpublishedAt: void 0,
        categorySkuId: void 0,
        summary: void 0,
        type: u.g.HERO,
        categoryStoreListingId: "",
    },
    V = (e) => {
        let {
                isLoading: t,
                handleTransition: s,
                category: n,
                heroBlock: k,
                tab: T,
                onVisibilityChange: b,
                badge: B,
                hideButton: f = !1,
                hideCards: j = !1,
            } = e,
            N = (0, i.K)(
                (e) => {
                    b?.(e);
                },
                0.1,
                null != b,
            ),
            P = r.useRef(null),
            G = (0, x.yB)("HeroBlock"),
            D = (0, c.bG)([p.default], () => p.default.getCurrentUser()),
            M = (0, y.uM)(),
            { analyticsLocations: V } = (0, S.Ay)(m.A.COLLECTIBLES_SHOP_HERO),
            W = r.useMemo(
                () =>
                    null != k
                        ? k
                        : null == n
                          ? K
                          : {
                                rankedSkuIds: n.heroRanking ?? [],
                                name: n.name,
                                unpublishedAt: n.unpublishedAt,
                                categorySkuId: n.skuId,
                                summary: n.summary,
                                type: u.g.HERO,
                                categoryStoreListingId: n.storeListingId,
                                bannerDisplayConfig: n.heroBannerDisplayConfig,
                                logoDisplayConfig: n.heroLogoDisplayConfig,
                                heroLogoUrl: n.heroLogoUrl,
                                heroBannerUrl: n.heroBannerUrl,
                                heroBannerAnimatedUrl: n.heroBannerAnimatedUrl,
                            },
                [k, n],
            ),
            {
                bannerDisplayConfig: X,
                logoDisplayConfig: Y,
                heroLogo: $,
                heroBannerStatic: z,
                heroBannerAnimated: Q,
                heroBannerRive: q,
            } = (0, O.Kk)(W),
            J = X?.responsive ?? !1,
            Z = X?.backgroundStyle,
            ee = null != q,
            et = T === U.G2.ORBS,
            es = null != n && n.isOrbsExclusive,
            el = et ? R.intl.string(R.t["1CdL8d"]) : R.intl.string(R.t.xYKa1T),
            er = () => {
                et
                    ? ((0, L.Y)({
                          pageType: w.liQ.SHOP_ORBS_TAB,
                          sectionType: w.JJy.ORBS_SHOP_HERO_BLOCK,
                          ctaObject: w.ZSU.CTA_TO_QUEST_HOME,
                      }),
                      (0, A.navigateToQuestHome)({ fromContent: o.u.ORBS_SHOP_HERO_CTA }))
                    : (s?.({
                          sourceButton: "shop latest category hero",
                          categorySkuId: W.categorySkuId,
                          isInternalShopDeeplink: !0,
                          isOrbsExclusive: es,
                      }),
                      h.default.track(w.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                          collectibles_shop_session_id: M?.sessionId,
                          sku_id: W.categorySkuId,
                          page_type: T,
                          page_section: M?.pageSection,
                          page_category: M?.pageCategory,
                          cta_name: "shop latest category hero button",
                      }));
            };
        if (null == D || (!t && W === K)) return null;
        let en = () => (t || f ? null : (0, l.jsx)(_.$, { variant: "overlay-primary", onClick: er, text: el }));
        return (0, l.jsx)(S.f5, {
            value: V,
            children: (0, l.jsxs)("div", {
                ref: N,
                className: H.os,
                children: [
                    ee ? (0, I.VA)({ isCustomCursorEnabled: G, className: H.Xt, riveEventTargetRef: P }) : null,
                    (0, l.jsx)("div", {
                        className: a()(H.vK, { [H.cN]: ee, [H.no]: J }),
                        style: null != Z ? { background: Z } : void 0,
                        children:
                            null != z &&
                            (0, l.jsx)(v.A, {
                                bannerStatic: z,
                                bannerAnimated: Q,
                                bannerRive: q,
                                isResponsive: J,
                                eventTargetRef: P,
                            }),
                    }),
                    (0, l.jsxs)("div", {
                        className: H.xX,
                        children: [
                            ee
                                ? (0, l.jsx)("div", { className: H.fy, children: en() })
                                : (0, l.jsxs)("div", {
                                      className: a()(H.bC, { [H.no]: J }),
                                      children: [
                                          t
                                              ? (0, l.jsx)("div", { className: H.Hw })
                                              : (0, l.jsxs)("div", {
                                                    className: H.Hw,
                                                    children: [
                                                        (0, C.HF)(W.unpublishedAt) &&
                                                            (0, l.jsx)(d.Lp, {
                                                                disableColor: !0,
                                                                text: R.intl.string(R.t["h/uBCR"]),
                                                                className: H.v0,
                                                            }),
                                                        (0, l.jsxs)("div", {
                                                            className: H.Wq,
                                                            children: [
                                                                null != B &&
                                                                    (0, l.jsx)("div", { className: H._I, children: B }),
                                                                null != $ &&
                                                                    (0, l.jsx)("img", {
                                                                        className: H.rm,
                                                                        src: $,
                                                                        alt: W.name,
                                                                        style: Y?.toDesktopStyles(),
                                                                    }),
                                                                null != W.title &&
                                                                    (0, l.jsx)(g.D, {
                                                                        variant: "heading-xxl/bold",
                                                                        className: H.DD,
                                                                        color: "text-strong",
                                                                        children: W.title,
                                                                    }),
                                                                null != W.summary &&
                                                                    "" !== W.summary &&
                                                                    (0, l.jsx)(E.E, {
                                                                        variant: "text-md/normal",
                                                                        className: et ? H.h4 : H.Tm,
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
                                          !f && !t && (0, l.jsx)("div", { className: H.IS, children: en() }),
                                      ],
                                  }),
                            !j &&
                                (0, l.jsx)(F, {
                                    heroBlockRecord: W,
                                    tab: T,
                                    isBlockLoading: t,
                                    layout: T === U.G2.HOME ? "hscroll" : "feed",
                                }),
                        ],
                    }),
                ],
            }),
        });
    };
