n.d(t, { Z: () => F }), n(388685);
var r = n(951288),
    l = n(647438),
    a = n(120356),
    s = n.n(a),
    i = n(180650),
    o = n(636977),
    c = n(685816),
    u = n(442837),
    d = n(481060),
    g = n(434650),
    f = n(688465),
    p = n(110560),
    m = n(507808),
    _ = n(794231),
    h = n(594174),
    b = n(626135),
    C = n(381585),
    E = n(597688),
    S = n(884697),
    O = n(870289),
    v = n(370039),
    x = n(937510),
    y = n(823941),
    T = n(38900),
    L = n(709999),
    j = n(794324),
    k = n(934760),
    I = n(619899),
    B = n(859788),
    N = n(215023),
    P = n(981631),
    A = n(388032),
    R = n(310582);
let Z = {
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
    w = (e) => {
        let { isResponsive: t, heroBannerOverrides: n } = e;
        return (0, r.jsxs)("div", {
            className: s()(R.heroBannerSheenContainer, { [R.responsive]: t }),
            children: [
                (0, r.jsx)("div", {
                    id: "hero-block-left-shadow",
                    className: s()(R.bannerShadow, R.left, { [R.darker]: null == n ? void 0 : n.darker }),
                    style:
                        (null == n ? void 0 : n.gradientLeft) != null
                            ? { background: null == n ? void 0 : n.gradientLeft }
                            : void 0,
                }),
                (0, r.jsx)("div", {
                    id: "hero-block-right-shadow",
                    className: s()(R.bannerShadow, R.right, { [R.darker]: null == n ? void 0 : n.darker }),
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
        let { isLoading: n, handleTransition: a, category: F, heroBlock: D, tab: M, onVisibilityChange: H } = e,
            W = (0, g.O)(
                (e) => {
                    null == H || H(e);
                },
                0.1,
                null != H,
            ),
            U = (0, u.e7)([h.default], () => h.default.getCurrentUser()),
            V = (0, k.Z)(),
            z = (0, C.sp)(),
            { showBetaTag: G } = _.Z.useExperiment({ location: "collectible_hero_block" }),
            q = l.useMemo(() => {
                var e, t;
                return null != D
                    ? D
                    : null == F
                      ? Z
                      : {
                            rankedSkuIds: null != (e = F.heroRanking) ? e : [],
                            name: F.name,
                            unpublishedAt: F.unpublishedAt,
                            logoUrl: (0, S.uV)(null != (t = F.heroLogo) ? t : F.logo, { size: y.n }),
                            categorySkuId: F.skuId,
                            bannerAsset: F.heroBannerAsset,
                            fallbackBannerUrl: (0, S.uV)(F.heroBanner, {
                                size: N.pv,
                                format: "jpg",
                            }),
                            summary: F.summary,
                            type: c.z.HERO,
                            categoryStoreListingId: F.storeListingId,
                            bannerConfig: F.heroBannerConfig,
                            logoConfig: F.heroLogoDisplayConfig,
                        };
            }, [D, F]),
            {
                bannerOverrides: K,
                bannerStyleOverrides: Y,
                logoStyleOverrides: X,
                heroLogo: Q,
                heroBannerStatic: J,
                heroBannerAnimated: $,
            } = (0, j.hr)(q),
            ee = null == K ? void 0 : K.heroBanner,
            et = null != (t = null == Y ? void 0 : Y.responsive) && t,
            en = null == Y ? void 0 : Y.backgroundStyle,
            er = l.useMemo(() => V(q.rankedSkuIds), [n, V, q.rankedSkuIds]),
            el = (0, v.a)()(er),
            ea = (0, x.l)(el).slice(0, 4),
            es = (0, I.St)(ea),
            ei =
                M === N.AW.ORBS
                    ? A.intl.string(A.t["1CdL8f"])
                    : A.intl.formatToPlainString(A.t.wvKYCg, { category_name: q.name }),
            eo = (0, O.FF)("CollectiblesContent");
        return null != U && (n || q !== Z)
            ? (0, r.jsxs)("div", {
                  ref: W,
                  className: R.heroBlock,
                  children: [
                      (0, r.jsxs)("div", {
                          className: R.banner,
                          style: null != en ? { background: en } : void 0,
                          children: [
                              (0, r.jsx)(B.Z, {
                                  bannerStatic: J,
                                  bannerAnimated: $,
                                  isResponsive: et,
                              }),
                              (null == Y ? void 0 : Y.hideSideShadow) === !0
                                  ? null
                                  : (0, r.jsx)(w, {
                                        heroBannerOverrides: ee,
                                        isResponsive: et,
                                    }),
                          ],
                      }),
                      (0, r.jsxs)("div", {
                          className: R.heroBlockContent,
                          children: [
                              (0, r.jsxs)("div", {
                                  className: s()(R.heroHeaderContainer, { [R.responsive]: et }),
                                  children: [
                                      n
                                          ? (0, r.jsx)("div", { className: R.heroHeaderBadgeLogoSummaryContainer })
                                          : (0, r.jsxs)("div", {
                                                className: R.heroHeaderBadgeLogoSummaryContainer,
                                                children: [
                                                    null != q.unpublishedAt &&
                                                        (0, r.jsx)(d.IGR, {
                                                            disableColor: !0,
                                                            text: A.intl.string(A.t["h/uBCQ"]),
                                                            className: R.limitedTimeBadge,
                                                        }),
                                                    (0, r.jsxs)("div", {
                                                        className: R.heroLogoNameContainer,
                                                        children: [
                                                            null != q.logoUrl &&
                                                                (0, r.jsx)("img", {
                                                                    className: R.heroHeaderLogo,
                                                                    src: Q,
                                                                    alt: q.name,
                                                                    style: null == X ? void 0 : X.toDesktopStyles(),
                                                                }),
                                                            null != q.title &&
                                                                (0, r.jsxs)(d.X6q, {
                                                                    variant: "heading-xxl/bold",
                                                                    className: R.title,
                                                                    color: "header-primary",
                                                                    children: [
                                                                        q.title,
                                                                        M === N.AW.ORBS && G && (0, r.jsx)(f.Z, {}),
                                                                    ],
                                                                }),
                                                            "" !== q.summary &&
                                                                (0, r.jsx)(d.Text, {
                                                                    variant:
                                                                        q.categorySkuId === i.T.ORB
                                                                            ? "text-lg/medium"
                                                                            : "text-md/normal",
                                                                    className:
                                                                        q.categorySkuId === i.T.ORB
                                                                            ? R.orbsSubHeaderText
                                                                            : (
                                                                                    null == K
                                                                                        ? void 0
                                                                                        : K.showDarkBannerText
                                                                                )
                                                                              ? R.subHeaderTextDark
                                                                              : R.subHeaderText,
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
                                      !n &&
                                          (0, r.jsx)("div", {
                                              className: R.heroHeaderButtonContainer,
                                              children: (0, r.jsx)(d.zxk, {
                                                  variant: "overlay-primary",
                                                  onClick: () => {
                                                      M === N.AW.ORBS
                                                          ? ((0, m.Y)({
                                                                pageType: P.ZY5.SHOP_ORBS_TAB,
                                                                sectionType: P.jXE.ORBS_SHOP_HERO_BLOCK,
                                                                ctaObject: P.qAy.CTA_TO_QUEST_HOME,
                                                            }),
                                                            (0, p.navigateToQuestHome)({
                                                                fromContent: o.j.ORBS_SHOP_HERO_CTA,
                                                            }))
                                                          : (a(
                                                                "shop latest category hero",
                                                                eo && q.categorySkuId !== i.T.ORB
                                                                    ? void 0
                                                                    : q.categorySkuId,
                                                            ),
                                                            b.default.track(P.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                                collectibles_shop_session_id:
                                                                    null == z ? void 0 : z.sessionId,
                                                                sku_id: q.categorySkuId,
                                                                page_type: M,
                                                                page_section: null == z ? void 0 : z.pageSection,
                                                                page_category: null == z ? void 0 : z.pageCategory,
                                                                cta_name: "shop latest category hero button",
                                                            }));
                                                  },
                                                  text: ei,
                                              }),
                                          }),
                                  ],
                              }),
                              (0, r.jsx)("div", {
                                  className: s()(R.row, R.feed, { [R.feedSingleRow]: M !== N.AW.ORBS }),
                                  children: n
                                      ? (0, r.jsx)(r.Fragment, {
                                            children: [void 0, void 0, void 0, void 0].map((e, t) =>
                                                (0, r.jsx)(T.K, {}, t),
                                            ),
                                        })
                                      : (0, r.jsx)(r.Fragment, {
                                            children: es.map((e, t) => {
                                                let n = E.Z.getCategoryForProduct(e.skuId);
                                                return null == e || null == n
                                                    ? null
                                                    : (0, r.jsx)(
                                                          C.k0,
                                                          {
                                                              newValue: {
                                                                  tilePosition: t,
                                                                  pageSection: "top 4",
                                                                  categoryPosition: 0,
                                                              },
                                                              children: (0, r.jsx)(
                                                                  L.Z,
                                                                  {
                                                                      product: e,
                                                                      category: n,
                                                                      user: U,
                                                                      tab: M,
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
