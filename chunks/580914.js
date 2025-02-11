n.d(t, { Z: () => I }), n(47120);
var r = n(200651),
    l = n(192379),
    i = n(120356),
    s = n.n(i),
    a = n(685816),
    o = n(442837),
    d = n(481060),
    c = n(782568),
    u = n(607070),
    C = n(70097),
    h = n(594174),
    p = n(451478),
    m = n(381585),
    f = n(597688),
    g = n(884697),
    x = n(937510),
    b = n(823941),
    _ = n(38900),
    v = n(709999),
    j = n(957058),
    k = n(215023),
    E = n(388032),
    L = n(957726);
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
    T = (e) => {
        var t, n, r, l;
        return null == e
            ? S
            : {
                  rankedSkuIds: null !== (t = e.heroRanking) && void 0 !== t ? t : [],
                  name: e.name,
                  unpublishedAt: e.unpublishedAt,
                  logoUrl: (0, g.uV)(null !== (r = null !== (n = e.heroLogo) && void 0 !== n ? n : e.logo) && void 0 !== r ? r : '', { size: b.n }),
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
    I = (e) => {
        var t, n, i, a, g;
        let { isLoading: b, handleTransition: I, category: y, heroBlock: B, tab: Z } = e,
            w = (0, o.e7)([u.Z], () => u.Z.useReducedMotion),
            N = (0, o.e7)([p.Z], () => p.Z.isFocused()),
            F = (0, o.e7)([h.default], () => h.default.getCurrentUser()),
            P = (0, j.u)(),
            O = l.useMemo(() => (null != B ? B : T(y)), [B, y]),
            A = l.useMemo(() => P(O.rankedSkuIds), [b, P, O.rankedSkuIds]),
            R = (0, x.l)(A).slice(0, 4),
            H = Z === k.AW.ORBS ? E.intl.string(E.t.qQq91t) : E.intl.formatToPlainString(E.t.wvKYCg, { category_name: O.name });
        if (null == F || (!b && O === S)) return null;
        let M = null != O.categorySkuId ? (0, k.ZS)(O.categorySkuId) : void 0,
            V = null !== (i = null == M ? void 0 : M.heroBanner) && void 0 !== i ? i : void 0,
            W = null !== (a = null == V ? void 0 : V.animationSource) && void 0 !== a ? a : null === (t = O.bannerAsset) || void 0 === t ? void 0 : t.animated,
            D = null !== (g = null === (n = O.bannerAsset) || void 0 === n ? void 0 : n.static) && void 0 !== g ? g : O.fallbackBannerUrl;
        return (0, r.jsxs)('div', {
            className: L.heroBlock,
            children: [
                (0, r.jsxs)('div', {
                    className: L.banner,
                    children: [
                        null != W && !w && N
                            ? (0, r.jsx)(C.Z, {
                                  className: L.bannerVideoBackground,
                                  src: W,
                                  autoPlay: !0,
                                  loop: !0
                              })
                            : (0, r.jsx)('div', {
                                  className: L.bannerImage,
                                  style: { backgroundImage: 'url('.concat(D, ')') }
                              }),
                        (0, r.jsx)('div', {
                            className: s()(L.bannerShadow, L.left, { [L.darker]: null == V ? void 0 : V.darker }),
                            style: (null == V ? void 0 : V.gradientLeft) != null ? { background: null == V ? void 0 : V.gradientLeft } : void 0
                        }),
                        (0, r.jsx)('div', {
                            className: s()(L.bannerShadow, L.right, { [L.darker]: null == V ? void 0 : V.darker }),
                            style: (null == V ? void 0 : V.gradientRight) != null ? { background: null == V ? void 0 : V.gradientRight } : void 0
                        })
                    ]
                }),
                (0, r.jsxs)('div', {
                    className: L.heroBlockContent,
                    children: [
                        (0, r.jsxs)('div', {
                            className: s()(L.heroHeaderContainer),
                            children: [
                                b
                                    ? (0, r.jsx)('div', { className: s()(L.heroHeaderBadgeLogoSummaryContainer) })
                                    : (0, r.jsxs)('div', {
                                          className: s()(L.heroHeaderBadgeLogoSummaryContainer),
                                          children: [
                                              null != O.unpublishedAt &&
                                                  (0, r.jsx)(d.IGR, {
                                                      disableColor: !0,
                                                      text: E.intl.string(E.t['h/uBCQ']),
                                                      className: L.limitedTimeBadge
                                                  }),
                                              (0, r.jsxs)('div', {
                                                  className: s()(L.heroLogoNameContainer),
                                                  children: [
                                                      null != O.logoUrl &&
                                                          (0, r.jsx)('img', {
                                                              className: L.heroHeaderLogo,
                                                              src: O.logoUrl,
                                                              alt: O.name
                                                          }),
                                                      null != O.title &&
                                                          (0, r.jsx)(d.X6q, {
                                                              variant: 'heading-xxl/bold',
                                                              color: 'always-white',
                                                              className: L.title,
                                                              children: O.title
                                                          }),
                                                      (0, r.jsx)(d.Text, {
                                                          variant: Z === k.AW.ORBS ? 'text-lg/medium' : 'text-md/normal',
                                                          className: Z === k.AW.ORBS ? L.orbsSubHeaderText : null != M && M.showDarkBannerText ? L.subHeaderTextDark : L.subHeaderText,
                                                          children: O.summary
                                                      })
                                                  ]
                                              })
                                          ]
                                      }),
                                !b &&
                                    (0, r.jsx)('div', {
                                        className: L.heroHeaderButtonContainer,
                                        children: (0, r.jsx)(d.zxk, {
                                            className: L.heroHeaderButton,
                                            color: d.Ttl.WHITE,
                                            onClick: () => {
                                                Z === k.AW.ORBS ? (0, c.Z)('https://support.discord.com/') : I('shop latest category hero', O.categorySkuId);
                                            },
                                            children: H
                                        })
                                    })
                            ]
                        }),
                        (0, r.jsx)('div', {
                            className: s()(L.row, L.feed, L.feedSingleRow),
                            children: b
                                ? (0, r.jsx)(r.Fragment, {
                                      children: [void 0, void 0, void 0, void 0].map((e, t) => (0, r.jsx)(_.K, {}, t))
                                  })
                                : (0, r.jsx)(r.Fragment, {
                                      children: R.map((e, t) => {
                                          let n = f.Z.getCategoryForProduct(e.skuId);
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
