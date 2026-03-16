"use strict";
n.d(t, { d: () => _ });
var r = n(311907),
    i = n(339048),
    s = n(964486),
    a = n(287809),
    o = n(166403);
n(816733);
var l = n(469778),
    u = n(474090);
n(694080), n(788868);
var c = n(652215);
function d() {
    let e = (0, r.bG)([a.default], () => a.default.getCurrentUser()),
        t = o.A.getPremiumTypeSubscription(),
        n = null != t && !t.isBoostOnly,
        d = (0, r.bG)([l.A], () => l.A.getReverseTrialEntitlement(!1));
    return (
        (0, s.Ay)(() => {
            null != e &&
                (0, u.ki)(e) &&
                !n &&
                (l.A.fetchedAllEntitlements ||
                    l.A.fetchingAllEntitlements ||
                    (0, i.qw)({ entitlementType: c.zF_.FRACTIONAL_REDEMPTION }));
        }),
        n ? null : d
    );
}
function _() {
    return null != d();
}
