n.d(t, { Z: () => x }), n(47120);
var l = n(200651),
    r = n(192379),
    i = n(120356),
    s = n.n(i),
    a = n(442837),
    o = n(481060),
    d = n(594174),
    c = n(381585),
    u = n(597688),
    C = n(937510),
    h = n(38900),
    p = n(709999),
    m = n(957058),
    f = n(388032),
    g = n(957726);
let x = (e) => {
    let { isLoading: t, rankedSkuIds: n, handleTransition: i, numVisibleItems: x, showShopAll: b } = e,
        _ = (0, a.e7)([d.default], () => d.default.getCurrentUser()),
        v = r.createRef(),
        j = (0, m.u)(),
        k = r.useMemo(() => j(n), [t, j, n]),
        E = (0, C.l)(k);
    return null == _
        ? null
        : (0, l.jsxs)('div', {
              className: s()(g.row, g.between, g.section, g.popularPicksSection),
              children: [
                  (0, l.jsxs)('div', {
                      className: g.popularPicksHeader,
                      children: [
                          (0, l.jsx)(o.X6q, {
                              variant: 'heading-lg/semibold',
                              children: f.intl.string(f.t.ivaAAw)
                          }),
                          b &&
                              (0, l.jsxs)(o.P3F, {
                                  className: g.shopAll,
                                  onClick: () => i('shop all top'),
                                  children: [
                                      (0, l.jsx)(o.dRF, {}),
                                      (0, l.jsx)(o.Text, {
                                          variant: 'text-sm/medium',
                                          children: f.intl.string(f.t.xFcotb)
                                      })
                                  ]
                              })
                      ]
                  }),
                  (0, l.jsx)('div', {
                      className: g.feed,
                      ref: v,
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
                                                      p.Z,
                                                      {
                                                          product: e,
                                                          category: n,
                                                          user: _,
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
