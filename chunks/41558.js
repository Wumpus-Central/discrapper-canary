n.d(t, { Z: () => u });
var l,
    i = n(255367),
    r = n(73800),
    a = n(481060),
    o = n(388032),
    s = n(780775),
    c = (((l = c || {})[(l.VIEW_MORE = 0)] = 'VIEW_MORE'), (l[(l.VIEW_LESS = 1)] = 'VIEW_LESS'), l);
function u(e) {
    let { title: t, buttonType: n, onClickViewButton: l } = e;
    return (0, i.jsxs)('div', {
        className: s.header,
        children: [
            (0, i.jsx)(a.Text, {
                variant: 'text-md/medium',
                color: 'header-primary',
                children: t
            }),
            null != n &&
                null != l &&
                (0, i.jsx)(a.P3F, {
                    className: s.viewMore,
                    onClick: l,
                    'aria-label': o.intl.formatToPlainString(o.t['bj/2kZ'], { title: t }),
                    children: (0, i.jsx)(a.Text, {
                        variant: 'text-md/medium',
                        color: 'text-brand',
                        children: 0 === n ? o.intl.format(o.t.gVw57u, {}) : o.intl.string(o.t.nPGLFR)
                    })
                })
        ]
    });
}
(u.buttonTypes = c),
    (u.Loading = function () {
        let e = r.useMemo(() => ({ width: ''.concat(10 + 20 * Math.random(), '%') }), []);
        return (0, i.jsx)('div', {
            className: s.loadingHeader,
            style: e,
            children: (0, i.jsx)(a.Text, {
                className: s.hidden,
                variant: 'text-md/medium',
                color: 'header-primary',
                children: '_'
            })
        });
    });
