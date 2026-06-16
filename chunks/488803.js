"use strict";
n.d(t, { C$: () => s, TS: () => r, x1: () => i });
let i = (0, n(600975).C)({
    kind: "guild",
    id: "2025-08_portkey_enabled",
    label: "GameServer Enabled",
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "Enable GameServer", config: { enabled: !0 } }],
});
function r(e, t) {
    return i.getCurrentConfig({ guildId: e, location: t }, { autoTrackExposure: !1 }).enabled;
}
function s(e, t) {
    return i.useExperiment({ guildId: e, location: t }, { autoTrackExposure: !1 }).enabled;
}
