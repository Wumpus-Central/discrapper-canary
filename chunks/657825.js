n.d(t, { Z: () => u });
var i = n(200651);
n(192379);
var r = n(399606),
    a = n(481060),
    s = n(594174),
    l = n(51144),
    o = n(546791),
    c = n(198952),
    d = n(592468);
let u = (e) => {
    let { userId: t, timestamp: n, timestampFormatter: u } = e,
        m = (0, r.e7)([s.default], () => s.default.getUser(t));
    return void 0 === m
        ? null
        : (0, i.jsxs)('div', {
              className: d.container,
              children: [
                  (0, i.jsx)(c.r, {
                      user: m,
                      avatarSize: a.EFr.SIZE_40
                  }),
                  (0, i.jsx)('div', {
                      children: (0, i.jsxs)('div', {
                          className: d.descriptors,
                          children: [
                              (0, i.jsx)(a.Text, {
                                  variant: 'text-md/semibold',
                                  children: l.ZP.getName(m)
                              }),
                              (0, i.jsx)(a.Text, {
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
