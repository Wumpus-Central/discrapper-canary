n.d(t, { Y: () => o });
var i = n(255367),
    a = n(793030),
    s = n(878282);
function o(e) {
    let { title: t, subtitle: n, icon: o, type: r = 'primary' } = e;
    return 'secondary' === r
        ? (0, i.jsx)('div', {
              className: s.header,
              children: (0, i.jsx)(a.X6, {
                  variant: 'heading-md/semibold',
                  color: 'text-secondary',
                  children: t
              })
          })
        : (0, i.jsxs)('div', {
              className: s.header,
              children: [
                  (0, i.jsxs)('div', {
                      className: s.headerTitle,
                      children: [
                          (0, i.jsx)(a.X6, {
                              variant: 'heading-xl/normal',
                              color: 'header-primary',
                              children: t
                          }),
                          null != o && o
                      ]
                  }),
                  null != n &&
                      (0, i.jsx)(a.xv, {
                          variant: 'text-md/normal',
                          color: 'text-secondary',
                          children: n
                      })
              ]
          });
}
