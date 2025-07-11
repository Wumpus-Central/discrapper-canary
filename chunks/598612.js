n.d(t, { Y: () => r });
var a = n(255367),
    i = n(793030),
    o = n(878282);
function r(e) {
    let { title: t, subtitle: n, icon: r, type: s = 'primary' } = e;
    return 'secondary' === s
        ? (0, a.jsx)('div', {
              className: o.header,
              children: (0, a.jsx)(i.X6, {
                  variant: 'heading-md/semibold',
                  color: 'text-secondary',
                  children: t
              })
          })
        : (0, a.jsxs)('div', {
              className: o.header,
              children: [
                  (0, a.jsxs)('div', {
                      className: o.headerTitle,
                      children: [
                          (0, a.jsx)(i.X6, {
                              variant: 'heading-xl/normal',
                              color: 'header-primary',
                              children: t
                          }),
                          null != r && r
                      ]
                  }),
                  null != n &&
                      (0, a.jsx)(i.xv, {
                          variant: 'text-md/normal',
                          color: 'text-secondary',
                          children: n
                      })
              ]
          });
}
