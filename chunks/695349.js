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
    let r = c.Z.getReverseTrialEntitlementInfo(!0),
        a = null == r ? void 0 : r.reverseTrialEntitlement;
    return (!(!(!n && null != a && null != a.endsAt && a.endsAt.getTime() < Date.now()) || a.endsAt.getTime() < Date.now() - p) && a.sourceType === _.kNB.REVERSE_TRIAL && (null == e && (await (0, d.T)()), null != l.Z.getUserTrialOffer(f.Rt))) || !1;
}
function m() {
    var e;
    let t = (0, r.e7)([o.default], () => o.default.getCurrentUser()),
        n = s.ZP.getPremiumTypeSubscription(),
        l = null != n && !n.isBoostOnly,
        d = (0, r.e7)([c.Z], () => c.Z.getReverseTrialEntitlementInfo(!1)),
        f = null == d ? void 0 : d.reverseTrialEntitlement;
    return (
        (0, a.ZP)(() => {
            null != t && (0, u.I5)(t) && !l && (c.Z.fetchedAllEntitlements || c.Z.fetchingAllEntitlements || (0, i.p0)({ entitlementType: _.qc2.FRACTIONAL_REDEMPTION }));
        }),
        {
            reverseTrialEntitlement: l ? null : f,
            hasBankedFractionalNitro: null != (e = null == d ? void 0 : d.hasBankedFractionalNitro) && e
        }
    );
}
function g() {
    let e = m();
    return {
        isInReverseTrial: null != e.reverseTrialEntitlement,
        hasBankedFractionalNitro: e.hasBankedFractionalNitro
    };
}
