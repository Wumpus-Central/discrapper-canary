n.d(t, { Z: () => N }), n(388685);
var r = n(200651),
    l = n(192379),
    a = n(120356),
    o = n.n(a),
    i = n(685816),
    s = n(442837),
    c = n(481060),
    u = n(782568),
    d = n(607070),
    b = n(70097),
    p = n(594174),
    f = n(451478),
    g = n(63063),
    m = n(381585),
    h = n(597688),
    _ = n(884697),
    C = n(370039),
    v = n(937510),
    x = n(823941),
    O = n(38900),
    j = n(709999),
    y = n(794324),
    S = n(619899),
    k = n(957058),
    P = n(215023),
    E = n(981631),
    B = n(388032),
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
        type: i.z.HERO,
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
                  type: i.z.HERO,
                  categoryStoreListingId: e.storeListingId
              };
    },
    N = (e) => {
        let { isLoading: t, handleTransition: n, category: a, heroBlock: i, tab: _ } = e,
            x = (0, s.e7)([d.Z], () => d.Z.useReducedMotion),
            N = (0, s.e7)([f.Z], () => f.Z.isFocused()),
            L = (0, s.e7)([p.default], () => p.default.getCurrentUser()),
            Z = (0, k.u)(),
            A = l.useMemo(() => (null != i ? i : T(a)), [i, a]),
            { isPreviewingStaticBanner: R, bannerOverrides: F, bannerStyleOverrides: W, heroLogo: H, heroBannerStatic: D, heroBannerAnimated: M } = (0, y.hr)(A),
            V = null == F ? void 0 : F.heroBanner,
            U = l.useMemo(() => Z(A.rankedSkuIds), [t, Z, A.rankedSkuIds]),
            G = (0, C.a)()(U),
            z = (0, v.l)(G).slice(0, 4),
            q = (0, S.St)(z),
            Y = _ === P.AW.ORBS ? B.NW.string(B.t.hvVgAQ) : B.NW.formatToPlainString(B.t.wvKYCg, { category_name: A.name });
        return null != L && (t || A !== I)
            ? (0, r.jsxs)('div', {
                  className: o()(w.heroBlock, { [w.responsiveHero]: null == W ? void 0 : W.responsive }),
                  children: [
                      (0, r.jsxs)('div', {
                          className: w.banner,
                          style: (null == W ? void 0 : W.backgroundStyle) != null ? { background: W.backgroundStyle } : void 0,
                          children: [
                              null == M || x || !N || R
                                  ? (0, r.jsx)('div', {
                                        className: w.bannerImage,
                                        style: { backgroundImage: 'url('.concat(D, ')') }
                                    })
                                  : (0, r.jsx)(b.Z, {
                                        className: w.bannerVideoBackground,
                                        src: M,
                                        autoPlay: !0,
                                        loop: !0
                                    }),
                              (null == W ? void 0 : W.hideSideShadow) !== !0 &&
                                  (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)('div', {
                                              className: o()(w.bannerShadow, w.left, { [w.darker]: null == V ? void 0 : V.darker }),
                                              style: (null == V ? void 0 : V.gradientLeft) != null ? { background: null == V ? void 0 : V.gradientLeft } : void 0
                                          }),
                                          (0, r.jsx)('div', {
                                              className: o()(w.bannerShadow, w.right, { [w.darker]: null == V ? void 0 : V.darker }),
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
                                                            text: B.NW.string(B.t['h/uBCQ']),
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
                                                      _ === P.AW.ORBS ? (0, u.Z)(g.Z.getArticleURL(E.BhN.VIRTUAL_CURRENCY_LEARN_MORE)) : n('shop latest category hero', A.categorySkuId);
                                                  },
                                                  children: Y
                                              })
                                          })
                                  ]
                              }),
                              (0, r.jsx)('div', {
                                  className: o()(w.row, w.feed, { [w.feedSingleRow]: _ !== P.AW.ORBS }),
                                  children: t
                                      ? (0, r.jsx)(r.Fragment, {
                                            children: [void 0, void 0, void 0, void 0].map((e, t) => (0, r.jsx)(O.K, {}, t))
                                        })
                                      : (0, r.jsx)(r.Fragment, {
                                            children: q.map((e, t) => {
                                                let n = h.Z.getCategoryForProduct(e.skuId);
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
                                                                  j.Z,
                                                                  {
                                                                      product: e,
                                                                      category: n,
                                                                      user: L,
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
