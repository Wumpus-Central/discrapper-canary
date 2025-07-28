(r.d(t, { Z: () => H }), r(388685));
var n = r(255367),
    l = r(73800),
    i = r(120356),
    o = r.n(i),
    a = r(180650),
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
    k = r(38900),
    I = r(709999),
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
        var t;
        let { isLoading: r, handleTransition: i, category: c, heroBlock: y, tab: L, onVisibilityChange: H } = e,
            W = (0, u.e7)([f.Z], () => f.Z.useReducedMotion),
            V = (0, u.e7)([C.Z], () => C.Z.isFocused()),
            U = (0, p.O)((e) => {
                null == H || H(e);
            }, 0.1),
            z = (0, u.e7)([O.default], () => O.default.getCurrentUser()),
            G = (0, j.u)(),
            q = (0, E.sp)(),
            { showBetaTag: Y } = _.Z.useExperiment({ location: 'collectible_hero_block' }),
            K = l.useMemo(() => (null != y ? y : F(c)), [y, c]),
            { isPreviewingStaticBanner: X, bannerOverrides: J, bannerStyleOverrides: Q, logoStyleOverrides: $, heroLogo: ee, heroBannerStatic: et, heroBannerAnimated: er } = (0, N.hr)(K),
            en = null == J ? void 0 : J.heroBanner,
            el = null != (t = null == Q ? void 0 : Q.responsive) && t,
            ei = null == Q ? void 0 : Q.backgroundStyle,
            eo = l.useMemo(() => G(K.rankedSkuIds), [r, G, K.rankedSkuIds]),
            ea = (0, T.a)()(eo),
            es = (0, P.l)(ea).slice(0, 4),
            ec = (0, A.St)(es),
            eu = L === w.AW.ORBS ? R.intl.string(R.t['1CdL8f']) : R.intl.formatToPlainString(R.t.wvKYCg, { category_name: K.name }),
            ed = (0, x.FF)('CollectiblesContent');
        return null != z && (r || K !== D)
            ? (0, n.jsxs)('div', {
                  ref: U,
                  className: o()(Z.heroBlock, { [Z.responsiveHero]: el }),
                  children: [
                      (0, n.jsxs)('div', {
                          className: Z.banner,
                          style: null != ei ? { background: ei } : void 0,
                          children: [
                              null == er || W || !V || X
                                  ? (0, n.jsx)('div', {
                                        className: o()(Z.bannerAsset, Z.bannerImage),
                                        style: { backgroundImage: 'url('.concat(et, ')') }
                                    })
                                  : (0, n.jsx)(g.Z, {
                                        className: o()(Z.bannerAsset, Z.bannerVideoBackground),
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
                                  className: o()(Z.heroHeaderContainer, { [Z.responsive]: el }),
                                  children: [
                                      r
                                          ? (0, n.jsx)('div', { className: Z.heroHeaderBadgeLogoSummaryContainer })
                                          : (0, n.jsxs)('div', {
                                                className: Z.heroHeaderBadgeLogoSummaryContainer,
                                                children: [
                                                    null != K.unpublishedAt &&
                                                        (0, n.jsx)(d.IGR, {
                                                            disableColor: !0,
                                                            text: R.intl.string(R.t['h/uBCQ']),
                                                            className: Z.limitedTimeBadge
                                                        }),
                                                    (0, n.jsxs)('div', {
                                                        className: Z.heroLogoNameContainer,
                                                        children: [
                                                            null != K.logoUrl &&
                                                                (0, n.jsx)('img', {
                                                                    className: Z.heroHeaderLogo,
                                                                    src: ee,
                                                                    alt: K.name,
                                                                    style: null == $ ? void 0 : $.toDesktopStyles()
                                                                }),
                                                            null != K.title &&
                                                                (0, n.jsxs)(d.X6q, {
                                                                    variant: 'heading-xxl/bold',
                                                                    className: Z.title,
                                                                    color: 'header-primary',
                                                                    children: [K.title, L === w.AW.ORBS && Y && (0, n.jsx)(h.Z, {})]
                                                                }),
                                                            '' !== K.summary &&
                                                                (0, n.jsx)(d.Text, {
                                                                    variant: K.categorySkuId === a.T.ORB ? 'text-lg/medium' : 'text-md/normal',
                                                                    className: K.categorySkuId === a.T.ORB ? Z.orbsSubHeaderText : (null == J ? void 0 : J.showDarkBannerText) ? Z.subHeaderTextDark : Z.subHeaderText,
                                                                    style: null != K.bannerTextColor ? { color: K.bannerTextColor } : void 0,
                                                                    children: K.summary
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
                                                          : (i('shop latest category hero', ed && K.categorySkuId !== a.T.ORB ? void 0 : K.categorySkuId),
                                                            v.default.track(B.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                                collectibles_shop_session_id: null == q ? void 0 : q.sessionId,
                                                                sku_id: K.categorySkuId,
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
                                  className: o()(Z.row, Z.feed, { [Z.feedSingleRow]: L !== w.AW.ORBS }),
                                  children: r
                                      ? (0, n.jsx)(n.Fragment, {
                                            children: [void 0, void 0, void 0, void 0].map((e, t) => (0, n.jsx)(k.K, {}, t))
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
                                                                  I.Z,
                                                                  {
                                                                      product: e,
                                                                      category: r,
                                                                      user: z,
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
