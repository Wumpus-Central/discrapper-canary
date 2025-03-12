n.d(t, { Z: () => O }), n(653041);
var r = n(200651),
    l = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(685816),
    i = n(442837),
    d = n(481060),
    c = n(594174),
    u = n(960048),
    g = n(744112),
    f = n(139668),
    h = n(223143),
    m = n(364111),
    p = n(752053),
    b = n(81136),
    C = n(953655),
    _ = n(548685),
    v = n(580914),
    x = n(384067),
    k = n(215023),
    j = n(388032),
    S = n(39532);
let y = (e) => {
        let { handleTransition: t, numVisibleItems: n, isFetchingCategories: a, tab: s } = e,
            { noCache: i, includeUnpublished: d } = (0, b.Z)(),
            {
                isFetchingShopHome: c,
                fetchShopHomeError: u,
                shopBlocks: g,
                refreshShopHome: f
            } = (0, m.E)(s, {
                noCache: i,
                includeUnpublished: d,
                includeBundles: !0
            }),
            h = l.useCallback(() => {
                f();
            }, [f]);
        return null != u
            ? (0, r.jsx)(p.Z, {
                  onRetry: h,
                  errorOrigin: p.i.SHOP_PAGE,
                  errorMessage: u.message
              })
            : c || 0 === g.length
              ? (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(v.Z, {
                            isLoading: c,
                            handleTransition: t,
                            tab: s
                        }),
                        (0, r.jsx)(C.Z, {
                            isLoading: c,
                            handleTransition: t,
                            categories: []
                        }),
                        (0, r.jsx)(_.Z, {
                            isLoading: c,
                            handleTransition: t,
                            numVisibleItems: n,
                            rankedSkuIds: [],
                            tab: s
                        })
                    ]
                })
              : (0, r.jsx)(r.Fragment, {
                    children: g.map((e, l) => {
                        if (null == e) return null;
                        switch (e.type) {
                            case o.z.HERO:
                                return (0, r.jsx)(
                                    v.Z,
                                    {
                                        isLoading: c,
                                        handleTransition: t,
                                        heroBlock: e,
                                        tab: s
                                    },
                                    l
                                );
                            case o.z.FEATURED:
                                return (0, r.jsx)(
                                    C.Z,
                                    {
                                        isLoading: c,
                                        handleTransition: t,
                                        featuredBlockRecord: e
                                    },
                                    l
                                );
                            case o.z.FEED:
                                return (0, r.jsx)(
                                    _.Z,
                                    {
                                        isLoading: c || a,
                                        handleTransition: t,
                                        numVisibleItems: n,
                                        rankedSkuIds: e.rankedSkuIds,
                                        tab: s
                                    },
                                    l
                                );
                            case o.z.WIDE_BANNER:
                                return (0, r.jsx)(
                                    x.Z,
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
    O = (e) => {
        var t;
        let { isFullScreen: n, handleTransition: a, numVisibleItems: o, tab: m } = e,
            { isFetchingCategories: C, fetchCategoriesError: _, fetchPurchasesError: v, claimError: x, refreshCategories: O } = (0, h.ZP)({ location: 'CollectiblesFeedShop' }),
            E = null !== (t = null != _ ? _ : v) && void 0 !== t ? t : x,
            I = (0, i.e7)([c.default], () => c.default.getCurrentUser()),
            B = (0, g.b)('Collectibles Shop Button'),
            T = (0, f.R)('CollectiblesFeedShop'),
            { noCache: w, includeUnpublished: L } = (0, b.Z)(),
            P = l.useCallback(() => {
                O();
            }, [O]);
        if (null == I) return null;
        if (null != E) {
            let e = [];
            null != _ ? e.push('shop load fetch categories error: '.concat(E.message)) : null != v ? e.push('shop load fetch purchase error: '.concat(E.message)) : e.push('shop load claim error: '.concat(E.message)),
                u.Z.captureMessage(e.join('\n'), {
                    tags: {
                        isStaff: I.isStaff().toString(),
                        preloadEnabled: B.toString(),
                        disableCache: w.toString(),
                        includeUnpublished: L.toString()
                    }
                });
        }
        return null != _
            ? (0, r.jsx)(p.Z, {
                  onRetry: P,
                  errorOrigin: p.i.SHOP_PAGE,
                  errorMessage: _.message
              })
            : (0, r.jsx)('div', {
                  className: s()(S.shop, { [S.shopFullscreen]: n }),
                  children: (0, r.jsxs)('div', {
                      className: s()(S.content, S.mainContent),
                      children: [
                          (0, r.jsx)(y, {
                              handleTransition: a,
                              numVisibleItems: o,
                              isFetchingCategories: C,
                              tab: m
                          }),
                          m === k.AW.HOME &&
                              o >= T &&
                              (0, r.jsxs)('div', {
                                  className: S.endOfFeed,
                                  children: [
                                      (0, r.jsx)(d.X6q, {
                                          variant: 'heading-md/semibold',
                                          children: j.NW.string(j.t.Yr70c3)
                                      }),
                                      (0, r.jsx)(d.zxk, {
                                          className: S.endOfFeedButton,
                                          onClick: () => {
                                              a('shop all bottom', void 0, !0);
                                          },
                                          children: (0, r.jsx)(d.Text, {
                                              variant: 'text-md/medium',
                                              color: 'always-white',
                                              children: j.NW.string(j.t.AfrvRE)
                                          })
                                      })
                                  ]
                              })
                      ]
                  })
              });
    };
