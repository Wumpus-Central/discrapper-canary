n.d(t, { Z: () => l });
var r = n(255367),
    s = n(481060),
    o = n(388032),
    a = n(374578);
function i(e) {
    let { onClick: t, children: n } = e;
    return (0, r.jsx)(s.zxk, {
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
                children: [o.intl.string(o.t.QXc019), (0, r.jsx)(s.pzj, { size: 'sm' })]
            }),
            (0, r.jsxs)(i, {
                onClick: n,
                children: [o.intl.string(o.t['8lAfuL']), (0, r.jsx)(s.iWm, { size: 'sm' })]
            })
        ]
    });
};
