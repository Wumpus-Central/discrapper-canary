r.d(t, { Z: () => F }), r(388685);
var n = r(255367),
    l = r(73800),
    a = r(120356),
    i = r.n(a),
    o = r(180650),
    s = r(636977),
    c = r(685816),
    u = r(442837),
    d = r(481060),
    p = r(434650),
    f = r(688465),
    g = r(110560),
    b = r(507808),
    h = r(794231),
    m = r(594174),
    _ = r(626135),
    v = r(381585),
    C = r(597688),
    O = r(884697),
    E = r(870289),
    S = r(26931),
    y = r(370039),
    x = r(937510),
    j = r(823941),
    T = r(38900),
    P = r(709999),
    L = r(794324),
    k = r(619899),
    I = r(859788),
    N = r(215023),
    A = r(981631),
    w = r(388032),
    B = r(806734);
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
        var t, r, n, l;
        return null == e
            ? R
            : {
                  rankedSkuIds: null != (t = e.heroRanking) ? t : [],
                  name: e.name,
                  unpublishedAt: e.unpublishedAt,
                  logoUrl: (0, O.uV)(null != (n = null != (r = e.heroLogo) ? r : e.logo) ? n : "", { size: j.n }),
                  categorySkuId: e.skuId,
                  bannerAsset: e.heroBannerAsset,
                  fallbackBannerUrl: (0, O.uV)(null != (l = e.heroBanner) ? l : "", {
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
        let { isResponsive: t, heroBannerOverrides: r } = e;
        return (0, n.jsxs)("div", {
            className: i()(B.heroBannerSheenContainer, { [B.responsive]: t }),
            children: [
                (0, n.jsx)("div", {
                    id: "hero-block-left-shadow",
                    className: i()(B.bannerShadow, B.left, { [B.darker]: null == r ? void 0 : r.darker }),
                    style:
                        (null == r ? void 0 : r.gradientLeft) != null
                            ? { background: null == r ? void 0 : r.gradientLeft }
                            : void 0,
                }),
                (0, n.jsx)("div", {
                    id: "hero-block-right-shadow",
                    className: i()(B.bannerShadow, B.right, { [B.darker]: null == r ? void 0 : r.darker }),
                    style:
                        (null == r ? void 0 : r.gradientRight) != null
                            ? { background: null == r ? void 0 : r.gradientRight }
                            : void 0,
                }),
            ],
        });
    },
    F = (e) => {
        var t;
        let { isLoading: r, handleTransition: a, category: c, heroBlock: O, tab: j, onVisibilityChange: F } = e,
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
            z = l.useMemo(() => (null != O ? O : Z(c)), [O, c]),
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
            et = l.useMemo(() => W(z.rankedSkuIds), [r, W, z.rankedSkuIds]),
            er = (0, y.a)()(et),
            en = (0, x.l)(er).slice(0, 4),
            el = (0, k.St)(en),
            ea =
                j === N.AW.ORBS
                    ? w.intl.string(w.t["1CdL8f"])
                    : w.intl.formatToPlainString(w.t.wvKYCg, { category_name: z.name }),
            ei = (0, E.FF)("CollectiblesContent");
        return null != H && (r || z !== R)
            ? (0, n.jsxs)("div", {
                  ref: M,
                  className: B.heroBlock,
                  children: [
                      (0, n.jsxs)("div", {
                          className: B.banner,
                          style: null != ee ? { background: ee } : void 0,
                          children: [
                              (0, n.jsx)(I.Z, {
                                  bannerStatic: X,
                                  bannerAnimated: J,
                                  isResponsive: $,
                              }),
                              (null == q ? void 0 : q.hideSideShadow) === !0
                                  ? null
                                  : (0, n.jsx)(D, {
                                        heroBannerOverrides: Q,
                                        isResponsive: $,
                                    }),
                          ],
                      }),
                      (0, n.jsxs)("div", {
                          className: B.heroBlockContent,
                          children: [
                              (0, n.jsxs)("div", {
                                  className: i()(B.heroHeaderContainer, { [B.responsive]: $ }),
                                  children: [
                                      r
                                          ? (0, n.jsx)("div", { className: B.heroHeaderBadgeLogoSummaryContainer })
                                          : (0, n.jsxs)("div", {
                                                className: B.heroHeaderBadgeLogoSummaryContainer,
                                                children: [
                                                    null != z.unpublishedAt &&
                                                        (0, n.jsx)(d.IGR, {
                                                            disableColor: !0,
                                                            text: w.intl.string(w.t["h/uBCQ"]),
                                                            className: B.limitedTimeBadge,
                                                        }),
                                                    (0, n.jsxs)("div", {
                                                        className: B.heroLogoNameContainer,
                                                        children: [
                                                            null != z.logoUrl &&
                                                                (0, n.jsx)("img", {
                                                                    className: B.heroHeaderLogo,
                                                                    src: Y,
                                                                    alt: z.name,
                                                                    style: null == K ? void 0 : K.toDesktopStyles(),
                                                                }),
                                                            null != z.title &&
                                                                (0, n.jsxs)(d.X6q, {
                                                                    variant: "heading-xxl/bold",
                                                                    className: B.title,
                                                                    color: "header-primary",
                                                                    children: [
                                                                        z.title,
                                                                        j === N.AW.ORBS && U && (0, n.jsx)(f.Z, {}),
                                                                    ],
                                                                }),
                                                            "" !== z.summary &&
                                                                (0, n.jsx)(d.Text, {
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
                                      !r &&
                                          (0, n.jsx)("div", {
                                              className: B.heroHeaderButtonContainer,
                                              children: (0, n.jsx)(d.zxk, {
                                                  variant: "overlay-primary",
                                                  onClick: () => {
                                                      j === N.AW.ORBS
                                                          ? ((0, b.Y)({
                                                                pageType: A.ZY5.SHOP_ORBS_TAB,
                                                                sectionType: A.jXE.ORBS_SHOP_HERO_BLOCK,
                                                                ctaObject: A.qAy.CTA_TO_QUEST_HOME,
                                                            }),
                                                            (0, g.navigateToQuestHome)({
                                                                fromContent: s.j.ORBS_SHOP_HERO_CTA,
                                                            }))
                                                          : (a(
                                                                "shop latest category hero",
                                                                ei && z.categorySkuId !== o.T.ORB
                                                                    ? void 0
                                                                    : z.categorySkuId,
                                                            ),
                                                            _.default.track(A.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
                              (0, n.jsx)("div", {
                                  className: i()(B.row, B.feed, { [B.feedSingleRow]: j !== N.AW.ORBS }),
                                  children: r
                                      ? (0, n.jsx)(n.Fragment, {
                                            children: [void 0, void 0, void 0, void 0].map((e, t) =>
                                                (0, n.jsx)(T.K, {}, t),
                                            ),
                                        })
                                      : (0, n.jsx)(n.Fragment, {
                                            children: el.map((e, t) => {
                                                let r = C.Z.getCategoryForProduct(e.skuId);
                                                return null == e || null == r
                                                    ? null
                                                    : (0, n.jsx)(
                                                          v.k0,
                                                          {
                                                              newValue: {
                                                                  tilePosition: t,
                                                                  pageSection: "top 4",
                                                                  categoryPosition: 0,
                                                              },
                                                              children: (0, n.jsx)(
                                                                  P.Z,
                                                                  {
                                                                      product: e,
                                                                      category: r,
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
