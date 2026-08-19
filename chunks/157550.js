"use strict";
n.d(t, { A: () => h });
var i = n(734057),
    r = n(536802);
let a = new Set(),
    s = new Set(),
    l = !1;
function o(e) {
    let t = !1;
    return (
        e.isSpam && !a.has(e.id) && (a.add(e.id), (t = !0)),
        !e.isSpam && a.has(e.id) && (a.delete(e.id), (t = !0)),
        !e.isSpam && s.has(e.id) && (s.delete(e.id), (t = !0)),
        t
    );
}
function d() {
    a.clear(),
        s.clear(),
        Object.values(i.A.getMutablePrivateChannels()).forEach((e) => {
            o(e);
        }),
        (l = !0);
}
function c(e) {
    let { channelId: t } = e;
    s.add(t);
}
function u(e) {
    let { channel: t } = e;
    return o(t);
}
function _(e) {
    let { channels: t } = e;
    for (let e of t) o(e);
}
function E(e) {
    let { channel: t } = e,
        n = !1;
    return a.has(t.id) && (a.delete(t.id), (n = !0)), n;
}
class A extends r.A {
    static displayName = "SpamMessageRequestStore";
    static LATEST_SNAPSHOT_VERSION = 1;
    constructor() {
        super({
            CONNECTION_OPEN: d,
            CONNECTION_OPEN_SUPPLEMENTAL: d,
            CACHE_LOADED_LAZY: () => this.loadCache(),
            CHANNEL_CREATE: u,
            CHANNEL_UPDATES: _,
            CHANNEL_DELETE: E,
            MESSAGE_REQUEST_ACCEPT_OPTIMISTIC: c,
        });
    }
    initialize() {
        this.waitFor(i.A);
    }
    loadCache() {
        let e = this.readSnapshot(A.LATEST_SNAPSHOT_VERSION);
        null != e && (a = new Set(e));
    }
    takeSnapshot() {
        return { version: A.LATEST_SNAPSHOT_VERSION, data: Array.from(a) };
    }
    getSpamChannelIds() {
        return a;
    }
    getSpamChannelsCount() {
        return a.size;
    }
    isSpam(e) {
        return a.has(e);
    }
    isAcceptedOptimistic(e) {
        return s.has(e);
    }
    isReady() {
        return l;
    }
}
let h = new A();
