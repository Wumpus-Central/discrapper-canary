var i,
    r,
    l,
    u,
    a = t(442837),
    o = t(570140);
let s = {},
    c = !1;
class d extends (u = a.ZP.Store) {
    isLoading() {
        return c;
    }
    passesChecklist(e) {
        var n;
        return !c && (null === (n = s[e]) || void 0 === n ? void 0 : n.sufficient);
    }
    isPendingSuccess(e) {
        let n = s[e];
        return null != n && !c && n.healthScorePending && n.safeEnvironment && 0 === Object.keys(n.nsfwProperties).length && n.size && n.protected;
    }
    getDiscoveryChecklist(e) {
        return s[e];
    }
}
(l = 'DiscoverGuildChecklistStore'),
    (r = 'displayName') in (i = d)
        ? Object.defineProperty(i, r, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[r] = l),
    (n.ZP = new d(o.Z, {
        DISCOVER_CHECKLIST_FETCH_START: function (e) {
            c = !0;
        },
        DISCOVER_CHECKLIST_FETCH_FAILURE: function (e) {
            c = !1;
        },
        DISCOVER_CHECKLIST_FETCH_SUCCESS: function (e) {
            var n;
            let { checklist: t, guildId: i } = e;
            (c = !1),
                (s[i] = {
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
                    minimumGuildAge: null !== (n = t.minimum_age) && void 0 !== n ? n : 0,
                    age: t.age
                });
        }
    }));
