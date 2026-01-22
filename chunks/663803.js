n.d(t, {
    l: () => d,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(397927),
    l = n(985018),
    c = n(643239);

function u(e) {
    return "" === e || "-" === e;
}
let d = (e) => {
    let { value: t, onChange: n, className: a, minValue: d, maxValue: f } = e,
        [p, _] = i.useState(t),
        h = u(p) || (null != d && p <= d),
        m = u(p) || (null != f && p >= f),
        g = (e) => {
            n(u(e) ? (null != d ? d : 0) : e), _(e);
        },
        E = (e) => {
            e.stopPropagation(), h || g(p - 1);
        },
        b = (e) => {
            e.stopPropagation(), m || g(p + 1);
        },
        y = (e) => {
            if (u(e)) return g(e);
            let t = parseInt(e);
            if (!isNaN(t)) return null != f && t >= f ? g(f) : null != d && t <= d ? g(d) : g(t);
        };
    return (0, r.jsxs)("div", {
        className: s()(c.o, a),
        children: [
            (0, r.jsx)(o.K0, {
                variant: "icon-only",
                size: "sm",
                icon: o.QGg,
                onClick: E,
                "aria-label": l.intl.string(l.t["k+ohJm"]),
                disabled: h,
            }),
            (0, r.jsx)("div", {
                className: c.U,
                children: (0, r.jsx)(o.ksK, {
                    value: "".concat(p),
                    onChange: y,
                }),
            }),
            (0, r.jsx)(o.K0, {
                size: "sm",
                variant: "icon-only",
                icon: o.j96,
                onClick: b,
                "aria-label": l.intl.string(l.t.w8Sc4B),
                disabled: m,
            }),
        ],
    });
};
