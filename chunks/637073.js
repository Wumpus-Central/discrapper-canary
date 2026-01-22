n.d(t, {
    d: () => g,
    m: () => h,
});
var r = n(311907),
    i = n(339048),
    a = n(964486),
    s = n(287809),
    o = n(166403),
    l = n(816733),
    c = n(469778),
    u = n(474090),
    d = n(694080),
    f = n(788868),
    p = n(652215);
let _ = 259200000;
async function h(e) {
    let t = s.default.getCurrentUser(),
        n = (0, u.ki)(t);
    null == t ||
        n ||
        c.A.fetchedEndedEntitlements ||
        (await (0, i.qw)({
            entitlementType: p.zF_.FRACTIONAL_REDEMPTION,
            excludeEnded: !1,
        }));
    let r = c.A.getReverseTrialEntitlement(!0);
    return (
        (!(
            !(!n && null != r && null != r.endsAt && r.endsAt.getTime() < Date.now()) ||
            r.endsAt.getTime() < Date.now() - _
        ) &&
            r.sourceType === p.GD.REVERSE_TRIAL &&
            (null == e && (await (0, d._D)()), null != l.A.getUserTrialOffer(f.Tt))) ||
        !1
    );
}
function m() {
    let e = (0, r.bG)([s.default], () => s.default.getCurrentUser()),
        t = o.A.getPremiumTypeSubscription(),
        n = null != t && !t.isBoostOnly,
        l = (0, r.bG)([c.A], () => c.A.getReverseTrialEntitlement(!1));
    return (
        (0, a.Ay)(() => {
            null != e &&
                (0, u.ki)(e) &&
                !n &&
                (c.A.fetchedAllEntitlements ||
                    c.A.fetchingAllEntitlements ||
                    (0, i.qw)({ entitlementType: p.zF_.FRACTIONAL_REDEMPTION }));
        }),
        n ? null : l
    );
}
function g() {
    return null != m();
}
