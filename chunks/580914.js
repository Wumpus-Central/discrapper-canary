n.d(t, { Z: () => M }), n(388685);
var r = n(951288),
    l = n(647438),
    a = n(120356),
    s = n.n(a),
    i = n(636977),
    o = n(685816),
    c = n(442837),
    u = n(481060),
    d = n(434650),
    g = n(110560),
    p = n(507808),
    f = n(594174),
    C = n(626135),
    _ = n(381585),
    h = n(597688),
    m = n(884697),
    b = n(128922),
    E = n(870289),
    S = n(254690),
    v = n(655283),
    x = n(370039),
    O = n(937510),
    T = n(38900),
    y = n(709999),
    j = n(653126),
    L = n(401975),
    k = n(794324),
    I = n(934760),
    P = n(619899),
    N = n(190157),
    B = n(642909),
    A = n(859788),
    R = n(215023),
    Z = n(981631),
    w = n(388032),
    F = n(310582);
let H = (0, m.IC)(90),
    D = {
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
        let { isLoading: n, handleTransition: a, category: M, heroBlock: W, tab: U, onVisibilityChange: V } = e,
            z = (0, d.O)(
                (e) => {
                    null == V || V(e);
                },
                0.1,
                null != V,
            ),
            G = l.useRef(null),
            K = (0, B.G)("HeroBlock"),
            q = (0, c.e7)([f.default], () => f.default.getCurrentUser()),
            Y = (0, I.Z)(),
            X = (0, _.sp)(),
            Q = S.Z.useConfig({ location: "HeroBlock" }).showButtonLeftAligned && U !== R.AW.ORBS,
            J = (0, v.x)("HeroBlock"),
            $ = l.useMemo(() => {
                var e, t;
                return null != W
                    ? W
                    : null == M
                      ? D
                      : {
                            rankedSkuIds: null != (e = M.heroRanking) ? e : [],
                            name: M.name,
                            unpublishedAt: M.unpublishedAt,
                            logoUrl: (0, m.uV)(null != (t = M.heroLogo) ? t : M.logo, { size: H }),
                            categorySkuId: M.skuId,
                            bannerAsset: M.heroBannerAsset,
                            fallbackBannerUrl: (0, m.uV)(M.heroBanner, {
                                size: R.pv,
                                format: "jpg",
                            }),
                            summary: M.summary,
                            type: o.z.HERO,
                            categoryStoreListingId: M.storeListingId,
                            bannerConfig: M.heroBannerConfig,
                            logoConfig: M.heroLogoDisplayConfig,
                        };
            }, [W, M]),
            {
                bannerStyleOverrides: ee,
                logoStyleOverrides: et,
                heroLogo: en,
                heroBannerStatic: er,
                heroBannerAnimated: el,
            } = (0, k.hr)($),
            ea = null != (t = null == ee ? void 0 : ee.responsive) && t,
            es = null == ee ? void 0 : ee.backgroundStyle,
            ei = (0, N.Dp)(el),
            eo = (0, c.e7)([h.Z], () => h.Z.products),
            ec = l.useMemo(() => (n ? [] : eo.size > 0 ? Y($.rankedSkuIds) : []), [n, Y, $.rankedSkuIds, eo]),
            eu = l.useMemo(
                () =>
                    !n &&
                    0 !== $.rankedSkuIds.length &&
                    !(ec.length > 0) &&
                    $.rankedSkuIds.every((e) => {
                        var t;
                        return (null == (t = h.Z.getProduct(e)) ? void 0 : t.variantGroupStoreListingId) != null;
                    }),
                [n, $.rankedSkuIds, ec.length],
            ),
            ed = (0, x.a)()(ec),
            eg = (0, O.l)(ed).slice(0, 4),
            ep = (0, P.St)(eg),
            ef =
                U === R.AW.ORBS
                    ? w.intl.string(w.t["1CdL8f"])
                    : K
                      ? w.intl.string(w.t.guWAg4)
                      : J
                        ? w.intl.string(w.t["/QvRam"])
                        : w.intl.string(w.t.xYKa1d),
            eC = (0, E.FF)("CollectiblesContent"),
            e_ = (0, m.$2)($.categorySkuId),
            eh = b.Z.useConfig({ location: "HeroBlock" }).showCardsV2,
            em = () => {
                U === R.AW.ORBS
                    ? ((0, p.Y)({
                          pageType: Z.ZY5.SHOP_ORBS_TAB,
                          sectionType: Z.jXE.ORBS_SHOP_HERO_BLOCK,
                          ctaObject: Z.qAy.CTA_TO_QUEST_HOME,
                      }),
                      (0, g.navigateToQuestHome)({ fromContent: i.j.ORBS_SHOP_HERO_CTA }))
                    : (a("shop latest category hero", !eC || e_ ? $.categorySkuId : void 0),
                      C.default.track(Z.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                          collectibles_shop_session_id: null == X ? void 0 : X.sessionId,
                          sku_id: $.categorySkuId,
                          page_type: U,
                          page_section: null == X ? void 0 : X.pageSection,
                          page_category: null == X ? void 0 : X.pageCategory,
                          cta_name: "shop latest category hero button",
                      }));
            };
        return null != q && (n || $ !== D)
            ? (0, r.jsxs)("div", {
                  ref: z,
                  className: F.heroBlock,
                  children: [
                      ei
                          ? (0, N.gT)({
                                isCustomCursorEnabled: K,
                                className: F.riveEventOverlay,
                                riveEventTargetRef: G,
                            })
                          : null,
                      (0, r.jsx)("div", {
                          className: s()(F.banner, { [F.rivBanner]: ei }),
                          style: null != es ? { background: es } : void 0,
                          children: (0, r.jsx)(A.Z, {
                              bannerStatic: er,
                              bannerAnimated: el,
                              isResponsive: ea,
                              eventTargetRef: G,
                          }),
                      }),
                      (0, r.jsxs)("div", {
                          className: F.heroBlockContent,
                          children: [
                              ei
                                  ? (0, r.jsx)("div", {
                                        className: F.rivBannerButtonContainer,
                                        children:
                                            !n &&
                                            (0, r.jsx)(u.zxk, {
                                                variant: "overlay-primary",
                                                onClick: em,
                                                text: ef,
                                            }),
                                    })
                                  : (0, r.jsxs)("div", {
                                        className: s()(Q ? F.heroHeaderContainerStacked : F.heroHeaderContainer, {
                                            [F.responsive]: ea,
                                        }),
                                        children: [
                                            n
                                                ? (0, r.jsx)("div", {
                                                      className: F.heroHeaderBadgeLogoSummaryContainer,
                                                  })
                                                : (0, r.jsxs)("div", {
                                                      className: F.heroHeaderBadgeLogoSummaryContainer,
                                                      children: [
                                                          null != $.unpublishedAt &&
                                                              (0, r.jsx)(u.IGR, {
                                                                  disableColor: !0,
                                                                  text: w.intl.string(w.t["h/uBCQ"]),
                                                                  className: F.limitedTimeBadge,
                                                              }),
                                                          (0, r.jsxs)("div", {
                                                              className: s()(F.heroLogoNameContainer, {
                                                                  [F.heroLogoNameContainerStacked]: Q,
                                                              }),
                                                              children: [
                                                                  null != $.logoUrl &&
                                                                      (0, r.jsx)("img", {
                                                                          className: F.heroHeaderLogo,
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
                                                                          className: F.title,
                                                                          color: "header-primary",
                                                                          children: $.title,
                                                                      }),
                                                                  "" !== $.summary &&
                                                                      (0, r.jsx)(u.Text, {
                                                                          variant: e_
                                                                              ? "text-lg/medium"
                                                                              : "text-md/normal",
                                                                          className: e_
                                                                              ? F.orbsSubHeaderText
                                                                              : F.subHeaderText,
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
                                                    className: Q
                                                        ? F.heroHeaderButtonContainerStacked
                                                        : F.heroHeaderButtonContainer,
                                                    children: (0, r.jsx)(u.zxk, {
                                                        variant: "overlay-primary",
                                                        onClick: em,
                                                        text: ef,
                                                    }),
                                                }),
                                        ],
                                    }),
                              (0, r.jsx)("div", {
                                  className: s()(F.row, F.feed, { [F.feedSingleRow]: U !== R.AW.ORBS }),
                                  children:
                                      n || eu
                                          ? (0, r.jsx)(r.Fragment, {
                                                children: [void 0, void 0, void 0, void 0].map((e, t) =>
                                                    eh ? (0, r.jsx)(L.Z, {}, t) : (0, r.jsx)(T.K, {}, t),
                                                ),
                                            })
                                          : (0, r.jsx)(r.Fragment, {
                                                children: ep.map((e, t) => {
                                                    let n = h.Z.getCategoryForProduct(e.skuId);
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
                                                                  children: eh
                                                                      ? (0, r.jsx)(
                                                                            j.Z,
                                                                            { skuId: null == e ? void 0 : e.skuId },
                                                                            e.skuId,
                                                                        )
                                                                      : (0, r.jsx)(
                                                                            y.Z,
                                                                            {
                                                                                product: e,
                                                                                category: n,
                                                                                user: q,
                                                                                tab: U,
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
