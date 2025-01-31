n.d(t, { F: () => c }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(481060),
    l = n(665175);
function u(e) {
    return '' === e || '-' === e;
}
let c = (e) => {
    let { value: t, onChange: n, className: a, minValue: c, maxValue: d } = e,
        [f, _] = r.useState(t),
        p = u(f) || (null != c && f <= c),
        h = u(f) || (null != d && f >= d),
        m = (e) => {
            n(u(e) ? (null != c ? c : 0) : e), _(e);
        },
        g = (e) => {
            e.stopPropagation(), !p && m(f - 1);
        },
        E = (e) => {
            e.stopPropagation(), !h && m(f + 1);
        },
        v = (e) => {
            if (u(e)) return m(e);
            let t = parseInt(e);
            return isNaN(t) ? void 0 : null != d && t >= d ? m(d) : null != c && t <= c ? m(c) : m(t);
        };
    return (0, i.jsx)(o.tEY, {
        within: !0,
        children: (0, i.jsxs)('div', {
            className: s()(l.actions, a),
            children: [
                (0, i.jsx)(o.P3F, {
                    onClick: g,
                    tabIndex: -1,
                    className: s()(l.iconWrapper, l.__invalid_subtract, { [l.disabled]: p }),
                    children: (0, i.jsx)(o.V_R, {
                        size: 'md',
                        color: 'currentColor',
                        className: s()(l.icon, { [l.disabled]: p })
                    })
                }),
                (0, i.jsx)(o.oil, {
                    value: ''.concat(f),
                    onChange: v,
                    inputClassName: l.value
                }),
                (0, i.jsx)(o.P3F, {
                    onClick: E,
                    tabIndex: -1,
                    className: s()(l.iconWrapper, l.__invalid_add, { [l.disabled]: h }),
                    children: (0, i.jsx)(o.qJs, {
                        size: 'md',
                        color: 'currentColor',
                        className: s()(l.icon, { [l.disabled]: h })
                    })
                })
            ]
        })
    });
};
