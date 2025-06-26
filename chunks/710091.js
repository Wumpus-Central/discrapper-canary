i.d(t, { Z: () => o });
var n = i(442837),
    l = i(223892),
    r = i(738774),
    a = i(353926),
    u = i(923726),
    s = i(144507),
    d = i(388032);
let o = {
    title: () => d.intl.string(d.t['KzCF//']),
    description: () => d.intl.string(d.t.xMW8FB),
    canCreateGuild: !1,
    useIsGuildSupported: () =>
        (0, n.e7)(
            [a.Z],
            () => (e, t) =>
                e.isOwner(t) &&
                (0, s.X$)({
                    guild: e,
                    isOwner: !0,
                    canManageGuildRoleSubscriptions: !0,
                    isMonetizationWaitlistEnabledForGuild: (0, l.mG)(e.id),
                    isGuildEligibleForRoleSubscriptions: (0, u.kT)(e.id),
                    isExpeditedMonetizationOnboardingGuild: (0, l.Rw)(e),
                    isUserInCreatorMonetizationEligibleCountry: (0, l.DB)(),
                    shouldRestrictUpdatingRoleSubscriptionSettings: (0, r.cu)(e.id)
                }),
            [],
            n.pF
        )
};
