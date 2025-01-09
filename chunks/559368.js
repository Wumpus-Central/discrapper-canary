var i,
    r,
    l,
    s,
    a = n(877921),
    o = n.n(a),
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
        s = n[1];
    null != l &&
        u.forEach((e) => {
            if (null != l[e]) {
                let t = o()(e);
                null != s && 0 !== s[e] && (i[''.concat(t, 'Change')] = ((l[e] - s[e]) * 100) / s[e]), (r[t] = l[e]);
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
class p extends (s = c.ZP.Store) {
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
