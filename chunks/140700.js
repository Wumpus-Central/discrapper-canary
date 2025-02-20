n.d(t, { Z: () => g }), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(481060),
    o = n(89182),
    a = n(164991),
    s = n(783393),
    c = n(533703),
    u = n(746728),
    d = n(388032),
    p = n(471439);
function h(e) {
    let { count: t, categoryId: n } = e,
        i = (0, s.E)({ categoryId: n });
    return (0, r.jsx)(o.iG, {
        count: t,
        name: i
    });
}
function g(e) {
    let { loadId: t } = e,
        n = a.Z.useField('categoryId'),
        g = (0, c.q)(),
        f = (0, s.E)({ categoryId: n }),
        m = i.useCallback(
            (e) => {
                (0, u.I)({
                    loadId: t,
                    categoryId: Number(e)
                });
            },
            [t]
        ),
        b = i.useMemo(
            () =>
                null == g
                    ? []
                    : g.map((e) => {
                          let [t, n] = e;
                          return {
                              id: ''.concat(t),
                              label: (0, r.jsx)(h, {
                                  categoryId: t,
                                  count: n
                              })
                          };
                      }),
            [g]
        );
    return null == g
        ? null
        : (0, r.jsxs)('div', {
              className: p.container,
              children: [
                  (0, r.jsx)(l.Text, {
                      variant: 'text-sm/medium',
                      color: 'text-secondary',
                      children: d.NW.string(d.t.f09BQE)
                  }),
                  (0, r.jsx)(o.ZP, {
                      items: b,
                      title: f,
                      onSelect: m,
                      selected: ''.concat(n),
                      'aria-label': d.NW.string(d.t.Ng5cTE),
                      variant: o.PA.FILLED
                  })
              ]
          });
}
