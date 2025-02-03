n.d(t, { Z: () => b }), n(47120);
var i = n(133080),
    r = n(592125),
    a = n(412788);
function s(e, t, n) {
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
let o = new Set(),
    l = new Set(),
    u = !1,
    c = null;
function d(e) {
    return e.isMessageRequest && !e.isSpam;
}
function f(e) {
    let t = !1;
    return d(e) && !o.has(e.id) && (o.add(e.id), (t = !0)), !d(e) && o.has(e.id) && (o.delete(e.id), (t = !0)), !d(e) && l.has(e.id) && (l.delete(e.id), (t = !0)), t;
}
function _(e) {
    var t;
    null != e && (c = null !== (t = (0, i.Zz)(e)) && void 0 !== t ? t : (0, i.K4)());
}
function p(e) {
    'CONNECTION_OPEN' === e.type && _(e.countryCode),
        o.clear(),
        l.clear(),
        Object.values(r.Z.getMutablePrivateChannels()).forEach((e) => {
            f(e);
        }),
        (u = !0);
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
    return !!o.has(t.id) && (o.delete(t.id), !0);
}
function v(e) {
    let { messageRequestChannelIds: t } = e;
    t.forEach((e) => o.add(e));
}
function y(e) {
    let { countryCode: t } = e;
    _(t);
}
class I extends a.Z {
    initialize() {
        this.waitFor(r.Z);
    }
    loadCache() {
        let e = this.readSnapshot(I.LATEST_SNAPSHOT_VERSION);
        null != e && (o = new Set(e));
    }
    takeSnapshot() {
        return {
            version: I.LATEST_SNAPSHOT_VERSION,
            data: Array.from(o)
        };
    }
    getMessageRequestChannelIds() {
        return o;
    }
    getMessageRequestsCount() {
        return o.size;
    }
    isMessageRequest(e) {
        return o.has(e);
    }
    isAcceptedOptimistic(e) {
        return l.has(e);
    }
    getUserCountryCode() {
        return c;
    }
    isReady() {
        return u;
    }
    constructor() {
        super({
            CONNECTION_OPEN: p,
            CONNECTION_OPEN_SUPPLEMENTAL: p,
            CACHE_LOADED_LAZY: () => this.loadCache(),
            OVERLAY_INITIALIZE: v,
            CHANNEL_CREATE: m,
            CHANNEL_UPDATES: g,
            CHANNEL_DELETE: E,
            SET_LOCATION_METADATA: y,
            MESSAGE_REQUEST_ACCEPT_OPTIMISTIC: h
        });
    }
}
s(I, 'displayName', 'MessageRequestStore'), s(I, 'LATEST_SNAPSHOT_VERSION', 1);
let b = new I();
