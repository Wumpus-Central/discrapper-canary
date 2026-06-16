"use strict";
n.d(t, { S: () => a, r: () => s });
var i = n(600975),
    r = n(488803);
let s = (0, i.C)({
    kind: "guild",
    id: "2026-03_game_server_pricing",
    label: "Game Server Pricing",
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "Enable Game Server Pricing", config: { enabled: !0 } }],
});
function a(e, t) {
    let n = (0, r.C$)(e, t),
        i = s.useExperiment({ guildId: e, location: t }, { autoTrackExposure: !1 }).enabled;
    return n && i;
}
