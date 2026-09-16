e.d(t, { pt: () => d, ZQ: () => c, _T: () => u });
var i = e(600975),
    l = e(945810);
let o = (0, i.C)({
        kind: "guild",
        id: "2022-12_mention_raid_limit",
        label: "Automod Mention Raid Limit",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Automod Mention Raid Limit", config: { enabled: !0 } }],
    }),
    a = (0, l.mj)({
        name: "2026-09-automod-application-rules",
        kind: "guild",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
function d(n) {
    let { enabled: t } = o.getCurrentConfig({ guildId: n, location: "988d4e_3" });
    return t;
}
function u(n) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        { enabled: e } = o.useExperiment({ guildId: n, location: "988d4e_4" }, { autoTrackExposure: t });
    return e;
}
function c(n) {
    let { enabled: t } = a.useConfig({ guildId: n, location: "automod_settings" });
    return t;
}
