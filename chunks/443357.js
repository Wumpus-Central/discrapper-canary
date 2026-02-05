n.d(t, { q: () => u });
var i = n(627968);
n(64700);
var s = n(873298),
    r = n(86689),
    a = n(639383),
    l = n(704724),
    o = n(171316),
    c = n(500470),
    d = n(985018);
function u() {
    let e = (0, c.k)(),
        t = (0, o.gr)();
    if (null == t || null == e) return null;
    let { goreContentFriendDm: n, goreContentNonFriendDm: u } = t,
        _ = (t) => {
            (0, l.qY)(e, t);
        },
        m = [
            { value: s.TO.BLUR, label: d.intl.string(d.t.S49Uad) },
            { value: s.TO.BLOCK, label: d.intl.string(d.t["D/157Y"]) },
        ];
    return (0, i.jsxs)(r.E, {
        description: d.intl.string(d.t.XgH9eh),
        children: [
            (0, i.jsx)(a.A, {
                title: d.intl.string(d.t["+uI23H"]),
                value: n,
                onChange: (e) => _({ goreContentFriendDm: e }),
                options: m,
            }),
            (0, i.jsx)(a.A, {
                title: d.intl.string(d.t["Yh+HX1"]),
                value: u,
                onChange: (e) => _({ goreContentNonFriendDm: e }),
                options: m,
            }),
        ],
    });
}
