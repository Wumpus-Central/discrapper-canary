n.d(t, { Z: () => R }), n(388685);
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
    b = n(341907),
    g = n(507808),
    h = n(594174),
    m = n(451478),
    _ = n(626135),
    C = n(381585),
    v = n(597688),
    O = n(884697),
    E = n(26931),
    x = n(370039),
    S = n(937510),
    j = n(823941),
    y = n(38900),
    k = n(709999),
    P = n(794324),
    T = n(619899),
    I = n(215023),
    L = n(981631),
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
                  logoUrl: (0, O.uV)(null != (a = null != (l = e.heroLogo) ? l : e.logo) ? a : '', { size: j.n }),
                  categorySkuId: e.skuId,
                  bannerAsset: e.heroBannerAsset,
                  fallbackBannerUrl: (0, O.uV)(null != (i = e.heroBanner) ? i : '', {
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
        let { isLoading: s, handleTransition: O, category: j, heroBlock: R, tab: F } = e,
            D = (0, c.e7)([d.Z], () => d.Z.useReducedMotion),
            H = (0, c.e7)([m.Z], () => m.Z.isFocused()),
            M = (0, c.e7)([h.default], () => h.default.getCurrentUser()),
            W = (0, E.u)(),
            V = (0, C.sp)(),
            U = l.useMemo(() => (null != R ? R : w(j)), [R, j]),
            { isPreviewingStaticBanner: G, bannerOverrides: z, bannerStyleOverrides: q, heroLogo: Y, heroBannerStatic: K, heroBannerAnimated: X } = (0, P.hr)(U),
            $ = null == z ? void 0 : z.heroBanner,
            J = null != (n = null != (t = null == q ? void 0 : q.responsive) ? t : U.responsive) && n,
            Q = null != (a = null == q ? void 0 : q.backgroundStyle) ? a : U.backgroundStyle,
            ee = l.useMemo(() => W(U.rankedSkuIds), [s, W, U.rankedSkuIds]),
            et = (0, x.a)()(ee),
            en = (0, S.l)(et).slice(0, 4),
            er = (0, T.St)(en),
            el = F === I.AW.ORBS ? B.intl.string(B.t['1CdL8f']) : B.intl.formatToPlainString(B.t.wvKYCg, { category_name: U.name });
        return null != M && (s || U !== A)
            ? (0, r.jsxs)('div', {
                  className: i()(N.heroBlock, { [N.responsiveHero]: J }),
                  children: [
                      (0, r.jsxs)('div', {
                          className: N.banner,
                          style: null != Q ? { background: Q } : void 0,
                          children: [
                              null == X || D || !H || G
                                  ? (0, r.jsx)('div', {
                                        className: i()(N.bannerAsset, N.bannerImage),
                                        style: { backgroundImage: 'url('.concat(K, ')') }
                                    })
                                  : (0, r.jsx)(p.Z, {
                                        className: i()(N.bannerAsset, N.bannerVideoBackground),
                                        src: X,
                                        autoPlay: !0,
                                        loop: !0
                                    }),
                              (null == q ? void 0 : q.hideSideShadow) === !0
                                  ? null
                                  : (0, r.jsx)(Z, {
                                        heroBannerOverrides: $,
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
                                                                    children: [U.title, F === I.AW.ORBS && (0, r.jsx)(f.Z, {})]
                                                                }),
                                                            (0, r.jsx)(u.Text, {
                                                                variant: F === I.AW.ORBS ? 'text-lg/medium' : 'text-md/normal',
                                                                className: F === I.AW.ORBS ? N.orbsSubHeaderText : (null == z ? void 0 : z.showDarkBannerText) ? N.subHeaderTextDark : N.subHeaderText,
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
                                                      F === I.AW.ORBS
                                                          ? ((0, g.Y)({
                                                                pageType: L.ZY5.SHOP_ORBS_TAB,
                                                                sectionType: L.jXE.ORBS_SHOP_HERO_BLOCK,
                                                                ctaObject: L.qAy.CTA_TO_QUEST_HOME
                                                            }),
                                                            (0, b.navigateToQuestHome)({ fromContent: o.j.ORBS_SHOP_HERO_CTA }))
                                                          : (O('shop latest category hero', U.categorySkuId),
                                                            _.default.track(L.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                                collectibles_shop_session_id: null == V ? void 0 : V.sessionId,
                                                                sku_id: U.categorySkuId,
                                                                page_type: F,
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
                                  className: i()(N.row, N.feed, { [N.feedSingleRow]: F !== I.AW.ORBS }),
                                  children: s
                                      ? (0, r.jsx)(r.Fragment, {
                                            children: [void 0, void 0, void 0, void 0].map((e, t) => (0, r.jsx)(y.K, {}, t))
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
                                                                  k.Z,
                                                                  {
                                                                      product: e,
                                                                      category: n,
                                                                      user: M,
                                                                      tab: F
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
