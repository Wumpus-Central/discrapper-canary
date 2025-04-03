n.d(t, { Z: () => l });
var r = n(200651),
    o = n(481060),
    s = n(388032),
    a = n(374578);
function i(e) {
    let { onClick: t, children: n } = e;
    return (0, r.jsx)(o.zxk, {
        onClick: t,
        className: a.button,
        innerClassName: a.buttonInner,
        look: 'blank',
        children: n
    });
}
let l = function (e) {
    let { onDesktop: t, onConsole: n } = e;
    return (0, r.jsxs)('div', {
        className: a.buttons,
        children: [
            (0, r.jsxs)(i, {
                onClick: t,
                children: [s.NW.string(s.t.QXc019), (0, r.jsx)(o.pzj, { size: 'sm' })]
            }),
            (0, r.jsxs)(i, {
                onClick: n,
                children: [s.NW.string(s.t['8lAfuL']), (0, r.jsx)(o.iWm, { size: 'sm' })]
            })
        ]
    });
};
