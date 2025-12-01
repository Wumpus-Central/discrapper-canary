n.d(t, { I: () => d });
var r = n(54381);
n(473749);
var i = n(524437),
    a = n(400313),
    o = n(947707),
    s = n(800651),
    l = n(915009),
    c = n(652262),
    u = n(388032);
function d() {
    let e = (0, c.M)(),
        t = (0, l.T3)();
    if (null == t || null == e) return null;
    let { goreContentFriendDm: n, goreContentNonFriendDm: d } = t,
        f = (t) => {
            (0, s.Jr)(e, t);
        },
        p = [
            {
                value: i.Q4.BLUR,
                label: u.intl.string(u.t.S49Uad),
            },
            {
                value: i.Q4.BLOCK,
                label: u.intl.string(u.t["D/157Y"]),
            },
        ];
    return (0, r.jsxs)(a.n, {
        description: u.intl.string(u.t.XgH9eh),
        children: [
            (0, r.jsx)(o.Z, {
                title: u.intl.string(u.t["+uI23H"]),
                value: n,
                onChange: (e) => f({ goreContentFriendDm: e }),
                options: p,
            }),
            (0, r.jsx)(o.Z, {
                title: u.intl.string(u.t["Yh+HX1"]),
                value: d,
                onChange: (e) => f({ goreContentNonFriendDm: e }),
                options: p,
            }),
        ],
    });
}
