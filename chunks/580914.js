(r.d(t, { Z: () => M }), r(388685));
var n = r(255367),
    l = r(73800),
    i = r(120356),
    o = r.n(i),
    a = r(636977),
    s = r(685816),
    c = r(442837),
    u = r(481060),
    d = r(434650),
    p = r(607070),
    f = r(70097),
    g = r(688465),
    h = r(110560),
    b = r(507808),
    m = r(794231),
    _ = r(594174),
    C = r(451478),
    O = r(626135),
    v = r(381585),
    E = r(597688),
    S = r(884697),
    y = r(870289),
    x = r(26931),
    j = r(370039),
    T = r(937510),
    P = r(823941),
    L = r(38900),
    k = r(709999),
    I = r(794324),
    N = r(619899),
    A = r(215023),
    w = r(981631),
    B = r(388032),
    R = r(806734);
let Z = {
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
    D = (e) => {
        var t, r, n, l;
        return null == e
            ? Z
            : {
                  rankedSkuIds: null != (t = e.heroRanking) ? t : [],
                  name: e.name,
                  unpublishedAt: e.unpublishedAt,
                  logoUrl: (0, S.uV)(null != (n = null != (r = e.heroLogo) ? r : e.logo) ? n : '', { size: P.n }),
                  categorySkuId: e.skuId,
                  bannerAsset: e.heroBannerAsset,
                  fallbackBannerUrl: (0, S.uV)(null != (l = e.heroBanner) ? l : '', {
                      size: A.pv,
                      format: 'jpg'
                  }),
                  summary: e.summary,
                  type: s.z.HERO,
                  categoryStoreListingId: e.storeListingId,
                  bannerConfig: e.heroBannerConfig,
                  logoConfig: e.heroLogoDisplayConfig
              };
    },
    F = (e) => {
        let { isResponsive: t, heroBannerOverrides: r } = e;
        return (0, n.jsxs)('div', {
            className: o()(R.heroBannerSheenContainer, { [R.responsive]: t }),
            children: [
                (0, n.jsx)('div', {
                    id: 'hero-block-left-shadow',
                    className: o()(R.bannerShadow, R.left, { [R.darker]: null == r ? void 0 : r.darker }),
                    style: (null == r ? void 0 : r.gradientLeft) != null ? { background: null == r ? void 0 : r.gradientLeft } : void 0
                }),
                (0, n.jsx)('div', {
                    id: 'hero-block-right-shadow',
                    className: o()(R.bannerShadow, R.right, { [R.darker]: null == r ? void 0 : r.darker }),
                    style: (null == r ? void 0 : r.gradientRight) != null ? { background: null == r ? void 0 : r.gradientRight } : void 0
                })
            ]
        });
    },
    M = (e) => {
        var t;
        let { isLoading: r, handleTransition: i, category: s, heroBlock: S, tab: P, onVisibilityChange: M } = e,
            H = (0, c.e7)([p.Z], () => p.Z.useReducedMotion),
            W = (0, c.e7)([C.Z], () => C.Z.isFocused()),
            V = (0, d.O)((e) => {
                null == M || M(e);
            }, 0.1),
            U = (0, c.e7)([_.default], () => _.default.getCurrentUser()),
            z = (0, x.u)(),
            G = (0, v.sp)(),
            { showBetaTag: q } = m.Z.useExperiment({ location: 'collectible_hero_block' }),
            Y = l.useMemo(() => (null != S ? S : D(s)), [S, s]),
            { isPreviewingStaticBanner: K, bannerOverrides: X, bannerStyleOverrides: J, logoStyleOverrides: Q, heroLogo: $, heroBannerStatic: ee, heroBannerAnimated: et } = (0, I.hr)(Y),
            er = null == X ? void 0 : X.heroBanner,
            en = null != (t = null == J ? void 0 : J.responsive) && t,
            el = null == J ? void 0 : J.backgroundStyle,
            ei = l.useMemo(() => z(Y.rankedSkuIds), [r, z, Y.rankedSkuIds]),
            eo = (0, j.a)()(ei),
            ea = (0, T.l)(eo).slice(0, 4),
            es = (0, N.St)(ea),
            ec = P === A.AW.ORBS ? B.intl.string(B.t['1CdL8f']) : B.intl.formatToPlainString(B.t.wvKYCg, { category_name: Y.name }),
            eu = (0, y.FF)('CollectiblesContent');
        return null != U && (r || Y !== Z)
            ? (0, n.jsxs)('div', {
                  ref: V,
                  className: o()(R.heroBlock, { [R.responsiveHero]: en }),
                  children: [
                      (0, n.jsxs)('div', {
                          className: R.banner,
                          style: null != el ? { background: el } : void 0,
                          children: [
                              null == et || H || !W || K
                                  ? (0, n.jsx)('div', {
                                        className: o()(R.bannerAsset, R.bannerImage),
                                        style: { backgroundImage: 'url('.concat(ee, ')') }
                                    })
                                  : (0, n.jsx)(f.Z, {
                                        className: o()(R.bannerAsset, R.bannerVideoBackground),
                                        src: et,
                                        autoPlay: !0,
                                        loop: !0
                                    }),
                              (null == J ? void 0 : J.hideSideShadow) === !0
                                  ? null
                                  : (0, n.jsx)(F, {
                                        heroBannerOverrides: er,
                                        isResponsive: en
                                    })
                          ]
                      }),
                      (0, n.jsxs)('div', {
                          className: R.heroBlockContent,
                          children: [
                              (0, n.jsxs)('div', {
                                  className: o()(R.heroHeaderContainer, { [R.responsive]: en }),
                                  children: [
                                      r
                                          ? (0, n.jsx)('div', { className: R.heroHeaderBadgeLogoSummaryContainer })
                                          : (0, n.jsxs)('div', {
                                                className: R.heroHeaderBadgeLogoSummaryContainer,
                                                children: [
                                                    null != Y.unpublishedAt &&
                                                        (0, n.jsx)(u.IGR, {
                                                            disableColor: !0,
                                                            text: B.intl.string(B.t['h/uBCQ']),
                                                            className: R.limitedTimeBadge
                                                        }),
                                                    (0, n.jsxs)('div', {
                                                        className: R.heroLogoNameContainer,
                                                        children: [
                                                            null != Y.logoUrl &&
                                                                (0, n.jsx)('img', {
                                                                    className: R.heroHeaderLogo,
                                                                    src: $,
                                                                    alt: Y.name,
                                                                    style: null == Q ? void 0 : Q.toDesktopStyles()
                                                                }),
                                                            null != Y.title &&
                                                                (0, n.jsxs)(u.X6q, {
                                                                    variant: 'heading-xxl/bold',
                                                                    className: R.title,
                                                                    color: 'header-primary',
                                                                    children: [Y.title, P === A.AW.ORBS && q && (0, n.jsx)(g.Z, {})]
                                                                }),
                                                            '' !== Y.summary &&
                                                                (0, n.jsx)(u.Text, {
                                                                    variant: P === A.AW.ORBS ? 'text-lg/medium' : 'text-md/normal',
                                                                    className: P === A.AW.ORBS ? R.orbsSubHeaderText : (null == X ? void 0 : X.showDarkBannerText) ? R.subHeaderTextDark : R.subHeaderText,
                                                                    style: null != Y.bannerTextColor ? { color: Y.bannerTextColor } : void 0,
                                                                    children: Y.summary
                                                                })
                                                        ]
                                                    })
                                                ]
                                            }),
                                      !r &&
                                          (0, n.jsx)('div', {
                                              className: R.heroHeaderButtonContainer,
                                              children: (0, n.jsx)(u.zxk, {
                                                  variant: 'overlay-primary',
                                                  onClick: () => {
                                                      P === A.AW.ORBS
                                                          ? ((0, b.Y)({
                                                                pageType: w.ZY5.SHOP_ORBS_TAB,
                                                                sectionType: w.jXE.ORBS_SHOP_HERO_BLOCK,
                                                                ctaObject: w.qAy.CTA_TO_QUEST_HOME
                                                            }),
                                                            (0, h.navigateToQuestHome)({ fromContent: a.j.ORBS_SHOP_HERO_CTA }))
                                                          : (i('shop latest category hero', eu ? void 0 : Y.categorySkuId),
                                                            O.default.track(w.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                                collectibles_shop_session_id: null == G ? void 0 : G.sessionId,
                                                                sku_id: Y.categorySkuId,
                                                                page_type: P,
                                                                page_section: null == G ? void 0 : G.pageSection,
                                                                page_category: null == G ? void 0 : G.pageCategory,
                                                                cta_name: 'shop latest category hero button'
                                                            }));
                                                  },
                                                  text: ec
                                              })
                                          })
                                  ]
                              }),
                              (0, n.jsx)('div', {
                                  className: o()(R.row, R.feed, { [R.feedSingleRow]: P !== A.AW.ORBS }),
                                  children: r
                                      ? (0, n.jsx)(n.Fragment, {
                                            children: [void 0, void 0, void 0, void 0].map((e, t) => (0, n.jsx)(L.K, {}, t))
                                        })
                                      : (0, n.jsx)(n.Fragment, {
                                            children: es.map((e, t) => {
                                                let r = E.Z.getCategoryForProduct(e.skuId);
                                                return null == e || null == r
                                                    ? null
                                                    : (0, n.jsx)(
                                                          v.k0,
                                                          {
                                                              newValue: {
                                                                  tilePosition: t,
                                                                  pageSection: 'top 4',
                                                                  categoryPosition: 0
                                                              },
                                                              children: (0, n.jsx)(
                                                                  k.Z,
                                                                  {
                                                                      product: e,
                                                                      category: r,
                                                                      user: U,
                                                                      tab: P
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
