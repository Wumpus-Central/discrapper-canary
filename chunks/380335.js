n.d(t, { A: () => f });
var i = n(734057),
    r = n(536802);
let a = new Set(),
    s = new Set(),
    l = !1;
function o(e) {
    return e.isMessageRequest && !e.isSpam;
}
function d(e) {
    let t = !1;
    return (
        o(e) && !a.has(e.id) && (a.add(e.id), (t = !0)),
        !o(e) && a.has(e.id) && (a.delete(e.id), (t = !0)),
        !o(e) && s.has(e.id) && (s.delete(e.id), (t = !0)),
        t
    );
}
function c(e) {
    a.clear(),
        s.clear(),
        Object.values(i.A.getMutablePrivateChannels()).forEach((e) => {
            d(e);
        }),
        (l = !0);
}
function u(e) {
    let { channelId: t } = e;
    s.add(t);
}
function _(e) {
    let { channel: t } = e;
    return d(t);
}
function E(e) {
    let { channels: t } = e;
    for (let e of t) d(e);
}
function A(e) {
    let { channel: t } = e;
    return !!a.has(t.id) && (a.delete(t.id), !0);
}
function h(e) {
    let { messageRequestChannelIds: t } = e;
    t.forEach((e) => a.add(e));
}
class I extends r.A {
    static displayName = "MessageRequestStore";
    static LATEST_SNAPSHOT_VERSION = 1;
    constructor() {
        super({
            CONNECTION_OPEN: c,
            CONNECTION_OPEN_SUPPLEMENTAL: c,
            CACHE_LOADED_LAZY: () => this.loadCache(),
            OVERLAY_INITIALIZE: h,
            CHANNEL_CREATE: _,
            CHANNEL_UPDATES: E,
            CHANNEL_DELETE: A,
            MESSAGE_REQUEST_ACCEPT_OPTIMISTIC: u,
        });
    }
    initialize() {
        this.waitFor(i.A);
    }
    loadCache() {
        let e = this.readSnapshot(I.LATEST_SNAPSHOT_VERSION);
        null != e && (a = new Set(e));
    }
    takeSnapshot() {
        return { version: I.LATEST_SNAPSHOT_VERSION, data: Array.from(a) };
    }
    getMessageRequestChannelIds() {
        return a;
    }
    getMessageRequestsCount() {
        return a.size;
    }
    isMessageRequest(e) {
        return a.has(e);
    }
    isAcceptedOptimistic(e) {
        return s.has(e);
    }
    isReady() {
        return l;
    }
}
let f = new I();
