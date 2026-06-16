n.d(t, { Z: () => c });
var a = n(627968);
n(64700);
var r = n(503698),
    l = n.n(r),
    i = n(825484),
    s = n(821609),
    o = n(824078);
function c(e) {
    let { actions: t, className: n } = e;
    return (0, a.jsx)("div", {
        className: l()(o.actionBar, n),
        children: (0, a.jsx)(i.e, {
            size: "sm",
            fullWidth: !0,
            direction: "vertical",
            children: t.map((e, t) => (0, a.jsx)(s.$, { ...e }, t)),
        }),
    });
}
