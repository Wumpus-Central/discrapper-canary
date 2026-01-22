let r;
n.d(t, { A: () => d });
var i,
    a = n(311907),
    s = n(73153);
function o(e, t, n) {
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
let l = { lastGuildDismissedTime: {} };
function c(e) {
    let { guildId: t } = e;
    r.lastGuildDismissedTime[t] = Date.now();
}
class u extends (i = a.Ay.DeviceSettingsStore) {
    initialize() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l;
        r = e;
    }
    getUserAgnosticState() {
        return r;
    }
    getLastGuildDismissedTime(e) {
        return r.lastGuildDismissedTime[e];
    }
}
o(u, "displayName", "ApplicationSubscriptionChannelNoticeStore"),
    o(u, "persistKey", "ApplicationSubscriptionChannelNoticeStore");
let d = new u(s.h, { APPLICATION_SUBSCRIPTIONS_CHANNEL_NOTICE_DISMISSED: c });
