t.d(e, { l: () => p });
var l = t(477900),
    n = t(582128),
    i = t(503698),
    r = t.n(i),
    s = t(408278),
    c = t(834040),
    o = t(292666),
    h = t(307301),
    d = t(375708),
    u = t(331896);
function m(a) {
    return "" === a || "-" === a;
}
function p(a) {
    let { value: e, onChange: t, className: i, minValue: p, maxValue: x } = a,
        [E, j] = n.useState(e),
        v = m(E) || (null != p && E <= p),
        A = m(E) || (null != x && E >= x);
    function C(a) {
        t(m(a) ? (p ?? 0) : a), j(a);
    }
    return (0, l.jsxs)("div", {
        className: r()(u.o, i),
        children: [
            (0, l.jsx)(s.K, {
                variant: "icon-only",
                size: "sm",
                icon: c.Q,
                onClick: function (a) {
                    a.stopPropagation(), v || C(E - 1);
                },
                "aria-label": d.intl.string(d.t["k+ohJm"]),
                disabled: v,
            }),
            (0, l.jsx)("div", {
                className: u.U,
                children: (0, l.jsx)(o.k, {
                    value: `${E}`,
                    onChange: function (a) {
                        if (m(a)) return C(a);
                        let e = parseInt(a);
                        if (!isNaN(e)) return null != x && e >= x ? C(x) : null != p && e <= p ? C(p) : C(e);
                    },
                }),
            }),
            (0, l.jsx)(s.K, {
                size: "sm",
                variant: "icon-only",
                icon: h.j,
                onClick: function (a) {
                    a.stopPropagation(), A || C(E + 1);
                },
                "aria-label": d.intl.string(d.t.w8Sc4B),
                disabled: A,
            }),
        ],
    });
}
