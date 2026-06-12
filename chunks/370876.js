n.d(e, { A3: () => s, DN: () => I, _t: () => E, mR: () => _, zP: () => p });
var i = n(284009),
    r = n.n(i),
    a = n(735438),
    l = n.n(a),
    d = n(946116);
function _(t) {
    return (
        r()(t.type === d.fx.GUILD, "Directory entries must be connected to a guild!"),
        {
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
        }
    );
}
let p = 5;
function I(t) {
    return l().orderBy(t, [(t) => t.approximateMemberCount], ["desc"]);
}
function s(t) {
    var e;
    return ((e = t.filter((t) => t.featurableInDirectory)), l().orderBy(e, [(t) => t.createdAt], ["desc"])).slice(0, p);
}
function E(t) {
    return I(t);
}
