let s;
t.d(e, { A: () => d });
var a = t(17928),
    n = t(228366);
let l = { lastGuildDismissedTime: {} };
class c extends a.Ay.DeviceSettingsStore {
    static displayName = "ApplicationSubscriptionChannelNoticeStore";
    static persistKey = "ApplicationSubscriptionChannelNoticeStore";
    initialize() {
        let i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l;
        s = i;
    }
    getUserAgnosticState() {
        return s;
    }
    getLastGuildDismissedTime(i) {
        return s.lastGuildDismissedTime[i];
    }
}
let d = new c(n.h, {
    APPLICATION_SUBSCRIPTIONS_CHANNEL_NOTICE_DISMISSED: function (i) {
        let { guildId: e } = i;
        s.lastGuildDismissedTime[e] = Date.now();
    },
});
