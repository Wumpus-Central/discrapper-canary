n.d(t, { Z: () => B });
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
    E = n(667090),
    v = n(763941),
    S = n(794324),
    x = n(126026),
    O = n(190157),
    _ = n(811847),
    y = n(859788),
    j = n(986105),
    k = n(215023),
    T = n(981631),
    I = n(388032),
    L = n(222194);
let A = {
        rankedSkuIds: [],
        name: "",
        unpublishedAt: void 0,
        categorySkuId: void 0,
        summary: void 0,
        type: c.z.HERO,
        categoryStoreListingId: "",
    },
    B = (e) => {
        var t;
        let { isLoading: n, handleTransition: a, category: B, heroBlock: N, tab: R, onVisibilityChange: P } = e,
            w = (0, E.W)("HeroBlock"),
            Z = (0, i.O)(
                (e) => {
                    null == P || P(e);
                },
                0.1,
                null != P,
            ),
            D = l.useRef(null),
            M = (0, _.B)("HeroBlock"),
            H = (0, u.e7)([p.default], () => p.default.getCurrentUser()),
            F = (0, h.sp)(),
            W = l.useMemo(() => {
                var e;
                return null != N
                    ? N
                    : null == B
                      ? A
                      : {
                            rankedSkuIds: null != (e = B.heroRanking) ? e : [],
                            name: B.name,
                            unpublishedAt: B.unpublishedAt,
                            categorySkuId: B.skuId,
                            summary: B.summary,
                            type: c.z.HERO,
                            categoryStoreListingId: B.storeListingId,
                            bannerDisplayConfig: B.heroBannerDisplayConfig,
                            logoDisplayConfig: B.heroLogoDisplayConfig,
                            heroLogoUrl: B.heroLogoUrl,
                            heroBannerUrl: B.heroBannerUrl,
                            heroBannerAnimatedUrl: B.heroBannerAnimatedUrl,
                        };
            }, [N, B]),
            U = (0, v.Pc)("HeroBlock") && W.categorySkuId === k.Hi,
            {
                bannerDisplayConfig: z,
                logoDisplayConfig: V,
                heroLogo: G,
                heroBannerStatic: K,
                heroBannerAnimated: Y,
                heroBannerRive: q,
            } = (0, S.hr)(W),
            Q = null != (t = null == z ? void 0 : z.responsive) && t,
            J = null == z ? void 0 : z.backgroundStyle,
            X = null != q,
            $ = R === k.AW.ORBS,
            ee = null != B && B.isOrbsExclusive,
            et = $ ? I.intl.string(I.t["1CdL8d"]) : I.intl.string(I.t.xYKa1T);
        $ && U && (et = I.intl.string(I.t.dVz4hi));
        let { analyticsLocations: en } = (0, f.ZP)(),
            er = () => {
                $
                    ? ((0, b.Y)({
                          pageType: T.ZY5.SHOP_ORBS_TAB,
                          sectionType: T.jXE.ORBS_SHOP_HERO_BLOCK,
                          ctaObject: T.qAy.CTA_TO_QUEST_HOME,
                      }),
                      U
                          ? (0, x.Z)({ analyticsLocations: en })
                          : (0, g.navigateToQuestHome)({ fromContent: o.j.ORBS_SHOP_HERO_CTA }))
                    : (a({
                          sourceButton: "shop latest category hero",
                          categorySkuId: ee ? W.categorySkuId : void 0,
                          isInternalShopDeeplink: !0,
                          isOrbsExclusive: ee,
                      }),
                      m.default.track(T.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                          collectibles_shop_session_id: null == F ? void 0 : F.sessionId,
                          sku_id: W.categorySkuId,
                          page_type: R,
                          page_section: null == F ? void 0 : F.pageSection,
                          page_category: null == F ? void 0 : F.pageCategory,
                          cta_name: "shop latest category hero button",
                      }));
            };
        return null != H && (n || W !== A)
            ? (0, r.jsxs)("div", {
                  ref: Z,
                  className: L.heroBlock,
                  children: [
                      X
                          ? (0, O.gT)({
                                isCustomCursorEnabled: M,
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
                                                onClick: er,
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
                                                          (0, C.L9)(W.unpublishedAt) &&
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
                                                                              null == V ? void 0 : V.toDesktopStyles(),
                                                                      }),
                                                                  null != W.title &&
                                                                      (0, r.jsx)(d.Heading, {
                                                                          variant: "heading-xxl/bold",
                                                                          className: L.title,
                                                                          color: "text-strong",
                                                                          children: W.title,
                                                                      }),
                                                                  null != W.summary &&
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
                                                        onClick: er,
                                                        text: et,
                                                    }),
                                                }),
                                        ],
                                    }),
                              (0, r.jsx)(j.Z, {
                                  heroBlockRecord: W,
                                  tab: R,
                                  isBlockLoading: n,
                                  layout: R === k.AW.HOME ? (w ? "hscroll" : "row") : U ? "row" : "feed",
                              }),
                          ],
                      }),
                  ],
              })
            : null;
    };
