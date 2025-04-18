n.d(t, { Z: () => u });
var i,
    r = n(200651),
    l = n(192379),
    o = n(481060),
    a = n(388032),
    s = n(780775),
    c = (((i = c || {})[(i.VIEW_MORE = 0)] = 'VIEW_MORE'), (i[(i.VIEW_LESS = 1)] = 'VIEW_LESS'), i);
function u(e) {
    let { title: t, buttonType: n, onClickViewButton: i } = e;
    return (0, r.jsxs)('div', {
        className: s.header,
        children: [
            (0, r.jsx)(o.Text, {
                variant: 'text-md/medium',
                color: 'header-primary',
                children: t
            }),
            null != n &&
                null != i &&
                (0, r.jsx)(o.P3F, {
                    className: s.viewMore,
                    onClick: i,
                    'aria-label': a.NW.formatToPlainString(a.t['bj/2kZ'], { title: t }),
                    children: (0, r.jsx)(o.Text, {
                        variant: 'text-md/medium',
                        color: 'text-brand',
                        children: 0 === n ? a.NW.format(a.t.gVw57u, {}) : a.NW.string(a.t.nPGLFR)
                    })
                })
        ]
    });
}
(u.buttonTypes = c),
    (u.Loading = function () {
        let e = l.useMemo(() => ({ width: ''.concat(10 + 20 * Math.random(), '%') }), []);
        return (0, r.jsx)('div', {
            className: s.loadingHeader,
            style: e,
            children: (0, r.jsx)(o.Text, {
                className: s.hidden,
                variant: 'text-md/medium',
                color: 'header-primary',
                children: '_'
            })
        });
    });
