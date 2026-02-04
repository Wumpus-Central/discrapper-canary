n.d(t, {
    A: () => k,
});
var r = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    i = n(172218),
    o = n(696292),
    c = n(651162),
    u = n(311907),
    d = n(397927),
    g = n(688810),
    p = n(545986),
    m = n(318346),
    f = n(287809),
    b = n(954571),
    h = n(440938),
    _ = n(993408),
    E = n(379177),
    v = n(212407),
    C = n(333034),
    A = n(521e3),
    x = n(938191),
    S = n(815280),
    O = n(60140),
    y = n(758836),
    j = n(652215),
    L = n(985018),
    T = n(201073);
let I = {
        rankedSkuIds: [],
        name: "",
        unpublishedAt: void 0,
        categorySkuId: void 0,
        summary: void 0,
        type: c.g.HERO,
        categoryStoreListingId: "",
    },
    k = (e) => {
        var t;
        let { isLoading: n, handleTransition: s, category: k, heroBlock: N, tab: R, onVisibilityChange: P } = e,
            B = (0, i.K)(
                (e) => {
                    null == P || P(e);
                },
                0.1,
                null != P,
            ),
            w = l.useRef(null),
            D = (0, x.yB)("HeroBlock"),
            M = (0, u.bG)([f.default], () => f.default.getCurrentUser()),
            H = (0, h.uM)(),
            G = l.useMemo(() => {
                var e;
                return null != N
                    ? N
                    : null == k
                      ? I
                      : {
                            rankedSkuIds: null != (e = k.heroRanking) ? e : [],
                            name: k.name,
                            unpublishedAt: k.unpublishedAt,
                            categorySkuId: k.skuId,
                            summary: k.summary,
                            type: c.g.HERO,
                            categoryStoreListingId: k.storeListingId,
                            bannerDisplayConfig: k.heroBannerDisplayConfig,
                            logoDisplayConfig: k.heroLogoDisplayConfig,
                            heroLogoUrl: k.heroLogoUrl,
                            heroBannerUrl: k.heroBannerUrl,
                            heroBannerAnimatedUrl: k.heroBannerAnimatedUrl,
                        };
            }, [N, k]),
            U = (0, E.rR)("HeroBlock") && G.categorySkuId === y.op,
            {
                bannerDisplayConfig: F,
                logoDisplayConfig: V,
                heroLogo: z,
                heroBannerStatic: K,
                heroBannerAnimated: W,
                heroBannerRive: Y,
            } = (0, v.Kk)(G),
            q = null != (t = null == F ? void 0 : F.responsive) && t,
            Z = null == F ? void 0 : F.backgroundStyle,
            X = null != Y,
            J = R === y.G2.ORBS,
            Q = null != k && k.isOrbsExclusive,
            $ = J ? L.intl.string(L.t["1CdL8d"]) : L.intl.string(L.t.xYKa1T);
        J && U && ($ = L.intl.string(L.t.dVz4hi));
        let { analyticsLocations: ee } = (0, g.Ay)(),
            et = () => {
                J
                    ? ((0, m.Y)({
                          pageType: j.liQ.SHOP_ORBS_TAB,
                          sectionType: j.JJy.ORBS_SHOP_HERO_BLOCK,
                          ctaObject: j.ZSU.CTA_TO_QUEST_HOME,
                      }),
                      U
                          ? (0, C.A)({
                                analyticsLocations: ee,
                            })
                          : (0, p.navigateToQuestHome)({
                                fromContent: o.u.ORBS_SHOP_HERO_CTA,
                            }))
                    : (s({
                          sourceButton: "shop latest category hero",
                          categorySkuId: Q ? G.categorySkuId : void 0,
                          isInternalShopDeeplink: !0,
                          isOrbsExclusive: Q,
                      }),
                      b.default.track(j.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                          collectibles_shop_session_id: null == H ? void 0 : H.sessionId,
                          sku_id: G.categorySkuId,
                          page_type: R,
                          page_section: null == H ? void 0 : H.pageSection,
                          page_category: null == H ? void 0 : H.pageCategory,
                          cta_name: "shop latest category hero button",
                      }));
            };
        return null != M && (n || G !== I)
            ? (0, r.jsxs)("div", {
                  ref: B,
                  className: T.os,
                  children: [
                      X
                          ? (0, A.VA)({
                                isCustomCursorEnabled: D,
                                className: T.Xt,
                                riveEventTargetRef: w,
                            })
                          : null,
                      (0, r.jsx)("div", {
                          className: a()(T.vK, {
                              [T.cN]: X,
                              [T.no]: q,
                          }),
                          style:
                              null != Z
                                  ? {
                                        background: Z,
                                    }
                                  : void 0,
                          children:
                              null != K &&
                              (0, r.jsx)(S.A, {
                                  bannerStatic: K,
                                  bannerAnimated: W,
                                  bannerRive: Y,
                                  isResponsive: q,
                                  eventTargetRef: w,
                              }),
                      }),
                      (0, r.jsxs)("div", {
                          className: T.xX,
                          children: [
                              X
                                  ? (0, r.jsx)("div", {
                                        className: T.fy,
                                        children:
                                            !n &&
                                            (0, r.jsx)(d.Button, {
                                                variant: "overlay-primary",
                                                onClick: et,
                                                text: $,
                                            }),
                                    })
                                  : (0, r.jsxs)("div", {
                                        className: a()(T.bC, {
                                            [T.no]: q,
                                        }),
                                        children: [
                                            n
                                                ? (0, r.jsx)("div", {
                                                      className: T.Hw,
                                                  })
                                                : (0, r.jsxs)("div", {
                                                      className: T.Hw,
                                                      children: [
                                                          (0, _.HF)(G.unpublishedAt) &&
                                                              (0, r.jsx)(d.LpS, {
                                                                  disableColor: !0,
                                                                  text: L.intl.string(L.t["h/uBCR"]),
                                                                  className: T.v0,
                                                              }),
                                                          (0, r.jsxs)("div", {
                                                              className: T.Wq,
                                                              children: [
                                                                  null != z &&
                                                                      (0, r.jsx)("img", {
                                                                          className: T.rm,
                                                                          src: z,
                                                                          alt: G.name,
                                                                          style:
                                                                              null == V ? void 0 : V.toDesktopStyles(),
                                                                      }),
                                                                  null != G.title &&
                                                                      (0, r.jsx)(d.Heading, {
                                                                          variant: "heading-xxl/bold",
                                                                          className: T.DD,
                                                                          color: "text-strong",
                                                                          children: G.title,
                                                                      }),
                                                                  null != G.summary &&
                                                                      "" !== G.summary &&
                                                                      (0, r.jsx)(d.Text, {
                                                                          variant: "text-md/normal",
                                                                          className: J ? T.h4 : T.Tm,
                                                                          style:
                                                                              null != G.bannerTextColor
                                                                                  ? {
                                                                                        color: G.bannerTextColor,
                                                                                    }
                                                                                  : void 0,
                                                                          children: G.summary,
                                                                      }),
                                                              ],
                                                          }),
                                                      ],
                                                  }),
                                            !n &&
                                                (0, r.jsx)("div", {
                                                    className: T.IS,
                                                    children: (0, r.jsx)(d.Button, {
                                                        variant: "overlay-primary",
                                                        onClick: et,
                                                        text: $,
                                                    }),
                                                }),
                                        ],
                                    }),
                              (0, r.jsx)(O.A, {
                                  heroBlockRecord: G,
                                  tab: R,
                                  isBlockLoading: n,
                                  layout: R === y.G2.HOME ? "hscroll" : U ? "row" : "feed",
                              }),
                          ],
                      }),
                  ],
              })
            : null;
    };
