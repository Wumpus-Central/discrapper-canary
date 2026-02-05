"use strict";
n.d(t, { i: () => i });
let r = (0, n(945810).mj)({
    name: "2025-12-hdr-accessibility-setting",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
function i(e) {
    return r.useConfig({ location: e }).enabled;
}
