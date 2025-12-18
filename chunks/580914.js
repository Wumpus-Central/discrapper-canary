n.d(t, { Z: () => N });
var r = n(54381),
    l = n(473749),
    a = n(120356),
    s = n.n(a),
    o = n(907331),
    i = n(636977),
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
    E = n(667090),
    v = n(763941),
    S = n(794324),
    _ = n(126026),
    x = n(190157),
    O = n(811847),
    y = n(859788),
    k = n(986105),
    T = n(215023),
    j = n(981631),
    L = n(388032),
    I = n(222194);
let A = (0, C.IC)(90),
    B = {
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
        let { isLoading: n, handleTransition: a, category: N, heroBlock: R, tab: P, onVisibilityChange: Z } = e,
            w = (0, E.W)("HeroBlock"),
            D = (0, o.O)(
                (e) => {
                    null == Z || Z(e);
                },
                0.1,
                null != Z,
            ),
            H = l.useRef(null),
            M = (0, O.B)("HeroBlock"),
            F = (0, u.e7)([p.default], () => p.default.getCurrentUser()),
            W = (0, h.sp)(),
            U = l.useMemo(() => {
                var e, t;
                return null != R
                    ? R
                    : null == N
                      ? B
                      : {
                            rankedSkuIds: null != (e = N.heroRanking) ? e : [],
                            name: N.name,
                            unpublishedAt: N.unpublishedAt,
                            logoUrl: (0, C.uV)(null != (t = N.heroLogo) ? t : N.logo, { size: A }),
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
            }, [R, N]),
            z = (0, v.Pc)("HeroBlock") && U.categorySkuId === T.Hi,
            {
                bannerStyleOverrides: V,
                logoStyleOverrides: G,
                heroLogo: K,
                heroBannerStatic: Y,
                heroBannerAnimated: q,
                heroBannerRive: Q,
            } = (0, S.hr)(U),
            J = null != (t = null == V ? void 0 : V.responsive) && t,
            X = null == V ? void 0 : V.backgroundStyle,
            $ = null != Q,
            ee = P === T.AW.ORBS,
            et = null != N && N.isOrbsExclusive,
            en = ee ? L.intl.string(L.t["1CdL8d"]) : L.intl.string(L.t.xYKa1T);
        ee && z && (en = L.intl.string(L.t.dVz4hi));
        let { analyticsLocations: er } = (0, f.ZP)(),
            el = () => {
                ee
                    ? ((0, b.Y)({
                          pageType: j.ZY5.SHOP_ORBS_TAB,
                          sectionType: j.jXE.ORBS_SHOP_HERO_BLOCK,
                          ctaObject: j.qAy.CTA_TO_QUEST_HOME,
                      }),
                      z
                          ? (0, _.Z)({ analyticsLocations: er })
                          : (0, g.navigateToQuestHome)({ fromContent: i.j.ORBS_SHOP_HERO_CTA }))
                    : (a({
                          sourceButton: "shop latest category hero",
                          categorySkuId: et ? U.categorySkuId : void 0,
                          isInternalShopDeeplink: !0,
                          isOrbsExclusive: et,
                      }),
                      m.default.track(j.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                          collectibles_shop_session_id: null == W ? void 0 : W.sessionId,
                          sku_id: U.categorySkuId,
                          page_type: P,
                          page_section: null == W ? void 0 : W.pageSection,
                          page_category: null == W ? void 0 : W.pageCategory,
                          cta_name: "shop latest category hero button",
                      }));
            };
        return null != F && (n || U !== B)
            ? (0, r.jsxs)("div", {
                  ref: D,
                  className: I.heroBlock,
                  children: [
                      $
                          ? (0, x.gT)({
                                isCustomCursorEnabled: M,
                                className: I.riveEventOverlay,
                                riveEventTargetRef: H,
                            })
                          : null,
                      (0, r.jsx)("div", {
                          className: s()(I.banner, {
                              [I.rivBanner]: $,
                              [I.responsive]: J,
                          }),
                          style: null != X ? { background: X } : void 0,
                          children:
                              null != Y &&
                              (0, r.jsx)(y.Z, {
                                  bannerStatic: Y,
                                  bannerAnimated: q,
                                  bannerRive: Q,
                                  isResponsive: J,
                                  eventTargetRef: H,
                              }),
                      }),
                      (0, r.jsxs)("div", {
                          className: I.heroBlockContent,
                          children: [
                              $
                                  ? (0, r.jsx)("div", {
                                        className: I.rivBannerButtonContainer,
                                        children:
                                            !n &&
                                            (0, r.jsx)(d.Button, {
                                                variant: "overlay-primary",
                                                onClick: el,
                                                text: en,
                                            }),
                                    })
                                  : (0, r.jsxs)("div", {
                                        className: s()(I.heroHeaderContainer, { [I.responsive]: J }),
                                        children: [
                                            n
                                                ? (0, r.jsx)("div", {
                                                      className: I.heroHeaderBadgeLogoSummaryContainer,
                                                  })
                                                : (0, r.jsxs)("div", {
                                                      className: I.heroHeaderBadgeLogoSummaryContainer,
                                                      children: [
                                                          (0, C.L9)(U.unpublishedAt) &&
                                                              (0, r.jsx)(d.IGR, {
                                                                  disableColor: !0,
                                                                  text: L.intl.string(L.t["h/uBCR"]),
                                                                  className: I.limitedTimeBadge,
                                                              }),
                                                          (0, r.jsxs)("div", {
                                                              className: I.heroLogoNameContainer,
                                                              children: [
                                                                  null != K &&
                                                                      (0, r.jsx)("img", {
                                                                          className: I.heroHeaderLogo,
                                                                          src: K,
                                                                          alt: U.name,
                                                                          style:
                                                                              null == G ? void 0 : G.toDesktopStyles(),
                                                                      }),
                                                                  null != U.title &&
                                                                      (0, r.jsx)(d.Heading, {
                                                                          variant: "heading-xxl/bold",
                                                                          className: I.title,
                                                                          color: "text-strong",
                                                                          children: U.title,
                                                                      }),
                                                                  "" !== U.summary &&
                                                                      (0, r.jsx)(d.Text, {
                                                                          variant: "text-md/normal",
                                                                          className: ee
                                                                              ? I.orbsSubHeaderText
                                                                              : I.subHeaderText,
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
                                                    className: I.heroHeaderButtonContainer,
                                                    children: (0, r.jsx)(d.Button, {
                                                        variant: "overlay-primary",
                                                        onClick: el,
                                                        text: en,
                                                    }),
                                                }),
                                        ],
                                    }),
                              (0, r.jsx)(k.Z, {
                                  heroBlockRecord: U,
                                  tab: P,
                                  isBlockLoading: n,
                                  layout: P === T.AW.HOME ? (w ? "hscroll" : "row") : z ? "row" : "feed",
                              }),
                          ],
                      }),
                  ],
              })
            : null;
    };
