e.d(n, {
    Z: function () {
        return a;
    }
});
var i = e(200651);
e(192379);
var s = e(120356),
    r = e.n(s),
    l = e(481060),
    o = e(813197);
function a(t) {
    let { buttonCTA: n, onChange: e, 'aria-label': s, multiple: a = !1, disabled: c = !1, submitting: u = !1, ...d } = t;
    return (0, i.jsx)(l.FocusRing, {
        within: !0,
        children: (0, i.jsxs)('div', {
            className: r()(
                (0, l.getButtonStyle)({
                    ...d,
                    submitting: u,
                    disabled: c
                })
            ),
            style: { width: 'max-content' },
            'aria-disabled': c,
            children: [
                (0, i.jsx)('span', {
                    'aria-hidden': !0,
                    children: n
                }),
                (0, i.jsx)(o.ZP, {
                    tabIndex: 0,
                    onChange: e,
                    multiple: a,
                    'aria-label': null != s ? s : n,
                    disabled: c
                })
            ]
        })
    });
}
