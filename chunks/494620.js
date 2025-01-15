t.d(n, {
    Z: function () {
        return f;
    },
    z: function () {
        return o;
    }
});
var r,
    o,
    a = t(200651);
t(192379);
var l = t(120356),
    i = t.n(l),
    c = t(481060),
    u = t(509427);
((r = o || (o = {})).INFO = 'info'), (r.WARNING = 'warning');
let d = {
        info: u.info,
        warning: u.warning
    },
    s = {
        info: c.CircleInformationIcon,
        warning: c.CircleWarningIcon
    };
function f(e) {
    let { children: n, className: t, look: r = 'info' } = e,
        o = s[r];
    return (0, a.jsxs)('div', {
        className: i()(u.root, t, d[r]),
        children: [
            (0, a.jsx)(o, {
                className: u.icon,
                color: 'currentColor'
            }),
            (0, a.jsx)(c.Text, {
                className: u.text,
                variant: 'text-sm/medium',
                color: 'text-normal',
                children: n
            })
        ]
    });
}
