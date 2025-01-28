A.d(t, {
    Z: function () {
        return o;
    }
});
var n = A(200651);
A(192379);
var r = A(120356),
    a = A.n(r),
    i = A(481060),
    l = A(53281);
function o(e) {
    let { children: t, className: A, innerClassName: r, onChange: o, 'aria-label': s, 'aria-describedby': d, filters: c, multiple: u = !1, disabled: g = !1, submitting: h = !1, ...p } = e;
    return (0, n.jsx)(i.FocusRing, {
        within: !0,
        children: (0, n.jsxs)('div', {
            className: a()(
                A,
                (0, i.getButtonStyle)({
                    ...p,
                    submitting: h,
                    disabled: g
                })
            ),
            'aria-disabled': g,
            children: [
                (0, n.jsx)('span', {
                    'aria-hidden': !0,
                    className: r,
                    children: t
                }),
                (0, n.jsx)(l.Z, {
                    tabIndex: 0,
                    onChange: o,
                    filters: c,
                    multiple: u,
                    'aria-label': s,
                    'aria-describedby': d,
                    disabled: g
                })
            ]
        })
    });
}
