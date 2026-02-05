"use strict";
n.d(t, { t: () => l });
var r = n(469993),
    i = n(836039),
    a = n(567305),
    s = n(555325),
    o = n(287809);
function l(e) {
    let t = e.ownerId === o.default.getCurrentUser()?.id;
    return (0, s.V9)({
        guild: e,
        isOwner: t,
        canManageGuildRoleSubscriptions: (0, s.X9)(e),
        isMonetizationWaitlistEnabledForGuild: (0, r.Kw)(e.id),
        isGuildEligibleForRoleSubscriptions: (0, a.OV)(e.id),
        isExpeditedMonetizationOnboardingGuild: (0, r.Sm)(e),
        isUserInCreatorMonetizationEligibleCountry: (0, r.Z1)(),
        shouldRestrictUpdatingRoleSubscriptionSettings: (0, i.mk)(e.id),
    });
}
