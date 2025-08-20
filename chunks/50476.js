n.d(t, { Z: () => c });
var r = n(951288),
    i = n(755721),
    a = n(481060),
    o = n(388032),
    s = n(437587);
function l(e) {
    let { onClick: t, children: n } = e;
    return (0, r.jsx)(i.zx, {
        onClick: t,
        className: s.button,
        innerClassName: s.buttonInner,
        look: "blank",
        children: n,
    });
}
let c = function (e) {
    let { onDesktop: t, onConsole: n } = e;
    return (0, r.jsxs)("div", {
        className: s.buttons,
        children: [
            (0, r.jsxs)(l, {
                onClick: t,
                children: [o.intl.string(o.t.QXc019), (0, r.jsx)(a.pzj, { size: "sm" })],
            }),
            (0, r.jsxs)(l, {
                onClick: n,
                children: [o.intl.string(o.t["8lAfuL"]), (0, r.jsx)(a.iWm, { size: "sm" })],
            }),
        ],
    });
};
