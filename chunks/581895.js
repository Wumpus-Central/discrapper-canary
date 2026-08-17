"use strict";
n.d(t, { M: () => r, f: () => a });
let i = (0, n(240921).Ay)({
    kind: "user",
    name: "2026-06-dont-badge-muted-vcs",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
function r(e) {
    return i.useConfig({ location: e }).enabled;
}
function a(e) {
    return i.getConfig({ location: e }).enabled;
}
