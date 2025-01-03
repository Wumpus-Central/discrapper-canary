n.d(t, {
    r: function () {
        return d;
    }
});
var i = n(355467),
    r = n(78839),
    l = n(431),
    a = n(937579),
    s = n(533990),
    o = n(474936),
    c = n(981631);
async function d(e) {
    !r.ZP.hasFetchedMostRecentPremiumTypeSubscription() && (await (0, i.ou)());
    let t = r.ZP.getMostRecentPremiumTypeSubscription(),
        n = s.Z.getCurrentConfig({ location: 'announcementManager' }, { autoTrackExposure: !1 }).isFollowup;
    if ((null == t ? void 0 : t.status) === c.O0b.ENDED && (null == t ? void 0 : t.trialId) != null && o.h8.includes(t.trialId)) {
        if ((null == e && (await (0, a.T)()), null != l.Z.getUserTrialOffer(o.Rt))) return o.cd.REVERSE_TRIAL_FOLLOWUP_UPSELL;
        if (null != t && !n) return o.cd.REVERSE_TRIAL_ENDED_UPSELL;
    }
}
