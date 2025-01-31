n.d(t, { Z: () => l }), n(47120);
var i = n(200651);
n(192379);
var r = n(392711),
    a = n(481060),
    s = n(388032),
    o = n(136915);
let l = (e) => {
    let t = (0, r.flatMap)(e.history, (e) => {
        var t;
        let {
                destination: [n],
                multiSelect: i
            } = e,
            r = [null, null],
            a = Object.values(null !== (t = null == i ? void 0 : i.state) && void 0 !== t ? t : {});
        return a.length > 0 && (r[0] = a.join(', ')), '' !== n && (r[1] = n), r;
    }).filter((e) => null != e);
    return 0 === t.length
        ? null
        : (0, i.jsxs)('div', {
              className: o.container,
              children: [
                  (0, i.jsx)(a.X6q, {
                      className: o.breadcrumbsHeader,
                      color: 'header-secondary',
                      variant: 'heading-sm/semibold',
                      children: s.intl.string(s.t['+3V9Tk'])
                  }),
                  t.map((e, t) =>
                      (0, i.jsxs)(
                          'div',
                          {
                              className: o.breadcrumbContainer,
                              children: [
                                  (0, i.jsx)('div', { className: o.breadcrumbDot }),
                                  (0, i.jsx)(a.Text, {
                                      variant: 'text-md/normal',
                                      className: o.breadcrumbText,
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
