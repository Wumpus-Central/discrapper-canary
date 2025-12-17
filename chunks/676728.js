n.d(t, { Z: () => s });
var a = n(54381),
    r = n(481060),
    l = n(388032),
    i = n(625889);
let s = function (e) {
    let { onDesktop: t, onConsole: n } = e;
    return (0, a.jsxs)(r.ButtonGroup, {
        direction: "vertical",
        fullWidth: !0,
        className: i.buttonGroup,
        size: "sm",
        children: [
            (0, a.jsx)(r.Button, {
                onClick: t,
                text: l.intl.string(l.t["QXc01+"]),
                variant: "secondary",
                icon: r.pzj,
                iconPosition: "end",
            }),
            (0, a.jsx)(r.Button, {
                onClick: n,
                text: l.intl.string(l.t["8lAfuB"]),
                variant: "secondary",
                icon: r.iWm,
                iconPosition: "end",
            }),
        ],
    });
};
