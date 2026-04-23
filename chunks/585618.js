"use strict";
n.d(t, { e: () => i });
let r = (0, n(250105).Ay)({
    name: "2026-04-boosting-badge-hover-popup",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
function i(e) {
    return r.useConfig({ location: e }).enabled;
}
