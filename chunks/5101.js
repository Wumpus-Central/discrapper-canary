n.d(t, {
    F: () => u,
    default: () => d,
}),
    n(388685);
var r = n(255367),
    i = n(73800),
    o = n(433517),
    a = n(82659),
    s = n(481060),
    l = n(764295),
    c = n(388032);
let u = "report_to_mod_dont_show_resolve_confirm";
function d(e) {
    let { transitionState: t, onClose: n, handleResolveFlag: d } = e,
        [f, _] = i.useState(!1),
        p = () => {
            f && o.K.set(u, !0), n(), d();
        };
    return (0, r.jsx)(a.Modal, {
        transitionState: t,
        onClose: n,
        title: c.intl.string(l.default["8R4eur"]),
        subtitle: c.intl.string(l.default.xgOraW),
        actions: [
            {
                text: c.intl.string(l.default.ctefOz),
                onClick: p,
            },
        ],
        actionBarInput: (0, r.jsx)(s.XZJ, {
            value: f,
            onChange: (e, t) => _(t),
            children: c.intl.string(l.default["3puq5e"]),
        }),
    });
}
