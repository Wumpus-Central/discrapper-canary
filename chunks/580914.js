n.d(t, { Z: () => F }), n(388685);
var r = n(255367),
    l = n(73800),
    a = n(120356),
    i = n.n(a),
    o = n(180650),
    s = n(636977),
    c = n(685816),
    u = n(442837),
    d = n(481060),
    p = n(434650),
    g = n(688465),
    f = n(110560),
    b = n(507808),
    h = n(794231),
    m = n(594174),
    _ = n(626135),
    v = n(381585),
    O = n(597688),
    C = n(884697),
    E = n(870289),
    S = n(26931),
    y = n(370039),
    x = n(937510),
    j = n(823941),
    T = n(38900),
    P = n(709999),
    L = n(794324),
    k = n(619899),
    I = n(859788),
    N = n(215023),
    w = n(981631),
    A = n(388032),
    B = n(806734);
let R = {
        rankedSkuIds: [],
        name: "",
        unpublishedAt: void 0,
        logoUrl: "",
        categorySkuId: "",
        bannerAsset: void 0,
        fallbackBannerUrl: "",
        summary: "",
        type: c.z.HERO,
        categoryStoreListingId: "",
    },
    Z = (e) => {
        var t, n, r, l;
        return null == e
            ? R
            : {
                  rankedSkuIds: null != (t = e.heroRanking) ? t : [],
                  name: e.name,
                  unpublishedAt: e.unpublishedAt,
                  logoUrl: (0, C.uV)(null != (r = null != (n = e.heroLogo) ? n : e.logo) ? r : "", { size: j.n }),
                  categorySkuId: e.skuId,
                  bannerAsset: e.heroBannerAsset,
                  fallbackBannerUrl: (0, C.uV)(null != (l = e.heroBanner) ? l : "", {
                      size: N.pv,
                      format: "jpg",
                  }),
                  summary: e.summary,
                  type: c.z.HERO,
                  categoryStoreListingId: e.storeListingId,
                  bannerConfig: e.heroBannerConfig,
                  logoConfig: e.heroLogoDisplayConfig,
              };
    },
    D = (e) => {
        let { isResponsive: t, heroBannerOverrides: n } = e;
        return (0, r.jsxs)("div", {
            className: i()(B.heroBannerSheenContainer, { [B.responsive]: t }),
            children: [
                (0, r.jsx)("div", {
                    id: "hero-block-left-shadow",
                    className: i()(B.bannerShadow, B.left, { [B.darker]: null == n ? void 0 : n.darker }),
                    style:
                        (null == n ? void 0 : n.gradientLeft) != null
                            ? { background: null == n ? void 0 : n.gradientLeft }
                            : void 0,
                }),
                (0, r.jsx)("div", {
                    id: "hero-block-right-shadow",
                    className: i()(B.bannerShadow, B.right, { [B.darker]: null == n ? void 0 : n.darker }),
                    style:
                        (null == n ? void 0 : n.gradientRight) != null
                            ? { background: null == n ? void 0 : n.gradientRight }
                            : void 0,
                }),
            ],
        });
    },
    F = (e) => {
        var t;
        let { isLoading: n, handleTransition: a, category: c, heroBlock: C, tab: j, onVisibilityChange: F } = e,
            M = (0, p.O)(
                (e) => {
                    null == F || F(e);
                },
                0.1,
                null != F,
            ),
            H = (0, u.e7)([m.default], () => m.default.getCurrentUser()),
            W = (0, S.u)(),
            V = (0, v.sp)(),
            { showBetaTag: U } = h.Z.useExperiment({ location: "collectible_hero_block" }),
            z = l.useMemo(() => (null != C ? C : Z(c)), [C, c]),
            {
                bannerOverrides: G,
                bannerStyleOverrides: q,
                logoStyleOverrides: K,
                heroLogo: Y,
                heroBannerStatic: X,
                heroBannerAnimated: J,
            } = (0, L.hr)(z),
            Q = null == G ? void 0 : G.heroBanner,
            $ = null != (t = null == q ? void 0 : q.responsive) && t,
            ee = null == q ? void 0 : q.backgroundStyle,
            et = l.useMemo(() => W(z.rankedSkuIds), [n, W, z.rankedSkuIds]),
            en = (0, y.a)()(et),
            er = (0, x.l)(en).slice(0, 4),
            el = (0, k.St)(er),
            ea =
                j === N.AW.ORBS
                    ? A.intl.string(A.t["1CdL8f"])
                    : A.intl.formatToPlainString(A.t.wvKYCg, { category_name: z.name }),
            ei = (0, E.FF)("CollectiblesContent");
        return null != H && (n || z !== R)
            ? (0, r.jsxs)("div", {
                  ref: M,
                  className: B.heroBlock,
                  children: [
                      (0, r.jsxs)("div", {
                          className: B.banner,
                          style: null != ee ? { background: ee } : void 0,
                          children: [
                              (0, r.jsx)(I.Z, {
                                  bannerStatic: X,
                                  bannerAnimated: J,
                                  isResponsive: $,
                              }),
                              (null == q ? void 0 : q.hideSideShadow) === !0
                                  ? null
                                  : (0, r.jsx)(D, {
                                        heroBannerOverrides: Q,
                                        isResponsive: $,
                                    }),
                          ],
                      }),
                      (0, r.jsxs)("div", {
                          className: B.heroBlockContent,
                          children: [
                              (0, r.jsxs)("div", {
                                  className: i()(B.heroHeaderContainer, { [B.responsive]: $ }),
                                  children: [
                                      n
                                          ? (0, r.jsx)("div", { className: B.heroHeaderBadgeLogoSummaryContainer })
                                          : (0, r.jsxs)("div", {
                                                className: B.heroHeaderBadgeLogoSummaryContainer,
                                                children: [
                                                    null != z.unpublishedAt &&
                                                        (0, r.jsx)(d.IGR, {
                                                            disableColor: !0,
                                                            text: A.intl.string(A.t["h/uBCQ"]),
                                                            className: B.limitedTimeBadge,
                                                        }),
                                                    (0, r.jsxs)("div", {
                                                        className: B.heroLogoNameContainer,
                                                        children: [
                                                            null != z.logoUrl &&
                                                                (0, r.jsx)("img", {
                                                                    className: B.heroHeaderLogo,
                                                                    src: Y,
                                                                    alt: z.name,
                                                                    style: null == K ? void 0 : K.toDesktopStyles(),
                                                                }),
                                                            null != z.title &&
                                                                (0, r.jsxs)(d.X6q, {
                                                                    variant: "heading-xxl/bold",
                                                                    className: B.title,
                                                                    color: "header-primary",
                                                                    children: [
                                                                        z.title,
                                                                        j === N.AW.ORBS && U && (0, r.jsx)(g.Z, {}),
                                                                    ],
                                                                }),
                                                            "" !== z.summary &&
                                                                (0, r.jsx)(d.Text, {
                                                                    variant:
                                                                        z.categorySkuId === o.T.ORB
                                                                            ? "text-lg/medium"
                                                                            : "text-md/normal",
                                                                    className:
                                                                        z.categorySkuId === o.T.ORB
                                                                            ? B.orbsSubHeaderText
                                                                            : (
                                                                                    null == G
                                                                                        ? void 0
                                                                                        : G.showDarkBannerText
                                                                                )
                                                                              ? B.subHeaderTextDark
                                                                              : B.subHeaderText,
                                                                    style:
                                                                        null != z.bannerTextColor
                                                                            ? { color: z.bannerTextColor }
                                                                            : void 0,
                                                                    children: z.summary,
                                                                }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                      !n &&
                                          (0, r.jsx)("div", {
                                              className: B.heroHeaderButtonContainer,
                                              children: (0, r.jsx)(d.zxk, {
                                                  variant: "overlay-primary",
                                                  onClick: () => {
                                                      j === N.AW.ORBS
                                                          ? ((0, b.Y)({
                                                                pageType: w.ZY5.SHOP_ORBS_TAB,
                                                                sectionType: w.jXE.ORBS_SHOP_HERO_BLOCK,
                                                                ctaObject: w.qAy.CTA_TO_QUEST_HOME,
                                                            }),
                                                            (0, f.navigateToQuestHome)({
                                                                fromContent: s.j.ORBS_SHOP_HERO_CTA,
                                                            }))
                                                          : (a(
                                                                "shop latest category hero",
                                                                ei && z.categorySkuId !== o.T.ORB
                                                                    ? void 0
                                                                    : z.categorySkuId,
                                                            ),
                                                            _.default.track(w.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                                collectibles_shop_session_id:
                                                                    null == V ? void 0 : V.sessionId,
                                                                sku_id: z.categorySkuId,
                                                                page_type: j,
                                                                page_section: null == V ? void 0 : V.pageSection,
                                                                page_category: null == V ? void 0 : V.pageCategory,
                                                                cta_name: "shop latest category hero button",
                                                            }));
                                                  },
                                                  text: ea,
                                              }),
                                          }),
                                  ],
                              }),
                              (0, r.jsx)("div", {
                                  className: i()(B.row, B.feed, { [B.feedSingleRow]: j !== N.AW.ORBS }),
                                  children: n
                                      ? (0, r.jsx)(r.Fragment, {
                                            children: [void 0, void 0, void 0, void 0].map((e, t) =>
                                                (0, r.jsx)(T.K, {}, t),
                                            ),
                                        })
                                      : (0, r.jsx)(r.Fragment, {
                                            children: el.map((e, t) => {
                                                let n = O.Z.getCategoryForProduct(e.skuId);
                                                return null == e || null == n
                                                    ? null
                                                    : (0, r.jsx)(
                                                          v.k0,
                                                          {
                                                              newValue: {
                                                                  tilePosition: t,
                                                                  pageSection: "top 4",
                                                                  categoryPosition: 0,
                                                              },
                                                              children: (0, r.jsx)(
                                                                  P.Z,
                                                                  {
                                                                      product: e,
                                                                      category: n,
                                                                      user: H,
                                                                      tab: j,
                                                                      _isInHeroBlock: !0,
                                                                  },
                                                                  e.skuId,
                                                              ),
                                                          },
                                                          null == e ? void 0 : e.skuId,
                                                      );
                                            }),
                                        }),
                              }),
                          ],
                      }),
                  ],
              })
            : null;
    };
