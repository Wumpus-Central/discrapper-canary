n.d(t, { U: () => l });
var r = n(223892),
    i = n(738774),
    a = n(923726),
    o = n(144507),
    s = n(594174);
function l(e) {
    var t;
    let n = e.ownerId === (null == (t = s.default.getCurrentUser()) ? void 0 : t.id);
    return (0, o.X$)({
        guild: e,
        isOwner: n,
        canManageGuildRoleSubscriptions: (0, o.H2)(e),
        isMonetizationWaitlistEnabledForGuild: (0, r.mG)(e.id),
        isGuildEligibleForRoleSubscriptions: (0, a.kT)(e.id),
        isExpeditedMonetizationOnboardingGuild: (0, r.Rw)(e),
        isUserInCreatorMonetizationEligibleCountry: (0, r.DB)(),
        shouldRestrictUpdatingRoleSubscriptionSettings: (0, i.cu)(e.id),
    });
}
