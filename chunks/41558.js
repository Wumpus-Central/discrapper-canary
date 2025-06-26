n.d(t, { Z: () => u });
var i,
    l = n(255367),
    r = n(73800),
    o = n(481060),
    a = n(388032),
    c = n(780775),
    s = (((i = s || {})[(i.VIEW_MORE = 0)] = 'VIEW_MORE'), (i[(i.VIEW_LESS = 1)] = 'VIEW_LESS'), i);
function u(e) {
    let { title: t, buttonType: n, onClickViewButton: i } = e;
    return (0, l.jsxs)('div', {
        className: c.header,
        children: [
            (0, l.jsx)(o.Text, {
                variant: 'text-md/medium',
                color: 'header-primary',
                children: t
            }),
            null != n &&
                null != i &&
                (0, l.jsx)(o.P3F, {
                    className: c.viewMore,
                    onClick: i,
                    'aria-label': a.intl.formatToPlainString(a.t['bj/2kZ'], { title: t }),
                    children: (0, l.jsx)(o.Text, {
                        variant: 'text-md/medium',
                        color: 'text-brand',
                        children: 0 === n ? a.intl.format(a.t.gVw57u, {}) : a.intl.string(a.t.nPGLFR)
                    })
                })
        ]
    });
}
(u.buttonTypes = s),
    (u.Loading = function () {
        let e = r.useMemo(() => ({ width: ''.concat(10 + 20 * Math.random(), '%') }), []);
        return (0, l.jsx)('div', {
            className: c.loadingHeader,
            style: e,
            children: (0, l.jsx)(o.Text, {
                className: c.hidden,
                variant: 'text-md/medium',
                color: 'header-primary',
                children: '_'
            })
        });
    });
