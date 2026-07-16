t.d(e, { l: () => p });
var l = t(627968),
    n = t(64700),
    i = t(503698),
    r = t.n(i),
    s = t(408278),
    c = t(834040),
    o = t(292666),
    h = t(307301),
    d = t(375708),
    u = t(81184);
function m(a) {
    return "" === a || "-" === a;
}
function p(a) {
    let { value: e, onChange: t, className: i, minValue: p, maxValue: x } = a,
        [E, j] = n.useState(e),
        C = m(E) || (null != p && E <= p),
        v = m(E) || (null != x && E >= x);
    function A(a) {
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
                    a.stopPropagation(), C || A(E - 1);
                },
                "aria-label": d.intl.string(d.t["k+ohJm"]),
                disabled: C,
            }),
            (0, l.jsx)("div", {
                className: u.U,
                children: (0, l.jsx)(o.k, {
                    value: `${E}`,
                    onChange: function (a) {
                        if (m(a)) return A(a);
                        let e = parseInt(a);
                        if (!isNaN(e)) return null != x && e >= x ? A(x) : null != p && e <= p ? A(p) : A(e);
                    },
                }),
            }),
            (0, l.jsx)(s.K, {
                size: "sm",
                variant: "icon-only",
                icon: h.j,
                onClick: function (a) {
                    a.stopPropagation(), v || A(E + 1);
                },
                "aria-label": d.intl.string(d.t.w8Sc4B),
                disabled: v,
            }),
        ],
    });
}
