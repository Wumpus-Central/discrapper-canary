var i,
    r,
    l,
    a,
    s = n(877921),
    o = n.n(s),
    c = n(442837),
    d = n(570140);
let u = ['pct_retained', 'new_members', 'visitors', 'communicators'],
    m = {},
    h = null;
function g(e) {
    let { guildId: t, stats: n } = e;
    h = null;
    let i = {},
        r = {},
        l = n[0],
        a = n[1];
    null != l &&
        u.forEach((e) => {
            if (null != l[e]) {
                let t = o()(e);
                null != a && 0 !== a[e] && (i[''.concat(t, 'Change')] = ((l[e] - a[e]) * 100) / a[e]), (r[t] = l[e]);
            }
        }),
        (m[t] = {
            ...r,
            ...i,
            ...m[t]
        });
}
function x(e) {
    let { error: t } = e;
    h = t.code;
}
class p extends (a = c.ZP.Store) {
    getOverviewAnalytics(e) {
        return m[e];
    }
    getError() {
        return h;
    }
}
(l = 'GuildSettingsAnalyticsStore'),
    (r = 'displayName') in (i = p)
        ? Object.defineProperty(i, r, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[r] = l),
    (t.Z = new p(d.Z, {
        GUILD_ANALYTICS_ENGAGEMENT_OVERVIEW_FETCH_SUCCESS: g,
        GUILD_ANALYTICS_GROWTH_ACTIVATION_OVERVIEW_FETCH_SUCCESS: g,
        GUILD_ANALYTICS_GROWTH_ACTIVATION_RETENTION_FETCH_SUCCESS: g,
        GUILD_ANALYTICS_ENGAGEMENT_OVERVIEW_FETCH_FAILURE: x,
        GUILD_ANALYTICS_GROWTH_ACTIVATION_OVERVIEW_FETCH_FAILURE: x,
        GUILD_ANALYTICS_GROWTH_ACTIVATION_RETENTION_FETCH_FAILURE: x
    }));
