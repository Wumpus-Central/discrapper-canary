"use strict";
n.d(t, { D: () => i });
let r = (0, n(945810).mj)({
    name: "2025-10-layer-system-v2",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
function i(e) {
    return r.useConfig({ location: e }).enabled;
}
