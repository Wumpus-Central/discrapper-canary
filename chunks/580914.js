n.d(t, { Z: () => Z }), n(388685);
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
    p = n(110560),
    f = n(507808),
    m = n(594174),
    _ = n(626135),
    h = n(381585),
    b = n(597688),
    C = n(884697),
    E = n(870289),
    S = n(370039),
    O = n(937510),
    v = n(823941),
    x = n(38900),
    y = n(709999),
    T = n(794324),
    L = n(934760),
    j = n(619899),
    k = n(859788),
    I = n(215023),
    B = n(981631),
    N = n(388032),
    P = n(310582);
let A = {
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
    R = (e) => {
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
    Z = (e) => {
        var t;
        let { isLoading: n, handleTransition: a, category: Z, heroBlock: w, tab: F, onVisibilityChange: D } = e,
            M = (0, g.O)(
                (e) => {
                    null == D || D(e);
                },
                0.1,
                null != D,
            ),
            H = (0, u.e7)([m.default], () => m.default.getCurrentUser()),
            W = (0, L.Z)(),
            U = (0, h.sp)(),
            V = l.useMemo(() => {
                var e, t;
                return null != w
                    ? w
                    : null == Z
                      ? A
                      : {
                            rankedSkuIds: null != (e = Z.heroRanking) ? e : [],
                            name: Z.name,
                            unpublishedAt: Z.unpublishedAt,
                            logoUrl: (0, C.uV)(null != (t = Z.heroLogo) ? t : Z.logo, { size: v.n }),
                            categorySkuId: Z.skuId,
                            bannerAsset: Z.heroBannerAsset,
                            fallbackBannerUrl: (0, C.uV)(Z.heroBanner, {
                                size: I.pv,
                                format: "jpg",
                            }),
                            summary: Z.summary,
                            type: c.z.HERO,
                            categoryStoreListingId: Z.storeListingId,
                            bannerConfig: Z.heroBannerConfig,
                            logoConfig: Z.heroLogoDisplayConfig,
                        };
            }, [w, Z]),
            {
                bannerOverrides: z,
                bannerStyleOverrides: G,
                logoStyleOverrides: q,
                heroLogo: K,
                heroBannerStatic: Y,
                heroBannerAnimated: X,
            } = (0, T.hr)(V),
            Q = null == z ? void 0 : z.heroBanner,
            J = null != (t = null == G ? void 0 : G.responsive) && t,
            $ = null == G ? void 0 : G.backgroundStyle,
            ee = l.useMemo(() => W(V.rankedSkuIds), [n, W, V.rankedSkuIds]),
            et = (0, S.a)()(ee),
            en = (0, O.l)(et).slice(0, 4),
            er = (0, j.St)(en),
            el =
                F === I.AW.ORBS
                    ? N.intl.string(N.t["1CdL8f"])
                    : N.intl.formatToPlainString(N.t.wvKYCg, { category_name: V.name }),
            ea = (0, E.FF)("CollectiblesContent");
        return null != H && (n || V !== A)
            ? (0, r.jsxs)("div", {
                  ref: M,
                  className: P.heroBlock,
                  children: [
                      (0, r.jsxs)("div", {
                          className: P.banner,
                          style: null != $ ? { background: $ } : void 0,
                          children: [
                              (0, r.jsx)(k.Z, {
                                  bannerStatic: Y,
                                  bannerAnimated: X,
                                  isResponsive: J,
                              }),
                              (null == G ? void 0 : G.hideSideShadow) === !0
                                  ? null
                                  : (0, r.jsx)(R, {
                                        heroBannerOverrides: Q,
                                        isResponsive: J,
                                    }),
                          ],
                      }),
                      (0, r.jsxs)("div", {
                          className: P.heroBlockContent,
                          children: [
                              (0, r.jsxs)("div", {
                                  className: s()(P.heroHeaderContainer, { [P.responsive]: J }),
                                  children: [
                                      n
                                          ? (0, r.jsx)("div", { className: P.heroHeaderBadgeLogoSummaryContainer })
                                          : (0, r.jsxs)("div", {
                                                className: P.heroHeaderBadgeLogoSummaryContainer,
                                                children: [
                                                    null != V.unpublishedAt &&
                                                        (0, r.jsx)(d.IGR, {
                                                            disableColor: !0,
                                                            text: N.intl.string(N.t["h/uBCQ"]),
                                                            className: P.limitedTimeBadge,
                                                        }),
                                                    (0, r.jsxs)("div", {
                                                        className: P.heroLogoNameContainer,
                                                        children: [
                                                            null != V.logoUrl &&
                                                                (0, r.jsx)("img", {
                                                                    className: P.heroHeaderLogo,
                                                                    src: K,
                                                                    alt: V.name,
                                                                    style: null == q ? void 0 : q.toDesktopStyles(),
                                                                }),
                                                            null != V.title &&
                                                                (0, r.jsx)(d.X6q, {
                                                                    variant: "heading-xxl/bold",
                                                                    className: P.title,
                                                                    color: "header-primary",
                                                                    children: V.title,
                                                                }),
                                                            "" !== V.summary &&
                                                                (0, r.jsx)(d.Text, {
                                                                    variant:
                                                                        V.categorySkuId === i.T.ORB
                                                                            ? "text-lg/medium"
                                                                            : "text-md/normal",
                                                                    className:
                                                                        V.categorySkuId === i.T.ORB
                                                                            ? P.orbsSubHeaderText
                                                                            : (
                                                                                    null == z
                                                                                        ? void 0
                                                                                        : z.showDarkBannerText
                                                                                )
                                                                              ? P.subHeaderTextDark
                                                                              : P.subHeaderText,
                                                                    style:
                                                                        null != V.bannerTextColor
                                                                            ? { color: V.bannerTextColor }
                                                                            : void 0,
                                                                    children: V.summary,
                                                                }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                      !n &&
                                          (0, r.jsx)("div", {
                                              className: P.heroHeaderButtonContainer,
                                              children: (0, r.jsx)(d.zxk, {
                                                  variant: "overlay-primary",
                                                  onClick: () => {
                                                      F === I.AW.ORBS
                                                          ? ((0, f.Y)({
                                                                pageType: B.ZY5.SHOP_ORBS_TAB,
                                                                sectionType: B.jXE.ORBS_SHOP_HERO_BLOCK,
                                                                ctaObject: B.qAy.CTA_TO_QUEST_HOME,
                                                            }),
                                                            (0, p.navigateToQuestHome)({
                                                                fromContent: o.j.ORBS_SHOP_HERO_CTA,
                                                            }))
                                                          : (a(
                                                                "shop latest category hero",
                                                                ea && V.categorySkuId !== i.T.ORB
                                                                    ? void 0
                                                                    : V.categorySkuId,
                                                            ),
                                                            _.default.track(B.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                                collectibles_shop_session_id:
                                                                    null == U ? void 0 : U.sessionId,
                                                                sku_id: V.categorySkuId,
                                                                page_type: F,
                                                                page_section: null == U ? void 0 : U.pageSection,
                                                                page_category: null == U ? void 0 : U.pageCategory,
                                                                cta_name: "shop latest category hero button",
                                                            }));
                                                  },
                                                  text: el,
                                              }),
                                          }),
                                  ],
                              }),
                              (0, r.jsx)("div", {
                                  className: s()(P.row, P.feed, { [P.feedSingleRow]: F !== I.AW.ORBS }),
                                  children: n
                                      ? (0, r.jsx)(r.Fragment, {
                                            children: [void 0, void 0, void 0, void 0].map((e, t) =>
                                                (0, r.jsx)(x.K, {}, t),
                                            ),
                                        })
                                      : (0, r.jsx)(r.Fragment, {
                                            children: er.map((e, t) => {
                                                let n = b.Z.getCategoryForProduct(e.skuId);
                                                return null == e || null == n
                                                    ? null
                                                    : (0, r.jsx)(
                                                          h.k0,
                                                          {
                                                              newValue: {
                                                                  tilePosition: t,
                                                                  pageSection: "top 4",
                                                                  categoryPosition: 0,
                                                              },
                                                              children: (0, r.jsx)(
                                                                  y.Z,
                                                                  {
                                                                      product: e,
                                                                      category: n,
                                                                      user: H,
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
