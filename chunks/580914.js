(n.d(t, { Z: () => H }), n(388685));
var r = n(255367),
    l = n(73800),
    o = n(120356),
    i = n.n(o),
    a = n(636977),
    s = n(685816),
    c = n(442837),
    u = n(755721),
    d = n(481060),
    p = n(434650),
    g = n(607070),
    f = n(70097),
    h = n(688465),
    b = n(341907),
    m = n(507808),
    _ = n(794231),
    C = n(594174),
    O = n(451478),
    v = n(626135),
    E = n(381585),
    S = n(597688),
    x = n(884697),
    y = n(870289),
    j = n(26931),
    T = n(370039),
    P = n(937510),
    L = n(823941),
    k = n(38900),
    I = n(709999),
    B = n(794324),
    N = n(619899),
    A = n(215023),
    w = n(981631),
    R = n(388032),
    Z = n(806734);
let D = {
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
    F = (e) => {
        var t, n, r, l, o, i;
        return null == e
            ? D
            : {
                  rankedSkuIds: null != (r = e.heroRanking) ? r : [],
                  name: e.name,
                  unpublishedAt: e.unpublishedAt,
                  logoUrl: (0, x.uV)(null != (o = null != (l = e.heroLogo) ? l : e.logo) ? o : '', { size: L.n }),
                  categorySkuId: e.skuId,
                  bannerAsset: e.heroBannerAsset,
                  fallbackBannerUrl: (0, x.uV)(null != (i = e.heroBanner) ? i : '', {
                      size: A.pv,
                      format: 'jpg'
                  }),
                  summary: e.summary,
                  type: s.z.HERO,
                  categoryStoreListingId: e.storeListingId,
                  responsive: null == (t = e.heroBannerConfig) ? void 0 : t.responsive,
                  backgroundStyle: null == (n = e.heroBannerConfig) ? void 0 : n.backgroundStyle
              };
    },
    M = (e) => {
        let { isResponsive: t, heroBannerOverrides: n } = e;
        return (0, r.jsxs)('div', {
            className: i()(Z.heroBannerSheenContainer, { [Z.responsive]: t }),
            children: [
                (0, r.jsx)('div', {
                    id: 'hero-block-left-shadow',
                    className: i()(Z.bannerShadow, Z.left, { [Z.darker]: null == n ? void 0 : n.darker }),
                    style: (null == n ? void 0 : n.gradientLeft) != null ? { background: null == n ? void 0 : n.gradientLeft } : void 0
                }),
                (0, r.jsx)('div', {
                    id: 'hero-block-right-shadow',
                    className: i()(Z.bannerShadow, Z.right, { [Z.darker]: null == n ? void 0 : n.darker }),
                    style: (null == n ? void 0 : n.gradientRight) != null ? { background: null == n ? void 0 : n.gradientRight } : void 0
                })
            ]
        });
    },
    H = (e) => {
        var t, n, o;
        let { isLoading: s, handleTransition: x, category: L, heroBlock: H, tab: W, onVisibilityChange: V } = e,
            U = (0, c.e7)([g.Z], () => g.Z.useReducedMotion),
            z = (0, c.e7)([O.Z], () => O.Z.isFocused()),
            G = (0, p.O)((e) => {
                null == V || V(e);
            }, 0.1),
            q = (0, c.e7)([C.default], () => C.default.getCurrentUser()),
            Y = (0, j.u)(),
            K = (0, E.sp)(),
            { showBetaTag: X } = _.Z.useExperiment({ location: 'collectible_hero_block' }),
            J = l.useMemo(() => (null != H ? H : F(L)), [H, L]),
            { isPreviewingStaticBanner: Q, bannerOverrides: $, bannerStyleOverrides: ee, heroLogo: et, heroBannerStatic: en, heroBannerAnimated: er } = (0, B.hr)(J),
            el = null == $ ? void 0 : $.heroBanner,
            eo = null != (n = null != (t = null == ee ? void 0 : ee.responsive) ? t : J.responsive) && n,
            ei = null != (o = null == ee ? void 0 : ee.backgroundStyle) ? o : J.backgroundStyle,
            ea = l.useMemo(() => Y(J.rankedSkuIds), [s, Y, J.rankedSkuIds]),
            es = (0, T.a)()(ea),
            ec = (0, P.l)(es).slice(0, 4),
            eu = (0, N.St)(ec),
            ed = W === A.AW.ORBS ? R.intl.string(R.t['1CdL8f']) : R.intl.formatToPlainString(R.t.wvKYCg, { category_name: J.name }),
            ep = (0, y.F)('CollectiblesContent');
        return null != q && (s || J !== D)
            ? (0, r.jsxs)('div', {
                  ref: G,
                  className: i()(Z.heroBlock, { [Z.responsiveHero]: eo }),
                  children: [
                      (0, r.jsxs)('div', {
                          className: Z.banner,
                          style: null != ei ? { background: ei } : void 0,
                          children: [
                              null == er || U || !z || Q
                                  ? (0, r.jsx)('div', {
                                        className: i()(Z.bannerAsset, Z.bannerImage),
                                        style: { backgroundImage: 'url('.concat(en, ')') }
                                    })
                                  : (0, r.jsx)(f.Z, {
                                        className: i()(Z.bannerAsset, Z.bannerVideoBackground),
                                        src: er,
                                        autoPlay: !0,
                                        loop: !0
                                    }),
                              (null == ee ? void 0 : ee.hideSideShadow) === !0
                                  ? null
                                  : (0, r.jsx)(M, {
                                        heroBannerOverrides: el,
                                        isResponsive: eo
                                    })
                          ]
                      }),
                      (0, r.jsxs)('div', {
                          className: Z.heroBlockContent,
                          children: [
                              (0, r.jsxs)('div', {
                                  className: Z.heroHeaderContainer,
                                  children: [
                                      s
                                          ? (0, r.jsx)('div', { className: Z.heroHeaderBadgeLogoSummaryContainer })
                                          : (0, r.jsxs)('div', {
                                                className: Z.heroHeaderBadgeLogoSummaryContainer,
                                                children: [
                                                    null != J.unpublishedAt &&
                                                        (0, r.jsx)(d.IGR, {
                                                            disableColor: !0,
                                                            text: R.intl.string(R.t['h/uBCQ']),
                                                            className: Z.limitedTimeBadge
                                                        }),
                                                    (0, r.jsxs)('div', {
                                                        className: Z.heroLogoNameContainer,
                                                        children: [
                                                            null != J.logoUrl &&
                                                                (0, r.jsx)('img', {
                                                                    className: Z.heroHeaderLogo,
                                                                    src: et,
                                                                    alt: J.name
                                                                }),
                                                            null != J.title &&
                                                                (0, r.jsxs)(d.X6q, {
                                                                    variant: 'heading-xxl/bold',
                                                                    className: Z.title,
                                                                    color: 'header-primary',
                                                                    children: [J.title, W === A.AW.ORBS && X && (0, r.jsx)(h.Z, {})]
                                                                }),
                                                            (0, r.jsx)(d.Text, {
                                                                variant: W === A.AW.ORBS ? 'text-lg/medium' : 'text-md/normal',
                                                                className: W === A.AW.ORBS ? Z.orbsSubHeaderText : (null == $ ? void 0 : $.showDarkBannerText) ? Z.subHeaderTextDark : Z.subHeaderText,
                                                                style: null != J.bannerTextColor ? { color: J.bannerTextColor } : void 0,
                                                                children: J.summary
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                      !s &&
                                          (0, r.jsx)('div', {
                                              className: Z.heroHeaderButtonContainer,
                                              children: (0, r.jsx)(u.zx, {
                                                  className: Z.heroHeaderButton,
                                                  color: u.Tt.WHITE,
                                                  onClick: () => {
                                                      W === A.AW.ORBS
                                                          ? ((0, m.Y)({
                                                                pageType: w.ZY5.SHOP_ORBS_TAB,
                                                                sectionType: w.jXE.ORBS_SHOP_HERO_BLOCK,
                                                                ctaObject: w.qAy.CTA_TO_QUEST_HOME
                                                            }),
                                                            (0, b.navigateToQuestHome)({ fromContent: a.j.ORBS_SHOP_HERO_CTA }))
                                                          : (x('shop latest category hero', ep ? void 0 : J.categorySkuId),
                                                            v.default.track(w.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                                collectibles_shop_session_id: null == K ? void 0 : K.sessionId,
                                                                sku_id: J.categorySkuId,
                                                                page_type: W,
                                                                page_section: null == K ? void 0 : K.pageSection,
                                                                page_category: null == K ? void 0 : K.pageCategory,
                                                                cta_name: 'shop latest category hero button'
                                                            }));
                                                  },
                                                  children: ed
                                              })
                                          })
                                  ]
                              }),
                              (0, r.jsx)('div', {
                                  className: i()(Z.row, Z.feed, { [Z.feedSingleRow]: W !== A.AW.ORBS }),
                                  children: s
                                      ? (0, r.jsx)(r.Fragment, {
                                            children: [void 0, void 0, void 0, void 0].map((e, t) => (0, r.jsx)(k.K, {}, t))
                                        })
                                      : (0, r.jsx)(r.Fragment, {
                                            children: eu.map((e, t) => {
                                                let n = S.Z.getCategoryForProduct(e.skuId);
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
                                                                  I.Z,
                                                                  {
                                                                      product: e,
                                                                      category: n,
                                                                      user: q,
                                                                      tab: W
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
