"use strict";
n.d(t, { AL: () => i.A, RK: () => s, sK: () => o });
var r = n(945810),
    i = n(766005);
let a = (0, r.mj)({
    name: "2026-02-private-channel-hiding",
    kind: "user",
    defaultConfig: { enableObfuscation: !1, enableIntegrityCheck: !1 },
    variations: {
        1: { enableObfuscation: !0, enableIntegrityCheck: !1 },
        2: { enableObfuscation: !0, enableIntegrityCheck: !0 },
    },
});
function s(e) {
    return a.getConfig({ location: e }).enableObfuscation;
}
function o(e) {
    return a.useConfig({ location: e }).enableObfuscation;
}
