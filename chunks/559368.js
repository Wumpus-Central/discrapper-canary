n.d(t, { Z: () => h });
var r,
    i = n(877921),
    s = n.n(i),
    a = n(442837),
    l = n(570140);
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
let c = ['pct_retained', 'new_members', 'visitors', 'communicators'],
    d = {},
    u = null;
function m(e) {
    let { guildId: t, stats: n } = e;
    u = null;
    let r = {},
        i = {},
        a = n[0],
        l = n[1];
    null != a &&
        c.forEach((e) => {
            if (null != a[e]) {
                let t = s()(e);
                null != l && 0 !== l[e] && (r[''.concat(t, 'Change')] = ((a[e] - l[e]) * 100) / l[e]), (i[t] = a[e]);
            }
        }),
        (d[t] = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        })
                    )),
                    r.forEach(function (t) {
                        o(e, t, n[t]);
                    });
            }
            return e;
        })({}, i, r, d[t]));
}
function g(e) {
    let { error: t } = e;
    u = t.code;
}
class p extends (r = a.ZP.Store) {
    getOverviewAnalytics(e) {
        return d[e];
    }
    getError() {
        return u;
    }
}
o(p, 'displayName', 'GuildSettingsAnalyticsStore');
let h = new p(l.Z, {
    GUILD_ANALYTICS_ENGAGEMENT_OVERVIEW_FETCH_SUCCESS: m,
    GUILD_ANALYTICS_GROWTH_ACTIVATION_OVERVIEW_FETCH_SUCCESS: m,
    GUILD_ANALYTICS_GROWTH_ACTIVATION_RETENTION_FETCH_SUCCESS: m,
    GUILD_ANALYTICS_ENGAGEMENT_OVERVIEW_FETCH_FAILURE: g,
    GUILD_ANALYTICS_GROWTH_ACTIVATION_OVERVIEW_FETCH_FAILURE: g,
    GUILD_ANALYTICS_GROWTH_ACTIVATION_RETENTION_FETCH_FAILURE: g
});
