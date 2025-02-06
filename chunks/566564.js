n.d(t, { Z: () => I }), n(47120), n(653041);
var r = n(200651),
    l = n(192379),
    i = n(120356),
    s = n.n(i),
    a = n(180650),
    o = n(685816),
    d = n(442837),
    c = n(481060),
    u = n(594174),
    C = n(960048),
    h = n(597688),
    p = n(606414),
    m = n(67696),
    g = n(744112),
    f = n(223143),
    x = n(364111),
    _ = n(752053),
    v = n(81136),
    b = n(953655),
    k = n(548685),
    j = n(580914),
    L = n(215023),
    E = n(388032),
    S = n(218142);
let T = (e) => {
        let { handleTransition: t, numVisibleItems: n, isFetchingCategories: i, tab: s } = e,
            { noCache: a, includeUnpublished: d } = (0, v.Z)(),
            {
                isFetchingShopHome: c,
                fetchShopHomeError: u,
                shopBlocks: C,
                refreshShopHome: h
            } = (0, x.E)(s, {
                noCache: a,
                includeUnpublished: d,
                includeBundles: !0
            }),
            p = l.useCallback(() => {
                h();
            }, [h]);
        return null != u
            ? (0, r.jsx)(_.Z, {
                  onRetry: p,
                  errorOrigin: _.i.SHOP_PAGE,
                  errorMessage: u.message
              })
            : c || 0 === C.length
              ? (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(j.Z, {
                            isLoading: c,
                            handleTransition: t
                        }),
                        (0, r.jsx)(b.Z, {
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
                        C.map((e, l) => {
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
                                        l
                                    );
                                case o.z.FEATURED:
                                    return (0, r.jsx)(
                                        b.Z,
                                        {
                                            isLoading: c,
                                            handleTransition: t,
                                            featuredBlockRecord: e
                                        },
                                        l
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
                                        l
                                    );
                                default:
                                    return null;
                            }
                        }),
                        !C.some((e) => (null == e ? void 0 : e.type) === o.z.FEED) &&
                            (0, r.jsx)(k.Z, {
                                isLoading: i,
                                numVisibleItems: n,
                                handleTransition: () => t('shop all top'),
                                rankedSkuIds: L.yo
                            })
                    ]
                });
    },
    I = (e) => {
        var t;
        let { isFullScreen: n, handleTransition: i, numVisibleItems: o, tab: x } = e,
            { categories: I, isFetchingCategories: Z, fetchCategoriesError: y, fetchPurchasesError: B, claimError: F, refreshCategories: N } = (0, f.ZP)({ location: 'CollectiblesFeedShop' }),
            P = null !== (t = null != y ? y : B) && void 0 !== t ? t : F,
            A = Array.from(I.values()),
            w = (0, d.e7)([u.default], () => u.default.getCurrentUser()),
            O = (0, m.n)('CollectiblesFeedShop'),
            R = (0, p.c)('CollectiblesFeedShop') && null != h.Z.getCategory(a.T.ROBERT),
            H = (0, g.b)('Collectibles Shop Button'),
            { noCache: M, includeUnpublished: V } = (0, v.Z)(),
            D = A[0],
            W = [A[1], h.Z.getCategory(R ? a.T.ROBERT : a.T.ANIME_V2)],
            U = l.useCallback(() => {
                N();
            }, [N]);
        if (null == w) return null;
        if (null != P) {
            let e = [];
            null != y ? e.push('shop load fetch categories error: '.concat(P.message)) : null != B ? e.push('shop load fetch purchase error: '.concat(P.message)) : e.push('shop load claim error: '.concat(P.message)),
                C.Z.captureMessage(e.join('\n'), {
                    tags: {
                        isStaff: w.isStaff().toString(),
                        preloadEnabled: H.toString(),
                        disableCache: M.toString(),
                        includeUnpublished: V.toString()
                    }
                });
        }
        return null != y
            ? (0, r.jsx)(_.Z, {
                  onRetry: U,
                  errorOrigin: _.i.SHOP_PAGE,
                  errorMessage: y.message
              })
            : (0, r.jsx)(r.Fragment, {
                  children: (0, r.jsx)('div', {
                      className: s()(S.shop, { [S.shopFullscreen]: n }),
                      children: (0, r.jsxs)('div', {
                          className: s()(S.content, S.mainContent),
                          children: [
                              O
                                  ? (0, r.jsx)(T, {
                                        handleTransition: i,
                                        numVisibleItems: o,
                                        isFetchingCategories: Z,
                                        tab: x
                                    })
                                  : (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(j.Z, {
                                                isLoading: Z,
                                                handleTransition: i,
                                                category: D
                                            }),
                                            (0, r.jsx)(b.Z, {
                                                isLoading: Z,
                                                handleTransition: i,
                                                categories: W
                                            }),
                                            (0, r.jsx)(k.Z, {
                                                isLoading: Z,
                                                numVisibleItems: o,
                                                handleTransition: () => i('shop all top'),
                                                rankedSkuIds: L.yo
                                            })
                                        ]
                                    }),
                              o >= L.iA &&
                                  (0, r.jsxs)('div', {
                                      className: S.endOfFeed,
                                      children: [
                                          (0, r.jsx)(c.X6q, {
                                              variant: 'heading-md/semibold',
                                              children: E.intl.string(E.t.Yr70c3)
                                          }),
                                          (0, r.jsx)(c.zxk, {
                                              className: S.endOfFeedButton,
                                              onClick: () => {
                                                  i('shop all bottom', void 0, !0);
                                              },
                                              children: (0, r.jsx)(c.Text, {
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
