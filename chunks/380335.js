n.d(t, {
    A: () => A,
}),
    n(896048);
var r = n(518977),
    i = n(734057),
    a = n(536802);

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
let o = new Set(),
    l = new Set(),
    c = !1,
    u = null;

function d(e) {
    return e.isMessageRequest && !e.isSpam;
}

function f(e) {
    let t = !1;
    return (
        d(e) && !o.has(e.id) && (o.add(e.id), (t = !0)),
        !d(e) && o.has(e.id) && (o.delete(e.id), (t = !0)),
        !d(e) && l.has(e.id) && (l.delete(e.id), (t = !0)),
        t
    );
}

function p(e) {
    var t;
    null != e && (u = null != (t = (0, r.XF)(e)) ? t : (0, r.rE)());
}

function _(e) {
    "CONNECTION_OPEN" === e.type && p(e.countryCode),
        o.clear(),
        l.clear(),
        Object.values(i.A.getMutablePrivateChannels()).forEach((e) => {
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
    return !!o.has(t.id) && (o.delete(t.id), !0);
}

function b(e) {
    let { messageRequestChannelIds: t } = e;
    t.forEach((e) => o.add(e));
}

function y(e) {
    let { countryCode: t } = e;
    p(t);
}
class O extends a.A {
    initialize() {
        this.waitFor(i.A);
    }
    loadCache() {
        let e = this.readSnapshot(O.LATEST_SNAPSHOT_VERSION);
        null != e && (o = new Set(e));
    }
    takeSnapshot() {
        return {
            version: O.LATEST_SNAPSHOT_VERSION,
            data: Array.from(o),
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
        return u;
    }
    isReady() {
        return c;
    }
    constructor() {
        super({
            CONNECTION_OPEN: _,
            CONNECTION_OPEN_SUPPLEMENTAL: _,
            CACHE_LOADED_LAZY: () => this.loadCache(),
            OVERLAY_INITIALIZE: b,
            CHANNEL_CREATE: m,
            CHANNEL_UPDATES: g,
            CHANNEL_DELETE: E,
            SET_LOCATION_METADATA: y,
            MESSAGE_REQUEST_ACCEPT_OPTIMISTIC: h,
        });
    }
}
s(O, "displayName", "MessageRequestStore"), s(O, "LATEST_SNAPSHOT_VERSION", 1);
let A = new O();
