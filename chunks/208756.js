a.d(t, { Z: () => c });
var n = a(627968);
a(64700);
var r = a(503698),
    l = a.n(r),
    i = a(825484),
    s = a(821609),
    o = a(824078);
function c(e) {
    let { actions: t, className: a } = e;
    return (0, n.jsx)("div", {
        className: l()(o.actionBar, a),
        children: (0, n.jsx)(i.e, {
            size: "sm",
            fullWidth: !0,
            direction: "vertical",
            children: t.map((e, t) => (0, n.jsx)(s.$, { ...e }, t)),
        }),
    });
}
