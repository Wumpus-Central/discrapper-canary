n.d(t, { Z: () => P }), n(539854);
var r = n(200651),
    l = n(192379),
    a = n(120356),
    o = n.n(a),
    i = n(685816),
    s = n(442837),
    c = n(481060),
    u = n(594174),
    d = n(960048),
    b = n(744112),
    p = n(139668),
    f = n(223143),
    g = n(364111),
    m = n(752053),
    h = n(81136),
    _ = n(953655),
    C = n(548685),
    v = n(580914),
    x = n(963278),
    O = n(384067),
    j = n(215023),
    y = n(388032),
    k = n(806734);
let S = (e) => {
        let { handleTransition: t, numVisibleItems: n, isFetchingCategories: a, tab: s } = e,
            { noCache: c, includeUnpublished: u } = (0, h.Z)(),
            {
                isFetchingShopHome: d,
                fetchShopHomeError: b,
                shopBlocks: p,
                refreshShopHome: f
            } = (0, g.E)(s, {
                noCache: c,
                includeUnpublished: u,
                includeBundles: !0
            }),
            j = l.useCallback(() => {
                f();
            }, [f]);
        if (null != b)
            return (0, r.jsx)(m.Z, {
                onRetry: j,
                errorOrigin: m.i.SHOP_PAGE,
                errorMessage: b.message
            });
        if (d || 0 === p.length)
            return (0, r.jsxs)('div', {
                className: k.loadingContainer,
                children: [
                    (0, r.jsx)(v.Z, {
                        isLoading: d,
                        handleTransition: t,
                        tab: s
                    }),
                    (0, r.jsx)(_.Z, {
                        isLoading: d,
                        handleTransition: t,
                        categories: []
                    }),
                    (0, r.jsx)(C.Z, {
                        isLoading: d,
                        handleTransition: t,
                        numVisibleItems: n,
                        rankedSkuIds: [],
                        tab: s
                    })
                ]
            });
        let y = (e, l) => {
            if (null == e) return null;
            let c = null;
            switch (e.type) {
                case i.z.HERO:
                    c = (0, r.jsx)(
                        v.Z,
                        {
                            isLoading: d,
                            handleTransition: t,
                            heroBlock: e,
                            tab: s
                        },
                        l
                    );
                    break;
                case i.z.FEATURED:
                    c = (0, r.jsx)(
                        _.Z,
                        {
                            isLoading: d,
                            handleTransition: t,
                            featuredBlockRecord: e
                        },
                        l
                    );
                    break;
                case i.z.FEED:
                    c = (0, r.jsx)(
                        C.Z,
                        {
                            isLoading: d || a,
                            handleTransition: t,
                            numVisibleItems: n,
                            rankedSkuIds: e.rankedSkuIds,
                            tab: s
                        },
                        l
                    );
                    break;
                case i.z.WIDE_BANNER:
                    c = (0, r.jsx)(
                        O.Z,
                        {
                            handleTransition: t,
                            wideBannerBlock: e,
                            tab: s
                        },
                        l
                    );
                    break;
                case i.z.SHELF:
                    c = (0, r.jsx)(
                        x.Z,
                        {
                            handleTransition: t,
                            shelf: e,
                            tab: s
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
                    className: o()(k.blockContainer, { [k.topBlockContainer]: 0 === l }),
                    children: c
                },
                l
            );
        };
        return (0, r.jsx)(r.Fragment, { children: p.map((e, t) => y(e, t)) });
    },
    P = (e) => {
        var t;
        let { isFullScreen: n, handleTransition: a, numVisibleItems: i, tab: g } = e,
            { isFetchingCategories: _, fetchCategoriesError: C, fetchPurchasesError: v, claimError: x, refreshCategories: O } = (0, f.ZP)({ location: 'CollectiblesFeedShop' }),
            P = null != (t = null != C ? C : v) ? t : x,
            E = (0, s.e7)([u.default], () => u.default.getCurrentUser()),
            w = (0, b.b)('Collectibles Shop Button'),
            B = (0, p.R)('CollectiblesFeedShop'),
            { noCache: I, includeUnpublished: T } = (0, h.Z)(),
            N = l.useCallback(() => {
                O();
            }, [O]);
        if (null == E) return null;
        if (null != P) {
            let e = [];
            null != C ? e.push('shop load fetch categories error: '.concat(P.message)) : null != v ? e.push('shop load fetch purchase error: '.concat(P.message)) : e.push('shop load claim error: '.concat(P.message)),
                d.Z.captureMessage(e.join('\n'), {
                    tags: {
                        isStaff: E.isStaff().toString(),
                        preloadEnabled: w.toString(),
                        disableCache: I.toString(),
                        includeUnpublished: T.toString()
                    }
                });
        }
        return null != C
            ? (0, r.jsx)(m.Z, {
                  onRetry: N,
                  errorOrigin: m.i.SHOP_PAGE,
                  errorMessage: C.message
              })
            : (0, r.jsx)('div', {
                  className: o()(k.shop, { [k.shopFullscreen]: n }),
                  children: (0, r.jsxs)('div', {
                      className: o()(k.content, k.mainContent),
                      children: [
                          (0, r.jsx)(S, {
                              handleTransition: a,
                              numVisibleItems: i,
                              isFetchingCategories: _,
                              tab: g
                          }),
                          g !== j.AW.CATALOG &&
                              i >= B &&
                              (0, r.jsxs)('div', {
                                  className: k.endOfFeed,
                                  children: [
                                      (0, r.jsx)(c.X6q, {
                                          variant: 'heading-md/semibold',
                                          children: y.NW.string(y.t.Yr70c3)
                                      }),
                                      (0, r.jsx)(c.zxk, {
                                          className: k.endOfFeedButton,
                                          onClick: () => {
                                              a('shop all bottom', void 0, !0);
                                          },
                                          children: (0, r.jsx)(c.Text, {
                                              variant: 'text-md/medium',
                                              color: 'always-white',
                                              children: y.NW.string(y.t.AfrvRE)
                                          })
                                      })
                                  ]
                              })
                      ]
                  })
              });
    };
