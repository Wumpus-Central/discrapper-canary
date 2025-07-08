(n.d(t, { Z: () => F }), n(388685));
var r = n(255367),
    l = n(73800),
    o = n(120356),
    i = n.n(o),
    a = n(636977),
    s = n(685816),
    c = n(442837),
    u = n(481060),
    d = n(607070),
    p = n(70097),
    f = n(688465),
    g = n(341907),
    h = n(507808),
    b = n(794231),
    m = n(594174),
    _ = n(451478),
    C = n(626135),
    O = n(381585),
    E = n(597688),
    v = n(884697),
    S = n(26931),
    x = n(370039),
    y = n(937510),
    T = n(823941),
    j = n(38900),
    P = n(709999),
    L = n(794324),
    I = n(619899),
    k = n(215023),
    N = n(981631),
    B = n(388032),
    A = n(806734);
let R = {
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
    w = (e) => {
        var t, n, r, l, o, i;
        return null == e
            ? R
            : {
                  rankedSkuIds: null != (r = e.heroRanking) ? r : [],
                  name: e.name,
                  unpublishedAt: e.unpublishedAt,
                  logoUrl: (0, v.uV)(null != (o = null != (l = e.heroLogo) ? l : e.logo) ? o : '', { size: T.n }),
                  categorySkuId: e.skuId,
                  bannerAsset: e.heroBannerAsset,
                  fallbackBannerUrl: (0, v.uV)(null != (i = e.heroBanner) ? i : '', {
                      size: k.pv,
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
            className: i()(A.heroBannerSheenContainer, { [A.responsive]: t }),
            children: [
                (0, r.jsx)('div', {
                    id: 'hero-block-left-shadow',
                    className: i()(A.bannerShadow, A.left, { [A.darker]: null == n ? void 0 : n.darker }),
                    style: (null == n ? void 0 : n.gradientLeft) != null ? { background: null == n ? void 0 : n.gradientLeft } : void 0
                }),
                (0, r.jsx)('div', {
                    id: 'hero-block-right-shadow',
                    className: i()(A.bannerShadow, A.right, { [A.darker]: null == n ? void 0 : n.darker }),
                    style: (null == n ? void 0 : n.gradientRight) != null ? { background: null == n ? void 0 : n.gradientRight } : void 0
                })
            ]
        });
    },
    F = (e) => {
        var t, n, o;
        let { isLoading: s, handleTransition: v, category: T, heroBlock: F, tab: D } = e,
            M = (0, c.e7)([d.Z], () => d.Z.useReducedMotion),
            H = (0, c.e7)([_.Z], () => _.Z.isFocused()),
            W = (0, c.e7)([m.default], () => m.default.getCurrentUser()),
            V = (0, S.u)(),
            U = (0, O.sp)(),
            { showBetaTag: G } = b.Z.useExperiment({ location: 'collectible_hero_block' }),
            z = l.useMemo(() => (null != F ? F : w(T)), [F, T]),
            { isPreviewingStaticBanner: Y, bannerOverrides: q, bannerStyleOverrides: K, heroLogo: Q, heroBannerStatic: X, heroBannerAnimated: J } = (0, L.hr)(z),
            $ = null == q ? void 0 : q.heroBanner,
            ee = null != (n = null != (t = null == K ? void 0 : K.responsive) ? t : z.responsive) && n,
            et = null != (o = null == K ? void 0 : K.backgroundStyle) ? o : z.backgroundStyle,
            en = l.useMemo(() => V(z.rankedSkuIds), [s, V, z.rankedSkuIds]),
            er = (0, x.a)()(en),
            el = (0, y.l)(er).slice(0, 4),
            eo = (0, I.St)(el),
            ei = D === k.AW.ORBS ? B.intl.string(B.t['1CdL8f']) : B.intl.formatToPlainString(B.t.wvKYCg, { category_name: z.name });
        return null != W && (s || z !== R)
            ? (0, r.jsxs)('div', {
                  className: i()(A.heroBlock, { [A.responsiveHero]: ee }),
                  children: [
                      (0, r.jsxs)('div', {
                          className: A.banner,
                          style: null != et ? { background: et } : void 0,
                          children: [
                              null == J || M || !H || Y
                                  ? (0, r.jsx)('div', {
                                        className: i()(A.bannerAsset, A.bannerImage),
                                        style: { backgroundImage: 'url('.concat(X, ')') }
                                    })
                                  : (0, r.jsx)(p.Z, {
                                        className: i()(A.bannerAsset, A.bannerVideoBackground),
                                        src: J,
                                        autoPlay: !0,
                                        loop: !0
                                    }),
                              (null == K ? void 0 : K.hideSideShadow) === !0
                                  ? null
                                  : (0, r.jsx)(Z, {
                                        heroBannerOverrides: $,
                                        isResponsive: ee
                                    })
                          ]
                      }),
                      (0, r.jsxs)('div', {
                          className: A.heroBlockContent,
                          children: [
                              (0, r.jsxs)('div', {
                                  className: A.heroHeaderContainer,
                                  children: [
                                      s
                                          ? (0, r.jsx)('div', { className: A.heroHeaderBadgeLogoSummaryContainer })
                                          : (0, r.jsxs)('div', {
                                                className: A.heroHeaderBadgeLogoSummaryContainer,
                                                children: [
                                                    null != z.unpublishedAt &&
                                                        (0, r.jsx)(u.IGR, {
                                                            disableColor: !0,
                                                            text: B.intl.string(B.t['h/uBCQ']),
                                                            className: A.limitedTimeBadge
                                                        }),
                                                    (0, r.jsxs)('div', {
                                                        className: A.heroLogoNameContainer,
                                                        children: [
                                                            null != z.logoUrl &&
                                                                (0, r.jsx)('img', {
                                                                    className: A.heroHeaderLogo,
                                                                    src: Q,
                                                                    alt: z.name
                                                                }),
                                                            null != z.title &&
                                                                (0, r.jsxs)(u.X6q, {
                                                                    variant: 'heading-xxl/bold',
                                                                    className: A.title,
                                                                    color: 'header-primary',
                                                                    children: [z.title, D === k.AW.ORBS && G && (0, r.jsx)(f.Z, {})]
                                                                }),
                                                            (0, r.jsx)(u.Text, {
                                                                variant: D === k.AW.ORBS ? 'text-lg/medium' : 'text-md/normal',
                                                                className: D === k.AW.ORBS ? A.orbsSubHeaderText : (null == q ? void 0 : q.showDarkBannerText) ? A.subHeaderTextDark : A.subHeaderText,
                                                                style: null != z.bannerTextColor ? { color: z.bannerTextColor } : void 0,
                                                                children: z.summary
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                      !s &&
                                          (0, r.jsx)('div', {
                                              className: A.heroHeaderButtonContainer,
                                              children: (0, r.jsx)(u.zxk, {
                                                  className: A.heroHeaderButton,
                                                  color: u.Ttl.WHITE,
                                                  onClick: () => {
                                                      D === k.AW.ORBS
                                                          ? ((0, h.Y)({
                                                                pageType: N.ZY5.SHOP_ORBS_TAB,
                                                                sectionType: N.jXE.ORBS_SHOP_HERO_BLOCK,
                                                                ctaObject: N.qAy.CTA_TO_QUEST_HOME
                                                            }),
                                                            (0, g.navigateToQuestHome)({ fromContent: a.j.ORBS_SHOP_HERO_CTA }))
                                                          : (v('shop latest category hero', z.categorySkuId),
                                                            C.default.track(N.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                                collectibles_shop_session_id: null == U ? void 0 : U.sessionId,
                                                                sku_id: z.categorySkuId,
                                                                page_type: D,
                                                                page_section: null == U ? void 0 : U.pageSection,
                                                                page_category: null == U ? void 0 : U.pageCategory,
                                                                cta_name: 'shop latest category hero button'
                                                            }));
                                                  },
                                                  children: ei
                                              })
                                          })
                                  ]
                              }),
                              (0, r.jsx)('div', {
                                  className: i()(A.row, A.feed, { [A.feedSingleRow]: D !== k.AW.ORBS }),
                                  children: s
                                      ? (0, r.jsx)(r.Fragment, {
                                            children: [void 0, void 0, void 0, void 0].map((e, t) => (0, r.jsx)(j.K, {}, t))
                                        })
                                      : (0, r.jsx)(r.Fragment, {
                                            children: eo.map((e, t) => {
                                                let n = E.Z.getCategoryForProduct(e.skuId);
                                                return null == e || null == n
                                                    ? null
                                                    : (0, r.jsx)(
                                                          O.k0,
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
                                                                      tab: D
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
