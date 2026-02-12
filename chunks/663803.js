"use strict";
n.d(t, { l: () => d });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(397927),
    l = n(985018),
    u = n(643239);
function c(e) {
    return "" === e || "-" === e;
}
let d = (e) => {
    let { value: t, onChange: n, className: a, minValue: d, maxValue: _ } = e,
        [f, h] = i.useState(t),
        p = c(f) || (null != d && f <= d),
        g = c(f) || (null != _ && f >= _),
        E = (e) => {
            n(c(e) ? (d ?? 0) : e), h(e);
        },
        A = (e) => {
            e.stopPropagation(), p || E(f - 1);
        },
        I = (e) => {
            e.stopPropagation(), g || E(f + 1);
        },
        T = (e) => {
            if (c(e)) return E(e);
            let t = parseInt(e);
            if (!isNaN(t)) return null != _ && t >= _ ? E(_) : null != d && t <= d ? E(d) : E(t);
        };
    return (0, r.jsxs)("div", {
        className: s()(u.o, a),
        children: [
            (0, r.jsx)(o.K0, {
                variant: "icon-only",
                size: "sm",
                icon: o.QGg,
                onClick: A,
                "aria-label": l.intl.string(l.t["k+ohJm"]),
                disabled: p,
            }),
            (0, r.jsx)("div", { className: u.U, children: (0, r.jsx)(o.ksK, { value: `${f}`, onChange: T }) }),
            (0, r.jsx)(o.K0, {
                size: "sm",
                variant: "icon-only",
                icon: o.j96,
                onClick: I,
                "aria-label": l.intl.string(l.t.w8Sc4B),
                disabled: g,
            }),
        ],
    });
};
