var l = i(164636),
    n = i(71393),
    a = i(652215);
let s = [
    a.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED,
    a.GuildFeatures.CREATOR_MONETIZABLE,
    a.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL,
];
i.d(
    t,
    {},
    {
        TG: function (e) {
            let t = n.A.getGuild(e);
            return t?.features.has(a.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED) ?? !1;
        },
        _Y: function (e) {
            return (0, l.bG)([n.A], () => {
                let t = n.A.getGuild(e);
                return t?.features.has(a.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED) ?? !1;
            });
        },
        hA: function (e) {
            return null != e && s.some((t) => e.features.has(t));
        },
    },
);
