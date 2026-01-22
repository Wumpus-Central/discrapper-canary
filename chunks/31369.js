n.d(t, { A: () => f });
var r,
    i = n(311907),
    a = n(73153);
function s(e, t, n) {
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
let o = n(927813).A.Millis.HOUR,
    l = { lastReportedAtMs: null },
    c = l;
function u(e) {
    let { timestampMs: t } = e;
    return (c.lastReportedAtMs = t), !0;
}
class d extends (r = i.Ay.PersistedStore) {
    initialize() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l;
        c = null != e ? e : l;
    }
    isCooldownElapsed() {
        return null == c.lastReportedAtMs || Date.now() - c.lastReportedAtMs >= o;
    }
    getState() {
        return c;
    }
}
s(d, "displayName", "FriendOnlineTimerStore"), s(d, "persistKey", "FriendOnlineTimerStore");
let f = new d(a.h, { FRIEND_ONLINE_TIMER_REPORTED: u });
