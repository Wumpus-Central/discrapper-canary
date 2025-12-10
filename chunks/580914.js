n.d(t, { Z: () => P });
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
    v = n(667090),
    E = n(763941),
    S = n(794324),
    O = n(126026),
    x = n(190157),
    y = n(811847),
    j = n(859788),
    k = n(986105),
    T = n(215023),
    I = n(981631),
    L = n(388032),
    B = n(310582);
let N = (0, _.IC)(90),
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
    P = (e) => {
        var t;
        let { isLoading: n, handleTransition: i, category: P, heroBlock: R, tab: Z, onVisibilityChange: w } = e,
            H = (0, v.W)("HeroBlock"),
            D = (0, o.O)(
                (e) => {
                    null == w || w(e);
                },
                0.1,
                null != w,
            ),
            M = l.useRef(null),
            F = (0, y.B)("HeroBlock"),
            W = (0, u.e7)([m.default], () => m.default.getCurrentUser()),
            U = (0, h.sp)(),
            V = l.useMemo(() => {
                var e, t;
                return null != R
                    ? R
                    : null == P
                      ? A
                      : {
                            rankedSkuIds: null != (e = P.heroRanking) ? e : [],
                            name: P.name,
                            unpublishedAt: P.unpublishedAt,
                            logoUrl: (0, _.uV)(null != (t = P.heroLogo) ? t : P.logo, { size: N }),
                            categorySkuId: P.skuId,
                            bannerAsset: P.heroBannerAsset,
                            summary: P.summary,
                            type: c.z.HERO,
                            categoryStoreListingId: P.storeListingId,
                            bannerDisplayConfig: P.heroBannerDisplayConfig,
                            logoDisplayConfig: P.heroLogoDisplayConfig,
                            heroLogoUrl: P.heroLogoUrl,
                            heroBannerUrl: P.heroBannerUrl,
                            heroBannerAnimatedUrl: P.heroBannerAnimatedUrl,
                        };
            }, [R, P]),
            z = (0, E.Pc)("HeroBlock") && V.categorySkuId === T.Hi,
            {
                bannerStyleOverrides: G,
                logoStyleOverrides: K,
                heroLogo: Y,
                heroBannerStatic: q,
                heroBannerAnimated: Q,
                heroBannerRive: J,
            } = (0, S.hr)(V),
            X = null != (t = null == G ? void 0 : G.responsive) && t,
            $ = null == G ? void 0 : G.backgroundStyle,
            ee = null != J,
            et = Z === T.AW.ORBS,
            en = null != P && P.isOrbsExclusive,
            er = et ? L.intl.string(L.t["1CdL8d"]) : L.intl.string(L.t.xYKa1T);
        et && z && (er = L.intl.string(L.t.dVz4hi));
        let el = (0, b.FF)("CollectiblesContent"),
            { analyticsLocations: ei } = (0, g.ZP)(),
            es = () => {
                et
                    ? ((0, p.Y)({
                          pageType: I.ZY5.SHOP_ORBS_TAB,
                          sectionType: I.jXE.ORBS_SHOP_HERO_BLOCK,
                          ctaObject: I.qAy.CTA_TO_QUEST_HOME,
                      }),
                      z
                          ? (0, O.Z)({ analyticsLocations: ei })
                          : (0, f.navigateToQuestHome)({ fromContent: a.j.ORBS_SHOP_HERO_CTA }))
                    : (i({
                          sourceButton: "shop latest category hero",
                          categorySkuId: !el || en ? V.categorySkuId : void 0,
                          isInternalShopDeeplink: !0,
                          isOrbsExclusive: en,
                      }),
                      C.default.track(I.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                          collectibles_shop_session_id: null == U ? void 0 : U.sessionId,
                          sku_id: V.categorySkuId,
                          page_type: Z,
                          page_section: null == U ? void 0 : U.pageSection,
                          page_category: null == U ? void 0 : U.pageCategory,
                          cta_name: "shop latest category hero button",
                      }));
            };
        return null != W && (n || V !== A)
            ? (0, r.jsxs)("div", {
                  ref: D,
                  className: B.heroBlock,
                  children: [
                      ee
                          ? (0, x.gT)({
                                isCustomCursorEnabled: F,
                                className: B.riveEventOverlay,
                                riveEventTargetRef: M,
                            })
                          : null,
                      (0, r.jsx)("div", {
                          className: s()(B.banner, {
                              [B.rivBanner]: ee,
                              [B.responsive]: X,
                          }),
                          style: null != $ ? { background: $ } : void 0,
                          children:
                              null != q &&
                              (0, r.jsx)(j.Z, {
                                  bannerStatic: q,
                                  bannerAnimated: Q,
                                  bannerRive: J,
                                  isResponsive: X,
                                  eventTargetRef: M,
                              }),
                      }),
                      (0, r.jsxs)("div", {
                          className: B.heroBlockContent,
                          children: [
                              ee
                                  ? (0, r.jsx)("div", {
                                        className: B.rivBannerButtonContainer,
                                        children:
                                            !n &&
                                            (0, r.jsx)(d.Button, {
                                                variant: "overlay-primary",
                                                onClick: es,
                                                text: er,
                                            }),
                                    })
                                  : (0, r.jsxs)("div", {
                                        className: s()(B.heroHeaderContainer, { [B.responsive]: X }),
                                        children: [
                                            n
                                                ? (0, r.jsx)("div", {
                                                      className: B.heroHeaderBadgeLogoSummaryContainer,
                                                  })
                                                : (0, r.jsxs)("div", {
                                                      className: B.heroHeaderBadgeLogoSummaryContainer,
                                                      children: [
                                                          null != V.unpublishedAt &&
                                                              (0, r.jsx)(d.IGR, {
                                                                  disableColor: !0,
                                                                  text: L.intl.string(L.t["h/uBCR"]),
                                                                  className: B.limitedTimeBadge,
                                                              }),
                                                          (0, r.jsxs)("div", {
                                                              className: B.heroLogoNameContainer,
                                                              children: [
                                                                  null != Y &&
                                                                      (0, r.jsx)("img", {
                                                                          className: B.heroHeaderLogo,
                                                                          src: Y,
                                                                          alt: V.name,
                                                                          style:
                                                                              null == K ? void 0 : K.toDesktopStyles(),
                                                                      }),
                                                                  null != V.title &&
                                                                      (0, r.jsx)(d.Heading, {
                                                                          variant: "heading-xxl/bold",
                                                                          className: B.title,
                                                                          color: "header-primary",
                                                                          children: V.title,
                                                                      }),
                                                                  "" !== V.summary &&
                                                                      (0, r.jsx)(d.Text, {
                                                                          variant: "text-md/normal",
                                                                          className: et
                                                                              ? B.orbsSubHeaderText
                                                                              : B.subHeaderText,
                                                                          style:
                                                                              null != V.bannerTextColor
                                                                                  ? { color: V.bannerTextColor }
                                                                                  : void 0,
                                                                          children: V.summary,
                                                                      }),
                                                              ],
                                                          }),
                                                      ],
                                                  }),
                                            !n &&
                                                (0, r.jsx)("div", {
                                                    className: B.heroHeaderButtonContainer,
                                                    children: (0, r.jsx)(d.Button, {
                                                        variant: "overlay-primary",
                                                        onClick: es,
                                                        text: er,
                                                    }),
                                                }),
                                        ],
                                    }),
                              (0, r.jsx)(k.Z, {
                                  heroBlockRecord: V,
                                  tab: Z,
                                  isBlockLoading: n,
                                  layout: Z === T.AW.HOME ? (H ? "hscroll" : "row") : z ? "row" : "feed",
                              }),
                          ],
                      }),
                  ],
              })
            : null;
    };
