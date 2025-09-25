n.d(t, { Z: () => W }), n(388685);
var r = n(951288),
    l = n(647438),
    i = n(120356),
    a = n.n(i),
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
    b = n(501678),
    E = n(884697),
    S = n(128922),
    v = n(870289),
    x = n(254690),
    O = n(655283),
    T = n(370039),
    y = n(937510),
    L = n(38900),
    j = n(709999),
    k = n(653126),
    I = n(794324),
    P = n(934760),
    N = n(619899),
    A = n(190157),
    B = n(642909),
    R = n(859788),
    Z = n(215023),
    w = n(981631),
    F = n(388032),
    M = n(310582);
let H = (0, E.IC)(90),
    D = {
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
    W = (e) => {
        var t;
        let { isLoading: n, handleTransition: i, category: W, heroBlock: U, tab: V, onVisibilityChange: z } = e,
            G = (0, g.O)(
                (e) => {
                    null == z || z(e);
                },
                0.1,
                null != z,
            ),
            q = l.useRef(null),
            K = (0, B.G)("HeroBlock"),
            Y = (0, u.e7)([h.default], () => h.default.getCurrentUser()),
            X = (0, P.Z)(),
            Q = (0, _.sp)(),
            J = x.Z.useConfig({ location: "HeroBlock" }).showButtonLeftAligned && V !== Z.AW.ORBS,
            $ = (0, O.MG)("HeroBlock"),
            ee = (0, O.xh)("HeroBlock"),
            et = l.useMemo(() => {
                var e, t;
                return null != U
                    ? U
                    : null == W
                      ? D
                      : {
                            rankedSkuIds: null != (e = W.heroRanking) ? e : [],
                            name: W.name,
                            unpublishedAt: W.unpublishedAt,
                            logoUrl: (0, E.uV)(null != (t = W.heroLogo) ? t : W.logo, { size: H }),
                            categorySkuId: W.skuId,
                            bannerAsset: W.heroBannerAsset,
                            fallbackBannerUrl: (0, E.uV)(W.heroBanner, {
                                size: Z.pv,
                                format: "jpg",
                            }),
                            summary: W.summary,
                            type: c.z.HERO,
                            categoryStoreListingId: W.storeListingId,
                            bannerConfig: W.heroBannerConfig,
                            logoConfig: W.heroLogoDisplayConfig,
                        };
            }, [U, W]),
            {
                bannerStyleOverrides: en,
                logoStyleOverrides: er,
                heroLogo: el,
                heroBannerStatic: ei,
                heroBannerAnimated: ea,
            } = (0, I.hr)(et),
            es = null != (t = null == en ? void 0 : en.responsive) && t,
            eo = null == en ? void 0 : en.backgroundStyle,
            ec = (0, A.Dp)(ea),
            eu = (0, u.e7)([m.Z], () => m.Z.products),
            ed = l.useMemo(() => (n ? [] : eu.size > 0 ? X(et.rankedSkuIds) : []), [n, X, et.rankedSkuIds, eu]),
            eg = l.useMemo(
                () =>
                    !n &&
                    0 !== et.rankedSkuIds.length &&
                    !(ed.length > 0) &&
                    et.rankedSkuIds.every((e) => {
                        var t;
                        return (null == (t = m.Z.getProduct(e)) ? void 0 : t.variantGroupStoreListingId) != null;
                    }),
                [n, et.rankedSkuIds, ed.length],
            ),
            ep = (0, T.a)()(ed),
            ef = (0, y.l)(ep).slice(0, 4),
            eh = (0, N.St)(ef),
            eC =
                V === Z.AW.ORBS
                    ? F.intl.string(F.t["1CdL8f"])
                    : $
                      ? ee
                          ? F.intl.string(F.t["/QvRam"])
                          : F.intl.string(F.t.xYKa1d)
                      : F.intl.formatToPlainString(F.t.wvKYCg, { category_name: et.name }),
            e_ = (0, v.FF)("CollectiblesContent"),
            em = et.categorySkuId === s.T.ORB,
            eb = S.Z.useConfig({ location: "HeroBlock" }).showCardsV2,
            eE = () => {
                V === Z.AW.ORBS
                    ? ((0, f.Y)({
                          pageType: w.ZY5.SHOP_ORBS_TAB,
                          sectionType: w.jXE.ORBS_SHOP_HERO_BLOCK,
                          ctaObject: w.qAy.CTA_TO_QUEST_HOME,
                      }),
                      (0, p.navigateToQuestHome)({ fromContent: o.j.ORBS_SHOP_HERO_CTA }))
                    : (i("shop latest category hero", !e_ || em ? et.categorySkuId : void 0),
                      C.default.track(w.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                          collectibles_shop_session_id: null == Q ? void 0 : Q.sessionId,
                          sku_id: et.categorySkuId,
                          page_type: V,
                          page_section: null == Q ? void 0 : Q.pageSection,
                          page_category: null == Q ? void 0 : Q.pageCategory,
                          cta_name: "shop latest category hero button",
                      }));
            };
        return null != Y && (n || et !== D)
            ? (0, r.jsx)(b.g6, {
                  blockType: c.z.HERO,
                  children: (0, r.jsxs)("div", {
                      ref: G,
                      className: M.heroBlock,
                      children: [
                          ec
                              ? (0, A.gT)({
                                    isCustomCursorEnabled: K,
                                    className: M.riveEventOverlay,
                                    riveEventTargetRef: q,
                                })
                              : null,
                          (0, r.jsx)("div", {
                              className: a()(M.banner, { [M.rivBanner]: ec }),
                              style: null != eo ? { background: eo } : void 0,
                              children: (0, r.jsx)(R.Z, {
                                  bannerStatic: ei,
                                  bannerAnimated: ea,
                                  isResponsive: es,
                                  eventTargetRef: q,
                              }),
                          }),
                          (0, r.jsxs)("div", {
                              className: M.heroBlockContent,
                              children: [
                                  ec
                                      ? (0, r.jsx)("div", {
                                            className: M.rivBannerButtonContainer,
                                            children:
                                                !n &&
                                                (0, r.jsx)(d.zxk, {
                                                    variant: "overlay-primary",
                                                    onClick: eE,
                                                    text: eC,
                                                }),
                                        })
                                      : (0, r.jsxs)("div", {
                                            className: a()(J ? M.heroHeaderContainerStacked : M.heroHeaderContainer, {
                                                [M.responsive]: es,
                                            }),
                                            children: [
                                                n
                                                    ? (0, r.jsx)("div", {
                                                          className: M.heroHeaderBadgeLogoSummaryContainer,
                                                      })
                                                    : (0, r.jsxs)("div", {
                                                          className: M.heroHeaderBadgeLogoSummaryContainer,
                                                          children: [
                                                              null != et.unpublishedAt &&
                                                                  (0, r.jsx)(d.IGR, {
                                                                      disableColor: !0,
                                                                      text: F.intl.string(F.t["h/uBCQ"]),
                                                                      className: M.limitedTimeBadge,
                                                                  }),
                                                              (0, r.jsxs)("div", {
                                                                  className: a()(M.heroLogoNameContainer, {
                                                                      [M.heroLogoNameContainerStacked]: J,
                                                                  }),
                                                                  children: [
                                                                      null != et.logoUrl &&
                                                                          (0, r.jsx)("img", {
                                                                              className: M.heroHeaderLogo,
                                                                              src: el,
                                                                              alt: et.name,
                                                                              style:
                                                                                  null == er
                                                                                      ? void 0
                                                                                      : er.toDesktopStyles(),
                                                                          }),
                                                                      null != et.title &&
                                                                          (0, r.jsx)(d.X6q, {
                                                                              variant: "heading-xxl/bold",
                                                                              className: M.title,
                                                                              color: "header-primary",
                                                                              children: et.title,
                                                                          }),
                                                                      "" !== et.summary &&
                                                                          (0, r.jsx)(d.Text, {
                                                                              variant: em
                                                                                  ? "text-lg/medium"
                                                                                  : "text-md/normal",
                                                                              className: em
                                                                                  ? M.orbsSubHeaderText
                                                                                  : M.subHeaderText,
                                                                              style:
                                                                                  null != et.bannerTextColor
                                                                                      ? { color: et.bannerTextColor }
                                                                                      : void 0,
                                                                              children: et.summary,
                                                                          }),
                                                                  ],
                                                              }),
                                                          ],
                                                      }),
                                                !n &&
                                                    (0, r.jsx)("div", {
                                                        className: J
                                                            ? M.heroHeaderButtonContainerStacked
                                                            : M.heroHeaderButtonContainer,
                                                        children: (0, r.jsx)(d.zxk, {
                                                            variant: "overlay-primary",
                                                            onClick: eE,
                                                            text: eC,
                                                        }),
                                                    }),
                                            ],
                                        }),
                                  (0, r.jsx)("div", {
                                      className: a()(M.row, M.feed, { [M.feedSingleRow]: V !== Z.AW.ORBS }),
                                      children:
                                          n || eg
                                              ? (0, r.jsx)(r.Fragment, {
                                                    children: [void 0, void 0, void 0, void 0].map((e, t) =>
                                                        (0, r.jsx)(L.K, {}, t),
                                                    ),
                                                })
                                              : (0, r.jsx)(r.Fragment, {
                                                    children: eh.map((e, t) => {
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
                                                                      children: eb
                                                                          ? (0, r.jsx)(
                                                                                k.Z,
                                                                                { skuId: null == e ? void 0 : e.skuId },
                                                                                e.skuId,
                                                                            )
                                                                          : (0, r.jsx)(
                                                                                j.Z,
                                                                                {
                                                                                    product: e,
                                                                                    category: n,
                                                                                    user: Y,
                                                                                    tab: V,
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
                  }),
              })
            : null;
    };
