l.d(t, { q: () => o });
var n = l(627968);
l(64700);
var i = l(873298),
    s = l(562783),
    a = l(290389),
    r = l(704724),
    d = l(171316),
    c = l(500470),
    u = l(985018);
function o() {
    let e = (0, c.k)(),
        t = (0, d.gr)();
    if (null == t || null == e) return null;
    let { goreContentFriendDm: l, goreContentNonFriendDm: o } = t,
        x = (t) => {
            (0, r.qY)(e, t);
        },
        h = [
            { value: i.TO.BLUR, label: u.intl.string(u.t.S49Uad) },
            { value: i.TO.BLOCK, label: u.intl.string(u.t["D/157Y"]) },
        ];
    return (0, n.jsxs)(s.E, {
        description: u.intl.string(u.t.XgH9eh),
        children: [
            (0, n.jsx)(a.A, {
                title: u.intl.string(u.t["+uI23H"]),
                value: l,
                onChange: (e) => x({ goreContentFriendDm: e }),
                options: h,
            }),
            (0, n.jsx)(a.A, {
                title: u.intl.string(u.t["Yh+HX1"]),
                value: o,
                onChange: (e) => x({ goreContentNonFriendDm: e }),
                options: h,
            }),
        ],
    });
}
