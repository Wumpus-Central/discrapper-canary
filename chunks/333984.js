var i = r(47120);
var a = r(592125),
    o = r(412788);
function s(e, n, r) {
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
let l = new Set(),
    u = new Set(),
    c = !1;
function d(e) {
    return e.isSpam;
}
function f(e) {
    let n = !1;
    return d(e) && !l.has(e.id) && (l.add(e.id), (n = !0)), !d(e) && l.has(e.id) && (l.delete(e.id), (n = !0)), !d(e) && u.has(e.id) && (u.delete(e.id), (n = !0)), n;
}
function p() {
    l.clear(),
        u.clear(),
        Object.values(a.Z.getMutablePrivateChannels()).forEach((e) => {
            f(e);
        }),
        (c = !0);
}
function h(e) {
    let { channelId: n } = e;
    u.add(n);
}
function _(e) {
    let { channel: n } = e;
    return f(n);
}
function m(e) {
    let { channels: n } = e;
    for (let e of n) f(e);
}
function g(e) {
    let { channel: n } = e,
        r = !1;
    return l.has(n.id) && (l.delete(n.id), (r = !0)), r;
}
class E extends o.Z {
    initialize() {
        this.waitFor(a.Z);
    }
    loadCache() {
        let e = this.readSnapshot(E.LATEST_SNAPSHOT_VERSION);
        null != e && (l = new Set(e));
    }
    takeSnapshot() {
        return {
            version: E.LATEST_SNAPSHOT_VERSION,
            data: Array.from(l)
        };
    }
    getSpamChannelIds() {
        return l;
    }
    getSpamChannelsCount() {
        return l.size;
    }
    isSpam(e) {
        return l.has(e);
    }
    isAcceptedOptimistic(e) {
        return u.has(e);
    }
    isReady() {
        return c;
    }
    constructor() {
        super({
            CONNECTION_OPEN: p,
            CONNECTION_OPEN_SUPPLEMENTAL: p,
            CACHE_LOADED_LAZY: () => this.loadCache(),
            CHANNEL_CREATE: _,
            CHANNEL_UPDATES: m,
            CHANNEL_DELETE: g,
            MESSAGE_REQUEST_ACCEPT_OPTIMISTIC: h
        });
    }
}
s(E, 'displayName', 'SpamMessageRequestStore'), s(E, 'LATEST_SNAPSHOT_VERSION', 1), (n.Z = new E());
