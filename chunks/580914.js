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
    f = n(110560),
    p = n(507808),
    m = n(594174),
    h = n(626135),
    _ = n(381585),
    C = n(597688),
    b = n(884697),
    E = n(870289),
    S = n(826916),
    O = n(370039),
    v = n(937510),
    x = n(823941),
    y = n(38900),
    T = n(709999),
    L = n(794324),
    j = n(934760),
    k = n(619899),
    B = n(859788),
    I = n(215023),
    N = n(981631),
    A = n(388032),
    P = n(310582);
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
        let { isResponsive: t, heroBannerOverrides: n } = e;
        return (0, r.jsxs)("div", {
            className: s()(P.heroBannerSheenContainer, { [P.responsive]: t }),
            children: [
                (0, r.jsx)("div", {
                    id: "hero-block-left-shadow",
                    className: s()(P.bannerShadow, P.left, { [P.darker]: null == n ? void 0 : n.darker }),
                    style:
                        (null == n ? void 0 : n.gradientLeft) != null
                            ? { background: null == n ? void 0 : n.gradientLeft }
                            : void 0,
                }),
                (0, r.jsx)("div", {
                    id: "hero-block-right-shadow",
                    className: s()(P.bannerShadow, P.right, { [P.darker]: null == n ? void 0 : n.darker }),
                    style:
                        (null == n ? void 0 : n.gradientRight) != null
                            ? { background: null == n ? void 0 : n.gradientRight }
                            : void 0,
                }),
            ],
        });
    },
    w = (e) => {
        var t;
        let { isLoading: n, handleTransition: a, category: w, heroBlock: F, tab: H, onVisibilityChange: D } = e,
            M = (0, g.O)(
                (e) => {
                    null == D || D(e);
                },
                0.1,
                null != D,
            ),
            W = (0, u.e7)([m.default], () => m.default.getCurrentUser()),
            U = (0, j.Z)(),
            V = (0, _.sp)(),
            z = (0, S.N)("HeroBlock") && H !== I.AW.ORBS,
            G = (0, S.E)("HeroBlock"),
            q = l.useMemo(() => {
                var e, t;
                return null != F
                    ? F
                    : null == w
                      ? R
                      : {
                            rankedSkuIds: null != (e = w.heroRanking) ? e : [],
                            name: w.name,
                            unpublishedAt: w.unpublishedAt,
                            logoUrl: (0, b.uV)(null != (t = w.heroLogo) ? t : w.logo, { size: x.n }),
                            categorySkuId: w.skuId,
                            bannerAsset: w.heroBannerAsset,
                            fallbackBannerUrl: (0, b.uV)(w.heroBanner, {
                                size: I.pv,
                                format: "jpg",
                            }),
                            summary: w.summary,
                            type: c.z.HERO,
                            categoryStoreListingId: w.storeListingId,
                            bannerConfig: w.heroBannerConfig,
                            logoConfig: w.heroLogoDisplayConfig,
                        };
            }, [F, w]),
            {
                bannerOverrides: K,
                bannerStyleOverrides: Y,
                logoStyleOverrides: X,
                heroLogo: Q,
                heroBannerStatic: J,
                heroBannerAnimated: $,
            } = (0, L.hr)(q),
            ee = null == K ? void 0 : K.heroBanner,
            et = null != (t = null == Y ? void 0 : Y.responsive) && t,
            en = null == Y ? void 0 : Y.backgroundStyle,
            er = l.useMemo(() => U(q.rankedSkuIds), [n, U, q.rankedSkuIds]),
            el = (0, O.a)()(er),
            ea = (0, v.l)(el).slice(0, 4),
            es = (0, k.St)(ea),
            eo =
                H === I.AW.ORBS
                    ? A.intl.string(A.t["1CdL8f"])
                    : G
                      ? A.intl.string(A.t.xYKa1d)
                      : A.intl.formatToPlainString(A.t.wvKYCg, { category_name: q.name }),
            ei = (0, E.FF)("CollectiblesContent");
        return null != W && (n || q !== R)
            ? (0, r.jsxs)("div", {
                  ref: M,
                  className: P.heroBlock,
                  children: [
                      (0, r.jsxs)("div", {
                          className: P.banner,
                          style: null != en ? { background: en } : void 0,
                          children: [
                              (0, r.jsx)(B.Z, {
                                  bannerStatic: J,
                                  bannerAnimated: $,
                                  isResponsive: et,
                              }),
                              (null == Y ? void 0 : Y.hideSideShadow) === !0
                                  ? null
                                  : (0, r.jsx)(Z, {
                                        heroBannerOverrides: ee,
                                        isResponsive: et,
                                    }),
                          ],
                      }),
                      (0, r.jsxs)("div", {
                          className: P.heroBlockContent,
                          children: [
                              (0, r.jsxs)("div", {
                                  className: s()(z ? P.heroHeaderContainerStacked : P.heroHeaderContainer, {
                                      [P.responsive]: et,
                                  }),
                                  children: [
                                      n
                                          ? (0, r.jsx)("div", { className: P.heroHeaderBadgeLogoSummaryContainer })
                                          : (0, r.jsxs)("div", {
                                                className: P.heroHeaderBadgeLogoSummaryContainer,
                                                children: [
                                                    null != q.unpublishedAt &&
                                                        (0, r.jsx)(d.IGR, {
                                                            disableColor: !0,
                                                            text: A.intl.string(A.t["h/uBCQ"]),
                                                            className: P.limitedTimeBadge,
                                                        }),
                                                    (0, r.jsxs)("div", {
                                                        className: s()(P.heroLogoNameContainer, {
                                                            [P.heroLogoNameContainerStacked]: z,
                                                        }),
                                                        children: [
                                                            null != q.logoUrl &&
                                                                (0, r.jsx)("img", {
                                                                    className: P.heroHeaderLogo,
                                                                    src: Q,
                                                                    alt: q.name,
                                                                    style: null == X ? void 0 : X.toDesktopStyles(),
                                                                }),
                                                            null != q.title &&
                                                                (0, r.jsx)(d.X6q, {
                                                                    variant: "heading-xxl/bold",
                                                                    className: P.title,
                                                                    color: "header-primary",
                                                                    children: q.title,
                                                                }),
                                                            "" !== q.summary &&
                                                                (0, r.jsx)(d.Text, {
                                                                    variant:
                                                                        q.categorySkuId === o.T.ORB
                                                                            ? "text-lg/medium"
                                                                            : "text-md/normal",
                                                                    className:
                                                                        q.categorySkuId === o.T.ORB
                                                                            ? P.orbsSubHeaderText
                                                                            : (
                                                                                    null == K
                                                                                        ? void 0
                                                                                        : K.showDarkBannerText
                                                                                )
                                                                              ? P.subHeaderTextDark
                                                                              : P.subHeaderText,
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
                                              className: z
                                                  ? P.heroHeaderButtonContainerStacked
                                                  : P.heroHeaderButtonContainer,
                                              children: (0, r.jsx)(d.zxk, {
                                                  variant: "overlay-primary",
                                                  onClick: () => {
                                                      H === I.AW.ORBS
                                                          ? ((0, p.Y)({
                                                                pageType: N.ZY5.SHOP_ORBS_TAB,
                                                                sectionType: N.jXE.ORBS_SHOP_HERO_BLOCK,
                                                                ctaObject: N.qAy.CTA_TO_QUEST_HOME,
                                                            }),
                                                            (0, f.navigateToQuestHome)({
                                                                fromContent: i.j.ORBS_SHOP_HERO_CTA,
                                                            }))
                                                          : (a(
                                                                "shop latest category hero",
                                                                ei && q.categorySkuId !== o.T.ORB
                                                                    ? void 0
                                                                    : q.categorySkuId,
                                                            ),
                                                            h.default.track(N.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                                collectibles_shop_session_id:
                                                                    null == V ? void 0 : V.sessionId,
                                                                sku_id: q.categorySkuId,
                                                                page_type: H,
                                                                page_section: null == V ? void 0 : V.pageSection,
                                                                page_category: null == V ? void 0 : V.pageCategory,
                                                                cta_name: "shop latest category hero button",
                                                            }));
                                                  },
                                                  text: eo,
                                              }),
                                          }),
                                  ],
                              }),
                              (0, r.jsx)("div", {
                                  className: s()(P.row, P.feed, { [P.feedSingleRow]: H !== I.AW.ORBS }),
                                  children: n
                                      ? (0, r.jsx)(r.Fragment, {
                                            children: [void 0, void 0, void 0, void 0].map((e, t) =>
                                                (0, r.jsx)(y.K, {}, t),
                                            ),
                                        })
                                      : (0, r.jsx)(r.Fragment, {
                                            children: es.map((e, t) => {
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
                                                                  T.Z,
                                                                  {
                                                                      product: e,
                                                                      category: n,
                                                                      user: W,
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
