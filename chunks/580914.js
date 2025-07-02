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
    S = n(884697),
    x = n(26931),
    E = n(370039),
    j = n(937510),
    y = n(823941),
    T = n(38900),
    P = n(709999),
    k = n(794324),
    I = n(619899),
    L = n(215023),
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
    R = (e) => {
        var t, n, r, l, i, a;
        return null == e
            ? A
            : {
                  rankedSkuIds: null != (r = e.heroRanking) ? r : [],
                  name: e.name,
                  unpublishedAt: e.unpublishedAt,
                  logoUrl: (0, S.uV)(null != (i = null != (l = e.heroLogo) ? l : e.logo) ? i : '', { size: y.n }),
                  categorySkuId: e.skuId,
                  bannerAsset: e.heroBannerAsset,
                  fallbackBannerUrl: (0, S.uV)(null != (a = e.heroBanner) ? a : '', {
                      size: L.pv,
                      format: 'jpg'
                  }),
                  summary: e.summary,
                  type: s.z.HERO,
                  categoryStoreListingId: e.storeListingId,
                  responsive: null == (t = e.heroBannerConfig) ? void 0 : t.responsive,
                  backgroundStyle: null == (n = e.heroBannerConfig) ? void 0 : n.backgroundStyle
              };
    },
    Z = (e) => {
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
        let { isLoading: s, handleTransition: S, category: y, heroBlock: H, tab: M } = e,
            D = (0, c.e7)([d.Z], () => d.Z.useReducedMotion),
            F = (0, c.e7)([_.Z], () => _.Z.isFocused()),
            W = (0, c.e7)([m.default], () => m.default.getCurrentUser()),
            V = (0, x.u)(),
            U = (0, v.sp)(),
            { showBetaTag: G } = b.Z.useExperiment({ location: 'collectible_hero_block' }),
            z = l.useMemo(() => (null != H ? H : R(y)), [H, y]),
            { isPreviewingStaticBanner: Y, bannerOverrides: q, bannerStyleOverrides: K, heroLogo: X, heroBannerStatic: $, heroBannerAnimated: Q } = (0, k.hr)(z),
            J = null == q ? void 0 : q.heroBanner,
            ee = null != (n = null != (t = null == K ? void 0 : K.responsive) ? t : z.responsive) && n,
            et = null != (i = null == K ? void 0 : K.backgroundStyle) ? i : z.backgroundStyle,
            en = l.useMemo(() => V(z.rankedSkuIds), [s, V, z.rankedSkuIds]),
            er = (0, E.a)()(en),
            el = (0, j.l)(er).slice(0, 4),
            ei = (0, I.St)(el),
            ea = M === L.AW.ORBS ? N.intl.string(N.t['1CdL8f']) : N.intl.formatToPlainString(N.t.wvKYCg, { category_name: z.name });
        return null != W && (s || z !== A)
            ? (0, r.jsxs)('div', {
                  className: a()(w.heroBlock, { [w.responsiveHero]: ee }),
                  children: [
                      (0, r.jsxs)('div', {
                          className: w.banner,
                          style: null != et ? { background: et } : void 0,
                          children: [
                              null == Q || D || !F || Y
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
                                  : (0, r.jsx)(Z, {
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
                                                    null != z.unpublishedAt &&
                                                        (0, r.jsx)(u.IGR, {
                                                            disableColor: !0,
                                                            text: N.intl.string(N.t['h/uBCQ']),
                                                            className: w.limitedTimeBadge
                                                        }),
                                                    (0, r.jsxs)('div', {
                                                        className: w.heroLogoNameContainer,
                                                        children: [
                                                            null != z.logoUrl &&
                                                                (0, r.jsx)('img', {
                                                                    className: w.heroHeaderLogo,
                                                                    src: X,
                                                                    alt: z.name
                                                                }),
                                                            null != z.title &&
                                                                (0, r.jsxs)(u.X6q, {
                                                                    variant: 'heading-xxl/bold',
                                                                    className: w.title,
                                                                    color: 'header-primary',
                                                                    children: [z.title, M === L.AW.ORBS && G && (0, r.jsx)(g.Z, {})]
                                                                }),
                                                            (0, r.jsx)(u.Text, {
                                                                variant: M === L.AW.ORBS ? 'text-lg/medium' : 'text-md/normal',
                                                                className: M === L.AW.ORBS ? w.orbsSubHeaderText : (null == q ? void 0 : q.showDarkBannerText) ? w.subHeaderTextDark : w.subHeaderText,
                                                                style: null != z.bannerTextColor ? { color: z.bannerTextColor } : void 0,
                                                                children: z.summary
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
                                                      M === L.AW.ORBS
                                                          ? ((0, h.Y)({
                                                                pageType: B.ZY5.SHOP_ORBS_TAB,
                                                                sectionType: B.jXE.ORBS_SHOP_HERO_BLOCK,
                                                                ctaObject: B.qAy.CTA_TO_QUEST_HOME
                                                            }),
                                                            (0, f.navigateToQuestHome)({ fromContent: o.j.ORBS_SHOP_HERO_CTA }))
                                                          : (S('shop latest category hero', z.categorySkuId),
                                                            C.default.track(B.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                                collectibles_shop_session_id: null == U ? void 0 : U.sessionId,
                                                                sku_id: z.categorySkuId,
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
                                  className: a()(w.row, w.feed, { [w.feedSingleRow]: M !== L.AW.ORBS }),
                                  children: s
                                      ? (0, r.jsx)(r.Fragment, {
                                            children: [void 0, void 0, void 0, void 0].map((e, t) => (0, r.jsx)(T.K, {}, t))
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
                                                                  P.Z,
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
