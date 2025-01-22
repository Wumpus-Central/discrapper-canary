n.d(t, {
    Z: function () {
        return o;
    }
});
var A = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    l = n(481060),
    i = n(53281);
function o(e) {
    let { children: t, className: n, innerClassName: r, onChange: o, 'aria-label': s, 'aria-describedby': d, filters: c, multiple: u = !1, disabled: g = !1, submitting: h = !1, ...p } = e;
    return (0, A.jsx)(l.FocusRing, {
        within: !0,
        children: (0, A.jsxs)('div', {
            className: a()(
                n,
                (0, l.getButtonStyle)({
                    ...p,
                    submitting: h,
                    disabled: g
                })
            ),
            'aria-disabled': g,
            children: [
                (0, A.jsx)('span', {
                    'aria-hidden': !0,
                    className: r,
                    children: t
                }),
                (0, A.jsx)(i.Z, {
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
