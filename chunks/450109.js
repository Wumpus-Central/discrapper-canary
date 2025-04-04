n.d(t, { Z: () => m }), n(653041), n(47120);
var r,
    i = n(442837),
    o = n(46973),
    a = n(570140);
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
        [o.Yn.DEFAULT]: [],
        [o.Yn.STREAM]: []
    },
    f = {
        [o.Yn.DEFAULT]: [],
        [o.Yn.STREAM]: []
    };
function _(e) {
    let { connectionStats: t } = e;
    (u = c), (c = t);
    let n = {
        [o.Yn.DEFAULT]: [],
        [o.Yn.STREAM]: []
    };
    for (let e of t) {
        let { stats: t, context: r } = e;
        n[r].push(e), f[r].push(t), f[r].length > l && f[r].shift();
    }
    d = n;
}
function p(e) {
    let { context: t } = e;
    f[t] = [];
}
class h extends (r = i.ZP.Store) {
    getConnectionStats() {
        return c;
    }
    getConnectionStatsByContext(e) {
        var t;
        return null != (t = d[e]) ? t : [];
    }
    getFirstConnectionStatsByContext(e) {
        var t;
        return null == (t = d[e]) ? void 0 : t[0];
    }
    getLastConnectionStats() {
        return u;
    }
    getStatsHistory(e) {
        return f[e];
    }
}
s(h, 'displayName', 'MediaEngineStatsStore');
let m = new h(a.Z, {
    MEDIA_ENGINE_CONNECTION_STATS: _,
    MEDIA_ENGINE_CONNECTION_STATS_HISTORY_RESET: p
});
