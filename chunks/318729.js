"use strict";
n.d(t, { _: () => s, p: () => r });
let i = (0, n(600975).C)({
    kind: "guild",
    id: "2022-12_mention_raid_limit",
    label: "Automod Mention Raid Limit",
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "Automod Mention Raid Limit", config: { enabled: !0 } }],
});
function r(e) {
    let { enabled: t } = i.getCurrentConfig({ guildId: e, location: "988d4e_3" });
    return t;
}
function s(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        { enabled: n } = i.useExperiment({ guildId: e, location: "988d4e_4" }, { autoTrackExposure: t });
    return n;
}
