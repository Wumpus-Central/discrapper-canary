r.d(n, { A: () => u });
var e = r(477900);
r(582128);
var l = r(503698),
    a = r.n(l),
    t = r(953727);
function i(s) {
    let { width: n = 8, height: r = 13, color: l = "currentColor", foreground: a, ...i } = s;
    return (0, e.jsx)("svg", {
        ...(0, t.A)(i),
        width: n,
        height: r,
        viewBox: "0 0 8 13",
        children: (0, e.jsx)("path", {
            className: a ?? void 0,
            stroke: l,
            fill: "transparent",
            d: "M8.16639 0.5H9C10.933 0.5 12.5 2.067 12.5 4V9C12.5 10.933 10.933 12.5 9 12.5H8.16639C7.23921 12.5 6.34992 12.1321 5.69373 11.4771L0.707739 6.5L5.69373 1.52292C6.34992 0.86789 7.23921 0.5 8.16639 0.5Z",
        }),
    });
}
var c = r(105292),
    d = r(682172);
function u(s) {
    let { className: n, contentClassName: r, isUnread: l, children: t, ref: u, ...h } = s;
    return (0, e.jsxs)("div", {
        ...h,
        className: a()(n, { [d.yF]: !0, [d.KJ]: l, [d.ov]: null != t }),
        ref: u,
        children: [
            null != t ? (0, e.jsx)("span", { className: a()(d.Qs, r), children: t }) : null,
            l
                ? (0, e.jsxs)("span", {
                      className: d.dM,
                      children: [(0, e.jsx)(i, { foreground: d.BH, className: d.fE }), c.intl.string(c.t.y2b7CA)],
                  })
                : null,
        ],
    });
}
