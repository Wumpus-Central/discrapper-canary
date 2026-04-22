"use strict";
n.d(t, { A: () => h });
var r = n(734057),
    i = n(536802);
let s = new Set(),
    a = new Set(),
    o = !1;
function l(e) {
    let t = !1;
    return (
        e.isSpam && !s.has(e.id) && (s.add(e.id), (t = !0)),
        !e.isSpam && s.has(e.id) && (s.delete(e.id), (t = !0)),
        !e.isSpam && a.has(e.id) && (a.delete(e.id), (t = !0)),
        t
    );
}
function u() {
    s.clear(),
        a.clear(),
        Object.values(r.A.getMutablePrivateChannels()).forEach((e) => {
            l(e);
        }),
        (o = !0);
}
function d(e) {
    let { channelId: t } = e;
    a.add(t);
}
function c(e) {
    let { channel: t } = e;
    return l(t);
}
function _(e) {
    let { channels: t } = e;
    for (let e of t) l(e);
}
function f(e) {
    let { channel: t } = e,
        n = !1;
    return s.has(t.id) && (s.delete(t.id), (n = !0)), n;
}
class E extends i.A {
    static displayName = "SpamMessageRequestStore";
    static LATEST_SNAPSHOT_VERSION = 1;
    constructor() {
        super({
            CONNECTION_OPEN: u,
            CONNECTION_OPEN_SUPPLEMENTAL: u,
            CACHE_LOADED_LAZY: () => this.loadCache(),
            CHANNEL_CREATE: c,
            CHANNEL_UPDATES: _,
            CHANNEL_DELETE: f,
            MESSAGE_REQUEST_ACCEPT_OPTIMISTIC: d,
        });
    }
    initialize() {
        this.waitFor(r.A);
    }
    loadCache() {
        let e = this.readSnapshot(E.LATEST_SNAPSHOT_VERSION);
        null != e && (s = new Set(e));
    }
    takeSnapshot() {
        return { version: E.LATEST_SNAPSHOT_VERSION, data: Array.from(s) };
    }
    getSpamChannelIds() {
        return s;
    }
    getSpamChannelsCount() {
        return s.size;
    }
    isSpam(e) {
        return s.has(e);
    }
    isAcceptedOptimistic(e) {
        return a.has(e);
    }
    isReady() {
        return o;
    }
}
let h = new E();
