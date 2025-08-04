(r.d(t, { Z: () => H }), r(388685));
var n = r(255367),
    l = r(73800),
    i = r(120356),
    a = r.n(i),
    o = r(180650),
    s = r(636977),
    c = r(685816),
    u = r(442837),
    d = r(481060),
    p = r(434650),
    f = r(607070),
    g = r(70097),
    h = r(688465),
    b = r(110560),
    m = r(507808),
    _ = r(794231),
    O = r(594174),
    v = r(451478),
    C = r(626135),
    E = r(381585),
    S = r(597688),
    y = r(884697),
    x = r(870289),
    j = r(26931),
    P = r(370039),
    T = r(937510),
    L = r(823941),
    I = r(38900),
    k = r(709999),
    N = r(794324),
    A = r(619899),
    w = r(215023),
    B = r(981631),
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
        type: c.z.HERO,
        categoryStoreListingId: ''
    },
    F = (e) => {
        var t, r, n, l;
        return null == e
            ? D
            : {
                  rankedSkuIds: null != (t = e.heroRanking) ? t : [],
                  name: e.name,
                  unpublishedAt: e.unpublishedAt,
                  logoUrl: (0, y.uV)(null != (n = null != (r = e.heroLogo) ? r : e.logo) ? n : '', { size: L.n }),
                  categorySkuId: e.skuId,
                  bannerAsset: e.heroBannerAsset,
                  fallbackBannerUrl: (0, y.uV)(null != (l = e.heroBanner) ? l : '', {
                      size: w.pv,
                      format: 'jpg'
                  }),
                  summary: e.summary,
                  type: c.z.HERO,
                  categoryStoreListingId: e.storeListingId,
                  bannerConfig: e.heroBannerConfig,
                  logoConfig: e.heroLogoDisplayConfig
              };
    },
    M = (e) => {
        let { isResponsive: t, heroBannerOverrides: r } = e;
        return (0, n.jsxs)('div', {
            className: a()(Z.heroBannerSheenContainer, { [Z.responsive]: t }),
            children: [
                (0, n.jsx)('div', {
                    id: 'hero-block-left-shadow',
                    className: a()(Z.bannerShadow, Z.left, { [Z.darker]: null == r ? void 0 : r.darker }),
                    style: (null == r ? void 0 : r.gradientLeft) != null ? { background: null == r ? void 0 : r.gradientLeft } : void 0
                }),
                (0, n.jsx)('div', {
                    id: 'hero-block-right-shadow',
                    className: a()(Z.bannerShadow, Z.right, { [Z.darker]: null == r ? void 0 : r.darker }),
                    style: (null == r ? void 0 : r.gradientRight) != null ? { background: null == r ? void 0 : r.gradientRight } : void 0
                })
            ]
        });
    },
    H = (e) => {
        var t;
        let { isLoading: r, handleTransition: i, category: c, heroBlock: y, tab: L, onVisibilityChange: H } = e,
            W = (0, u.e7)([f.Z], () => f.Z.useReducedMotion),
            V = (0, u.e7)([v.Z], () => v.Z.isFocused()),
            U = (0, p.O)((e) => {
                null == H || H(e);
            }, 0.1),
            G = (0, u.e7)([O.default], () => O.default.getCurrentUser()),
            z = (0, j.u)(),
            q = (0, E.sp)(),
            { showBetaTag: K } = _.Z.useExperiment({ location: 'collectible_hero_block' }),
            Y = l.useMemo(() => (null != y ? y : F(c)), [y, c]),
            { isPreviewingStaticBanner: X, bannerOverrides: J, bannerStyleOverrides: Q, logoStyleOverrides: $, heroLogo: ee, heroBannerStatic: et, heroBannerAnimated: er } = (0, N.hr)(Y),
            en = null == J ? void 0 : J.heroBanner,
            el = null != (t = null == Q ? void 0 : Q.responsive) && t,
            ei = null == Q ? void 0 : Q.backgroundStyle,
            ea = l.useMemo(() => z(Y.rankedSkuIds), [r, z, Y.rankedSkuIds]),
            eo = (0, P.a)()(ea),
            es = (0, T.l)(eo).slice(0, 4),
            ec = (0, A.St)(es),
            eu = L === w.AW.ORBS ? R.intl.string(R.t['1CdL8f']) : R.intl.formatToPlainString(R.t.wvKYCg, { category_name: Y.name }),
            ed = (0, x.FF)('CollectiblesContent');
        return null != G && (r || Y !== D)
            ? (0, n.jsxs)('div', {
                  ref: U,
                  className: a()(Z.heroBlock, { [Z.responsiveHero]: el }),
                  children: [
                      (0, n.jsxs)('div', {
                          className: Z.banner,
                          style: null != ei ? { background: ei } : void 0,
                          children: [
                              null == er || W || !V || X
                                  ? (0, n.jsx)('div', {
                                        className: a()(Z.bannerAsset, Z.bannerImage),
                                        style: { backgroundImage: 'url('.concat(et, ')') }
                                    })
                                  : (0, n.jsx)(g.Z, {
                                        className: a()(Z.bannerAsset, Z.bannerVideoBackground),
                                        src: er,
                                        autoPlay: !0,
                                        loop: !0
                                    }),
                              (null == Q ? void 0 : Q.hideSideShadow) === !0
                                  ? null
                                  : (0, n.jsx)(M, {
                                        heroBannerOverrides: en,
                                        isResponsive: el
                                    })
                          ]
                      }),
                      (0, n.jsxs)('div', {
                          className: Z.heroBlockContent,
                          children: [
                              (0, n.jsxs)('div', {
                                  className: a()(Z.heroHeaderContainer, { [Z.responsive]: el }),
                                  children: [
                                      r
                                          ? (0, n.jsx)('div', { className: Z.heroHeaderBadgeLogoSummaryContainer })
                                          : (0, n.jsxs)('div', {
                                                className: Z.heroHeaderBadgeLogoSummaryContainer,
                                                children: [
                                                    null != Y.unpublishedAt &&
                                                        (0, n.jsx)(d.IGR, {
                                                            disableColor: !0,
                                                            text: R.intl.string(R.t['h/uBCQ']),
                                                            className: Z.limitedTimeBadge
                                                        }),
                                                    (0, n.jsxs)('div', {
                                                        className: Z.heroLogoNameContainer,
                                                        children: [
                                                            null != Y.logoUrl &&
                                                                (0, n.jsx)('img', {
                                                                    className: Z.heroHeaderLogo,
                                                                    src: ee,
                                                                    alt: Y.name,
                                                                    style: null == $ ? void 0 : $.toDesktopStyles()
                                                                }),
                                                            null != Y.title &&
                                                                (0, n.jsxs)(d.X6q, {
                                                                    variant: 'heading-xxl/bold',
                                                                    className: Z.title,
                                                                    color: 'header-primary',
                                                                    children: [Y.title, L === w.AW.ORBS && K && (0, n.jsx)(h.Z, {})]
                                                                }),
                                                            '' !== Y.summary &&
                                                                (0, n.jsx)(d.Text, {
                                                                    variant: Y.categorySkuId === o.T.ORB ? 'text-lg/medium' : 'text-md/normal',
                                                                    className: Y.categorySkuId === o.T.ORB ? Z.orbsSubHeaderText : (null == J ? void 0 : J.showDarkBannerText) ? Z.subHeaderTextDark : Z.subHeaderText,
                                                                    style: null != Y.bannerTextColor ? { color: Y.bannerTextColor } : void 0,
                                                                    children: Y.summary
                                                                })
                                                        ]
                                                    })
                                                ]
                                            }),
                                      !r &&
                                          (0, n.jsx)('div', {
                                              className: Z.heroHeaderButtonContainer,
                                              children: (0, n.jsx)(d.zxk, {
                                                  variant: 'overlay-primary',
                                                  onClick: () => {
                                                      L === w.AW.ORBS
                                                          ? ((0, m.Y)({
                                                                pageType: B.ZY5.SHOP_ORBS_TAB,
                                                                sectionType: B.jXE.ORBS_SHOP_HERO_BLOCK,
                                                                ctaObject: B.qAy.CTA_TO_QUEST_HOME
                                                            }),
                                                            (0, b.navigateToQuestHome)({ fromContent: s.j.ORBS_SHOP_HERO_CTA }))
                                                          : (i('shop latest category hero', ed && Y.categorySkuId !== o.T.ORB ? void 0 : Y.categorySkuId),
                                                            C.default.track(B.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                                collectibles_shop_session_id: null == q ? void 0 : q.sessionId,
                                                                sku_id: Y.categorySkuId,
                                                                page_type: L,
                                                                page_section: null == q ? void 0 : q.pageSection,
                                                                page_category: null == q ? void 0 : q.pageCategory,
                                                                cta_name: 'shop latest category hero button'
                                                            }));
                                                  },
                                                  text: eu
                                              })
                                          })
                                  ]
                              }),
                              (0, n.jsx)('div', {
                                  className: a()(Z.row, Z.feed, { [Z.feedSingleRow]: L !== w.AW.ORBS }),
                                  children: r
                                      ? (0, n.jsx)(n.Fragment, {
                                            children: [void 0, void 0, void 0, void 0].map((e, t) => (0, n.jsx)(I.K, {}, t))
                                        })
                                      : (0, n.jsx)(n.Fragment, {
                                            children: ec.map((e, t) => {
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
                                                                      user: G,
                                                                      tab: L
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
