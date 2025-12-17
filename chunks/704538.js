n.d(t, {
    J: () => s,
    p: () => o,
});
var r = n(427164),
    i = n(699955);
let a = (0, r.le)({
    name: "2025-12-social-layer-storefront-activity-card-entrypoints-user-experiment",
    kind: "user",
    defaultConfig: {
        voiceChannelActivitiesEnabled: !1,
        guildActivitiesEnabled: !1,
    },
    variations: {
        0: {
            voiceChannelActivitiesEnabled: !1,
            guildActivitiesEnabled: !1,
        },
        1: {
            voiceChannelActivitiesEnabled: !0,
            guildActivitiesEnabled: !1,
        },
        2: {
            voiceChannelActivitiesEnabled: !1,
            guildActivitiesEnabled: !0,
        },
        3: {
            voiceChannelActivitiesEnabled: !0,
            guildActivitiesEnabled: !0,
        },
    },
});
function o(e) {
    let { location: t } = e,
        n = (0, i.cZ)({ location: t }),
        r = a.useConfig({ location: t }).voiceChannelActivitiesEnabled;
    return n && r;
}
function s(e) {
    let { location: t } = e,
        n = (0, i.cZ)({ location: t }),
        r = a.useConfig({ location: t }).guildActivitiesEnabled;
    return n && r;
}
