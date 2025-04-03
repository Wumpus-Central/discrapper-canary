n.d(t, { Z: () => u });
var r = n(200651);
n(192379);
var i = n(399606),
    s = n(481060),
    a = n(594174),
    l = n(51144),
    o = n(546791),
    c = n(198952),
    d = n(772998);
let u = (e) => {
    let { userId: t, timestamp: n, timestampFormatter: u } = e,
        m = (0, i.e7)([a.default], () => a.default.getUser(t));
    return void 0 === m
        ? null
        : (0, r.jsxs)('div', {
              className: d.container,
              children: [
                  (0, r.jsx)(c.r, {
                      user: m,
                      avatarSize: s.EFr.SIZE_40
                  }),
                  (0, r.jsx)('div', {
                      children: (0, r.jsxs)('div', {
                          className: d.descriptors,
                          children: [
                              (0, r.jsx)(s.Text, {
                                  variant: 'text-md/semibold',
                                  children: l.ZP.getName(m)
                              }),
                              (0, r.jsx)(s.Text, {
                                  variant: 'text-xs/medium',
                                  color: 'text-muted',
                                  children: (0, o.LI)(new Date(n).getTime(), u)
                              })
                          ]
                      })
                  })
              ]
          });
};
