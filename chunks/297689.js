"use strict";
n.d(t, { $m: () => _, nD: () => i.EN, vr: () => d });
var r = n(627968);
n(64700);
var i = n(386181),
    s = n(825913),
    a = n(650682),
    o = n(187322),
    l = n(834730),
    u = n(847374),
    c = n(167488);
function d(e) {
    let { children: t } = e;
    return (0, r.jsx)(i.kS, { className: c.nd, children: t });
}
function _(e) {
    let { children: t, ...n } = e,
        { isDisabled: i } = (0, s.CC)(a.k, "trigger");
    return (0, r.jsx)(o.vN, {
        children: (0, r.jsx)(a.$, {
            slot: "trigger",
            className: c.hZ,
            children: (0, r.jsxs)(l.E, {
                ...n,
                className: c.aQ,
                children: [t, !i && (0, r.jsx)(u.a, { size: "xs", color: "currentColor", className: c.ai })],
            }),
        }),
    });
}
