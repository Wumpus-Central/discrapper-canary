t.d(n, { A: () => u });
var l = t(627968);
t(64700);
var i = t(347805),
    r = t(183555),
    a = t(716804),
    s = t(83013),
    o = t(518477),
    d = t(985018),
    c = t(77085);
function u(e) {
    let { userId: n } = e,
        t = (0, a.g)(),
        { trackUserProfileAction: u } = (0, r.NJ)();
    return (0, l.jsx)(s.A, {
        heading: d.intl.string(d.t["mQKv+v"]),
        scrollTargetId: o.bk.NOTE,
        children: (0, l.jsx)(i.A, {
            userId: n,
            className: c.N,
            autoFocus: t === o.bk.NOTE,
            onUpdate: () => u({ action: "SET_NOTE" }),
        }),
    });
}
