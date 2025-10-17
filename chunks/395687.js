n.d(t, { Z: () => f });
var r,
    i = n(442837),
    a = n(570140);
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
let s = n(70956).Z.Millis.HOUR,
    l = { lastReportedAtMs: null },
    c = l;
function u(e) {
    let { timestampMs: t } = e;
    return (c.lastReportedAtMs = t), !0;
}
class d extends (r = i.ZP.PersistedStore) {
    initialize() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l;
        c = null != e ? e : l;
    }
    isCooldownElapsed() {
        return null == c.lastReportedAtMs || Date.now() - c.lastReportedAtMs >= s;
    }
    getState() {
        return c;
    }
}
o(d, "displayName", "FriendOnlineTimerStore"), o(d, "persistKey", "FriendOnlineTimerStore");
let f = new d(a.Z, { FRIEND_ONLINE_TIMER_REPORTED: u });
