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
    h = {},
    g = null;
function x(e) {
    let { guildId: t, stats: n } = e;
    g = null;
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
function p(e) {
    let { error: t } = e;
    g = t.code;
}
class f extends (a = c.ZP.Store) {
    getOverviewAnalytics(e) {
        return m[e];
    }
    getMemberInsights(e) {
        var t;
        return null !== (t = h[e]) && void 0 !== t ? t : {};
    }
    shouldFetchMemberInsights(e) {
        var t;
        let n = null === (t = h[e]) || void 0 === t ? void 0 : t.fetchedAt;
        return null == n || Date.now() - n > 43200000;
    }
    getError() {
        return g;
    }
}
(l = 'GuildSettingsAnalyticsStore'),
    (r = 'displayName') in (i = f)
        ? Object.defineProperty(i, r, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[r] = l),
    (t.Z = new f(d.Z, {
        GUILD_ANALYTICS_ENGAGEMENT_OVERVIEW_FETCH_SUCCESS: x,
        GUILD_ANALYTICS_GROWTH_ACTIVATION_OVERVIEW_FETCH_SUCCESS: x,
        GUILD_ANALYTICS_GROWTH_ACTIVATION_RETENTION_FETCH_SUCCESS: x,
        GUILD_ANALYTICS_ENGAGEMENT_OVERVIEW_FETCH_FAILURE: p,
        GUILD_ANALYTICS_GROWTH_ACTIVATION_OVERVIEW_FETCH_FAILURE: p,
        GUILD_ANALYTICS_GROWTH_ACTIVATION_RETENTION_FETCH_FAILURE: p,
        GUILD_ANALYTICS_MEMBER_INSIGHTS_FETCH_SUCCESS: function (e) {
            let { guildId: t, ...n } = e;
            h[t] = {
                ...n,
                fetchedAt: Date.now()
            };
        }
    }));
