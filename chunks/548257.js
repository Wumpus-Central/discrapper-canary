n.d(t, { Z: () => j });
var r = n(54381);
n(473749);
var l = n(120356),
    i = n.n(l),
    a = n(907331),
    s = n(636977),
    o = n(685816),
    c = n(442837),
    u = n(481060),
    d = n(110560),
    g = n(507808),
    p = n(594174),
    f = n(626135),
    m = n(381585),
    h = n(884697),
    C = n(870289),
    _ = n(794324),
    b = n(859788),
    v = n(497788),
    x = n(215023),
    E = n(981631),
    O = n(388032),
    S = n(687983);
(0, h.IC)(90);
let y = {
        rankedSkuIds: [],
        name: "",
        unpublishedAt: void 0,
        logoUrl: "",
        categorySkuId: void 0,
        bannerAsset: void 0,
        summary: "",
        type: o.z.REWARD_HERO,
        categoryStoreListingId: "",
        rewardSkuId: void 0,
    },
    j = (e) => {
        var t;
        let { isLoading: n = !1, handleTransition: l, heroBlock: o, tab: h, onVisibilityChange: j } = e,
            k = (0, a.O)(
                (e) => {
                    null == j || j(e);
                },
                0.1,
                null != j,
            ),
            I = (0, c.e7)([p.default], () => p.default.getCurrentUser()),
            T = (0, m.sp)(),
            {
                bannerStyleOverrides: L,
                logoStyleOverrides: B,
                heroLogo: P,
                heroBannerStatic: N,
                heroBannerAnimated: A,
            } = (0, _.hr)(o),
            R = null != (t = null == L ? void 0 : L.responsive) && t,
            Z = null == L ? void 0 : L.backgroundStyle,
            w = h === x.AW.ORBS ? O.intl.string(O.t["1CdL8d"]) : O.intl.string(O.t.xYKa1T),
            H = (0, C.FF)("CollectiblesContent");
        return null != I && (n || o !== y)
            ? (0, r.jsxs)("div", {
                  ref: k,
                  className: S.heroBlock,
                  children: [
                      (0, r.jsx)("div", {
                          className: S.banner,
                          style: null != Z ? { background: Z } : void 0,
                          children:
                              null != N &&
                              (0, r.jsx)(b.Z, {
                                  bannerStatic: N,
                                  bannerAnimated: A,
                                  isResponsive: R,
                              }),
                      }),
                      (0, r.jsxs)("div", {
                          className: S.heroBlockContent,
                          children: [
                              (0, r.jsxs)("div", {
                                  className: i()(S.heroHeaderContainer, { [S.responsive]: R }),
                                  children: [
                                      n
                                          ? (0, r.jsx)("div", { className: S.heroHeaderBadgeLogoSummaryContainer })
                                          : (0, r.jsxs)("div", {
                                                className: S.heroHeaderBadgeLogoSummaryContainer,
                                                children: [
                                                    null != o.unpublishedAt &&
                                                        (0, r.jsx)(u.IGR, {
                                                            disableColor: !0,
                                                            text: O.intl.string(O.t["h/uBCR"]),
                                                            className: S.limitedTimeBadge,
                                                        }),
                                                    (0, r.jsxs)("div", {
                                                        className: S.heroLogoNameContainer,
                                                        children: [
                                                            null != P &&
                                                                (0, r.jsx)("img", {
                                                                    className: S.heroHeaderLogo,
                                                                    src: P,
                                                                    alt: o.name,
                                                                    style: null == B ? void 0 : B.toDesktopStyles(),
                                                                }),
                                                            null != o.title &&
                                                                (0, r.jsx)(u.Heading, {
                                                                    variant: "heading-xxl/bold",
                                                                    className: S.title,
                                                                    color: "header-primary",
                                                                    children: o.title,
                                                                }),
                                                            "" !== o.summary &&
                                                                (0, r.jsx)(u.Text, {
                                                                    variant: "text-md/normal",
                                                                    className: S.subHeaderText,
                                                                    style:
                                                                        null != o.bannerTextColor
                                                                            ? { color: o.bannerTextColor }
                                                                            : void 0,
                                                                    children: o.summary,
                                                                }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                      !n &&
                                          (0, r.jsx)("div", {
                                              className: S.heroHeaderButtonContainer,
                                              children: (0, r.jsx)(u.Button, {
                                                  variant: "overlay-primary",
                                                  onClick: () => {
                                                      h === x.AW.ORBS
                                                          ? ((0, g.Y)({
                                                                pageType: E.ZY5.SHOP_ORBS_TAB,
                                                                sectionType: E.jXE.ORBS_SHOP_HERO_BLOCK,
                                                                ctaObject: E.qAy.CTA_TO_QUEST_HOME,
                                                            }),
                                                            (0, d.navigateToQuestHome)({
                                                                fromContent: s.j.ORBS_SHOP_HERO_CTA,
                                                            }))
                                                          : (l({
                                                                sourceButton: "shop reward category hero",
                                                                categorySkuId: H ? void 0 : o.categorySkuId,
                                                                isInternalShopDeeplink: !0,
                                                            }),
                                                            f.default.track(E.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                                collectibles_shop_session_id:
                                                                    null == T ? void 0 : T.sessionId,
                                                                sku_id: o.categorySkuId,
                                                                page_type: h,
                                                                page_section: null == T ? void 0 : T.pageSection,
                                                                page_category: null == T ? void 0 : T.pageCategory,
                                                                cta_name: "shop reward category hero button",
                                                            }));
                                                  },
                                                  text: w,
                                              }),
                                          }),
                                  ],
                              }),
                              (0, r.jsx)(v.Z, {
                                  isBlockLoading: n,
                                  heroBlock: o,
                                  tab: h,
                              }),
                          ],
                      }),
                  ],
              })
            : null;
    };
