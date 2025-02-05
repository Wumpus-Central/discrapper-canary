n.d(i, { ZP: () => d });
var t,
    r,
    l,
    a = n(442837),
    s = n(570140);
let o = {},
    u = !1;
class c extends (l = a.ZP.Store) {
    isLoading() {
        return u;
    }
    passesChecklist(e) {
        var i;
        return !u && (null === (i = o[e]) || void 0 === i ? void 0 : i.sufficient);
    }
    isPendingSuccess(e) {
        let i = o[e];
        return null != i && !u && i.healthScorePending && i.safeEnvironment && 0 === Object.keys(i.nsfwProperties).length && i.size && i.protected;
    }
    getDiscoveryChecklist(e) {
        return o[e];
    }
}
(r = 'DiscoverGuildChecklistStore'),
    (t = 'displayName') in c
        ? Object.defineProperty(c, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (c[t] = r);
let d = new c(s.Z, {
    DISCOVER_CHECKLIST_FETCH_START: function (e) {
        u = !0;
    },
    DISCOVER_CHECKLIST_FETCH_FAILURE: function (e) {
        u = !1;
    },
    DISCOVER_CHECKLIST_FETCH_SUCCESS: function (e) {
        var i;
        let { checklist: n, guildId: t } = e;
        (u = !1),
            (o[t] = {
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
                minimumGuildAge: null !== (i = n.minimum_age) && void 0 !== i ? i : 0,
                age: n.age
            });
    }
});
