n.d(t, { Z: () => M }), n(388685);
var r = n(951288),
    l = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(180650),
    i = n(636977),
    c = n(685816),
    u = n(442837),
    d = n(481060),
    g = n(434650),
    f = n(110560),
    p = n(507808),
    h = n(594174),
    m = n(626135),
    _ = n(381585),
    C = n(597688),
    b = n(884697),
    E = n(870289),
    S = n(254690),
    O = n(655283),
    v = n(370039),
    x = n(937510),
    y = n(823941),
    T = n(38900),
    L = n(709999),
    j = n(794324),
    k = n(934760),
    B = n(619899),
    I = n(859788),
    N = n(215023),
    P = n(981631),
    A = n(388032),
    R = n(687983);
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
            className: o()(R.heroBannerSheenContainer, { [R.responsive]: t }),
            children: [
                (0, r.jsx)("div", {
                    id: "hero-block-left-shadow",
                    className: o()(R.bannerShadow, R.left, { [R.darker]: null == n ? void 0 : n.darker }),
                    style:
                        (null == n ? void 0 : n.gradientLeft) != null
                            ? { background: null == n ? void 0 : n.gradientLeft }
                            : void 0,
                }),
                (0, r.jsx)("div", {
                    id: "hero-block-right-shadow",
                    className: o()(R.bannerShadow, R.right, { [R.darker]: null == n ? void 0 : n.darker }),
                    style:
                        (null == n ? void 0 : n.gradientRight) != null
                            ? { background: null == n ? void 0 : n.gradientRight }
                            : void 0,
                }),
            ],
        });
    },
    M = (e) => {
        var t;
        let { isLoading: n, handleTransition: a, category: M, heroBlock: F, tab: H, onVisibilityChange: D } = e,
            W = (0, g.O)(
                (e) => {
                    null == D || D(e);
                },
                0.1,
                null != D,
            ),
            U = (0, u.e7)([h.default], () => h.default.getCurrentUser()),
            V = (0, k.Z)(),
            z = (0, _.sp)(),
            G = S.Z.useConfig({ location: "HeroBlock" }).showButtonLeftAligned && H !== N.AW.ORBS,
            q = (0, O.MG)("HeroBlock"),
            K = (0, O.xh)("HeroBlock"),
            Y = l.useMemo(() => {
                var e, t;
                return null != F
                    ? F
                    : null == M
                      ? Z
                      : {
                            rankedSkuIds: null != (e = M.heroRanking) ? e : [],
                            name: M.name,
                            unpublishedAt: M.unpublishedAt,
                            logoUrl: (0, b.uV)(null != (t = M.heroLogo) ? t : M.logo, { size: y.n }),
                            categorySkuId: M.skuId,
                            bannerAsset: M.heroBannerAsset,
                            fallbackBannerUrl: (0, b.uV)(M.heroBanner, {
                                size: N.pv,
                                format: "jpg",
                            }),
                            summary: M.summary,
                            type: c.z.HERO,
                            categoryStoreListingId: M.storeListingId,
                            bannerConfig: M.heroBannerConfig,
                            logoConfig: M.heroLogoDisplayConfig,
                        };
            }, [F, M]),
            {
                bannerOverrides: X,
                bannerStyleOverrides: Q,
                logoStyleOverrides: J,
                heroLogo: $,
                heroBannerStatic: ee,
                heroBannerAnimated: et,
            } = (0, j.hr)(Y),
            en = null == X ? void 0 : X.heroBanner,
            er = null != (t = null == Q ? void 0 : Q.responsive) && t,
            el = null == et ? void 0 : et.endsWith(".riv"),
            ea = null == Q ? void 0 : Q.backgroundStyle,
            eo = l.useMemo(() => V(Y.rankedSkuIds), [n, V, Y.rankedSkuIds]),
            es = (0, v.a)()(eo),
            ei = (0, x.l)(es).slice(0, 4),
            ec = (0, B.St)(ei),
            eu =
                H === N.AW.ORBS
                    ? A.intl.string(A.t["1CdL8f"])
                    : q
                      ? K
                          ? A.intl.string(A.t["/QvRam"])
                          : A.intl.string(A.t.xYKa1d)
                      : A.intl.formatToPlainString(A.t.wvKYCg, { category_name: Y.name }),
            ed = (0, E.FF)("CollectiblesContent"),
            eg = () => {
                H === N.AW.ORBS
                    ? ((0, p.Y)({
                          pageType: P.ZY5.SHOP_ORBS_TAB,
                          sectionType: P.jXE.ORBS_SHOP_HERO_BLOCK,
                          ctaObject: P.qAy.CTA_TO_QUEST_HOME,
                      }),
                      (0, f.navigateToQuestHome)({ fromContent: i.j.ORBS_SHOP_HERO_CTA }))
                    : (a("shop latest category hero", ed && Y.categorySkuId !== s.T.ORB ? void 0 : Y.categorySkuId),
                      m.default.track(P.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                          collectibles_shop_session_id: null == z ? void 0 : z.sessionId,
                          sku_id: Y.categorySkuId,
                          page_type: H,
                          page_section: null == z ? void 0 : z.pageSection,
                          page_category: null == z ? void 0 : z.pageCategory,
                          cta_name: "shop latest category hero button",
                      }));
            };
        return null != U && (n || Y !== Z)
            ? (0, r.jsxs)("div", {
                  ref: W,
                  className: R.heroBlock,
                  children: [
                      (0, r.jsxs)("div", {
                          className: o()(R.banner, { [R.rivBanner]: el }),
                          style: null != ea ? { background: ea } : void 0,
                          children: [
                              (0, r.jsx)(I.Z, {
                                  bannerStatic: ee,
                                  bannerAnimated: et,
                                  isResponsive: er,
                              }),
                              (null == Q ? void 0 : Q.hideSideShadow) === !0 || el
                                  ? null
                                  : (0, r.jsx)(w, {
                                        heroBannerOverrides: en,
                                        isResponsive: er,
                                    }),
                          ],
                      }),
                      (0, r.jsxs)("div", {
                          className: R.heroBlockContent,
                          children: [
                              el
                                  ? (0, r.jsx)("div", {
                                        className: R.rivBannerButtonContainer,
                                        children:
                                            !n &&
                                            (0, r.jsx)(d.zxk, {
                                                variant: "overlay-primary",
                                                onClick: eg,
                                                text: eu,
                                            }),
                                    })
                                  : (0, r.jsxs)("div", {
                                        className: o()(G ? R.heroHeaderContainerStacked : R.heroHeaderContainer, {
                                            [R.responsive]: er,
                                        }),
                                        children: [
                                            n
                                                ? (0, r.jsx)("div", {
                                                      className: R.heroHeaderBadgeLogoSummaryContainer,
                                                  })
                                                : (0, r.jsxs)("div", {
                                                      className: R.heroHeaderBadgeLogoSummaryContainer,
                                                      children: [
                                                          null != Y.unpublishedAt &&
                                                              (0, r.jsx)(d.IGR, {
                                                                  disableColor: !0,
                                                                  text: A.intl.string(A.t["h/uBCQ"]),
                                                                  className: R.limitedTimeBadge,
                                                              }),
                                                          (0, r.jsxs)("div", {
                                                              className: o()(R.heroLogoNameContainer, {
                                                                  [R.heroLogoNameContainerStacked]: G,
                                                              }),
                                                              children: [
                                                                  null != Y.logoUrl &&
                                                                      (0, r.jsx)("img", {
                                                                          className: R.heroHeaderLogo,
                                                                          src: $,
                                                                          alt: Y.name,
                                                                          style:
                                                                              null == J ? void 0 : J.toDesktopStyles(),
                                                                      }),
                                                                  null != Y.title &&
                                                                      (0, r.jsx)(d.X6q, {
                                                                          variant: "heading-xxl/bold",
                                                                          className: R.title,
                                                                          color: "header-primary",
                                                                          children: Y.title,
                                                                      }),
                                                                  "" !== Y.summary &&
                                                                      (0, r.jsx)(d.Text, {
                                                                          variant:
                                                                              Y.categorySkuId === s.T.ORB
                                                                                  ? "text-lg/medium"
                                                                                  : "text-md/normal",
                                                                          className:
                                                                              Y.categorySkuId === s.T.ORB
                                                                                  ? R.orbsSubHeaderText
                                                                                  : (
                                                                                          null == X
                                                                                              ? void 0
                                                                                              : X.showDarkBannerText
                                                                                      )
                                                                                    ? R.subHeaderTextDark
                                                                                    : R.subHeaderText,
                                                                          style:
                                                                              null != Y.bannerTextColor
                                                                                  ? { color: Y.bannerTextColor }
                                                                                  : void 0,
                                                                          children: Y.summary,
                                                                      }),
                                                              ],
                                                          }),
                                                      ],
                                                  }),
                                            !n &&
                                                (0, r.jsx)("div", {
                                                    className: G
                                                        ? R.heroHeaderButtonContainerStacked
                                                        : R.heroHeaderButtonContainer,
                                                    children: (0, r.jsx)(d.zxk, {
                                                        variant: "overlay-primary",
                                                        onClick: eg,
                                                        text: eu,
                                                    }),
                                                }),
                                        ],
                                    }),
                              (0, r.jsx)("div", {
                                  className: o()(R.row, R.feed, { [R.feedSingleRow]: H !== N.AW.ORBS }),
                                  children: n
                                      ? (0, r.jsx)(r.Fragment, {
                                            children: [void 0, void 0, void 0, void 0].map((e, t) =>
                                                (0, r.jsx)(T.K, {}, t),
                                            ),
                                        })
                                      : (0, r.jsx)(r.Fragment, {
                                            children: ec.map((e, t) => {
                                                let n = C.Z.getCategoryForProduct(e.skuId);
                                                return null == e || null == n
                                                    ? null
                                                    : (0, r.jsx)(
                                                          _.k0,
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
                                                                      tab: H,
                                                                      shopBlockType: c.z.HERO,
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
