(n.d(t, { Z: () => M }), n(388685));
var r = n(255367),
    l = n(73800),
    o = n(120356),
    a = n.n(o),
    i = n(636977),
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
    v = n(381585),
    E = n(597688),
    S = n(884697),
    x = n(870289),
    y = n(26931),
    j = n(370039),
    T = n(937510),
    P = n(823941),
    L = n(38900),
    k = n(709999),
    I = n(794324),
    B = n(619899),
    N = n(215023),
    A = n(981631),
    w = n(388032),
    R = n(806734);
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
    F = (e) => {
        var t, n, r, l, o, a;
        return null == e
            ? Z
            : {
                  rankedSkuIds: null != (r = e.heroRanking) ? r : [],
                  name: e.name,
                  unpublishedAt: e.unpublishedAt,
                  logoUrl: (0, S.uV)(null != (o = null != (l = e.heroLogo) ? l : e.logo) ? o : '', { size: P.n }),
                  categorySkuId: e.skuId,
                  bannerAsset: e.heroBannerAsset,
                  fallbackBannerUrl: (0, S.uV)(null != (a = e.heroBanner) ? a : '', {
                      size: N.pv,
                      format: 'jpg'
                  }),
                  summary: e.summary,
                  type: s.z.HERO,
                  categoryStoreListingId: e.storeListingId,
                  responsive: null == (t = e.heroBannerConfig) ? void 0 : t.responsive,
                  backgroundStyle: null == (n = e.heroBannerConfig) ? void 0 : n.backgroundStyle
              };
    },
    D = (e) => {
        let { isResponsive: t, heroBannerOverrides: n } = e;
        return (0, r.jsxs)('div', {
            className: a()(R.heroBannerSheenContainer, { [R.responsive]: t }),
            children: [
                (0, r.jsx)('div', {
                    id: 'hero-block-left-shadow',
                    className: a()(R.bannerShadow, R.left, { [R.darker]: null == n ? void 0 : n.darker }),
                    style: (null == n ? void 0 : n.gradientLeft) != null ? { background: null == n ? void 0 : n.gradientLeft } : void 0
                }),
                (0, r.jsx)('div', {
                    id: 'hero-block-right-shadow',
                    className: a()(R.bannerShadow, R.right, { [R.darker]: null == n ? void 0 : n.darker }),
                    style: (null == n ? void 0 : n.gradientRight) != null ? { background: null == n ? void 0 : n.gradientRight } : void 0
                })
            ]
        });
    },
    M = (e) => {
        var t, n, o;
        let { isLoading: s, handleTransition: S, category: P, heroBlock: M, tab: H } = e,
            W = (0, c.e7)([p.Z], () => p.Z.useReducedMotion),
            V = (0, c.e7)([C.Z], () => C.Z.isFocused()),
            U = (0, c.e7)([_.default], () => _.default.getCurrentUser()),
            G = (0, y.u)(),
            z = (0, v.sp)(),
            { showBetaTag: q } = m.Z.useExperiment({ location: 'collectible_hero_block' }),
            Y = l.useMemo(() => (null != M ? M : F(P)), [M, P]),
            { isPreviewingStaticBanner: K, bannerOverrides: X, bannerStyleOverrides: Q, heroLogo: J, heroBannerStatic: $, heroBannerAnimated: ee } = (0, I.hr)(Y),
            et = null == X ? void 0 : X.heroBanner,
            en = null != (n = null != (t = null == Q ? void 0 : Q.responsive) ? t : Y.responsive) && n,
            er = null != (o = null == Q ? void 0 : Q.backgroundStyle) ? o : Y.backgroundStyle,
            el = l.useMemo(() => G(Y.rankedSkuIds), [s, G, Y.rankedSkuIds]),
            eo = (0, j.a)()(el),
            ea = (0, T.l)(eo).slice(0, 4),
            ei = (0, B.St)(ea),
            es = H === N.AW.ORBS ? w.intl.string(w.t['1CdL8f']) : w.intl.formatToPlainString(w.t.wvKYCg, { category_name: Y.name }),
            ec = (0, x.F)('CollectiblesContent');
        return null != U && (s || Y !== Z)
            ? (0, r.jsxs)('div', {
                  className: a()(R.heroBlock, { [R.responsiveHero]: en }),
                  children: [
                      (0, r.jsxs)('div', {
                          className: R.banner,
                          style: null != er ? { background: er } : void 0,
                          children: [
                              null == ee || W || !V || K
                                  ? (0, r.jsx)('div', {
                                        className: a()(R.bannerAsset, R.bannerImage),
                                        style: { backgroundImage: 'url('.concat($, ')') }
                                    })
                                  : (0, r.jsx)(g.Z, {
                                        className: a()(R.bannerAsset, R.bannerVideoBackground),
                                        src: ee,
                                        autoPlay: !0,
                                        loop: !0
                                    }),
                              (null == Q ? void 0 : Q.hideSideShadow) === !0
                                  ? null
                                  : (0, r.jsx)(D, {
                                        heroBannerOverrides: et,
                                        isResponsive: en
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
                                                            text: w.intl.string(w.t['h/uBCQ']),
                                                            className: R.limitedTimeBadge
                                                        }),
                                                    (0, r.jsxs)('div', {
                                                        className: R.heroLogoNameContainer,
                                                        children: [
                                                            null != Y.logoUrl &&
                                                                (0, r.jsx)('img', {
                                                                    className: R.heroHeaderLogo,
                                                                    src: J,
                                                                    alt: Y.name
                                                                }),
                                                            null != Y.title &&
                                                                (0, r.jsxs)(d.X6q, {
                                                                    variant: 'heading-xxl/bold',
                                                                    className: R.title,
                                                                    color: 'header-primary',
                                                                    children: [Y.title, H === N.AW.ORBS && q && (0, r.jsx)(f.Z, {})]
                                                                }),
                                                            (0, r.jsx)(d.Text, {
                                                                variant: H === N.AW.ORBS ? 'text-lg/medium' : 'text-md/normal',
                                                                className: H === N.AW.ORBS ? R.orbsSubHeaderText : (null == X ? void 0 : X.showDarkBannerText) ? R.subHeaderTextDark : R.subHeaderText,
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
                                                      H === N.AW.ORBS
                                                          ? ((0, b.Y)({
                                                                pageType: A.ZY5.SHOP_ORBS_TAB,
                                                                sectionType: A.jXE.ORBS_SHOP_HERO_BLOCK,
                                                                ctaObject: A.qAy.CTA_TO_QUEST_HOME
                                                            }),
                                                            (0, h.navigateToQuestHome)({ fromContent: i.j.ORBS_SHOP_HERO_CTA }))
                                                          : (S('shop latest category hero', ec ? void 0 : Y.categorySkuId),
                                                            O.default.track(A.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                                collectibles_shop_session_id: null == z ? void 0 : z.sessionId,
                                                                sku_id: Y.categorySkuId,
                                                                page_type: H,
                                                                page_section: null == z ? void 0 : z.pageSection,
                                                                page_category: null == z ? void 0 : z.pageCategory,
                                                                cta_name: 'shop latest category hero button'
                                                            }));
                                                  },
                                                  children: es
                                              })
                                          })
                                  ]
                              }),
                              (0, r.jsx)('div', {
                                  className: a()(R.row, R.feed, { [R.feedSingleRow]: H !== N.AW.ORBS }),
                                  children: s
                                      ? (0, r.jsx)(r.Fragment, {
                                            children: [void 0, void 0, void 0, void 0].map((e, t) => (0, r.jsx)(L.K, {}, t))
                                        })
                                      : (0, r.jsx)(r.Fragment, {
                                            children: ei.map((e, t) => {
                                                let n = E.Z.getCategoryForProduct(e.skuId);
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
                                                                      user: U,
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
