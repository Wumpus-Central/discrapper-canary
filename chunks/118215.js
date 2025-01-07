var e,
    r,
    l,
    s,
    u = i(442837),
    o = i(570140);
let a = {},
    c = !1;
class g extends (s = u.ZP.Store) {
    isLoading() {
        return c;
    }
    passesChecklist(t) {
        var n;
        return !c && (null === (n = a[t]) || void 0 === n ? void 0 : n.sufficient);
    }
    isPendingSuccess(t) {
        let n = a[t];
        return null != n && !c && n.healthScorePending && n.safeEnvironment && 0 === Object.keys(n.nsfwProperties).length && n.size && n.protected;
    }
    getDiscoveryChecklist(t) {
        return a[t];
    }
}
(l = 'DiscoverGuildChecklistStore'),
    (r = 'displayName') in (e = g)
        ? Object.defineProperty(e, r, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (e[r] = l),
    (n.ZP = new g(o.Z, {
        DISCOVER_CHECKLIST_FETCH_START: function (t) {
            c = !0;
        },
        DISCOVER_CHECKLIST_FETCH_FAILURE: function (t) {
            c = !1;
        },
        DISCOVER_CHECKLIST_FETCH_SUCCESS: function (t) {
            var n;
            let { checklist: i, guildId: e } = t;
            (c = !1),
                (a[e] = {
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
                    minimumGuildAge: null !== (n = i.minimum_age) && void 0 !== n ? n : 0,
                    age: i.age
                });
        }
    }));
