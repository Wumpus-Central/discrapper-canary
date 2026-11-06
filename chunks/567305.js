var i = n(164636),
    r = n(71393),
    a = n(652215);
let s = [
    a.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED,
    a.GuildFeatures.CREATOR_MONETIZABLE,
    a.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL,
];
n.d(
    t,
    {},
    {
        TG: function (e) {
            let t = r.A.getGuild(e);
            return t?.features.has(a.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED) ?? !1;
        },
        _Y: function (e) {
            return (0, i.bG)([r.A], () => {
                let t = r.A.getGuild(e);
                return t?.features.has(a.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED) ?? !1;
            });
        },
        hA: function (e) {
            return null != e && s.some((t) => e.features.has(t));
        },
    },
);
