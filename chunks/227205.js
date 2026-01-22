l.d(t, {
    A: () => N,
});
var n = l(627968),
    r = l(64700),
    s = l(503698),
    a = l.n(s),
    i = l(172218),
    o = l(696292),
    c = l(651162),
    u = l(311907),
    d = l(397927),
    f = l(688810),
    b = l(545986),
    g = l(318346),
    p = l(287809),
    m = l(954571),
    h = l(440938),
    E = l(993408),
    v = l(379177),
    A = l(212407),
    x = l(333034),
    S = l(521e3),
    C = l(938191),
    O = l(815280),
    _ = l(60140),
    y = l(758836),
    j = l(652215),
    L = l(985018),
    T = l(201073);
let I = {
        rankedSkuIds: [],
        name: "",
        unpublishedAt: void 0,
        categorySkuId: void 0,
        summary: void 0,
        type: c.g.HERO,
        categoryStoreListingId: "",
    },
    N = (e) => {
        var t;
        let { isLoading: l, handleTransition: s, category: N, heroBlock: k, tab: R, onVisibilityChange: P } = e,
            D = (0, i.K)(
                (e) => {
                    null == P || P(e);
                },
                0.1,
                null != P,
            ),
            w = r.useRef(null),
            B = (0, C.y)("HeroBlock"),
            M = (0, u.bG)([p.default], () => p.default.getCurrentUser()),
            H = (0, h.uM)(),
            G = r.useMemo(() => {
                var e;
                return null != k
                    ? k
                    : null == N
                      ? I
                      : {
                            rankedSkuIds: null != (e = N.heroRanking) ? e : [],
                            name: N.name,
                            unpublishedAt: N.unpublishedAt,
                            categorySkuId: N.skuId,
                            summary: N.summary,
                            type: c.g.HERO,
                            categoryStoreListingId: N.storeListingId,
                            bannerDisplayConfig: N.heroBannerDisplayConfig,
                            logoDisplayConfig: N.heroLogoDisplayConfig,
                            heroLogoUrl: N.heroLogoUrl,
                            heroBannerUrl: N.heroBannerUrl,
                            heroBannerAnimatedUrl: N.heroBannerAnimatedUrl,
                        };
            }, [k, N]),
            F = (0, v.rR)("HeroBlock") && G.categorySkuId === y.op,
            {
                bannerDisplayConfig: U,
                logoDisplayConfig: z,
                heroLogo: V,
                heroBannerStatic: K,
                heroBannerAnimated: W,
                heroBannerRive: Y,
            } = (0, A.Kk)(G),
            q = null != (t = null == U ? void 0 : U.responsive) && t,
            Z = null == U ? void 0 : U.backgroundStyle,
            X = null != Y,
            J = R === y.G2.ORBS,
            Q = null != N && N.isOrbsExclusive,
            $ = J ? L.intl.string(L.t["1CdL8d"]) : L.intl.string(L.t.xYKa1T);
        J && F && ($ = L.intl.string(L.t.dVz4hi));
        let { analyticsLocations: ee } = (0, f.Ay)(),
            et = () => {
                J
                    ? ((0, g.Y)({
                          pageType: j.liQ.SHOP_ORBS_TAB,
                          sectionType: j.JJy.ORBS_SHOP_HERO_BLOCK,
                          ctaObject: j.ZSU.CTA_TO_QUEST_HOME,
                      }),
                      F
                          ? (0, x.A)({
                                analyticsLocations: ee,
                            })
                          : (0, b.navigateToQuestHome)({
                                fromContent: o.u.ORBS_SHOP_HERO_CTA,
                            }))
                    : (s({
                          sourceButton: "shop latest category hero",
                          categorySkuId: Q ? G.categorySkuId : void 0,
                          isInternalShopDeeplink: !0,
                          isOrbsExclusive: Q,
                      }),
                      m.default.track(j.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                          collectibles_shop_session_id: null == H ? void 0 : H.sessionId,
                          sku_id: G.categorySkuId,
                          page_type: R,
                          page_section: null == H ? void 0 : H.pageSection,
                          page_category: null == H ? void 0 : H.pageCategory,
                          cta_name: "shop latest category hero button",
                      }));
            };
        return null != M && (l || G !== I)
            ? (0, n.jsxs)("div", {
                  ref: D,
                  className: T.os,
                  children: [
                      X
                          ? (0, S.VA)({
                                isCustomCursorEnabled: B,
                                className: T.Xt,
                                riveEventTargetRef: w,
                            })
                          : null,
                      (0, n.jsx)("div", {
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
                              (0, n.jsx)(O.A, {
                                  bannerStatic: K,
                                  bannerAnimated: W,
                                  bannerRive: Y,
                                  isResponsive: q,
                                  eventTargetRef: w,
                              }),
                      }),
                      (0, n.jsxs)("div", {
                          className: T.xX,
                          children: [
                              X
                                  ? (0, n.jsx)("div", {
                                        className: T.fy,
                                        children:
                                            !l &&
                                            (0, n.jsx)(d.Button, {
                                                variant: "overlay-primary",
                                                onClick: et,
                                                text: $,
                                            }),
                                    })
                                  : (0, n.jsxs)("div", {
                                        className: a()(T.bC, {
                                            [T.no]: q,
                                        }),
                                        children: [
                                            l
                                                ? (0, n.jsx)("div", {
                                                      className: T.Hw,
                                                  })
                                                : (0, n.jsxs)("div", {
                                                      className: T.Hw,
                                                      children: [
                                                          (0, E.HF)(G.unpublishedAt) &&
                                                              (0, n.jsx)(d.LpS, {
                                                                  disableColor: !0,
                                                                  text: L.intl.string(L.t["h/uBCR"]),
                                                                  className: T.v0,
                                                              }),
                                                          (0, n.jsxs)("div", {
                                                              className: T.Wq,
                                                              children: [
                                                                  null != V &&
                                                                      (0, n.jsx)("img", {
                                                                          className: T.rm,
                                                                          src: V,
                                                                          alt: G.name,
                                                                          style:
                                                                              null == z ? void 0 : z.toDesktopStyles(),
                                                                      }),
                                                                  null != G.title &&
                                                                      (0, n.jsx)(d.Heading, {
                                                                          variant: "heading-xxl/bold",
                                                                          className: T.DD,
                                                                          color: "text-strong",
                                                                          children: G.title,
                                                                      }),
                                                                  null != G.summary &&
                                                                      "" !== G.summary &&
                                                                      (0, n.jsx)(d.Text, {
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
                                            !l &&
                                                (0, n.jsx)("div", {
                                                    className: T.IS,
                                                    children: (0, n.jsx)(d.Button, {
                                                        variant: "overlay-primary",
                                                        onClick: et,
                                                        text: $,
                                                    }),
                                                }),
                                        ],
                                    }),
                              (0, n.jsx)(_.A, {
                                  heroBlockRecord: G,
                                  tab: R,
                                  isBlockLoading: l,
                                  layout: R === y.G2.HOME ? "hscroll" : F ? "row" : "feed",
                              }),
                          ],
                      }),
                  ],
              })
            : null;
    };
