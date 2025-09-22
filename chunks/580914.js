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
    h = n(594174),
    _ = n(626135),
    C = n(381585),
    m = n(597688),
    b = n(884697),
    E = n(870289),
    S = n(254690),
    O = n(655283),
    v = n(370039),
    x = n(937510),
    T = n(38900),
    y = n(709999),
    L = n(794324),
    j = n(934760),
    k = n(619899),
    I = n(859788),
    B = n(215023),
    N = n(981631),
    A = n(388032),
    P = n(310582);
let R = (0, b.IC)(90),
    Z = {
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
            W = (0, u.e7)([h.default], () => h.default.getCurrentUser()),
            U = (0, j.Z)(),
            V = (0, C.sp)(),
            z = S.Z.useConfig({ location: "HeroBlock" }).showButtonLeftAligned && F !== B.AW.ORBS,
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
                            logoUrl: (0, b.uV)(null != (t = w.heroLogo) ? t : w.logo, { size: R }),
                            categorySkuId: w.skuId,
                            bannerAsset: w.heroBannerAsset,
                            fallbackBannerUrl: (0, b.uV)(w.heroBanner, {
                                size: B.pv,
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
                bannerStyleOverrides: Y,
                logoStyleOverrides: X,
                heroLogo: Q,
                heroBannerStatic: J,
                heroBannerAnimated: $,
            } = (0, L.hr)(K),
            ee = null != (t = null == Y ? void 0 : Y.responsive) && t,
            et = null == Y ? void 0 : Y.backgroundStyle,
            en = null == $ ? void 0 : $.endsWith(".riv"),
            er = (0, u.e7)([m.Z], () => m.Z.products),
            el = l.useMemo(() => (n ? [] : er.size > 0 ? U(K.rankedSkuIds) : []), [n, U, K.rankedSkuIds, er]),
            ea = l.useMemo(
                () =>
                    !n &&
                    0 !== K.rankedSkuIds.length &&
                    !(el.length > 0) &&
                    K.rankedSkuIds.every((e) => {
                        var t;
                        return (null == (t = m.Z.getProduct(e)) ? void 0 : t.variantGroupStoreListingId) != null;
                    }),
                [n, K.rankedSkuIds, el.length],
            ),
            es = (0, v.a)()(el),
            ei = (0, x.l)(es).slice(0, 4),
            eo = (0, k.St)(ei),
            ec =
                F === B.AW.ORBS
                    ? A.intl.string(A.t["1CdL8f"])
                    : G
                      ? q
                          ? A.intl.string(A.t["/QvRam"])
                          : A.intl.string(A.t.xYKa1d)
                      : A.intl.formatToPlainString(A.t.wvKYCg, { category_name: K.name }),
            eu = (0, E.FF)("CollectiblesContent"),
            ed = K.categorySkuId === i.T.ORB,
            eg = () => {
                F === B.AW.ORBS
                    ? ((0, f.Y)({
                          pageType: N.ZY5.SHOP_ORBS_TAB,
                          sectionType: N.jXE.ORBS_SHOP_HERO_BLOCK,
                          ctaObject: N.qAy.CTA_TO_QUEST_HOME,
                      }),
                      (0, p.navigateToQuestHome)({ fromContent: o.j.ORBS_SHOP_HERO_CTA }))
                    : (a("shop latest category hero", !eu || ed ? K.categorySkuId : void 0),
                      _.default.track(N.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
                  className: P.heroBlock,
                  children: [
                      (0, r.jsx)("div", {
                          className: s()(P.banner, { [P.rivBanner]: en }),
                          style: null != et ? { background: et } : void 0,
                          children: (0, r.jsx)(I.Z, {
                              bannerStatic: J,
                              bannerAnimated: $,
                              isResponsive: ee,
                          }),
                      }),
                      (0, r.jsxs)("div", {
                          className: P.heroBlockContent,
                          children: [
                              en
                                  ? (0, r.jsx)("div", {
                                        className: P.rivBannerButtonContainer,
                                        children:
                                            !n &&
                                            (0, r.jsx)(d.zxk, {
                                                variant: "overlay-primary",
                                                onClick: eg,
                                                text: ec,
                                            }),
                                    })
                                  : (0, r.jsxs)("div", {
                                        className: s()(z ? P.heroHeaderContainerStacked : P.heroHeaderContainer, {
                                            [P.responsive]: ee,
                                        }),
                                        children: [
                                            n
                                                ? (0, r.jsx)("div", {
                                                      className: P.heroHeaderBadgeLogoSummaryContainer,
                                                  })
                                                : (0, r.jsxs)("div", {
                                                      className: P.heroHeaderBadgeLogoSummaryContainer,
                                                      children: [
                                                          null != K.unpublishedAt &&
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
                                                                  null != K.logoUrl &&
                                                                      (0, r.jsx)("img", {
                                                                          className: P.heroHeaderLogo,
                                                                          src: Q,
                                                                          alt: K.name,
                                                                          style:
                                                                              null == X ? void 0 : X.toDesktopStyles(),
                                                                      }),
                                                                  null != K.title &&
                                                                      (0, r.jsx)(d.X6q, {
                                                                          variant: "heading-xxl/bold",
                                                                          className: P.title,
                                                                          color: "header-primary",
                                                                          children: K.title,
                                                                      }),
                                                                  "" !== K.summary &&
                                                                      (0, r.jsx)(d.Text, {
                                                                          variant: ed
                                                                              ? "text-lg/medium"
                                                                              : "text-md/normal",
                                                                          className: ed
                                                                              ? P.orbsSubHeaderText
                                                                              : P.subHeaderText,
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
                                                        ? P.heroHeaderButtonContainerStacked
                                                        : P.heroHeaderButtonContainer,
                                                    children: (0, r.jsx)(d.zxk, {
                                                        variant: "overlay-primary",
                                                        onClick: eg,
                                                        text: ec,
                                                    }),
                                                }),
                                        ],
                                    }),
                              (0, r.jsx)("div", {
                                  className: s()(P.row, P.feed, { [P.feedSingleRow]: F !== B.AW.ORBS }),
                                  children:
                                      n || ea
                                          ? (0, r.jsx)(r.Fragment, {
                                                children: [void 0, void 0, void 0, void 0].map((e, t) =>
                                                    (0, r.jsx)(T.K, {}, t),
                                                ),
                                            })
                                          : (0, r.jsx)(r.Fragment, {
                                                children: eo.map((e, t) => {
                                                    let n = m.Z.getCategoryForProduct(e.skuId);
                                                    return null == e || null == n
                                                        ? null
                                                        : (0, r.jsx)(
                                                              C.k0,
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
