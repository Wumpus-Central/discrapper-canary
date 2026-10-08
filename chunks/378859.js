a.d(e, { A: () => o, j: () => m });
var n = a(477900);
a(582128);
var r = a(503698),
    s = a.n(r),
    t = a(323384),
    c = a(297264),
    i = a(834730),
    d = a(289873),
    u = a(199457);
function o(l) {
    let { heading: e, description: a, error: r, className: d } = l;
    return (0, n.jsxs)("div", {
        className: s()(u.v, d),
        children: [
            (0, n.jsx)(t.k, { size: "lg", color: "var(--icon-muted)" }),
            null != e ? (0, n.jsx)(c.D, { variant: "heading-md/semibold", color: "text-default", children: e }) : null,
            null != a
                ? (0, n.jsx)(i.E, { variant: "text-sm/normal", color: "text-muted", className: u.r, children: a })
                : null,
            null != r
                ? (0, n.jsx)(i.E, {
                      variant: "text-sm/normal",
                      color: "text-feedback-critical",
                      className: u.r,
                      children: r,
                  })
                : null,
        ],
    });
}
function m(l) {
    let { className: e } = l;
    return (0, n.jsx)("div", { className: s()(u.v, e), children: (0, n.jsx)(d.y, {}) });
}
