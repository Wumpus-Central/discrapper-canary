"use strict";
n.d(t, { DW: () => u, ux: () => c });
var i = n(17928),
    r = n(945810),
    s = n(287809);
let a = (0, r.mj)({
        kind: "user",
        name: "2026-06-gummy-bears",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    o = (0, r.mj)({
        kind: "user",
        name: "2026-06-gummy-viewers",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
function l() {
    return (0, i.bG)([s.default], () => s.default.getCurrentUser()?.isStaff() ?? !1);
}
function u(e) {
    let t = o.useConfig({ location: e });
    return l() && t.enabled;
}
function c(e) {
    let t = a.useConfig({ location: e });
    return l() && t.enabled;
}
