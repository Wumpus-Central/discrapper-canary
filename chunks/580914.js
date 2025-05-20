n.d(t, { Z: () => R }), n(388685);
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
    f = n(688465),
    p = n(341907),
    g = n(507808),
    h = n(594174),
    m = n(451478),
    _ = n(381585),
    C = n(597688),
    v = n(884697),
    O = n(26931),
    x = n(370039),
    S = n(937510),
    j = n(823941),
    y = n(38900),
    P = n(709999),
    E = n(794324),
    k = n(619899),
    T = n(215023),
    w = n(981631),
    I = n(388032),
    B = n(806734);
let L = {
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
    N = (e) => {
        var t, n, r, l;
        return null == e
            ? L
            : {
                  rankedSkuIds: null != (t = e.heroRanking) ? t : [],
                  name: e.name,
                  unpublishedAt: e.unpublishedAt,
                  logoUrl: (0, v.uV)(null != (r = null != (n = e.heroLogo) ? n : e.logo) ? r : '', { size: j.n }),
                  categorySkuId: e.skuId,
                  bannerAsset: e.heroBannerAsset,
                  fallbackBannerUrl: (0, v.uV)(null != (l = e.heroBanner) ? l : '', {
                      size: T.pv,
                      format: 'jpg'
                  }),
                  summary: e.summary,
                  type: s.z.HERO,
                  categoryStoreListingId: e.storeListingId
              };
    },
    R = (e) => {
        let { isLoading: t, handleTransition: n, category: i, heroBlock: s, tab: v } = e,
            j = (0, c.e7)([d.Z], () => d.Z.useReducedMotion),
            R = (0, c.e7)([m.Z], () => m.Z.isFocused()),
            A = (0, c.e7)([h.default], () => h.default.getCurrentUser()),
            Z = (0, O.u)(),
            F = l.useMemo(() => (null != s ? s : N(i)), [s, i]),
            { isPreviewingStaticBanner: H, bannerOverrides: D, bannerStyleOverrides: M, heroLogo: W, heroBannerStatic: V, heroBannerAnimated: U } = (0, E.hr)(F),
            G = null == D ? void 0 : D.heroBanner,
            z = l.useMemo(() => Z(F.rankedSkuIds), [t, Z, F.rankedSkuIds]),
            q = (0, x.a)()(z),
            Y = (0, S.l)(q).slice(0, 4),
            $ = (0, k.St)(Y),
            X = v === T.AW.ORBS ? I.intl.string(I.t['1CdL8f']) : I.intl.formatToPlainString(I.t.wvKYCg, { category_name: F.name });
        return null != A && (t || F !== L)
            ? (0, r.jsxs)('div', {
                  className: a()(B.heroBlock, { [B.responsiveHero]: null == M ? void 0 : M.responsive }),
                  children: [
                      (0, r.jsxs)('div', {
                          className: B.banner,
                          style: (null == M ? void 0 : M.backgroundStyle) != null ? { background: M.backgroundStyle } : void 0,
                          children: [
                              null == U || j || !R || H
                                  ? (0, r.jsx)('div', {
                                        className: B.bannerImage,
                                        style: { backgroundImage: 'url('.concat(V, ')') }
                                    })
                                  : (0, r.jsx)(b.Z, {
                                        className: B.bannerVideoBackground,
                                        src: U,
                                        autoPlay: !0,
                                        loop: !0
                                    }),
                              (null == M ? void 0 : M.hideSideShadow) !== !0 &&
                                  (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)('div', {
                                              className: a()(B.bannerShadow, B.left, { [B.darker]: null == G ? void 0 : G.darker }),
                                              style: (null == G ? void 0 : G.gradientLeft) != null ? { background: null == G ? void 0 : G.gradientLeft } : void 0
                                          }),
                                          (0, r.jsx)('div', {
                                              className: a()(B.bannerShadow, B.right, { [B.darker]: null == G ? void 0 : G.darker }),
                                              style: (null == G ? void 0 : G.gradientRight) != null ? { background: null == G ? void 0 : G.gradientRight } : void 0
                                          })
                                      ]
                                  })
                          ]
                      }),
                      (0, r.jsxs)('div', {
                          className: B.heroBlockContent,
                          children: [
                              (0, r.jsxs)('div', {
                                  className: B.heroHeaderContainer,
                                  children: [
                                      t
                                          ? (0, r.jsx)('div', { className: B.heroHeaderBadgeLogoSummaryContainer })
                                          : (0, r.jsxs)('div', {
                                                className: B.heroHeaderBadgeLogoSummaryContainer,
                                                children: [
                                                    null != F.unpublishedAt &&
                                                        (0, r.jsx)(u.IGR, {
                                                            disableColor: !0,
                                                            text: I.intl.string(I.t['h/uBCQ']),
                                                            className: B.limitedTimeBadge
                                                        }),
                                                    (0, r.jsxs)('div', {
                                                        className: B.heroLogoNameContainer,
                                                        children: [
                                                            null != F.logoUrl &&
                                                                (0, r.jsx)('img', {
                                                                    className: B.heroHeaderLogo,
                                                                    src: W,
                                                                    alt: F.name
                                                                }),
                                                            null != F.title &&
                                                                (0, r.jsxs)(u.X6q, {
                                                                    variant: 'heading-xxl/bold',
                                                                    className: B.title,
                                                                    color: 'header-primary',
                                                                    children: [F.title, v === T.AW.ORBS && (0, r.jsx)(f.Z, {})]
                                                                }),
                                                            (0, r.jsx)(u.Text, {
                                                                variant: v === T.AW.ORBS ? 'text-lg/medium' : 'text-md/normal',
                                                                className: v === T.AW.ORBS ? B.orbsSubHeaderText : (null == D ? void 0 : D.showDarkBannerText) ? B.subHeaderTextDark : B.subHeaderText,
                                                                style: null != F.bannerTextColor ? { color: F.bannerTextColor } : void 0,
                                                                children: F.summary
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                      !t &&
                                          (0, r.jsx)('div', {
                                              className: B.heroHeaderButtonContainer,
                                              children: (0, r.jsx)(u.zxk, {
                                                  className: B.heroHeaderButton,
                                                  color: u.Ttl.WHITE,
                                                  onClick: () => {
                                                      v === T.AW.ORBS
                                                          ? ((0, g.Y)({
                                                                pageType: w.ZY5.SHOP_ORBS_TAB,
                                                                sectionType: w.jXE.ORBS_SHOP_HERO_BLOCK,
                                                                ctaObject: w.qAy.CTA_TO_QUEST_HOME
                                                            }),
                                                            (0, p.navigateToQuestHome)({ fromContent: o.j.ORBS_SHOP_HERO_CTA }))
                                                          : n('shop latest category hero', F.categorySkuId);
                                                  },
                                                  children: X
                                              })
                                          })
                                  ]
                              }),
                              (0, r.jsx)('div', {
                                  className: a()(B.row, B.feed, { [B.feedSingleRow]: v !== T.AW.ORBS }),
                                  children: t
                                      ? (0, r.jsx)(r.Fragment, {
                                            children: [void 0, void 0, void 0, void 0].map((e, t) => (0, r.jsx)(y.K, {}, t))
                                        })
                                      : (0, r.jsx)(r.Fragment, {
                                            children: $.map((e, t) => {
                                                let n = C.Z.getCategoryForProduct(e.skuId);
                                                return null == e || null == n
                                                    ? null
                                                    : (0, r.jsx)(
                                                          _.k0,
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
                                                                      user: A,
                                                                      tab: v
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
