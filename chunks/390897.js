n.d(t, {
    default: () => d,
    f: () => u,
}),
    n(896048);
var r = n(627968),
    l = n(64700),
    i = n(158954),
    a = n(506774),
    s = n(397927),
    o = n(641131),
    c = n(985018);
let u = "report_to_mod_dont_show_resolve_confirm";
function d(e) {
    let { transitionState: t, onClose: n, handleResolveFlag: d } = e,
        [f, p] = l.useState(!1);
    return (0, r.jsx)(i.Modal, {
        transitionState: t,
        onClose: n,
        title: c.intl.string(o.default["8R4euh"]),
        subtitle: c.intl.string(o.default.xgOraS),
        actions: [
            {
                text: c.intl.string(o.default.ctefO2),
                onClick: () => {
                    f && a.w.set(u, !0), n(), d();
                },
            },
        ],
        actionBarInput: (0, r.jsx)(s.Checkbox, {
            checked: f,
            onChange: (e) => p(e),
            label: c.intl.string(o.default["3puq5c"]),
            labelType: "secondary",
        }),
    });
}
