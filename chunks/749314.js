"use strict";
n.d(t, { A: () => d });
var l = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(953727);
function o(e) {
    let { width: t = 8, height: n = 13, color: i = "currentColor", foreground: s, ...a } = e;
    return (0, l.jsx)("svg", {
        ...(0, r.A)(a),
        width: t,
        height: n,
        viewBox: "0 0 8 13",
        children: (0, l.jsx)("path", {
            className: s ?? void 0,
            stroke: i,
            fill: "transparent",
            d: "M8.16639 0.5H9C10.933 0.5 12.5 2.067 12.5 4V9C12.5 10.933 10.933 12.5 9 12.5H8.16639C7.23921 12.5 6.34992 12.1321 5.69373 11.4771L0.707739 6.5L5.69373 1.52292C6.34992 0.86789 7.23921 0.5 8.16639 0.5Z",
        }),
    });
}
var c = n(985018),
    u = n(356929);
let d = i.forwardRef(function (e, t) {
    let { className: n, contentClassName: i, isUnread: s, children: r, ...d } = e;
    return (0, l.jsxs)("div", {
        ...d,
        className: a()(n, { [u.yF]: !0, [u.KJ]: s, [u.ov]: null != r }),
        ref: t,
        children: [
            null != r ? (0, l.jsx)("span", { className: a()(u.Qs, i), children: r }) : null,
            s
                ? (0, l.jsxs)("span", {
                      className: u.dM,
                      children: [(0, l.jsx)(o, { foreground: u.BH, className: u.fE }), c.intl.string(c.t.y2b7CA)],
                  })
                : null,
        ],
    });
});
