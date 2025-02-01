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
        let { handleTransition: t, numVisibleItems: n, isFetchingCategories: i } = e,
            { noCache: s, includeUnpublished: a } = (0, v.Z)(),
            {
                isFetchingShopHome: d,
                fetchShopHomeError: c,
                shopBlocks: u,
                refreshShopHome: C
            } = (0, x.E)({
                noCache: s,
                includeUnpublished: a,
                includeBundles: !0
            }),
            h = l.useCallback(() => {
                C();
            }, [C]);
        return null != c
            ? (0, r.jsx)(_.Z, {
                  onRetry: h,
                  errorOrigin: _.i.SHOP_PAGE,
                  errorMessage: c.message
              })
            : d || 0 === u.length
              ? (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(j.Z, {
                            isLoading: d,
                            handleTransition: t
                        }),
                        (0, r.jsx)(b.Z, {
                            isLoading: d,
                            handleTransition: t,
                            categories: []
                        }),
                        (0, r.jsx)(k.Z, {
                            isLoading: d,
                            handleTransition: t,
                            numVisibleItems: n,
                            rankedSkuIds: []
                        })
                    ]
                })
              : (0, r.jsxs)(r.Fragment, {
                    children: [
                        u.map((e, l) => {
                            if (null == e) return null;
                            switch (e.type) {
                                case o.z.HERO:
                                    return (0, r.jsx)(
                                        j.Z,
                                        {
                                            isLoading: d,
                                            handleTransition: t,
                                            heroBlock: e
                                        },
                                        l
                                    );
                                case o.z.FEATURED:
                                    return (0, r.jsx)(
                                        b.Z,
                                        {
                                            isLoading: d,
                                            handleTransition: t,
                                            featuredBlockRecord: e
                                        },
                                        l
                                    );
                                case o.z.FEED:
                                    return (0, r.jsx)(
                                        k.Z,
                                        {
                                            isLoading: d || i,
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
                        !u.some((e) => (null == e ? void 0 : e.type) === o.z.FEED) &&
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
        let { isFullScreen: n, handleTransition: i, numVisibleItems: o } = e,
            { categories: x, isFetchingCategories: I, fetchCategoriesError: Z, fetchPurchasesError: y, claimError: B, refreshCategories: F } = (0, f.ZP)({ location: 'CollectiblesFeedShop' }),
            N = null !== (t = null != Z ? Z : y) && void 0 !== t ? t : B,
            P = Array.from(x.values()),
            A = (0, d.e7)([u.default], () => u.default.getCurrentUser()),
            w = (0, m.n)('CollectiblesFeedShop'),
            O = (0, p.c)('CollectiblesFeedShop') && null != h.Z.getCategory(a.T.ROBERT),
            R = (0, g.b)('Collectibles Shop Button'),
            { noCache: H, includeUnpublished: M } = (0, v.Z)(),
            V = P[0],
            D = [P[1], h.Z.getCategory(O ? a.T.ROBERT : a.T.ANIME_V2)],
            W = l.useCallback(() => {
                F();
            }, [F]);
        if (null == A) return null;
        if (null != N) {
            let e = [];
            null != Z ? e.push('shop load fetch categories error: '.concat(N.message)) : null != y ? e.push('shop load fetch purchase error: '.concat(N.message)) : e.push('shop load claim error: '.concat(N.message)),
                C.Z.captureMessage(e.join('\n'), {
                    tags: {
                        isStaff: A.isStaff().toString(),
                        preloadEnabled: R.toString(),
                        disableCache: H.toString(),
                        includeUnpublished: M.toString()
                    }
                });
        }
        return null != Z
            ? (0, r.jsx)(_.Z, {
                  onRetry: W,
                  errorOrigin: _.i.SHOP_PAGE,
                  errorMessage: Z.message
              })
            : (0, r.jsx)(r.Fragment, {
                  children: (0, r.jsx)('div', {
                      className: s()(S.shop, { [S.shopFullscreen]: n }),
                      children: (0, r.jsxs)('div', {
                          className: s()(S.content, S.mainContent),
                          children: [
                              w
                                  ? (0, r.jsx)(T, {
                                        handleTransition: i,
                                        numVisibleItems: o,
                                        isFetchingCategories: I
                                    })
                                  : (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(j.Z, {
                                                isLoading: I,
                                                handleTransition: i,
                                                category: V
                                            }),
                                            (0, r.jsx)(b.Z, {
                                                isLoading: I,
                                                handleTransition: i,
                                                categories: D
                                            }),
                                            (0, r.jsx)(k.Z, {
                                                isLoading: I,
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
