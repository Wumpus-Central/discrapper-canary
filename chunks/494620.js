n.d(t, {
    Z: () => u,
    z: () => a
});
var o,
    r = n(200651);
n(192379);
var i = n(120356),
    c = n.n(i),
    d = n(481060),
    l = n(122085),
    a = (((o = {}).INFO = 'info'), (o.WARNING = 'warning'), o);
let s = {
        info: l.info,
        warning: l.warning
    },
    _ = {
        info: d.d3s,
        warning: d.P4T
    };
function u(e) {
    let { children: t, className: n, look: o = 'info' } = e,
        i = _[o];
    return (0, r.jsxs)('div', {
        className: c()(l.root, n, s[o]),
        children: [
            (0, r.jsx)(i, {
                className: l.icon,
                color: 'currentColor'
            }),
            (0, r.jsx)(d.Text, {
                className: l.text,
                variant: 'text-sm/medium',
                color: 'text-normal',
                children: t
            })
        ]
    });
}
