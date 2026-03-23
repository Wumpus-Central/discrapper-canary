n.d(t, { q: () => u });
var i = n(627968);
n(64700);
var s = n(873298),
    l = n(562783),
    a = n(290389),
    r = n(704724),
    o = n(171316),
    d = n(500470),
    c = n(985018);
function u() {
    let e = (0, d.k)(),
        t = (0, o.gr)();
    if (null == t || null == e) return null;
    let { goreContentFriendDm: n, goreContentNonFriendDm: u } = t,
        m = (t) => {
            (0, r.qY)(e, t);
        },
        _ = [
            { value: s.TO.BLUR, label: c.intl.string(c.t.S49Uad) },
            { value: s.TO.BLOCK, label: c.intl.string(c.t["D/157Y"]) },
        ];
    return (0, i.jsxs)(l.E, {
        description: c.intl.string(c.t.XgH9eh),
        children: [
            (0, i.jsx)(a.A, {
                title: c.intl.string(c.t["+uI23H"]),
                value: n,
                onChange: (e) => m({ goreContentFriendDm: e }),
                options: _,
            }),
            (0, i.jsx)(a.A, {
                title: c.intl.string(c.t["Yh+HX1"]),
                value: u,
                onChange: (e) => m({ goreContentNonFriendDm: e }),
                options: _,
            }),
        ],
    });
}
