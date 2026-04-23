let n;
i.d(e, { A: () => o });
var l = i(311907),
    s = i(73153);
let a = { lastGuildDismissedTime: {} };
class r extends l.Ay.DeviceSettingsStore {
    static displayName = "ApplicationSubscriptionChannelNoticeStore";
    static persistKey = "ApplicationSubscriptionChannelNoticeStore";
    initialize() {
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a;
        n = t;
    }
    getUserAgnosticState() {
        return n;
    }
    getLastGuildDismissedTime(t) {
        return n.lastGuildDismissedTime[t];
    }
}
let o = new r(s.h, {
    APPLICATION_SUBSCRIPTIONS_CHANNEL_NOTICE_DISMISSED: function (t) {
        let { guildId: e } = t;
        n.lastGuildDismissedTime[e] = Date.now();
    },
});
