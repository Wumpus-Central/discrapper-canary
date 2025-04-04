n.d(t, {
    G: () => p,
    W: () => m
});
var r = n(442837),
    i = n(496929),
    o = n(493773),
    a = n(594174),
    s = n(431),
    l = n(580130),
    c = n(111361),
    u = n(937579),
    d = n(474936),
    f = n(981631);
let _ = 259200000;
async function p(e) {
    let t = a.default.getCurrentUser(),
        n = (0, c.I5)(t);
    null == t ||
        n ||
        l.Z.fetchedEndedEntitlements ||
        (await (0, i.p0)({
            entitlementType: f.qc2.FRACTIONAL_REDEMPTION,
            excludeEnded: !1
        }));
    let r = l.Z.getReverseTrialEntitlement(!0);
    return (!(!(!n && null != r && null != r.endsAt && r.endsAt.getTime() < Date.now()) || r.endsAt.getTime() < Date.now() - _) && r.sourceType === f.kNB.REVERSE_TRIAL && (null == e && (await (0, u.T)()), null != s.Z.getUserTrialOffer(d.Rt))) || !1;
}
function h() {
    let e = (0, r.e7)([a.default], () => a.default.getCurrentUser()),
        t = (0, r.e7)([l.Z], () => l.Z.getReverseTrialEntitlement(!1));
    return (
        (0, o.ZP)(() => {
            null != e && (0, c.I5)(e) && (l.Z.fetchedAllEntitlements || (0, i.p0)({ entitlementType: f.qc2.FRACTIONAL_REDEMPTION }));
        }),
        t
    );
}
function m() {
    return null != h();
}
