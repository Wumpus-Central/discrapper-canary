n.d(t, { S: () => s, r: () => r });
var i = n(600975),
    a = n(488803);
let r = (0, i.C)({
    kind: "guild",
    id: "2026-03_game_server_pricing",
    label: "Game Server Pricing",
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "Enable Game Server Pricing", config: { enabled: !0 } }],
});
function s(e, t) {
    let n = (0, a.C$)(e, t),
        i = r.useExperiment({ guildId: e, location: t }, { autoTrackExposure: !1 }).enabled;
    return n && i;
}
