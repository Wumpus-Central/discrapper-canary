n.d(t, { Z: () => s });
var a = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    i = n(481060),
    o = n(53281);
function s(e) {
    let { children: t, className: n, innerClassName: l, onChange: s, 'aria-label': c, 'aria-describedby': d, filters: u, multiple: m = !1, disabled: h = !1, submitting: x = !1, ...p } = e;
    return (0, a.jsx)(i.tEY, {
        within: !0,
        children: (0, a.jsxs)('div', {
            className: r()(
                n,
                (0, i.nYM)({
                    ...p,
                    submitting: x,
                    disabled: h
                })
            ),
            'aria-disabled': h,
            children: [
                (0, a.jsx)('span', {
                    'aria-hidden': !0,
                    className: l,
                    children: t
                }),
                (0, a.jsx)(o.Z, {
                    tabIndex: 0,
                    onChange: s,
                    filters: u,
                    multiple: m,
                    'aria-label': c,
                    'aria-describedby': d,
                    disabled: h
                })
            ]
        })
    });
}
