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
    I = n(709999),
    k = n(794324),
    N = n(619899),
    B = n(215023),
    A = n(981631),
    R = n(388032),
    w = n(806734);
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
    D = (e) => {
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
            { isPreviewingStaticBanner: K, bannerOverrides: X, bannerStyleOverrides: Q, heroLogo: J, heroBannerStatic: $, heroBannerAnimated: ee } = (0, k.hr)(Y),
            et = null == X ? void 0 : X.heroBanner,
            en = null != (n = null != (t = null == Q ? void 0 : Q.responsive) ? t : Y.responsive) && n,
            er = null != (o = null == Q ? void 0 : Q.backgroundStyle) ? o : Y.backgroundStyle,
            el = l.useMemo(() => G(Y.rankedSkuIds), [s, G, Y.rankedSkuIds]),
            eo = (0, j.a)()(el),
            ea = (0, T.l)(eo).slice(0, 4),
            ei = (0, N.St)(ea),
            es = H === B.AW.ORBS ? R.intl.string(R.t['1CdL8f']) : R.intl.formatToPlainString(R.t.wvKYCg, { category_name: Y.name }),
            ec = (0, x.F)('CollectiblesContent');
        return null != U && (s || Y !== Z)
            ? (0, r.jsxs)('div', {
                  className: a()(w.heroBlock, { [w.responsiveHero]: en }),
                  children: [
                      (0, r.jsxs)('div', {
                          className: w.banner,
                          style: null != er ? { background: er } : void 0,
                          children: [
                              null == ee || W || !V || K
                                  ? (0, r.jsx)('div', {
                                        className: a()(w.bannerAsset, w.bannerImage),
                                        style: { backgroundImage: 'url('.concat($, ')') }
                                    })
                                  : (0, r.jsx)(g.Z, {
                                        className: a()(w.bannerAsset, w.bannerVideoBackground),
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
                                                    null != Y.unpublishedAt &&
                                                        (0, r.jsx)(d.IGR, {
                                                            disableColor: !0,
                                                            text: R.intl.string(R.t['h/uBCQ']),
                                                            className: w.limitedTimeBadge
                                                        }),
                                                    (0, r.jsxs)('div', {
                                                        className: w.heroLogoNameContainer,
                                                        children: [
                                                            null != Y.logoUrl &&
                                                                (0, r.jsx)('img', {
                                                                    className: w.heroHeaderLogo,
                                                                    src: J,
                                                                    alt: Y.name
                                                                }),
                                                            null != Y.title &&
                                                                (0, r.jsxs)(d.X6q, {
                                                                    variant: 'heading-xxl/bold',
                                                                    className: w.title,
                                                                    color: 'header-primary',
                                                                    children: [Y.title, H === B.AW.ORBS && q && (0, r.jsx)(f.Z, {})]
                                                                }),
                                                            (0, r.jsx)(d.Text, {
                                                                variant: H === B.AW.ORBS ? 'text-lg/medium' : 'text-md/normal',
                                                                className: H === B.AW.ORBS ? w.orbsSubHeaderText : (null == X ? void 0 : X.showDarkBannerText) ? w.subHeaderTextDark : w.subHeaderText,
                                                                style: null != Y.bannerTextColor ? { color: Y.bannerTextColor } : void 0,
                                                                children: Y.summary
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                      !s &&
                                          (0, r.jsx)('div', {
                                              className: w.heroHeaderButtonContainer,
                                              children: (0, r.jsx)(u.zx, {
                                                  className: w.heroHeaderButton,
                                                  color: u.Tt.WHITE,
                                                  onClick: () => {
                                                      H === B.AW.ORBS
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
                                  className: a()(w.row, w.feed, { [w.feedSingleRow]: H !== B.AW.ORBS }),
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
                                                                  I.Z,
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
