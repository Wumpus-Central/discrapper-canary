n.d(t, { Z: () => A });
var r = n(54381),
    l = n(473749),
    i = n(120356),
    s = n.n(i),
    o = n(907331),
    a = n(636977),
    c = n(685816),
    u = n(442837),
    d = n(481060),
    g = n(906732),
    f = n(110560),
    p = n(507808),
    m = n(594174),
    C = n(626135),
    h = n(381585),
    _ = n(884697),
    b = n(870289),
    v = n(763941),
    E = n(794324),
    O = n(126026),
    S = n(190157),
    x = n(811847),
    y = n(859788),
    j = n(986105),
    k = n(215023),
    T = n(981631),
    I = n(388032),
    L = n(310582);
let B = (0, _.IC)(90),
    N = {
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
    A = (e) => {
        var t;
        let { isLoading: n, handleTransition: i, category: A, heroBlock: P, tab: R, onVisibilityChange: Z } = e,
            w = (0, o.O)(
                (e) => {
                    null == Z || Z(e);
                },
                0.1,
                null != Z,
            ),
            D = l.useRef(null),
            H = (0, x.B)("HeroBlock"),
            M = (0, u.e7)([m.default], () => m.default.getCurrentUser()),
            F = (0, h.sp)(),
            W = l.useMemo(() => {
                var e, t;
                return null != P
                    ? P
                    : null == A
                      ? N
                      : {
                            rankedSkuIds: null != (e = A.heroRanking) ? e : [],
                            name: A.name,
                            unpublishedAt: A.unpublishedAt,
                            logoUrl: (0, _.uV)(null != (t = A.heroLogo) ? t : A.logo, { size: B }),
                            categorySkuId: A.skuId,
                            bannerAsset: A.heroBannerAsset,
                            summary: A.summary,
                            type: c.z.HERO,
                            categoryStoreListingId: A.storeListingId,
                            bannerDisplayConfig: A.heroBannerDisplayConfig,
                            logoDisplayConfig: A.heroLogoDisplayConfig,
                            heroLogoUrl: A.heroLogoUrl,
                            heroBannerUrl: A.heroBannerUrl,
                            heroBannerAnimatedUrl: A.heroBannerAnimatedUrl,
                        };
            }, [P, A]),
            U = (0, v.Pc)("HeroBlock") && W.categorySkuId === k.Hi,
            {
                bannerStyleOverrides: V,
                logoStyleOverrides: z,
                heroLogo: G,
                heroBannerStatic: K,
                heroBannerAnimated: Y,
                heroBannerRive: q,
            } = (0, E.hr)(W),
            Q = null != (t = null == V ? void 0 : V.responsive) && t,
            J = null == V ? void 0 : V.backgroundStyle,
            X = null != q,
            $ = R === k.AW.ORBS,
            ee = null != A && A.isOrbsExclusive,
            et = $ ? I.intl.string(I.t["1CdL8d"]) : I.intl.string(I.t.xYKa1T);
        $ && U && (et = I.intl.string(I.t.dVz4hi));
        let en = (0, b.FF)("CollectiblesContent"),
            { analyticsLocations: er } = (0, g.ZP)(),
            el = () => {
                $
                    ? ((0, p.Y)({
                          pageType: T.ZY5.SHOP_ORBS_TAB,
                          sectionType: T.jXE.ORBS_SHOP_HERO_BLOCK,
                          ctaObject: T.qAy.CTA_TO_QUEST_HOME,
                      }),
                      U
                          ? (0, O.Z)({ analyticsLocations: er })
                          : (0, f.navigateToQuestHome)({ fromContent: a.j.ORBS_SHOP_HERO_CTA }))
                    : (i({
                          sourceButton: "shop latest category hero",
                          categorySkuId: !en || ee ? W.categorySkuId : void 0,
                          isInternalShopDeeplink: !0,
                          isOrbsExclusive: ee,
                      }),
                      C.default.track(T.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                          collectibles_shop_session_id: null == F ? void 0 : F.sessionId,
                          sku_id: W.categorySkuId,
                          page_type: R,
                          page_section: null == F ? void 0 : F.pageSection,
                          page_category: null == F ? void 0 : F.pageCategory,
                          cta_name: "shop latest category hero button",
                      }));
            };
        return null != M && (n || W !== N)
            ? (0, r.jsxs)("div", {
                  ref: w,
                  className: L.heroBlock,
                  children: [
                      X
                          ? (0, S.gT)({
                                isCustomCursorEnabled: H,
                                className: L.riveEventOverlay,
                                riveEventTargetRef: D,
                            })
                          : null,
                      (0, r.jsx)("div", {
                          className: s()(L.banner, {
                              [L.rivBanner]: X,
                              [L.responsive]: Q,
                          }),
                          style: null != J ? { background: J } : void 0,
                          children:
                              null != K &&
                              (0, r.jsx)(y.Z, {
                                  bannerStatic: K,
                                  bannerAnimated: Y,
                                  bannerRive: q,
                                  isResponsive: Q,
                                  eventTargetRef: D,
                              }),
                      }),
                      (0, r.jsxs)("div", {
                          className: L.heroBlockContent,
                          children: [
                              X
                                  ? (0, r.jsx)("div", {
                                        className: L.rivBannerButtonContainer,
                                        children:
                                            !n &&
                                            (0, r.jsx)(d.Button, {
                                                variant: "overlay-primary",
                                                onClick: el,
                                                text: et,
                                            }),
                                    })
                                  : (0, r.jsxs)("div", {
                                        className: s()(L.heroHeaderContainer, { [L.responsive]: Q }),
                                        children: [
                                            n
                                                ? (0, r.jsx)("div", {
                                                      className: L.heroHeaderBadgeLogoSummaryContainer,
                                                  })
                                                : (0, r.jsxs)("div", {
                                                      className: L.heroHeaderBadgeLogoSummaryContainer,
                                                      children: [
                                                          null != W.unpublishedAt &&
                                                              (0, r.jsx)(d.IGR, {
                                                                  disableColor: !0,
                                                                  text: I.intl.string(I.t["h/uBCR"]),
                                                                  className: L.limitedTimeBadge,
                                                              }),
                                                          (0, r.jsxs)("div", {
                                                              className: L.heroLogoNameContainer,
                                                              children: [
                                                                  null != G &&
                                                                      (0, r.jsx)("img", {
                                                                          className: L.heroHeaderLogo,
                                                                          src: G,
                                                                          alt: W.name,
                                                                          style:
                                                                              null == z ? void 0 : z.toDesktopStyles(),
                                                                      }),
                                                                  null != W.title &&
                                                                      (0, r.jsx)(d.Heading, {
                                                                          variant: "heading-xxl/bold",
                                                                          className: L.title,
                                                                          color: "header-primary",
                                                                          children: W.title,
                                                                      }),
                                                                  "" !== W.summary &&
                                                                      (0, r.jsx)(d.Text, {
                                                                          variant: "text-md/normal",
                                                                          className: $
                                                                              ? L.orbsSubHeaderText
                                                                              : L.subHeaderText,
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
                                            !n &&
                                                (0, r.jsx)("div", {
                                                    className: L.heroHeaderButtonContainer,
                                                    children: (0, r.jsx)(d.Button, {
                                                        variant: "overlay-primary",
                                                        onClick: el,
                                                        text: et,
                                                    }),
                                                }),
                                        ],
                                    }),
                              (0, r.jsx)(j.Z, {
                                  heroBlockRecord: W,
                                  tab: R,
                                  isBlockLoading: n,
                                  layout: R === k.AW.HOME || U ? "row" : "feed",
                              }),
                          ],
                      }),
                  ],
              })
            : null;
    };
