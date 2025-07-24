n.d(t, { Y: () => s });
var a = n(255367),
    i = n(793030),
    r = n(878282);
function s(e) {
    let { title: t, subtitle: n, icon: s, type: o = 'primary' } = e;
    return 'secondary' === o
        ? (0, a.jsx)('div', {
              className: r.header,
              children: (0, a.jsx)(i.X6, {
                  variant: 'heading-md/semibold',
                  color: 'text-secondary',
                  children: t
              })
          })
        : (0, a.jsxs)('div', {
              className: r.header,
              children: [
                  (0, a.jsxs)('div', {
                      className: r.headerTitle,
                      children: [
                          (0, a.jsx)(i.X6, {
                              variant: 'heading-xl/normal',
                              color: 'header-primary',
                              children: t
                          }),
                          null != s && s
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
