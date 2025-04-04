n.d(t, { Z: () => g }), n(47120);
var r = n(592125),
    i = n(412788);
function o(e, t, n) {
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
let a = new Set(),
    s = new Set(),
    l = !1;
function c(e) {
    return e.isSpam;
}
function u(e) {
    let t = !1;
    return c(e) && !a.has(e.id) && (a.add(e.id), (t = !0)), !c(e) && a.has(e.id) && (a.delete(e.id), (t = !0)), !c(e) && s.has(e.id) && (s.delete(e.id), (t = !0)), t;
}
function d() {
    a.clear(),
        s.clear(),
        Object.values(r.Z.getMutablePrivateChannels()).forEach((e) => {
            u(e);
        }),
        (l = !0);
}
function f(e) {
    let { channelId: t } = e;
    s.add(t);
}
function _(e) {
    let { channel: t } = e;
    return u(t);
}
function p(e) {
    let { channels: t } = e;
    for (let e of t) u(e);
}
function h(e) {
    let { channel: t } = e,
        n = !1;
    return a.has(t.id) && (a.delete(t.id), (n = !0)), n;
}
class m extends i.Z {
    initialize() {
        this.waitFor(r.Z);
    }
    loadCache() {
        let e = this.readSnapshot(m.LATEST_SNAPSHOT_VERSION);
        null != e && (a = new Set(e));
    }
    takeSnapshot() {
        return {
            version: m.LATEST_SNAPSHOT_VERSION,
            data: Array.from(a)
        };
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
    constructor() {
        super({
            CONNECTION_OPEN: d,
            CONNECTION_OPEN_SUPPLEMENTAL: d,
            CACHE_LOADED_LAZY: () => this.loadCache(),
            CHANNEL_CREATE: _,
            CHANNEL_UPDATES: p,
            CHANNEL_DELETE: h,
            MESSAGE_REQUEST_ACCEPT_OPTIMISTIC: f
        });
    }
}
o(m, 'displayName', 'SpamMessageRequestStore'), o(m, 'LATEST_SNAPSHOT_VERSION', 1);
let g = new m();
