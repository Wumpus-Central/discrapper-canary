l.d(i, { ZP: () => c });
var t,
    n,
    r,
    s = l(442837),
    a = l(570140);
let o = {},
    d = !1;
class u extends (r = s.ZP.Store) {
    isLoading() {
        return d;
    }
    passesChecklist(e) {
        var i;
        return !d && (null === (i = o[e]) || void 0 === i ? void 0 : i.sufficient);
    }
    isPendingSuccess(e) {
        let i = o[e];
        return null != i && !d && i.healthScorePending && i.safeEnvironment && 0 === Object.keys(i.nsfwProperties).length && i.size && i.protected;
    }
    getDiscoveryChecklist(e) {
        return o[e];
    }
}
(n = 'DiscoverGuildChecklistStore'),
    (t = 'displayName') in u
        ? Object.defineProperty(u, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (u[t] = n);
let c = new u(a.Z, {
    DISCOVER_CHECKLIST_FETCH_START: function (e) {
        d = !0;
    },
    DISCOVER_CHECKLIST_FETCH_FAILURE: function (e) {
        d = !1;
    },
    DISCOVER_CHECKLIST_FETCH_SUCCESS: function (e) {
        var i;
        let { checklist: l, guildId: t } = e;
        (d = !1),
            (o[t] = {
                guildId: l.guild_id,
                safeEnvironment: l.safe_environment,
                healthy: l.healthy,
                healthScorePending: l.health_score_pending,
                nsfwProperties: l.nsfw_properties,
                size: l.size,
                protected: l.protected,
                sufficient: l.sufficient,
                sufficientWithoutGracePeriod: l.sufficient_without_grace_period,
                gracePeriodEndDate: null != l.grace_period_end_date ? new Date(l.grace_period_end_date) : null,
                retentionHealthy: l.retention_healthy,
                engagementHealthy: l.engagement_healthy,
                minimumGuildSize: null != l.minimum_size ? l.minimum_size : 1000,
                healthScore: l.health_score,
                minimumGuildAge: null !== (i = l.minimum_age) && void 0 !== i ? i : 0,
                age: l.age
            });
    }
});
