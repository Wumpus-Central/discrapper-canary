t.d(n, { A: () => c });
var l = t(627968);
t(64700);
var i = t(347805),
    r = t(183555),
    a = t(716804),
    s = t(83013),
    o = t(518477),
    d = t(985018),
    u = t(77085);
function c(e) {
    let { userId: n } = e,
        t = (0, a.g)(),
        { trackUserProfileAction: c } = (0, r.NJ)();
    return (0, l.jsx)(s.A, {
        heading: d.intl.string(d.t["mQKv+v"]),
        scrollTargetId: o.bk.NOTE,
        children: (0, l.jsx)(i.A, {
            userId: n,
            className: u.N,
            autoFocus: t === o.bk.NOTE,
            onUpdate: () => c({ action: "SET_NOTE" }),
        }),
    });
}
