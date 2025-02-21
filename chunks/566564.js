r.d(t, { Z: () => k }), r(653041);
var n = r(200651),
    l = r(192379),
    i = r(120356),
    a = r.n(i),
    o = r(685816),
    s = r(442837),
    c = r(481060),
    d = r(594174),
    u = r(960048),
    p = r(744112),
    f = r(223143),
    h = r(364111),
    C = r(752053),
    m = r(81136),
    b = r(953655),
    g = r(548685),
    v = r(580914),
    x = r(384067),
    _ = r(215023),
    j = r(388032),
    y = r(974492);
let O = (e) => {
        let { handleTransition: t, numVisibleItems: r, isFetchingCategories: i, tab: a } = e,
            { noCache: s, includeUnpublished: c } = (0, m.Z)(),
            {
                isFetchingShopHome: d,
                fetchShopHomeError: u,
                shopBlocks: p,
                refreshShopHome: f
            } = (0, h.E)(a, {
                noCache: s,
                includeUnpublished: c,
                includeBundles: !0
            }),
            _ = l.useCallback(() => {
                f();
            }, [f]);
        return null != u
            ? (0, n.jsx)(C.Z, {
                  onRetry: _,
                  errorOrigin: C.i.SHOP_PAGE,
                  errorMessage: u.message
              })
            : d || 0 === p.length
              ? (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)(v.Z, {
                            isLoading: d,
                            handleTransition: t,
                            tab: a
                        }),
                        (0, n.jsx)(b.Z, {
                            isLoading: d,
                            handleTransition: t,
                            categories: []
                        }),
                        (0, n.jsx)(g.Z, {
                            isLoading: d,
                            handleTransition: t,
                            numVisibleItems: r,
                            rankedSkuIds: [],
                            tab: a
                        })
                    ]
                })
              : (0, n.jsx)(n.Fragment, {
                    children: p.map((e, l) => {
                        if (null == e) return null;
                        switch (e.type) {
                            case o.z.HERO:
                                return (0, n.jsx)(
                                    v.Z,
                                    {
                                        isLoading: d,
                                        handleTransition: t,
                                        heroBlock: e,
                                        tab: a
                                    },
                                    l
                                );
                            case o.z.FEATURED:
                                return (0, n.jsx)(
                                    b.Z,
                                    {
                                        isLoading: d,
                                        handleTransition: t,
                                        featuredBlockRecord: e
                                    },
                                    l
                                );
                            case o.z.FEED:
                                return (0, n.jsx)(
                                    g.Z,
                                    {
                                        isLoading: d || i,
                                        handleTransition: t,
                                        numVisibleItems: r,
                                        rankedSkuIds: e.rankedSkuIds,
                                        tab: a
                                    },
                                    l
                                );
                            case o.z.WIDE_BANNER:
                                return (0, n.jsx)(
                                    x.Z,
                                    {
                                        handleTransition: t,
                                        wideBannerBlock: e,
                                        tab: a
                                    },
                                    l
                                );
                            default:
                                return null;
                        }
                    })
                });
    },
    k = (e) => {
        var t;
        let { isFullScreen: r, handleTransition: i, numVisibleItems: o, tab: h } = e,
            { isFetchingCategories: b, fetchCategoriesError: g, fetchPurchasesError: v, claimError: x, refreshCategories: k } = (0, f.ZP)({ location: 'CollectiblesFeedShop' }),
            P = null !== (t = null != g ? g : v) && void 0 !== t ? t : x,
            S = (0, s.e7)([d.default], () => d.default.getCurrentUser()),
            E = (0, p.b)('Collectibles Shop Button'),
            { noCache: w, includeUnpublished: L } = (0, m.Z)(),
            I = l.useCallback(() => {
                k();
            }, [k]);
        if (null == S) return null;
        if (null != P) {
            let e = [];
            null != g ? e.push('shop load fetch categories error: '.concat(P.message)) : null != v ? e.push('shop load fetch purchase error: '.concat(P.message)) : e.push('shop load claim error: '.concat(P.message)),
                u.Z.captureMessage(e.join('\n'), {
                    tags: {
                        isStaff: S.isStaff().toString(),
                        preloadEnabled: E.toString(),
                        disableCache: w.toString(),
                        includeUnpublished: L.toString()
                    }
                });
        }
        return null != g
            ? (0, n.jsx)(C.Z, {
                  onRetry: I,
                  errorOrigin: C.i.SHOP_PAGE,
                  errorMessage: g.message
              })
            : (0, n.jsx)('div', {
                  className: a()(y.shop, { [y.shopFullscreen]: r }),
                  children: (0, n.jsxs)('div', {
                      className: a()(y.content, y.mainContent),
                      children: [
                          (0, n.jsx)(O, {
                              handleTransition: i,
                              numVisibleItems: o,
                              isFetchingCategories: b,
                              tab: h
                          }),
                          h === _.AW.HOME &&
                              o >= _.iA &&
                              (0, n.jsxs)('div', {
                                  className: y.endOfFeed,
                                  children: [
                                      (0, n.jsx)(c.X6q, {
                                          variant: 'heading-md/semibold',
                                          children: j.NW.string(j.t.Yr70c3)
                                      }),
                                      (0, n.jsx)(c.zxk, {
                                          className: y.endOfFeedButton,
                                          onClick: () => {
                                              i('shop all bottom', void 0, !0);
                                          },
                                          children: (0, n.jsx)(c.Text, {
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
