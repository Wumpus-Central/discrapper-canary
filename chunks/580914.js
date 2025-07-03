(n.d(t, { Z: () => M }), n(388685));
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
    O = n(381585),
    v = n(597688),
    E = n(884697),
    S = n(26931),
    x = n(370039),
    y = n(937510),
    T = n(823941),
    j = n(38900),
    L = n(709999),
    P = n(794324),
    k = n(619899),
    I = n(215023),
    B = n(981631),
    N = n(388032),
    A = n(806734);
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
    R = (e) => {
        var t, n, r, l, i, a;
        return null == e
            ? w
            : {
                  rankedSkuIds: null != (r = e.heroRanking) ? r : [],
                  name: e.name,
                  unpublishedAt: e.unpublishedAt,
                  logoUrl: (0, E.uV)(null != (i = null != (l = e.heroLogo) ? l : e.logo) ? i : '', { size: T.n }),
                  categorySkuId: e.skuId,
                  bannerAsset: e.heroBannerAsset,
                  fallbackBannerUrl: (0, E.uV)(null != (a = e.heroBanner) ? a : '', {
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
    Z = (e) => {
        let { isResponsive: t, heroBannerOverrides: n } = e;
        return (0, r.jsxs)('div', {
            className: a()(A.heroBannerSheenContainer, { [A.responsive]: t }),
            children: [
                (0, r.jsx)('div', {
                    id: 'hero-block-left-shadow',
                    className: a()(A.bannerShadow, A.left, { [A.darker]: null == n ? void 0 : n.darker }),
                    style: (null == n ? void 0 : n.gradientLeft) != null ? { background: null == n ? void 0 : n.gradientLeft } : void 0
                }),
                (0, r.jsx)('div', {
                    id: 'hero-block-right-shadow',
                    className: a()(A.bannerShadow, A.right, { [A.darker]: null == n ? void 0 : n.darker }),
                    style: (null == n ? void 0 : n.gradientRight) != null ? { background: null == n ? void 0 : n.gradientRight } : void 0
                })
            ]
        });
    },
    M = (e) => {
        var t, n, i;
        let { isLoading: s, handleTransition: E, category: T, heroBlock: M, tab: H } = e,
            D = (0, c.e7)([d.Z], () => d.Z.useReducedMotion),
            F = (0, c.e7)([_.Z], () => _.Z.isFocused()),
            W = (0, c.e7)([m.default], () => m.default.getCurrentUser()),
            V = (0, S.u)(),
            U = (0, O.sp)(),
            { showBetaTag: G } = b.Z.useExperiment({ location: 'collectible_hero_block' }),
            z = l.useMemo(() => (null != M ? M : R(T)), [M, T]),
            { isPreviewingStaticBanner: Y, bannerOverrides: K, bannerStyleOverrides: q, heroLogo: X, heroBannerStatic: $, heroBannerAnimated: Q } = (0, P.hr)(z),
            J = null == K ? void 0 : K.heroBanner,
            ee = null != (n = null != (t = null == q ? void 0 : q.responsive) ? t : z.responsive) && n,
            et = null != (i = null == q ? void 0 : q.backgroundStyle) ? i : z.backgroundStyle,
            en = l.useMemo(() => V(z.rankedSkuIds), [s, V, z.rankedSkuIds]),
            er = (0, x.a)()(en),
            el = (0, y.l)(er).slice(0, 4),
            ei = (0, k.St)(el),
            ea = H === I.AW.ORBS ? N.intl.string(N.t['1CdL8f']) : N.intl.formatToPlainString(N.t.wvKYCg, { category_name: z.name });
        return null != W && (s || z !== w)
            ? (0, r.jsxs)('div', {
                  className: a()(A.heroBlock, { [A.responsiveHero]: ee }),
                  children: [
                      (0, r.jsxs)('div', {
                          className: A.banner,
                          style: null != et ? { background: et } : void 0,
                          children: [
                              null == Q || D || !F || Y
                                  ? (0, r.jsx)('div', {
                                        className: a()(A.bannerAsset, A.bannerImage),
                                        style: { backgroundImage: 'url('.concat($, ')') }
                                    })
                                  : (0, r.jsx)(p.Z, {
                                        className: a()(A.bannerAsset, A.bannerVideoBackground),
                                        src: Q,
                                        autoPlay: !0,
                                        loop: !0
                                    }),
                              (null == q ? void 0 : q.hideSideShadow) === !0
                                  ? null
                                  : (0, r.jsx)(Z, {
                                        heroBannerOverrides: J,
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
                                                            text: N.intl.string(N.t['h/uBCQ']),
                                                            className: A.limitedTimeBadge
                                                        }),
                                                    (0, r.jsxs)('div', {
                                                        className: A.heroLogoNameContainer,
                                                        children: [
                                                            null != z.logoUrl &&
                                                                (0, r.jsx)('img', {
                                                                    className: A.heroHeaderLogo,
                                                                    src: X,
                                                                    alt: z.name
                                                                }),
                                                            null != z.title &&
                                                                (0, r.jsxs)(u.X6q, {
                                                                    variant: 'heading-xxl/bold',
                                                                    className: A.title,
                                                                    color: 'header-primary',
                                                                    children: [z.title, H === I.AW.ORBS && G && (0, r.jsx)(g.Z, {})]
                                                                }),
                                                            (0, r.jsx)(u.Text, {
                                                                variant: H === I.AW.ORBS ? 'text-lg/medium' : 'text-md/normal',
                                                                className: H === I.AW.ORBS ? A.orbsSubHeaderText : (null == K ? void 0 : K.showDarkBannerText) ? A.subHeaderTextDark : A.subHeaderText,
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
                                                      H === I.AW.ORBS
                                                          ? ((0, h.Y)({
                                                                pageType: B.ZY5.SHOP_ORBS_TAB,
                                                                sectionType: B.jXE.ORBS_SHOP_HERO_BLOCK,
                                                                ctaObject: B.qAy.CTA_TO_QUEST_HOME
                                                            }),
                                                            (0, f.navigateToQuestHome)({ fromContent: o.j.ORBS_SHOP_HERO_CTA }))
                                                          : (E('shop latest category hero', z.categorySkuId),
                                                            C.default.track(B.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                                collectibles_shop_session_id: null == U ? void 0 : U.sessionId,
                                                                sku_id: z.categorySkuId,
                                                                page_type: H,
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
                                  className: a()(A.row, A.feed, { [A.feedSingleRow]: H !== I.AW.ORBS }),
                                  children: s
                                      ? (0, r.jsx)(r.Fragment, {
                                            children: [void 0, void 0, void 0, void 0].map((e, t) => (0, r.jsx)(j.K, {}, t))
                                        })
                                      : (0, r.jsx)(r.Fragment, {
                                            children: ei.map((e, t) => {
                                                let n = v.Z.getCategoryForProduct(e.skuId);
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
                                                                  L.Z,
                                                                  {
                                                                      product: e,
                                                                      category: n,
                                                                      user: W,
                                                                      tab: H
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
