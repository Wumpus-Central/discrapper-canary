n(47120), n(653041);
var r = n(200651),
    a = n(192379),
    i = n(120356),
    l = n.n(i),
    s = n(180650),
    o = n(685816),
    c = n(442837),
    d = n(481060),
    u = n(594174),
    m = n(960048),
    h = n(381585),
    g = n(597688),
    p = n(506800),
    f = n(67696),
    C = n(744112),
    b = n(223143),
    v = n(364111),
    x = n(937510),
    _ = n(752053),
    k = n(38900),
    I = n(709999),
    S = n(81136),
    E = n(953655),
    j = n(580914),
    T = n(957058),
    B = n(215023),
    N = n(388032),
    y = n(765075);
let L = (e) => {
    let { handleTransition: t } = e,
        { noCache: n, includeUnpublished: i } = (0, S.Z)(),
        {
            isFetchingShopHome: l,
            fetchShopHomeError: s,
            shopBlocks: c,
            refreshShopHome: d
        } = (0, v.E)({
            noCache: n,
            includeUnpublished: i,
            includeBundles: !0
        }),
        u = a.useCallback(() => {
            d();
        }, [d]);
    return null != s
        ? (0, r.jsx)(_.Z, {
              onRetry: u,
              errorOrigin: _.i.SHOP_PAGE,
              errorMessage: s.message
          })
        : l || 0 === c.length
          ? (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(j.Z, {
                        isLoading: l,
                        handleTransition: t
                    }),
                    (0, r.jsx)(E.Z, {
                        isLoading: l,
                        handleTransition: t,
                        categories: []
                    })
                ]
            })
          : (0, r.jsx)(r.Fragment, {
                children: c.map((e, n) => {
                    if (null == e) return null;
                    switch (e.type) {
                        case o.z.HERO:
                            return (0, r.jsx)(
                                j.Z,
                                {
                                    isLoading: l,
                                    handleTransition: t,
                                    heroBlock: e
                                },
                                n
                            );
                        case o.z.FEATURED:
                            return (0, r.jsx)(
                                E.Z,
                                {
                                    isLoading: l,
                                    handleTransition: t,
                                    featuredBlockRecord: e
                                },
                                n
                            );
                        default:
                            return null;
                    }
                })
            });
};
t.Z = (e) => {
    var t;
    let { isFullScreen: n, handleTransition: i, numVisibleItems: o } = e,
        { categories: v, isFetchingCategories: P, fetchCategoriesError: Z, fetchPurchasesError: O, claimError: w, refreshCategories: A } = (0, b.ZP)({ location: 'CollectiblesFeedShop' }),
        R = null !== (t = null != Z ? Z : O) && void 0 !== t ? t : w,
        F = Array.from(v.values()),
        H = (0, c.e7)([u.default], () => u.default.getCurrentUser()),
        D = (0, f.n)('CollectiblesFeedShop'),
        V = (0, p.c)('CollectiblesFeedShop') && null != g.Z.getCategory(s.T.ROBERT),
        M = a.createRef(),
        W = (0, C.b)('Collectibles Shop Button'),
        { noCache: U, includeUnpublished: G } = (0, S.Z)(),
        z = (0, T.u)(),
        $ = F[0],
        K = [F[1], g.Z.getCategory(V ? s.T.ROBERT : s.T.ANIME_V2)],
        q = a.useCallback(() => {
            A();
        }, [A]),
        J = a.useMemo(() => z(B.yo), [P, z]),
        Y = (0, x.l)(J);
    if (null == H) return null;
    if (null != R) {
        let e = [];
        null != Z ? e.push('shop load fetch categories error: '.concat(R.message)) : null != O ? e.push('shop load fetch purchase error: '.concat(R.message)) : e.push('shop load claim error: '.concat(R.message)),
            m.Z.captureMessage(e.join('\n'), {
                tags: {
                    isStaff: H.isStaff().toString(),
                    preloadEnabled: W.toString(),
                    disableCache: U.toString(),
                    includeUnpublished: G.toString()
                }
            });
    }
    return null != Z
        ? (0, r.jsx)(_.Z, {
              onRetry: q,
              errorOrigin: _.i.SHOP_PAGE,
              errorMessage: Z.message
          })
        : (0, r.jsx)(r.Fragment, {
              children: (0, r.jsx)('div', {
                  className: l()(y.shop, { [y.shopFullscreen]: n }),
                  children: (0, r.jsxs)('div', {
                      className: l()(y.content, y.mainContent),
                      children: [
                          D
                              ? (0, r.jsx)(L, { handleTransition: i })
                              : (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(j.Z, {
                                            isLoading: P,
                                            handleTransition: i,
                                            category: $
                                        }),
                                        (0, r.jsx)(E.Z, {
                                            isLoading: P,
                                            handleTransition: i,
                                            categories: K
                                        })
                                    ]
                                }),
                          (0, r.jsxs)('div', {
                              className: l()(y.row, y.between, y.section, y.popularPicksSection),
                              children: [
                                  (0, r.jsxs)('div', {
                                      className: y.popularPicksHeader,
                                      children: [
                                          (0, r.jsx)(d.Heading, {
                                              variant: 'heading-lg/semibold',
                                              children: N.intl.string(N.t.ivaAAw)
                                          }),
                                          (0, r.jsxs)(d.Clickable, {
                                              className: y.shopAll,
                                              onClick: () => i('shop all top'),
                                              children: [
                                                  (0, r.jsx)(d.ServerGridIcon, {}),
                                                  (0, r.jsx)(d.Text, {
                                                      variant: 'text-sm/medium',
                                                      children: N.intl.string(N.t.xFcotb)
                                                  })
                                              ]
                                          })
                                      ]
                                  }),
                                  (0, r.jsx)('div', {
                                      className: y.feed,
                                      ref: M,
                                      children: P
                                          ? (0, r.jsx)(r.Fragment, { children: [...Array(12)].map((e, t) => (0, r.jsx)(k.K, {}, t + 1)) })
                                          : (0, r.jsx)(r.Fragment, {
                                                children: Y.slice(0, o).map((e, t) => {
                                                    let n = g.Z.getCategoryForProduct(e.skuId);
                                                    return null == e || null == n
                                                        ? null
                                                        : (0, r.jsx)(
                                                              h.k0,
                                                              {
                                                                  newValue: {
                                                                      tilePosition: t,
                                                                      pageSection: 'popular picks',
                                                                      categoryPosition: 2
                                                                  },
                                                                  children: (0, r.jsx)(
                                                                      I.Z,
                                                                      {
                                                                          product: e,
                                                                          category: n,
                                                                          user: H,
                                                                          isInFeedView: !0
                                                                      },
                                                                      e.skuId
                                                                  )
                                                              },
                                                              null == e ? void 0 : e.skuId
                                                          );
                                                })
                                            })
                                  })
                              ]
                          }),
                          o >= B.iA &&
                              (0, r.jsxs)('div', {
                                  className: y.endOfFeed,
                                  children: [
                                      (0, r.jsx)(d.Heading, {
                                          variant: 'heading-md/semibold',
                                          children: N.intl.string(N.t.Yr70c3)
                                      }),
                                      (0, r.jsx)(d.Button, {
                                          className: y.endOfFeedButton,
                                          onClick: () => {
                                              i('shop all bottom', void 0, !0);
                                          },
                                          children: (0, r.jsx)(d.Text, {
                                              variant: 'text-md/medium',
                                              color: 'always-white',
                                              children: N.intl.string(N.t.AfrvRE)
                                          })
                                      })
                                  ]
                              })
                      ]
                  })
              })
          });
};
