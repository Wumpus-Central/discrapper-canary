n.d(t, {
    Z: () => d,
});
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
        t = (0, l.xs)(),
        n = [
            {
                value: i.TO.BLUR,
                label: u.intl.string(u.t.S49Uad),
            },
            {
                value: i.TO.BLOCK,
                label: u.intl.string(u.t["D/157Y"]),
            },
        ];
    if (null == t || null == e) return null;
    let d = (t) => {
            (0, o.Jz)(e, t);
        },
        { explicitContentFriendDm: f, explicitContentNonFriendDm: p } = t;
    return (0, r.jsxs)(a.E, {
        description: u.intl.string(u.t.Wnojv1),
        children: [
            (0, r.jsx)(s.A, {
                title: u.intl.string(u.t["+uI23H"]),
                value: f,
                onChange: (e) =>
                    d({
                        explicitContentFriendDm: e,
                    }),
                options: n,
            }),
            (0, r.jsx)(s.A, {
                title: u.intl.string(u.t["Yh+HX1"]),
                value: p,
                onChange: (e) =>
                    d({
                        explicitContentNonFriendDm: e,
                    }),
                options: n,
            }),
        ],
    });
}
