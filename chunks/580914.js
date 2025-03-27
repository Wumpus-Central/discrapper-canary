n.d(t, { Z: () => N }), n(47120);
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
    _ = n(370039),
    v = n(937510),
    x = n(823941),
    k = n(38900),
    j = n(709999),
    S = n(794324),
    y = n(957058),
    O = n(215023),
    E = n(981631),
    I = n(388032),
    B = n(39532);
let T = {
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
            ? T
            : {
                  rankedSkuIds: null !== (t = e.heroRanking) && void 0 !== t ? t : [],
                  name: e.name,
                  unpublishedAt: e.unpublishedAt,
                  logoUrl: (0, C.uV)(null !== (r = null !== (n = e.heroLogo) && void 0 !== n ? n : e.logo) && void 0 !== r ? r : '', { size: x.n }),
                  categorySkuId: e.skuId,
                  bannerAsset: e.heroBannerAsset,
                  fallbackBannerUrl: (0, C.uV)(null !== (l = e.heroBanner) && void 0 !== l ? l : '', {
                      size: O.pv,
                      format: 'jpg'
                  }),
                  summary: e.summary,
                  type: s.z.HERO,
                  categoryStoreListingId: e.storeListingId
              };
    },
    N = (e) => {
        let { isLoading: t, handleTransition: n, category: a, heroBlock: s, tab: C } = e,
            x = (0, i.e7)([u.Z], () => u.Z.useReducedMotion),
            N = (0, i.e7)([f.Z], () => f.Z.isFocused()),
            P = (0, i.e7)([h.default], () => h.default.getCurrentUser()),
            w = (0, y.u)(),
            Z = l.useMemo(() => (null != s ? s : L(a)), [s, a]),
            { isPreviewingStaticBanner: A, bannerOverrides: R, bannerStyleOverrides: W, heroLogo: H, heroBannerStatic: F, heroBannerAnimated: M } = (0, S.hr)(Z),
            V = null == R ? void 0 : R.heroBanner,
            D = l.useMemo(() => w(Z.rankedSkuIds), [t, w, Z.rankedSkuIds]),
            U = (0, _.a)()(D),
            z = (0, v.l)(U).slice(0, 4),
            G = C === O.AW.ORBS ? I.NW.string(I.t.hvVgAQ) : I.NW.formatToPlainString(I.t.wvKYCg, { category_name: Z.name });
        return null != P && (t || Z !== T)
            ? (0, r.jsxs)('div', {
                  className: o()(B.heroBlock, { [B.responsiveHero]: null == W ? void 0 : W.responsive }),
                  children: [
                      (0, r.jsxs)('div', {
                          className: B.banner,
                          style: (null == W ? void 0 : W.backgroundStyle) != null ? { background: W.backgroundStyle } : void 0,
                          children: [
                              null == M || x || !N || A
                                  ? (0, r.jsx)('div', {
                                        className: B.bannerImage,
                                        style: { backgroundImage: 'url('.concat(F, ')') }
                                    })
                                  : (0, r.jsx)(g.Z, {
                                        className: B.bannerVideoBackground,
                                        src: M,
                                        autoPlay: !0,
                                        loop: !0
                                    }),
                              (0, r.jsx)('div', {
                                  className: o()(B.bannerShadow, B.left, { [B.darker]: null == V ? void 0 : V.darker }),
                                  style: (null == V ? void 0 : V.gradientLeft) != null ? { background: null == V ? void 0 : V.gradientLeft } : void 0
                              }),
                              (0, r.jsx)('div', {
                                  className: o()(B.bannerShadow, B.right, { [B.darker]: null == V ? void 0 : V.darker }),
                                  style: (null == V ? void 0 : V.gradientRight) != null ? { background: null == V ? void 0 : V.gradientRight } : void 0
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
                                                        (0, r.jsx)(d.IGR, {
                                                            disableColor: !0,
                                                            text: I.NW.string(I.t['h/uBCQ']),
                                                            className: B.limitedTimeBadge
                                                        }),
                                                    (0, r.jsxs)('div', {
                                                        className: B.heroLogoNameContainer,
                                                        children: [
                                                            null != Z.logoUrl &&
                                                                (0, r.jsx)('img', {
                                                                    className: B.heroHeaderLogo,
                                                                    src: H,
                                                                    alt: Z.name
                                                                }),
                                                            null != Z.title &&
                                                                (0, r.jsx)(d.X6q, {
                                                                    variant: 'heading-xxl/bold',
                                                                    color: 'always-white',
                                                                    className: B.title,
                                                                    children: Z.title
                                                                }),
                                                            (0, r.jsx)(d.Text, {
                                                                variant: C === O.AW.ORBS ? 'text-lg/medium' : 'text-md/normal',
                                                                className: C === O.AW.ORBS ? B.orbsSubHeaderText : (null == R ? void 0 : R.showDarkBannerText) ? B.subHeaderTextDark : B.subHeaderText,
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
                                              children: (0, r.jsx)(d.zxk, {
                                                  className: B.heroHeaderButton,
                                                  color: d.Ttl.WHITE,
                                                  onClick: () => {
                                                      C === O.AW.ORBS ? (0, c.Z)(m.Z.getArticleURL(E.BhN.VIRTUAL_CURRENCY_LEARN_MORE)) : n('shop latest category hero', Z.categorySkuId);
                                                  },
                                                  children: G
                                              })
                                          })
                                  ]
                              }),
                              (0, r.jsx)('div', {
                                  className: o()(B.row, B.feed, B.feedSingleRow),
                                  children: t
                                      ? (0, r.jsx)(r.Fragment, {
                                            children: [void 0, void 0, void 0, void 0].map((e, t) => (0, r.jsx)(k.K, {}, t))
                                        })
                                      : (0, r.jsx)(r.Fragment, {
                                            children: z.map((e, t) => {
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
                                                                  j.Z,
                                                                  {
                                                                      product: e,
                                                                      category: n,
                                                                      user: P,
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
