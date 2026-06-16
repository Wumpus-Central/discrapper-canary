"use strict";
n.d(t, { m: () => r, w: () => s });
let i = (0, n(945810).mj)({
    name: "2025-12-social-layer-storefront-activity-card-entrypoints-user-experiment",
    kind: "user",
    defaultConfig: { voiceChannelActivitiesEnabled: !1, guildActivitiesEnabled: !1 },
    variations: {
        0: { voiceChannelActivitiesEnabled: !1, guildActivitiesEnabled: !1 },
        1: { voiceChannelActivitiesEnabled: !0, guildActivitiesEnabled: !1 },
        2: { voiceChannelActivitiesEnabled: !1, guildActivitiesEnabled: !0 },
        3: { voiceChannelActivitiesEnabled: !0, guildActivitiesEnabled: !0 },
    },
});
function r(e) {
    let { location: t } = e;
    return i.useConfig({ location: t }).voiceChannelActivitiesEnabled;
}
function s(e) {
    let { location: t } = e;
    return i.useConfig({ location: t }).guildActivitiesEnabled;
}
