n.d(t, { F: () => u }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(481060),
    l = n(303835);
function c(e) {
    return '' === e || '-' === e;
}
let u = (e) => {
    let { value: t, onChange: n, className: o, minValue: u, maxValue: d } = e,
        [f, _] = i.useState(t),
        p = c(f) || (null != u && f <= u),
        h = c(f) || (null != d && f >= d),
        m = (e) => {
            n(c(e) ? (null != u ? u : 0) : e), _(e);
        },
        g = (e) => {
            e.stopPropagation(), p || m(f - 1);
        },
        E = (e) => {
            e.stopPropagation(), h || m(f + 1);
        },
        b = (e) => {
            if (c(e)) return m(e);
            let t = parseInt(e);
            if (!isNaN(t)) return null != d && t >= d ? m(d) : null != u && t <= u ? m(u) : m(t);
        };
    return (0, r.jsx)(s.tEY, {
        within: !0,
        children: (0, r.jsxs)('div', {
            className: a()(l.actions, o),
            children: [
                (0, r.jsx)(s.P3F, {
                    onClick: g,
                    tabIndex: -1,
                    className: a()(l.iconWrapper, l.__invalid_subtract, { [l.disabled]: p }),
                    children: (0, r.jsx)(s.V_R, {
                        size: 'md',
                        color: 'currentColor',
                        className: a()(l.icon, { [l.disabled]: p })
                    })
                }),
                (0, r.jsx)(s.oil, {
                    value: ''.concat(f),
                    onChange: b,
                    inputClassName: l.value
                }),
                (0, r.jsx)(s.P3F, {
                    onClick: E,
                    tabIndex: -1,
                    className: a()(l.iconWrapper, l.__invalid_add, { [l.disabled]: h }),
                    children: (0, r.jsx)(s.qJs, {
                        size: 'md',
                        color: 'currentColor',
                        className: a()(l.icon, { [l.disabled]: h })
                    })
                })
            ]
        })
    });
};
