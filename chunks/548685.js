n.d(t, { Z: () => x }), n(47120);
var l = n(200651),
    r = n(192379),
    i = n(120356),
    a = n.n(i),
    s = n(442837),
    o = n(481060),
    d = n(594174),
    c = n(381585),
    u = n(597688),
    C = n(937510),
    h = n(38900),
    m = n(709999),
    p = n(957058),
    g = n(388032),
    f = n(472739);
let x = (e) => {
    let { isLoading: t, rankedSkuIds: n, handleTransition: i, numVisibleItems: x, showShopAll: b } = e,
        v = (0, s.e7)([d.default], () => d.default.getCurrentUser()),
        _ = r.createRef(),
        j = (0, p.u)(),
        k = r.useMemo(() => j(n), [t, j, n]),
        E = (0, C.l)(k);
    return null == v
        ? null
        : (0, l.jsxs)('div', {
              className: a()(f.row, f.between, f.section, f.popularPicksSection),
              children: [
                  (0, l.jsxs)('div', {
                      className: f.popularPicksHeader,
                      children: [
                          (0, l.jsx)(o.X6q, {
                              variant: 'heading-lg/semibold',
                              children: g.intl.string(g.t.ivaAAw)
                          }),
                          b &&
                              (0, l.jsxs)(o.P3F, {
                                  className: f.shopAll,
                                  onClick: () => i('shop all top'),
                                  children: [
                                      (0, l.jsx)(o.dRF, {}),
                                      (0, l.jsx)(o.Text, {
                                          variant: 'text-sm/medium',
                                          children: g.intl.string(g.t.xFcotb)
                                      })
                                  ]
                              })
                      ]
                  }),
                  (0, l.jsx)('div', {
                      className: f.feed,
                      ref: _,
                      children: t
                          ? (0, l.jsx)(l.Fragment, { children: [...Array(12)].map((e, t) => (0, l.jsx)(h.K, {}, t + 1)) })
                          : (0, l.jsx)(l.Fragment, {
                                children: E.slice(0, x).map((e, t) => {
                                    let n = u.Z.getCategoryForProduct(e.skuId);
                                    return null == e || null == n
                                        ? null
                                        : (0, l.jsx)(
                                              c.k0,
                                              {
                                                  newValue: {
                                                      tilePosition: t,
                                                      pageSection: 'popular picks',
                                                      categoryPosition: 2
                                                  },
                                                  children: (0, l.jsx)(
                                                      m.Z,
                                                      {
                                                          product: e,
                                                          category: n,
                                                          user: v,
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
          });
};
