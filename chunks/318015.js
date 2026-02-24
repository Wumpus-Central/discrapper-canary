"use strict";
n.d(t, { AL: () => i.A, RK: () => a, sK: () => o });
var r = n(945810),
    i = n(766005);
let s = (0, r.mj)({
    name: "2026-02-private-channel-hiding",
    kind: "user",
    defaultConfig: { enableObfuscation: !1, enableIntegrityCheck: !1 },
    variations: {
        1: { enableObfuscation: !0, enableIntegrityCheck: !1 },
        2: { enableObfuscation: !0, enableIntegrityCheck: !0 },
        3: { enableObfuscation: !1, enableIntegrityCheck: !1 },
    },
});
function a(e) {
    return s.getConfig({ location: e }).enableObfuscation;
}
function o(e) {
    return s.useConfig({ location: e }).enableObfuscation;
}
