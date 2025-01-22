n(47120), n(653041);
var r = n(200651),
    a = n(192379),
    i = n(120356),
    l = n.n(i),
    s = n(180650),
    o = n(685816),
    c = n(442837),
    d = n(481060),
    u = n(594174),
    m = n(960048),
    h = n(597688),
    g = n(606414),
    p = n(67696),
    f = n(744112),
    C = n(223143),
    b = n(364111),
    v = n(752053),
    x = n(81136),
    _ = n(953655),
    k = n(548685),
    I = n(580914),
    S = n(215023),
    E = n(388032),
    j = n(218142);
let T = (e) => {
    let { handleTransition: t, numVisibleItems: n, isFetchingCategories: i } = e,
        { noCache: l, includeUnpublished: s } = (0, x.Z)(),
        {
            isFetchingShopHome: c,
            fetchShopHomeError: d,
            shopBlocks: u,
            refreshShopHome: m
        } = (0, b.E)({
            noCache: l,
            includeUnpublished: s,
            includeBundles: !0
        }),
        h = a.useCallback(() => {
            m();
        }, [m]);
    return null != d
        ? (0, r.jsx)(v.Z, {
              onRetry: h,
              errorOrigin: v.i.SHOP_PAGE,
              errorMessage: d.message
          })
        : c || 0 === u.length
          ? (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(I.Z, {
                        isLoading: c,
                        handleTransition: t
                    }),
                    (0, r.jsx)(_.Z, {
                        isLoading: c,
                        handleTransition: t,
                        categories: []
                    }),
                    (0, r.jsx)(k.Z, {
                        isLoading: c,
                        handleTransition: t,
                        numVisibleItems: n,
                        rankedSkuIds: []
                    })
                ]
            })
          : (0, r.jsxs)(r.Fragment, {
                children: [
                    u.map((e, a) => {
                        if (null == e) return null;
                        switch (e.type) {
                            case o.z.HERO:
                                return (0, r.jsx)(
                                    I.Z,
                                    {
                                        isLoading: c,
                                        handleTransition: t,
                                        heroBlock: e
                                    },
                                    a
                                );
                            case o.z.FEATURED:
                                return (0, r.jsx)(
                                    _.Z,
                                    {
                                        isLoading: c,
                                        handleTransition: t,
                                        featuredBlockRecord: e
                                    },
                                    a
                                );
                            case o.z.FEED:
                                return (0, r.jsx)(
                                    k.Z,
                                    {
                                        isLoading: c || i,
                                        handleTransition: t,
                                        numVisibleItems: n,
                                        rankedSkuIds: e.rankedSkuIds
                                    },
                                    a
                                );
                            default:
                                return null;
                        }
                    }),
                    !u.some((e) => (null == e ? void 0 : e.type) === o.z.FEED) &&
                        (0, r.jsx)(k.Z, {
                            isLoading: i,
                            numVisibleItems: n,
                            handleTransition: () => t('shop all top'),
                            rankedSkuIds: S.yo
                        })
                ]
            });
};
t.Z = (e) => {
    var t;
    let { isFullScreen: n, handleTransition: i, numVisibleItems: o } = e,
        { categories: b, isFetchingCategories: B, fetchCategoriesError: L, fetchPurchasesError: y, claimError: N, refreshCategories: P } = (0, C.ZP)({ location: 'CollectiblesFeedShop' }),
        Z = null !== (t = null != L ? L : y) && void 0 !== t ? t : N,
        O = Array.from(b.values()),
        w = (0, c.e7)([u.default], () => u.default.getCurrentUser()),
        A = (0, p.n)('CollectiblesFeedShop'),
        R = (0, g.c)('CollectiblesFeedShop') && null != h.Z.getCategory(s.T.ROBERT),
        F = (0, f.b)('Collectibles Shop Button'),
        { noCache: H, includeUnpublished: V } = (0, x.Z)(),
        D = O[0],
        M = [O[1], h.Z.getCategory(R ? s.T.ROBERT : s.T.ANIME_V2)],
        W = a.useCallback(() => {
            P();
        }, [P]);
    if (null == w) return null;
    if (null != Z) {
        let e = [];
        null != L ? e.push('shop load fetch categories error: '.concat(Z.message)) : null != y ? e.push('shop load fetch purchase error: '.concat(Z.message)) : e.push('shop load claim error: '.concat(Z.message)),
            m.Z.captureMessage(e.join('\n'), {
                tags: {
                    isStaff: w.isStaff().toString(),
                    preloadEnabled: F.toString(),
                    disableCache: H.toString(),
                    includeUnpublished: V.toString()
                }
            });
    }
    return null != L
        ? (0, r.jsx)(v.Z, {
              onRetry: W,
              errorOrigin: v.i.SHOP_PAGE,
              errorMessage: L.message
          })
        : (0, r.jsx)(r.Fragment, {
              children: (0, r.jsx)('div', {
                  className: l()(j.shop, { [j.shopFullscreen]: n }),
                  children: (0, r.jsxs)('div', {
                      className: l()(j.content, j.mainContent),
                      children: [
                          A
                              ? (0, r.jsx)(T, {
                                    handleTransition: i,
                                    numVisibleItems: o,
                                    isFetchingCategories: B
                                })
                              : (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(I.Z, {
                                            isLoading: B,
                                            handleTransition: i,
                                            category: D
                                        }),
                                        (0, r.jsx)(_.Z, {
                                            isLoading: B,
                                            handleTransition: i,
                                            categories: M
                                        }),
                                        (0, r.jsx)(k.Z, {
                                            isLoading: B,
                                            numVisibleItems: o,
                                            handleTransition: () => i('shop all top'),
                                            rankedSkuIds: S.yo
                                        })
                                    ]
                                }),
                          o >= S.iA &&
                              (0, r.jsxs)('div', {
                                  className: j.endOfFeed,
                                  children: [
                                      (0, r.jsx)(d.Heading, {
                                          variant: 'heading-md/semibold',
                                          children: E.intl.string(E.t.Yr70c3)
                                      }),
                                      (0, r.jsx)(d.Button, {
                                          className: j.endOfFeedButton,
                                          onClick: () => {
                                              i('shop all bottom', void 0, !0);
                                          },
                                          children: (0, r.jsx)(d.Text, {
                                              variant: 'text-md/medium',
                                              color: 'always-white',
                                              children: E.intl.string(E.t.AfrvRE)
                                          })
                                      })
                                  ]
                              })
                      ]
                  })
              })
          });
};
