"use strict";
n.d(t, { J: () => i });
let r = (0, n(250105).Ay)({
    kind: "user",
    name: "2025-10-low-latency-rate-control",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
function i(e) {
    let { location: t, disable: n = !1 } = e;
    return n ? r.definition.defaultConfig : r.getConfig({ location: t });
}
