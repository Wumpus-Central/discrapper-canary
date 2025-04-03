n.d(t, { Z: () => C }), n(47120);
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
    h = n(957058),
    m = n(215023),
    _ = n(388032),
    v = n(806734);
let C = (e) => {
    let { isLoading: t, rankedSkuIds: n, handleTransition: a, numVisibleItems: C, tab: x } = e,
        O = (0, i.e7)([c.default], () => c.default.getCurrentUser()),
        y = l.createRef(),
        j = (0, h.u)(),
        k = l.useMemo(() => j(n), [t, j, n]),
        S = (0, b.a)()(k),
        P = (0, p.l)(S);
    return null == O
        ? null
        : (0, r.jsxs)('div', {
              className: o()(v.popularPicksSection, v.centeredSection),
              children: [
                  (0, r.jsxs)('div', {
                      className: v.blockHeader,
                      children: [
                          (0, r.jsx)(s.X6q, {
                              variant: 'heading-lg/semibold',
                              children: x === m.AW.ORBS ? _.NW.string(_.t.dFgeub) : _.NW.string(_.t.ivaAAw)
                          }),
                          x === m.AW.HOME &&
                              (0, r.jsx)(s.zxk, {
                                  color: s.Ttl.PRIMARY,
                                  look: s.iLD.FILLED,
                                  onClick: () => a('shop all top'),
                                  children: _.NW.string(_.t.xFcotb)
                              })
                      ]
                  }),
                  (0, r.jsx)('div', {
                      className: v.feed,
                      ref: y,
                      children: t
                          ? (0, r.jsx)(r.Fragment, { children: [...Array(12)].map((e, t) => (0, r.jsx)(f.K, {}, t + 1)) })
                          : (0, r.jsx)(r.Fragment, {
                                children: P.slice(0, C).map((e, t) => {
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
