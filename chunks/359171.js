"use strict";
n.d(t, { j: () => i });
let r = (0, n(600975).C)({
    kind: "user",
    id: "2024-03_clickstream_analytics",
    label: "Clickstream Analytics",
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "Enable Clickstream Analytics", config: { enabled: !0 } }],
});
function i() {
    let { enabled: e } = r.getCurrentConfig({ location: "clickstream" });
    return e;
}
