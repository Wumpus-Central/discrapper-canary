n(47120);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(442837),
    o = n(481060),
    c = n(594174),
    d = n(381585),
    u = n(597688),
    C = n(937510),
    h = n(38900),
    p = n(709999),
    f = n(957058),
    m = n(388032),
    g = n(218142);
t.Z = (e) => {
    let { isLoading: t, rankedSkuIds: n, handleTransition: l, numVisibleItems: b } = e,
        x = (0, a.e7)([c.default], () => c.default.getCurrentUser()),
        v = i.createRef(),
        _ = (0, f.u)(),
        k = i.useMemo(() => _(n), [t, _, n]),
        j = (0, C.l)(k);
    return null == x
        ? null
        : (0, r.jsxs)('div', {
              className: s()(g.row, g.between, g.section, g.popularPicksSection),
              children: [
                  (0, r.jsxs)('div', {
                      className: g.popularPicksHeader,
                      children: [
                          (0, r.jsx)(o.Heading, {
                              variant: 'heading-lg/semibold',
                              children: m.intl.string(m.t.ivaAAw)
                          }),
                          (0, r.jsxs)(o.Clickable, {
                              className: g.shopAll,
                              onClick: () => l('shop all top'),
                              children: [
                                  (0, r.jsx)(o.ServerGridIcon, {}),
                                  (0, r.jsx)(o.Text, {
                                      variant: 'text-sm/medium',
                                      children: m.intl.string(m.t.xFcotb)
                                  })
                              ]
                          })
                      ]
                  }),
                  (0, r.jsx)('div', {
                      className: g.feed,
                      ref: v,
                      children: t
                          ? (0, r.jsx)(r.Fragment, { children: [...Array(12)].map((e, t) => (0, r.jsx)(h.K, {}, t + 1)) })
                          : (0, r.jsx)(r.Fragment, {
                                children: j.slice(0, b).map((e, t) => {
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
                                                      p.Z,
                                                      {
                                                          product: e,
                                                          category: n,
                                                          user: x,
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
