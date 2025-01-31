t.d(i, { Z: () => o });
var n = t(442837),
    l = t(223892),
    s = t(738774),
    d = t(353926),
    r = t(923726),
    u = t(144507),
    a = t(388032);
let o = {
    title: () => a.intl.string(a.t['KzCF//']),
    description: () => a.intl.string(a.t.xMW8FB),
    canCreateGuild: !1,
    useIsGuildSupported: () =>
        (0, n.e7)(
            [d.Z],
            () => (e, i) =>
                e.isOwner(i) &&
                (0, u.X$)({
                    guild: e,
                    isOwner: !0,
                    canManageGuildRoleSubscriptions: !0,
                    isMonetizationWaitlistEnabledForGuild: (0, l.mG)(e.id),
                    isGuildEligibleForRoleSubscriptions: (0, r.kT)(e.id),
                    isExpeditedMonetizationOnboardingGuild: (0, l.Rw)(e),
                    isUserInCreatorMonetizationEligibleCountry: (0, l.DB)(),
                    shouldRestrictUpdatingRoleSubscriptionSettings: (0, s.cu)(e.id)
                }),
            [],
            n.pF
        )
};
