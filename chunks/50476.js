n.d(t, { Z: () => i });
var r = n(54381),
    s = n(481060),
    o = n(388032),
    a = n(634034);
let i = function (e) {
    let { onDesktop: t, onConsole: n } = e;
    return (0, r.jsxs)(s.ButtonGroup, {
        direction: "vertical",
        fullWidth: !0,
        className: a.buttonGroup,
        size: "sm",
        children: [
            (0, r.jsx)(s.Button, {
                onClick: t,
                text: o.intl.string(o.t["QXc01+"]),
                variant: "secondary",
                icon: s.pzj,
                iconPosition: "end",
            }),
            (0, r.jsx)(s.Button, {
                onClick: n,
                text: o.intl.string(o.t["8lAfuB"]),
                variant: "secondary",
                icon: s.iWm,
                iconPosition: "end",
            }),
        ],
    });
};
