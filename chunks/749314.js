s.d(e, { A: () => h });
var a = s(627968),
    A = s(64700),
    i = s(503698),
    n = s.n(i),
    l = s(953727);
function r(t) {
    let { width: e = 8, height: s = 13, color: A = "currentColor", foreground: i, ...n } = t;
    return (0, a.jsx)("svg", {
        ...(0, l.A)(n),
        width: e,
        height: s,
        viewBox: "0 0 8 13",
        children: (0, a.jsx)("path", {
            className: i ?? void 0,
            stroke: A,
            fill: "transparent",
            d: "M8.16639 0.5H9C10.933 0.5 12.5 2.067 12.5 4V9C12.5 10.933 10.933 12.5 9 12.5H8.16639C7.23921 12.5 6.34992 12.1321 5.69373 11.4771L0.707739 6.5L5.69373 1.52292C6.34992 0.86789 7.23921 0.5 8.16639 0.5Z",
        }),
    });
}
var _ = s(985018),
    I = s(356929);
let h = A.forwardRef(function (t, e) {
    let { className: s, contentClassName: A, isUnread: i, children: l, ...h } = t;
    return (0, a.jsxs)("div", {
        ...h,
        className: n()(s, { [I.yF]: !0, [I.KJ]: i, [I.ov]: null != l }),
        ref: e,
        children: [
            null != l ? (0, a.jsx)("span", { className: n()(I.Qs, A), children: l }) : null,
            i
                ? (0, a.jsxs)("span", {
                      className: I.dM,
                      children: [(0, a.jsx)(r, { foreground: I.BH, className: I.fE }), _.intl.string(_.t.y2b7CA)],
                  })
                : null,
        ],
    });
});
