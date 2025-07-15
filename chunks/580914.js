(r.d(t, { Z: () => H }), r(388685));
var n = r(255367),
    l = r(73800),
    i = r(120356),
    o = r.n(i),
    a = r(636977),
    s = r(685816),
    c = r(442837),
    u = r(755721),
    d = r(481060),
    p = r(434650),
    f = r(607070),
    g = r(70097),
    h = r(688465),
    b = r(341907),
    m = r(507808),
    _ = r(794231),
    O = r(594174),
    C = r(451478),
    v = r(626135),
    E = r(381585),
    S = r(597688),
    y = r(884697),
    x = r(870289),
    j = r(26931),
    T = r(370039),
    P = r(937510),
    L = r(823941),
    I = r(38900),
    k = r(709999),
    B = r(794324),
    N = r(619899),
    A = r(215023),
    w = r(981631),
    R = r(388032),
    Z = r(806734);
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
        var t, r, n, l, i, o;
        return null == e
            ? D
            : {
                  rankedSkuIds: null != (n = e.heroRanking) ? n : [],
                  name: e.name,
                  unpublishedAt: e.unpublishedAt,
                  logoUrl: (0, y.uV)(null != (i = null != (l = e.heroLogo) ? l : e.logo) ? i : '', { size: L.n }),
                  categorySkuId: e.skuId,
                  bannerAsset: e.heroBannerAsset,
                  fallbackBannerUrl: (0, y.uV)(null != (o = e.heroBanner) ? o : '', {
                      size: A.pv,
                      format: 'jpg'
                  }),
                  summary: e.summary,
                  type: s.z.HERO,
                  categoryStoreListingId: e.storeListingId,
                  responsive: null == (t = e.heroBannerConfig) ? void 0 : t.responsive,
                  backgroundStyle: null == (r = e.heroBannerConfig) ? void 0 : r.backgroundStyle
              };
    },
    M = (e) => {
        let { isResponsive: t, heroBannerOverrides: r } = e;
        return (0, n.jsxs)('div', {
            className: o()(Z.heroBannerSheenContainer, { [Z.responsive]: t }),
            children: [
                (0, n.jsx)('div', {
                    id: 'hero-block-left-shadow',
                    className: o()(Z.bannerShadow, Z.left, { [Z.darker]: null == r ? void 0 : r.darker }),
                    style: (null == r ? void 0 : r.gradientLeft) != null ? { background: null == r ? void 0 : r.gradientLeft } : void 0
                }),
                (0, n.jsx)('div', {
                    id: 'hero-block-right-shadow',
                    className: o()(Z.bannerShadow, Z.right, { [Z.darker]: null == r ? void 0 : r.darker }),
                    style: (null == r ? void 0 : r.gradientRight) != null ? { background: null == r ? void 0 : r.gradientRight } : void 0
                })
            ]
        });
    },
    H = (e) => {
        var t, r, i;
        let { isLoading: s, handleTransition: y, category: L, heroBlock: H, tab: W, onVisibilityChange: V } = e,
            U = (0, c.e7)([f.Z], () => f.Z.useReducedMotion),
            z = (0, c.e7)([C.Z], () => C.Z.isFocused()),
            G = (0, p.O)((e) => {
                null == V || V(e);
            }, 0.1),
            q = (0, c.e7)([O.default], () => O.default.getCurrentUser()),
            Y = (0, j.u)(),
            K = (0, E.sp)(),
            { showBetaTag: X } = _.Z.useExperiment({ location: 'collectible_hero_block' }),
            J = l.useMemo(() => (null != H ? H : F(L)), [H, L]),
            { isPreviewingStaticBanner: Q, bannerOverrides: $, bannerStyleOverrides: ee, heroLogo: et, heroBannerStatic: er, heroBannerAnimated: en } = (0, B.hr)(J),
            el = null == $ ? void 0 : $.heroBanner,
            ei = null != (r = null != (t = null == ee ? void 0 : ee.responsive) ? t : J.responsive) && r,
            eo = null != (i = null == ee ? void 0 : ee.backgroundStyle) ? i : J.backgroundStyle,
            ea = l.useMemo(() => Y(J.rankedSkuIds), [s, Y, J.rankedSkuIds]),
            es = (0, T.a)()(ea),
            ec = (0, P.l)(es).slice(0, 4),
            eu = (0, N.St)(ec),
            ed = W === A.AW.ORBS ? R.intl.string(R.t['1CdL8f']) : R.intl.formatToPlainString(R.t.wvKYCg, { category_name: J.name }),
            ep = (0, x.F)('CollectiblesContent');
        return null != q && (s || J !== D)
            ? (0, n.jsxs)('div', {
                  ref: G,
                  className: o()(Z.heroBlock, { [Z.responsiveHero]: ei }),
                  children: [
                      (0, n.jsxs)('div', {
                          className: Z.banner,
                          style: null != eo ? { background: eo } : void 0,
                          children: [
                              null == en || U || !z || Q
                                  ? (0, n.jsx)('div', {
                                        className: o()(Z.bannerAsset, Z.bannerImage),
                                        style: { backgroundImage: 'url('.concat(er, ')') }
                                    })
                                  : (0, n.jsx)(g.Z, {
                                        className: o()(Z.bannerAsset, Z.bannerVideoBackground),
                                        src: en,
                                        autoPlay: !0,
                                        loop: !0
                                    }),
                              (null == ee ? void 0 : ee.hideSideShadow) === !0
                                  ? null
                                  : (0, n.jsx)(M, {
                                        heroBannerOverrides: el,
                                        isResponsive: ei
                                    })
                          ]
                      }),
                      (0, n.jsxs)('div', {
                          className: Z.heroBlockContent,
                          children: [
                              (0, n.jsxs)('div', {
                                  className: Z.heroHeaderContainer,
                                  children: [
                                      s
                                          ? (0, n.jsx)('div', { className: Z.heroHeaderBadgeLogoSummaryContainer })
                                          : (0, n.jsxs)('div', {
                                                className: Z.heroHeaderBadgeLogoSummaryContainer,
                                                children: [
                                                    null != J.unpublishedAt &&
                                                        (0, n.jsx)(d.IGR, {
                                                            disableColor: !0,
                                                            text: R.intl.string(R.t['h/uBCQ']),
                                                            className: Z.limitedTimeBadge
                                                        }),
                                                    (0, n.jsxs)('div', {
                                                        className: Z.heroLogoNameContainer,
                                                        children: [
                                                            null != J.logoUrl &&
                                                                (0, n.jsx)('img', {
                                                                    className: Z.heroHeaderLogo,
                                                                    src: et,
                                                                    alt: J.name
                                                                }),
                                                            null != J.title &&
                                                                (0, n.jsxs)(d.X6q, {
                                                                    variant: 'heading-xxl/bold',
                                                                    className: Z.title,
                                                                    color: 'header-primary',
                                                                    children: [J.title, W === A.AW.ORBS && X && (0, n.jsx)(h.Z, {})]
                                                                }),
                                                            (0, n.jsx)(d.Text, {
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
                                          (0, n.jsx)('div', {
                                              className: Z.heroHeaderButtonContainer,
                                              children: (0, n.jsx)(u.zx, {
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
                                                          : (y('shop latest category hero', ep ? void 0 : J.categorySkuId),
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
                              (0, n.jsx)('div', {
                                  className: o()(Z.row, Z.feed, { [Z.feedSingleRow]: W !== A.AW.ORBS }),
                                  children: s
                                      ? (0, n.jsx)(n.Fragment, {
                                            children: [void 0, void 0, void 0, void 0].map((e, t) => (0, n.jsx)(I.K, {}, t))
                                        })
                                      : (0, n.jsx)(n.Fragment, {
                                            children: eu.map((e, t) => {
                                                let r = S.Z.getCategoryForProduct(e.skuId);
                                                return null == e || null == r
                                                    ? null
                                                    : (0, n.jsx)(
                                                          E.k0,
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
