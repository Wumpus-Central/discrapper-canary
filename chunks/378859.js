n.d(s, { A: () => o, j: () => m });
var a = n(477900);
n(582128);
var e = n(503698),
    r = n.n(e),
    c = n(323384),
    i = n(534514),
    t = n(834730),
    d = n(289873),
    u = n(199457);
function o(l) {
    let { icon: s, heading: n, description: e, error: d, action: o, className: m } = l;
    return (0, a.jsxs)("div", {
        className: r()(u.vV, m),
        children: [
            s ?? (0, a.jsx)(c.k, { size: "lg", color: "var(--icon-muted)" }),
            null != n ? (0, a.jsx)(i.D, { variant: "heading-sm/semibold", color: "text-default", children: n }) : null,
            null != e
                ? (0, a.jsx)(t.E, { variant: "body-sm/normal", color: "text-muted", className: u.r9, children: e })
                : null,
            null != d
                ? (0, a.jsx)(t.E, {
                      variant: "body-sm/normal",
                      color: "text-feedback-critical",
                      className: u.r9,
                      children: d,
                  })
                : null,
            null != o ? (0, a.jsx)("div", { className: u.XI, children: o }) : null,
        ],
    });
}
function m(l) {
    let { className: s } = l;
    return (0, a.jsx)("div", { className: r()(u.vV, s), children: (0, a.jsx)(d.y, {}) });
}
