n.d(t, { Z: () => o });
var i = n(477900);
n(582128);
var s = n(503698),
    a = n.n(s),
    l = n(825484),
    r = n(821609),
    E = n(753094);
function o(e) {
    let { actions: t, className: n } = e;
    return (0, i.jsx)("div", {
        className: a()(E.actionBar, n),
        children: (0, i.jsx)(l.e, {
            size: "sm",
            fullWidth: !0,
            direction: "vertical",
            children: t.map((e, t) => (0, i.jsx)(r.$, { ...e }, t)),
        }),
    });
}
