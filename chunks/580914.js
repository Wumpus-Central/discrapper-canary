n.d(t, { Z: () => H }), n(388685);
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
    A = n(859788),
    B = n(215023),
    N = n(981631),
    R = n(388032),
    Z = n(310582);
let w = (0, b.IC)(90),
    F = {
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
    H = (e) => {
        var t;
        let { isLoading: n, handleTransition: a, category: H, heroBlock: M, tab: D, onVisibilityChange: W } = e,
            U = (0, g.O)(
                (e) => {
                    null == W || W(e);
                },
                0.1,
                null != W,
            ),
            V = (0, u.e7)([h.default], () => h.default.getCurrentUser()),
            z = (0, I.Z)(),
            G = (0, _.sp)(),
            q = x.Z.useConfig({ location: "HeroBlock" }).showButtonLeftAligned && D !== B.AW.ORBS,
            K = (0, v.MG)("HeroBlock"),
            Y = (0, v.xh)("HeroBlock"),
            X = l.useMemo(() => {
                var e, t;
                return null != M
                    ? M
                    : null == H
                      ? F
                      : {
                            rankedSkuIds: null != (e = H.heroRanking) ? e : [],
                            name: H.name,
                            unpublishedAt: H.unpublishedAt,
                            logoUrl: (0, b.uV)(null != (t = H.heroLogo) ? t : H.logo, { size: w }),
                            categorySkuId: H.skuId,
                            bannerAsset: H.heroBannerAsset,
                            fallbackBannerUrl: (0, b.uV)(H.heroBanner, {
                                size: B.pv,
                                format: "jpg",
                            }),
                            summary: H.summary,
                            type: c.z.HERO,
                            categoryStoreListingId: H.storeListingId,
                            bannerConfig: H.heroBannerConfig,
                            logoConfig: H.heroLogoDisplayConfig,
                        };
            }, [M, H]),
            {
                bannerStyleOverrides: Q,
                logoStyleOverrides: J,
                heroLogo: $,
                heroBannerStatic: ee,
                heroBannerAnimated: et,
            } = (0, k.hr)(X),
            en = null != (t = null == Q ? void 0 : Q.responsive) && t,
            er = null == Q ? void 0 : Q.backgroundStyle,
            el = null == et ? void 0 : et.endsWith(".riv"),
            ea = (0, u.e7)([m.Z], () => m.Z.products),
            ei = l.useMemo(() => (n ? [] : ea.size > 0 ? z(X.rankedSkuIds) : []), [n, z, X.rankedSkuIds, ea]),
            es = l.useMemo(
                () =>
                    !n &&
                    0 !== X.rankedSkuIds.length &&
                    !(ei.length > 0) &&
                    X.rankedSkuIds.every((e) => {
                        var t;
                        return (null == (t = m.Z.getProduct(e)) ? void 0 : t.variantGroupStoreListingId) != null;
                    }),
                [n, X.rankedSkuIds, ei.length],
            ),
            eo = (0, O.a)()(ei),
            ec = (0, T.l)(eo).slice(0, 4),
            eu = (0, P.St)(ec),
            ed =
                D === B.AW.ORBS
                    ? R.intl.string(R.t["1CdL8f"])
                    : K
                      ? Y
                          ? R.intl.string(R.t["/QvRam"])
                          : R.intl.string(R.t.xYKa1d)
                      : R.intl.formatToPlainString(R.t.wvKYCg, { category_name: X.name }),
            eg = (0, S.FF)("CollectiblesContent"),
            ep = X.categorySkuId === s.T.ORB,
            ef = E.Z.useConfig({ location: "HeroBlock" }).showCardsV2,
            eh = () => {
                D === B.AW.ORBS
                    ? ((0, f.Y)({
                          pageType: N.ZY5.SHOP_ORBS_TAB,
                          sectionType: N.jXE.ORBS_SHOP_HERO_BLOCK,
                          ctaObject: N.qAy.CTA_TO_QUEST_HOME,
                      }),
                      (0, p.navigateToQuestHome)({ fromContent: o.j.ORBS_SHOP_HERO_CTA }))
                    : (a("shop latest category hero", !eg || ep ? X.categorySkuId : void 0),
                      C.default.track(N.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                          collectibles_shop_session_id: null == G ? void 0 : G.sessionId,
                          sku_id: X.categorySkuId,
                          page_type: D,
                          page_section: null == G ? void 0 : G.pageSection,
                          page_category: null == G ? void 0 : G.pageCategory,
                          cta_name: "shop latest category hero button",
                      }));
            };
        return null != V && (n || X !== F)
            ? (0, r.jsxs)("div", {
                  ref: U,
                  className: Z.heroBlock,
                  children: [
                      (0, r.jsx)("div", {
                          className: i()(Z.banner, { [Z.rivBanner]: el }),
                          style: null != er ? { background: er } : void 0,
                          children: (0, r.jsx)(A.Z, {
                              bannerStatic: ee,
                              bannerAnimated: et,
                              isResponsive: en,
                          }),
                      }),
                      (0, r.jsxs)("div", {
                          className: Z.heroBlockContent,
                          children: [
                              el
                                  ? (0, r.jsx)("div", {
                                        className: Z.rivBannerButtonContainer,
                                        children:
                                            !n &&
                                            (0, r.jsx)(d.zxk, {
                                                variant: "overlay-primary",
                                                onClick: eh,
                                                text: ed,
                                            }),
                                    })
                                  : (0, r.jsxs)("div", {
                                        className: i()(q ? Z.heroHeaderContainerStacked : Z.heroHeaderContainer, {
                                            [Z.responsive]: en,
                                        }),
                                        children: [
                                            n
                                                ? (0, r.jsx)("div", {
                                                      className: Z.heroHeaderBadgeLogoSummaryContainer,
                                                  })
                                                : (0, r.jsxs)("div", {
                                                      className: Z.heroHeaderBadgeLogoSummaryContainer,
                                                      children: [
                                                          null != X.unpublishedAt &&
                                                              (0, r.jsx)(d.IGR, {
                                                                  disableColor: !0,
                                                                  text: R.intl.string(R.t["h/uBCQ"]),
                                                                  className: Z.limitedTimeBadge,
                                                              }),
                                                          (0, r.jsxs)("div", {
                                                              className: i()(Z.heroLogoNameContainer, {
                                                                  [Z.heroLogoNameContainerStacked]: q,
                                                              }),
                                                              children: [
                                                                  null != X.logoUrl &&
                                                                      (0, r.jsx)("img", {
                                                                          className: Z.heroHeaderLogo,
                                                                          src: $,
                                                                          alt: X.name,
                                                                          style:
                                                                              null == J ? void 0 : J.toDesktopStyles(),
                                                                      }),
                                                                  null != X.title &&
                                                                      (0, r.jsx)(d.X6q, {
                                                                          variant: "heading-xxl/bold",
                                                                          className: Z.title,
                                                                          color: "header-primary",
                                                                          children: X.title,
                                                                      }),
                                                                  "" !== X.summary &&
                                                                      (0, r.jsx)(d.Text, {
                                                                          variant: ep
                                                                              ? "text-lg/medium"
                                                                              : "text-md/normal",
                                                                          className: ep
                                                                              ? Z.orbsSubHeaderText
                                                                              : Z.subHeaderText,
                                                                          style:
                                                                              null != X.bannerTextColor
                                                                                  ? { color: X.bannerTextColor }
                                                                                  : void 0,
                                                                          children: X.summary,
                                                                      }),
                                                              ],
                                                          }),
                                                      ],
                                                  }),
                                            !n &&
                                                (0, r.jsx)("div", {
                                                    className: q
                                                        ? Z.heroHeaderButtonContainerStacked
                                                        : Z.heroHeaderButtonContainer,
                                                    children: (0, r.jsx)(d.zxk, {
                                                        variant: "overlay-primary",
                                                        onClick: eh,
                                                        text: ed,
                                                    }),
                                                }),
                                        ],
                                    }),
                              (0, r.jsx)("div", {
                                  className: i()(Z.row, Z.feed, { [Z.feedSingleRow]: D !== B.AW.ORBS }),
                                  children:
                                      n || es
                                          ? (0, r.jsx)(r.Fragment, {
                                                children: [void 0, void 0, void 0, void 0].map((e, t) =>
                                                    (0, r.jsx)(y.K, {}, t),
                                                ),
                                            })
                                          : (0, r.jsx)(r.Fragment, {
                                                children: eu.map((e, t) => {
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
                                                                  children: ef
                                                                      ? (0, r.jsx)(
                                                                            j.Z,
                                                                            {
                                                                                skuId: null == e ? void 0 : e.skuId,
                                                                                config: {
                                                                                    tab: D,
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
                                                                                user: V,
                                                                                tab: D,
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
