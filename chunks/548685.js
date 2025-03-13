n.d(t, { Z: () => _ }), n(47120);
var r = n(200651),
    l = n(192379),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    i = n(481060),
    c = n(594174),
    d = n(381585),
    u = n(597688),
    g = n(937510),
    h = n(38900),
    f = n(709999),
    m = n(957058),
    p = n(215023),
    b = n(388032),
    C = n(39532);
let _ = (e) => {
    let { isLoading: t, rankedSkuIds: n, handleTransition: a, numVisibleItems: _, tab: v } = e,
        k = (0, s.e7)([c.default], () => c.default.getCurrentUser()),
        x = l.createRef(),
        j = (0, m.u)(),
        S = l.useMemo(() => j(n), [t, j, n]),
        y = (0, g.l)(S);
    return null == k
        ? null
        : (0, r.jsxs)('div', {
              className: o()(C.popularPicksSection, C.centeredSection),
              children: [
                  (0, r.jsxs)('div', {
                      className: C.blockHeader,
                      children: [
                          (0, r.jsx)(i.X6q, {
                              variant: 'heading-lg/semibold',
                              children: b.NW.string(b.t.ivaAAw)
                          }),
                          v === p.AW.HOME &&
                              (0, r.jsx)(i.zxk, {
                                  color: i.Ttl.PRIMARY,
                                  look: i.iLD.FILLED,
                                  onClick: () => a('shop all top'),
                                  children: b.NW.string(b.t.xFcotb)
                              })
                      ]
                  }),
                  (0, r.jsx)('div', {
                      className: C.feed,
                      ref: x,
                      children: t
                          ? (0, r.jsx)(r.Fragment, { children: [...Array(12)].map((e, t) => (0, r.jsx)(h.K, {}, t + 1)) })
                          : (0, r.jsx)(r.Fragment, {
                                children: y.slice(0, _).map((e, t) => {
                                    let n = u.Z.getCategoryForProduct(e.skuId);
                                    return null == e || null == n
                                        ? null
                                        : (0, r.jsx)(
                                              d.k0,
                                              {
                                                  newValue: {
                                                      tilePosition: t,
                                                      pageSection: 'popular picks',
                                                      categoryPosition: 2
                                                  },
                                                  children: (0, r.jsx)(
                                                      f.Z,
                                                      {
                                                          product: e,
                                                          category: n,
                                                          user: k,
                                                          tab: v,
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
