n.d(e, { A: () => o, j: () => m });
var s = n(477900);
n(582128);
var a = n(503698),
    r = n.n(a),
    t = n(323384),
    c = n(297264),
    i = n(834730),
    d = n(289873),
    u = n(199457);
function o(l) {
    let { icon: e, heading: n, description: a, error: d, action: o, className: m } = l;
    return (0, s.jsxs)("div", {
        className: r()(u.vV, m),
        children: [
            e ?? (0, s.jsx)(t.k, { size: "lg", color: "var(--icon-muted)" }),
            null != n ? (0, s.jsx)(c.D, { variant: "heading-md/semibold", color: "text-default", children: n }) : null,
            null != a
                ? (0, s.jsx)(i.E, { variant: "text-sm/normal", color: "text-muted", className: u.r9, children: a })
                : null,
            null != d
                ? (0, s.jsx)(i.E, {
                      variant: "text-sm/normal",
                      color: "text-feedback-critical",
                      className: u.r9,
                      children: d,
                  })
                : null,
            null != o ? (0, s.jsx)("div", { className: u.XI, children: o }) : null,
        ],
    });
}
function m(l) {
    let { className: e } = l;
    return (0, s.jsx)("div", { className: r()(u.vV, e), children: (0, s.jsx)(d.y, {}) });
}
