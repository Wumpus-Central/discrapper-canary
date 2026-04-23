n.d(t, { A: () => T });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(311907),
    o = n(305866),
    d = n(783878),
    u = n(404778),
    c = n(123292),
    g = n(821609),
    m = n(544420),
    _ = n(15285),
    A = n(985018),
    h = n(133801),
    p = n(604949),
    x = n(653307),
    E = n(818050);
function T(e) {
    let { onClose: t } = e,
        n = (0, r.bG)([_.Ay], () => _.Ay.getCandidateGames()),
        [l, T] = s.useState(null),
        S = n.map((e) => ({ id: e.pid.toString(), value: e, label: null != e.name ? e.name : "" }));
    return (0, i.jsxs)(o.l, {
        className: a()(h.H, p.Y_),
        "aria-label": A.intl.string(A.t.GTCx0p),
        children: [
            (0, i.jsx)(d.Z, {
                selectionMode: "single",
                placeholder: A.intl.string(A.t.XqMe3N),
                value: l,
                options: S,
                onSelectionChange: function (e) {
                    T(e);
                },
            }),
            (0, i.jsx)(u.c, { className: a()(E.Ot, E.QB) }),
            (0, i.jsxs)("div", {
                className: a()(h.o, x.xM),
                children: [
                    (0, i.jsx)(c.Q, { variant: "secondary", text: A.intl.string(A.t["ETE/oC"]), onClick: t }),
                    (0, i.jsx)(g.$, {
                        variant: "primary",
                        text: A.intl.string(A.t.GTCx0p),
                        disabled: null == l,
                        onClick: function () {
                            null != l && (m.Ay.addGame(l.pid, l.name), t());
                        },
                    }),
                ],
            }),
        ],
    });
}
