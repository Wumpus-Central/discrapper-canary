s.d(i, { l: () => f });
var t = s(477900),
    a = s(582128),
    l = s(503698),
    o = s.n(l),
    e = s(408278),
    c = s(834040),
    r = s(95477),
    u = s(307301),
    d = s(105292),
    p = s(241321);
function h(n) {
    return "" === n || "-" === n;
}
function f(n) {
    let { value: i, onChange: s, className: l, minValue: f, maxValue: k } = n,
        [b, j] = a.useState(i),
        v = h(b) || (null != f && b <= f),
        g = h(b) || (null != k && b >= k);
    function m(n) {
        (s(h(n) ? (f ?? 0) : n), j(n));
    }
    return (0, t.jsxs)("div", {
        className: o()(p.o, l),
        children: [
            (0, t.jsx)(e.K, {
                variant: "icon-only",
                size: "sm",
                icon: c.MinusIcon,
                onClick: function (n) {
                    (n.stopPropagation(), v || m(b - 1));
                },
                "aria-label": d.intl.string(d.t["k+ohJm"]),
                disabled: v,
            }),
            (0, t.jsx)("div", {
                className: p.U,
                children: (0, t.jsx)(r.k, {
                    value: `${b}`,
                    onChange: function (n) {
                        if (h(n)) return m(n);
                        let i = parseInt(n);
                        if (!isNaN(i)) return null != k && i >= k ? m(k) : null != f && i <= f ? m(f) : m(i);
                    },
                }),
            }),
            (0, t.jsx)(e.K, {
                size: "sm",
                variant: "icon-only",
                icon: u.j,
                onClick: function (n) {
                    (n.stopPropagation(), g || m(b + 1));
                },
                "aria-label": d.intl.string(d.t.w8Sc4B),
                disabled: g,
            }),
        ],
    });
}
