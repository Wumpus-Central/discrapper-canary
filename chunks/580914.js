n.d(t, { Z: () => B }), n(47120);
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
    b = n(709999),
    v = n(957058),
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
        type: s.z.HERO,
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
                  type: s.z.HERO,
                  categoryStoreListingId: e.storeListingId
              };
    },
    B = (e) => {
        var t, n, i, s, g;
        let { isLoading: x, handleTransition: B, category: T, heroBlock: I, tab: y } = e,
            Z = (0, o.e7)([c.Z], () => c.Z.useReducedMotion),
            F = (0, o.e7)([h.Z], () => h.Z.isFocused()),
            N = (0, o.e7)([C.default], () => C.default.getCurrentUser()),
            w = (0, v.u)(),
            P = l.useMemo(() => (null != I ? I : S(T)), [I, T]),
            A = l.useMemo(() => w(P.rankedSkuIds), [x, w, P.rankedSkuIds]),
            O = (0, f.l)(A).slice(0, 4),
            R = y === k.AW.ORBS ? j.intl.string(j.t.qQq91t) : j.intl.formatToPlainString(j.t.wvKYCg, { category_name: P.name });
        if (null == N || (!x && P === E)) return null;
        let H = null != P.categorySkuId ? (0, k.ZS)(P.categorySkuId) : void 0,
            M = null !== (i = null == H ? void 0 : H.heroBanner) && void 0 !== i ? i : void 0,
            V = null !== (s = null == M ? void 0 : M.animationSource) && void 0 !== s ? s : null === (t = P.bannerAsset) || void 0 === t ? void 0 : t.animated,
            D = null !== (g = null === (n = P.bannerAsset) || void 0 === n ? void 0 : n.static) && void 0 !== g ? g : P.fallbackBannerUrl;
        return (0, r.jsxs)('div', {
            className: L.heroBlock,
            children: [
                (0, r.jsxs)('div', {
                    className: L.banner,
                    children: [
                        null != V && !Z && F
                            ? (0, r.jsx)(u.Z, {
                                  className: L.bannerVideoBackground,
                                  src: V,
                                  autoPlay: !0,
                                  loop: !0
                              })
                            : (0, r.jsx)('div', {
                                  className: L.bannerImage,
                                  style: { backgroundImage: 'url('.concat(D, ')') }
                              }),
                        (0, r.jsx)('div', {
                            className: a()(L.bannerShadow, L.left, { [L.darker]: null == M ? void 0 : M.darker }),
                            style: (null == M ? void 0 : M.gradientLeft) != null ? { background: null == M ? void 0 : M.gradientLeft } : void 0
                        }),
                        (0, r.jsx)('div', {
                            className: a()(L.bannerShadow, L.right, { [L.darker]: null == M ? void 0 : M.darker }),
                            style: (null == M ? void 0 : M.gradientRight) != null ? { background: null == M ? void 0 : M.gradientRight } : void 0
                        })
                    ]
                }),
                (0, r.jsxs)('div', {
                    className: L.heroBlockContent,
                    children: [
                        (0, r.jsxs)('div', {
                            className: a()(L.heroHeaderContainer),
                            children: [
                                x
                                    ? (0, r.jsx)('div', { className: a()(L.heroHeaderBadgeLogoSummaryContainer) })
                                    : (0, r.jsxs)('div', {
                                          className: a()(L.heroHeaderBadgeLogoSummaryContainer),
                                          children: [
                                              null != P.unpublishedAt &&
                                                  (0, r.jsx)(d.IGR, {
                                                      disableColor: !0,
                                                      text: j.intl.string(j.t['h/uBCQ']),
                                                      className: L.limitedTimeBadge
                                                  }),
                                              (0, r.jsxs)('div', {
                                                  className: a()(L.heroLogoNameContainer),
                                                  children: [
                                                      null != P.logoUrl &&
                                                          (0, r.jsx)('img', {
                                                              className: L.heroHeaderLogo,
                                                              src: P.logoUrl,
                                                              alt: P.name
                                                          }),
                                                      null != P.title &&
                                                          (0, r.jsx)(d.X6q, {
                                                              variant: 'heading-xxl/bold',
                                                              color: 'header-primary',
                                                              className: L.title,
                                                              children: P.title
                                                          }),
                                                      (0, r.jsx)(d.Text, {
                                                          variant: y === k.AW.ORBS ? 'text-lg/medium' : 'text-md/normal',
                                                          className: y === k.AW.ORBS ? L.orbsSubHeaderText : null != H && H.showDarkBannerText ? L.subHeaderTextDark : L.subHeaderText,
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
                                            onClick: () => B('shop latest category hero', P.categorySkuId),
                                            children: R
                                        })
                                    })
                            ]
                        }),
                        (0, r.jsx)('div', {
                            className: a()(L.row, L.feed, L.feedSingleRow),
                            children: x
                                ? (0, r.jsx)(r.Fragment, {
                                      children: [void 0, void 0, void 0, void 0].map((e, t) => (0, r.jsx)(_.K, {}, t))
                                  })
                                : (0, r.jsx)(r.Fragment, {
                                      children: O.map((e, t) => {
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
                                                            b.Z,
                                                            {
                                                                product: e,
                                                                category: n,
                                                                user: N,
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
