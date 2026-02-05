"use strict";
n.d(t, { A: () => T });
var r = n(518977),
    i = n(734057),
    a = n(536802);
let s = new Set(),
    o = new Set(),
    l = !1,
    u = null;
function c(e) {
    return e.isMessageRequest && !e.isSpam;
}
function d(e) {
    let t = !1;
    return (
        c(e) && !s.has(e.id) && (s.add(e.id), (t = !0)),
        !c(e) && s.has(e.id) && (s.delete(e.id), (t = !0)),
        !c(e) && o.has(e.id) && (o.delete(e.id), (t = !0)),
        t
    );
}
function _(e) {
    null != e && (u = (0, r.XF)(e) ?? (0, r.rE)());
}
function f(e) {
    "CONNECTION_OPEN" === e.type && _(e.countryCode),
        s.clear(),
        o.clear(),
        Object.values(i.A.getMutablePrivateChannels()).forEach((e) => {
            d(e);
        }),
        (l = !0);
}
function p(e) {
    let { channelId: t } = e;
    o.add(t);
}
function h(e) {
    let { channel: t } = e;
    return d(t);
}
function m(e) {
    let { channels: t } = e;
    for (let e of t) d(e);
}
function g(e) {
    let { channel: t } = e;
    return !!s.has(t.id) && (s.delete(t.id), !0);
}
function E(e) {
    let { messageRequestChannelIds: t } = e;
    t.forEach((e) => s.add(e));
}
function A(e) {
    let { countryCode: t } = e;
    _(t);
}
class I extends a.A {
    static displayName = "MessageRequestStore";
    static LATEST_SNAPSHOT_VERSION = 1;
    constructor() {
        super({
            CONNECTION_OPEN: f,
            CONNECTION_OPEN_SUPPLEMENTAL: f,
            CACHE_LOADED_LAZY: () => this.loadCache(),
            OVERLAY_INITIALIZE: E,
            CHANNEL_CREATE: h,
            CHANNEL_UPDATES: m,
            CHANNEL_DELETE: g,
            SET_LOCATION_METADATA: A,
            MESSAGE_REQUEST_ACCEPT_OPTIMISTIC: p,
        });
    }
    initialize() {
        this.waitFor(i.A);
    }
    loadCache() {
        let e = this.readSnapshot(I.LATEST_SNAPSHOT_VERSION);
        null != e && (s = new Set(e));
    }
    takeSnapshot() {
        return { version: I.LATEST_SNAPSHOT_VERSION, data: Array.from(s) };
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
        return o.has(e);
    }
    getUserCountryCode() {
        return u;
    }
    isReady() {
        return l;
    }
}
let T = new I();
