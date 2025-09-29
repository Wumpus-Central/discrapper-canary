n.d(t, { Z: () => M }), n(388685);
var r = n(951288),
    l = n(647438),
    i = n(120356),
    a = n.n(i),
    s = n(636977),
    o = n(685816),
    c = n(442837),
    u = n(481060),
    d = n(434650),
    g = n(110560),
    p = n(507808),
    f = n(594174),
    h = n(626135),
    _ = n(381585),
    C = n(597688),
    m = n(884697),
    b = n(128922),
    E = n(870289),
    S = n(254690),
    v = n(655283),
    x = n(370039),
    O = n(937510),
    T = n(38900),
    y = n(709999),
    L = n(653126),
    j = n(794324),
    k = n(934760),
    I = n(619899),
    P = n(190157),
    N = n(642909),
    B = n(859788),
    A = n(215023),
    R = n(981631),
    Z = n(388032),
    w = n(687983);
let F = (0, m.IC)(90),
    H = {
        rankedSkuIds: [],
        name: "",
        unpublishedAt: void 0,
        logoUrl: "",
        categorySkuId: void 0,
        bannerAsset: void 0,
        fallbackBannerUrl: "",
        summary: "",
        type: o.z.HERO,
        categoryStoreListingId: "",
    },
    M = (e) => {
        var t;
        let { isLoading: n, handleTransition: i, category: M, heroBlock: D, tab: W, onVisibilityChange: U } = e,
            V = (0, d.O)(
                (e) => {
                    null == U || U(e);
                },
                0.1,
                null != U,
            ),
            z = l.useRef(null),
            G = (0, N.G)("HeroBlock"),
            K = (0, c.e7)([f.default], () => f.default.getCurrentUser()),
            q = (0, k.Z)(),
            Y = (0, _.sp)(),
            X = S.Z.useConfig({ location: "HeroBlock" }).showButtonLeftAligned && W !== A.AW.ORBS,
            Q = (0, v.MG)("HeroBlock"),
            J = (0, v.xh)("HeroBlock"),
            $ = l.useMemo(() => {
                var e, t;
                return null != D
                    ? D
                    : null == M
                      ? H
                      : {
                            rankedSkuIds: null != (e = M.heroRanking) ? e : [],
                            name: M.name,
                            unpublishedAt: M.unpublishedAt,
                            logoUrl: (0, m.uV)(null != (t = M.heroLogo) ? t : M.logo, { size: F }),
                            categorySkuId: M.skuId,
                            bannerAsset: M.heroBannerAsset,
                            fallbackBannerUrl: (0, m.uV)(M.heroBanner, {
                                size: A.pv,
                                format: "jpg",
                            }),
                            summary: M.summary,
                            type: o.z.HERO,
                            categoryStoreListingId: M.storeListingId,
                            bannerConfig: M.heroBannerConfig,
                            logoConfig: M.heroLogoDisplayConfig,
                        };
            }, [D, M]),
            {
                bannerStyleOverrides: ee,
                logoStyleOverrides: et,
                heroLogo: en,
                heroBannerStatic: er,
                heroBannerAnimated: el,
            } = (0, j.hr)($),
            ei = null != (t = null == ee ? void 0 : ee.responsive) && t,
            ea = null == ee ? void 0 : ee.backgroundStyle,
            es = (0, P.Dp)(el),
            eo = (0, c.e7)([C.Z], () => C.Z.products),
            ec = l.useMemo(() => (n ? [] : eo.size > 0 ? q($.rankedSkuIds) : []), [n, q, $.rankedSkuIds, eo]),
            eu = l.useMemo(
                () =>
                    !n &&
                    0 !== $.rankedSkuIds.length &&
                    !(ec.length > 0) &&
                    $.rankedSkuIds.every((e) => {
                        var t;
                        return (null == (t = C.Z.getProduct(e)) ? void 0 : t.variantGroupStoreListingId) != null;
                    }),
                [n, $.rankedSkuIds, ec.length],
            ),
            ed = (0, x.a)()(ec),
            eg = (0, O.l)(ed).slice(0, 4),
            ep = (0, I.St)(eg),
            ef =
                W === A.AW.ORBS
                    ? Z.intl.string(Z.t["1CdL8f"])
                    : Q
                      ? J
                          ? Z.intl.string(Z.t["/QvRam"])
                          : Z.intl.string(Z.t.xYKa1d)
                      : Z.intl.formatToPlainString(Z.t.wvKYCg, { category_name: $.name }),
            eh = (0, E.FF)("CollectiblesContent"),
            e_ = (0, m.$2)($.categorySkuId),
            eC = b.Z.useConfig({ location: "HeroBlock" }).showCardsV2,
            em = () => {
                W === A.AW.ORBS
                    ? ((0, p.Y)({
                          pageType: R.ZY5.SHOP_ORBS_TAB,
                          sectionType: R.jXE.ORBS_SHOP_HERO_BLOCK,
                          ctaObject: R.qAy.CTA_TO_QUEST_HOME,
                      }),
                      (0, g.navigateToQuestHome)({ fromContent: s.j.ORBS_SHOP_HERO_CTA }))
                    : (i("shop latest category hero", !eh || e_ ? $.categorySkuId : void 0),
                      h.default.track(R.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                          collectibles_shop_session_id: null == Y ? void 0 : Y.sessionId,
                          sku_id: $.categorySkuId,
                          page_type: W,
                          page_section: null == Y ? void 0 : Y.pageSection,
                          page_category: null == Y ? void 0 : Y.pageCategory,
                          cta_name: "shop latest category hero button",
                      }));
            };
        return null != K && (n || $ !== H)
            ? (0, r.jsxs)("div", {
                  ref: V,
                  className: w.heroBlock,
                  children: [
                      es
                          ? (0, P.gT)({
                                isCustomCursorEnabled: G,
                                className: w.riveEventOverlay,
                                riveEventTargetRef: z,
                            })
                          : null,
                      (0, r.jsx)("div", {
                          className: a()(w.banner, { [w.rivBanner]: es }),
                          style: null != ea ? { background: ea } : void 0,
                          children: (0, r.jsx)(B.Z, {
                              bannerStatic: er,
                              bannerAnimated: el,
                              isResponsive: ei,
                              eventTargetRef: z,
                          }),
                      }),
                      (0, r.jsxs)("div", {
                          className: w.heroBlockContent,
                          children: [
                              es
                                  ? (0, r.jsx)("div", {
                                        className: w.rivBannerButtonContainer,
                                        children:
                                            !n &&
                                            (0, r.jsx)(u.zxk, {
                                                variant: "overlay-primary",
                                                onClick: em,
                                                text: ef,
                                            }),
                                    })
                                  : (0, r.jsxs)("div", {
                                        className: a()(X ? w.heroHeaderContainerStacked : w.heroHeaderContainer, {
                                            [w.responsive]: ei,
                                        }),
                                        children: [
                                            n
                                                ? (0, r.jsx)("div", {
                                                      className: w.heroHeaderBadgeLogoSummaryContainer,
                                                  })
                                                : (0, r.jsxs)("div", {
                                                      className: w.heroHeaderBadgeLogoSummaryContainer,
                                                      children: [
                                                          null != $.unpublishedAt &&
                                                              (0, r.jsx)(u.IGR, {
                                                                  disableColor: !0,
                                                                  text: Z.intl.string(Z.t["h/uBCQ"]),
                                                                  className: w.limitedTimeBadge,
                                                              }),
                                                          (0, r.jsxs)("div", {
                                                              className: a()(w.heroLogoNameContainer, {
                                                                  [w.heroLogoNameContainerStacked]: X,
                                                              }),
                                                              children: [
                                                                  null != $.logoUrl &&
                                                                      (0, r.jsx)("img", {
                                                                          className: w.heroHeaderLogo,
                                                                          src: en,
                                                                          alt: $.name,
                                                                          style:
                                                                              null == et
                                                                                  ? void 0
                                                                                  : et.toDesktopStyles(),
                                                                      }),
                                                                  null != $.title &&
                                                                      (0, r.jsx)(u.X6q, {
                                                                          variant: "heading-xxl/bold",
                                                                          className: w.title,
                                                                          color: "header-primary",
                                                                          children: $.title,
                                                                      }),
                                                                  "" !== $.summary &&
                                                                      (0, r.jsx)(u.Text, {
                                                                          variant: e_
                                                                              ? "text-lg/medium"
                                                                              : "text-md/normal",
                                                                          className: e_
                                                                              ? w.orbsSubHeaderText
                                                                              : w.subHeaderText,
                                                                          style:
                                                                              null != $.bannerTextColor
                                                                                  ? { color: $.bannerTextColor }
                                                                                  : void 0,
                                                                          children: $.summary,
                                                                      }),
                                                              ],
                                                          }),
                                                      ],
                                                  }),
                                            !n &&
                                                (0, r.jsx)("div", {
                                                    className: X
                                                        ? w.heroHeaderButtonContainerStacked
                                                        : w.heroHeaderButtonContainer,
                                                    children: (0, r.jsx)(u.zxk, {
                                                        variant: "overlay-primary",
                                                        onClick: em,
                                                        text: ef,
                                                    }),
                                                }),
                                        ],
                                    }),
                              (0, r.jsx)("div", {
                                  className: a()(w.row, w.feed, { [w.feedSingleRow]: W !== A.AW.ORBS }),
                                  children:
                                      n || eu
                                          ? (0, r.jsx)(r.Fragment, {
                                                children: [void 0, void 0, void 0, void 0].map((e, t) =>
                                                    (0, r.jsx)(T.K, {}, t),
                                                ),
                                            })
                                          : (0, r.jsx)(r.Fragment, {
                                                children: ep.map((e, t) => {
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
                                                                  children: eC
                                                                      ? (0, r.jsx)(
                                                                            L.Z,
                                                                            { skuId: null == e ? void 0 : e.skuId },
                                                                            e.skuId,
                                                                        )
                                                                      : (0, r.jsx)(
                                                                            y.Z,
                                                                            {
                                                                                product: e,
                                                                                category: n,
                                                                                user: K,
                                                                                tab: W,
                                                                                shopBlockType: o.z.HERO,
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
