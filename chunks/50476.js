var o = n(200651),
    r = n(481060),
    s = n(388032),
    a = n(160952);
function i(e) {
    let { onClick: t, children: n } = e;
    return (0, o.jsx)(r.Button, {
        onClick: t,
        className: a.button,
        innerClassName: a.buttonInner,
        look: 'blank',
        children: n
    });
}
t.Z = function (e) {
    let { onDesktop: t, onConsole: n } = e;
    return (0, o.jsxs)('div', {
        className: a.buttons,
        children: [
            (0, o.jsxs)(i, {
                onClick: t,
                children: [s.intl.string(s.t.QXc019), (0, o.jsx)(r.ScreenIcon, { size: 'sm' })]
            }),
            (0, o.jsxs)(i, {
                onClick: n,
                children: [s.intl.string(s.t['8lAfuL']), (0, o.jsx)(r.GameControllerIcon, { size: 'sm' })]
            })
        ]
    });
};
