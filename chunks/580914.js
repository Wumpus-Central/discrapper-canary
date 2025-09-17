n.d(t, { Z: () => w }), n(388685);
var r = n(951288),
    l = n(647438),
    a = n(120356),
    s = n.n(a),
    o = n(180650),
    i = n(636977),
    c = n(685816),
    u = n(442837),
    d = n(481060),
    g = n(434650),
    p = n(110560),
    f = n(507808),
    m = n(594174),
    h = n(626135),
    _ = n(381585),
    C = n(597688),
    b = n(884697),
    E = n(870289),
    S = n(254690),
    O = n(655283),
    x = n(370039),
    v = n(937510),
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
        var t;
        let { isLoading: n, handleTransition: a, category: w, heroBlock: M, tab: F, onVisibilityChange: H } = e,
            D = (0, g.O)(
                (e) => {
                    null == H || H(e);
                },
                0.1,
                null != H,
            ),
            W = (0, u.e7)([m.default], () => m.default.getCurrentUser()),
            U = (0, k.Z)(),
            V = (0, _.sp)(),
            z = S.Z.useConfig({ location: "HeroBlock" }).showButtonLeftAligned && F !== N.AW.ORBS,
            G = (0, O.MG)("HeroBlock"),
            q = (0, O.xh)("HeroBlock"),
            K = l.useMemo(() => {
                var e, t;
                return null != M
                    ? M
                    : null == w
                      ? Z
                      : {
                            rankedSkuIds: null != (e = w.heroRanking) ? e : [],
                            name: w.name,
                            unpublishedAt: w.unpublishedAt,
                            logoUrl: (0, b.uV)(null != (t = w.heroLogo) ? t : w.logo, { size: y.n }),
                            categorySkuId: w.skuId,
                            bannerAsset: w.heroBannerAsset,
                            fallbackBannerUrl: (0, b.uV)(w.heroBanner, {
                                size: N.pv,
                                format: "jpg",
                            }),
                            summary: w.summary,
                            type: c.z.HERO,
                            categoryStoreListingId: w.storeListingId,
                            bannerConfig: w.heroBannerConfig,
                            logoConfig: w.heroLogoDisplayConfig,
                        };
            }, [M, w]),
            {
                bannerOverrides: Y,
                bannerStyleOverrides: X,
                logoStyleOverrides: Q,
                heroLogo: J,
                heroBannerStatic: $,
                heroBannerAnimated: ee,
            } = (0, j.hr)(K),
            et = null != (t = null == X ? void 0 : X.responsive) && t,
            en = null == ee ? void 0 : ee.endsWith(".riv"),
            er = null == X ? void 0 : X.backgroundStyle,
            el = l.useMemo(() => U(K.rankedSkuIds), [n, U, K.rankedSkuIds]),
            ea = (0, x.a)()(el),
            es = (0, v.l)(ea).slice(0, 4),
            eo = (0, I.St)(es),
            ei =
                F === N.AW.ORBS
                    ? A.intl.string(A.t["1CdL8f"])
                    : G
                      ? q
                          ? A.intl.string(A.t["/QvRam"])
                          : A.intl.string(A.t.xYKa1d)
                      : A.intl.formatToPlainString(A.t.wvKYCg, { category_name: K.name }),
            ec = (0, E.FF)("CollectiblesContent"),
            eu = () => {
                F === N.AW.ORBS
                    ? ((0, f.Y)({
                          pageType: P.ZY5.SHOP_ORBS_TAB,
                          sectionType: P.jXE.ORBS_SHOP_HERO_BLOCK,
                          ctaObject: P.qAy.CTA_TO_QUEST_HOME,
                      }),
                      (0, p.navigateToQuestHome)({ fromContent: i.j.ORBS_SHOP_HERO_CTA }))
                    : (a("shop latest category hero", ec && K.categorySkuId !== o.T.ORB ? void 0 : K.categorySkuId),
                      h.default.track(P.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                          collectibles_shop_session_id: null == V ? void 0 : V.sessionId,
                          sku_id: K.categorySkuId,
                          page_type: F,
                          page_section: null == V ? void 0 : V.pageSection,
                          page_category: null == V ? void 0 : V.pageCategory,
                          cta_name: "shop latest category hero button",
                      }));
            };
        return null != W && (n || K !== Z)
            ? (0, r.jsxs)("div", {
                  ref: D,
                  className: R.heroBlock,
                  children: [
                      (0, r.jsx)("div", {
                          className: s()(R.banner, { [R.rivBanner]: en }),
                          style: null != er ? { background: er } : void 0,
                          children: (0, r.jsx)(B.Z, {
                              bannerStatic: $,
                              bannerAnimated: ee,
                              isResponsive: et,
                          }),
                      }),
                      (0, r.jsxs)("div", {
                          className: R.heroBlockContent,
                          children: [
                              en
                                  ? (0, r.jsx)("div", {
                                        className: R.rivBannerButtonContainer,
                                        children:
                                            !n &&
                                            (0, r.jsx)(d.zxk, {
                                                variant: "overlay-primary",
                                                onClick: eu,
                                                text: ei,
                                            }),
                                    })
                                  : (0, r.jsxs)("div", {
                                        className: s()(z ? R.heroHeaderContainerStacked : R.heroHeaderContainer, {
                                            [R.responsive]: et,
                                        }),
                                        children: [
                                            n
                                                ? (0, r.jsx)("div", {
                                                      className: R.heroHeaderBadgeLogoSummaryContainer,
                                                  })
                                                : (0, r.jsxs)("div", {
                                                      className: R.heroHeaderBadgeLogoSummaryContainer,
                                                      children: [
                                                          null != K.unpublishedAt &&
                                                              (0, r.jsx)(d.IGR, {
                                                                  disableColor: !0,
                                                                  text: A.intl.string(A.t["h/uBCQ"]),
                                                                  className: R.limitedTimeBadge,
                                                              }),
                                                          (0, r.jsxs)("div", {
                                                              className: s()(R.heroLogoNameContainer, {
                                                                  [R.heroLogoNameContainerStacked]: z,
                                                              }),
                                                              children: [
                                                                  null != K.logoUrl &&
                                                                      (0, r.jsx)("img", {
                                                                          className: R.heroHeaderLogo,
                                                                          src: J,
                                                                          alt: K.name,
                                                                          style:
                                                                              null == Q ? void 0 : Q.toDesktopStyles(),
                                                                      }),
                                                                  null != K.title &&
                                                                      (0, r.jsx)(d.X6q, {
                                                                          variant: "heading-xxl/bold",
                                                                          className: R.title,
                                                                          color: "header-primary",
                                                                          children: K.title,
                                                                      }),
                                                                  "" !== K.summary &&
                                                                      (0, r.jsx)(d.Text, {
                                                                          variant:
                                                                              K.categorySkuId === o.T.ORB
                                                                                  ? "text-lg/medium"
                                                                                  : "text-md/normal",
                                                                          className:
                                                                              K.categorySkuId === o.T.ORB
                                                                                  ? R.orbsSubHeaderText
                                                                                  : (
                                                                                          null == Y
                                                                                              ? void 0
                                                                                              : Y.showDarkBannerText
                                                                                      )
                                                                                    ? R.subHeaderTextDark
                                                                                    : R.subHeaderText,
                                                                          style:
                                                                              null != K.bannerTextColor
                                                                                  ? { color: K.bannerTextColor }
                                                                                  : void 0,
                                                                          children: K.summary,
                                                                      }),
                                                              ],
                                                          }),
                                                      ],
                                                  }),
                                            !n &&
                                                (0, r.jsx)("div", {
                                                    className: z
                                                        ? R.heroHeaderButtonContainerStacked
                                                        : R.heroHeaderButtonContainer,
                                                    children: (0, r.jsx)(d.zxk, {
                                                        variant: "overlay-primary",
                                                        onClick: eu,
                                                        text: ei,
                                                    }),
                                                }),
                                        ],
                                    }),
                              (0, r.jsx)("div", {
                                  className: s()(R.row, R.feed, { [R.feedSingleRow]: F !== N.AW.ORBS }),
                                  children: n
                                      ? (0, r.jsx)(r.Fragment, {
                                            children: [void 0, void 0, void 0, void 0].map((e, t) =>
                                                (0, r.jsx)(T.K, {}, t),
                                            ),
                                        })
                                      : (0, r.jsx)(r.Fragment, {
                                            children: eo.map((e, t) => {
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
                                                                      user: W,
                                                                      tab: F,
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
