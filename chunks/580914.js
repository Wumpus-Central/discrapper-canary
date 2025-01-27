n(47120);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(685816),
    o = n(442837),
    c = n(481060),
    d = n(607070),
    u = n(70097),
    C = n(594174),
    h = n(451478),
    p = n(381585),
    f = n(597688),
    m = n(884697),
    g = n(937510),
    b = n(823941),
    x = n(38900),
    v = n(709999),
    _ = n(957058),
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
    I = (e) => {
        var t, n, r, i;
        return null == e
            ? L
            : {
                  rankedSkuIds: null !== (t = e.heroRanking) && void 0 !== t ? t : [],
                  name: e.name,
                  unpublishedAt: e.unpublishedAt,
                  logoUrl: (0, m.uV)(null !== (r = null !== (n = e.heroLogo) && void 0 !== n ? n : e.logo) && void 0 !== r ? r : '', { size: b.n }),
                  categorySkuId: e.skuId,
                  bannerAsset: e.heroBannerAsset,
                  fallbackBannerUrl: (0, m.uV)(null !== (i = e.heroBanner) && void 0 !== i ? i : '', {
                      size: k.pv,
                      format: 'jpg'
                  }),
                  summary: e.summary,
                  type: s.z.HERO,
                  categoryStoreListingId: e.storeListingId
              };
    };
t.Z = (e) => {
    var t, n, l, s, m;
    let { isLoading: b, handleTransition: S, category: B, heroBlock: T } = e,
        y = (0, o.e7)([d.Z], () => d.Z.useReducedMotion),
        Z = (0, o.e7)([h.Z], () => h.Z.isFocused()),
        N = (0, o.e7)([C.default], () => C.default.getCurrentUser()),
        F = (0, _.u)(),
        P = i.useMemo(() => (null != T ? T : I(B)), [T, B]),
        w = i.useMemo(() => F(P.rankedSkuIds), [b, F, P.rankedSkuIds]),
        A = (0, g.l)(w).slice(0, 4),
        O = j.intl.formatToPlainString(j.t.wvKYCg, { category_name: P.name });
    if (null == N || (!b && P === L)) return null;
    let R = null != P.categorySkuId ? (0, k.ZS)(P.categorySkuId) : void 0,
        H = null !== (l = null == R ? void 0 : R.heroBanner) && void 0 !== l ? l : void 0,
        M = null !== (s = null == H ? void 0 : H.animationSource) && void 0 !== s ? s : null === (t = P.bannerAsset) || void 0 === t ? void 0 : t.animated,
        D = null !== (m = null === (n = P.bannerAsset) || void 0 === n ? void 0 : n.static) && void 0 !== m ? m : P.fallbackBannerUrl;
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
                              style: { backgroundImage: 'url('.concat(D, ')') }
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
                            b
                                ? (0, r.jsx)('div', { className: a()(E.heroHeaderBadgeLogoSummaryContainer) })
                                : (0, r.jsxs)('div', {
                                      className: a()(E.heroHeaderBadgeLogoSummaryContainer),
                                      children: [
                                          null != P.unpublishedAt &&
                                              (0, r.jsx)(c.TextBadge, {
                                                  disableColor: !0,
                                                  text: j.intl.string(j.t['h/uBCQ']),
                                                  className: E.limitedTimeBadge
                                              }),
                                          (0, r.jsxs)('div', {
                                              className: a()(E.heroLogoNameContainer),
                                              children: [
                                                  (0, r.jsx)('img', {
                                                      className: E.heroHeaderLogo,
                                                      src: P.logoUrl,
                                                      alt: P.name
                                                  }),
                                                  (0, r.jsx)(c.Text, {
                                                      variant: 'text-md/normal',
                                                      className: null != R && R.showDarkBannerText ? E.subHeaderTextDark : E.subHeaderText,
                                                      children: P.summary
                                                  })
                                              ]
                                          })
                                      ]
                                  }),
                            !b &&
                                (0, r.jsx)('div', {
                                    className: E.heroHeaderButtonContainer,
                                    children: (0, r.jsx)(c.Button, {
                                        className: E.heroHeaderButton,
                                        color: c.ButtonColors.WHITE,
                                        onClick: () => S('shop latest category hero', P.categorySkuId),
                                        children: O
                                    })
                                })
                        ]
                    }),
                    (0, r.jsx)('div', {
                        className: a()(E.row, E.feed, E.feedSingleRow),
                        children: b
                            ? (0, r.jsx)(r.Fragment, {
                                  children: [void 0, void 0, void 0, void 0].map((e, t) => (0, r.jsx)(x.K, {}, t))
                              })
                            : (0, r.jsx)(r.Fragment, {
                                  children: A.map((e, t) => {
                                      let n = f.Z.getCategoryForProduct(e.skuId);
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
