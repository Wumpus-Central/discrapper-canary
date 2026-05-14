"use strict";
n.d(t, { DD: () => s, Qs: () => r, g$: () => i });
let i = (0, n(600975).C)({
    kind: "guild",
    id: "2026-04_server_theme",
    label: "Server Theme",
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "Enable Server Theme", config: { enabled: !0 } }],
});
function r(e, t) {
    return i.getCurrentConfig({ guildId: e, location: t }, { autoTrackExposure: !1 }).enabled;
}
function s(e, t) {
    return i.useExperiment({ guildId: e, location: t }, { autoTrackExposure: !1 }).enabled;
}
