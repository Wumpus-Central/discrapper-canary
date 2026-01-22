t.d(l, {
    A: () => u,
});
var n = t(627968);
t(64700);
var i = t(347805),
    r = t(183555),
    s = t(716804),
    a = t(83013),
    o = t(518477),
    d = t(985018),
    c = t(473836);

function u(e) {
    let { userId: l } = e,
        t = (0, s.g)(),
        { trackUserProfileAction: u } = (0, r.NJ)();
    return (0, n.jsx)(a.A, {
        heading: d.intl.string(d.t["mQKv+v"]),
        scrollTargetId: o.bk.NOTE,
        children: (0, n.jsx)(i.A, {
            userId: l,
            className: c.N,
            autoFocus: t === o.bk.NOTE,
            onUpdate: () =>
                u({
                    action: "SET_NOTE",
                }),
        }),
    });
}
