n.d(t, { Z: () => h });
var r,
    i = n(877921),
    l = n.n(i),
    s = n(442837),
    a = n(570140);
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
    u = {},
    d = null;
function m(e) {
    let { guildId: t, stats: n } = e;
    d = null;
    let r = {},
        i = {},
        s = n[0],
        a = n[1];
    null != s &&
        c.forEach((e) => {
            if (null != s[e]) {
                let t = l()(e);
                null != a && 0 !== a[e] && (r[''.concat(t, 'Change')] = ((s[e] - a[e]) * 100) / a[e]), (i[t] = s[e]);
            }
        }),
        (u[t] = (function (e) {
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
        })({}, i, r, u[t]));
}
function g(e) {
    let { error: t } = e;
    d = t.code;
}
class p extends (r = s.ZP.Store) {
    getOverviewAnalytics(e) {
        return u[e];
    }
    getError() {
        return d;
    }
}
o(p, 'displayName', 'GuildSettingsAnalyticsStore');
let h = new p(a.Z, {
    GUILD_ANALYTICS_ENGAGEMENT_OVERVIEW_FETCH_SUCCESS: m,
    GUILD_ANALYTICS_GROWTH_ACTIVATION_OVERVIEW_FETCH_SUCCESS: m,
    GUILD_ANALYTICS_GROWTH_ACTIVATION_RETENTION_FETCH_SUCCESS: m,
    GUILD_ANALYTICS_ENGAGEMENT_OVERVIEW_FETCH_FAILURE: g,
    GUILD_ANALYTICS_GROWTH_ACTIVATION_OVERVIEW_FETCH_FAILURE: g,
    GUILD_ANALYTICS_GROWTH_ACTIVATION_RETENTION_FETCH_FAILURE: g
});
