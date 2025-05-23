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
    g = n(688465),
    b = n(341907),
    f = n(507808),
    h = n(594174),
    m = n(451478),
    _ = n(626135),
    C = n(381585),
    v = n(597688),
    O = n(884697),
    S = n(26931),
    x = n(370039),
    E = n(937510),
    j = n(823941),
    y = n(38900),
    P = n(709999),
    k = n(794324),
    T = n(619899),
    I = n(215023),
    L = n(981631),
    B = n(388032),
    w = n(806734);
let N = {
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
    A = (e) => {
        var t, n, r, l;
        return null == e
            ? N
            : {
                  rankedSkuIds: null != (t = e.heroRanking) ? t : [],
                  name: e.name,
                  unpublishedAt: e.unpublishedAt,
                  logoUrl: (0, O.uV)(null != (r = null != (n = e.heroLogo) ? n : e.logo) ? r : '', { size: j.n }),
                  categorySkuId: e.skuId,
                  bannerAsset: e.heroBannerAsset,
                  fallbackBannerUrl: (0, O.uV)(null != (l = e.heroBanner) ? l : '', {
                      size: I.pv,
                      format: 'jpg'
                  }),
                  summary: e.summary,
                  type: s.z.HERO,
                  categoryStoreListingId: e.storeListingId
              };
    },
    R = (e) => {
        let { isLoading: t, handleTransition: n, category: a, heroBlock: s, tab: O } = e,
            j = (0, c.e7)([d.Z], () => d.Z.useReducedMotion),
            R = (0, c.e7)([m.Z], () => m.Z.isFocused()),
            Z = (0, c.e7)([h.default], () => h.default.getCurrentUser()),
            F = (0, S.u)(),
            D = (0, C.sp)(),
            H = l.useMemo(() => (null != s ? s : A(a)), [s, a]),
            { isPreviewingStaticBanner: M, bannerOverrides: W, bannerStyleOverrides: V, heroLogo: U, heroBannerStatic: G, heroBannerAnimated: z } = (0, k.hr)(H),
            q = null == W ? void 0 : W.heroBanner,
            K = l.useMemo(() => F(H.rankedSkuIds), [t, F, H.rankedSkuIds]),
            Y = (0, x.a)()(K),
            $ = (0, E.l)(Y).slice(0, 4),
            X = (0, T.St)($),
            J = O === I.AW.ORBS ? B.intl.string(B.t['1CdL8f']) : B.intl.formatToPlainString(B.t.wvKYCg, { category_name: H.name });
        return null != Z && (t || H !== N)
            ? (0, r.jsxs)('div', {
                  className: i()(w.heroBlock, { [w.responsiveHero]: null == V ? void 0 : V.responsive }),
                  children: [
                      (0, r.jsxs)('div', {
                          className: w.banner,
                          style: (null == V ? void 0 : V.backgroundStyle) != null ? { background: V.backgroundStyle } : void 0,
                          children: [
                              null == z || j || !R || M
                                  ? (0, r.jsx)('div', {
                                        className: w.bannerImage,
                                        style: { backgroundImage: 'url('.concat(G, ')') }
                                    })
                                  : (0, r.jsx)(p.Z, {
                                        className: w.bannerVideoBackground,
                                        src: z,
                                        autoPlay: !0,
                                        loop: !0
                                    }),
                              (null == V ? void 0 : V.hideSideShadow) !== !0 &&
                                  (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)('div', {
                                              className: i()(w.bannerShadow, w.left, { [w.darker]: null == q ? void 0 : q.darker }),
                                              style: (null == q ? void 0 : q.gradientLeft) != null ? { background: null == q ? void 0 : q.gradientLeft } : void 0
                                          }),
                                          (0, r.jsx)('div', {
                                              className: i()(w.bannerShadow, w.right, { [w.darker]: null == q ? void 0 : q.darker }),
                                              style: (null == q ? void 0 : q.gradientRight) != null ? { background: null == q ? void 0 : q.gradientRight } : void 0
                                          })
                                      ]
                                  })
                          ]
                      }),
                      (0, r.jsxs)('div', {
                          className: w.heroBlockContent,
                          children: [
                              (0, r.jsxs)('div', {
                                  className: w.heroHeaderContainer,
                                  children: [
                                      t
                                          ? (0, r.jsx)('div', { className: w.heroHeaderBadgeLogoSummaryContainer })
                                          : (0, r.jsxs)('div', {
                                                className: w.heroHeaderBadgeLogoSummaryContainer,
                                                children: [
                                                    null != H.unpublishedAt &&
                                                        (0, r.jsx)(u.IGR, {
                                                            disableColor: !0,
                                                            text: B.intl.string(B.t['h/uBCQ']),
                                                            className: w.limitedTimeBadge
                                                        }),
                                                    (0, r.jsxs)('div', {
                                                        className: w.heroLogoNameContainer,
                                                        children: [
                                                            null != H.logoUrl &&
                                                                (0, r.jsx)('img', {
                                                                    className: w.heroHeaderLogo,
                                                                    src: U,
                                                                    alt: H.name
                                                                }),
                                                            null != H.title &&
                                                                (0, r.jsxs)(u.X6q, {
                                                                    variant: 'heading-xxl/bold',
                                                                    className: w.title,
                                                                    color: 'header-primary',
                                                                    children: [H.title, O === I.AW.ORBS && (0, r.jsx)(g.Z, {})]
                                                                }),
                                                            (0, r.jsx)(u.Text, {
                                                                variant: O === I.AW.ORBS ? 'text-lg/medium' : 'text-md/normal',
                                                                className: O === I.AW.ORBS ? w.orbsSubHeaderText : (null == W ? void 0 : W.showDarkBannerText) ? w.subHeaderTextDark : w.subHeaderText,
                                                                style: null != H.bannerTextColor ? { color: H.bannerTextColor } : void 0,
                                                                children: H.summary
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                      !t &&
                                          (0, r.jsx)('div', {
                                              className: w.heroHeaderButtonContainer,
                                              children: (0, r.jsx)(u.zxk, {
                                                  className: w.heroHeaderButton,
                                                  color: u.Ttl.WHITE,
                                                  onClick: () => {
                                                      O === I.AW.ORBS
                                                          ? ((0, f.Y)({
                                                                pageType: L.ZY5.SHOP_ORBS_TAB,
                                                                sectionType: L.jXE.ORBS_SHOP_HERO_BLOCK,
                                                                ctaObject: L.qAy.CTA_TO_QUEST_HOME
                                                            }),
                                                            (0, b.navigateToQuestHome)({ fromContent: o.j.ORBS_SHOP_HERO_CTA }))
                                                          : (n('shop latest category hero', H.categorySkuId),
                                                            _.default.track(L.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                                                collectibles_shop_session_id: null == D ? void 0 : D.sessionId,
                                                                sku_id: H.categorySkuId,
                                                                page_type: O,
                                                                page_section: null == D ? void 0 : D.pageSection,
                                                                page_category: null == D ? void 0 : D.pageCategory,
                                                                cta_name: 'shop latest category hero button'
                                                            }));
                                                  },
                                                  children: J
                                              })
                                          })
                                  ]
                              }),
                              (0, r.jsx)('div', {
                                  className: i()(w.row, w.feed, { [w.feedSingleRow]: O !== I.AW.ORBS }),
                                  children: t
                                      ? (0, r.jsx)(r.Fragment, {
                                            children: [void 0, void 0, void 0, void 0].map((e, t) => (0, r.jsx)(y.K, {}, t))
                                        })
                                      : (0, r.jsx)(r.Fragment, {
                                            children: X.map((e, t) => {
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
                                                                      user: Z,
                                                                      tab: O
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
