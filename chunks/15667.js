var i = r(47120);
var a = r(200651);
r(192379);
var s = r(392711);
var o = r(481060),
    l = r(388032),
    u = r(136915);
let c = (e) => {
    let n = (0, s.flatMap)(e.history, (e) => {
        var n;
        let {
                destination: [r],
                multiSelect: i
            } = e,
            a = [null, null],
            s = Object.values(null !== (n = null == i ? void 0 : i.state) && void 0 !== n ? n : {});
        return s.length > 0 && (a[0] = s.join(', ')), '' !== r && (a[1] = r), a;
    }).filter((e) => null != e);
    return 0 === n.length
        ? null
        : (0, a.jsxs)('div', {
              className: u.container,
              children: [
                  (0, a.jsx)(o.Heading, {
                      className: u.breadcrumbsHeader,
                      color: 'header-secondary',
                      variant: 'heading-sm/semibold',
                      children: l.intl.string(l.t['+3V9Tk'])
                  }),
                  n.map((e, n) =>
                      (0, a.jsxs)(
                          'div',
                          {
                              className: u.breadcrumbContainer,
                              children: [
                                  (0, a.jsx)('div', { className: u.breadcrumbDot }),
                                  (0, a.jsx)(o.Text, {
                                      variant: 'text-md/normal',
                                      className: u.breadcrumbText,
                                      children: e
                                  })
                              ]
                          },
                          ''.concat(e, '+').concat(n)
                      )
                  )
              ]
          });
};
n.Z = c;
