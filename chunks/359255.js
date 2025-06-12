n.d(t, { F: () => u }), n(388685);
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(303835);
function c(e) {
    return '' === e || '-' === e;
}
let u = (e) => {
    let { value: t, onChange: n, className: a, minValue: u, maxValue: d } = e,
        [_, f] = i.useState(t),
        p = c(_) || (null != u && _ <= u),
        h = c(_) || (null != d && _ >= d),
        m = (e) => {
            n(c(e) ? (null != u ? u : 0) : e), f(e);
        },
        g = (e) => {
            e.stopPropagation(), p || m(_ - 1);
        },
        E = (e) => {
            e.stopPropagation(), h || m(_ + 1);
        },
        b = (e) => {
            if (c(e)) return m(e);
            let t = parseInt(e);
            if (!isNaN(t)) return null != d && t >= d ? m(d) : null != u && t <= u ? m(u) : m(t);
        };
    return (0, r.jsx)(s.tEY, {
        within: !0,
        children: (0, r.jsxs)('div', {
            className: o()(l.actions, a),
            children: [
                (0, r.jsx)(s.P3F, {
                    onClick: g,
                    tabIndex: -1,
                    className: o()(l.iconWrapper, l.__invalid_subtract, { [l.disabled]: p }),
                    children: (0, r.jsx)(s.V_R, {
                        size: 'md',
                        color: 'currentColor',
                        className: o()(l.icon, { [l.disabled]: p })
                    })
                }),
                (0, r.jsx)(s.oil, {
                    value: ''.concat(_),
                    onChange: b,
                    inputClassName: l.value
                }),
                (0, r.jsx)(s.P3F, {
                    onClick: E,
                    tabIndex: -1,
                    className: o()(l.iconWrapper, l.__invalid_add, { [l.disabled]: h }),
                    children: (0, r.jsx)(s.qJs, {
                        size: 'md',
                        color: 'currentColor',
                        className: o()(l.icon, { [l.disabled]: h })
                    })
                })
            ]
        })
    });
};
