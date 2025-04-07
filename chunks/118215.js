i.d(t, { ZP: () => d });
var n,
    l,
    r,
    s = i(442837),
    a = i(570140);
let o = {},
    u = !1;
class c extends (r = s.ZP.Store) {
    isLoading() {
        return u;
    }
    passesChecklist(e) {
        var t;
        return !u && (null == (t = o[e]) ? void 0 : t.sufficient);
    }
    isPendingSuccess(e) {
        let t = o[e];
        return null != t && !u && t.healthScorePending && t.safeEnvironment && 0 === Object.keys(t.nsfwProperties).length && t.size && t.protected;
    }
    getDiscoveryChecklist(e) {
        return o[e];
    }
}
(l = 'DiscoverGuildChecklistStore'),
    (n = 'displayName') in c
        ? Object.defineProperty(c, n, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (c[n] = l);
let d = new c(a.Z, {
    DISCOVER_CHECKLIST_FETCH_START: function (e) {
        u = !0;
    },
    DISCOVER_CHECKLIST_FETCH_FAILURE: function (e) {
        u = !1;
    },
    DISCOVER_CHECKLIST_FETCH_SUCCESS: function (e) {
        var t;
        let { checklist: i, guildId: n } = e;
        (u = !1),
            (o[n] = {
                guildId: i.guild_id,
                safeEnvironment: i.safe_environment,
                healthy: i.healthy,
                healthScorePending: i.health_score_pending,
                nsfwProperties: i.nsfw_properties,
                size: i.size,
                protected: i.protected,
                sufficient: i.sufficient,
                sufficientWithoutGracePeriod: i.sufficient_without_grace_period,
                gracePeriodEndDate: null != i.grace_period_end_date ? new Date(i.grace_period_end_date) : null,
                retentionHealthy: i.retention_healthy,
                engagementHealthy: i.engagement_healthy,
                minimumGuildSize: null != i.minimum_size ? i.minimum_size : 1000,
                healthScore: i.health_score,
                minimumGuildAge: null != (t = i.minimum_age) ? t : 0,
                age: i.age
            });
    }
});
