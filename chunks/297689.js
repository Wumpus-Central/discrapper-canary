n.d(t, { $m: () => m, nD: () => r.EN, vr: () => d });
var a = n(627968);
n(64700);
var r = n(386181),
    l = n(825913),
    i = n(650682),
    s = n(187322),
    o = n(834730),
    u = n(847374),
    c = n(167488);
function d(e) {
    let { children: t } = e;
    return (0, a.jsx)(r.kS, { className: c.nd, children: t });
}
function m(e) {
    let { children: t, ...n } = e,
        { isDisabled: r } = (0, l.CC)(i.k, "trigger");
    return (0, a.jsx)(s.vN, {
        children: (0, a.jsx)(i.$, {
            slot: "trigger",
            className: c.hZ,
            children: (0, a.jsxs)(o.E, {
                ...n,
                className: c.aQ,
                children: [t, !r && (0, a.jsx)(u.a, { size: "xs", color: "currentColor", className: c.ai })],
            }),
        }),
    });
}
