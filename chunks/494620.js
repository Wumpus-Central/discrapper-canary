n.d(t, {
    Z: () => d,
    z: () => l
});
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(481060),
    s = n(317812),
    l = (function (e) {
        return (e.INFO = 'info'), (e.WARNING = 'warning'), e;
    })({});
let c = {
        info: s.info,
        warning: s.warning
    },
    u = {
        info: a.d3s,
        warning: a.P4T
    };
function d(e) {
    let { children: t, className: n, look: i = 'info' } = e,
        l = u[i];
    return (0, r.jsxs)('div', {
        className: o()(s.root, n, c[i]),
        children: [
            (0, r.jsx)(l, {
                className: s.icon,
                color: 'currentColor'
            }),
            (0, r.jsx)(a.Text, {
                className: s.text,
                variant: 'text-sm/medium',
                color: 'text-normal',
                children: t
            })
        ]
    });
}
