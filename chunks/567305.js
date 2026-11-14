var i = n(164636),
    r = n(71393),
    l = n(652215);
let a = [
    l.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED,
    l.GuildFeatures.CREATOR_MONETIZABLE,
    l.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL,
];
n.d(
    t,
    {},
    {
        TG: function (e) {
            let t = r.A.getGuild(e);
            return t?.features.has(l.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED) ?? !1;
        },
        _Y: function (e) {
            return (0, i.bG)([r.A], () => {
                let t = r.A.getGuild(e);
                return t?.features.has(l.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED) ?? !1;
            });
        },
        hA: function (e) {
            return null != e && a.some((t) => e.features.has(t));
        },
    },
);
