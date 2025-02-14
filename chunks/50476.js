n.d(t, { Z: () => l });
var s = n(200651),
    r = n(481060),
    a = n(388032),
    o = n(184727);
function i(e) {
    let { onClick: t, children: n } = e;
    return (0, s.jsx)(r.zxk, {
        onClick: t,
        className: o.button,
        innerClassName: o.buttonInner,
        look: 'blank',
        children: n
    });
}
let l = function (e) {
    let { onDesktop: t, onConsole: n } = e;
    return (0, s.jsxs)('div', {
        className: o.buttons,
        children: [
            (0, s.jsxs)(i, {
                onClick: t,
                children: [a.intl.string(a.t.QXc019), (0, s.jsx)(r.pzj, { size: 'sm' })]
            }),
            (0, s.jsxs)(i, {
                onClick: n,
                children: [a.intl.string(a.t['8lAfuL']), (0, s.jsx)(r.iWm, { size: 'sm' })]
            })
        ]
    });
};
