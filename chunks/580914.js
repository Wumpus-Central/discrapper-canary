n.d(t, { Z: () => N });
var r = n(54381),
    l = n(473749),
    a = n(120356),
    o = n.n(a),
    i = n(907331),
    s = n(636977),
    c = n(685816),
    u = n(442837),
    d = n(481060),
    f = n(906732),
    g = n(110560),
    p = n(507808),
    b = n(594174),
    m = n(626135),
    C = n(381585),
    h = n(884697),
    v = n(667090),
    E = n(763941),
    S = n(794324),
    _ = n(126026),
    O = n(190157),
    x = n(811847),
    y = n(859788),
    j = n(986105),
    k = n(215023),
    T = n(981631),
    I = n(388032),
    L = n(222194);
let B = (0, h.IC)(90),
    A = {
        rankedSkuIds: [],
        name: "",
        unpublishedAt: void 0,
        logoUrl: "",
        categorySkuId: void 0,
        bannerAsset: void 0,
        summary: "",
        type: c.z.HERO,
        categoryStoreListingId: "",
    },
    N = (e) => {
        var t;
        let { isLoading: n, handleTransition: a, category: N, heroBlock: P, tab: R, onVisibilityChange: Z } = e,
            w = (0, v.W)("HeroBlock"),
            H = (0, i.O)(
                (e) => {
                    null == Z || Z(e);
                },
                0.1,
                null != Z,
            ),
            D = l.useRef(null),
            M = (0, x.B)("HeroBlock"),
            F = (0, u.e7)([b.default], () => b.default.getCurrentUser()),
            W = (0, C.sp)(),
            U = l.useMemo(() => {
                var e, t;
                return null != P
                    ? P
                    : null == N
                      ? A
                      : {
                            rankedSkuIds: null != (e = N.heroRanking) ? e : [],
                            name: N.name,
                            unpublishedAt: N.unpublishedAt,
                            logoUrl: (0, h.uV)(null != (t = N.heroLogo) ? t : N.logo, { size: B }),
                            categorySkuId: N.skuId,
                            bannerAsset: N.heroBannerAsset,
                            summary: N.summary,
                            type: c.z.HERO,
                            categoryStoreListingId: N.storeListingId,
                            bannerDisplayConfig: N.heroBannerDisplayConfig,
                            logoDisplayConfig: N.heroLogoDisplayConfig,
                            heroLogoUrl: N.heroLogoUrl,
                            heroBannerUrl: N.heroBannerUrl,
                            heroBannerAnimatedUrl: N.heroBannerAnimatedUrl,
                        };
            }, [P, N]),
            V = (0, E.Pc)("HeroBlock") && U.categorySkuId === k.Hi,
            {
                bannerStyleOverrides: z,
                logoStyleOverrides: G,
                heroLogo: K,
                heroBannerStatic: Y,
                heroBannerAnimated: q,
                heroBannerRive: Q,
            } = (0, S.hr)(U),
            J = null != (t = null == z ? void 0 : z.responsive) && t,
            X = null == z ? void 0 : z.backgroundStyle,
            $ = null != Q,
            ee = R === k.AW.ORBS,
            et = null != N && N.isOrbsExclusive,
            en = ee ? I.intl.string(I.t["1CdL8d"]) : I.intl.string(I.t.xYKa1T);
        ee && V && (en = I.intl.string(I.t.dVz4hi));
        let { analyticsLocations: er } = (0, f.ZP)(),
            el = () => {
                ee
                    ? ((0, p.Y)({
                          pageType: T.ZY5.SHOP_ORBS_TAB,
                          sectionType: T.jXE.ORBS_SHOP_HERO_BLOCK,
                          ctaObject: T.qAy.CTA_TO_QUEST_HOME,
                      }),
                      V
                          ? (0, _.Z)({ analyticsLocations: er })
                          : (0, g.navigateToQuestHome)({ fromContent: s.j.ORBS_SHOP_HERO_CTA }))
                    : (a({
                          sourceButton: "shop latest category hero",
                          categorySkuId: et ? U.categorySkuId : void 0,
                          isInternalShopDeeplink: !0,
                          isOrbsExclusive: et,
                      }),
                      m.default.track(T.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                          collectibles_shop_session_id: null == W ? void 0 : W.sessionId,
                          sku_id: U.categorySkuId,
                          page_type: R,
                          page_section: null == W ? void 0 : W.pageSection,
                          page_category: null == W ? void 0 : W.pageCategory,
                          cta_name: "shop latest category hero button",
                      }));
            };
        return null != F && (n || U !== A)
            ? (0, r.jsxs)("div", {
                  ref: H,
                  className: L.heroBlock,
                  children: [
                      $
                          ? (0, O.gT)({
                                isCustomCursorEnabled: M,
                                className: L.riveEventOverlay,
                                riveEventTargetRef: D,
                            })
                          : null,
                      (0, r.jsx)("div", {
                          className: o()(L.banner, {
                              [L.rivBanner]: $,
                              [L.responsive]: J,
                          }),
                          style: null != X ? { background: X } : void 0,
                          children:
                              null != Y &&
                              (0, r.jsx)(y.Z, {
                                  bannerStatic: Y,
                                  bannerAnimated: q,
                                  bannerRive: Q,
                                  isResponsive: J,
                                  eventTargetRef: D,
                              }),
                      }),
                      (0, r.jsxs)("div", {
                          className: L.heroBlockContent,
                          children: [
                              $
                                  ? (0, r.jsx)("div", {
                                        className: L.rivBannerButtonContainer,
                                        children:
                                            !n &&
                                            (0, r.jsx)(d.Button, {
                                                variant: "overlay-primary",
                                                onClick: el,
                                                text: en,
                                            }),
                                    })
                                  : (0, r.jsxs)("div", {
                                        className: o()(L.heroHeaderContainer, { [L.responsive]: J }),
                                        children: [
                                            n
                                                ? (0, r.jsx)("div", {
                                                      className: L.heroHeaderBadgeLogoSummaryContainer,
                                                  })
                                                : (0, r.jsxs)("div", {
                                                      className: L.heroHeaderBadgeLogoSummaryContainer,
                                                      children: [
                                                          null != U.unpublishedAt &&
                                                              (0, r.jsx)(d.IGR, {
                                                                  disableColor: !0,
                                                                  text: I.intl.string(I.t["h/uBCR"]),
                                                                  className: L.limitedTimeBadge,
                                                              }),
                                                          (0, r.jsxs)("div", {
                                                              className: L.heroLogoNameContainer,
                                                              children: [
                                                                  null != K &&
                                                                      (0, r.jsx)("img", {
                                                                          className: L.heroHeaderLogo,
                                                                          src: K,
                                                                          alt: U.name,
                                                                          style:
                                                                              null == G ? void 0 : G.toDesktopStyles(),
                                                                      }),
                                                                  null != U.title &&
                                                                      (0, r.jsx)(d.Heading, {
                                                                          variant: "heading-xxl/bold",
                                                                          className: L.title,
                                                                          color: "text-strong",
                                                                          children: U.title,
                                                                      }),
                                                                  "" !== U.summary &&
                                                                      (0, r.jsx)(d.Text, {
                                                                          variant: "text-md/normal",
                                                                          className: ee
                                                                              ? L.orbsSubHeaderText
                                                                              : L.subHeaderText,
                                                                          style:
                                                                              null != U.bannerTextColor
                                                                                  ? { color: U.bannerTextColor }
                                                                                  : void 0,
                                                                          children: U.summary,
                                                                      }),
                                                              ],
                                                          }),
                                                      ],
                                                  }),
                                            !n &&
                                                (0, r.jsx)("div", {
                                                    className: L.heroHeaderButtonContainer,
                                                    children: (0, r.jsx)(d.Button, {
                                                        variant: "overlay-primary",
                                                        onClick: el,
                                                        text: en,
                                                    }),
                                                }),
                                        ],
                                    }),
                              (0, r.jsx)(j.Z, {
                                  heroBlockRecord: U,
                                  tab: R,
                                  isBlockLoading: n,
                                  layout: R === k.AW.HOME ? (w ? "hscroll" : "row") : V ? "row" : "feed",
                              }),
                          ],
                      }),
                  ],
              })
            : null;
    };
