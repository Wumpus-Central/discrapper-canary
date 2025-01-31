n.d(t, { Z: () => d });
var i,
    l = n(200651),
    a = n(192379),
    o = n(481060),
    s = n(388032),
    r = n(138133),
    c = (((i = c || {})[(i.VIEW_MORE = 0)] = 'VIEW_MORE'), (i[(i.VIEW_LESS = 1)] = 'VIEW_LESS'), i);
function d(e) {
    let { title: t, buttonType: n, onClickViewButton: i } = e;
    return (0, l.jsxs)('div', {
        className: r.header,
        children: [
            (0, l.jsx)(o.Text, {
                variant: 'text-md/medium',
                color: 'header-primary',
                children: t
            }),
            null != n &&
                null != i &&
                (0, l.jsx)(o.P3F, {
                    className: r.viewMore,
                    onClick: i,
                    'aria-label': s.intl.formatToPlainString(s.t['bj/2kZ'], { title: t }),
                    children: (0, l.jsx)(o.Text, {
                        variant: 'text-md/medium',
                        color: 'text-brand',
                        children: 0 === n ? s.intl.format(s.t.gVw57u, {}) : s.intl.string(s.t.nPGLFR)
                    })
                })
        ]
    });
}
(d.buttonTypes = c),
    (d.Loading = function () {
        let e = a.useMemo(() => ({ width: ''.concat(10 + 20 * Math.random(), '%') }), []);
        return (0, l.jsx)('div', {
            className: r.loadingHeader,
            style: e,
            children: (0, l.jsx)(o.Text, {
                className: r.hidden,
                variant: 'text-md/medium',
                color: 'header-primary',
                children: '_'
            })
        });
    });
