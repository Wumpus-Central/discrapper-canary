t.d(a, { l: () => p });
var l = t(477900),
    n = t(582128),
    r = t(503698),
    s = t.n(r),
    i = t(408278),
    c = t(834040),
    o = t(95477),
    u = t(307301),
    d = t(375708),
    h = t(241321);
function m(e) {
    return "" === e || "-" === e;
}
function p(e) {
    let { value: a, onChange: t, className: r, minValue: p, maxValue: x } = e,
        [C, E] = n.useState(a),
        g = m(C) || (null != p && C <= p),
        v = m(C) || (null != x && C >= x);
    function f(e) {
        t(m(e) ? (p ?? 0) : e), E(e);
    }
    return (0, l.jsxs)("div", {
        className: s()(h.o, r),
        children: [
            (0, l.jsx)(i.K, {
                variant: "icon-only",
                size: "sm",
                icon: c.MinusIcon,
                onClick: function (e) {
                    e.stopPropagation(), g || f(C - 1);
                },
                "aria-label": d.intl.string(d.t["k+ohJm"]),
                disabled: g,
            }),
            (0, l.jsx)("div", {
                className: h.U,
                children: (0, l.jsx)(o.k, {
                    value: `${C}`,
                    onChange: function (e) {
                        if (m(e)) return f(e);
                        let a = parseInt(e);
                        if (!isNaN(a)) return null != x && a >= x ? f(x) : null != p && a <= p ? f(p) : f(a);
                    },
                }),
            }),
            (0, l.jsx)(i.K, {
                size: "sm",
                variant: "icon-only",
                icon: u.j,
                onClick: function (e) {
                    e.stopPropagation(), v || f(C + 1);
                },
                "aria-label": d.intl.string(d.t.w8Sc4B),
                disabled: v,
            }),
        ],
    });
}
