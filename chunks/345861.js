e.d(s, { Z: () => o });
var n = e(200651);
e(192379);
var i = e(120356),
    r = e.n(i),
    a = e(481060),
    c = e(813197);
function o(t) {
    let { buttonCTA: s, onChange: e, 'aria-label': i, multiple: o = !1, disabled: l = !1, submitting: u = !1, ...d } = t;
    return (0, n.jsx)(a.tEY, {
        within: !0,
        children: (0, n.jsxs)('div', {
            className: r()(
                (0, a.nYM)({
                    ...d,
                    submitting: u,
                    disabled: l
                })
            ),
            style: { width: 'max-content' },
            'aria-disabled': l,
            children: [
                (0, n.jsx)('span', {
                    'aria-hidden': !0,
                    children: s
                }),
                (0, n.jsx)(c.ZP, {
                    tabIndex: 0,
                    onChange: e,
                    multiple: o,
                    'aria-label': null != i ? i : s,
                    disabled: l
                })
            ]
        })
    });
}
