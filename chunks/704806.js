n.d(t, { q: () => g }), n(47120);
var i,
    r = n(442837),
    a = n(570140),
    s = n(353926),
    o = n(626135),
    l = n(358085),
    u = n(998502);
function c(e, t, n) {
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
let d = { hashes: {} };
async function f() {
    if (!l.isPlatformEmbedded || !(0, l.isWindows)()) return [];
    await u.ZP.ensureModule('discord_media');
    let e = u.ZP.requireModule('discord_media');
    return (await e.getSystemAnalyticsBlob()) || [];
}
async function _() {
    try {
        let t = (await f()).filter((e) => d.hashes[e.name] !== e.hash);
        for (let { name: n, hash: i, data: r } of t) {
            var e;
            let t = {
                ...r,
                gpus: null === (e = r.gpus) || void 0 === e ? void 0 : e.map((e) => JSON.stringify(e))
            };
            o.default.track(n, t), ((d = { hashes: { ...d.hashes } }).hashes[n] = i);
        }
        t.length > 0 && m.emitChange();
    } catch (e) {}
}
function p() {
    return _(), !1;
}
class h extends (i = r.ZP.PersistedStore) {
    initialize(e) {
        (d = null != e && 'object' == typeof e.hashes ? e : { hashes: {} }), this.waitFor(s.Z);
    }
    getState() {
        return d;
    }
    async info() {
        try {
            let e = (await f()).find((e) => 'hardware_detected' === e.name);
            if (null == e) return null;
            return e.data;
        } catch (e) {}
    }
}
c(h, 'displayName', 'SystemAnalyticsStore'), c(h, 'persistKey', 'SystemAnalyticsStore');
let m = new h(a.Z, { START_SESSION: p });
function g() {
    return m.info();
}
