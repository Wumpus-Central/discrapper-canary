n.d(t, { default: () => u, f: () => d });
var i = n(627968),
    l = n(64700),
    s = n(189213),
    a = n(506774),
    r = n(150934),
    o = n(221314),
    c = n(985018);
let d = "report_to_mod_dont_show_resolve_confirm";
function u(e) {
    let { transitionState: t, onClose: n, handleResolveFlag: u } = e,
        [h, m] = l.useState(!1);
    return (0, i.jsx)(s.Modal, {
        transitionState: t,
        onClose: n,
        title: c.intl.string(o.default["8R4euh"]),
        subtitle: c.intl.string(o.default.xgOraS),
        actions: [
            {
                text: c.intl.string(o.default.ctefO2),
                onClick: () => {
                    h && a.w.set(d, !0), n(), u();
                },
            },
        ],
        actionBarInput: (0, i.jsx)(r.S, {
            checked: h,
            onChange: (e) => m(e),
            label: c.intl.string(o.default["3puq5c"]),
            labelType: "secondary",
        }),
    });
}
