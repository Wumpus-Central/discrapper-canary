"use strict";
n.d(t, { l: () => d });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(397927),
    l = n(985018),
    u = n(81184);
function c(e) {
    return "" === e || "-" === e;
}
let d = (e) => {
    let { value: t, onChange: n, className: s, minValue: d, maxValue: _ } = e,
        [f, p] = i.useState(t),
        h = c(f) || (null != d && f <= d),
        m = c(f) || (null != _ && f >= _),
        E = (e) => {
            n(c(e) ? (d ?? 0) : e), p(e);
        },
        g = (e) => {
            e.stopPropagation(), h || E(f - 1);
        },
        A = (e) => {
            e.stopPropagation(), m || E(f + 1);
        },
        I = (e) => {
            if (c(e)) return E(e);
            let t = parseInt(e);
            if (!isNaN(t)) return null != _ && t >= _ ? E(_) : null != d && t <= d ? E(d) : E(t);
        };
    return (0, r.jsxs)("div", {
        className: a()(u.o, s),
        children: [
            (0, r.jsx)(o.K0, {
                variant: "icon-only",
                size: "sm",
                icon: o.QGg,
                onClick: g,
                "aria-label": l.intl.string(l.t["k+ohJm"]),
                disabled: h,
            }),
            (0, r.jsx)("div", { className: u.U, children: (0, r.jsx)(o.ksK, { value: `${f}`, onChange: I }) }),
            (0, r.jsx)(o.K0, {
                size: "sm",
                variant: "icon-only",
                icon: o.j96,
                onClick: A,
                "aria-label": l.intl.string(l.t.w8Sc4B),
                disabled: m,
            }),
        ],
    });
};
