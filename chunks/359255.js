(n.d(t, { F: () => d }), n(388685));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(755721),
    l = n(481060),
    c = n(303835);
function u(e) {
    return '' === e || '-' === e;
}
let d = (e) => {
    let { value: t, onChange: n, className: a, minValue: d, maxValue: f } = e,
        [_, p] = i.useState(t),
        h = u(_) || (null != d && _ <= d),
        m = u(_) || (null != f && _ >= f),
        g = (e) => {
            (n(u(e) ? (null != d ? d : 0) : e), p(e));
        },
        E = (e) => {
            (e.stopPropagation(), h || g(_ - 1));
        },
        b = (e) => {
            (e.stopPropagation(), m || g(_ + 1));
        },
        y = (e) => {
            if (u(e)) return g(e);
            let t = parseInt(e);
            if (!isNaN(t)) return null != f && t >= f ? g(f) : null != d && t <= d ? g(d) : g(t);
        };
    return (0, r.jsx)(l.tEY, {
        within: !0,
        children: (0, r.jsxs)('div', {
            className: o()(c.actions, a),
            children: [
                (0, r.jsx)(l.P3F, {
                    onClick: E,
                    tabIndex: -1,
                    className: o()(c.iconWrapper, c.__invalid_subtract, { [c.disabled]: h }),
                    children: (0, r.jsx)(l.V_R, {
                        size: 'md',
                        color: 'currentColor',
                        className: o()(c.icon, { [c.disabled]: h })
                    })
                }),
                (0, r.jsx)(s.Is, {
                    value: ''.concat(_),
                    onChange: y,
                    inputClassName: c.value
                }),
                (0, r.jsx)(l.P3F, {
                    onClick: b,
                    tabIndex: -1,
                    className: o()(c.iconWrapper, c.__invalid_add, { [c.disabled]: m }),
                    children: (0, r.jsx)(l.qJs, {
                        size: 'md',
                        color: 'currentColor',
                        className: o()(c.icon, { [c.disabled]: m })
                    })
                })
            ]
        })
    });
};
