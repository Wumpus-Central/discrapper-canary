var i = n(855986),
    r = n(71393),
    a = n(652215);
n.d(
    t,
    {},
    {
        $: function (e) {
            if (null == e) return !1;
            let t = r.A.getGuild(e);
            return (
                null != t &&
                (t.features.has(a.GuildFeatures.COMMUNITY) || t.features.has(a.GuildFeatures.GUILD_PRODUCTS))
            );
        },
        w: function (e) {
            return (0, i.bG)(
                [r.A],
                () => {
                    if (null == e) return !1;
                    let t = r.A.getGuild(e);
                    return (
                        null != t &&
                        (t.features.has(a.GuildFeatures.COMMUNITY) || t.features.has(a.GuildFeatures.GUILD_PRODUCTS))
                    );
                },
                [e],
            );
        },
    },
);
