"use strict";
n.d(t, { A: () => u });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(953727);
function o(e) {
    let { width: t = 8, height: n = 13, color: r = "currentColor", foreground: a, ...s } = e;
    return (0, i.jsx)("svg", {
        ...(0, l.A)(s),
        width: t,
        height: n,
        viewBox: "0 0 8 13",
        children: (0, i.jsx)("path", {
            className: a ?? void 0,
            stroke: r,
            fill: "transparent",
            d: "M8.16639 0.5H9C10.933 0.5 12.5 2.067 12.5 4V9C12.5 10.933 10.933 12.5 9 12.5H8.16639C7.23921 12.5 6.34992 12.1321 5.69373 11.4771L0.707739 6.5L5.69373 1.52292C6.34992 0.86789 7.23921 0.5 8.16639 0.5Z",
        }),
    });
}
var d = n(375708),
    c = n(917849);
let u = r.forwardRef(function (e, t) {
    let { className: n, contentClassName: r, isUnread: a, children: l, ...u } = e;
    return (0, i.jsxs)("div", {
        ...u,
        className: s()(n, { [c.yF]: !0, [c.KJ]: a, [c.ov]: null != l }),
        ref: t,
        children: [
            null != l ? (0, i.jsx)("span", { className: s()(c.Qs, r), children: l }) : null,
            a
                ? (0, i.jsxs)("span", {
                      className: c.dM,
                      children: [(0, i.jsx)(o, { foreground: c.BH, className: c.fE }), d.intl.string(d.t.y2b7CA)],
                  })
                : null,
        ],
    });
});
