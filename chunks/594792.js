i.d(t, { A: () => c });
var n = i(311907),
    l = i(469993),
    s = i(836039),
    a = i(49463),
    r = i(260509),
    d = i(567305),
    o = i(555325),
    u = i(985018);
let c = {
    title: () => u.intl.string(u.t["KzCF/6"]),
    description: () => u.intl.string(u.t.xMW8FH),
    canCreateGuild: !1,
    useIsGuildSupported: () =>
        (0, n.bG)(
            [a.A],
            () => (e, t) =>
                (0, r.bM)(e, t) &&
                (0, o.V9)({
                    guild: e,
                    isOwner: !0,
                    canManageGuildRoleSubscriptions: !0,
                    isGuildEligibleForRoleSubscriptions: (0, d.OV)(e.id),
                    isExpeditedMonetizationOnboardingGuild: (0, l.Sm)(e),
                    isUserInCreatorMonetizationEligibleCountry: (0, l.Z1)(),
                    shouldRestrictUpdatingRoleSubscriptionSettings: (0, s.mk)(e.id),
                }),
            [],
            n.My,
        ),
};
