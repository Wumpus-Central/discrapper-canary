r.d(t, { Z: () => c });
var n = r(477900);
r(582128);
var o = r(503698),
    a = r.n(o),
    s = r(825484),
    i = r(821609),
    l = r(489387);
function c(e) {
    let { actions: t, className: r } = e;
    return (0, n.jsx)("div", {
        className: a()(l.actionBar, r),
        children: (0, n.jsx)(s.e, {
            size: "sm",
            fullWidth: !0,
            direction: "vertical",
            children: t.map((e, t) => (0, n.jsx)(i.$, { ...e }, t)),
        }),
    });
}
