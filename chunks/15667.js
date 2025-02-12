n.d(t, { Z: () => o }), n(47120);
var l = n(200651);
n(192379);
var i = n(392711),
    r = n(481060),
    a = n(388032),
    s = n(386092);
let o = (e) => {
    let t = (0, i.flatMap)(e.history, (e) => {
        var t;
        let {
                destination: [n],
                multiSelect: l
            } = e,
            i = [null, null],
            r = Object.values(null !== (t = null == l ? void 0 : l.state) && void 0 !== t ? t : {});
        return r.length > 0 && (i[0] = r.join(', ')), '' !== n && (i[1] = n), i;
    }).filter((e) => null != e);
    return 0 === t.length
        ? null
        : (0, l.jsxs)('div', {
              className: s.container,
              children: [
                  (0, l.jsx)(r.X6q, {
                      className: s.breadcrumbsHeader,
                      color: 'header-secondary',
                      variant: 'heading-sm/semibold',
                      children: a.intl.string(a.t['+3V9Tk'])
                  }),
                  t.map((e, t) =>
                      (0, l.jsxs)(
                          'div',
                          {
                              className: s.breadcrumbContainer,
                              children: [
                                  (0, l.jsx)('div', { className: s.breadcrumbDot }),
                                  (0, l.jsx)(r.Text, {
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
