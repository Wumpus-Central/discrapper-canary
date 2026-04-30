a.d(i, { l: () => k });
var s = a(627968),
    l = a(64700),
    t = a(503698),
    e = a.n(t),
    r = a(408278),
    o = a(834040),
    c = a(292666),
    u = a(307301),
    d = a(375708),
    p = a(81184);
function h(n) {
    return "" === n || "-" === n;
}
let k = (n) => {
    let { value: i, onChange: a, className: t, minValue: k, maxValue: b } = n,
        [j, v] = l.useState(i),
        g = h(j) || (null != k && j <= k),
        m = h(j) || (null != b && j >= b),
        x = (n) => {
            a(h(n) ? (k ?? 0) : n), v(n);
        };
    return (0, s.jsxs)("div", {
        className: e()(p.o, t),
        children: [
            (0, s.jsx)(r.K, {
                variant: "icon-only",
                size: "sm",
                icon: o.Q,
                onClick: (n) => {
                    n.stopPropagation(), g || x(j - 1);
                },
                "aria-label": d.intl.string(d.t["k+ohJm"]),
                disabled: g,
            }),
            (0, s.jsx)("div", {
                className: p.U,
                children: (0, s.jsx)(c.k, {
                    value: `${j}`,
                    onChange: (n) => {
                        if (h(n)) return x(n);
                        let i = parseInt(n);
                        if (!isNaN(i)) return null != b && i >= b ? x(b) : null != k && i <= k ? x(k) : x(i);
                    },
                }),
            }),
            (0, s.jsx)(r.K, {
                size: "sm",
                variant: "icon-only",
                icon: u.j,
                onClick: (n) => {
                    n.stopPropagation(), m || x(j + 1);
                },
                "aria-label": d.intl.string(d.t.w8Sc4B),
                disabled: m,
            }),
        ],
    });
};
