n.d(t, { Z: () => v }), n(47120);
var r = n(200651),
    l = n(192379),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    i = n(481060),
    d = n(594174),
    c = n(381585),
    u = n(597688),
    g = n(370039),
    h = n(937510),
    f = n(38900),
    m = n(709999),
    p = n(957058),
    b = n(215023),
    C = n(388032),
    _ = n(39532);
let v = (e) => {
    let { isLoading: t, rankedSkuIds: n, handleTransition: a, numVisibleItems: v, tab: x } = e,
        k = (0, s.e7)([d.default], () => d.default.getCurrentUser()),
        j = l.createRef(),
        S = (0, p.u)(),
        y = l.useMemo(() => S(n), [t, S, n]),
        O = (0, g.a)()(y),
        E = (0, h.l)(O);
    return null == k
        ? null
        : (0, r.jsxs)('div', {
              className: o()(_.popularPicksSection, _.centeredSection),
              children: [
                  (0, r.jsxs)('div', {
                      className: _.blockHeader,
                      children: [
                          (0, r.jsx)(i.X6q, {
                              variant: 'heading-lg/semibold',
                              children: x === b.AW.ORBS ? C.NW.string(C.t.dFgeub) : C.NW.string(C.t.ivaAAw)
                          }),
                          x === b.AW.HOME &&
                              (0, r.jsx)(i.zxk, {
                                  color: i.Ttl.PRIMARY,
                                  look: i.iLD.FILLED,
                                  onClick: () => a('shop all top'),
                                  children: C.NW.string(C.t.xFcotb)
                              })
                      ]
                  }),
                  (0, r.jsx)('div', {
                      className: _.feed,
                      ref: j,
                      children: t
                          ? (0, r.jsx)(r.Fragment, { children: [...Array(12)].map((e, t) => (0, r.jsx)(f.K, {}, t + 1)) })
                          : (0, r.jsx)(r.Fragment, {
                                children: E.slice(0, v).map((e, t) => {
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
                                                      m.Z,
                                                      {
                                                          product: e,
                                                          category: n,
                                                          user: k,
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
