n(47120);
var r = n(200651),
    a = n(192379),
    i = n(120356),
    l = n.n(i),
    s = n(442837),
    o = n(481060),
    c = n(594174),
    d = n(381585),
    u = n(597688),
    m = n(937510),
    h = n(38900),
    g = n(709999),
    p = n(957058),
    f = n(388032),
    C = n(218142);
t.Z = (e) => {
    let { isLoading: t, rankedSkuIds: n, handleTransition: i, numVisibleItems: b } = e,
        v = (0, s.e7)([c.default], () => c.default.getCurrentUser()),
        x = a.createRef(),
        _ = (0, p.u)(),
        k = a.useMemo(() => _(n), [t, _, n]),
        I = (0, m.l)(k);
    return null == v
        ? null
        : (0, r.jsxs)('div', {
              className: l()(C.row, C.between, C.section, C.popularPicksSection),
              children: [
                  (0, r.jsxs)('div', {
                      className: C.popularPicksHeader,
                      children: [
                          (0, r.jsx)(o.Heading, {
                              variant: 'heading-lg/semibold',
                              children: f.intl.string(f.t.ivaAAw)
                          }),
                          (0, r.jsxs)(o.Clickable, {
                              className: C.shopAll,
                              onClick: () => i('shop all top'),
                              children: [
                                  (0, r.jsx)(o.ServerGridIcon, {}),
                                  (0, r.jsx)(o.Text, {
                                      variant: 'text-sm/medium',
                                      children: f.intl.string(f.t.xFcotb)
                                  })
                              ]
                          })
                      ]
                  }),
                  (0, r.jsx)('div', {
                      className: C.feed,
                      ref: x,
                      children: t
                          ? (0, r.jsx)(r.Fragment, { children: [...Array(12)].map((e, t) => (0, r.jsx)(h.K, {}, t + 1)) })
                          : (0, r.jsx)(r.Fragment, {
                                children: I.slice(0, b).map((e, t) => {
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
                                                      g.Z,
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
