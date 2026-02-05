"use strict";
n.d(t, { $m: () => c, nD: () => i.EN, vr: () => u });
var r = n(627968);
n(64700);
var i = n(386181),
    a = n(825913),
    s = n(650682),
    o = n(397927),
    l = n(507773);
function u(e) {
    let { children: t } = e;
    return (0, r.jsx)(i.kS, { className: l.nd, children: t });
}
function c(e) {
    let { children: t, ...n } = e,
        { isDisabled: i } = (0, a.CC)(s.k, "trigger");
    return (0, r.jsx)(o.vN3, {
        children: (0, r.jsx)(s.$, {
            slot: "trigger",
            className: l.hZ,
            children: (0, r.jsxs)(o.Text, {
                ...n,
                className: l.aQ,
                children: [t, !i && (0, r.jsx)(o.abt, { size: "xs", color: "currentColor", className: l.ai })],
            }),
        }),
    });
}
