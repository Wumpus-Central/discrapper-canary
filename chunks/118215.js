n.d(t, { ZP: () => d });
var i,
    r,
    l,
    a = n(442837),
    s = n(570140);
let o = {},
    c = !1;
class u extends (l = a.ZP.Store) {
    isLoading() {
        return c;
    }
    passesChecklist(e) {
        var t;
        return !c && (null == (t = o[e]) ? void 0 : t.sufficient);
    }
    isPendingSuccess(e) {
        let t = o[e];
        return null != t && !c && t.healthScorePending && t.safeEnvironment && 0 === Object.keys(t.nsfwProperties).length && t.size && t.protected;
    }
    getDiscoveryChecklist(e) {
        return o[e];
    }
}
(r = 'DiscoverGuildChecklistStore'),
    (i = 'displayName') in u
        ? Object.defineProperty(u, i, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (u[i] = r);
let d = new u(s.Z, {
    DISCOVER_CHECKLIST_FETCH_START: function (e) {
        c = !0;
    },
    DISCOVER_CHECKLIST_FETCH_FAILURE: function (e) {
        c = !1;
    },
    DISCOVER_CHECKLIST_FETCH_SUCCESS: function (e) {
        var t;
        let { checklist: n, guildId: i } = e;
        (c = !1),
            (o[i] = {
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
