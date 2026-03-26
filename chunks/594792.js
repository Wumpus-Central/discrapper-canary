i.d(t, { A: () => u });
var n = i(311907),
    l = i(469993),
    a = i(836039),
    s = i(49463),
    r = i(260509),
    d = i(555325),
    o = i(985018);
let u = {
    title: () => o.intl.string(o.t["KzCF/6"]),
    description: () => o.intl.string(o.t.xMW8FH),
    canCreateGuild: !1,
    useIsGuildSupported: () =>
        (0, n.bG)(
            [s.A],
            () => (e, t) =>
                (0, r.bM)(e, t) &&
                (0, d.V9)({
                    guild: e,
                    isOwner: !0,
                    canManageGuildRoleSubscriptions: !0,
                    isUserInCreatorMonetizationEligibleCountry: (0, l.Z1)(),
                    shouldRestrictUpdatingRoleSubscriptionSettings: (0, a.mk)(e.id),
                }),
            [],
            n.My,
        ),
};
