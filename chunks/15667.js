n.d(t, { Z: () => c }), n(388685);
var r = n(255367);
n(73800);
var l = n(392711),
    i = n(481060),
    a = n(388032),
    o = n(776571),
    s = n(646727);
let c = (e) => {
    let t = (0, l.flatMap)(e.history, (e) => {
        var t;
        let {
                destination: [n],
                multiSelect: r
            } = e,
            l = [null, null],
            i = Object.values(null != (t = null == r ? void 0 : r.state) ? t : {});
        return i.length > 0 && (l[0] = i.join(', ')), '' !== n && (l[1] = n), l;
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
                      children: e.isModeratorReport ? a.intl.string(o.default['6mx/DA']) : a.intl.string(a.t['+3V9Tk'])
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
