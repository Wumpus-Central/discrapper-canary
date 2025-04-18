n.d(t, {
    Z: () => d,
    d: () => u
});
var i = n(200651),
    r = n(120356),
    l = n.n(r),
    o = n(481060),
    a = n(884338),
    s = n(388032),
    c = n(392841);
function u(e, t) {
    var n;
    return e
        ? s.NW.format(s.t.hv7hEx, {
              friendCount: t.length,
              friendName: null != (n = t[0].globalName) ? n : t[0].username
          })
        : s.NW.format(s.t.IgnqIS, { friendCount: 2 });
}
function d(e) {
    let { friends: t, onClick: n, shortText: r, className: s } = e;
    if (0 === t.length) return null;
    let d = u(r, t),
        p = r ? 'text-xs/normal' : 'text-sm/medium';
    return (0, i.jsxs)(o.P3F, {
        className: l()(c.friendsWhoPlay, s),
        onClick: n,
        children: [
            (0, i.jsx)('span', {
                className: c.floatLeft,
                children: (0, i.jsx)(a.Z, {
                    users: t,
                    max: 3,
                    size: a.u.SIZE_16
                })
            }),
            (0, i.jsx)(o.Text, {
                className: c.friendsWhoPlayText,
                variant: p,
                lineClamp: 1,
                color: 'currentColor',
                children: d
            })
        ]
    });
}
