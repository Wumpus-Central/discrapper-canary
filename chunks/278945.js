n.d(t, { r: () => d });
var i = n(355467),
    l = n(78839),
    r = n(431),
    a = n(937579),
    s = n(533990),
    o = n(474936),
    c = n(981631);
async function d(e) {
    l.ZP.hasFetchedMostRecentPremiumTypeSubscription() || (await (0, i.ou)());
    let t = l.ZP.getMostRecentPremiumTypeSubscription(),
        n = s.Z.getCurrentConfig({ location: 'announcementManager' }, { autoTrackExposure: !1 }).isFollowup;
    if ((null == t ? void 0 : t.status) === c.O0b.ENDED && (null == t ? void 0 : t.trialId) != null && o.h8.includes(t.trialId)) {
        if ((null == e && (await (0, a.T)()), null != r.Z.getUserTrialOffer(o.Rt))) return o.cd.REVERSE_TRIAL_FOLLOWUP_UPSELL;
        if (null != t && !n) return o.cd.REVERSE_TRIAL_ENDED_UPSELL;
    }
}
