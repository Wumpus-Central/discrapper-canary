r.d(n, {
    F: function () {
        return f;
    }
});
var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(120356),
    l = r.n(o),
    u = r(481060),
    c = r(665175);
function d(e) {
    return '' === e || '-' === e;
}
let f = (e) => {
    let { value: n, onChange: r, className: i, minValue: o, maxValue: f } = e,
        [_, h] = s.useState(n),
        p = d(_) || (null != o && _ <= o),
        m = d(_) || (null != f && _ >= f),
        g = (e) => {
            r(d(e) ? (null != o ? o : 0) : e), h(e);
        },
        E = (e) => {
            if ((e.stopPropagation(), !p)) g(_ - 1);
        },
        v = (e) => {
            if ((e.stopPropagation(), !m)) g(_ + 1);
        },
        I = (e) => {
            if (d(e)) return g(e);
            let n = parseInt(e);
            return isNaN(n) ? void 0 : null != f && n >= f ? g(f) : null != o && n <= o ? g(o) : g(n);
        };
    return (0, a.jsx)(u.FocusRing, {
        within: !0,
        children: (0, a.jsxs)('div', {
            className: l()(c.actions, i),
            children: [
                (0, a.jsx)(u.Clickable, {
                    onClick: E,
                    tabIndex: -1,
                    className: l()(c.iconWrapper, c.__invalid_subtract, { [c.disabled]: p }),
                    children: (0, a.jsx)(u.MinusIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: l()(c.icon, { [c.disabled]: p })
                    })
                }),
                (0, a.jsx)(u.TextInput, {
                    value: ''.concat(_),
                    onChange: I,
                    inputClassName: c.value
                }),
                (0, a.jsx)(u.Clickable, {
                    onClick: v,
                    tabIndex: -1,
                    className: l()(c.iconWrapper, c.__invalid_add, { [c.disabled]: m }),
                    children: (0, a.jsx)(u.PlusSmallIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: l()(c.icon, { [c.disabled]: m })
                    })
                })
            ]
        })
    });
};
