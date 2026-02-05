"use strict";
n.d(t, { C$: () => a, TS: () => i, x1: () => r });
let r = (0, n(600975).C)({
    kind: "guild",
    id: "2025-08_portkey_enabled",
    label: "GameServer Enabled",
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "Enable GameServer", config: { enabled: !0 } }],
});
function i(e, t) {
    return r.getCurrentConfig({ guildId: e, location: t }, { autoTrackExposure: !1 }).enabled;
}
function a(e, t) {
    return r.useExperiment({ guildId: e, location: t }, { autoTrackExposure: !1 }).enabled;
}
