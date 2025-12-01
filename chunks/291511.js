n.d(t, { P: () => d });
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
        t = (0, l.xf)(),
        n = [
            {
                value: i.Q4.BLUR,
                label: u.intl.string(u.t.S49Uad),
            },
            {
                value: i.Q4.BLOCK,
                label: u.intl.string(u.t["D/157Y"]),
            },
        ];
    if (null == t || null == e) return null;
    let d = (t) => {
            (0, s.zj)(e, t);
        },
        { explicitContentFriendDm: f, explicitContentNonFriendDm: p } = t;
    return (0, r.jsxs)(a.n, {
        description: u.intl.string(u.t.Wnojv1),
        children: [
            (0, r.jsx)(o.Z, {
                title: u.intl.string(u.t["+uI23H"]),
                value: f,
                onChange: (e) => d({ explicitContentFriendDm: e }),
                options: n,
            }),
            (0, r.jsx)(o.Z, {
                title: u.intl.string(u.t["Yh+HX1"]),
                value: p,
                onChange: (e) => d({ explicitContentNonFriendDm: e }),
                options: n,
            }),
        ],
    });
}
