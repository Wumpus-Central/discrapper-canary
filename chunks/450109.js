n.d(t, { Z: () => p }), n(653041), n(47120);
var r,
    i = n(442837),
    o = n(570140),
    a = n(65154);
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
let l = 30,
    c = [],
    u = [],
    d = {
        [a.Yn.DEFAULT]: [],
        [a.Yn.STREAM]: []
    };
function f(e) {
    let { connectionStats: t } = e;
    for (let e of ((u = c), (c = t), t)) {
        let t = e.connection.context;
        d[t].push(e.stats), d[t].length > l && d[t].shift();
    }
}
class _ extends (r = i.ZP.Store) {
    getConnectionStats() {
        return c;
    }
    getLastConnectionStats() {
        return u;
    }
    getStatsHistory(e) {
        return d[e];
    }
    resetStatsHistory(e) {
        d[e] = [];
    }
}
s(_, 'displayName', 'MediaEngineStatsStore');
let p = new _(o.Z, { MEDIA_ENGINE_CONNECTION_STATS: f });
