t.d(i, { ZP: () => c });
var n,
    l,
    r = t(442837),
    s = t(570140);
let a = {},
    u = !1;
class o extends (l = r.ZP.Store) {
    isLoading() {
        return u;
    }
    passesChecklist(e) {
        var i;
        return !u && (null == (i = a[e]) ? void 0 : i.sufficient);
    }
    isPendingSuccess(e) {
        let i = a[e];
        return (
            null != i &&
            !u &&
            i.healthScorePending &&
            i.safeEnvironment &&
            0 === Object.keys(i.nsfwProperties).length &&
            i.size &&
            i.protected
        );
    }
    getDiscoveryChecklist(e) {
        return a[e];
    }
}
(n = "displayName") in o
    ? Object.defineProperty(o, n, {
          value: "DiscoverGuildChecklistStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (o[n] = "DiscoverGuildChecklistStore");
let c = new o(s.Z, {
    DISCOVER_CHECKLIST_FETCH_START: function (e) {
        u = !0;
    },
    DISCOVER_CHECKLIST_FETCH_FAILURE: function (e) {
        u = !1;
    },
    DISCOVER_CHECKLIST_FETCH_SUCCESS: function (e) {
        var i;
        let { checklist: t, guildId: n } = e;
        (u = !1),
            (a[n] = {
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
                age: t.age,
            });
    },
});
