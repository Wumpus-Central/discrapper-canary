n.d(t, { Z: () => L }), n(47120);
var r = n(200651),
    l = n(192379),
    a = n(120356),
    o = n.n(a),
    s = n(685816),
    i = n(442837),
    d = n(481060),
    c = n(782568),
    u = n(607070),
    g = n(70097),
    h = n(594174),
    f = n(451478),
    m = n(63063),
    p = n(381585),
    b = n(597688),
    C = n(884697),
    _ = n(937510),
    v = n(823941),
    x = n(38900),
    k = n(709999),
    j = n(794324),
    S = n(957058),
    y = n(215023),
    O = n(981631),
    E = n(388032),
    I = n(39532);
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
    T = (e) => {
        var t, n, r, l;
        return null == e
            ? B
            : {
                  rankedSkuIds: null !== (t = e.heroRanking) && void 0 !== t ? t : [],
                  name: e.name,
                  unpublishedAt: e.unpublishedAt,
                  logoUrl: (0, C.uV)(null !== (r = null !== (n = e.heroLogo) && void 0 !== n ? n : e.logo) && void 0 !== r ? r : '', { size: v.n }),
                  categorySkuId: e.skuId,
                  bannerAsset: e.heroBannerAsset,
                  fallbackBannerUrl: (0, C.uV)(null !== (l = e.heroBanner) && void 0 !== l ? l : '', {
                      size: y.pv,
                      format: 'jpg'
                  }),
                  summary: e.summary,
                  type: s.z.HERO,
                  categoryStoreListingId: e.storeListingId
              };
    },
    L = (e) => {
        let { isLoading: t, handleTransition: n, category: a, heroBlock: s, tab: C } = e,
            v = (0, i.e7)([u.Z], () => u.Z.useReducedMotion),
            L = (0, i.e7)([f.Z], () => f.Z.isFocused()),
            N = (0, i.e7)([h.default], () => h.default.getCurrentUser()),
            w = (0, S.u)(),
            P = l.useMemo(() => (null != s ? s : T(a)), [s, a]),
            { isPreviewingStaticBanner: Z, bannerOverrides: A, bannerStyleOverrides: R, heroLogo: W, heroBannerStatic: H, heroBannerAnimated: F } = (0, j.hr)(P),
            M = null == A ? void 0 : A.heroBanner,
            V = l.useMemo(() => w(P.rankedSkuIds), [t, w, P.rankedSkuIds]),
            D = (0, _.l)(V).slice(0, 4),
            U = C === y.AW.ORBS ? E.NW.string(E.t.hvVgAQ) : E.NW.formatToPlainString(E.t.wvKYCg, { category_name: P.name });
        return null != N && (t || P !== B)
            ? (0, r.jsxs)('div', {
                  className: o()(I.heroBlock, { [I.responsiveHero]: null == R ? void 0 : R.responsive }),
                  children: [
                      (0, r.jsxs)('div', {
                          className: I.banner,
                          style: (null == R ? void 0 : R.backgroundStyle) != null ? { background: R.backgroundStyle } : void 0,
                          children: [
                              null == F || v || !L || Z
                                  ? (0, r.jsx)('div', {
                                        className: I.bannerImage,
                                        style: { backgroundImage: 'url('.concat(H, ')') }
                                    })
                                  : (0, r.jsx)(g.Z, {
                                        className: I.bannerVideoBackground,
                                        src: F,
                                        autoPlay: !0,
                                        loop: !0
                                    }),
                              (0, r.jsx)('div', {
                                  className: o()(I.bannerShadow, I.left, { [I.darker]: null == M ? void 0 : M.darker }),
                                  style: (null == M ? void 0 : M.gradientLeft) != null ? { background: null == M ? void 0 : M.gradientLeft } : void 0
                              }),
                              (0, r.jsx)('div', {
                                  className: o()(I.bannerShadow, I.right, { [I.darker]: null == M ? void 0 : M.darker }),
                                  style: (null == M ? void 0 : M.gradientRight) != null ? { background: null == M ? void 0 : M.gradientRight } : void 0
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
                                                    null != P.unpublishedAt &&
                                                        (0, r.jsx)(d.IGR, {
                                                            disableColor: !0,
                                                            text: E.NW.string(E.t['h/uBCQ']),
                                                            className: I.limitedTimeBadge
                                                        }),
                                                    (0, r.jsxs)('div', {
                                                        className: I.heroLogoNameContainer,
                                                        children: [
                                                            null != P.logoUrl &&
                                                                (0, r.jsx)('img', {
                                                                    className: I.heroHeaderLogo,
                                                                    src: W,
                                                                    alt: P.name
                                                                }),
                                                            null != P.title &&
                                                                (0, r.jsx)(d.X6q, {
                                                                    variant: 'heading-xxl/bold',
                                                                    color: 'always-white',
                                                                    className: I.title,
                                                                    children: P.title
                                                                }),
                                                            (0, r.jsx)(d.Text, {
                                                                variant: C === y.AW.ORBS ? 'text-lg/medium' : 'text-md/normal',
                                                                className: C === y.AW.ORBS ? I.orbsSubHeaderText : (null == A ? void 0 : A.showDarkBannerText) ? I.subHeaderTextDark : I.subHeaderText,
                                                                style: null != P.bannerTextColor ? { color: P.bannerTextColor } : void 0,
                                                                children: P.summary
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                      !t &&
                                          (0, r.jsx)('div', {
                                              className: I.heroHeaderButtonContainer,
                                              children: (0, r.jsx)(d.zxk, {
                                                  className: I.heroHeaderButton,
                                                  color: d.Ttl.WHITE,
                                                  onClick: () => {
                                                      C === y.AW.ORBS ? (0, c.Z)(m.Z.getArticleURL(O.BhN.VIRTUAL_CURRENCY_LEARN_MORE)) : n('shop latest category hero', P.categorySkuId);
                                                  },
                                                  children: U
                                              })
                                          })
                                  ]
                              }),
                              (0, r.jsx)('div', {
                                  className: o()(I.row, I.feed, I.feedSingleRow),
                                  children: t
                                      ? (0, r.jsx)(r.Fragment, {
                                            children: [void 0, void 0, void 0, void 0].map((e, t) => (0, r.jsx)(x.K, {}, t))
                                        })
                                      : (0, r.jsx)(r.Fragment, {
                                            children: D.map((e, t) => {
                                                let n = b.Z.getCategoryForProduct(e.skuId);
                                                return null == e || null == n
                                                    ? null
                                                    : (0, r.jsx)(
                                                          p.k0,
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
                                                                      user: N,
                                                                      tab: C,
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
