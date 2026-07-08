"use strict";
n.d(t, { DW: () => a, ux: () => o });
var i = n(945810);
let r = (0, i.mj)({
        kind: "user",
        name: "2026-06-gummy-bears",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    s = (0, i.mj)({
        kind: "user",
        name: "2026-06-gummy-viewers",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
function a(e) {
    return s.useConfig({ location: e }).enabled;
}
function o(e) {
    return r.useConfig({ location: e }).enabled;
}
