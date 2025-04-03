n.d(t, { Z: () => u });
var i,
    r = n(200651),
    l = n(192379),
    a = n(481060),
    o = n(388032),
    c = n(780775),
    s = (((i = s || {})[(i.VIEW_MORE = 0)] = 'VIEW_MORE'), (i[(i.VIEW_LESS = 1)] = 'VIEW_LESS'), i);
function u(e) {
    let { title: t, buttonType: n, onClickViewButton: i } = e;
    return (0, r.jsxs)('div', {
        className: c.header,
        children: [
            (0, r.jsx)(a.Text, {
                variant: 'text-md/medium',
                color: 'header-primary',
                children: t
            }),
            null != n &&
                null != i &&
                (0, r.jsx)(a.P3F, {
                    className: c.viewMore,
                    onClick: i,
                    'aria-label': o.NW.formatToPlainString(o.t['bj/2kZ'], { title: t }),
                    children: (0, r.jsx)(a.Text, {
                        variant: 'text-md/medium',
                        color: 'text-brand',
                        children: 0 === n ? o.NW.format(o.t.gVw57u, {}) : o.NW.string(o.t.nPGLFR)
                    })
                })
        ]
    });
}
(u.buttonTypes = s),
    (u.Loading = function () {
        let e = l.useMemo(() => ({ width: ''.concat(10 + 20 * Math.random(), '%') }), []);
        return (0, r.jsx)('div', {
            className: c.loadingHeader,
            style: e,
            children: (0, r.jsx)(a.Text, {
                className: c.hidden,
                variant: 'text-md/medium',
                color: 'header-primary',
                children: '_'
            })
        });
    });
