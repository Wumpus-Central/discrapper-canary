r.d(t, { Z: () => D }), r(388685);
var n = r(951288),
    l = r(647438),
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
    m = r(507808),
    b = r(794231),
    h = r(594174),
    _ = r(626135),
    v = r(381585),
    O = r(597688),
    C = r(884697),
    E = r(870289),
    y = r(370039),
    S = r(937510),
    x = r(823941),
    j = r(38900),
    P = r(709999),
    T = r(794324),
    L = r(934760),
    k = r(619899),
    I = r(859788),
    N = r(215023),
    A = r(981631),
    w = r(388032),
    B = r(310582);
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
    D = (e) => {
        var t;
        let { isLoading: r, handleTransition: a, category: D, heroBlock: M, tab: F, onVisibilityChange: H } = e,
            W = (0, p.O)(
                (e) => {
                    null == H || H(e);
                },
                0.1,
                null != H,
            ),
            V = (0, u.e7)([h.default], () => h.default.getCurrentUser()),
            U = (0, L.Z)(),
            z = (0, v.sp)(),
            { showBetaTag: G } = b.Z.useExperiment({ location: "collectible_hero_block" }),
            q = l.useMemo(() => {
                var e, t;
                return null != M
                    ? M
                    : null == D
                      ? R
                      : {
                            rankedSkuIds: null != (e = D.heroRanking) ? e : [],
                            name: D.name,
                            unpublishedAt: D.unpublishedAt,
                            logoUrl: (0, C.uV)(null != (t = D.heroLogo) ? t : D.logo, { size: x.n }),
                            categorySkuId: D.skuId,
                            bannerAsset: D.heroBannerAsset,
                            fallbackBannerUrl: (0, C.uV)(D.heroBanner, {
                                size: N.pv,
                                format: "jpg",
                            }),
                            summary: D.summary,
                            type: c.z.HERO,
                            categoryStoreListingId: D.storeListingId,
                            bannerConfig: D.heroBannerConfig,
                            logoConfig: D.heroLogoDisplayConfig,
                        };
            }, [M, D]),
            {
                bannerOverrides: K,
                bannerStyleOverrides: Y,
                logoStyleOverrides: X,
                heroLogo: Q,
                heroBannerStatic: J,
                heroBannerAnimated: $,
            } = (0, T.hr)(q),
            ee = null == K ? void 0 : K.heroBanner,
            et = null != (t = null == Y ? void 0 : Y.responsive) && t,
            er = null == Y ? void 0 : Y.backgroundStyle,
            en = l.useMemo(() => U(q.rankedSkuIds), [r, U, q.rankedSkuIds]),
            el = (0, y.a)()(en),
            ea = (0, S.l)(el).slice(0, 4),
            ei = (0, k.St)(ea),
            eo =
                F === N.AW.ORBS
                    ? w.intl.string(w.t["1CdL8f"])
                    : w.intl.formatToPlainString(w.t.wvKYCg, { category_name: q.name }),
            es = (0, E.FF)("CollectiblesContent");
        return null != V && (r || q !== R)
            ? (0, n.jsxs)("div", {
                  ref: W,
                  className: B.heroBlock,
                  children: [
                      (0, n.jsxs)("div", {
                          className: B.banner,
                          style: null != er ? { background: er } : void 0,
                          children: [
                              (0, n.jsx)(I.Z, {
                                  bannerStatic: J,
                                  bannerAnimated: $,
                                  isResponsive: et,
                              }),
                              (null == Y ? void 0 : Y.hideSideShadow) === !0
                                  ? null
                                  : (0, n.jsx)(Z, {
                                        heroBannerOverrides: ee,
                                        isResponsive: et,
                                    }),
                          ],
                      }),
                      (0, n.jsxs)("div", {
                          className: B.heroBlockContent,
                          children: [
                              (0, n.jsxs)("div", {
                                  className: i()(B.heroHeaderContainer, { [B.responsive]: et }),
                                  children: [
                                      r
                                          ? (0, n.jsx)("div", { className: B.heroHeaderBadgeLogoSummaryContainer })
                                          : (0, n.jsxs)("div", {
                                                className: B.heroHeaderBadgeLogoSummaryContainer,
                                                children: [
                                                    null != q.unpublishedAt &&
                                                        (0, n.jsx)(d.IGR, {
                                                            disableColor: !0,
                                                            text: w.intl.string(w.t["h/uBCQ"]),
                                                            className: B.limitedTimeBadge,
                                                        }),
                                                    (0, n.jsxs)("div", {
                                                        className: B.heroLogoNameContainer,
                                                        children: [
                                                            null != q.logoUrl &&
                                                                (0, n.jsx)("img", {
                                                                    className: B.heroHeaderLogo,
                                                                    src: Q,
                                                                    alt: q.name,
                                                                    style: null == X ? void 0 : X.toDesktopStyles(),
                                                                }),
                                                            null != q.title &&
                                                                (0, n.jsxs)(d.X6q, {
                                                                    variant: "heading-xxl/bold",
                                                                    className: B.title,
                                                                    color: "header-primary",
                                                                    children: [
                                                                        q.title,
                                                                        F === N.AW.ORBS && G && (0, n.jsx)(g.Z, {}),
                                                                    ],
                                                                }),
                                                            "" !== q.summary &&
                                                                (0, n.jsx)(d.Text, {
                                                                    variant:
                                                                        q.categorySkuId === o.T.ORB
                                                                            ? "text-lg/medium"
                                                                            : "text-md/normal",
                                                                    className:
                                                                        q.categorySkuId === o.T.ORB
                                                                            ? B.orbsSubHeaderText
                                                                            : (
                                                                                    null == K
                                                                                        ? void 0
                                                                                        : K.showDarkBannerText
                                                                                )
                                                                              ? B.subHeaderTextDark
                                                                              : B.subHeaderText,
                                                                    style:
                                                                        null != q.bannerTextColor
                                                                            ? { color: q.bannerTextColor }
                                                                            : void 0,
                                                                    children: q.summary,
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
                                                      F === N.AW.ORBS
                                                          ? ((0, m.Y)({
                                                                pageType: A.ZY5.SHOP_ORBS_TAB,
                                                                sectionType: A.jXE.ORBS_SHOP_HERO_BLOCK,
                                                                ctaObject: A.qAy.CTA_TO_QUEST_HOME,
                                                            }),
                                                            (0, f.navigateToQuestHome)({
                                                                fromContent: s.j.ORBS_SHOP_HERO_CTA,
                                                            }))
                                                          : (a(
                                                                "shop latest category hero",
                                                                es && q.categorySkuId !== o.T.ORB
                                                                    ? void 0
                                                                    : q.categorySkuId,
                                                            ),
                                                            _.default.track(A.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                                collectibles_shop_session_id:
                                                                    null == z ? void 0 : z.sessionId,
                                                                sku_id: q.categorySkuId,
                                                                page_type: F,
                                                                page_section: null == z ? void 0 : z.pageSection,
                                                                page_category: null == z ? void 0 : z.pageCategory,
                                                                cta_name: "shop latest category hero button",
                                                            }));
                                                  },
                                                  text: eo,
                                              }),
                                          }),
                                  ],
                              }),
                              (0, n.jsx)("div", {
                                  className: i()(B.row, B.feed, { [B.feedSingleRow]: F !== N.AW.ORBS }),
                                  children: r
                                      ? (0, n.jsx)(n.Fragment, {
                                            children: [void 0, void 0, void 0, void 0].map((e, t) =>
                                                (0, n.jsx)(j.K, {}, t),
                                            ),
                                        })
                                      : (0, n.jsx)(n.Fragment, {
                                            children: ei.map((e, t) => {
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
                                                                  P.Z,
                                                                  {
                                                                      product: e,
                                                                      category: r,
                                                                      user: V,
                                                                      tab: F,
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
