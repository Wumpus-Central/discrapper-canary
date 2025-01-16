t.d(n, {
    Z: function () {
        return d;
    }
});
var i,
    l,
    a = t(200651),
    o = t(192379),
    r = t(481060),
    s = t(388032),
    c = t(138133);
function d(e) {
    let { title: n, buttonType: t, onClickViewButton: i } = e;
    return (0, a.jsxs)('div', {
        className: c.header,
        children: [
            (0, a.jsx)(r.Text, {
                variant: 'text-md/medium',
                color: 'header-primary',
                children: n
            }),
            null != t &&
                null != i &&
                (0, a.jsx)(r.Clickable, {
                    className: c.viewMore,
                    onClick: i,
                    'aria-label': s.intl.formatToPlainString(s.t['bj/2kZ'], { title: n }),
                    children: (0, a.jsx)(r.Text, {
                        variant: 'text-md/medium',
                        color: 'text-brand',
                        children: 0 === t ? s.intl.format(s.t.gVw57u, {}) : s.intl.string(s.t.nPGLFR)
                    })
                })
        ]
    });
}
((i = l || (l = {}))[(i.VIEW_MORE = 0)] = 'VIEW_MORE'),
    (i[(i.VIEW_LESS = 1)] = 'VIEW_LESS'),
    (d.buttonTypes = l),
    (d.Loading = function () {
        let e = o.useMemo(() => ({ width: ''.concat(10 + 20 * Math.random(), '%') }), []);
        return (0, a.jsx)('div', {
            className: c.loadingHeader,
            style: e,
            children: (0, a.jsx)(r.Text, {
                className: c.hidden,
                variant: 'text-md/medium',
                color: 'header-primary',
                children: '_'
            })
        });
    });
