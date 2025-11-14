n.d(t, { Z: () => j });
var r = n(951288);
n(647438);
var l = n(120356),
    i = n.n(l),
    a = n(907331),
    o = n(636977),
    s = n(685816),
    c = n(442837),
    u = n(481060),
    d = n(110560),
    p = n(507808),
    g = n(594174),
    f = n(626135),
    h = n(381585),
    C = n(884697),
    m = n(870289),
    _ = n(794324),
    b = n(859788),
    v = n(497788),
    x = n(215023),
    E = n(981631),
    S = n(388032),
    O = n(310582);
(0, C.IC)(90);
let y = {
        rankedSkuIds: [],
        name: "",
        unpublishedAt: void 0,
        logoUrl: "",
        categorySkuId: void 0,
        bannerAsset: void 0,
        summary: "",
        type: s.z.REWARD_HERO,
        categoryStoreListingId: "",
        rewardSkuId: void 0,
    },
    j = (e) => {
        var t;
        let { isLoading: n = !1, handleTransition: l, heroBlock: s, tab: C, onVisibilityChange: j } = e,
            k = (0, a.O)(
                (e) => {
                    null == j || j(e);
                },
                0.1,
                null != j,
            ),
            I = (0, c.e7)([g.default], () => g.default.getCurrentUser()),
            T = (0, h.sp)(),
            {
                bannerStyleOverrides: L,
                logoStyleOverrides: B,
                heroLogo: P,
                heroBannerStatic: N,
                heroBannerAnimated: A,
            } = (0, _.hr)(s),
            R = null != (t = null == L ? void 0 : L.responsive) && t,
            Z = null == L ? void 0 : L.backgroundStyle,
            w = C === x.AW.ORBS ? S.intl.string(S.t["1CdL8d"]) : S.intl.string(S.t.xYKa1T),
            H = (0, m.FF)("CollectiblesContent");
        return null != I && (n || s !== y)
            ? (0, r.jsxs)("div", {
                  ref: k,
                  className: O.heroBlock,
                  children: [
                      (0, r.jsx)("div", {
                          className: O.banner,
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
                          className: O.heroBlockContent,
                          children: [
                              (0, r.jsxs)("div", {
                                  className: i()(O.heroHeaderContainer, { [O.responsive]: R }),
                                  children: [
                                      n
                                          ? (0, r.jsx)("div", { className: O.heroHeaderBadgeLogoSummaryContainer })
                                          : (0, r.jsxs)("div", {
                                                className: O.heroHeaderBadgeLogoSummaryContainer,
                                                children: [
                                                    null != s.unpublishedAt &&
                                                        (0, r.jsx)(u.IGR, {
                                                            disableColor: !0,
                                                            text: S.intl.string(S.t["h/uBCR"]),
                                                            className: O.limitedTimeBadge,
                                                        }),
                                                    (0, r.jsxs)("div", {
                                                        className: O.heroLogoNameContainer,
                                                        children: [
                                                            null != P &&
                                                                (0, r.jsx)("img", {
                                                                    className: O.heroHeaderLogo,
                                                                    src: P,
                                                                    alt: s.name,
                                                                    style: null == B ? void 0 : B.toDesktopStyles(),
                                                                }),
                                                            null != s.title &&
                                                                (0, r.jsx)(u.Heading, {
                                                                    variant: "heading-xxl/bold",
                                                                    className: O.title,
                                                                    color: "header-primary",
                                                                    children: s.title,
                                                                }),
                                                            "" !== s.summary &&
                                                                (0, r.jsx)(u.Text, {
                                                                    variant: "text-md/normal",
                                                                    className: O.subHeaderText,
                                                                    style:
                                                                        null != s.bannerTextColor
                                                                            ? { color: s.bannerTextColor }
                                                                            : void 0,
                                                                    children: s.summary,
                                                                }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                      !n &&
                                          (0, r.jsx)("div", {
                                              className: O.heroHeaderButtonContainer,
                                              children: (0, r.jsx)(u.Button, {
                                                  variant: "overlay-primary",
                                                  onClick: () => {
                                                      C === x.AW.ORBS
                                                          ? ((0, p.Y)({
                                                                pageType: E.ZY5.SHOP_ORBS_TAB,
                                                                sectionType: E.jXE.ORBS_SHOP_HERO_BLOCK,
                                                                ctaObject: E.qAy.CTA_TO_QUEST_HOME,
                                                            }),
                                                            (0, d.navigateToQuestHome)({
                                                                fromContent: o.j.ORBS_SHOP_HERO_CTA,
                                                            }))
                                                          : (l({
                                                                sourceButton: "shop reward category hero",
                                                                categorySkuId: H ? void 0 : s.categorySkuId,
                                                                isInternalShopDeeplink: !0,
                                                            }),
                                                            f.default.track(E.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                                collectibles_shop_session_id:
                                                                    null == T ? void 0 : T.sessionId,
                                                                sku_id: s.categorySkuId,
                                                                page_type: C,
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
                                  heroBlock: s,
                                  tab: C,
                              }),
                          ],
                      }),
                  ],
              })
            : null;
    };
