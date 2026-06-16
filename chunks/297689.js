"use strict";
n.d(t, { $m: () => _, nD: () => r.EN, vr: () => d });
var i = n(627968);
n(64700);
var r = n(353068),
    s = n(825913),
    a = n(650682),
    o = n(187322),
    l = n(834730),
    u = n(847374),
    c = n(167488);
function d(e) {
    let { children: t } = e;
    return (0, i.jsx)(r.kS, { className: c.nd, children: t });
}
function _(e) {
    let { children: t, ...n } = e,
        { isDisabled: r } = (0, s.CC)(a.k, "trigger");
    return (0, i.jsx)(o.vN, {
        children: (0, i.jsx)(a.$, {
            slot: "trigger",
            className: c.hZ,
            children: (0, i.jsxs)(l.E, {
                ...n,
                className: c.aQ,
                children: [t, !r && (0, i.jsx)(u.a, { size: "xs", color: "currentColor", className: c.ai })],
            }),
        }),
    });
}
