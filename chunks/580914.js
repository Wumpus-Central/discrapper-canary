n.d(t, { Z: () => N }), n(47120);
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
    h = n(381585),
    m = n(597688),
    _ = n(884697),
    v = n(370039),
    C = n(937510),
    x = n(823941),
    O = n(38900),
    y = n(709999),
    j = n(794324),
    k = n(957058),
    S = n(215023),
    P = n(981631),
    E = n(388032),
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
                      size: S.pv,
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
            T = (0, s.e7)([p.default], () => p.default.getCurrentUser()),
            L = (0, k.u)(),
            Z = l.useMemo(() => (null != i ? i : B(a)), [i, a]),
            { isPreviewingStaticBanner: R, bannerOverrides: A, bannerStyleOverrides: F, heroLogo: W, heroBannerStatic: D, heroBannerAnimated: H } = (0, j.hr)(Z),
            M = null == A ? void 0 : A.heroBanner,
            V = l.useMemo(() => L(Z.rankedSkuIds), [t, L, Z.rankedSkuIds]),
            U = (0, v.a)()(V),
            G = (0, C.l)(U).slice(0, 4),
            z = _ === S.AW.ORBS ? E.NW.string(E.t.hvVgAQ) : E.NW.formatToPlainString(E.t.wvKYCg, { category_name: Z.name });
        return null != T && (t || Z !== I)
            ? (0, r.jsxs)('div', {
                  className: o()(w.heroBlock, { [w.responsiveHero]: null == F ? void 0 : F.responsive }),
                  children: [
                      (0, r.jsxs)('div', {
                          className: w.banner,
                          style: (null == F ? void 0 : F.backgroundStyle) != null ? { background: F.backgroundStyle } : void 0,
                          children: [
                              null == H || x || !N || R
                                  ? (0, r.jsx)('div', {
                                        className: w.bannerImage,
                                        style: { backgroundImage: 'url('.concat(D, ')') }
                                    })
                                  : (0, r.jsx)(b.Z, {
                                        className: w.bannerVideoBackground,
                                        src: H,
                                        autoPlay: !0,
                                        loop: !0
                                    }),
                              (0, r.jsx)('div', {
                                  className: o()(w.bannerShadow, w.left, { [w.darker]: null == M ? void 0 : M.darker }),
                                  style: (null == M ? void 0 : M.gradientLeft) != null ? { background: null == M ? void 0 : M.gradientLeft } : void 0
                              }),
                              (0, r.jsx)('div', {
                                  className: o()(w.bannerShadow, w.right, { [w.darker]: null == M ? void 0 : M.darker }),
                                  style: (null == M ? void 0 : M.gradientRight) != null ? { background: null == M ? void 0 : M.gradientRight } : void 0
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
                                                    null != Z.unpublishedAt &&
                                                        (0, r.jsx)(c.IGR, {
                                                            disableColor: !0,
                                                            text: E.NW.string(E.t['h/uBCQ']),
                                                            className: w.limitedTimeBadge
                                                        }),
                                                    (0, r.jsxs)('div', {
                                                        className: w.heroLogoNameContainer,
                                                        children: [
                                                            null != Z.logoUrl &&
                                                                (0, r.jsx)('img', {
                                                                    className: w.heroHeaderLogo,
                                                                    src: W,
                                                                    alt: Z.name
                                                                }),
                                                            null != Z.title &&
                                                                (0, r.jsx)(c.X6q, {
                                                                    variant: 'heading-xxl/bold',
                                                                    color: 'always-white',
                                                                    className: w.title,
                                                                    children: Z.title
                                                                }),
                                                            (0, r.jsx)(c.Text, {
                                                                variant: _ === S.AW.ORBS ? 'text-lg/medium' : 'text-md/normal',
                                                                className: _ === S.AW.ORBS ? w.orbsSubHeaderText : (null == A ? void 0 : A.showDarkBannerText) ? w.subHeaderTextDark : w.subHeaderText,
                                                                style: null != Z.bannerTextColor ? { color: Z.bannerTextColor } : void 0,
                                                                children: Z.summary
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
                                                      _ === S.AW.ORBS ? (0, u.Z)(g.Z.getArticleURL(P.BhN.VIRTUAL_CURRENCY_LEARN_MORE)) : n('shop latest category hero', Z.categorySkuId);
                                                  },
                                                  children: z
                                              })
                                          })
                                  ]
                              }),
                              (0, r.jsx)('div', {
                                  className: o()(w.row, w.feed, { [w.feedSingleRow]: _ !== S.AW.ORBS }),
                                  children: t
                                      ? (0, r.jsx)(r.Fragment, {
                                            children: [void 0, void 0, void 0, void 0].map((e, t) => (0, r.jsx)(O.K, {}, t))
                                        })
                                      : (0, r.jsx)(r.Fragment, {
                                            children: G.map((e, t) => {
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
                                                                  y.Z,
                                                                  {
                                                                      product: e,
                                                                      category: n,
                                                                      user: T,
                                                                      tab: _,
                                                                      isInFeedView: !0
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
