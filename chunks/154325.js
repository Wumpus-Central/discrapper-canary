"use strict";
n.d(t, { t: () => o });
var r = n(469993),
    i = n(836039),
    s = n(555325),
    a = n(287809);
function o(e) {
    let t = e.ownerId === a.default.getCurrentUser()?.id;
    return (0, s.V9)({
        guild: e,
        isOwner: t,
        canManageGuildRoleSubscriptions: (0, s.X9)(e),
        isUserInCreatorMonetizationEligibleCountry: (0, r.Z1)(),
        shouldRestrictUpdatingRoleSubscriptionSettings: (0, i.mk)(e.id),
    });
}
