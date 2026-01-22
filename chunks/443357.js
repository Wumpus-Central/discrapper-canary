n.d(t, { q: () => d });
var r = n(627968);
n(64700);
var i = n(873298),
    a = n(86689),
    s = n(639383),
    o = n(704724),
    l = n(171316),
    c = n(500470),
    u = n(985018);
function d() {
    let e = (0, c.k)(),
        t = (0, l.gr)();
    if (null == t || null == e) return null;
    let { goreContentFriendDm: n, goreContentNonFriendDm: d } = t,
        f = (t) => {
            (0, o.qY)(e, t);
        },
        p = [
            {
                value: i.TO.BLUR,
                label: u.intl.string(u.t.S49Uad),
            },
            {
                value: i.TO.BLOCK,
                label: u.intl.string(u.t["D/157Y"]),
            },
        ];
    return (0, r.jsxs)(a.E, {
        description: u.intl.string(u.t.XgH9eh),
        children: [
            (0, r.jsx)(s.A, {
                title: u.intl.string(u.t["+uI23H"]),
                value: n,
                onChange: (e) => f({ goreContentFriendDm: e }),
                options: p,
            }),
            (0, r.jsx)(s.A, {
                title: u.intl.string(u.t["Yh+HX1"]),
                value: d,
                onChange: (e) => f({ goreContentNonFriendDm: e }),
                options: p,
            }),
        ],
    });
}
