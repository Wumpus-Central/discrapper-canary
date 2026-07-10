n.d(t, { l: () => f });
var a = n(627968),
    i = n(64700),
    c = n(503698),
    r = n.n(c),
    l = n(408278),
    s = n(834040),
    o = n(292666),
    d = n(307301),
    u = n(375708),
    b = n(81184);
function p(e) {
    return "" === e || "-" === e;
}
function f(e) {
    let { value: t, onChange: n, className: c, minValue: f, maxValue: m } = e,
        [y, E] = i.useState(t),
        h = p(y) || (null != f && y <= f),
        v = p(y) || (null != m && y >= m);
    function x(e) {
        n(p(e) ? (f ?? 0) : e), E(e);
    }
    return (0, a.jsxs)("div", {
        className: r()(b.o, c),
        children: [
            (0, a.jsx)(l.K, {
                variant: "icon-only",
                size: "sm",
                icon: s.Q,
                onClick: (e) => {
                    e.stopPropagation(), h || x(y - 1);
                },
                "aria-label": u.intl.string(u.t["k+ohJm"]),
                disabled: h,
            }),
            (0, a.jsx)("div", {
                className: b.U,
                children: (0, a.jsx)(o.k, {
                    value: `${y}`,
                    onChange: (e) => {
                        if (p(e)) return x(e);
                        let t = parseInt(e);
                        if (!isNaN(t)) return null != m && t >= m ? x(m) : null != f && t <= f ? x(f) : x(t);
                    },
                }),
            }),
            (0, a.jsx)(l.K, {
                size: "sm",
                variant: "icon-only",
                icon: d.j,
                onClick: (e) => {
                    e.stopPropagation(), v || x(y + 1);
                },
                "aria-label": u.intl.string(u.t.w8Sc4B),
                disabled: v,
            }),
        ],
    });
}
