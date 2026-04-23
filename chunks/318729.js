n.d(t, { _: () => a, p: () => i });
let l = (0, n(600975).C)({
    kind: "guild",
    id: "2022-12_mention_raid_limit",
    label: "Automod Mention Raid Limit",
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "Automod Mention Raid Limit", config: { enabled: !0 } }],
});
function i(e) {
    let { enabled: t } = l.getCurrentConfig({ guildId: e, location: "988d4e_3" });
    return t;
}
function a(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        { enabled: n } = l.useExperiment({ guildId: e, location: "988d4e_4" }, { autoTrackExposure: t });
    return n;
}
