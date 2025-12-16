n.d(t, { Z: () => d }), n(388685);
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
let s = new Map();
function l(e) {
    let { channelId: t, enabled: n } = e;
    s.set(t, n);
}
function c(e) {
    let { channelId: t } = e;
    s.delete(t);
}
class u extends (r = i.ZP.Store) {
    getAlsoSendToChannel(e) {
        return !!s.has(e) && s.get(e);
    }
}
o(u, "displayName", "ThreadsAlsoSendToChannelStore");
let d = new u(a.Z, {
    SET_THREADS_ALSO_SEND_TO_CHANNEL: l,
    CREATE_PENDING_SCHEDULED_MESSAGE: c,
});
