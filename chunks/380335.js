"use strict";
n.d(t, { A: () => E });
var r = n(734057),
    i = n(536802);
let s = new Set(),
    a = new Set(),
    o = !1;
function l(e) {
    return e.isMessageRequest && !e.isSpam;
}
function u(e) {
    let t = !1;
    return (
        l(e) && !s.has(e.id) && (s.add(e.id), (t = !0)),
        !l(e) && s.has(e.id) && (s.delete(e.id), (t = !0)),
        !l(e) && a.has(e.id) && (a.delete(e.id), (t = !0)),
        t
    );
}
function c(e) {
    s.clear(),
        a.clear(),
        Object.values(r.A.getMutablePrivateChannels()).forEach((e) => {
            u(e);
        }),
        (o = !0);
}
function d(e) {
    let { channelId: t } = e;
    a.add(t);
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
    let { channel: t } = e;
    return !!s.has(t.id) && (s.delete(t.id), !0);
}
function h(e) {
    let { messageRequestChannelIds: t } = e;
    t.forEach((e) => s.add(e));
}
class m extends i.A {
    static displayName = "MessageRequestStore";
    static LATEST_SNAPSHOT_VERSION = 1;
    constructor() {
        super({
            CONNECTION_OPEN: c,
            CONNECTION_OPEN_SUPPLEMENTAL: c,
            CACHE_LOADED_LAZY: () => this.loadCache(),
            OVERLAY_INITIALIZE: h,
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
        let e = this.readSnapshot(m.LATEST_SNAPSHOT_VERSION);
        null != e && (s = new Set(e));
    }
    takeSnapshot() {
        return { version: m.LATEST_SNAPSHOT_VERSION, data: Array.from(s) };
    }
    getMessageRequestChannelIds() {
        return s;
    }
    getMessageRequestsCount() {
        return s.size;
    }
    isMessageRequest(e) {
        return s.has(e);
    }
    isAcceptedOptimistic(e) {
        return a.has(e);
    }
    isReady() {
        return o;
    }
}
let E = new m();
