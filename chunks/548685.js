n.d(t, { Z: () => x }), n(388685);
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
    m = n(619899),
    h = n(957058),
    _ = n(215023),
    C = n(388032),
    v = n(806734);
let x = (e) => {
    let { isLoading: t, rankedSkuIds: n, handleTransition: a, numVisibleItems: x, tab: O } = e,
        j = (0, i.e7)([c.default], () => c.default.getCurrentUser()),
        y = l.createRef(),
        S = (0, h.u)(),
        k = l.useMemo(() => S(n), [t, S, n]),
        P = (0, b.a)()(k),
        E = (0, p.l)(P),
        B = (0, m.St)(E);
    return null == j
        ? null
        : (0, r.jsxs)('div', {
              className: o()(v.popularPicksSection, v.centeredSection),
              children: [
                  (0, r.jsxs)('div', {
                      className: v.blockHeader,
                      children: [
                          (0, r.jsx)(s.X6q, {
                              variant: 'heading-lg/semibold',
                              children: O === _.AW.ORBS ? C.NW.string(C.t.dFgeub) : C.NW.string(C.t.ivaAAw)
                          }),
                          O === _.AW.HOME &&
                              (0, r.jsx)(s.zxk, {
                                  color: s.Ttl.PRIMARY,
                                  look: s.iLD.FILLED,
                                  onClick: () => a('shop all top'),
                                  children: C.NW.string(C.t.xFcotb)
                              })
                      ]
                  }),
                  (0, r.jsx)('div', {
                      className: v.feed,
                      ref: y,
                      children: t
                          ? (0, r.jsx)(r.Fragment, { children: [...Array(12)].map((e, t) => (0, r.jsx)(f.K, {}, t + 1)) })
                          : (0, r.jsx)(r.Fragment, {
                                children: B.slice(0, x).map((e, t) => {
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
                                                          user: j,
                                                          tab: O
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
