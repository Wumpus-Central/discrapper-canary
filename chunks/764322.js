"use strict";
n.d(t, { S: () => i, r: () => r });
let r = (0, n(600975).C)({
    kind: "guild",
    id: "2026-03_game_server_pricing",
    label: "Game Server Pricing",
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "Enable Game Server Pricing", config: { enabled: !0 } }],
});
function i(e, t) {
    return r.useExperiment({ guildId: e, location: t }, { autoTrackExposure: !1 }).enabled;
}
