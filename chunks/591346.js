n.d(t, { G8: () => l, NH: () => s });
let i = (0, n(600975).C)({
    kind: "guild",
    id: "2026-02_voice_channel_history_hover",
    label: "Voice Channel History",
    defaultConfig: { enableHistoryHover: !1, showGhostUser: !1 },
    treatments: [
        { id: 1, label: "Enable history popout hover behavior", config: { enableHistoryHover: !0, showGhostUser: !0 } },
        {
            id: 2,
            label: "Enable history popout hover behavior without ghost user",
            config: { enableHistoryHover: !0, showGhostUser: !1 },
        },
    ],
});
function l(e) {
    let { guildId: t, location: n } = e;
    return i.useExperiment({ guildId: t, location: n });
}
function s(e) {
    let { guildId: t, location: n } = e;
    return i.getCurrentConfig({ guildId: t, location: n });
}
