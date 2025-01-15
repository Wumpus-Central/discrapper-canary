var i = n(200651);
n(192379);
var r = n(399606),
    s = n(481060),
    a = n(594174),
    l = n(51144),
    o = n(546791),
    c = n(198952),
    d = n(719965);
t.Z = (e) => {
    let { userId: t, timestamp: n, timestampFormatter: u } = e,
        m = (0, r.e7)([a.default], () => a.default.getUser(t));
    return void 0 === m
        ? null
        : (0, i.jsxs)('div', {
              className: d.container,
              children: [
                  (0, i.jsx)(c.r, {
                      user: m,
                      avatarSize: s.AvatarSizes.SIZE_40
                  }),
                  (0, i.jsx)('div', {
                      children: (0, i.jsxs)('div', {
                          className: d.descriptors,
                          children: [
                              (0, i.jsx)(s.Text, {
                                  variant: 'text-md/semibold',
                                  children: l.ZP.getName(m)
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
