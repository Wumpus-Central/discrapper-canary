i.d(t, { Z: () => c });
var n = i(442837),
    l = i(223892),
    r = i(738774),
    a = i(353926),
    o = i(601964),
    s = i(923726),
    u = i(144507),
    d = i(388032);
let c = {
    title: () => d.intl.string(d.t["KzCF/6"]),
    description: () => d.intl.string(d.t.xMW8FH),
    canCreateGuild: !1,
    useIsGuildSupported: () =>
        (0, n.e7)(
            [a.Z],
            () => (e, t) =>
                (0, o.eM)(e, t) &&
                (0, u.X$)({
                    guild: e,
                    isOwner: !0,
                    canManageGuildRoleSubscriptions: !0,
                    isMonetizationWaitlistEnabledForGuild: (0, l.mG)(e.id),
                    isGuildEligibleForRoleSubscriptions: (0, s.kT)(e.id),
                    isExpeditedMonetizationOnboardingGuild: (0, l.Rw)(e),
                    isUserInCreatorMonetizationEligibleCountry: (0, l.DB)(),
                    shouldRestrictUpdatingRoleSubscriptionSettings: (0, r.cu)(e.id),
                }),
            [],
            n.pF,
        ),
};
