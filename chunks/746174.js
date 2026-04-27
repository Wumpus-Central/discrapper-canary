"use strict";
r.d(t, { j: () => i });
let n = (0, r(945810).mj)({
    name: "2026-03-new-gifting-entrypoints",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
function i(e) {
    return n.useConfig({ location: e }).enabled;
}
