n.d(t, {
    F: () => u,
    default: () => d,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    l = n(433517),
    a = n(82659),
    o = n(755721),
    s = n(764295),
    c = n(388032);
let u = "report_to_mod_dont_show_resolve_confirm";
function d(e) {
    let { transitionState: t, onClose: n, handleResolveFlag: d } = e,
        [p, h] = i.useState(!1);
    return (0, r.jsx)(a.Modal, {
        transitionState: t,
        onClose: n,
        title: c.intl.string(s.default["8R4eur"]),
        subtitle: c.intl.string(s.default.xgOraW),
        actions: [
            {
                text: c.intl.string(s.default.ctefOz),
                onClick: () => {
                    p && l.K.set(u, !0), n(), d();
                },
            },
        ],
        actionBarInput: (0, r.jsx)(o.$q, {
            value: p,
            onChange: (e, t) => h(t),
            children: c.intl.string(s.default["3puq5e"]),
        }),
    });
}
