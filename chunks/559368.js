n.d(t, { Z: () => p });
var i,
    r,
    l,
    s = n(877921),
    a = n.n(s),
    o = n(442837),
    c = n(570140);
let d = ['pct_retained', 'new_members', 'visitors', 'communicators'],
    u = {},
    m = null;
function h(e) {
    let { guildId: t, stats: n } = e;
    m = null;
    let i = {},
        r = {},
        l = n[0],
        s = n[1];
    null != l &&
        d.forEach((e) => {
            if (null != l[e]) {
                let t = a()(e);
                null != s && 0 !== s[e] && (i[''.concat(t, 'Change')] = ((l[e] - s[e]) * 100) / s[e]), (r[t] = l[e]);
            }
        }),
        (u[t] = {
            ...r,
            ...i,
            ...u[t]
        });
}
function g(e) {
    let { error: t } = e;
    m = t.code;
}
class x extends (l = o.ZP.Store) {
    getOverviewAnalytics(e) {
        return u[e];
    }
    getError() {
        return m;
    }
}
(r = 'GuildSettingsAnalyticsStore'),
    (i = 'displayName') in x
        ? Object.defineProperty(x, i, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (x[i] = r);
let p = new x(c.Z, {
    GUILD_ANALYTICS_ENGAGEMENT_OVERVIEW_FETCH_SUCCESS: h,
    GUILD_ANALYTICS_GROWTH_ACTIVATION_OVERVIEW_FETCH_SUCCESS: h,
    GUILD_ANALYTICS_GROWTH_ACTIVATION_RETENTION_FETCH_SUCCESS: h,
    GUILD_ANALYTICS_ENGAGEMENT_OVERVIEW_FETCH_FAILURE: g,
    GUILD_ANALYTICS_GROWTH_ACTIVATION_OVERVIEW_FETCH_FAILURE: g,
    GUILD_ANALYTICS_GROWTH_ACTIVATION_RETENTION_FETCH_FAILURE: g
});
