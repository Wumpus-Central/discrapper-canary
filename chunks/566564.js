n.d(t, { Z: () => E }), n(653041);
var r = n(200651),
    l = n(192379),
    a = n(120356),
    o = n.n(a),
    s = n(685816),
    i = n(442837),
    c = n(481060),
    d = n(594174),
    u = n(960048),
    g = n(744112),
    h = n(139668),
    f = n(223143),
    m = n(364111),
    p = n(752053),
    b = n(81136),
    C = n(953655),
    _ = n(548685),
    v = n(580914),
    k = n(963278),
    x = n(384067),
    j = n(215023),
    S = n(388032),
    y = n(39532);
let O = (e) => {
        let { handleTransition: t, numVisibleItems: n, isFetchingCategories: a, tab: i } = e,
            { noCache: c, includeUnpublished: d } = (0, b.Z)(),
            {
                isFetchingShopHome: u,
                fetchShopHomeError: g,
                shopBlocks: h,
                refreshShopHome: f
            } = (0, m.E)(i, {
                noCache: c,
                includeUnpublished: d,
                includeBundles: !0
            }),
            j = l.useCallback(() => {
                f();
            }, [f]);
        if (null != g)
            return (0, r.jsx)(p.Z, {
                onRetry: j,
                errorOrigin: p.i.SHOP_PAGE,
                errorMessage: g.message
            });
        if (u || 0 === h.length)
            return (0, r.jsxs)('div', {
                className: y.loadingContainer,
                children: [
                    (0, r.jsx)(v.Z, {
                        isLoading: u,
                        handleTransition: t,
                        tab: i
                    }),
                    (0, r.jsx)(C.Z, {
                        isLoading: u,
                        handleTransition: t,
                        categories: []
                    }),
                    (0, r.jsx)(_.Z, {
                        isLoading: u,
                        handleTransition: t,
                        numVisibleItems: n,
                        rankedSkuIds: [],
                        tab: i
                    })
                ]
            });
        let S = (e, l) => {
            if (null == e) return null;
            let c = null;
            switch (e.type) {
                case s.z.HERO:
                    c = (0, r.jsx)(
                        v.Z,
                        {
                            isLoading: u,
                            handleTransition: t,
                            heroBlock: e,
                            tab: i
                        },
                        l
                    );
                    break;
                case s.z.FEATURED:
                    c = (0, r.jsx)(
                        C.Z,
                        {
                            isLoading: u,
                            handleTransition: t,
                            featuredBlockRecord: e
                        },
                        l
                    );
                    break;
                case s.z.FEED:
                    c = (0, r.jsx)(
                        _.Z,
                        {
                            isLoading: u || a,
                            handleTransition: t,
                            numVisibleItems: n,
                            rankedSkuIds: e.rankedSkuIds,
                            tab: i
                        },
                        l
                    );
                    break;
                case s.z.WIDE_BANNER:
                    c = (0, r.jsx)(
                        x.Z,
                        {
                            handleTransition: t,
                            wideBannerBlock: e,
                            tab: i
                        },
                        l
                    );
                    break;
                case s.z.SHELF:
                    c = (0, r.jsx)(
                        k.Z,
                        {
                            handleTransition: t,
                            shelf: e,
                            tab: i
                        },
                        l
                    );
                    break;
                default:
                    return null;
            }
            return (0, r.jsx)(
                'div',
                {
                    className: o()(y.blockContainer, {
                        [y.backgroundSecondary]: l % 2 == 1,
                        [y.topBlockContainer]: 0 === l
                    }),
                    children: c
                },
                l
            );
        };
        return (0, r.jsx)(r.Fragment, { children: h.map((e, t) => S(e, t)) });
    },
    E = (e) => {
        var t;
        let { isFullScreen: n, handleTransition: a, numVisibleItems: s, tab: m } = e,
            { isFetchingCategories: C, fetchCategoriesError: _, fetchPurchasesError: v, claimError: k, refreshCategories: x } = (0, f.ZP)({ location: 'CollectiblesFeedShop' }),
            E = null !== (t = null != _ ? _ : v) && void 0 !== t ? t : k,
            I = (0, i.e7)([d.default], () => d.default.getCurrentUser()),
            B = (0, g.b)('Collectibles Shop Button'),
            T = (0, h.R)('CollectiblesFeedShop'),
            { noCache: L, includeUnpublished: w } = (0, b.Z)(),
            P = l.useCallback(() => {
                x();
            }, [x]);
        if (null == I) return null;
        if (null != E) {
            let e = [];
            null != _ ? e.push('shop load fetch categories error: '.concat(E.message)) : null != v ? e.push('shop load fetch purchase error: '.concat(E.message)) : e.push('shop load claim error: '.concat(E.message)),
                u.Z.captureMessage(e.join('\n'), {
                    tags: {
                        isStaff: I.isStaff().toString(),
                        preloadEnabled: B.toString(),
                        disableCache: L.toString(),
                        includeUnpublished: w.toString()
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
                  className: o()(y.shop, { [y.shopFullscreen]: n }),
                  children: (0, r.jsxs)('div', {
                      className: o()(y.content, y.mainContent),
                      children: [
                          (0, r.jsx)(O, {
                              handleTransition: a,
                              numVisibleItems: s,
                              isFetchingCategories: C,
                              tab: m
                          }),
                          m === j.AW.HOME &&
                              s >= T &&
                              (0, r.jsxs)('div', {
                                  className: y.endOfFeed,
                                  children: [
                                      (0, r.jsx)(c.X6q, {
                                          variant: 'heading-md/semibold',
                                          children: S.NW.string(S.t.Yr70c3)
                                      }),
                                      (0, r.jsx)(c.zxk, {
                                          className: y.endOfFeedButton,
                                          onClick: () => {
                                              a('shop all bottom', void 0, !0);
                                          },
                                          children: (0, r.jsx)(c.Text, {
                                              variant: 'text-md/medium',
                                              color: 'always-white',
                                              children: S.NW.string(S.t.AfrvRE)
                                          })
                                      })
                                  ]
                              })
                      ]
                  })
              });
    };
