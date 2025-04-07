n.d(t, { Z: () => c });
var i = n(200651),
    r = n(481060),
    l = n(884338),
    a = n(388032),
    o = n(708348);
function c(e) {
    var t;
    let { friends: n, onClick: c, shortText: s } = e;
    if (0 === n.length) return null;
    let u = s
        ? a.NW.format(a.t.hv7hEx, {
              friendCount: n.length,
              friendName: null != (t = n[0].globalName) ? t : n[0].username
          })
        : a.NW.format(a.t.IgnqIS, { friendCount: n.length });
    return (0, i.jsxs)(r.P3F, {
        className: o.friendsWhoPlay,
        onClick: c,
        children: [
            (0, i.jsx)(l.Z, {
                users: n,
                max: 3,
                size: l.u.SIZE_16
            }),
            (0, i.jsx)(r.Text, {
                className: o.friendsWhoPlayText,
                variant: 'text-sm/normal',
                color: 'text-secondary',
                lineClamp: 1,
                children: u
            })
        ]
    });
}
