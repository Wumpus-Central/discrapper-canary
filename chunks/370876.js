var i = n(284009),
    r = n.n(i),
    a = n(435558),
    l = n.n(a),
    d = n(946116);
function _(t) {
    return l().orderBy(t, [(t) => t.approximateMemberCount], ["desc"]);
}
n.d(
    e,
    {},
    {
        A3: function (t) {
            var e;
            return ((e = t.filter((t) => t.featurableInDirectory)),
            l().orderBy(e, [(t) => t.createdAt], ["desc"])).slice(0, 5);
        },
        DN: _,
        _t: function (t) {
            return _(t);
        },
        mR: function (t) {
            if (t.type === d.fx.GUILD)
                return {
                    channelId: t.directory_channel_id,
                    guildId: t.entity_id,
                    type: t.type,
                    authorId: t.author_id,
                    createdAt: t.created_at,
                    description: t.description,
                    primaryCategoryId: t.primary_category_id,
                    name: t.guild?.name,
                    icon: t.guild?.icon,
                    splash: t.guild?.splash,
                    features: new Set(t.guild?.features),
                    approximateMemberCount: t.guild?.approximate_member_count,
                    approximatePresenceCount: t.guild?.approximate_presence_count,
                    featurableInDirectory: t.guild?.featurable_in_directory,
                };
            (t.type, r()(!1, "Directory entries must be connected to a guild!"));
        },
    },
);
