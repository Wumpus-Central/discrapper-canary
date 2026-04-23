t.d(n, { l: () => _ });
var i = t(627968),
    l = t(64700),
    r = t(503698),
    s = t.n(r),
    a = t(408278),
    o = t(834040),
    c = t(292666),
    u = t(307301),
    d = t(985018),
    p = t(81184);
function m(e) {
    return "" === e || "-" === e;
}
let _ = (e) => {
    let { value: n, onChange: t, className: r, minValue: _, maxValue: f } = e,
        [h, g] = l.useState(n),
        S = m(h) || (null != _ && h <= _),
        x = m(h) || (null != f && h >= f),
        b = (e) => {
            t(m(e) ? (_ ?? 0) : e), g(e);
        };
    return (0, i.jsxs)("div", {
        className: s()(p.o, r),
        children: [
            (0, i.jsx)(a.K, {
                variant: "icon-only",
                size: "sm",
                icon: o.Q,
                onClick: (e) => {
                    e.stopPropagation(), S || b(h - 1);
                },
                "aria-label": d.intl.string(d.t["k+ohJm"]),
                disabled: S,
            }),
            (0, i.jsx)("div", {
                className: p.U,
                children: (0, i.jsx)(c.k, {
                    value: `${h}`,
                    onChange: (e) => {
                        if (m(e)) return b(e);
                        let n = parseInt(e);
                        if (!isNaN(n)) return null != f && n >= f ? b(f) : null != _ && n <= _ ? b(_) : b(n);
                    },
                }),
            }),
            (0, i.jsx)(a.K, {
                size: "sm",
                variant: "icon-only",
                icon: u.j,
                onClick: (e) => {
                    e.stopPropagation(), x || b(h + 1);
                },
                "aria-label": d.intl.string(d.t.w8Sc4B),
                disabled: x,
            }),
        ],
    });
};
