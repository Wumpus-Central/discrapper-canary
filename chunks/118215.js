n.d(t, { ZP: () => d });
var i,
    r,
    l,
    o = n(442837),
    s = n(570140);
let a = {},
    u = !1;
class c extends (l = o.ZP.Store) {
    isLoading() {
        return u;
    }
    passesChecklist(e) {
        var t;
        return !u && (null == (t = a[e]) ? void 0 : t.sufficient);
    }
    isPendingSuccess(e) {
        let t = a[e];
        return null != t && !u && t.healthScorePending && t.safeEnvironment && 0 === Object.keys(t.nsfwProperties).length && t.size && t.protected;
    }
    getDiscoveryChecklist(e) {
        return a[e];
    }
}
(r = 'DiscoverGuildChecklistStore'),
    (i = 'displayName') in c
        ? Object.defineProperty(c, i, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (c[i] = r);
let d = new c(s.Z, {
    DISCOVER_CHECKLIST_FETCH_START: function (e) {
        u = !0;
    },
    DISCOVER_CHECKLIST_FETCH_FAILURE: function (e) {
        u = !1;
    },
    DISCOVER_CHECKLIST_FETCH_SUCCESS: function (e) {
        var t;
        let { checklist: n, guildId: i } = e;
        (u = !1),
            (a[i] = {
                guildId: n.guild_id,
                safeEnvironment: n.safe_environment,
                healthy: n.healthy,
                healthScorePending: n.health_score_pending,
                nsfwProperties: n.nsfw_properties,
                size: n.size,
                protected: n.protected,
                sufficient: n.sufficient,
                sufficientWithoutGracePeriod: n.sufficient_without_grace_period,
                gracePeriodEndDate: null != n.grace_period_end_date ? new Date(n.grace_period_end_date) : null,
                retentionHealthy: n.retention_healthy,
                engagementHealthy: n.engagement_healthy,
                minimumGuildSize: null != n.minimum_size ? n.minimum_size : 1000,
                healthScore: n.health_score,
                minimumGuildAge: null != (t = n.minimum_age) ? t : 0,
                age: n.age
            });
    }
});
