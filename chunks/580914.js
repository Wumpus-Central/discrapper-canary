n.d(t, { Z: () => N }), n(388685);
var r = n(255367),
    l = n(73800),
    i = n(120356),
    a = n.n(i),
    o = n(636977),
    s = n(685816),
    c = n(442837),
    u = n(481060),
    d = n(607070),
    b = n(70097),
    f = n(341907),
    p = n(507808),
    g = n(594174),
    h = n(451478),
    m = n(381585),
    _ = n(597688),
    C = n(884697),
    v = n(26931),
    O = n(370039),
    x = n(937510),
    S = n(823941),
    j = n(38900),
    y = n(709999),
    P = n(794324),
    E = n(619899),
    k = n(215023),
    T = n(981631),
    w = n(388032),
    I = n(806734);
let B = {
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
    L = (e) => {
        var t, n, r, l;
        return null == e
            ? B
            : {
                  rankedSkuIds: null != (t = e.heroRanking) ? t : [],
                  name: e.name,
                  unpublishedAt: e.unpublishedAt,
                  logoUrl: (0, C.uV)(null != (r = null != (n = e.heroLogo) ? n : e.logo) ? r : '', { size: S.n }),
                  categorySkuId: e.skuId,
                  bannerAsset: e.heroBannerAsset,
                  fallbackBannerUrl: (0, C.uV)(null != (l = e.heroBanner) ? l : '', {
                      size: k.pv,
                      format: 'jpg'
                  }),
                  summary: e.summary,
                  type: s.z.HERO,
                  categoryStoreListingId: e.storeListingId
              };
    },
    N = (e) => {
        let { isLoading: t, handleTransition: n, category: i, heroBlock: s, tab: C } = e,
            S = (0, c.e7)([d.Z], () => d.Z.useReducedMotion),
            N = (0, c.e7)([h.Z], () => h.Z.isFocused()),
            R = (0, c.e7)([g.default], () => g.default.getCurrentUser()),
            A = (0, v.u)(),
            Z = l.useMemo(() => (null != s ? s : L(i)), [s, i]),
            { isPreviewingStaticBanner: F, bannerOverrides: H, bannerStyleOverrides: D, heroLogo: M, heroBannerStatic: W, heroBannerAnimated: V } = (0, P.hr)(Z),
            U = null == H ? void 0 : H.heroBanner,
            G = l.useMemo(() => A(Z.rankedSkuIds), [t, A, Z.rankedSkuIds]),
            z = (0, O.a)()(G),
            q = (0, x.l)(z).slice(0, 4),
            Y = (0, E.St)(q),
            $ = C === k.AW.ORBS ? w.intl.string(w.t['1CdL8f']) : w.intl.formatToPlainString(w.t.wvKYCg, { category_name: Z.name });
        return null != R && (t || Z !== B)
            ? (0, r.jsxs)('div', {
                  className: a()(I.heroBlock, { [I.responsiveHero]: null == D ? void 0 : D.responsive }),
                  children: [
                      (0, r.jsxs)('div', {
                          className: I.banner,
                          style: (null == D ? void 0 : D.backgroundStyle) != null ? { background: D.backgroundStyle } : void 0,
                          children: [
                              null == V || S || !N || F
                                  ? (0, r.jsx)('div', {
                                        className: I.bannerImage,
                                        style: { backgroundImage: 'url('.concat(W, ')') }
                                    })
                                  : (0, r.jsx)(b.Z, {
                                        className: I.bannerVideoBackground,
                                        src: V,
                                        autoPlay: !0,
                                        loop: !0
                                    }),
                              (null == D ? void 0 : D.hideSideShadow) !== !0 &&
                                  (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)('div', {
                                              className: a()(I.bannerShadow, I.left, { [I.darker]: null == U ? void 0 : U.darker }),
                                              style: (null == U ? void 0 : U.gradientLeft) != null ? { background: null == U ? void 0 : U.gradientLeft } : void 0
                                          }),
                                          (0, r.jsx)('div', {
                                              className: a()(I.bannerShadow, I.right, { [I.darker]: null == U ? void 0 : U.darker }),
                                              style: (null == U ? void 0 : U.gradientRight) != null ? { background: null == U ? void 0 : U.gradientRight } : void 0
                                          })
                                      ]
                                  })
                          ]
                      }),
                      (0, r.jsxs)('div', {
                          className: I.heroBlockContent,
                          children: [
                              (0, r.jsxs)('div', {
                                  className: I.heroHeaderContainer,
                                  children: [
                                      t
                                          ? (0, r.jsx)('div', { className: I.heroHeaderBadgeLogoSummaryContainer })
                                          : (0, r.jsxs)('div', {
                                                className: I.heroHeaderBadgeLogoSummaryContainer,
                                                children: [
                                                    null != Z.unpublishedAt &&
                                                        (0, r.jsx)(u.IGR, {
                                                            disableColor: !0,
                                                            text: w.intl.string(w.t['h/uBCQ']),
                                                            className: I.limitedTimeBadge
                                                        }),
                                                    (0, r.jsxs)('div', {
                                                        className: I.heroLogoNameContainer,
                                                        children: [
                                                            null != Z.logoUrl &&
                                                                (0, r.jsx)('img', {
                                                                    className: I.heroHeaderLogo,
                                                                    src: M,
                                                                    alt: Z.name
                                                                }),
                                                            null != Z.title &&
                                                                (0, r.jsx)(u.X6q, {
                                                                    variant: 'heading-xxl/bold',
                                                                    className: I.title,
                                                                    color: 'header-primary',
                                                                    children: Z.title
                                                                }),
                                                            (0, r.jsx)(u.Text, {
                                                                variant: C === k.AW.ORBS ? 'text-lg/medium' : 'text-md/normal',
                                                                className: C === k.AW.ORBS ? I.orbsSubHeaderText : (null == H ? void 0 : H.showDarkBannerText) ? I.subHeaderTextDark : I.subHeaderText,
                                                                style: null != Z.bannerTextColor ? { color: Z.bannerTextColor } : void 0,
                                                                children: Z.summary
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                      !t &&
                                          (0, r.jsx)('div', {
                                              className: I.heroHeaderButtonContainer,
                                              children: (0, r.jsx)(u.zxk, {
                                                  className: I.heroHeaderButton,
                                                  color: u.Ttl.WHITE,
                                                  onClick: () => {
                                                      C === k.AW.ORBS
                                                          ? ((0, p.Y)({
                                                                pageType: T.ZY5.SHOP_ORBS_TAB,
                                                                sectionType: T.jXE.ORBS_SHOP_HERO_BLOCK,
                                                                ctaObject: T.qAy.CTA_TO_QUEST_HOME
                                                            }),
                                                            (0, f.navigateToQuestHome)({ fromContent: o.j.ORBS_SHOP_HERO_CTA }))
                                                          : n('shop latest category hero', Z.categorySkuId);
                                                  },
                                                  children: $
                                              })
                                          })
                                  ]
                              }),
                              (0, r.jsx)('div', {
                                  className: a()(I.row, I.feed, { [I.feedSingleRow]: C !== k.AW.ORBS }),
                                  children: t
                                      ? (0, r.jsx)(r.Fragment, {
                                            children: [void 0, void 0, void 0, void 0].map((e, t) => (0, r.jsx)(j.K, {}, t))
                                        })
                                      : (0, r.jsx)(r.Fragment, {
                                            children: Y.map((e, t) => {
                                                let n = _.Z.getCategoryForProduct(e.skuId);
                                                return null == e || null == n
                                                    ? null
                                                    : (0, r.jsx)(
                                                          m.k0,
                                                          {
                                                              newValue: {
                                                                  tilePosition: t,
                                                                  pageSection: 'top 4',
                                                                  categoryPosition: 0
                                                              },
                                                              children: (0, r.jsx)(
                                                                  y.Z,
                                                                  {
                                                                      product: e,
                                                                      category: n,
                                                                      user: R,
                                                                      tab: C
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
