t.d(n, {
    Z: () => _,
    z: () => d
});
var r,
    o = t(200651);
t(192379);
var l = t(120356),
    a = t.n(l),
    i = t(481060),
    c = t(530773),
    d = (((r = {}).INFO = 'info'), (r.WARNING = 'warning'), r);
let u = {
        info: c.info,
        warning: c.warning
    },
    s = {
        info: i.d3s,
        warning: i.P4T
    };
function _(e) {
    let { children: n, className: t, look: r = 'info' } = e,
        l = s[r];
    return (0, o.jsxs)('div', {
        className: a()(c.root, t, u[r]),
        children: [
            (0, o.jsx)(l, {
                className: c.icon,
                color: 'currentColor'
            }),
            (0, o.jsx)(i.Text, {
                className: c.text,
                variant: 'text-sm/medium',
                color: 'text-normal',
                children: n
            })
        ]
    });
}
