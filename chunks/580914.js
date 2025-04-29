n.d(t, { Z: () => L }), n(388685);
var r = n(255367),
    l = n(73800),
    a = n(120356),
    i = n.n(a),
    o = n(685816),
    s = n(442837),
    c = n(481060),
    u = n(782568),
    d = n(607070),
    b = n(70097),
    p = n(594174),
    f = n(451478),
    g = n(63063),
    h = n(381585),
    m = n(597688),
    _ = n(884697),
    C = n(370039),
    v = n(937510),
    x = n(823941),
    O = n(38900),
    j = n(709999),
    y = n(794324),
    k = n(619899),
    S = n(957058),
    P = n(215023),
    E = n(981631),
    w = n(388032),
    B = n(806734);
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
    T = (e) => {
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
        let { isLoading: t, handleTransition: n, category: a, heroBlock: o, tab: _ } = e,
            x = (0, s.e7)([d.Z], () => d.Z.useReducedMotion),
            L = (0, s.e7)([f.Z], () => f.Z.isFocused()),
            N = (0, s.e7)([p.default], () => p.default.getCurrentUser()),
            A = (0, S.u)(),
            Z = l.useMemo(() => (null != o ? o : T(a)), [o, a]),
            { isPreviewingStaticBanner: R, bannerOverrides: F, bannerStyleOverrides: H, heroLogo: D, heroBannerStatic: M, heroBannerAnimated: W } = (0, y.hr)(Z),
            V = null == F ? void 0 : F.heroBanner,
            U = l.useMemo(() => A(Z.rankedSkuIds), [t, A, Z.rankedSkuIds]),
            G = (0, C.a)()(U),
            z = (0, v.l)(G).slice(0, 4),
            q = (0, k.St)(z),
            Y = _ === P.AW.ORBS ? w.intl.string(w.t.hvVgAQ) : w.intl.formatToPlainString(w.t.wvKYCg, { category_name: Z.name });
        return null != N && (t || Z !== I)
            ? (0, r.jsxs)('div', {
                  className: i()(B.heroBlock, { [B.responsiveHero]: null == H ? void 0 : H.responsive }),
                  children: [
                      (0, r.jsxs)('div', {
                          className: B.banner,
                          style: (null == H ? void 0 : H.backgroundStyle) != null ? { background: H.backgroundStyle } : void 0,
                          children: [
                              null == W || x || !L || R
                                  ? (0, r.jsx)('div', {
                                        className: B.bannerImage,
                                        style: { backgroundImage: 'url('.concat(M, ')') }
                                    })
                                  : (0, r.jsx)(b.Z, {
                                        className: B.bannerVideoBackground,
                                        src: W,
                                        autoPlay: !0,
                                        loop: !0
                                    }),
                              (null == H ? void 0 : H.hideSideShadow) !== !0 &&
                                  (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)('div', {
                                              className: i()(B.bannerShadow, B.left, { [B.darker]: null == V ? void 0 : V.darker }),
                                              style: (null == V ? void 0 : V.gradientLeft) != null ? { background: null == V ? void 0 : V.gradientLeft } : void 0
                                          }),
                                          (0, r.jsx)('div', {
                                              className: i()(B.bannerShadow, B.right, { [B.darker]: null == V ? void 0 : V.darker }),
                                              style: (null == V ? void 0 : V.gradientRight) != null ? { background: null == V ? void 0 : V.gradientRight } : void 0
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
                                                    null != Z.unpublishedAt &&
                                                        (0, r.jsx)(c.IGR, {
                                                            disableColor: !0,
                                                            text: w.intl.string(w.t['h/uBCQ']),
                                                            className: B.limitedTimeBadge
                                                        }),
                                                    (0, r.jsxs)('div', {
                                                        className: B.heroLogoNameContainer,
                                                        children: [
                                                            null != Z.logoUrl &&
                                                                (0, r.jsx)('img', {
                                                                    className: B.heroHeaderLogo,
                                                                    src: D,
                                                                    alt: Z.name
                                                                }),
                                                            null != Z.title &&
                                                                (0, r.jsx)(c.X6q, {
                                                                    variant: 'heading-xxl/bold',
                                                                    className: B.title,
                                                                    color: 'header-primary',
                                                                    children: Z.title
                                                                }),
                                                            (0, r.jsx)(c.Text, {
                                                                variant: _ === P.AW.ORBS ? 'text-lg/medium' : 'text-md/normal',
                                                                className: _ === P.AW.ORBS ? B.orbsSubHeaderText : (null == F ? void 0 : F.showDarkBannerText) ? B.subHeaderTextDark : B.subHeaderText,
                                                                style: null != Z.bannerTextColor ? { color: Z.bannerTextColor } : void 0,
                                                                children: Z.summary
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                      !t &&
                                          (0, r.jsx)('div', {
                                              className: B.heroHeaderButtonContainer,
                                              children: (0, r.jsx)(c.zxk, {
                                                  className: B.heroHeaderButton,
                                                  color: c.Ttl.WHITE,
                                                  onClick: () => {
                                                      _ === P.AW.ORBS ? (0, u.Z)(g.Z.getArticleURL(E.BhN.VIRTUAL_CURRENCY_LEARN_MORE)) : n('shop latest category hero', Z.categorySkuId);
                                                  },
                                                  children: Y
                                              })
                                          })
                                  ]
                              }),
                              (0, r.jsx)('div', {
                                  className: i()(B.row, B.feed, { [B.feedSingleRow]: _ !== P.AW.ORBS }),
                                  children: t
                                      ? (0, r.jsx)(r.Fragment, {
                                            children: [void 0, void 0, void 0, void 0].map((e, t) => (0, r.jsx)(O.K, {}, t))
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
