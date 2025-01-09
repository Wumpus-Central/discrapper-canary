n(47120);
var r = n(200651),
    a = n(192379),
    i = n(120356),
    l = n.n(i),
    s = n(685816),
    o = n(442837),
    c = n(481060),
    d = n(607070),
    u = n(70097),
    m = n(594174),
    h = n(451478),
    g = n(381585),
    p = n(597688),
    f = n(884697),
    C = n(937510),
    b = n(823941),
    v = n(38900),
    x = n(709999),
    _ = n(957058),
    k = n(215023),
    I = n(388032),
    S = n(218142);
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
    j = (e) => {
        var t, n, r, a;
        return null == e
            ? E
            : {
                  rankedSkuIds: null !== (t = e.heroRanking) && void 0 !== t ? t : [],
                  name: e.name,
                  unpublishedAt: e.unpublishedAt,
                  logoUrl: (0, f.uV)(null !== (r = null !== (n = e.heroLogo) && void 0 !== n ? n : e.logo) && void 0 !== r ? r : '', { size: b.n }),
                  categorySkuId: e.skuId,
                  bannerAsset: e.heroBannerAsset,
                  fallbackBannerUrl: (0, f.uV)(null !== (a = e.heroBanner) && void 0 !== a ? a : '', {
                      size: k.pv,
                      format: 'jpg'
                  }),
                  summary: e.summary,
                  type: s.z.HERO,
                  categoryStoreListingId: e.storeListingId
              };
    };
t.Z = (e) => {
    var t, n, i, s, f;
    let { isLoading: b, handleTransition: T, category: B, heroBlock: N } = e,
        y = (0, o.e7)([d.Z], () => d.Z.useReducedMotion),
        L = (0, o.e7)([h.Z], () => h.Z.isFocused()),
        P = (0, o.e7)([m.default], () => m.default.getCurrentUser()),
        Z = (0, _.u)(),
        O = a.useMemo(() => (null != N ? N : j(B)), [N, B]),
        w = a.useMemo(() => Z(O.rankedSkuIds), [b, Z, O.rankedSkuIds]),
        A = (0, C.l)(w).slice(0, 4),
        R = I.intl.formatToPlainString(I.t.wvKYCg, { category_name: O.name });
    if (null == P || (!b && O === E)) return null;
    let F = null != O.categorySkuId ? (0, k.ZS)(O.categorySkuId) : void 0,
        H = null !== (i = null == F ? void 0 : F.heroBanner) && void 0 !== i ? i : void 0,
        D = null !== (s = null == H ? void 0 : H.animationSource) && void 0 !== s ? s : null === (t = O.bannerAsset) || void 0 === t ? void 0 : t.animated,
        V = null !== (f = null === (n = O.bannerAsset) || void 0 === n ? void 0 : n.static) && void 0 !== f ? f : O.fallbackBannerUrl;
    return (0, r.jsxs)('div', {
        className: S.heroBlock,
        children: [
            (0, r.jsxs)('div', {
                className: S.banner,
                children: [
                    null != D && !y && L
                        ? (0, r.jsx)(u.Z, {
                              className: S.bannerVideoBackground,
                              src: D,
                              autoPlay: !0,
                              loop: !0
                          })
                        : (0, r.jsx)('div', {
                              className: S.bannerImage,
                              style: { backgroundImage: 'url('.concat(V, ')') }
                          }),
                    (0, r.jsx)('div', {
                        className: l()(S.bannerShadow, S.left, { [S.darker]: null == H ? void 0 : H.darker }),
                        style: (null == H ? void 0 : H.gradientLeft) != null ? { background: null == H ? void 0 : H.gradientLeft } : void 0
                    }),
                    (0, r.jsx)('div', {
                        className: l()(S.bannerShadow, S.right, { [S.darker]: null == H ? void 0 : H.darker }),
                        style: (null == H ? void 0 : H.gradientRight) != null ? { background: null == H ? void 0 : H.gradientRight } : void 0
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: S.heroBlockContent,
                children: [
                    (0, r.jsxs)('div', {
                        className: l()(S.heroHeaderContainer),
                        children: [
                            b
                                ? (0, r.jsx)('div', { className: l()(S.heroHeaderBadgeLogoSummaryContainer) })
                                : (0, r.jsxs)('div', {
                                      className: l()(S.heroHeaderBadgeLogoSummaryContainer),
                                      children: [
                                          null != O.unpublishedAt &&
                                              (0, r.jsx)(c.TextBadge, {
                                                  disableColor: !0,
                                                  text: I.intl.string(I.t['h/uBCQ']),
                                                  className: S.limitedTimeBadge
                                              }),
                                          (0, r.jsxs)('div', {
                                              className: l()(S.heroLogoNameContainer),
                                              children: [
                                                  (0, r.jsx)('img', {
                                                      className: S.heroHeaderLogo,
                                                      src: O.logoUrl,
                                                      alt: O.name
                                                  }),
                                                  (0, r.jsx)(c.Text, {
                                                      variant: 'text-md/normal',
                                                      className: null != F && F.showDarkBannerText ? S.subHeaderTextDark : S.subHeaderText,
                                                      children: O.summary
                                                  })
                                              ]
                                          })
                                      ]
                                  }),
                            !b &&
                                (0, r.jsx)('div', {
                                    className: S.heroHeaderButtonContainer,
                                    children: (0, r.jsx)(c.Button, {
                                        className: S.heroHeaderButton,
                                        color: c.ButtonColors.WHITE,
                                        onClick: () => T('shop latest category hero', O.categorySkuId),
                                        children: R
                                    })
                                })
                        ]
                    }),
                    (0, r.jsx)('div', {
                        className: l()(S.row, S.feed, S.feedSingleRow),
                        children: b
                            ? (0, r.jsx)(r.Fragment, {
                                  children: [void 0, void 0, void 0, void 0].map((e, t) => (0, r.jsx)(v.K, {}, t))
                              })
                            : (0, r.jsx)(r.Fragment, {
                                  children: A.map((e, t) => {
                                      let n = p.Z.getCategoryForProduct(e.skuId);
                                      return null == e || null == n
                                          ? null
                                          : (0, r.jsx)(
                                                g.k0,
                                                {
                                                    newValue: {
                                                        tilePosition: t,
                                                        pageSection: 'top 4',
                                                        categoryPosition: 0
                                                    },
                                                    children: (0, r.jsx)(
                                                        x.Z,
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
