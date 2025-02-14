n.d(t, { Z: () => L }), n(653041);
var l = n(200651),
    r = n(192379),
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
    k = n(472739);
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
            j = r.useCallback(() => {
                h();
            }, [h]);
        return null != u
            ? (0, l.jsx)(m.Z, {
                  onRetry: j,
                  errorOrigin: m.i.SHOP_PAGE,
                  errorMessage: u.message
              })
            : c || 0 === C.length
              ? (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(b.Z, {
                            isLoading: c,
                            handleTransition: t,
                            tab: s
                        }),
                        (0, l.jsx)(g.Z, {
                            isLoading: c,
                            handleTransition: t,
                            categories: []
                        }),
                        (0, l.jsx)(x.Z, {
                            isLoading: c,
                            handleTransition: t,
                            numVisibleItems: n,
                            rankedSkuIds: [],
                            showShopAll: s === v.AW.HOME
                        })
                    ]
                })
              : (0, l.jsx)(l.Fragment, {
                    children: C.map((e, r) => {
                        if (null == e) return null;
                        switch (e.type) {
                            case a.z.HERO:
                                return (0, l.jsx)(
                                    b.Z,
                                    {
                                        isLoading: c,
                                        handleTransition: t,
                                        heroBlock: e,
                                        tab: s
                                    },
                                    r
                                );
                            case a.z.FEATURED:
                                return (0, l.jsx)(
                                    g.Z,
                                    {
                                        isLoading: c,
                                        handleTransition: t,
                                        featuredBlockRecord: e
                                    },
                                    r
                                );
                            case a.z.FEED:
                                return (0, l.jsx)(
                                    x.Z,
                                    {
                                        isLoading: c || i,
                                        handleTransition: t,
                                        numVisibleItems: n,
                                        rankedSkuIds: e.rankedSkuIds,
                                        showShopAll: s === v.AW.HOME
                                    },
                                    r
                                );
                            case a.z.WIDE_BANNER:
                                return (0, l.jsx)(
                                    _.Z,
                                    {
                                        handleTransition: t,
                                        wideBannerBlock: e,
                                        tab: s
                                    },
                                    r
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
            B = (0, C.b)('Collectibles Shop Button'),
            { noCache: I, includeUnpublished: y } = (0, f.Z)(),
            Z = r.useCallback(() => {
                L();
            }, [L]);
        if (null == T) return null;
        if (null != S) {
            let e = [];
            null != x ? e.push('shop load fetch categories error: '.concat(S.message)) : null != b ? e.push('shop load fetch purchase error: '.concat(S.message)) : e.push('shop load claim error: '.concat(S.message)),
                u.Z.captureMessage(e.join('\n'), {
                    tags: {
                        isStaff: T.isStaff().toString(),
                        preloadEnabled: B.toString(),
                        disableCache: I.toString(),
                        includeUnpublished: y.toString()
                    }
                });
        }
        return null != x
            ? (0, l.jsx)(m.Z, {
                  onRetry: Z,
                  errorOrigin: m.i.SHOP_PAGE,
                  errorMessage: x.message
              })
            : (0, l.jsx)(l.Fragment, {
                  children: (0, l.jsx)('div', {
                      className: s()(k.shop, { [k.shopFullscreen]: n }),
                      children: (0, l.jsxs)('div', {
                          className: s()(k.content, k.mainContent),
                          children: [
                              (0, l.jsx)(E, {
                                  handleTransition: i,
                                  numVisibleItems: a,
                                  isFetchingCategories: g,
                                  tab: p
                              }),
                              p === v.AW.HOME &&
                                  a >= v.iA &&
                                  (0, l.jsxs)('div', {
                                      className: k.endOfFeed,
                                      children: [
                                          (0, l.jsx)(d.X6q, {
                                              variant: 'heading-md/semibold',
                                              children: j.intl.string(j.t.Yr70c3)
                                          }),
                                          (0, l.jsx)(d.zxk, {
                                              className: k.endOfFeedButton,
                                              onClick: () => {
                                                  i('shop all bottom', void 0, !0);
                                              },
                                              children: (0, l.jsx)(d.Text, {
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
