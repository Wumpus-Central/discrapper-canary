n.d(t, { A: () => d }), n(896048);
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
let o = new Map();
function l(e) {
    let { channelId: t, enabled: n } = e;
    o.set(t, n);
}
function c(e) {
    let { channelId: t } = e;
    o.delete(t);
}
class u extends (r = i.Ay.Store) {
    getAlsoSendToChannel(e) {
        return !!o.has(e) && o.get(e);
    }
}
s(u, "displayName", "ThreadsAlsoSendToChannelStore");
let d = new u(a.h, {
    SET_THREADS_ALSO_SEND_TO_CHANNEL: l,
    CREATE_PENDING_SCHEDULED_MESSAGE: c,
});
