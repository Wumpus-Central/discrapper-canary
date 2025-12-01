n.d(t, {
    G: () => m,
    W: () => g,
});
var r = n(442837),
    i = n(496929),
    a = n(493773),
    o = n(594174),
    s = n(78839),
    l = n(431),
    c = n(580130),
    u = n(111361),
    d = n(937579),
    f = n(474936),
    p = n(981631);
let _ = 259200000;
async function m(e) {
    let t = o.default.getCurrentUser(),
        n = (0, u.I5)(t);
    null == t ||
        n ||
        c.Z.fetchedEndedEntitlements ||
        (await (0, i.p0)({
            entitlementType: p.qc2.FRACTIONAL_REDEMPTION,
            excludeEnded: !1,
        }));
    let r = c.Z.getReverseTrialEntitlement(!0);
    return (
        (!(
            !(!n && null != r && null != r.endsAt && r.endsAt.getTime() < Date.now()) ||
            r.endsAt.getTime() < Date.now() - _
        ) &&
            r.sourceType === p.kNB.REVERSE_TRIAL &&
            (null == e && (await (0, d.Tf)()), null != l.Z.getUserTrialOffer(f.Rt))) ||
        !1
    );
}
function h() {
    let e = (0, r.e7)([o.default], () => o.default.getCurrentUser()),
        t = s.Z.getPremiumTypeSubscription(),
        n = null != t && !t.isBoostOnly,
        l = (0, r.e7)([c.Z], () => c.Z.getReverseTrialEntitlement(!1));
    return (
        (0, a.ZP)(() => {
            null != e &&
                (0, u.I5)(e) &&
                !n &&
                (c.Z.fetchedAllEntitlements ||
                    c.Z.fetchingAllEntitlements ||
                    (0, i.p0)({ entitlementType: p.qc2.FRACTIONAL_REDEMPTION }));
        }),
        n ? null : l
    );
}
function g() {
    return null != h();
}
