n.d(t, {
    Z: function () {
        return l;
    }
});
var s = n(200651);
n(192379);
var i = n(120356),
    r = n.n(i),
    o = n(481060),
    c = n(813197);
function l(e) {
    let { buttonCTA: t, onChange: n, 'aria-label': i, multiple: l = !1, disabled: a = !1, submitting: u = !1, ...d } = e;
    return (0, s.jsx)(o.FocusRing, {
        within: !0,
        children: (0, s.jsxs)('div', {
            className: r()(
                (0, o.getButtonStyle)({
                    ...d,
                    submitting: u,
                    disabled: a
                })
            ),
            style: { width: 'max-content' },
            'aria-disabled': a,
            children: [
                (0, s.jsx)('span', {
                    'aria-hidden': !0,
                    children: t
                }),
                (0, s.jsx)(c.ZP, {
                    tabIndex: 0,
                    onChange: n,
                    multiple: l,
                    'aria-label': null != i ? i : t,
                    disabled: a
                })
            ]
        })
    });
}
