r.d(t, { Z: () => E }), r(47120);
var n = r(200651),
    l = r(192379),
    i = r(120356),
    o = r.n(i),
    a = r(685816),
    s = r(442837),
    c = r(481060),
    u = r(782568),
    d = r(607070),
    p = r(70097),
    f = r(594174),
    b = r(451478),
    h = r(381585),
    m = r(597688),
    C = r(884697),
    g = r(937510),
    v = r(823941),
    x = r(38900),
    j = r(709999),
    _ = r(794324),
    y = r(957058),
    O = r(215023),
    k = r(388032),
    P = r(39532);
let S = {
        rankedSkuIds: [],
        name: '',
        unpublishedAt: void 0,
        logoUrl: '',
        categorySkuId: '',
        bannerAsset: void 0,
        fallbackBannerUrl: '',
        summary: '',
        type: a.z.HERO,
        categoryStoreListingId: ''
    },
    w = (e) => {
        var t, r, n, l;
        return null == e
            ? S
            : {
                  rankedSkuIds: null !== (t = e.heroRanking) && void 0 !== t ? t : [],
                  name: e.name,
                  unpublishedAt: e.unpublishedAt,
                  logoUrl: (0, C.uV)(null !== (n = null !== (r = e.heroLogo) && void 0 !== r ? r : e.logo) && void 0 !== n ? n : '', { size: v.n }),
                  categorySkuId: e.skuId,
                  bannerAsset: e.heroBannerAsset,
                  fallbackBannerUrl: (0, C.uV)(null !== (l = e.heroBanner) && void 0 !== l ? l : '', {
                      size: O.pv,
                      format: 'jpg'
                  }),
                  summary: e.summary,
                  type: a.z.HERO,
                  categoryStoreListingId: e.storeListingId
              };
    },
    E = (e) => {
        let { isLoading: t, handleTransition: r, category: i, heroBlock: a, tab: C } = e,
            v = (0, s.e7)([d.Z], () => d.Z.useReducedMotion),
            E = (0, s.e7)([b.Z], () => b.Z.isFocused()),
            L = (0, s.e7)([f.default], () => f.default.getCurrentUser()),
            I = (0, y.u)(),
            N = l.useMemo(() => (null != a ? a : w(i)), [a, i]),
            { bannerOverride: T, heroLogo: B, heroBannerStatic: Z, heroBannerAnimated: F } = (0, _.h)(N),
            A = null == T ? void 0 : T.heroBanner,
            R = l.useMemo(() => I(N.rankedSkuIds), [t, I, N.rankedSkuIds]),
            W = (0, g.l)(R).slice(0, 4),
            D = C === O.AW.ORBS ? k.NW.string(k.t.qQq91t) : k.NW.formatToPlainString(k.t.wvKYCg, { category_name: N.name });
        return null != L && (t || N !== S)
            ? (0, n.jsxs)('div', {
                  className: P.heroBlock,
                  children: [
                      (0, n.jsxs)('div', {
                          className: P.banner,
                          children: [
                              null != F && !v && E
                                  ? (0, n.jsx)(p.Z, {
                                        className: P.bannerVideoBackground,
                                        src: F,
                                        autoPlay: !0,
                                        loop: !0
                                    })
                                  : (0, n.jsx)('div', {
                                        className: P.bannerImage,
                                        style: { backgroundImage: 'url('.concat(Z, ')') }
                                    }),
                              (0, n.jsx)('div', {
                                  className: o()(P.bannerShadow, P.left, { [P.darker]: null == A ? void 0 : A.darker }),
                                  style: (null == A ? void 0 : A.gradientLeft) != null ? { background: null == A ? void 0 : A.gradientLeft } : void 0
                              }),
                              (0, n.jsx)('div', {
                                  className: o()(P.bannerShadow, P.right, { [P.darker]: null == A ? void 0 : A.darker }),
                                  style: (null == A ? void 0 : A.gradientRight) != null ? { background: null == A ? void 0 : A.gradientRight } : void 0
                              })
                          ]
                      }),
                      (0, n.jsxs)('div', {
                          className: P.heroBlockContent,
                          children: [
                              (0, n.jsxs)('div', {
                                  className: o()(P.heroHeaderContainer),
                                  children: [
                                      t
                                          ? (0, n.jsx)('div', { className: o()(P.heroHeaderBadgeLogoSummaryContainer) })
                                          : (0, n.jsxs)('div', {
                                                className: o()(P.heroHeaderBadgeLogoSummaryContainer),
                                                children: [
                                                    null != N.unpublishedAt &&
                                                        (0, n.jsx)(c.IGR, {
                                                            disableColor: !0,
                                                            text: k.NW.string(k.t['h/uBCQ']),
                                                            className: P.limitedTimeBadge
                                                        }),
                                                    (0, n.jsxs)('div', {
                                                        className: o()(P.heroLogoNameContainer),
                                                        children: [
                                                            null != N.logoUrl &&
                                                                (0, n.jsx)('img', {
                                                                    className: P.heroHeaderLogo,
                                                                    src: B,
                                                                    alt: N.name
                                                                }),
                                                            null != N.title &&
                                                                (0, n.jsx)(c.X6q, {
                                                                    variant: 'heading-xxl/bold',
                                                                    color: 'always-white',
                                                                    className: P.title,
                                                                    children: N.title
                                                                }),
                                                            (0, n.jsx)(c.Text, {
                                                                variant: C === O.AW.ORBS ? 'text-lg/medium' : 'text-md/normal',
                                                                className: C === O.AW.ORBS ? P.orbsSubHeaderText : (null == T ? void 0 : T.showDarkBannerText) ? P.subHeaderTextDark : P.subHeaderText,
                                                                children: N.summary
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                      !t &&
                                          (0, n.jsx)('div', {
                                              className: P.heroHeaderButtonContainer,
                                              children: (0, n.jsx)(c.zxk, {
                                                  className: P.heroHeaderButton,
                                                  color: c.Ttl.WHITE,
                                                  onClick: () => {
                                                      C === O.AW.ORBS ? (0, u.Z)('https://support.discord.com/') : r('shop latest category hero', N.categorySkuId);
                                                  },
                                                  children: D
                                              })
                                          })
                                  ]
                              }),
                              (0, n.jsx)('div', {
                                  className: o()(P.row, P.feed, P.feedSingleRow),
                                  children: t
                                      ? (0, n.jsx)(n.Fragment, {
                                            children: [void 0, void 0, void 0, void 0].map((e, t) => (0, n.jsx)(x.K, {}, t))
                                        })
                                      : (0, n.jsx)(n.Fragment, {
                                            children: W.map((e, t) => {
                                                let r = m.Z.getCategoryForProduct(e.skuId);
                                                return null == e || null == r
                                                    ? null
                                                    : (0, n.jsx)(
                                                          h.k0,
                                                          {
                                                              newValue: {
                                                                  tilePosition: t,
                                                                  pageSection: 'top 4',
                                                                  categoryPosition: 0
                                                              },
                                                              children: (0, n.jsx)(
                                                                  j.Z,
                                                                  {
                                                                      product: e,
                                                                      category: r,
                                                                      user: L,
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
