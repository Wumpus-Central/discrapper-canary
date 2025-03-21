n.d(t, { Z: () => d });
var r,
    i = n(442837),
    o = n(570140);
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
let s = [],
    l = [];
function c(e) {
    let { connectionStats: t } = e;
    (l = s), (s = t);
}
class u extends (r = i.ZP.Store) {
    getConnectionStats() {
        return s;
    }
    getLastConnectionStats() {
        return l;
    }
}
a(u, 'displayName', 'MediaEngineStatsStore');
let d = new u(o.Z, { MEDIA_ENGINE_CONNECTION_STATS: c });
