n.d(t, { Z: () => O }), n(47120);
var r = n(133080),
    i = n(592125),
    o = n(412788);
function a(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let s = new Set(),
    l = new Set(),
    c = !1,
    u = null;
function d(e) {
    return e.isMessageRequest && !e.isSpam;
}
function f(e) {
    let t = !1;
    return d(e) && !s.has(e.id) && (s.add(e.id), (t = !0)), !d(e) && s.has(e.id) && (s.delete(e.id), (t = !0)), !d(e) && l.has(e.id) && (l.delete(e.id), (t = !0)), t;
}
function _(e) {
    var t;
    null != e && (u = null != (t = (0, r.Zz)(e)) ? t : (0, r.K4)());
}
function p(e) {
    'CONNECTION_OPEN' === e.type && _(e.countryCode),
        s.clear(),
        l.clear(),
        Object.values(i.Z.getMutablePrivateChannels()).forEach((e) => {
            f(e);
        }),
        (c = !0);
}
function h(e) {
    let { channelId: t } = e;
    l.add(t);
}
function m(e) {
    let { channel: t } = e;
    return f(t);
}
function g(e) {
    let { channels: t } = e;
    for (let e of t) f(e);
}
function E(e) {
    let { channel: t } = e;
    return !!s.has(t.id) && (s.delete(t.id), !0);
}
function b(e) {
    let { messageRequestChannelIds: t } = e;
    t.forEach((e) => s.add(e));
}
function y(e) {
    let { countryCode: t } = e;
    _(t);
}
class v extends o.Z {
    initialize() {
        this.waitFor(i.Z);
    }
    loadCache() {
        let e = this.readSnapshot(v.LATEST_SNAPSHOT_VERSION);
        null != e && (s = new Set(e));
    }
    takeSnapshot() {
        return {
            version: v.LATEST_SNAPSHOT_VERSION,
            data: Array.from(s)
        };
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
        return l.has(e);
    }
    getUserCountryCode() {
        return u;
    }
    isReady() {
        return c;
    }
    constructor() {
        super({
            CONNECTION_OPEN: p,
            CONNECTION_OPEN_SUPPLEMENTAL: p,
            CACHE_LOADED_LAZY: () => this.loadCache(),
            OVERLAY_INITIALIZE: b,
            CHANNEL_CREATE: m,
            CHANNEL_UPDATES: g,
            CHANNEL_DELETE: E,
            SET_LOCATION_METADATA: y,
            MESSAGE_REQUEST_ACCEPT_OPTIMISTIC: h
        });
    }
}
a(v, 'displayName', 'MessageRequestStore'), a(v, 'LATEST_SNAPSHOT_VERSION', 1);
let O = new v();
