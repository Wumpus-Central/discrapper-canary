(n.d(t, { Z: () => R }), n(388685));
var r = n(255367),
    l = n(73800),
    a = n(120356),
    i = n.n(a),
    o = n(636977),
    s = n(685816),
    c = n(442837),
    u = n(481060),
    d = n(607070),
    p = n(70097),
    f = n(688465),
    g = n(341907),
    h = n(507808),
    b = n(594174),
    m = n(451478),
    _ = n(626135),
    C = n(381585),
    v = n(597688),
    O = n(884697),
    S = n(26931),
    x = n(370039),
    E = n(937510),
    y = n(823941),
    j = n(38900),
    P = n(709999),
    k = n(794324),
    T = n(619899),
    L = n(215023),
    I = n(981631),
    B = n(388032),
    N = n(806734);
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
    w = (e) => {
        var t, n, r, l, a, i;
        return null == e
            ? A
            : {
                  rankedSkuIds: null != (r = e.heroRanking) ? r : [],
                  name: e.name,
                  unpublishedAt: e.unpublishedAt,
                  logoUrl: (0, O.uV)(null != (a = null != (l = e.heroLogo) ? l : e.logo) ? a : '', { size: y.n }),
                  categorySkuId: e.skuId,
                  bannerAsset: e.heroBannerAsset,
                  fallbackBannerUrl: (0, O.uV)(null != (i = e.heroBanner) ? i : '', {
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
            className: i()(N.heroBannerSheenContainer, { [N.responsive]: t }),
            children: [
                (0, r.jsx)('div', {
                    id: 'hero-block-left-shadow',
                    className: i()(N.bannerShadow, N.left, { [N.darker]: null == n ? void 0 : n.darker }),
                    style: (null == n ? void 0 : n.gradientLeft) != null ? { background: null == n ? void 0 : n.gradientLeft } : void 0
                }),
                (0, r.jsx)('div', {
                    id: 'hero-block-right-shadow',
                    className: i()(N.bannerShadow, N.right, { [N.darker]: null == n ? void 0 : n.darker }),
                    style: (null == n ? void 0 : n.gradientRight) != null ? { background: null == n ? void 0 : n.gradientRight } : void 0
                })
            ]
        });
    },
    R = (e) => {
        var t, n, a;
        let { isLoading: s, handleTransition: O, category: y, heroBlock: R, tab: H } = e,
            M = (0, c.e7)([d.Z], () => d.Z.useReducedMotion),
            D = (0, c.e7)([m.Z], () => m.Z.isFocused()),
            F = (0, c.e7)([b.default], () => b.default.getCurrentUser()),
            W = (0, S.u)(),
            V = (0, C.sp)(),
            U = l.useMemo(() => (null != R ? R : w(y)), [R, y]),
            { isPreviewingStaticBanner: G, bannerOverrides: z, bannerStyleOverrides: q, heroLogo: Y, heroBannerStatic: K, heroBannerAnimated: $ } = (0, k.hr)(U),
            X = null == z ? void 0 : z.heroBanner,
            J = null != (n = null != (t = null == q ? void 0 : q.responsive) ? t : U.responsive) && n,
            Q = null != (a = null == q ? void 0 : q.backgroundStyle) ? a : U.backgroundStyle,
            ee = l.useMemo(() => W(U.rankedSkuIds), [s, W, U.rankedSkuIds]),
            et = (0, x.a)()(ee),
            en = (0, E.l)(et).slice(0, 4),
            er = (0, T.St)(en),
            el = H === L.AW.ORBS ? B.intl.string(B.t['1CdL8f']) : B.intl.formatToPlainString(B.t.wvKYCg, { category_name: U.name });
        return null != F && (s || U !== A)
            ? (0, r.jsxs)('div', {
                  className: i()(N.heroBlock, { [N.responsiveHero]: J }),
                  children: [
                      (0, r.jsxs)('div', {
                          className: N.banner,
                          style: null != Q ? { background: Q } : void 0,
                          children: [
                              null == $ || M || !D || G
                                  ? (0, r.jsx)('div', {
                                        className: i()(N.bannerAsset, N.bannerImage),
                                        style: { backgroundImage: 'url('.concat(K, ')') }
                                    })
                                  : (0, r.jsx)(p.Z, {
                                        className: i()(N.bannerAsset, N.bannerVideoBackground),
                                        src: $,
                                        autoPlay: !0,
                                        loop: !0
                                    }),
                              (null == q ? void 0 : q.hideSideShadow) === !0
                                  ? null
                                  : (0, r.jsx)(Z, {
                                        heroBannerOverrides: X,
                                        isResponsive: J
                                    })
                          ]
                      }),
                      (0, r.jsxs)('div', {
                          className: N.heroBlockContent,
                          children: [
                              (0, r.jsxs)('div', {
                                  className: N.heroHeaderContainer,
                                  children: [
                                      s
                                          ? (0, r.jsx)('div', { className: N.heroHeaderBadgeLogoSummaryContainer })
                                          : (0, r.jsxs)('div', {
                                                className: N.heroHeaderBadgeLogoSummaryContainer,
                                                children: [
                                                    null != U.unpublishedAt &&
                                                        (0, r.jsx)(u.IGR, {
                                                            disableColor: !0,
                                                            text: B.intl.string(B.t['h/uBCQ']),
                                                            className: N.limitedTimeBadge
                                                        }),
                                                    (0, r.jsxs)('div', {
                                                        className: N.heroLogoNameContainer,
                                                        children: [
                                                            null != U.logoUrl &&
                                                                (0, r.jsx)('img', {
                                                                    className: N.heroHeaderLogo,
                                                                    src: Y,
                                                                    alt: U.name
                                                                }),
                                                            null != U.title &&
                                                                (0, r.jsxs)(u.X6q, {
                                                                    variant: 'heading-xxl/bold',
                                                                    className: N.title,
                                                                    color: 'header-primary',
                                                                    children: [U.title, H === L.AW.ORBS && (0, r.jsx)(f.Z, {})]
                                                                }),
                                                            (0, r.jsx)(u.Text, {
                                                                variant: H === L.AW.ORBS ? 'text-lg/medium' : 'text-md/normal',
                                                                className: H === L.AW.ORBS ? N.orbsSubHeaderText : (null == z ? void 0 : z.showDarkBannerText) ? N.subHeaderTextDark : N.subHeaderText,
                                                                style: null != U.bannerTextColor ? { color: U.bannerTextColor } : void 0,
                                                                children: U.summary
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                      !s &&
                                          (0, r.jsx)('div', {
                                              className: N.heroHeaderButtonContainer,
                                              children: (0, r.jsx)(u.zxk, {
                                                  className: N.heroHeaderButton,
                                                  color: u.Ttl.WHITE,
                                                  onClick: () => {
                                                      H === L.AW.ORBS
                                                          ? ((0, h.Y)({
                                                                pageType: I.ZY5.SHOP_ORBS_TAB,
                                                                sectionType: I.jXE.ORBS_SHOP_HERO_BLOCK,
                                                                ctaObject: I.qAy.CTA_TO_QUEST_HOME
                                                            }),
                                                            (0, g.navigateToQuestHome)({ fromContent: o.j.ORBS_SHOP_HERO_CTA }))
                                                          : (O('shop latest category hero', U.categorySkuId),
                                                            _.default.track(I.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                                collectibles_shop_session_id: null == V ? void 0 : V.sessionId,
                                                                sku_id: U.categorySkuId,
                                                                page_type: H,
                                                                page_section: null == V ? void 0 : V.pageSection,
                                                                page_category: null == V ? void 0 : V.pageCategory,
                                                                cta_name: 'shop latest category hero button'
                                                            }));
                                                  },
                                                  children: el
                                              })
                                          })
                                  ]
                              }),
                              (0, r.jsx)('div', {
                                  className: i()(N.row, N.feed, { [N.feedSingleRow]: H !== L.AW.ORBS }),
                                  children: s
                                      ? (0, r.jsx)(r.Fragment, {
                                            children: [void 0, void 0, void 0, void 0].map((e, t) => (0, r.jsx)(j.K, {}, t))
                                        })
                                      : (0, r.jsx)(r.Fragment, {
                                            children: er.map((e, t) => {
                                                let n = v.Z.getCategoryForProduct(e.skuId);
                                                return null == e || null == n
                                                    ? null
                                                    : (0, r.jsx)(
                                                          C.k0,
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
                                                                      user: F,
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
