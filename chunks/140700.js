n.d(t, { Z: () => f }), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(481060),
    a = n(89182),
    o = n(164991),
    s = n(783393),
    c = n(112471),
    u = n(746728),
    d = n(388032),
    p = n(882375);
function h(e) {
    let { count: t, categoryId: n } = e,
        i = (0, s.E)({ categoryId: n });
    return (0, r.jsx)(a.iG, {
        count: t,
        name: i
    });
}
function f(e) {
    let { loadId: t } = e,
        n = o.Z.useField('categoryId'),
        f = (0, c.q)(),
        g = (0, s.E)({ categoryId: n }),
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
                null == f
                    ? []
                    : f.map((e) => {
                          let [t, n] = e;
                          return {
                              id: ''.concat(t),
                              label: (0, r.jsx)(h, {
                                  categoryId: t,
                                  count: n
                              })
                          };
                      }),
            [f]
        );
    return null == f
        ? null
        : (0, r.jsxs)('div', {
              className: p.container,
              children: [
                  (0, r.jsx)(l.Text, {
                      variant: 'text-sm/medium',
                      color: 'text-secondary',
                      children: d.NW.string(d.t.f09BQE)
                  }),
                  (0, r.jsx)(a.ZP, {
                      items: b,
                      title: g,
                      onSelect: m,
                      selected: ''.concat(n),
                      'aria-label': d.NW.string(d.t.Ng5cTE),
                      variant: a.PA.FILLED
                  })
              ]
          });
}
