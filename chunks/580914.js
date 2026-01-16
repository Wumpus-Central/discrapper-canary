n.d(t, { Z: () => A });
var r = n(54381),
    l = n(473749),
    a = n(120356),
    s = n.n(a),
    i = n(907331),
    o = n(636977),
    c = n(685816),
    u = n(442837),
    d = n(481060),
    f = n(906732),
    g = n(110560),
    b = n(507808),
    p = n(594174),
    m = n(626135),
    h = n(381585),
    C = n(884697),
    E = n(763941),
    v = n(794324),
    x = n(126026),
    S = n(190157),
    O = n(811847),
    _ = n(859788),
    y = n(986105),
    j = n(215023),
    k = n(981631),
    T = n(388032),
    I = n(222194);
let L = {
        rankedSkuIds: [],
        name: "",
        unpublishedAt: void 0,
        categorySkuId: void 0,
        summary: void 0,
        type: c.z.HERO,
        categoryStoreListingId: "",
    },
    A = (e) => {
        var t;
        let { isLoading: n, handleTransition: a, category: A, heroBlock: B, tab: N, onVisibilityChange: R } = e,
            P = (0, i.O)(
                (e) => {
                    null == R || R(e);
                },
                0.1,
                null != R,
            ),
            w = l.useRef(null),
            Z = (0, O.B)("HeroBlock"),
            D = (0, u.e7)([p.default], () => p.default.getCurrentUser()),
            M = (0, h.sp)(),
            H = l.useMemo(() => {
                var e;
                return null != B
                    ? B
                    : null == A
                      ? L
                      : {
                            rankedSkuIds: null != (e = A.heroRanking) ? e : [],
                            name: A.name,
                            unpublishedAt: A.unpublishedAt,
                            categorySkuId: A.skuId,
                            summary: A.summary,
                            type: c.z.HERO,
                            categoryStoreListingId: A.storeListingId,
                            bannerDisplayConfig: A.heroBannerDisplayConfig,
                            logoDisplayConfig: A.heroLogoDisplayConfig,
                            heroLogoUrl: A.heroLogoUrl,
                            heroBannerUrl: A.heroBannerUrl,
                            heroBannerAnimatedUrl: A.heroBannerAnimatedUrl,
                        };
            }, [B, A]),
            F = (0, E.Pc)("HeroBlock") && H.categorySkuId === j.Hi,
            {
                bannerDisplayConfig: W,
                logoDisplayConfig: U,
                heroLogo: z,
                heroBannerStatic: V,
                heroBannerAnimated: G,
                heroBannerRive: K,
            } = (0, v.hr)(H),
            Y = null != (t = null == W ? void 0 : W.responsive) && t,
            q = null == W ? void 0 : W.backgroundStyle,
            Q = null != K,
            J = N === j.AW.ORBS,
            X = null != A && A.isOrbsExclusive,
            $ = J ? T.intl.string(T.t["1CdL8d"]) : T.intl.string(T.t.xYKa1T);
        J && F && ($ = T.intl.string(T.t.dVz4hi));
        let { analyticsLocations: ee } = (0, f.ZP)(),
            et = () => {
                J
                    ? ((0, b.Y)({
                          pageType: k.ZY5.SHOP_ORBS_TAB,
                          sectionType: k.jXE.ORBS_SHOP_HERO_BLOCK,
                          ctaObject: k.qAy.CTA_TO_QUEST_HOME,
                      }),
                      F
                          ? (0, x.Z)({ analyticsLocations: ee })
                          : (0, g.navigateToQuestHome)({ fromContent: o.j.ORBS_SHOP_HERO_CTA }))
                    : (a({
                          sourceButton: "shop latest category hero",
                          categorySkuId: X ? H.categorySkuId : void 0,
                          isInternalShopDeeplink: !0,
                          isOrbsExclusive: X,
                      }),
                      m.default.track(k.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                          collectibles_shop_session_id: null == M ? void 0 : M.sessionId,
                          sku_id: H.categorySkuId,
                          page_type: N,
                          page_section: null == M ? void 0 : M.pageSection,
                          page_category: null == M ? void 0 : M.pageCategory,
                          cta_name: "shop latest category hero button",
                      }));
            };
        return null != D && (n || H !== L)
            ? (0, r.jsxs)("div", {
                  ref: P,
                  className: I.heroBlock,
                  children: [
                      Q
                          ? (0, S.gT)({
                                isCustomCursorEnabled: Z,
                                className: I.riveEventOverlay,
                                riveEventTargetRef: w,
                            })
                          : null,
                      (0, r.jsx)("div", {
                          className: s()(I.banner, {
                              [I.rivBanner]: Q,
                              [I.responsive]: Y,
                          }),
                          style: null != q ? { background: q } : void 0,
                          children:
                              null != V &&
                              (0, r.jsx)(_.Z, {
                                  bannerStatic: V,
                                  bannerAnimated: G,
                                  bannerRive: K,
                                  isResponsive: Y,
                                  eventTargetRef: w,
                              }),
                      }),
                      (0, r.jsxs)("div", {
                          className: I.heroBlockContent,
                          children: [
                              Q
                                  ? (0, r.jsx)("div", {
                                        className: I.rivBannerButtonContainer,
                                        children:
                                            !n &&
                                            (0, r.jsx)(d.Button, {
                                                variant: "overlay-primary",
                                                onClick: et,
                                                text: $,
                                            }),
                                    })
                                  : (0, r.jsxs)("div", {
                                        className: s()(I.heroHeaderContainer, { [I.responsive]: Y }),
                                        children: [
                                            n
                                                ? (0, r.jsx)("div", {
                                                      className: I.heroHeaderBadgeLogoSummaryContainer,
                                                  })
                                                : (0, r.jsxs)("div", {
                                                      className: I.heroHeaderBadgeLogoSummaryContainer,
                                                      children: [
                                                          (0, C.L9)(H.unpublishedAt) &&
                                                              (0, r.jsx)(d.IGR, {
                                                                  disableColor: !0,
                                                                  text: T.intl.string(T.t["h/uBCR"]),
                                                                  className: I.limitedTimeBadge,
                                                              }),
                                                          (0, r.jsxs)("div", {
                                                              className: I.heroLogoNameContainer,
                                                              children: [
                                                                  null != z &&
                                                                      (0, r.jsx)("img", {
                                                                          className: I.heroHeaderLogo,
                                                                          src: z,
                                                                          alt: H.name,
                                                                          style:
                                                                              null == U ? void 0 : U.toDesktopStyles(),
                                                                      }),
                                                                  null != H.title &&
                                                                      (0, r.jsx)(d.Heading, {
                                                                          variant: "heading-xxl/bold",
                                                                          className: I.title,
                                                                          color: "text-strong",
                                                                          children: H.title,
                                                                      }),
                                                                  null != H.summary &&
                                                                      "" !== H.summary &&
                                                                      (0, r.jsx)(d.Text, {
                                                                          variant: "text-md/normal",
                                                                          className: J
                                                                              ? I.orbsSubHeaderText
                                                                              : I.subHeaderText,
                                                                          style:
                                                                              null != H.bannerTextColor
                                                                                  ? { color: H.bannerTextColor }
                                                                                  : void 0,
                                                                          children: H.summary,
                                                                      }),
                                                              ],
                                                          }),
                                                      ],
                                                  }),
                                            !n &&
                                                (0, r.jsx)("div", {
                                                    className: I.heroHeaderButtonContainer,
                                                    children: (0, r.jsx)(d.Button, {
                                                        variant: "overlay-primary",
                                                        onClick: et,
                                                        text: $,
                                                    }),
                                                }),
                                        ],
                                    }),
                              (0, r.jsx)(y.Z, {
                                  heroBlockRecord: H,
                                  tab: N,
                                  isBlockLoading: n,
                                  layout: N === j.AW.HOME ? "hscroll" : F ? "row" : "feed",
                              }),
                          ],
                      }),
                  ],
              })
            : null;
    };
