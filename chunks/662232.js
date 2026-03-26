n.d(t, { A: () => A });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(311907),
    o = n(397927),
    d = n(544420),
    c = n(15285),
    u = n(985018),
    m = n(342905),
    _ = n(778437),
    g = n(435115),
    x = n(885106);
function A(e) {
    let { onClose: t } = e,
        n = (0, r.bG)([c.Ay], () => c.Ay.getCandidateGames()),
        [l, A] = s.useState(null),
        h = n.map((e) => ({ id: e.pid.toString(), value: e, label: null != e.name ? e.name : "" }));
    return (0, i.jsxs)(o.lGe, {
        className: a()(m.H, _.Y_),
        "aria-label": u.intl.string(u.t.GTCx0p),
        children: [
            (0, i.jsx)(o.ZiE, {
                selectionMode: "single",
                placeholder: u.intl.string(u.t.XqMe3N),
                value: l,
                options: h,
                onSelectionChange: function (e) {
                    A(e);
                },
            }),
            (0, i.jsx)(o.cGx, { className: a()(x.Ot, x.QB) }),
            (0, i.jsxs)("div", {
                className: a()(m.o, g.xM),
                children: [
                    (0, i.jsx)(o.QWc, { variant: "secondary", text: u.intl.string(u.t["ETE/oC"]), onClick: t }),
                    (0, i.jsx)(o.Button, {
                        variant: "primary",
                        text: u.intl.string(u.t.GTCx0p),
                        disabled: null == l,
                        onClick: function () {
                            null != l && (d.A.addGame(l.pid, l.name), t());
                        },
                    }),
                ],
            }),
        ],
    });
}
