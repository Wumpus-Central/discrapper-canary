n.d(t, { Z: () => T }), n(47120);
var r = n(200651),
    l = n(192379),
    i = n(120356),
    s = n.n(i),
    a = n(685816),
    o = n(442837),
    d = n(481060),
    c = n(607070),
    u = n(70097),
    C = n(594174),
    h = n(451478),
    p = n(381585),
    m = n(597688),
    g = n(884697),
    f = n(937510),
    x = n(823941),
    _ = n(38900),
    v = n(709999),
    b = n(957058),
    k = n(215023),
    j = n(388032),
    L = n(218142);
let E = {
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
    S = (e) => {
        var t, n, r, l;
        return null == e
            ? E
            : {
                  rankedSkuIds: null !== (t = e.heroRanking) && void 0 !== t ? t : [],
                  name: e.name,
                  unpublishedAt: e.unpublishedAt,
                  logoUrl: (0, g.uV)(null !== (r = null !== (n = e.heroLogo) && void 0 !== n ? n : e.logo) && void 0 !== r ? r : '', { size: x.n }),
                  categorySkuId: e.skuId,
                  bannerAsset: e.heroBannerAsset,
                  fallbackBannerUrl: (0, g.uV)(null !== (l = e.heroBanner) && void 0 !== l ? l : '', {
                      size: k.pv,
                      format: 'jpg'
                  }),
                  summary: e.summary,
                  type: a.z.HERO,
                  categoryStoreListingId: e.storeListingId
              };
    },
    T = (e) => {
        var t, n, i, a, g;
        let { isLoading: x, handleTransition: T, category: I, heroBlock: Z } = e,
            y = (0, o.e7)([c.Z], () => c.Z.useReducedMotion),
            B = (0, o.e7)([h.Z], () => h.Z.isFocused()),
            F = (0, o.e7)([C.default], () => C.default.getCurrentUser()),
            N = (0, b.u)(),
            P = l.useMemo(() => (null != Z ? Z : S(I)), [Z, I]),
            A = l.useMemo(() => N(P.rankedSkuIds), [x, N, P.rankedSkuIds]),
            w = (0, f.l)(A).slice(0, 4),
            O = j.intl.formatToPlainString(j.t.wvKYCg, { category_name: P.name });
        if (null == F || (!x && P === E)) return null;
        let R = null != P.categorySkuId ? (0, k.ZS)(P.categorySkuId) : void 0,
            H = null !== (i = null == R ? void 0 : R.heroBanner) && void 0 !== i ? i : void 0,
            M = null !== (a = null == H ? void 0 : H.animationSource) && void 0 !== a ? a : null === (t = P.bannerAsset) || void 0 === t ? void 0 : t.animated,
            V = null !== (g = null === (n = P.bannerAsset) || void 0 === n ? void 0 : n.static) && void 0 !== g ? g : P.fallbackBannerUrl;
        return (0, r.jsxs)('div', {
            className: L.heroBlock,
            children: [
                (0, r.jsxs)('div', {
                    className: L.banner,
                    children: [
                        null != M && !y && B
                            ? (0, r.jsx)(u.Z, {
                                  className: L.bannerVideoBackground,
                                  src: M,
                                  autoPlay: !0,
                                  loop: !0
                              })
                            : (0, r.jsx)('div', {
                                  className: L.bannerImage,
                                  style: { backgroundImage: 'url('.concat(V, ')') }
                              }),
                        (0, r.jsx)('div', {
                            className: s()(L.bannerShadow, L.left, { [L.darker]: null == H ? void 0 : H.darker }),
                            style: (null == H ? void 0 : H.gradientLeft) != null ? { background: null == H ? void 0 : H.gradientLeft } : void 0
                        }),
                        (0, r.jsx)('div', {
                            className: s()(L.bannerShadow, L.right, { [L.darker]: null == H ? void 0 : H.darker }),
                            style: (null == H ? void 0 : H.gradientRight) != null ? { background: null == H ? void 0 : H.gradientRight } : void 0
                        })
                    ]
                }),
                (0, r.jsxs)('div', {
                    className: L.heroBlockContent,
                    children: [
                        (0, r.jsxs)('div', {
                            className: s()(L.heroHeaderContainer),
                            children: [
                                x
                                    ? (0, r.jsx)('div', { className: s()(L.heroHeaderBadgeLogoSummaryContainer) })
                                    : (0, r.jsxs)('div', {
                                          className: s()(L.heroHeaderBadgeLogoSummaryContainer),
                                          children: [
                                              null != P.unpublishedAt &&
                                                  (0, r.jsx)(d.IGR, {
                                                      disableColor: !0,
                                                      text: j.intl.string(j.t['h/uBCQ']),
                                                      className: L.limitedTimeBadge
                                                  }),
                                              (0, r.jsxs)('div', {
                                                  className: s()(L.heroLogoNameContainer),
                                                  children: [
                                                      (0, r.jsx)('img', {
                                                          className: L.heroHeaderLogo,
                                                          src: P.logoUrl,
                                                          alt: P.name
                                                      }),
                                                      (0, r.jsx)(d.Text, {
                                                          variant: 'text-md/normal',
                                                          className: null != R && R.showDarkBannerText ? L.subHeaderTextDark : L.subHeaderText,
                                                          children: P.summary
                                                      })
                                                  ]
                                              })
                                          ]
                                      }),
                                !x &&
                                    (0, r.jsx)('div', {
                                        className: L.heroHeaderButtonContainer,
                                        children: (0, r.jsx)(d.zxk, {
                                            className: L.heroHeaderButton,
                                            color: d.Ttl.WHITE,
                                            onClick: () => T('shop latest category hero', P.categorySkuId),
                                            children: O
                                        })
                                    })
                            ]
                        }),
                        (0, r.jsx)('div', {
                            className: s()(L.row, L.feed, L.feedSingleRow),
                            children: x
                                ? (0, r.jsx)(r.Fragment, {
                                      children: [void 0, void 0, void 0, void 0].map((e, t) => (0, r.jsx)(_.K, {}, t))
                                  })
                                : (0, r.jsx)(r.Fragment, {
                                      children: w.map((e, t) => {
                                          let n = m.Z.getCategoryForProduct(e.skuId);
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
                                                            v.Z,
                                                            {
                                                                product: e,
                                                                category: n,
                                                                user: F,
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
        });
    };
