n.d(t, { Z: () => L }), n(653041);
var r = n(200651),
    l = n(192379),
    i = n(120356),
    s = n.n(i),
    a = n(685816),
    o = n(442837),
    d = n(481060),
    c = n(594174),
    u = n(960048),
    C = n(744112),
    h = n(223143),
    p = n(364111),
    m = n(752053),
    f = n(81136),
    g = n(953655),
    x = n(548685),
    b = n(580914),
    _ = n(384067),
    v = n(215023),
    j = n(388032),
    k = n(957726);
let E = (e) => {
        let { handleTransition: t, numVisibleItems: n, isFetchingCategories: i, tab: s } = e,
            { noCache: o, includeUnpublished: d } = (0, f.Z)(),
            {
                isFetchingShopHome: c,
                fetchShopHomeError: u,
                shopBlocks: C,
                refreshShopHome: h
            } = (0, p.E)(s, {
                noCache: o,
                includeUnpublished: d,
                includeBundles: !0
            }),
            j = l.useCallback(() => {
                h();
            }, [h]);
        return null != u
            ? (0, r.jsx)(m.Z, {
                  onRetry: j,
                  errorOrigin: m.i.SHOP_PAGE,
                  errorMessage: u.message
              })
            : c || 0 === C.length
              ? (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(b.Z, {
                            isLoading: c,
                            handleTransition: t,
                            tab: s
                        }),
                        (0, r.jsx)(g.Z, {
                            isLoading: c,
                            handleTransition: t,
                            categories: []
                        }),
                        (0, r.jsx)(x.Z, {
                            isLoading: c,
                            handleTransition: t,
                            numVisibleItems: n,
                            rankedSkuIds: [],
                            showShopAll: s === v.AW.HOME
                        })
                    ]
                })
              : (0, r.jsx)(r.Fragment, {
                    children: C.map((e, l) => {
                        if (null == e) return null;
                        switch (e.type) {
                            case a.z.HERO:
                                return (0, r.jsx)(
                                    b.Z,
                                    {
                                        isLoading: c,
                                        handleTransition: t,
                                        heroBlock: e,
                                        tab: s
                                    },
                                    l
                                );
                            case a.z.FEATURED:
                                return (0, r.jsx)(
                                    g.Z,
                                    {
                                        isLoading: c,
                                        handleTransition: t,
                                        featuredBlockRecord: e
                                    },
                                    l
                                );
                            case a.z.FEED:
                                return (0, r.jsx)(
                                    x.Z,
                                    {
                                        isLoading: c || i,
                                        handleTransition: t,
                                        numVisibleItems: n,
                                        rankedSkuIds: e.rankedSkuIds,
                                        showShopAll: s === v.AW.HOME
                                    },
                                    l
                                );
                            case a.z.WIDE_BANNER:
                                return (0, r.jsx)(
                                    _.Z,
                                    {
                                        handleTransition: t,
                                        wideBannerBlock: e,
                                        tab: s
                                    },
                                    l
                                );
                            default:
                                return null;
                        }
                    })
                });
    },
    L = (e) => {
        var t;
        let { isFullScreen: n, handleTransition: i, numVisibleItems: a, tab: p } = e,
            { isFetchingCategories: g, fetchCategoriesError: x, fetchPurchasesError: b, claimError: _, refreshCategories: L } = (0, h.ZP)({ location: 'CollectiblesFeedShop' }),
            S = null !== (t = null != x ? x : b) && void 0 !== t ? t : _,
            T = (0, o.e7)([c.default], () => c.default.getCurrentUser()),
            I = (0, C.b)('Collectibles Shop Button'),
            { noCache: y, includeUnpublished: B } = (0, f.Z)(),
            Z = l.useCallback(() => {
                L();
            }, [L]);
        if (null == T) return null;
        if (null != S) {
            let e = [];
            null != x ? e.push('shop load fetch categories error: '.concat(S.message)) : null != b ? e.push('shop load fetch purchase error: '.concat(S.message)) : e.push('shop load claim error: '.concat(S.message)),
                u.Z.captureMessage(e.join('\n'), {
                    tags: {
                        isStaff: T.isStaff().toString(),
                        preloadEnabled: I.toString(),
                        disableCache: y.toString(),
                        includeUnpublished: B.toString()
                    }
                });
        }
        return null != x
            ? (0, r.jsx)(m.Z, {
                  onRetry: Z,
                  errorOrigin: m.i.SHOP_PAGE,
                  errorMessage: x.message
              })
            : (0, r.jsx)(r.Fragment, {
                  children: (0, r.jsx)('div', {
                      className: s()(k.shop, { [k.shopFullscreen]: n }),
                      children: (0, r.jsxs)('div', {
                          className: s()(k.content, k.mainContent),
                          children: [
                              (0, r.jsx)(E, {
                                  handleTransition: i,
                                  numVisibleItems: a,
                                  isFetchingCategories: g,
                                  tab: p
                              }),
                              p === v.AW.HOME &&
                                  a >= v.iA &&
                                  (0, r.jsxs)('div', {
                                      className: k.endOfFeed,
                                      children: [
                                          (0, r.jsx)(d.X6q, {
                                              variant: 'heading-md/semibold',
                                              children: j.intl.string(j.t.Yr70c3)
                                          }),
                                          (0, r.jsx)(d.zxk, {
                                              className: k.endOfFeedButton,
                                              onClick: () => {
                                                  i('shop all bottom', void 0, !0);
                                              },
                                              children: (0, r.jsx)(d.Text, {
                                                  variant: 'text-md/medium',
                                                  color: 'always-white',
                                                  children: j.intl.string(j.t.AfrvRE)
                                              })
                                          })
                                      ]
                                  })
                          ]
                      })
                  })
              });
    };
