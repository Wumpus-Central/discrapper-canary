"use strict";
n.d(t, { S: () => a, r: () => s });
var r = n(600975),
    i = n(488803);
let s = (0, r.C)({
    kind: "guild",
    id: "2026-03_game_server_pricing",
    label: "Game Server Pricing",
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "Enable Game Server Pricing", config: { enabled: !0 } }],
});
function a(e, t) {
    let n = (0, i.C$)(e, t),
        r = s.useExperiment({ guildId: e, location: t }, { autoTrackExposure: !1 }).enabled;
    return n && r;
}
