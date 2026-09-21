n.d(t, { aA: () => r, fX: () => a });
let i = (0, n(600975).C)({
    kind: "guild",
    id: "2026-06_guild_spaces",
    label: "Guild Space",
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "Enable Guild Space", config: { enabled: !0 } }],
});
function r(e, t) {
    return i.getCurrentConfig({ guildId: e, location: t }, { autoTrackExposure: !1 }).enabled;
}
function a(e, t) {
    return i.useExperiment({ guildId: e, location: t }, { autoTrackExposure: !1 }).enabled;
}
