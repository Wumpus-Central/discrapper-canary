n.d(t, { Z: () => L }), n(388685);
var r = n(255367),
    l = n(73800),
    i = n(120356),
    a = n.n(i),
    o = n(685816),
    s = n(442837),
    c = n(481060),
    u = n(782568),
    d = n(607070),
    f = n(70097),
    b = n(594174),
    p = n(451478),
    g = n(63063),
    h = n(381585),
    m = n(597688),
    _ = n(884697),
    C = n(26931),
    v = n(370039),
    O = n(937510),
    x = n(823941),
    S = n(38900),
    j = n(709999),
    y = n(794324),
    E = n(619899),
    P = n(215023),
    k = n(981631),
    T = n(388032),
    w = n(806734);
let I = {
        rankedSkuIds: [],
        name: '',
        unpublishedAt: void 0,
        logoUrl: '',
        categorySkuId: '',
        bannerAsset: void 0,
        fallbackBannerUrl: '',
        summary: '',
        type: o.z.HERO,
        categoryStoreListingId: ''
    },
    B = (e) => {
        var t, n, r, l;
        return null == e
            ? I
            : {
                  rankedSkuIds: null != (t = e.heroRanking) ? t : [],
                  name: e.name,
                  unpublishedAt: e.unpublishedAt,
                  logoUrl: (0, _.uV)(null != (r = null != (n = e.heroLogo) ? n : e.logo) ? r : '', { size: x.n }),
                  categorySkuId: e.skuId,
                  bannerAsset: e.heroBannerAsset,
                  fallbackBannerUrl: (0, _.uV)(null != (l = e.heroBanner) ? l : '', {
                      size: P.pv,
                      format: 'jpg'
                  }),
                  summary: e.summary,
                  type: o.z.HERO,
                  categoryStoreListingId: e.storeListingId
              };
    },
    L = (e) => {
        let { isLoading: t, handleTransition: n, category: i, heroBlock: o, tab: _ } = e,
            x = (0, s.e7)([d.Z], () => d.Z.useReducedMotion),
            L = (0, s.e7)([p.Z], () => p.Z.isFocused()),
            N = (0, s.e7)([b.default], () => b.default.getCurrentUser()),
            R = (0, C.u)(),
            A = l.useMemo(() => (null != o ? o : B(i)), [o, i]),
            { isPreviewingStaticBanner: Z, bannerOverrides: F, bannerStyleOverrides: D, heroLogo: H, heroBannerStatic: M, heroBannerAnimated: W } = (0, y.hr)(A),
            V = null == F ? void 0 : F.heroBanner,
            U = l.useMemo(() => R(A.rankedSkuIds), [t, R, A.rankedSkuIds]),
            G = (0, v.a)()(U),
            z = (0, O.l)(G).slice(0, 4),
            q = (0, E.St)(z),
            Y = _ === P.AW.ORBS ? T.intl.string(T.t.hvVgAQ) : T.intl.formatToPlainString(T.t.wvKYCg, { category_name: A.name });
        return null != N && (t || A !== I)
            ? (0, r.jsxs)('div', {
                  className: a()(w.heroBlock, { [w.responsiveHero]: null == D ? void 0 : D.responsive }),
                  children: [
                      (0, r.jsxs)('div', {
                          className: w.banner,
                          style: (null == D ? void 0 : D.backgroundStyle) != null ? { background: D.backgroundStyle } : void 0,
                          children: [
                              null == W || x || !L || Z
                                  ? (0, r.jsx)('div', {
                                        className: w.bannerImage,
                                        style: { backgroundImage: 'url('.concat(M, ')') }
                                    })
                                  : (0, r.jsx)(f.Z, {
                                        className: w.bannerVideoBackground,
                                        src: W,
                                        autoPlay: !0,
                                        loop: !0
                                    }),
                              (null == D ? void 0 : D.hideSideShadow) !== !0 &&
                                  (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)('div', {
                                              className: a()(w.bannerShadow, w.left, { [w.darker]: null == V ? void 0 : V.darker }),
                                              style: (null == V ? void 0 : V.gradientLeft) != null ? { background: null == V ? void 0 : V.gradientLeft } : void 0
                                          }),
                                          (0, r.jsx)('div', {
                                              className: a()(w.bannerShadow, w.right, { [w.darker]: null == V ? void 0 : V.darker }),
                                              style: (null == V ? void 0 : V.gradientRight) != null ? { background: null == V ? void 0 : V.gradientRight } : void 0
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
                                                    null != A.unpublishedAt &&
                                                        (0, r.jsx)(c.IGR, {
                                                            disableColor: !0,
                                                            text: T.intl.string(T.t['h/uBCQ']),
                                                            className: w.limitedTimeBadge
                                                        }),
                                                    (0, r.jsxs)('div', {
                                                        className: w.heroLogoNameContainer,
                                                        children: [
                                                            null != A.logoUrl &&
                                                                (0, r.jsx)('img', {
                                                                    className: w.heroHeaderLogo,
                                                                    src: H,
                                                                    alt: A.name
                                                                }),
                                                            null != A.title &&
                                                                (0, r.jsx)(c.X6q, {
                                                                    variant: 'heading-xxl/bold',
                                                                    className: w.title,
                                                                    color: 'header-primary',
                                                                    children: A.title
                                                                }),
                                                            (0, r.jsx)(c.Text, {
                                                                variant: _ === P.AW.ORBS ? 'text-lg/medium' : 'text-md/normal',
                                                                className: _ === P.AW.ORBS ? w.orbsSubHeaderText : (null == F ? void 0 : F.showDarkBannerText) ? w.subHeaderTextDark : w.subHeaderText,
                                                                style: null != A.bannerTextColor ? { color: A.bannerTextColor } : void 0,
                                                                children: A.summary
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                      !t &&
                                          (0, r.jsx)('div', {
                                              className: w.heroHeaderButtonContainer,
                                              children: (0, r.jsx)(c.zxk, {
                                                  className: w.heroHeaderButton,
                                                  color: c.Ttl.WHITE,
                                                  onClick: () => {
                                                      _ === P.AW.ORBS ? (0, u.Z)(g.Z.getArticleURL(k.BhN.VIRTUAL_CURRENCY_LEARN_MORE)) : n('shop latest category hero', A.categorySkuId);
                                                  },
                                                  children: Y
                                              })
                                          })
                                  ]
                              }),
                              (0, r.jsx)('div', {
                                  className: a()(w.row, w.feed, { [w.feedSingleRow]: _ !== P.AW.ORBS }),
                                  children: t
                                      ? (0, r.jsx)(r.Fragment, {
                                            children: [void 0, void 0, void 0, void 0].map((e, t) => (0, r.jsx)(S.K, {}, t))
                                        })
                                      : (0, r.jsx)(r.Fragment, {
                                            children: q.map((e, t) => {
                                                let n = m.Z.getCategoryForProduct(e.skuId);
                                                return null == e || null == n
                                                    ? null
                                                    : (0, r.jsx)(
                                                          h.k0,
                                                          {
                                                              newValue: {
                                                                  tilePosition: t,
                                                                  pageSection: 'top 4',
                                                                  categoryPosition: 0
                                                              },
                                                              children: (0, r.jsx)(
                                                                  j.Z,
                                                                  {
                                                                      product: e,
                                                                      category: n,
                                                                      user: N,
                                                                      tab: _
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
