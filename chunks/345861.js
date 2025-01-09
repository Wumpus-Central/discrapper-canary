s.d(n, {
    Z: function () {
        return a;
    }
});
var e = s(200651);
s(192379);
var i = s(120356),
    r = s.n(i),
    o = s(481060),
    c = s(813197);
function a(t) {
    let { buttonCTA: n, onChange: s, 'aria-label': i, multiple: a = !1, disabled: l = !1, submitting: u = !1, ...d } = t;
    return (0, e.jsx)(o.FocusRing, {
        within: !0,
        children: (0, e.jsxs)('div', {
            className: r()(
                (0, o.getButtonStyle)({
                    ...d,
                    submitting: u,
                    disabled: l
                })
            ),
            style: { width: 'max-content' },
            'aria-disabled': l,
            children: [
                (0, e.jsx)('span', {
                    'aria-hidden': !0,
                    children: n
                }),
                (0, e.jsx)(c.ZP, {
                    tabIndex: 0,
                    onChange: s,
                    multiple: a,
                    'aria-label': null != i ? i : n,
                    disabled: l
                })
            ]
        })
    });
}
