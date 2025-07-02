(n.d(t, { Z: () => H }), n(388685));
var r = n(255367),
    l = n(73800),
    i = n(120356),
    a = n.n(i),
    o = n(636977),
    s = n(685816),
    c = n(442837),
    u = n(481060),
    d = n(607070),
    p = n(70097),
    g = n(688465),
    f = n(341907),
    h = n(507808),
    b = n(794231),
    m = n(594174),
    _ = n(451478),
    C = n(626135),
    v = n(381585),
    O = n(597688),
    x = n(884697),
    S = n(26931),
    E = n(370039),
    j = n(937510),
    y = n(823941),
    P = n(38900),
    k = n(709999),
    T = n(794324),
    L = n(619899),
    I = n(215023),
    B = n(981631),
    N = n(388032),
    w = n(806734);
let A = {
        rankedSkuIds: [],
        name: '',
        unpublishedAt: void 0,
        logoUrl: '',
        categorySkuId: '',
        bannerAsset: void 0,
        fallbackBannerUrl: '',
        summary: '',
        type: s.z.HERO,
        categoryStoreListingId: ''
    },
    Z = (e) => {
        var t, n, r, l, i, a;
        return null == e
            ? A
            : {
                  rankedSkuIds: null != (r = e.heroRanking) ? r : [],
                  name: e.name,
                  unpublishedAt: e.unpublishedAt,
                  logoUrl: (0, x.uV)(null != (i = null != (l = e.heroLogo) ? l : e.logo) ? i : '', { size: y.n }),
                  categorySkuId: e.skuId,
                  bannerAsset: e.heroBannerAsset,
                  fallbackBannerUrl: (0, x.uV)(null != (a = e.heroBanner) ? a : '', {
                      size: I.pv,
                      format: 'jpg'
                  }),
                  summary: e.summary,
                  type: s.z.HERO,
                  categoryStoreListingId: e.storeListingId,
                  responsive: null == (t = e.heroBannerConfig) ? void 0 : t.responsive,
                  backgroundStyle: null == (n = e.heroBannerConfig) ? void 0 : n.backgroundStyle
              };
    },
    R = (e) => {
        let { isResponsive: t, heroBannerOverrides: n } = e;
        return (0, r.jsxs)('div', {
            className: a()(w.heroBannerSheenContainer, { [w.responsive]: t }),
            children: [
                (0, r.jsx)('div', {
                    id: 'hero-block-left-shadow',
                    className: a()(w.bannerShadow, w.left, { [w.darker]: null == n ? void 0 : n.darker }),
                    style: (null == n ? void 0 : n.gradientLeft) != null ? { background: null == n ? void 0 : n.gradientLeft } : void 0
                }),
                (0, r.jsx)('div', {
                    id: 'hero-block-right-shadow',
                    className: a()(w.bannerShadow, w.right, { [w.darker]: null == n ? void 0 : n.darker }),
                    style: (null == n ? void 0 : n.gradientRight) != null ? { background: null == n ? void 0 : n.gradientRight } : void 0
                })
            ]
        });
    },
    H = (e) => {
        var t, n, i;
        let { isLoading: s, handleTransition: x, category: y, heroBlock: H, tab: M } = e,
            D = (0, c.e7)([d.Z], () => d.Z.useReducedMotion),
            F = (0, c.e7)([_.Z], () => _.Z.isFocused()),
            W = (0, c.e7)([m.default], () => m.default.getCurrentUser()),
            V = (0, S.u)(),
            U = (0, v.sp)(),
            { showBetaTag: z } = b.Z.useExperiment({ location: 'collectible_hero_block' }),
            G = l.useMemo(() => (null != H ? H : Z(y)), [H, y]),
            { isPreviewingStaticBanner: q, bannerOverrides: Y, bannerStyleOverrides: K, heroLogo: X, heroBannerStatic: $, heroBannerAnimated: Q } = (0, T.hr)(G),
            J = null == Y ? void 0 : Y.heroBanner,
            ee = null != (n = null != (t = null == K ? void 0 : K.responsive) ? t : G.responsive) && n,
            et = null != (i = null == K ? void 0 : K.backgroundStyle) ? i : G.backgroundStyle,
            en = l.useMemo(() => V(G.rankedSkuIds), [s, V, G.rankedSkuIds]),
            er = (0, E.a)()(en),
            el = (0, j.l)(er).slice(0, 4),
            ei = (0, L.St)(el),
            ea = M === I.AW.ORBS ? N.intl.string(N.t['1CdL8f']) : N.intl.formatToPlainString(N.t.wvKYCg, { category_name: G.name });
        return null != W && (s || G !== A)
            ? (0, r.jsxs)('div', {
                  className: a()(w.heroBlock, { [w.responsiveHero]: ee }),
                  children: [
                      (0, r.jsxs)('div', {
                          className: w.banner,
                          style: null != et ? { background: et } : void 0,
                          children: [
                              null == Q || D || !F || q
                                  ? (0, r.jsx)('div', {
                                        className: a()(w.bannerAsset, w.bannerImage),
                                        style: { backgroundImage: 'url('.concat($, ')') }
                                    })
                                  : (0, r.jsx)(p.Z, {
                                        className: a()(w.bannerAsset, w.bannerVideoBackground),
                                        src: Q,
                                        autoPlay: !0,
                                        loop: !0
                                    }),
                              (null == K ? void 0 : K.hideSideShadow) === !0
                                  ? null
                                  : (0, r.jsx)(R, {
                                        heroBannerOverrides: J,
                                        isResponsive: ee
                                    })
                          ]
                      }),
                      (0, r.jsxs)('div', {
                          className: w.heroBlockContent,
                          children: [
                              (0, r.jsxs)('div', {
                                  className: w.heroHeaderContainer,
                                  children: [
                                      s
                                          ? (0, r.jsx)('div', { className: w.heroHeaderBadgeLogoSummaryContainer })
                                          : (0, r.jsxs)('div', {
                                                className: w.heroHeaderBadgeLogoSummaryContainer,
                                                children: [
                                                    null != G.unpublishedAt &&
                                                        (0, r.jsx)(u.IGR, {
                                                            disableColor: !0,
                                                            text: N.intl.string(N.t['h/uBCQ']),
                                                            className: w.limitedTimeBadge
                                                        }),
                                                    (0, r.jsxs)('div', {
                                                        className: w.heroLogoNameContainer,
                                                        children: [
                                                            null != G.logoUrl &&
                                                                (0, r.jsx)('img', {
                                                                    className: w.heroHeaderLogo,
                                                                    src: X,
                                                                    alt: G.name
                                                                }),
                                                            null != G.title &&
                                                                (0, r.jsxs)(u.X6q, {
                                                                    variant: 'heading-xxl/bold',
                                                                    className: w.title,
                                                                    color: 'header-primary',
                                                                    children: [G.title, M === I.AW.ORBS && z && (0, r.jsx)(g.Z, {})]
                                                                }),
                                                            (0, r.jsx)(u.Text, {
                                                                variant: M === I.AW.ORBS ? 'text-lg/medium' : 'text-md/normal',
                                                                className: M === I.AW.ORBS ? w.orbsSubHeaderText : (null == Y ? void 0 : Y.showDarkBannerText) ? w.subHeaderTextDark : w.subHeaderText,
                                                                style: null != G.bannerTextColor ? { color: G.bannerTextColor } : void 0,
                                                                children: G.summary
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                      !s &&
                                          (0, r.jsx)('div', {
                                              className: w.heroHeaderButtonContainer,
                                              children: (0, r.jsx)(u.zxk, {
                                                  className: w.heroHeaderButton,
                                                  color: u.Ttl.WHITE,
                                                  onClick: () => {
                                                      M === I.AW.ORBS
                                                          ? ((0, h.Y)({
                                                                pageType: B.ZY5.SHOP_ORBS_TAB,
                                                                sectionType: B.jXE.ORBS_SHOP_HERO_BLOCK,
                                                                ctaObject: B.qAy.CTA_TO_QUEST_HOME
                                                            }),
                                                            (0, f.navigateToQuestHome)({ fromContent: o.j.ORBS_SHOP_HERO_CTA }))
                                                          : (x('shop latest category hero', G.categorySkuId),
                                                            C.default.track(B.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                                collectibles_shop_session_id: null == U ? void 0 : U.sessionId,
                                                                sku_id: G.categorySkuId,
                                                                page_type: M,
                                                                page_section: null == U ? void 0 : U.pageSection,
                                                                page_category: null == U ? void 0 : U.pageCategory,
                                                                cta_name: 'shop latest category hero button'
                                                            }));
                                                  },
                                                  children: ea
                                              })
                                          })
                                  ]
                              }),
                              (0, r.jsx)('div', {
                                  className: a()(w.row, w.feed, { [w.feedSingleRow]: M !== I.AW.ORBS }),
                                  children: s
                                      ? (0, r.jsx)(r.Fragment, {
                                            children: [void 0, void 0, void 0, void 0].map((e, t) => (0, r.jsx)(P.K, {}, t))
                                        })
                                      : (0, r.jsx)(r.Fragment, {
                                            children: ei.map((e, t) => {
                                                let n = O.Z.getCategoryForProduct(e.skuId);
                                                return null == e || null == n
                                                    ? null
                                                    : (0, r.jsx)(
                                                          v.k0,
                                                          {
                                                              newValue: {
                                                                  tilePosition: t,
                                                                  pageSection: 'top 4',
                                                                  categoryPosition: 0
                                                              },
                                                              children: (0, r.jsx)(
                                                                  k.Z,
                                                                  {
                                                                      product: e,
                                                                      category: n,
                                                                      user: W,
                                                                      tab: M
                                                                  },
                                                                  e.skuId
                                                              )
                                                          },
                                                          null == e ? void 0 : e.skuId
                                                      );
                                            })
                                        })
                              })
                          ]
                      })
                  ]
              })
            : null;
    };
