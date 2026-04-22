n.d(t, { L: () => l });
let i = (0, n(600975).C)({
    kind: "guild",
    id: "2026-04_guild_verification_role",
    label: "Guild Verification Role",
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "Enable verification role setting", config: { enabled: !0 } }],
});
function l(e) {
    let { guildId: t, location: n } = e;
    return i.useExperiment({ guildId: t, location: n }, { autoTrackExposure: !0 });
}
