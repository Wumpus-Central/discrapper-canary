n.d(t, { Z: () => i });
var r = n(951288),
    s = n(481060),
    a = n(388032),
    o = n(437587);
let i = function (e) {
    let { onDesktop: t, onConsole: n } = e;
    return (0, r.jsxs)(s.ButtonGroup, {
        direction: "vertical",
        fullWidth: !0,
        className: o.buttonGroup,
        size: "sm",
        children: [
            (0, r.jsx)(s.Button, {
                onClick: t,
                text: a.intl.string(a.t["QXc01+"]),
                variant: "secondary",
                icon: s.pzj,
                iconPosition: "end",
            }),
            (0, r.jsx)(s.Button, {
                onClick: n,
                text: a.intl.string(a.t["8lAfuB"]),
                variant: "secondary",
                icon: s.iWm,
                iconPosition: "end",
            }),
        ],
    });
};
