"use strict";
n.d(t, { m: () => s, w: () => o });
var r = n(945810),
    i = n(916023);
let a = (0, r.mj)({
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
function s(e) {
    let { location: t } = e,
        n = (0, i.kt)({ location: t }),
        r = a.useConfig({ location: t }).voiceChannelActivitiesEnabled;
    return n && r;
}
function o(e) {
    let { location: t } = e,
        n = (0, i.kt)({ location: t }),
        r = a.useConfig({ location: t }).guildActivitiesEnabled;
    return n && r;
}
