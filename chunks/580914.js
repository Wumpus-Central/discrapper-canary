n.d(t, { Z: () => w }), n(388685);
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
    C = n(597688),
    b = n(884697),
    E = n(870289),
    S = n(370039),
    O = n(937510),
    v = n(823941),
    x = n(38900),
    y = n(709999),
    T = n(794324),
    L = n(934760),
    j = n(619899),
    k = n(642909),
    I = n(859788),
    N = n(215023),
    B = n(981631),
    P = n(388032),
    A = n(310582);
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
            className: s()(A.heroBannerSheenContainer, { [A.responsive]: t }),
            children: [
                (0, r.jsx)("div", {
                    id: "hero-block-left-shadow",
                    className: s()(A.bannerShadow, A.left, { [A.darker]: null == n ? void 0 : n.darker }),
                    style:
                        (null == n ? void 0 : n.gradientLeft) != null
                            ? { background: null == n ? void 0 : n.gradientLeft }
                            : void 0,
                }),
                (0, r.jsx)("div", {
                    id: "hero-block-right-shadow",
                    className: s()(A.bannerShadow, A.right, { [A.darker]: null == n ? void 0 : n.darker }),
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
        let { isLoading: n, handleTransition: a, category: w, heroBlock: F, tab: D, onVisibilityChange: M } = e,
            H = (0, g.O)(
                (e) => {
                    null == M || M(e);
                },
                0.1,
                null != M,
            ),
            W = (0, u.e7)([m.default], () => m.default.getCurrentUser()),
            U = (0, L.Z)(),
            V = (0, h.sp)(),
            z = l.useMemo(() => {
                var e, t;
                return null != F
                    ? F
                    : null == w
                      ? R
                      : {
                            rankedSkuIds: null != (e = w.heroRanking) ? e : [],
                            name: w.name,
                            unpublishedAt: w.unpublishedAt,
                            logoUrl: (0, b.uV)(null != (t = w.heroLogo) ? t : w.logo, { size: v.n }),
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
            }, [F, w]),
            {
                bannerOverrides: G,
                bannerStyleOverrides: q,
                logoStyleOverrides: K,
                heroLogo: Y,
                heroBannerStatic: X,
                heroBannerAnimated: Q,
            } = (0, T.hr)(z),
            J = null == G ? void 0 : G.heroBanner,
            $ = null != (t = null == q ? void 0 : q.responsive) && t,
            ee = null == q ? void 0 : q.backgroundStyle,
            et = l.useMemo(() => U(z.rankedSkuIds), [n, U, z.rankedSkuIds]),
            en = (0, S.a)()(et),
            er = (0, O.l)(en).slice(0, 4),
            el = (0, j.St)(er),
            ea =
                D === N.AW.ORBS
                    ? P.intl.string(P.t["1CdL8f"])
                    : P.intl.formatToPlainString(P.t.wvKYCg, { category_name: z.name }),
            es = (0, E.FF)("CollectiblesContent"),
            ei = (0, k.G)("CollectiblesShopTallCard");
        return null != W && (n || z !== R)
            ? (0, r.jsxs)("div", {
                  ref: H,
                  className: A.heroBlock,
                  children: [
                      (0, r.jsxs)("div", {
                          className: A.banner,
                          style: null != ee ? { background: ee } : void 0,
                          children: [
                              (0, r.jsx)(I.Z, {
                                  bannerStatic: X,
                                  bannerAnimated: Q,
                                  isResponsive: $,
                              }),
                              (null == q ? void 0 : q.hideSideShadow) === !0
                                  ? null
                                  : (0, r.jsx)(Z, {
                                        heroBannerOverrides: J,
                                        isResponsive: $,
                                    }),
                          ],
                      }),
                      (0, r.jsxs)("div", {
                          className: A.heroBlockContent,
                          children: [
                              (0, r.jsxs)("div", {
                                  className: s()(A.heroHeaderContainer, { [A.responsive]: $ }),
                                  children: [
                                      n
                                          ? (0, r.jsx)("div", { className: A.heroHeaderBadgeLogoSummaryContainer })
                                          : (0, r.jsxs)("div", {
                                                className: A.heroHeaderBadgeLogoSummaryContainer,
                                                children: [
                                                    null != z.unpublishedAt &&
                                                        (0, r.jsx)(d.IGR, {
                                                            disableColor: !0,
                                                            text: P.intl.string(P.t["h/uBCQ"]),
                                                            className: A.limitedTimeBadge,
                                                        }),
                                                    (0, r.jsxs)("div", {
                                                        className: A.heroLogoNameContainer,
                                                        children: [
                                                            null != z.logoUrl &&
                                                                (0, r.jsx)("img", {
                                                                    className: A.heroHeaderLogo,
                                                                    src: Y,
                                                                    alt: z.name,
                                                                    style: null == K ? void 0 : K.toDesktopStyles(),
                                                                }),
                                                            null != z.title &&
                                                                (0, r.jsx)(d.X6q, {
                                                                    variant: "heading-xxl/bold",
                                                                    className: A.title,
                                                                    color: "header-primary",
                                                                    children: z.title,
                                                                }),
                                                            "" !== z.summary &&
                                                                (0, r.jsx)(d.Text, {
                                                                    variant:
                                                                        z.categorySkuId === i.T.ORB
                                                                            ? "text-lg/medium"
                                                                            : "text-md/normal",
                                                                    className:
                                                                        z.categorySkuId === i.T.ORB
                                                                            ? A.orbsSubHeaderText
                                                                            : (
                                                                                    null == G
                                                                                        ? void 0
                                                                                        : G.showDarkBannerText
                                                                                )
                                                                              ? A.subHeaderTextDark
                                                                              : A.subHeaderText,
                                                                    style:
                                                                        null != z.bannerTextColor
                                                                            ? { color: z.bannerTextColor }
                                                                            : void 0,
                                                                    children: z.summary,
                                                                }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                      !n &&
                                          (0, r.jsx)("div", {
                                              className: A.heroHeaderButtonContainer,
                                              children: (0, r.jsx)(d.zxk, {
                                                  variant: "overlay-primary",
                                                  onClick: () => {
                                                      D === N.AW.ORBS
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
                                                                es && z.categorySkuId !== i.T.ORB
                                                                    ? void 0
                                                                    : z.categorySkuId,
                                                            ),
                                                            _.default.track(B.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                                collectibles_shop_session_id:
                                                                    null == V ? void 0 : V.sessionId,
                                                                sku_id: z.categorySkuId,
                                                                page_type: D,
                                                                page_section: null == V ? void 0 : V.pageSection,
                                                                page_category: null == V ? void 0 : V.pageCategory,
                                                                cta_name: "shop latest category hero button",
                                                            }));
                                                  },
                                                  text: ea,
                                              }),
                                          }),
                                  ],
                              }),
                              (0, r.jsx)("div", {
                                  className: s()(A.row, A.feed, { [A.feedSingleRow]: D !== N.AW.ORBS }),
                                  children: n
                                      ? (0, r.jsx)(r.Fragment, {
                                            children: [void 0, void 0, void 0, void 0].map((e, t) =>
                                                (0, r.jsx)(x.K, {}, t),
                                            ),
                                        })
                                      : (0, r.jsx)(r.Fragment, {
                                            children: el.map((e, t) => {
                                                let n = C.Z.getCategoryForProduct(e.skuId);
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
                                                                      user: W,
                                                                      tab: D,
                                                                      variantType: ei ? N.Ch.THUMBNAIL : N.Ch.DEFAULT,
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
