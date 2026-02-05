"use strict";
n.d(t, { d: () => g, m: () => h });
var r = n(311907),
    i = n(339048),
    a = n(964486),
    s = n(287809),
    o = n(166403),
    l = n(816733),
    u = n(469778),
    c = n(474090),
    d = n(694080),
    _ = n(788868),
    f = n(652215);
let p = 2592e5;
async function h(e) {
    let t = s.default.getCurrentUser(),
        n = (0, c.ki)(t);
    null == t ||
        n ||
        u.A.fetchedEndedEntitlements ||
        (await (0, i.qw)({ entitlementType: f.zF_.FRACTIONAL_REDEMPTION, excludeEnded: !1 }));
    let r = u.A.getReverseTrialEntitlement(!0);
    return (
        (!(
            !(!n && null != r && null != r.endsAt && r.endsAt.getTime() < Date.now()) ||
            r.endsAt.getTime() < Date.now() - p
        ) &&
            r.sourceType === f.GD.REVERSE_TRIAL &&
            (null == e && (await (0, d._D)()), null != l.A.getUserTrialOffer(_.Tt))) ||
        !1
    );
}
function m() {
    let e = (0, r.bG)([s.default], () => s.default.getCurrentUser()),
        t = o.A.getPremiumTypeSubscription(),
        n = null != t && !t.isBoostOnly,
        l = (0, r.bG)([u.A], () => u.A.getReverseTrialEntitlement(!1));
    return (
        (0, a.Ay)(() => {
            null != e &&
                (0, c.ki)(e) &&
                !n &&
                (u.A.fetchedAllEntitlements ||
                    u.A.fetchingAllEntitlements ||
                    (0, i.qw)({ entitlementType: f.zF_.FRACTIONAL_REDEMPTION }));
        }),
        n ? null : l
    );
}
function g() {
    return null != m();
}
