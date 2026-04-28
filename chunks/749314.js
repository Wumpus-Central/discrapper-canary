s.d(t, { A: () => c });
var _ = s(627968),
    n = s(64700),
    a = s(503698),
    i = s.n(a),
    r = s(953727);
function A(e) {
    let { width: t = 8, height: s = 13, color: n = "currentColor", foreground: a, ...i } = e;
    return (0, _.jsx)("svg", {
        ...(0, r.A)(i),
        width: t,
        height: s,
        viewBox: "0 0 8 13",
        children: (0, _.jsx)("path", {
            className: a ?? void 0,
            stroke: n,
            fill: "transparent",
            d: "M8.16639 0.5H9C10.933 0.5 12.5 2.067 12.5 4V9C12.5 10.933 10.933 12.5 9 12.5H8.16639C7.23921 12.5 6.34992 12.1321 5.69373 11.4771L0.707739 6.5L5.69373 1.52292C6.34992 0.86789 7.23921 0.5 8.16639 0.5Z",
        }),
    });
}
var l = s(985018),
    o = s(356929);
let c = n.forwardRef(function (e, t) {
    let { className: s, contentClassName: n, isUnread: a, children: r, ...c } = e;
    return (0, _.jsxs)("div", {
        ...c,
        className: i()(s, { [o.yF]: !0, [o.KJ]: a, [o.ov]: null != r }),
        ref: t,
        children: [
            null != r ? (0, _.jsx)("span", { className: i()(o.Qs, n), children: r }) : null,
            a
                ? (0, _.jsxs)("span", {
                      className: o.dM,
                      children: [(0, _.jsx)(A, { foreground: o.BH, className: o.fE }), l.intl.string(l.t.y2b7CA)],
                  })
                : null,
        ],
    });
});
