"use strict";
n.d(t, { Qs: () => i, g$: () => r });
let r = (0, n(600975).C)({
    kind: "guild",
    id: "2026-04_server_theme",
    label: "Server Theme",
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "Enable Server Theme", config: { enabled: !0 } }],
});
function i(e, t) {
    return r.getCurrentConfig({ guildId: e, location: t }, { autoTrackExposure: !1 }).enabled;
}
