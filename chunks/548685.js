r.d(t, { Z: () => v }), r(47120);
var n = r(200651),
    l = r(192379),
    i = r(120356),
    a = r.n(i),
    o = r(442837),
    s = r(481060),
    c = r(594174),
    d = r(381585),
    u = r(597688),
    p = r(937510),
    f = r(38900),
    h = r(709999),
    C = r(957058),
    m = r(215023),
    b = r(388032),
    g = r(974492);
let v = (e) => {
    let { isLoading: t, rankedSkuIds: r, handleTransition: i, numVisibleItems: v, tab: x } = e,
        _ = (0, o.e7)([c.default], () => c.default.getCurrentUser()),
        j = l.createRef(),
        y = (0, C.u)(),
        O = l.useMemo(() => y(r), [t, y, r]),
        k = (0, p.l)(O);
    return null == _
        ? null
        : (0, n.jsxs)('div', {
              className: a()(g.row, g.between, g.section, g.popularPicksSection),
              children: [
                  (0, n.jsxs)('div', {
                      className: g.popularPicksHeader,
                      children: [
                          (0, n.jsx)(s.X6q, {
                              variant: 'heading-lg/semibold',
                              children: b.NW.string(b.t.ivaAAw)
                          }),
                          x === m.AW.HOME &&
                              (0, n.jsxs)(s.P3F, {
                                  className: g.shopAll,
                                  onClick: () => i('shop all top'),
                                  children: [
                                      (0, n.jsx)(s.dRF, {}),
                                      (0, n.jsx)(s.Text, {
                                          variant: 'text-sm/medium',
                                          children: b.NW.string(b.t.xFcotb)
                                      })
                                  ]
                              })
                      ]
                  }),
                  (0, n.jsx)('div', {
                      className: g.feed,
                      ref: j,
                      children: t
                          ? (0, n.jsx)(n.Fragment, { children: [...Array(12)].map((e, t) => (0, n.jsx)(f.K, {}, t + 1)) })
                          : (0, n.jsx)(n.Fragment, {
                                children: k.slice(0, v).map((e, t) => {
                                    let r = u.Z.getCategoryForProduct(e.skuId);
                                    return null == e || null == r
                                        ? null
                                        : (0, n.jsx)(
                                              d.k0,
                                              {
                                                  newValue: {
                                                      tilePosition: t,
                                                      pageSection: 'popular picks',
                                                      categoryPosition: 2
                                                  },
                                                  children: (0, n.jsx)(
                                                      h.Z,
                                                      {
                                                          product: e,
                                                          category: r,
                                                          user: _,
                                                          tab: x,
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
