n.d(t, {
    F: () => u,
    default: () => d,
}),
    n(388685);
var i = n(951288),
    r = n(647438),
    l = n(793030),
    a = n(433517),
    o = n(481060),
    s = n(764295),
    c = n(388032);
let u = "report_to_mod_dont_show_resolve_confirm";
function d(e) {
    let { transitionState: t, onClose: n, handleResolveFlag: d } = e,
        [p, h] = r.useState(!1);
    return (0, i.jsx)(l.Modal, {
        transitionState: t,
        onClose: n,
        title: c.intl.string(s.default["8R4eur"]),
        subtitle: c.intl.string(s.default.xgOraW),
        actions: [
            {
                text: c.intl.string(s.default.ctefOz),
                onClick: () => {
                    p && a.K.set(u, !0), n(), d();
                },
            },
        ],
        actionBarInput: (0, i.jsx)(o.XZJ, {
            checked: p,
            onChange: (e) => h(e),
            label: c.intl.string(s.default["3puq5e"]),
        }),
    });
}
