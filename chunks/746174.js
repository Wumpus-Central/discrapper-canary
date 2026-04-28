"use strict";
n.d(t, { j: () => a });
let r = (0, n(945810).mj)({
    name: "2026-03-new-gifting-entrypoints",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
function a(e) {
    return r.useConfig({ location: e }).enabled;
}
