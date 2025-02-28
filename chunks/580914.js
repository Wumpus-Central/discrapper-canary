r.d(t, { Z: () => L }), r(47120);
var n = r(200651),
    l = r(192379),
    i = r(120356),
    o = r.n(i),
    a = r(685816),
    s = r(442837),
    c = r(481060),
    d = r(782568),
    u = r(607070),
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
    _ = r(619899),
    y = r(281598),
    O = r(957058),
    k = r(215023),
    P = r(388032),
    S = r(39532);
let w = {
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
    E = (e) => {
        var t, r, n, l;
        return null == e
            ? w
            : {
                  rankedSkuIds: null !== (t = e.heroRanking) && void 0 !== t ? t : [],
                  name: e.name,
                  unpublishedAt: e.unpublishedAt,
                  logoUrl: (0, C.uV)(null !== (n = null !== (r = e.heroLogo) && void 0 !== r ? r : e.logo) && void 0 !== n ? n : '', { size: v.n }),
                  categorySkuId: e.skuId,
                  bannerAsset: e.heroBannerAsset,
                  fallbackBannerUrl: (0, C.uV)(null !== (l = e.heroBanner) && void 0 !== l ? l : '', {
                      size: k.pv,
                      format: 'jpg'
                  }),
                  summary: e.summary,
                  type: a.z.HERO,
                  categoryStoreListingId: e.storeListingId
              };
    },
    L = (e) => {
        var t, r, i, a, C, v, L, I, N, T, B;
        let { isLoading: Z, handleTransition: F, category: A, heroBlock: R, tab: W } = e,
            D = (0, s.e7)([u.Z], () => u.Z.useReducedMotion),
            H = (0, s.e7)([b.Z], () => b.Z.isFocused()),
            M = (0, s.e7)([f.default], () => f.default.getCurrentUser()),
            { getPreviewableAssetSrc: V } = (0, _.N)(),
            U = (0, O.u)(),
            G = l.useMemo(() => (null != R ? R : E(A)), [R, A]),
            z = l.useMemo(() => U(G.rankedSkuIds), [Z, U, G.rankedSkuIds]),
            q = (0, g.l)(z).slice(0, 4),
            K = W === k.AW.ORBS ? P.NW.string(P.t.qQq91t) : P.NW.formatToPlainString(P.t.wvKYCg, { category_name: G.name });
        if (null == M || (!Z && G === w)) return null;
        let $ = null !== (v = null === (t = V(y.Fr.HERO_LOGO)) || void 0 === t ? void 0 : t.src) && void 0 !== v ? v : G.logoUrl,
            J = null != G.categorySkuId ? (0, k.ZS)(G.categorySkuId) : void 0,
            X = null !== (L = null == J ? void 0 : J.heroBanner) && void 0 !== L ? L : void 0,
            Y = null !== (N = null !== (I = null === (r = V(y.Fr.HERO_BANNER_ANIMATED)) || void 0 === r ? void 0 : r.src) && void 0 !== I ? I : null == X ? void 0 : X.animationSource) && void 0 !== N ? N : null === (i = G.bannerAsset) || void 0 === i ? void 0 : i.animated,
            Q = null !== (B = null !== (T = null === (a = V(y.Fr.HERO_BANNER)) || void 0 === a ? void 0 : a.src) && void 0 !== T ? T : null === (C = G.bannerAsset) || void 0 === C ? void 0 : C.static) && void 0 !== B ? B : G.fallbackBannerUrl;
        return (0, n.jsxs)('div', {
            className: S.heroBlock,
            children: [
                (0, n.jsxs)('div', {
                    className: S.banner,
                    children: [
                        null != Y && !D && H
                            ? (0, n.jsx)(p.Z, {
                                  className: S.bannerVideoBackground,
                                  src: Y,
                                  autoPlay: !0,
                                  loop: !0
                              })
                            : (0, n.jsx)('div', {
                                  className: S.bannerImage,
                                  style: { backgroundImage: 'url('.concat(Q, ')') }
                              }),
                        (0, n.jsx)('div', {
                            className: o()(S.bannerShadow, S.left, { [S.darker]: null == X ? void 0 : X.darker }),
                            style: (null == X ? void 0 : X.gradientLeft) != null ? { background: null == X ? void 0 : X.gradientLeft } : void 0
                        }),
                        (0, n.jsx)('div', {
                            className: o()(S.bannerShadow, S.right, { [S.darker]: null == X ? void 0 : X.darker }),
                            style: (null == X ? void 0 : X.gradientRight) != null ? { background: null == X ? void 0 : X.gradientRight } : void 0
                        })
                    ]
                }),
                (0, n.jsxs)('div', {
                    className: S.heroBlockContent,
                    children: [
                        (0, n.jsxs)('div', {
                            className: o()(S.heroHeaderContainer),
                            children: [
                                Z
                                    ? (0, n.jsx)('div', { className: o()(S.heroHeaderBadgeLogoSummaryContainer) })
                                    : (0, n.jsxs)('div', {
                                          className: o()(S.heroHeaderBadgeLogoSummaryContainer),
                                          children: [
                                              null != G.unpublishedAt &&
                                                  (0, n.jsx)(c.IGR, {
                                                      disableColor: !0,
                                                      text: P.NW.string(P.t['h/uBCQ']),
                                                      className: S.limitedTimeBadge
                                                  }),
                                              (0, n.jsxs)('div', {
                                                  className: o()(S.heroLogoNameContainer),
                                                  children: [
                                                      null != G.logoUrl &&
                                                          (0, n.jsx)('img', {
                                                              className: S.heroHeaderLogo,
                                                              src: $,
                                                              alt: G.name
                                                          }),
                                                      null != G.title &&
                                                          (0, n.jsx)(c.X6q, {
                                                              variant: 'heading-xxl/bold',
                                                              color: 'always-white',
                                                              className: S.title,
                                                              children: G.title
                                                          }),
                                                      (0, n.jsx)(c.Text, {
                                                          variant: W === k.AW.ORBS ? 'text-lg/medium' : 'text-md/normal',
                                                          className: W === k.AW.ORBS ? S.orbsSubHeaderText : null != J && J.showDarkBannerText ? S.subHeaderTextDark : S.subHeaderText,
                                                          children: G.summary
                                                      })
                                                  ]
                                              })
                                          ]
                                      }),
                                !Z &&
                                    (0, n.jsx)('div', {
                                        className: S.heroHeaderButtonContainer,
                                        children: (0, n.jsx)(c.zxk, {
                                            className: S.heroHeaderButton,
                                            color: c.Ttl.WHITE,
                                            onClick: () => {
                                                W === k.AW.ORBS ? (0, d.Z)('https://support.discord.com/') : F('shop latest category hero', G.categorySkuId);
                                            },
                                            children: K
                                        })
                                    })
                            ]
                        }),
                        (0, n.jsx)('div', {
                            className: o()(S.row, S.feed, S.feedSingleRow),
                            children: Z
                                ? (0, n.jsx)(n.Fragment, {
                                      children: [void 0, void 0, void 0, void 0].map((e, t) => (0, n.jsx)(x.K, {}, t))
                                  })
                                : (0, n.jsx)(n.Fragment, {
                                      children: q.map((e, t) => {
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
                                                                user: M,
                                                                tab: W,
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
