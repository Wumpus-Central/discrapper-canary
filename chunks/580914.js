r.d(t, { Z: () => M }), r(388685);
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
    g = r(688465),
    f = r(110560),
    b = r(507808),
    h = r(794231),
    m = r(594174),
    _ = r(626135),
    v = r(381585),
    O = r(597688),
    C = r(884697),
    E = r(870289),
    S = r(370039),
    y = r(937510),
    x = r(823941),
    j = r(38900),
    T = r(709999),
    P = r(794324),
    L = r(934760),
    k = r(619899),
    I = r(859788),
    N = r(215023),
    A = r(981631),
    w = r(388032),
    B = r(253032);
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
                  logoUrl: (0, C.uV)(null != (n = null != (r = e.heroLogo) ? r : e.logo) ? n : "", { size: x.n }),
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
    M = (e) => {
        var t;
        let { isLoading: r, handleTransition: a, category: c, heroBlock: C, tab: x, onVisibilityChange: M } = e,
            F = (0, p.O)(
                (e) => {
                    null == M || M(e);
                },
                0.1,
                null != M,
            ),
            H = (0, u.e7)([m.default], () => m.default.getCurrentUser()),
            W = (0, L.Z)(),
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
            } = (0, P.hr)(z),
            Q = null == G ? void 0 : G.heroBanner,
            $ = null != (t = null == q ? void 0 : q.responsive) && t,
            ee = null == q ? void 0 : q.backgroundStyle,
            et = l.useMemo(() => W(z.rankedSkuIds), [r, W, z.rankedSkuIds]),
            er = (0, S.a)()(et),
            en = (0, y.l)(er).slice(0, 4),
            el = (0, k.St)(en),
            ea =
                x === N.AW.ORBS
                    ? w.intl.string(w.t["1CdL8f"])
                    : w.intl.formatToPlainString(w.t.wvKYCg, { category_name: z.name }),
            ei = (0, E.FF)("CollectiblesContent");
        return null != H && (r || z !== R)
            ? (0, n.jsxs)("div", {
                  ref: F,
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
                                                                        x === N.AW.ORBS && U && (0, n.jsx)(g.Z, {}),
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
                                                      x === N.AW.ORBS
                                                          ? ((0, b.Y)({
                                                                pageType: A.ZY5.SHOP_ORBS_TAB,
                                                                sectionType: A.jXE.ORBS_SHOP_HERO_BLOCK,
                                                                ctaObject: A.qAy.CTA_TO_QUEST_HOME,
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
                                                            _.default.track(A.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                                collectibles_shop_session_id:
                                                                    null == V ? void 0 : V.sessionId,
                                                                sku_id: z.categorySkuId,
                                                                page_type: x,
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
                                  className: i()(B.row, B.feed, { [B.feedSingleRow]: x !== N.AW.ORBS }),
                                  children: r
                                      ? (0, n.jsx)(n.Fragment, {
                                            children: [void 0, void 0, void 0, void 0].map((e, t) =>
                                                (0, n.jsx)(j.K, {}, t),
                                            ),
                                        })
                                      : (0, n.jsx)(n.Fragment, {
                                            children: el.map((e, t) => {
                                                let r = O.Z.getCategoryForProduct(e.skuId);
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
                                                                  T.Z,
                                                                  {
                                                                      product: e,
                                                                      category: r,
                                                                      user: H,
                                                                      tab: x,
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
