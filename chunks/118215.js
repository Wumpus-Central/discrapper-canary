t.d(i, { ZP: () => d });
var n,
    l,
    r,
    a = t(442837),
    s = t(570140);
let u = {},
    o = !1;
class c extends (r = a.ZP.Store) {
    isLoading() {
        return o;
    }
    passesChecklist(e) {
        var i;
        return !o && (null == (i = u[e]) ? void 0 : i.sufficient);
    }
    isPendingSuccess(e) {
        let i = u[e];
        return null != i && !o && i.healthScorePending && i.safeEnvironment && 0 === Object.keys(i.nsfwProperties).length && i.size && i.protected;
    }
    getDiscoveryChecklist(e) {
        return u[e];
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
let d = new c(s.Z, {
    DISCOVER_CHECKLIST_FETCH_START: function (e) {
        o = !0;
    },
    DISCOVER_CHECKLIST_FETCH_FAILURE: function (e) {
        o = !1;
    },
    DISCOVER_CHECKLIST_FETCH_SUCCESS: function (e) {
        var i;
        let { checklist: t, guildId: n } = e;
        (o = !1),
            (u[n] = {
                guildId: t.guild_id,
                safeEnvironment: t.safe_environment,
                healthy: t.healthy,
                healthScorePending: t.health_score_pending,
                nsfwProperties: t.nsfw_properties,
                size: t.size,
                protected: t.protected,
                sufficient: t.sufficient,
                sufficientWithoutGracePeriod: t.sufficient_without_grace_period,
                gracePeriodEndDate: null != t.grace_period_end_date ? new Date(t.grace_period_end_date) : null,
                retentionHealthy: t.retention_healthy,
                engagementHealthy: t.engagement_healthy,
                minimumGuildSize: null != t.minimum_size ? t.minimum_size : 1000,
                healthScore: t.health_score,
                minimumGuildAge: null != (i = t.minimum_age) ? i : 0,
                age: t.age
            });
    }
});
