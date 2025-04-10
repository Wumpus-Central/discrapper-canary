n.d(t, {
    Z: () => u,
    d: () => d
});
var i = n(200651),
    r = n(120356),
    l = n.n(r),
    a = n(481060),
    o = n(884338),
    s = n(388032),
    c = n(708348);
function d(e, t) {
    var n;
    return e
        ? s.NW.format(s.t.hv7hEx, {
              friendCount: t.length,
              friendName: null != (n = t[0].globalName) ? n : t[0].username
          })
        : s.NW.format(s.t.IgnqIS, { friendCount: t.length });
}
function u(e) {
    let { friends: t, onClick: n, shortText: r, className: s } = e;
    if (0 === t.length) return null;
    let u = d(r, t);
    return (0, i.jsxs)(a.P3F, {
        className: l()(c.friendsWhoPlay, s),
        onClick: n,
        children: [
            (0, i.jsx)(o.Z, {
                users: t,
                max: 3,
                size: o.u.SIZE_16
            }),
            (0, i.jsx)(a.Text, {
                className: c.friendsWhoPlayText,
                variant: 'text-sm/normal',
                color: 'text-secondary',
                lineClamp: 1,
                children: u
            })
        ]
    });
}
