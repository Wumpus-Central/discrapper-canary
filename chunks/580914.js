n.d(t, { Z: () => D }), n(388685);
var r = n(951288),
    l = n(647438),
    a = n(120356),
    i = n.n(a),
    s = n(180650),
    o = n(636977),
    c = n(685816),
    u = n(442837),
    d = n(481060),
    g = n(434650),
    p = n(110560),
    f = n(507808),
    h = n(594174),
    C = n(626135),
    _ = n(381585),
    m = n(597688),
    b = n(884697),
    E = n(128922),
    S = n(870289),
    x = n(254690),
    v = n(655283),
    O = n(370039),
    T = n(937510),
    y = n(38900),
    L = n(709999),
    j = n(653126),
    k = n(794324),
    I = n(934760),
    P = n(619899),
    B = n(190157),
    A = n(642909),
    N = n(859788),
    R = n(215023),
    Z = n(981631),
    w = n(388032),
    F = n(310582);
let M = (0, b.IC)(90),
    H = {
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
    D = (e) => {
        var t;
        let { isLoading: n, handleTransition: a, category: D, heroBlock: W, tab: U, onVisibilityChange: V } = e,
            z = (0, g.O)(
                (e) => {
                    null == V || V(e);
                },
                0.1,
                null != V,
            ),
            G = l.useRef(null),
            q = (0, A.G)("HeroBlock"),
            K = (0, u.e7)([h.default], () => h.default.getCurrentUser()),
            Y = (0, I.Z)(),
            X = (0, _.sp)(),
            Q = x.Z.useConfig({ location: "HeroBlock" }).showButtonLeftAligned && U !== R.AW.ORBS,
            J = (0, v.MG)("HeroBlock"),
            $ = (0, v.xh)("HeroBlock"),
            ee = l.useMemo(() => {
                var e, t;
                return null != W
                    ? W
                    : null == D
                      ? H
                      : {
                            rankedSkuIds: null != (e = D.heroRanking) ? e : [],
                            name: D.name,
                            unpublishedAt: D.unpublishedAt,
                            logoUrl: (0, b.uV)(null != (t = D.heroLogo) ? t : D.logo, { size: M }),
                            categorySkuId: D.skuId,
                            bannerAsset: D.heroBannerAsset,
                            fallbackBannerUrl: (0, b.uV)(D.heroBanner, {
                                size: R.pv,
                                format: "jpg",
                            }),
                            summary: D.summary,
                            type: c.z.HERO,
                            categoryStoreListingId: D.storeListingId,
                            bannerConfig: D.heroBannerConfig,
                            logoConfig: D.heroLogoDisplayConfig,
                        };
            }, [W, D]),
            {
                bannerStyleOverrides: et,
                logoStyleOverrides: en,
                heroLogo: er,
                heroBannerStatic: el,
                heroBannerAnimated: ea,
            } = (0, k.hr)(ee),
            ei = null != (t = null == et ? void 0 : et.responsive) && t,
            es = null == et ? void 0 : et.backgroundStyle,
            eo = (0, B.Dp)(ea),
            ec = (0, u.e7)([m.Z], () => m.Z.products),
            eu = l.useMemo(() => (n ? [] : ec.size > 0 ? Y(ee.rankedSkuIds) : []), [n, Y, ee.rankedSkuIds, ec]),
            ed = l.useMemo(
                () =>
                    !n &&
                    0 !== ee.rankedSkuIds.length &&
                    !(eu.length > 0) &&
                    ee.rankedSkuIds.every((e) => {
                        var t;
                        return (null == (t = m.Z.getProduct(e)) ? void 0 : t.variantGroupStoreListingId) != null;
                    }),
                [n, ee.rankedSkuIds, eu.length],
            ),
            eg = (0, O.a)()(eu),
            ep = (0, T.l)(eg).slice(0, 4),
            ef = (0, P.St)(ep),
            eh =
                U === R.AW.ORBS
                    ? w.intl.string(w.t["1CdL8f"])
                    : J
                      ? $
                          ? w.intl.string(w.t["/QvRam"])
                          : w.intl.string(w.t.xYKa1d)
                      : w.intl.formatToPlainString(w.t.wvKYCg, { category_name: ee.name }),
            eC = (0, S.FF)("CollectiblesContent"),
            e_ = ee.categorySkuId === s.T.ORB,
            em = E.Z.useConfig({ location: "HeroBlock" }).showCardsV2,
            eb = () => {
                U === R.AW.ORBS
                    ? ((0, f.Y)({
                          pageType: Z.ZY5.SHOP_ORBS_TAB,
                          sectionType: Z.jXE.ORBS_SHOP_HERO_BLOCK,
                          ctaObject: Z.qAy.CTA_TO_QUEST_HOME,
                      }),
                      (0, p.navigateToQuestHome)({ fromContent: o.j.ORBS_SHOP_HERO_CTA }))
                    : (a("shop latest category hero", !eC || e_ ? ee.categorySkuId : void 0),
                      C.default.track(Z.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                          collectibles_shop_session_id: null == X ? void 0 : X.sessionId,
                          sku_id: ee.categorySkuId,
                          page_type: U,
                          page_section: null == X ? void 0 : X.pageSection,
                          page_category: null == X ? void 0 : X.pageCategory,
                          cta_name: "shop latest category hero button",
                      }));
            };
        return null != K && (n || ee !== H)
            ? (0, r.jsxs)("div", {
                  ref: z,
                  className: F.heroBlock,
                  children: [
                      eo
                          ? (0, B.gT)({
                                isCustomCursorEnabled: q,
                                className: F.riveEventOverlay,
                                riveEventTargetRef: G,
                            })
                          : null,
                      (0, r.jsx)("div", {
                          className: i()(F.banner, { [F.rivBanner]: eo }),
                          style: null != es ? { background: es } : void 0,
                          children: (0, r.jsx)(N.Z, {
                              bannerStatic: el,
                              bannerAnimated: ea,
                              isResponsive: ei,
                              eventTargetRef: G,
                          }),
                      }),
                      (0, r.jsxs)("div", {
                          className: F.heroBlockContent,
                          children: [
                              eo
                                  ? (0, r.jsx)("div", {
                                        className: F.rivBannerButtonContainer,
                                        children:
                                            !n &&
                                            (0, r.jsx)(d.zxk, {
                                                variant: "overlay-primary",
                                                onClick: eb,
                                                text: eh,
                                            }),
                                    })
                                  : (0, r.jsxs)("div", {
                                        className: i()(Q ? F.heroHeaderContainerStacked : F.heroHeaderContainer, {
                                            [F.responsive]: ei,
                                        }),
                                        children: [
                                            n
                                                ? (0, r.jsx)("div", {
                                                      className: F.heroHeaderBadgeLogoSummaryContainer,
                                                  })
                                                : (0, r.jsxs)("div", {
                                                      className: F.heroHeaderBadgeLogoSummaryContainer,
                                                      children: [
                                                          null != ee.unpublishedAt &&
                                                              (0, r.jsx)(d.IGR, {
                                                                  disableColor: !0,
                                                                  text: w.intl.string(w.t["h/uBCQ"]),
                                                                  className: F.limitedTimeBadge,
                                                              }),
                                                          (0, r.jsxs)("div", {
                                                              className: i()(F.heroLogoNameContainer, {
                                                                  [F.heroLogoNameContainerStacked]: Q,
                                                              }),
                                                              children: [
                                                                  null != ee.logoUrl &&
                                                                      (0, r.jsx)("img", {
                                                                          className: F.heroHeaderLogo,
                                                                          src: er,
                                                                          alt: ee.name,
                                                                          style:
                                                                              null == en
                                                                                  ? void 0
                                                                                  : en.toDesktopStyles(),
                                                                      }),
                                                                  null != ee.title &&
                                                                      (0, r.jsx)(d.X6q, {
                                                                          variant: "heading-xxl/bold",
                                                                          className: F.title,
                                                                          color: "header-primary",
                                                                          children: ee.title,
                                                                      }),
                                                                  "" !== ee.summary &&
                                                                      (0, r.jsx)(d.Text, {
                                                                          variant: e_
                                                                              ? "text-lg/medium"
                                                                              : "text-md/normal",
                                                                          className: e_
                                                                              ? F.orbsSubHeaderText
                                                                              : F.subHeaderText,
                                                                          style:
                                                                              null != ee.bannerTextColor
                                                                                  ? { color: ee.bannerTextColor }
                                                                                  : void 0,
                                                                          children: ee.summary,
                                                                      }),
                                                              ],
                                                          }),
                                                      ],
                                                  }),
                                            !n &&
                                                (0, r.jsx)("div", {
                                                    className: Q
                                                        ? F.heroHeaderButtonContainerStacked
                                                        : F.heroHeaderButtonContainer,
                                                    children: (0, r.jsx)(d.zxk, {
                                                        variant: "overlay-primary",
                                                        onClick: eb,
                                                        text: eh,
                                                    }),
                                                }),
                                        ],
                                    }),
                              (0, r.jsx)("div", {
                                  className: i()(F.row, F.feed, { [F.feedSingleRow]: U !== R.AW.ORBS }),
                                  children:
                                      n || ed
                                          ? (0, r.jsx)(r.Fragment, {
                                                children: [void 0, void 0, void 0, void 0].map((e, t) =>
                                                    (0, r.jsx)(y.K, {}, t),
                                                ),
                                            })
                                          : (0, r.jsx)(r.Fragment, {
                                                children: ef.map((e, t) => {
                                                    let n = m.Z.getCategoryForProduct(e.skuId);
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
                                                                  children: em
                                                                      ? (0, r.jsx)(
                                                                            j.Z,
                                                                            {
                                                                                skuId: null == e ? void 0 : e.skuId,
                                                                                config: {
                                                                                    tab: U,
                                                                                    shopBlockType: c.z.HERO,
                                                                                },
                                                                            },
                                                                            e.skuId,
                                                                        )
                                                                      : (0, r.jsx)(
                                                                            L.Z,
                                                                            {
                                                                                product: e,
                                                                                category: n,
                                                                                user: K,
                                                                                tab: U,
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
