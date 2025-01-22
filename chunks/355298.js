var i = r(47120);
var a = r(133080),
    o = r(592125),
    s = r(412788);
function l(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let u = new Set(),
    c = new Set(),
    d = !1,
    f = null;
function p(e) {
    return e.isMessageRequest && !e.isSpam;
}
function h(e) {
    let n = !1;
    return p(e) && !u.has(e.id) && (u.add(e.id), (n = !0)), !p(e) && u.has(e.id) && (u.delete(e.id), (n = !0)), !p(e) && c.has(e.id) && (c.delete(e.id), (n = !0)), n;
}
function _(e) {
    var n;
    if (null != e) f = null !== (n = (0, a.Zz)(e)) && void 0 !== n ? n : (0, a.K4)();
}
function m(e) {
    'CONNECTION_OPEN' === e.type && _(e.countryCode),
        u.clear(),
        c.clear(),
        Object.values(o.Z.getMutablePrivateChannels()).forEach((e) => {
            h(e);
        }),
        (d = !0);
}
function g(e) {
    let { channelId: n } = e;
    c.add(n);
}
function E(e) {
    let { channel: n } = e;
    return h(n);
}
function v(e) {
    let { channels: n } = e;
    for (let e of n) h(e);
}
function y(e) {
    let { channel: n } = e;
    return !!u.has(n.id) && (u.delete(n.id), !0);
}
function b(e) {
    let { messageRequestChannelIds: n } = e;
    n.forEach((e) => u.add(e));
}
function I(e) {
    let { countryCode: n } = e;
    _(n);
}
class T extends s.Z {
    initialize() {
        this.waitFor(o.Z);
    }
    loadCache() {
        let e = this.readSnapshot(T.LATEST_SNAPSHOT_VERSION);
        null != e && (u = new Set(e));
    }
    takeSnapshot() {
        return {
            version: T.LATEST_SNAPSHOT_VERSION,
            data: Array.from(u)
        };
    }
    getMessageRequestChannelIds() {
        return u;
    }
    getMessageRequestsCount() {
        return u.size;
    }
    isMessageRequest(e) {
        return u.has(e);
    }
    isAcceptedOptimistic(e) {
        return c.has(e);
    }
    getUserCountryCode() {
        return f;
    }
    isReady() {
        return d;
    }
    constructor() {
        super({
            CONNECTION_OPEN: m,
            CONNECTION_OPEN_SUPPLEMENTAL: m,
            CACHE_LOADED_LAZY: () => this.loadCache(),
            OVERLAY_INITIALIZE: b,
            CHANNEL_CREATE: E,
            CHANNEL_UPDATES: v,
            CHANNEL_DELETE: y,
            SET_LOCATION_METADATA: I,
            MESSAGE_REQUEST_ACCEPT_OPTIMISTIC: g
        });
    }
}
l(T, 'displayName', 'MessageRequestStore'), l(T, 'LATEST_SNAPSHOT_VERSION', 1), (n.Z = new T());
