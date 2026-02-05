"use strict";
n.d(t, { A: () => m });
var r = n(734057),
    i = n(536802);
let a = new Set(),
    s = new Set(),
    o = !1;
function l(e) {
    return e.isSpam;
}
function u(e) {
    let t = !1;
    return (
        l(e) && !a.has(e.id) && (a.add(e.id), (t = !0)),
        !l(e) && a.has(e.id) && (a.delete(e.id), (t = !0)),
        !l(e) && s.has(e.id) && (s.delete(e.id), (t = !0)),
        t
    );
}
function c() {
    a.clear(),
        s.clear(),
        Object.values(r.A.getMutablePrivateChannels()).forEach((e) => {
            u(e);
        }),
        (o = !0);
}
function d(e) {
    let { channelId: t } = e;
    s.add(t);
}
function _(e) {
    let { channel: t } = e;
    return u(t);
}
function f(e) {
    let { channels: t } = e;
    for (let e of t) u(e);
}
function p(e) {
    let { channel: t } = e,
        n = !1;
    return a.has(t.id) && (a.delete(t.id), (n = !0)), n;
}
class h extends i.A {
    static displayName = "SpamMessageRequestStore";
    static LATEST_SNAPSHOT_VERSION = 1;
    constructor() {
        super({
            CONNECTION_OPEN: c,
            CONNECTION_OPEN_SUPPLEMENTAL: c,
            CACHE_LOADED_LAZY: () => this.loadCache(),
            CHANNEL_CREATE: _,
            CHANNEL_UPDATES: f,
            CHANNEL_DELETE: p,
            MESSAGE_REQUEST_ACCEPT_OPTIMISTIC: d,
        });
    }
    initialize() {
        this.waitFor(r.A);
    }
    loadCache() {
        let e = this.readSnapshot(h.LATEST_SNAPSHOT_VERSION);
        null != e && (a = new Set(e));
    }
    takeSnapshot() {
        return { version: h.LATEST_SNAPSHOT_VERSION, data: Array.from(a) };
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
        return o;
    }
}
let m = new h();
