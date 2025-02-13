n.d(t, {
    W: () => m,
    r: () => p
});
var i = n(442837),
    r = n(496929),
    a = n(493773),
    s = n(594174),
    o = n(431),
    l = n(580130),
    u = n(111361),
    c = n(937579),
    d = n(474936),
    f = n(981631);
let _ = 259200000;
async function p(e) {
    let t = s.default.getCurrentUser(),
        n = (0, u.I5)(t);
    null != t && n && !l.Z.fetchedAllEntitlements && (0, r.p0)({ entitlementType: f.qc2.FRACTIONAL_REDEMPTION });
    let i = l.Z.getReverseTrialEntitlement(!0);
    if (!n && null != i && null != i.endsAt && i.endsAt.getTime() < Date.now() && !(i.endsAt.getTime() < Date.now() - _) && i.sourceType === f.kNB.REVERSE_TRIAL && (null == e && (await (0, c.T)()), null != o.Z.getUserTrialOffer(d.Rt))) return d.cd.REVERSE_TRIAL_FOLLOWUP_UPSELL;
}
function h() {
    let e = (0, i.e7)([s.default], () => s.default.getCurrentUser()),
        t = (0, i.e7)([l.Z], () => l.Z.getReverseTrialEntitlement(!1));
    return (
        (0, a.ZP)(() => {
            null != e && (0, u.I5)(e) && (l.Z.fetchedAllEntitlements || (0, r.p0)({ entitlementType: f.qc2.FRACTIONAL_REDEMPTION }));
        }),
        t
    );
}
function m() {
    return null != h();
}
