n.d(t, { Z: () => L }), n(653041);
var r = n(200651),
    l = n(192379),
    i = n(120356),
    a = n.n(i),
    s = n(685816),
    o = n(442837),
    d = n(481060),
    c = n(594174),
    u = n(960048),
    C = n(744112),
    h = n(223143),
    p = n(364111),
    m = n(752053),
    g = n(81136),
    f = n(953655),
    x = n(548685),
    _ = n(580914),
    b = n(384067),
    v = n(215023),
    k = n(388032),
    j = n(218142);
let E = (e) => {
        let { handleTransition: t, numVisibleItems: n, isFetchingCategories: i, tab: a } = e,
            { noCache: o, includeUnpublished: d } = (0, g.Z)(),
            {
                isFetchingShopHome: c,
                fetchShopHomeError: u,
                shopBlocks: C,
                refreshShopHome: h
            } = (0, p.E)(a, {
                noCache: o,
                includeUnpublished: d,
                includeBundles: !0
            }),
            k = l.useCallback(() => {
                h();
            }, [h]);
        return null != u
            ? (0, r.jsx)(m.Z, {
                  onRetry: k,
                  errorOrigin: m.i.SHOP_PAGE,
                  errorMessage: u.message
              })
            : c || 0 === C.length
              ? (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(_.Z, {
                            isLoading: c,
                            handleTransition: t,
                            tab: a
                        }),
                        (0, r.jsx)(f.Z, {
                            isLoading: c,
                            handleTransition: t,
                            categories: []
                        }),
                        (0, r.jsx)(x.Z, {
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
                                case s.z.HERO:
                                    return (0, r.jsx)(
                                        _.Z,
                                        {
                                            isLoading: c,
                                            handleTransition: t,
                                            heroBlock: e,
                                            tab: a
                                        },
                                        l
                                    );
                                case s.z.FEATURED:
                                    return (0, r.jsx)(
                                        f.Z,
                                        {
                                            isLoading: c,
                                            handleTransition: t,
                                            featuredBlockRecord: e
                                        },
                                        l
                                    );
                                case s.z.FEED:
                                    return (0, r.jsx)(
                                        x.Z,
                                        {
                                            isLoading: c || i,
                                            handleTransition: t,
                                            numVisibleItems: n,
                                            rankedSkuIds: e.rankedSkuIds
                                        },
                                        l
                                    );
                                case s.z.WIDE_BANNER:
                                    return (0, r.jsx)(
                                        b.Z,
                                        {
                                            handleTransition: t,
                                            wideBannerBlock: e
                                        },
                                        l
                                    );
                                default:
                                    return null;
                            }
                        }),
                        !C.some((e) => (null == e ? void 0 : e.type) === s.z.FEED) &&
                            (0, r.jsx)(x.Z, {
                                isLoading: i,
                                numVisibleItems: n,
                                handleTransition: () => t('shop all top'),
                                rankedSkuIds: v.yo
                            })
                    ]
                });
    },
    L = (e) => {
        var t;
        let { isFullScreen: n, handleTransition: i, numVisibleItems: s, tab: p } = e,
            { isFetchingCategories: f, fetchCategoriesError: x, fetchPurchasesError: _, claimError: b, refreshCategories: L } = (0, h.ZP)({ location: 'CollectiblesFeedShop' }),
            S = null !== (t = null != x ? x : _) && void 0 !== t ? t : b,
            B = (0, o.e7)([c.default], () => c.default.getCurrentUser()),
            T = (0, C.b)('Collectibles Shop Button'),
            { noCache: I, includeUnpublished: y } = (0, g.Z)(),
            Z = l.useCallback(() => {
                L();
            }, [L]);
        if (null == B) return null;
        if (null != S) {
            let e = [];
            null != x ? e.push('shop load fetch categories error: '.concat(S.message)) : null != _ ? e.push('shop load fetch purchase error: '.concat(S.message)) : e.push('shop load claim error: '.concat(S.message)),
                u.Z.captureMessage(e.join('\n'), {
                    tags: {
                        isStaff: B.isStaff().toString(),
                        preloadEnabled: T.toString(),
                        disableCache: I.toString(),
                        includeUnpublished: y.toString()
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
                      className: a()(j.shop, { [j.shopFullscreen]: n }),
                      children: (0, r.jsxs)('div', {
                          className: a()(j.content, j.mainContent),
                          children: [
                              (0, r.jsx)(E, {
                                  handleTransition: i,
                                  numVisibleItems: s,
                                  isFetchingCategories: f,
                                  tab: p
                              }),
                              s >= v.iA &&
                                  (0, r.jsxs)('div', {
                                      className: j.endOfFeed,
                                      children: [
                                          (0, r.jsx)(d.X6q, {
                                              variant: 'heading-md/semibold',
                                              children: k.intl.string(k.t.Yr70c3)
                                          }),
                                          (0, r.jsx)(d.zxk, {
                                              className: j.endOfFeedButton,
                                              onClick: () => {
                                                  i('shop all bottom', void 0, !0);
                                              },
                                              children: (0, r.jsx)(d.Text, {
                                                  variant: 'text-md/medium',
                                                  color: 'always-white',
                                                  children: k.intl.string(k.t.AfrvRE)
                                              })
                                          })
                                      ]
                                  })
                          ]
                      })
                  })
              });
    };
