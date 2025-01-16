n.d(t, {
    Z: function () {
        return f;
    },
    z: function () {
        return o;
    }
});
var r,
    o,
    i = n(200651);
n(192379);
var a = n(120356),
    l = n.n(a),
    c = n(481060),
    u = n(312403);
((r = o || (o = {})).INFO = 'info'), (r.WARNING = 'warning');
let s = {
        info: u.info,
        warning: u.warning
    },
    d = {
        info: c.CircleInformationIcon,
        warning: c.CircleWarningIcon
    };
function f(e) {
    let { children: t, className: n, look: r = 'info' } = e,
        o = d[r];
    return (0, i.jsxs)('div', {
        className: l()(u.root, n, s[r]),
        children: [
            (0, i.jsx)(o, {
                className: u.icon,
                color: 'currentColor'
            }),
            (0, i.jsx)(c.Text, {
                className: u.text,
                variant: 'text-sm/medium',
                color: 'text-normal',
                children: t
            })
        ]
    });
}
