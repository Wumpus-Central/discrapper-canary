n.d(t, { Z: () => v }), n(388685);
var r = n(200651),
    l = n(192379),
    a = n(120356),
    o = n.n(a),
    i = n(442837),
    s = n(481060),
    c = n(594174),
    u = n(381585),
    d = n(597688),
    b = n(370039),
    p = n(937510),
    f = n(38900),
    g = n(709999),
    m = n(957058),
    h = n(215023),
    _ = n(388032),
    C = n(806734);
let v = (e) => {
    let { isLoading: t, rankedSkuIds: n, handleTransition: a, numVisibleItems: v, tab: x } = e,
        O = (0, i.e7)([c.default], () => c.default.getCurrentUser()),
        j = l.createRef(),
        y = (0, m.u)(),
        k = l.useMemo(() => y(n), [t, y, n]),
        S = (0, b.a)()(k),
        P = (0, p.l)(S);
    return null == O
        ? null
        : (0, r.jsxs)('div', {
              className: o()(C.popularPicksSection, C.centeredSection),
              children: [
                  (0, r.jsxs)('div', {
                      className: C.blockHeader,
                      children: [
                          (0, r.jsx)(s.X6q, {
                              variant: 'heading-lg/semibold',
                              children: x === h.AW.ORBS ? _.NW.string(_.t.dFgeub) : _.NW.string(_.t.ivaAAw)
                          }),
                          x === h.AW.HOME &&
                              (0, r.jsx)(s.zxk, {
                                  color: s.Ttl.PRIMARY,
                                  look: s.iLD.FILLED,
                                  onClick: () => a('shop all top'),
                                  children: _.NW.string(_.t.xFcotb)
                              })
                      ]
                  }),
                  (0, r.jsx)('div', {
                      className: C.feed,
                      ref: j,
                      children: t
                          ? (0, r.jsx)(r.Fragment, { children: [...Array(12)].map((e, t) => (0, r.jsx)(f.K, {}, t + 1)) })
                          : (0, r.jsx)(r.Fragment, {
                                children: P.slice(0, v).map((e, t) => {
                                    let n = d.Z.getCategoryForProduct(e.skuId);
                                    return null == e || null == n
                                        ? null
                                        : (0, r.jsx)(
                                              u.k0,
                                              {
                                                  newValue: {
                                                      tilePosition: t,
                                                      pageSection: 'popular picks',
                                                      categoryPosition: 2
                                                  },
                                                  children: (0, r.jsx)(
                                                      g.Z,
                                                      {
                                                          product: e,
                                                          category: n,
                                                          user: O,
                                                          tab: x
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
