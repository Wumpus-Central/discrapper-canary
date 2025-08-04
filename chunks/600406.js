(n.d(t, {
    Y: () => p,
    k: () => m
}),
    n(413496),
    n(433524),
    n(35282));
var r = n(255367),
    i = n(73800),
    a = n(442837),
    o = n(51251),
    s = n(481060),
    l = n(37234),
    c = n(594174),
    u = n(997612),
    d = n(981631),
    f = n(993157);
let _ = RegExp('^dev://mana(/([-\\w._0-9]+))?$', 'i');
function p(e) {
    return _.test(e);
}
function h(e) {
    let t = e.match(_);
    return null == t || t.length < 2 ? null : t[2];
}
function m(e) {
    var t;
    let n = (0, a.e7)([c.default], () => {
            let e = c.default.getCurrentUser();
            return (null == e ? void 0 : e.isStaff()) || (null == e ? void 0 : e.isStaffPersonal());
        }),
        _ = i.useMemo(() => {
            var t;
            let n = h(e.url);
            return null == (t = o.$.groups.find((e) => e.stories.some((e) => e.id === n))) ? void 0 : t.stories.find((e) => e.id === n);
        }, [e.url]),
        p = null != (t = null == _ ? void 0 : _.name) ? t : 'Mana Playground',
        m =
            null != _ && null != _.docs
                ? (0, r.jsx)(s.eee, {
                      href: _.docs,
                      children: 'Documentation'
                  })
                : 'Explore the Mana Design System',
        g = i.useCallback(() => {
            (null != _ && u.$.setState({ selected: _.id }), (0, l.jN)(d.S9g.MANA_PLAYGROUND));
        }, [_]);
    return n
        ? (0, r.jsx)('div', {
              className: f.root,
              'data-has-story': null != _,
              children: (0, r.jsxs)(s.Kqy, {
                  direction: null == _ ? 'vertical' : 'horizontal',
                  align: null == _ ? 'start' : 'center',
                  gap: 12,
                  justify: null == _ ? 'end' : 'space-between',
                  children: [
                      (0, r.jsx)('div', {
                          className: f.header,
                          children: (0, r.jsxs)(s.Kqy, {
                              direction: 'horizontal',
                              align: 'start',
                              gap: 8,
                              children: [
                                  (0, r.jsx)(s.hh5, { size: 'lg' }),
                                  (0, r.jsxs)(s.Kqy, {
                                      direction: 'vertical',
                                      gap: 0,
                                      children: [
                                          (0, r.jsx)(s.Text, {
                                              variant: 'text-md/semibold',
                                              children: p
                                          }),
                                          (0, r.jsx)(s.Text, {
                                              variant: 'text-sm/normal',
                                              children: m
                                          })
                                      ]
                                  })
                              ]
                          })
                      }),
                      (0, r.jsx)(s.zxk, {
                          size: 'sm',
                          onClick: g,
                          text: 'Open Playground',
                          fullWidth: null == _
                      })
                  ]
              })
          })
        : null;
}
