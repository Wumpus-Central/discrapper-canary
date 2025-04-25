n.d(t, {
    G: () => h,
    W: () => g
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
    _ = n(981631);
let p = 259200000;
async function h(e) {
    let t = o.default.getCurrentUser(),
        n = (0, u.I5)(t);
    null == t ||
        n ||
        c.Z.fetchedEndedEntitlements ||
        (await (0, i.p0)({
            entitlementType: _.qc2.FRACTIONAL_REDEMPTION,
            excludeEnded: !1
        }));
    let r = c.Z.getReverseTrialEntitlement(!0);
    return (!(!(!n && null != r && null != r.endsAt && r.endsAt.getTime() < Date.now()) || r.endsAt.getTime() < Date.now() - p) && r.sourceType === _.kNB.REVERSE_TRIAL && (null == e && (await (0, d.T)()), null != l.Z.getUserTrialOffer(f.Rt))) || !1;
}
function m() {
    let e = (0, r.e7)([o.default], () => o.default.getCurrentUser()),
        t = s.ZP.getPremiumTypeSubscription(),
        n = (0, r.e7)([c.Z], () => c.Z.getReverseTrialEntitlement(!1));
    return (
        (0, a.ZP)(() => {
            null != e && (0, u.I5)(e) && null == t && (c.Z.fetchedAllEntitlements || c.Z.fetchingAllEntitlements || (0, i.p0)({ entitlementType: _.qc2.FRACTIONAL_REDEMPTION }));
        }),
        null != t ? null : n
    );
}
function g() {
    return null != m();
}
