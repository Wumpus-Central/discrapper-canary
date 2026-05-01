r.d(t, { Z: () => c });
var n = r(627968);
r(64700);
var a = r(503698),
    l = r.n(a),
    s = r(825484),
    i = r(821609),
    o = r(824078);
function c(e) {
    let { actions: t, className: r } = e;
    return (0, n.jsx)("div", {
        className: l()(o.actionBar, r),
        children: (0, n.jsx)(s.e, {
            size: "sm",
            fullWidth: !0,
            direction: "vertical",
            children: t.map((e, t) => (0, n.jsx)(i.$, { ...e }, t)),
        }),
    });
}
