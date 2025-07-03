i.d(t, { Z: () => c });
var n = i(442837),
    l = i(223892),
    r = i(738774),
    a = i(353926),
    s = i(601964),
    u = i(923726),
    d = i(144507),
    o = i(388032);
let c = {
    title: () => o.intl.string(o.t['KzCF//']),
    description: () => o.intl.string(o.t.xMW8FB),
    canCreateGuild: !1,
    useIsGuildSupported: () =>
        (0, n.e7)(
            [a.Z],
            () => (e, t) =>
                (0, s.eM)(e, t) &&
                (0, d.X$)({
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
