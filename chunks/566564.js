n.d(t, { Z: () => P }), n(653041);
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
    h = n(752053),
    m = n(81136),
    _ = n(953655),
    v = n(548685),
    C = n(580914),
    x = n(963278),
    O = n(384067),
    y = n(215023),
    j = n(388032),
    k = n(806734);
let S = (e) => {
        let { handleTransition: t, numVisibleItems: n, isFetchingCategories: a, tab: s } = e,
            { noCache: c, includeUnpublished: u } = (0, m.Z)(),
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
            y = l.useCallback(() => {
                f();
            }, [f]);
        if (null != b)
            return (0, r.jsx)(h.Z, {
                onRetry: y,
                errorOrigin: h.i.SHOP_PAGE,
                errorMessage: b.message
            });
        if (d || 0 === p.length)
            return (0, r.jsxs)('div', {
                className: k.loadingContainer,
                children: [
                    (0, r.jsx)(C.Z, {
                        isLoading: d,
                        handleTransition: t,
                        tab: s
                    }),
                    (0, r.jsx)(_.Z, {
                        isLoading: d,
                        handleTransition: t,
                        categories: []
                    }),
                    (0, r.jsx)(v.Z, {
                        isLoading: d,
                        handleTransition: t,
                        numVisibleItems: n,
                        rankedSkuIds: [],
                        tab: s
                    })
                ]
            });
        let j = (e, l) => {
            if (null == e) return null;
            let c = null;
            switch (e.type) {
                case i.z.HERO:
                    c = (0, r.jsx)(
                        C.Z,
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
                        v.Z,
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
        return (0, r.jsx)(r.Fragment, { children: p.map((e, t) => j(e, t)) });
    },
    P = (e) => {
        var t;
        let { isFullScreen: n, handleTransition: a, numVisibleItems: i, tab: g } = e,
            { isFetchingCategories: _, fetchCategoriesError: v, fetchPurchasesError: C, claimError: x, refreshCategories: O } = (0, f.ZP)({ location: 'CollectiblesFeedShop' }),
            P = null != (t = null != v ? v : C) ? t : x,
            E = (0, s.e7)([u.default], () => u.default.getCurrentUser()),
            w = (0, b.b)('Collectibles Shop Button'),
            I = (0, p.R)('CollectiblesFeedShop'),
            { noCache: B, includeUnpublished: N } = (0, m.Z)(),
            T = l.useCallback(() => {
                O();
            }, [O]);
        if (null == E) return null;
        if (null != P) {
            let e = [];
            null != v ? e.push('shop load fetch categories error: '.concat(P.message)) : null != C ? e.push('shop load fetch purchase error: '.concat(P.message)) : e.push('shop load claim error: '.concat(P.message)),
                d.Z.captureMessage(e.join('\n'), {
                    tags: {
                        isStaff: E.isStaff().toString(),
                        preloadEnabled: w.toString(),
                        disableCache: B.toString(),
                        includeUnpublished: N.toString()
                    }
                });
        }
        return null != v
            ? (0, r.jsx)(h.Z, {
                  onRetry: T,
                  errorOrigin: h.i.SHOP_PAGE,
                  errorMessage: v.message
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
                          g !== y.AW.CATALOG &&
                              i >= I &&
                              (0, r.jsxs)('div', {
                                  className: k.endOfFeed,
                                  children: [
                                      (0, r.jsx)(c.X6q, {
                                          variant: 'heading-md/semibold',
                                          children: j.NW.string(j.t.Yr70c3)
                                      }),
                                      (0, r.jsx)(c.zxk, {
                                          className: k.endOfFeedButton,
                                          onClick: () => {
                                              a('shop all bottom', void 0, !0);
                                          },
                                          children: (0, r.jsx)(c.Text, {
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
