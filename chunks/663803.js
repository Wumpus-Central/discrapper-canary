var a = s(477900),
    l = s(582128),
    t = s(503698),
    o = s.n(t),
    c = s(408278),
    e = s(834040),
    r = s(95477),
    u = s(307301),
    d = s(792996),
    p = s(241321);
function h(n) {
    return "" === n || "-" === n;
}
s.d(
    i,
    {},
    {
        l: function (n) {
            let { value: i, onChange: s, className: t, minValue: f, maxValue: k } = n,
                [b, m] = l.useState(i),
                v = h(b) || (null != f && b <= f),
                g = h(b) || (null != k && b >= k);
            function j(n) {
                (s(h(n) ? (f ?? 0) : n), m(n));
            }
            return (0, a.jsxs)("div", {
                className: o()(p.o, t),
                children: [
                    (0, a.jsx)(c.K, {
                        variant: "icon-only",
                        size: "sm",
                        icon: e.MinusIcon,
                        onClick: function (n) {
                            (n.stopPropagation(), v || j(b - 1));
                        },
                        "aria-label": d.intl.string(d.t["k+ohJm"]),
                        disabled: v,
                    }),
                    (0, a.jsx)("div", {
                        className: p.U,
                        children: (0, a.jsx)(r.k, {
                            value: `${b}`,
                            onChange: function (n) {
                                if (h(n)) return j(n);
                                let i = parseInt(n);
                                if (!isNaN(i)) return null != k && i >= k ? j(k) : null != f && i <= f ? j(f) : j(i);
                            },
                        }),
                    }),
                    (0, a.jsx)(c.K, {
                        size: "sm",
                        variant: "icon-only",
                        icon: u.PlusSmallIcon,
                        onClick: function (n) {
                            (n.stopPropagation(), g || j(b + 1));
                        },
                        "aria-label": d.intl.string(d.t.w8Sc4B),
                        disabled: g,
                    }),
                ],
            });
        },
    },
);
