t.d(a, { l: () => p });
var l = t(477900),
    n = t(582128),
    r = t(503698),
    s = t.n(r),
    i = t(408278),
    c = t(834040),
    o = t(95477),
    d = t(307301),
    h = t(375708),
    u = t(331896);
function m(e) {
    return "" === e || "-" === e;
}
function p(e) {
    let { value: a, onChange: t, className: r, minValue: p, maxValue: x } = e,
        [E, C] = n.useState(a),
        v = m(E) || (null != p && E <= p),
        j = m(E) || (null != x && E >= x);
    function g(e) {
        t(m(e) ? (p ?? 0) : e), C(e);
    }
    return (0, l.jsxs)("div", {
        className: s()(u.o, r),
        children: [
            (0, l.jsx)(i.K, {
                variant: "icon-only",
                size: "sm",
                icon: c.Q,
                onClick: function (e) {
                    e.stopPropagation(), v || g(E - 1);
                },
                "aria-label": h.intl.string(h.t["k+ohJm"]),
                disabled: v,
            }),
            (0, l.jsx)("div", {
                className: u.U,
                children: (0, l.jsx)(o.k, {
                    value: `${E}`,
                    onChange: function (e) {
                        if (m(e)) return g(e);
                        let a = parseInt(e);
                        if (!isNaN(a)) return null != x && a >= x ? g(x) : null != p && a <= p ? g(p) : g(a);
                    },
                }),
            }),
            (0, l.jsx)(i.K, {
                size: "sm",
                variant: "icon-only",
                icon: d.j,
                onClick: function (e) {
                    e.stopPropagation(), j || g(E + 1);
                },
                "aria-label": h.intl.string(h.t.w8Sc4B),
                disabled: j,
            }),
        ],
    });
}
