i.d(t, { Z: () => o });
var n = i(442837),
    l = i(223892),
    r = i(738774),
    s = i(353926),
    u = i(923726),
    a = i(144507),
    d = i(388032);
let o = {
    title: () => d.NW.string(d.t['KzCF//']),
    description: () => d.NW.string(d.t.xMW8FB),
    canCreateGuild: !1,
    useIsGuildSupported: () =>
        (0, n.e7)(
            [s.Z],
            () => (e, t) =>
                e.isOwner(t) &&
                (0, a.X$)({
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
