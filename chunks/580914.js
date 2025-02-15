n.d(t, { Z: () => I }), n(47120);
var l = n(200651),
    r = n(192379),
    i = n(120356),
    a = n.n(i),
    s = n(685816),
    o = n(442837),
    d = n(481060),
    c = n(782568),
    u = n(607070),
    C = n(70097),
    h = n(594174),
    m = n(451478),
    p = n(381585),
    g = n(597688),
    f = n(884697),
    x = n(937510),
    b = n(823941),
    v = n(38900),
    _ = n(709999),
    j = n(957058),
    k = n(215023),
    E = n(388032),
    L = n(472739);
let S = {
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
        var t, n, l, r;
        return null == e
            ? S
            : {
                  rankedSkuIds: null !== (t = e.heroRanking) && void 0 !== t ? t : [],
                  name: e.name,
                  unpublishedAt: e.unpublishedAt,
                  logoUrl: (0, f.uV)(null !== (l = null !== (n = e.heroLogo) && void 0 !== n ? n : e.logo) && void 0 !== l ? l : '', { size: b.n }),
                  categorySkuId: e.skuId,
                  bannerAsset: e.heroBannerAsset,
                  fallbackBannerUrl: (0, f.uV)(null !== (r = e.heroBanner) && void 0 !== r ? r : '', {
                      size: k.pv,
                      format: 'jpg'
                  }),
                  summary: e.summary,
                  type: s.z.HERO,
                  categoryStoreListingId: e.storeListingId
              };
    },
    I = (e) => {
        var t, n, i, s, f;
        let { isLoading: b, handleTransition: I, category: B, heroBlock: y, tab: Z } = e,
            N = (0, o.e7)([u.Z], () => u.Z.useReducedMotion),
            w = (0, o.e7)([m.Z], () => m.Z.isFocused()),
            P = (0, o.e7)([h.default], () => h.default.getCurrentUser()),
            F = (0, j.u)(),
            O = r.useMemo(() => (null != y ? y : T(B)), [y, B]),
            A = r.useMemo(() => F(O.rankedSkuIds), [b, F, O.rankedSkuIds]),
            R = (0, x.l)(A).slice(0, 4),
            H = Z === k.AW.ORBS ? E.intl.string(E.t.qQq91t) : E.intl.formatToPlainString(E.t.wvKYCg, { category_name: O.name });
        if (null == P || (!b && O === S)) return null;
        let M = null != O.categorySkuId ? (0, k.ZS)(O.categorySkuId) : void 0,
            V = null !== (i = null == M ? void 0 : M.heroBanner) && void 0 !== i ? i : void 0,
            D = null !== (s = null == V ? void 0 : V.animationSource) && void 0 !== s ? s : null === (t = O.bannerAsset) || void 0 === t ? void 0 : t.animated,
            W = null !== (f = null === (n = O.bannerAsset) || void 0 === n ? void 0 : n.static) && void 0 !== f ? f : O.fallbackBannerUrl;
        return (0, l.jsxs)('div', {
            className: L.heroBlock,
            children: [
                (0, l.jsxs)('div', {
                    className: L.banner,
                    children: [
                        null != D && !N && w
                            ? (0, l.jsx)(C.Z, {
                                  className: L.bannerVideoBackground,
                                  src: D,
                                  autoPlay: !0,
                                  loop: !0
                              })
                            : (0, l.jsx)('div', {
                                  className: L.bannerImage,
                                  style: { backgroundImage: 'url('.concat(W, ')') }
                              }),
                        (0, l.jsx)('div', {
                            className: a()(L.bannerShadow, L.left, { [L.darker]: null == V ? void 0 : V.darker }),
                            style: (null == V ? void 0 : V.gradientLeft) != null ? { background: null == V ? void 0 : V.gradientLeft } : void 0
                        }),
                        (0, l.jsx)('div', {
                            className: a()(L.bannerShadow, L.right, { [L.darker]: null == V ? void 0 : V.darker }),
                            style: (null == V ? void 0 : V.gradientRight) != null ? { background: null == V ? void 0 : V.gradientRight } : void 0
                        })
                    ]
                }),
                (0, l.jsxs)('div', {
                    className: L.heroBlockContent,
                    children: [
                        (0, l.jsxs)('div', {
                            className: a()(L.heroHeaderContainer),
                            children: [
                                b
                                    ? (0, l.jsx)('div', { className: a()(L.heroHeaderBadgeLogoSummaryContainer) })
                                    : (0, l.jsxs)('div', {
                                          className: a()(L.heroHeaderBadgeLogoSummaryContainer),
                                          children: [
                                              null != O.unpublishedAt &&
                                                  (0, l.jsx)(d.IGR, {
                                                      disableColor: !0,
                                                      text: E.intl.string(E.t['h/uBCQ']),
                                                      className: L.limitedTimeBadge
                                                  }),
                                              (0, l.jsxs)('div', {
                                                  className: a()(L.heroLogoNameContainer),
                                                  children: [
                                                      null != O.logoUrl &&
                                                          (0, l.jsx)('img', {
                                                              className: L.heroHeaderLogo,
                                                              src: O.logoUrl,
                                                              alt: O.name
                                                          }),
                                                      null != O.title &&
                                                          (0, l.jsx)(d.X6q, {
                                                              variant: 'heading-xxl/bold',
                                                              color: 'always-white',
                                                              className: L.title,
                                                              children: O.title
                                                          }),
                                                      (0, l.jsx)(d.Text, {
                                                          variant: Z === k.AW.ORBS ? 'text-lg/medium' : 'text-md/normal',
                                                          className: Z === k.AW.ORBS ? L.orbsSubHeaderText : null != M && M.showDarkBannerText ? L.subHeaderTextDark : L.subHeaderText,
                                                          children: O.summary
                                                      })
                                                  ]
                                              })
                                          ]
                                      }),
                                !b &&
                                    (0, l.jsx)('div', {
                                        className: L.heroHeaderButtonContainer,
                                        children: (0, l.jsx)(d.zxk, {
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
                        (0, l.jsx)('div', {
                            className: a()(L.row, L.feed, L.feedSingleRow),
                            children: b
                                ? (0, l.jsx)(l.Fragment, {
                                      children: [void 0, void 0, void 0, void 0].map((e, t) => (0, l.jsx)(v.K, {}, t))
                                  })
                                : (0, l.jsx)(l.Fragment, {
                                      children: R.map((e, t) => {
                                          let n = g.Z.getCategoryForProduct(e.skuId);
                                          return null == e || null == n
                                              ? null
                                              : (0, l.jsx)(
                                                    p.k0,
                                                    {
                                                        newValue: {
                                                            tilePosition: t,
                                                            pageSection: 'top 4',
                                                            categoryPosition: 0
                                                        },
                                                        children: (0, l.jsx)(
                                                            _.Z,
                                                            {
                                                                product: e,
                                                                category: n,
                                                                user: P,
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
