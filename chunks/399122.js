l.d(n, { A: () => u });
var t = l(627968);
l(64700);
var i = l(347805),
    s = l(183555),
    a = l(716804),
    r = l(83013),
    o = l(518477),
    d = l(985018),
    c = l(77085);
function u(e) {
    let { userId: n } = e,
        l = (0, a.g)(),
        { trackUserProfileAction: u } = (0, s.NJ)();
    return (0, t.jsx)(r.A, {
        heading: d.intl.string(d.t["mQKv+v"]),
        scrollTargetId: o.bk.NOTE,
        children: (0, t.jsx)(i.A, {
            userId: n,
            className: c.N,
            autoFocus: l === o.bk.NOTE,
            onUpdate: () => u({ action: "SET_NOTE" }),
        }),
    });
}
