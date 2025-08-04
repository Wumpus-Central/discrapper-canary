n.d(t, { Z: () => c });
var r = n(255367),
    s = n(755721),
    o = n(481060),
    a = n(388032),
    i = n(374578);
function l(e) {
    let { onClick: t, children: n } = e;
    return (0, r.jsx)(s.zx, {
        onClick: t,
        className: i.button,
        innerClassName: i.buttonInner,
        look: 'blank',
        children: n
    });
}
let c = function (e) {
    let { onDesktop: t, onConsole: n } = e;
    return (0, r.jsxs)('div', {
        className: i.buttons,
        children: [
            (0, r.jsxs)(l, {
                onClick: t,
                children: [a.intl.string(a.t.QXc019), (0, r.jsx)(o.pzj, { size: 'sm' })]
            }),
            (0, r.jsxs)(l, {
                onClick: n,
                children: [a.intl.string(a.t['8lAfuL']), (0, r.jsx)(o.iWm, { size: 'sm' })]
            })
        ]
    });
};
