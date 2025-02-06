n.d(t, { Z: () => S }), n(47120);
var r = n(200651),
    l = n(192379),
    i = n(120356),
    a = n.n(i),
    s = n(685816),
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
    E = n(218142);
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
    T = (e) => {
        var t, n, r, l;
        return null == e
            ? L
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
                  type: s.z.HERO,
                  categoryStoreListingId: e.storeListingId
              };
    },
    S = (e) => {
        var t, n, i, s, g;
        let { isLoading: x, handleTransition: S, category: B, heroBlock: I } = e,
            y = (0, o.e7)([c.Z], () => c.Z.useReducedMotion),
            Z = (0, o.e7)([h.Z], () => h.Z.isFocused()),
            F = (0, o.e7)([C.default], () => C.default.getCurrentUser()),
            N = (0, b.u)(),
            w = l.useMemo(() => (null != I ? I : T(B)), [I, B]),
            P = l.useMemo(() => N(w.rankedSkuIds), [x, N, w.rankedSkuIds]),
            A = (0, f.l)(P).slice(0, 4),
            O = j.intl.formatToPlainString(j.t.wvKYCg, { category_name: w.name });
        if (null == F || (!x && w === L)) return null;
        let R = null != w.categorySkuId ? (0, k.ZS)(w.categorySkuId) : void 0,
            H = null !== (i = null == R ? void 0 : R.heroBanner) && void 0 !== i ? i : void 0,
            M = null !== (s = null == H ? void 0 : H.animationSource) && void 0 !== s ? s : null === (t = w.bannerAsset) || void 0 === t ? void 0 : t.animated,
            V = null !== (g = null === (n = w.bannerAsset) || void 0 === n ? void 0 : n.static) && void 0 !== g ? g : w.fallbackBannerUrl;
        return (0, r.jsxs)('div', {
            className: E.heroBlock,
            children: [
                (0, r.jsxs)('div', {
                    className: E.banner,
                    children: [
                        null != M && !y && Z
                            ? (0, r.jsx)(u.Z, {
                                  className: E.bannerVideoBackground,
                                  src: M,
                                  autoPlay: !0,
                                  loop: !0
                              })
                            : (0, r.jsx)('div', {
                                  className: E.bannerImage,
                                  style: { backgroundImage: 'url('.concat(V, ')') }
                              }),
                        (0, r.jsx)('div', {
                            className: a()(E.bannerShadow, E.left, { [E.darker]: null == H ? void 0 : H.darker }),
                            style: (null == H ? void 0 : H.gradientLeft) != null ? { background: null == H ? void 0 : H.gradientLeft } : void 0
                        }),
                        (0, r.jsx)('div', {
                            className: a()(E.bannerShadow, E.right, { [E.darker]: null == H ? void 0 : H.darker }),
                            style: (null == H ? void 0 : H.gradientRight) != null ? { background: null == H ? void 0 : H.gradientRight } : void 0
                        })
                    ]
                }),
                (0, r.jsxs)('div', {
                    className: E.heroBlockContent,
                    children: [
                        (0, r.jsxs)('div', {
                            className: a()(E.heroHeaderContainer),
                            children: [
                                x
                                    ? (0, r.jsx)('div', { className: a()(E.heroHeaderBadgeLogoSummaryContainer) })
                                    : (0, r.jsxs)('div', {
                                          className: a()(E.heroHeaderBadgeLogoSummaryContainer),
                                          children: [
                                              null != w.unpublishedAt &&
                                                  (0, r.jsx)(d.IGR, {
                                                      disableColor: !0,
                                                      text: j.intl.string(j.t['h/uBCQ']),
                                                      className: E.limitedTimeBadge
                                                  }),
                                              (0, r.jsxs)('div', {
                                                  className: a()(E.heroLogoNameContainer),
                                                  children: [
                                                      (0, r.jsx)('img', {
                                                          className: E.heroHeaderLogo,
                                                          src: w.logoUrl,
                                                          alt: w.name
                                                      }),
                                                      (0, r.jsx)(d.Text, {
                                                          variant: 'text-md/normal',
                                                          className: null != R && R.showDarkBannerText ? E.subHeaderTextDark : E.subHeaderText,
                                                          children: w.summary
                                                      })
                                                  ]
                                              })
                                          ]
                                      }),
                                !x &&
                                    (0, r.jsx)('div', {
                                        className: E.heroHeaderButtonContainer,
                                        children: (0, r.jsx)(d.zxk, {
                                            className: E.heroHeaderButton,
                                            color: d.Ttl.WHITE,
                                            onClick: () => S('shop latest category hero', w.categorySkuId),
                                            children: O
                                        })
                                    })
                            ]
                        }),
                        (0, r.jsx)('div', {
                            className: a()(E.row, E.feed, E.feedSingleRow),
                            children: x
                                ? (0, r.jsx)(r.Fragment, {
                                      children: [void 0, void 0, void 0, void 0].map((e, t) => (0, r.jsx)(_.K, {}, t))
                                  })
                                : (0, r.jsx)(r.Fragment, {
                                      children: A.map((e, t) => {
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
