n.d(t, {
    Z: function () {
        return p;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(481060),
    a = n(89182),
    s = n(164991),
    o = n(783393),
    c = n(112471),
    d = n(746728),
    u = n(388032),
    h = n(136676);
function m(e) {
    let { count: t, categoryId: n } = e,
        r = (0, o.E)({ categoryId: n });
    return (0, i.jsx)(a.iG, {
        count: t,
        name: r
    });
}
function p(e) {
    let { loadId: t } = e,
        n = s.Z.useField('categoryId'),
        p = (0, c.q)(),
        g = (0, o.E)({ categoryId: n }),
        f = r.useCallback(
            (e) => {
                (0, d.I)({
                    loadId: t,
                    categoryId: Number(e)
                });
            },
            [t]
        ),
        _ = r.useMemo(
            () =>
                null == p
                    ? []
                    : p.map((e) => {
                          let [t, n] = e;
                          return {
                              id: ''.concat(t),
                              label: (0, i.jsx)(m, {
                                  categoryId: t,
                                  count: n
                              })
                          };
                      }),
            [p]
        );
    return null == p
        ? null
        : (0, i.jsxs)('div', {
              className: h.container,
              children: [
                  (0, i.jsx)(l.Text, {
                      variant: 'text-sm/medium',
                      color: 'text-secondary',
                      children: u.intl.string(u.t.f09BQE)
                  }),
                  (0, i.jsx)(a.ZP, {
                      items: _,
                      title: g,
                      onSelect: f,
                      selected: ''.concat(n),
                      'aria-label': u.intl.string(u.t.Ng5cTE),
                      variant: a.PA.FILLED
                  })
              ]
          });
}
