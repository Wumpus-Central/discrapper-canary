i.d(t, { A: () => o });
var n = i(311907),
    l = i(49463),
    r = i(576705),
    a = i(567305),
    s = i(652215),
    d = i(985018);
let o = {
    title: () => d.intl.string(d.t.aTFQKh),
    description: () => d.intl.string(d.t.oTbFQg),
    canCreateGuild: !1,
    useIsGuildSupported: () =>
        (0, n.bG)(
            [l.A, r.A],
            () => (e) =>
                e.features.has(s.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED) &&
                !e.features.has(s.GuildFeatures.CREATOR_MONETIZABLE_RESTRICTED) &&
                r.A.can(s.xBc.ADMINISTRATOR, e) &&
                (0, a.D3)() &&
                (0, a.TG)(e.id),
            [],
        ),
};
