n.d(t, { Z: () => c });
var r = n(477900);
n(582128);
var a = n(503698),
    l = n.n(a),
    o = n(825484),
    s = n(821609),
    i = n(489387);
function c(e) {
    let { actions: t, className: n } = e;
    return (0, r.jsx)("div", {
        className: l()(i.actionBar, n),
        children: (0, r.jsx)(o.e, {
            size: "sm",
            fullWidth: !0,
            direction: "vertical",
            children: t.map((e, t) => (0, r.jsx)(s.$, { ...e }, t)),
        }),
    });
}
