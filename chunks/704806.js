r.d(n, {
    q: function () {
        return v;
    }
});
var i,
    a = r(47120);
var o = r(442837),
    s = r(570140),
    l = r(353926),
    u = r(626135),
    c = r(358085),
    d = r(998502);
function f(e, n, r) {
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
let p = { hashes: {} };
async function h() {
    if (!c.isPlatformEmbedded || !(0, c.isWindows)()) return [];
    await d.ZP.ensureModule('discord_media');
    let e = d.ZP.requireModule('discord_media');
    return (await e.getSystemAnalyticsBlob()) || [];
}
async function _() {
    try {
        let n = (await h()).filter((e) => p.hashes[e.name] !== e.hash);
        for (let { name: r, hash: i, data: a } of n) {
            var e;
            let n = {
                ...a,
                gpus: null === (e = a.gpus) || void 0 === e ? void 0 : e.map((e) => JSON.stringify(e))
            };
            u.default.track(r, n), ((p = { hashes: { ...p.hashes } }).hashes[r] = i);
        }
        n.length > 0 && E.emitChange();
    } catch (e) {}
}
function m() {
    return _(), !1;
}
class g extends (i = o.ZP.PersistedStore) {
    initialize(e) {
        (p = null != e && 'object' == typeof e.hashes ? e : { hashes: {} }), this.waitFor(l.Z);
    }
    getState() {
        return p;
    }
    async info() {
        try {
            let e = (await h()).find((e) => 'hardware_detected' === e.name);
            if (null == e) return null;
            return e.data;
        } catch (e) {}
    }
}
f(g, 'displayName', 'SystemAnalyticsStore'), f(g, 'persistKey', 'SystemAnalyticsStore');
let E = new g(s.Z, { START_SESSION: m });
function v() {
    return E.info();
}
