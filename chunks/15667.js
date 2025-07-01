(n.d(t, { Z: () => c }), n(388685));
var r = n(255367);
n(73800);
var a = n(392711),
    i = n(481060),
    l = n(388032),
    o = n(130883),
    s = n(646727);
let c = (e) => {
    let t = (0, a.flatMap)(e.history, (e) => {
        var t;
        let {
                destination: [n],
                multiSelect: r
            } = e,
            a = [null, null],
            i = Object.values(null != (t = null == r ? void 0 : r.state) ? t : {});
        return (i.length > 0 && (a[0] = i.join(', ')), '' !== n && (a[1] = n), a);
    }).filter((e) => null != e);
    return 0 === t.length
        ? null
        : (0, r.jsxs)('div', {
              className: s.container,
              children: [
                  (0, r.jsx)(i.X6q, {
                      className: s.breadcrumbsHeader,
                      color: 'header-secondary',
                      variant: 'heading-sm/semibold',
                      children: e.isModeratorReport ? l.intl.string(o.default['6mx/DA']) : l.intl.string(l.t['+3V9Tk'])
                  }),
                  t.map((e, t) =>
                      (0, r.jsxs)(
                          'div',
                          {
                              className: s.breadcrumbContainer,
                              children: [
                                  (0, r.jsx)('div', { className: s.breadcrumbDot }),
                                  (0, r.jsx)(i.Text, {
                                      variant: 'text-md/normal',
                                      className: s.breadcrumbText,
                                      children: e
                                  })
                              ]
                          },
                          ''.concat(e, '+').concat(t)
                      )
                  )
              ]
          });
};
