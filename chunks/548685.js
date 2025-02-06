n.d(t, { Z: () => x }), n(47120);
var r = n(200651),
    l = n(192379),
    i = n(120356),
    a = n.n(i),
    s = n(442837),
    o = n(481060),
    d = n(594174),
    c = n(381585),
    u = n(597688),
    C = n(937510),
    h = n(38900),
    p = n(709999),
    m = n(957058),
    g = n(388032),
    f = n(218142);
let x = (e) => {
    let { isLoading: t, rankedSkuIds: n, handleTransition: i, numVisibleItems: x } = e,
        _ = (0, s.e7)([d.default], () => d.default.getCurrentUser()),
        v = l.createRef(),
        b = (0, m.u)(),
        k = l.useMemo(() => b(n), [t, b, n]),
        j = (0, C.l)(k);
    return null == _
        ? null
        : (0, r.jsxs)('div', {
              className: a()(f.row, f.between, f.section, f.popularPicksSection),
              children: [
                  (0, r.jsxs)('div', {
                      className: f.popularPicksHeader,
                      children: [
                          (0, r.jsx)(o.X6q, {
                              variant: 'heading-lg/semibold',
                              children: g.intl.string(g.t.ivaAAw)
                          }),
                          (0, r.jsxs)(o.P3F, {
                              className: f.shopAll,
                              onClick: () => i('shop all top'),
                              children: [
                                  (0, r.jsx)(o.dRF, {}),
                                  (0, r.jsx)(o.Text, {
                                      variant: 'text-sm/medium',
                                      children: g.intl.string(g.t.xFcotb)
                                  })
                              ]
                          })
                      ]
                  }),
                  (0, r.jsx)('div', {
                      className: f.feed,
                      ref: v,
                      children: t
                          ? (0, r.jsx)(r.Fragment, { children: [...Array(12)].map((e, t) => (0, r.jsx)(h.K, {}, t + 1)) })
                          : (0, r.jsx)(r.Fragment, {
                                children: j.slice(0, x).map((e, t) => {
                                    let n = u.Z.getCategoryForProduct(e.skuId);
                                    return null == e || null == n
                                        ? null
                                        : (0, r.jsx)(
                                              c.k0,
                                              {
                                                  newValue: {
                                                      tilePosition: t,
                                                      pageSection: 'popular picks',
                                                      categoryPosition: 2
                                                  },
                                                  children: (0, r.jsx)(
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
