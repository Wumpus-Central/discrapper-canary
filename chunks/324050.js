let r;
n.d(t, {
    A: () => u,
});
var i,
    l = n(311907),
    o = n(73153);

function a(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let s = {
    lastGuildDismissedTime: {},
};
class c extends (i = l.Ay.DeviceSettingsStore) {
    initialize() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s;
        r = e;
    }
    getUserAgnosticState() {
        return r;
    }
    getLastGuildDismissedTime(e) {
        return r.lastGuildDismissedTime[e];
    }
}
a(c, "displayName", "ApplicationSubscriptionChannelNoticeStore"),
    a(c, "persistKey", "ApplicationSubscriptionChannelNoticeStore");
let u = new c(o.h, {
    APPLICATION_SUBSCRIPTIONS_CHANNEL_NOTICE_DISMISSED: function (e) {
        let { guildId: t } = e;
        r.lastGuildDismissedTime[t] = Date.now();
    },
});
