n(47120), n(653041);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(180650),
    o = n(685816),
    c = n(442837),
    d = n(481060),
    u = n(594174),
    C = n(960048),
    h = n(597688),
    p = n(606414),
    f = n(67696),
    m = n(744112),
    g = n(223143),
    b = n(364111),
    x = n(752053),
    v = n(81136),
    _ = n(953655),
    k = n(548685),
    j = n(580914),
    E = n(215023),
    L = n(388032),
    I = n(218142);
let S = (e) => {
    let { handleTransition: t, numVisibleItems: n, isFetchingCategories: l } = e,
        { noCache: s, includeUnpublished: a } = (0, v.Z)(),
        {
            isFetchingShopHome: c,
            fetchShopHomeError: d,
            shopBlocks: u,
            refreshShopHome: C
        } = (0, b.E)({
            noCache: s,
            includeUnpublished: a,
            includeBundles: !0
        }),
        h = i.useCallback(() => {
            C();
        }, [C]);
    return null != d
        ? (0, r.jsx)(x.Z, {
              onRetry: h,
              errorOrigin: x.i.SHOP_PAGE,
              errorMessage: d.message
          })
        : c || 0 === u.length
          ? (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(j.Z, {
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
                    u.map((e, i) => {
                        if (null == e) return null;
                        switch (e.type) {
                            case o.z.HERO:
                                return (0, r.jsx)(
                                    j.Z,
                                    {
                                        isLoading: c,
                                        handleTransition: t,
                                        heroBlock: e
                                    },
                                    i
                                );
                            case o.z.FEATURED:
                                return (0, r.jsx)(
                                    _.Z,
                                    {
                                        isLoading: c,
                                        handleTransition: t,
                                        featuredBlockRecord: e
                                    },
                                    i
                                );
                            case o.z.FEED:
                                return (0, r.jsx)(
                                    k.Z,
                                    {
                                        isLoading: c || l,
                                        handleTransition: t,
                                        numVisibleItems: n,
                                        rankedSkuIds: e.rankedSkuIds
                                    },
                                    i
                                );
                            default:
                                return null;
                        }
                    }),
                    !u.some((e) => (null == e ? void 0 : e.type) === o.z.FEED) &&
                        (0, r.jsx)(k.Z, {
                            isLoading: l,
                            numVisibleItems: n,
                            handleTransition: () => t('shop all top'),
                            rankedSkuIds: E.yo
                        })
                ]
            });
};
t.Z = (e) => {
    var t;
    let { isFullScreen: n, handleTransition: l, numVisibleItems: o } = e,
        { categories: b, isFetchingCategories: B, fetchCategoriesError: T, fetchPurchasesError: y, claimError: Z, refreshCategories: N } = (0, g.ZP)({ location: 'CollectiblesFeedShop' }),
        F = null !== (t = null != T ? T : y) && void 0 !== t ? t : Z,
        P = Array.from(b.values()),
        w = (0, c.e7)([u.default], () => u.default.getCurrentUser()),
        O = (0, f.n)('CollectiblesFeedShop'),
        A = (0, p.c)('CollectiblesFeedShop') && null != h.Z.getCategory(a.T.ROBERT),
        R = (0, m.b)('Collectibles Shop Button'),
        { noCache: H, includeUnpublished: M } = (0, v.Z)(),
        D = P[0],
        V = [P[1], h.Z.getCategory(A ? a.T.ROBERT : a.T.ANIME_V2)],
        U = i.useCallback(() => {
            N();
        }, [N]);
    if (null == w) return null;
    if (null != F) {
        let e = [];
        null != T ? e.push('shop load fetch categories error: '.concat(F.message)) : null != y ? e.push('shop load fetch purchase error: '.concat(F.message)) : e.push('shop load claim error: '.concat(F.message)),
            C.Z.captureMessage(e.join('\n'), {
                tags: {
                    isStaff: w.isStaff().toString(),
                    preloadEnabled: R.toString(),
                    disableCache: H.toString(),
                    includeUnpublished: M.toString()
                }
            });
    }
    return null != T
        ? (0, r.jsx)(x.Z, {
              onRetry: U,
              errorOrigin: x.i.SHOP_PAGE,
              errorMessage: T.message
          })
        : (0, r.jsx)(r.Fragment, {
              children: (0, r.jsx)('div', {
                  className: s()(I.shop, { [I.shopFullscreen]: n }),
                  children: (0, r.jsxs)('div', {
                      className: s()(I.content, I.mainContent),
                      children: [
                          O
                              ? (0, r.jsx)(S, {
                                    handleTransition: l,
                                    numVisibleItems: o,
                                    isFetchingCategories: B
                                })
                              : (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(j.Z, {
                                            isLoading: B,
                                            handleTransition: l,
                                            category: D
                                        }),
                                        (0, r.jsx)(_.Z, {
                                            isLoading: B,
                                            handleTransition: l,
                                            categories: V
                                        }),
                                        (0, r.jsx)(k.Z, {
                                            isLoading: B,
                                            numVisibleItems: o,
                                            handleTransition: () => l('shop all top'),
                                            rankedSkuIds: E.yo
                                        })
                                    ]
                                }),
                          o >= E.iA &&
                              (0, r.jsxs)('div', {
                                  className: I.endOfFeed,
                                  children: [
                                      (0, r.jsx)(d.Heading, {
                                          variant: 'heading-md/semibold',
                                          children: L.intl.string(L.t.Yr70c3)
                                      }),
                                      (0, r.jsx)(d.Button, {
                                          className: I.endOfFeedButton,
                                          onClick: () => {
                                              l('shop all bottom', void 0, !0);
                                          },
                                          children: (0, r.jsx)(d.Text, {
                                              variant: 'text-md/medium',
                                              color: 'always-white',
                                              children: L.intl.string(L.t.AfrvRE)
                                          })
                                      })
                                  ]
                              })
                      ]
                  })
              })
          });
};
