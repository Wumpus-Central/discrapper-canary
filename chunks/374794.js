n.d(t, { Z: () => s });
var a = n(200651);
n(192379);
var r = n(120356),
    l = n.n(r),
    i = n(481060),
    o = n(53281);
function s(e) {
    let { children: t, className: n, innerClassName: r, onChange: s, 'aria-label': c, 'aria-describedby': d, filters: u, multiple: h = !1, disabled: m = !1, submitting: x = !1, ..._ } = e;
    return (0, a.jsx)(i.tEY, {
        within: !0,
        children: (0, a.jsxs)('div', {
            className: l()(
                n,
                (0, i.nYM)({
                    ..._,
                    submitting: x,
                    disabled: m
                })
            ),
            'aria-disabled': m,
            children: [
                (0, a.jsx)('span', {
                    'aria-hidden': !0,
                    className: r,
                    children: t
                }),
                (0, a.jsx)(o.Z, {
                    tabIndex: 0,
                    onChange: s,
                    filters: u,
                    multiple: h,
                    'aria-label': c,
                    'aria-describedby': d,
                    disabled: m
                })
            ]
        })
    });
}
