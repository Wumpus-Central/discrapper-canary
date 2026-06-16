"use strict";
n.d(t, { A: () => d });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(953727);
function l(e) {
    let { width: t = 8, height: n = 13, color: r = "currentColor", foreground: s, ...a } = e;
    return (0, i.jsx)("svg", {
        ...(0, o.A)(a),
        width: t,
        height: n,
        viewBox: "0 0 8 13",
        children: (0, i.jsx)("path", {
            className: s ?? void 0,
            stroke: r,
            fill: "transparent",
            d: "M8.16639 0.5H9C10.933 0.5 12.5 2.067 12.5 4V9C12.5 10.933 10.933 12.5 9 12.5H8.16639C7.23921 12.5 6.34992 12.1321 5.69373 11.4771L0.707739 6.5L5.69373 1.52292C6.34992 0.86789 7.23921 0.5 8.16639 0.5Z",
        }),
    });
}
var u = n(375708),
    c = n(356929);
let d = r.forwardRef(function (e, t) {
    let { className: n, contentClassName: r, isUnread: s, children: o, ...d } = e;
    return (0, i.jsxs)("div", {
        ...d,
        className: a()(n, { [c.yF]: !0, [c.KJ]: s, [c.ov]: null != o }),
        ref: t,
        children: [
            null != o ? (0, i.jsx)("span", { className: a()(c.Qs, r), children: o }) : null,
            s
                ? (0, i.jsxs)("span", {
                      className: c.dM,
                      children: [(0, i.jsx)(l, { foreground: c.BH, className: c.fE }), u.intl.string(u.t.y2b7CA)],
                  })
                : null,
        ],
    });
});
