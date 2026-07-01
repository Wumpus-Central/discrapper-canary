"use strict";
n.d(t, { p: () => r, u: () => i });
let i = (0, n(945810).mj)({
    kind: "user",
    name: "2025-10-friendship-anniversary-gifting",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 }, 2: { enabled: !0 } },
});
function r(e) {
    return i.getConfig({ location: e }).enabled;
}
