n.d(t, { Z: () => u });
var i = n(255367);
n(73800);
var r = n(399606),
    s = n(481060),
    l = n(594174),
    a = n(51144),
    o = n(546791),
    c = n(198952),
    d = n(772998);
let u = (e) => {
    let { userId: t, timestamp: n, timestampFormatter: u } = e,
        m = (0, r.e7)([l.default], () => l.default.getUser(t));
    return void 0 === m
        ? null
        : (0, i.jsxs)('div', {
              className: d.container,
              children: [
                  (0, i.jsx)(c.r, {
                      user: m,
                      avatarSize: s.EFr.SIZE_40
                  }),
                  (0, i.jsx)('div', {
                      children: (0, i.jsxs)('div', {
                          className: d.descriptors,
                          children: [
                              (0, i.jsx)(s.Text, {
                                  variant: 'text-md/semibold',
                                  children: a.ZP.getName(m)
                              }),
                              (0, i.jsx)(s.Text, {
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
