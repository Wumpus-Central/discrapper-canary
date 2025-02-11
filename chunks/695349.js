n.d(t, {
    W: () => E,
    r: () => m
});
var i = n(442837),
    r = n(355467),
    a = n(496929),
    s = n(493773),
    o = n(594174),
    l = n(78839),
    u = n(431),
    c = n(580130),
    d = n(111361),
    f = n(937579),
    _ = n(533990),
    p = n(474936),
    h = n(981631);
async function m(e) {
    l.ZP.hasFetchedMostRecentPremiumTypeSubscription() || (await (0, r.ou)());
    let t = l.ZP.getMostRecentPremiumTypeSubscription(),
        n = _.Z.getCurrentConfig({ location: 'announcementManager' }, { autoTrackExposure: !1 }).isFollowup;
    if ((null == t ? void 0 : t.status) === h.O0b.ENDED && (null == t ? void 0 : t.trialId) != null && p.h8.includes(t.trialId)) {
        if ((null == e && (await (0, f.T)()), null != u.Z.getUserTrialOffer(p.Rt))) return p.cd.REVERSE_TRIAL_FOLLOWUP_UPSELL;
        if (null != t && !n) return p.cd.REVERSE_TRIAL_ENDED_UPSELL;
    }
}
function g() {
    let e = (0, i.e7)([o.default], () => o.default.getCurrentUser()),
        t = (0, i.e7)([c.Z], () => c.Z.getReverseTrialEntitlement(!1));
    return (
        (0, s.ZP)(() => {
            null != e && (0, d.I5)(e) && (c.Z.fetchedAllEntitlements || (0, a.p0)({ entitlementType: h.qc2.FRACTIONAL_REDEMPTION }));
        }),
        t
    );
}
function E() {
    return null != g();
}
