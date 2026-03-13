"use strict";
n.d(t, { t: () => l });
var r = n(469993),
    i = n(836039),
    s = n(567305),
    a = n(555325),
    o = n(287809);
function l(e) {
    let t = e.ownerId === o.default.getCurrentUser()?.id;
    return (0, a.V9)({
        guild: e,
        isOwner: t,
        canManageGuildRoleSubscriptions: (0, a.X9)(e),
        isGuildEligibleForRoleSubscriptions: (0, s.OV)(e.id),
        isExpeditedMonetizationOnboardingGuild: (0, r.Sm)(e),
        isUserInCreatorMonetizationEligibleCountry: (0, r.Z1)(),
        shouldRestrictUpdatingRoleSubscriptionSettings: (0, i.mk)(e.id),
    });
}
