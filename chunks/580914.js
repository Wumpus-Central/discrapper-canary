(n.d(t, { Z: () => D }), n(388685));
var r = n(255367),
    l = n(73800),
    o = n(120356),
    i = n.n(o),
    a = n(636977),
    s = n(685816),
    c = n(442837),
    u = n(755721),
    d = n(481060),
    p = n(607070),
    g = n(70097),
    f = n(688465),
    h = n(341907),
    b = n(507808),
    m = n(794231),
    _ = n(594174),
    C = n(451478),
    O = n(626135),
    E = n(381585),
    v = n(597688),
    S = n(884697),
    x = n(26931),
    y = n(370039),
    j = n(937510),
    T = n(823941),
    P = n(38900),
    L = n(709999),
    I = n(794324),
    k = n(619899),
    B = n(215023),
    N = n(981631),
    A = n(388032),
    R = n(806734);
let w = {
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
        var t, n, r, l, o, i;
        return null == e
            ? w
            : {
                  rankedSkuIds: null != (r = e.heroRanking) ? r : [],
                  name: e.name,
                  unpublishedAt: e.unpublishedAt,
                  logoUrl: (0, S.uV)(null != (o = null != (l = e.heroLogo) ? l : e.logo) ? o : '', { size: T.n }),
                  categorySkuId: e.skuId,
                  bannerAsset: e.heroBannerAsset,
                  fallbackBannerUrl: (0, S.uV)(null != (i = e.heroBanner) ? i : '', {
                      size: B.pv,
                      format: 'jpg'
                  }),
                  summary: e.summary,
                  type: s.z.HERO,
                  categoryStoreListingId: e.storeListingId,
                  responsive: null == (t = e.heroBannerConfig) ? void 0 : t.responsive,
                  backgroundStyle: null == (n = e.heroBannerConfig) ? void 0 : n.backgroundStyle
              };
    },
    F = (e) => {
        let { isResponsive: t, heroBannerOverrides: n } = e;
        return (0, r.jsxs)('div', {
            className: i()(R.heroBannerSheenContainer, { [R.responsive]: t }),
            children: [
                (0, r.jsx)('div', {
                    id: 'hero-block-left-shadow',
                    className: i()(R.bannerShadow, R.left, { [R.darker]: null == n ? void 0 : n.darker }),
                    style: (null == n ? void 0 : n.gradientLeft) != null ? { background: null == n ? void 0 : n.gradientLeft } : void 0
                }),
                (0, r.jsx)('div', {
                    id: 'hero-block-right-shadow',
                    className: i()(R.bannerShadow, R.right, { [R.darker]: null == n ? void 0 : n.darker }),
                    style: (null == n ? void 0 : n.gradientRight) != null ? { background: null == n ? void 0 : n.gradientRight } : void 0
                })
            ]
        });
    },
    D = (e) => {
        var t, n, o;
        let { isLoading: s, handleTransition: S, category: T, heroBlock: D, tab: M } = e,
            H = (0, c.e7)([p.Z], () => p.Z.useReducedMotion),
            W = (0, c.e7)([C.Z], () => C.Z.isFocused()),
            V = (0, c.e7)([_.default], () => _.default.getCurrentUser()),
            U = (0, x.u)(),
            G = (0, E.sp)(),
            { showBetaTag: z } = m.Z.useExperiment({ location: 'collectible_hero_block' }),
            Y = l.useMemo(() => (null != D ? D : Z(T)), [D, T]),
            { isPreviewingStaticBanner: q, bannerOverrides: K, bannerStyleOverrides: Q, heroLogo: X, heroBannerStatic: J, heroBannerAnimated: $ } = (0, I.hr)(Y),
            ee = null == K ? void 0 : K.heroBanner,
            et = null != (n = null != (t = null == Q ? void 0 : Q.responsive) ? t : Y.responsive) && n,
            en = null != (o = null == Q ? void 0 : Q.backgroundStyle) ? o : Y.backgroundStyle,
            er = l.useMemo(() => U(Y.rankedSkuIds), [s, U, Y.rankedSkuIds]),
            el = (0, y.a)()(er),
            eo = (0, j.l)(el).slice(0, 4),
            ei = (0, k.St)(eo),
            ea = M === B.AW.ORBS ? A.intl.string(A.t['1CdL8f']) : A.intl.formatToPlainString(A.t.wvKYCg, { category_name: Y.name });
        return null != V && (s || Y !== w)
            ? (0, r.jsxs)('div', {
                  className: i()(R.heroBlock, { [R.responsiveHero]: et }),
                  children: [
                      (0, r.jsxs)('div', {
                          className: R.banner,
                          style: null != en ? { background: en } : void 0,
                          children: [
                              null == $ || H || !W || q
                                  ? (0, r.jsx)('div', {
                                        className: i()(R.bannerAsset, R.bannerImage),
                                        style: { backgroundImage: 'url('.concat(J, ')') }
                                    })
                                  : (0, r.jsx)(g.Z, {
                                        className: i()(R.bannerAsset, R.bannerVideoBackground),
                                        src: $,
                                        autoPlay: !0,
                                        loop: !0
                                    }),
                              (null == Q ? void 0 : Q.hideSideShadow) === !0
                                  ? null
                                  : (0, r.jsx)(F, {
                                        heroBannerOverrides: ee,
                                        isResponsive: et
                                    })
                          ]
                      }),
                      (0, r.jsxs)('div', {
                          className: R.heroBlockContent,
                          children: [
                              (0, r.jsxs)('div', {
                                  className: R.heroHeaderContainer,
                                  children: [
                                      s
                                          ? (0, r.jsx)('div', { className: R.heroHeaderBadgeLogoSummaryContainer })
                                          : (0, r.jsxs)('div', {
                                                className: R.heroHeaderBadgeLogoSummaryContainer,
                                                children: [
                                                    null != Y.unpublishedAt &&
                                                        (0, r.jsx)(d.IGR, {
                                                            disableColor: !0,
                                                            text: A.intl.string(A.t['h/uBCQ']),
                                                            className: R.limitedTimeBadge
                                                        }),
                                                    (0, r.jsxs)('div', {
                                                        className: R.heroLogoNameContainer,
                                                        children: [
                                                            null != Y.logoUrl &&
                                                                (0, r.jsx)('img', {
                                                                    className: R.heroHeaderLogo,
                                                                    src: X,
                                                                    alt: Y.name
                                                                }),
                                                            null != Y.title &&
                                                                (0, r.jsxs)(d.X6q, {
                                                                    variant: 'heading-xxl/bold',
                                                                    className: R.title,
                                                                    color: 'header-primary',
                                                                    children: [Y.title, M === B.AW.ORBS && z && (0, r.jsx)(f.Z, {})]
                                                                }),
                                                            (0, r.jsx)(d.Text, {
                                                                variant: M === B.AW.ORBS ? 'text-lg/medium' : 'text-md/normal',
                                                                className: M === B.AW.ORBS ? R.orbsSubHeaderText : (null == K ? void 0 : K.showDarkBannerText) ? R.subHeaderTextDark : R.subHeaderText,
                                                                style: null != Y.bannerTextColor ? { color: Y.bannerTextColor } : void 0,
                                                                children: Y.summary
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                      !s &&
                                          (0, r.jsx)('div', {
                                              className: R.heroHeaderButtonContainer,
                                              children: (0, r.jsx)(u.zx, {
                                                  className: R.heroHeaderButton,
                                                  color: u.Tt.WHITE,
                                                  onClick: () => {
                                                      M === B.AW.ORBS
                                                          ? ((0, b.Y)({
                                                                pageType: N.ZY5.SHOP_ORBS_TAB,
                                                                sectionType: N.jXE.ORBS_SHOP_HERO_BLOCK,
                                                                ctaObject: N.qAy.CTA_TO_QUEST_HOME
                                                            }),
                                                            (0, h.navigateToQuestHome)({ fromContent: a.j.ORBS_SHOP_HERO_CTA }))
                                                          : (S('shop latest category hero', Y.categorySkuId),
                                                            O.default.track(N.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                                collectibles_shop_session_id: null == G ? void 0 : G.sessionId,
                                                                sku_id: Y.categorySkuId,
                                                                page_type: M,
                                                                page_section: null == G ? void 0 : G.pageSection,
                                                                page_category: null == G ? void 0 : G.pageCategory,
                                                                cta_name: 'shop latest category hero button'
                                                            }));
                                                  },
                                                  children: ea
                                              })
                                          })
                                  ]
                              }),
                              (0, r.jsx)('div', {
                                  className: i()(R.row, R.feed, { [R.feedSingleRow]: M !== B.AW.ORBS }),
                                  children: s
                                      ? (0, r.jsx)(r.Fragment, {
                                            children: [void 0, void 0, void 0, void 0].map((e, t) => (0, r.jsx)(P.K, {}, t))
                                        })
                                      : (0, r.jsx)(r.Fragment, {
                                            children: ei.map((e, t) => {
                                                let n = v.Z.getCategoryForProduct(e.skuId);
                                                return null == e || null == n
                                                    ? null
                                                    : (0, r.jsx)(
                                                          E.k0,
                                                          {
                                                              newValue: {
                                                                  tilePosition: t,
                                                                  pageSection: 'top 4',
                                                                  categoryPosition: 0
                                                              },
                                                              children: (0, r.jsx)(
                                                                  L.Z,
                                                                  {
                                                                      product: e,
                                                                      category: n,
                                                                      user: V,
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
