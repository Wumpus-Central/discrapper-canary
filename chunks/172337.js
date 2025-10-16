i.d(t, { Z: () => u });
var n = i(442837),
    l = i(353926),
    r = i(496675),
    a = i(923726),
    o = i(981631),
    s = i(388032);
let u = {
    title: () => s.intl.string(s.t.aTFQKi),
    description: () => s.intl.string(s.t.oTbFQk),
    canCreateGuild: !1,
    useIsGuildSupported: () =>
        (0, n.e7)(
            [l.Z, r.Z],
            () => (e) =>
                e.features.has(o.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED) &&
                !e.features.has(o.GuildFeatures.CREATOR_MONETIZABLE_RESTRICTED) &&
                r.Z.can(o.Plq.ADMINISTRATOR, e) &&
                (0, a.$F)() &&
                (0, a.hQ)(e.id),
            [],
        ),
};
