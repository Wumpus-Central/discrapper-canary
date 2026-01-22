n.d(t, {
    A3: () => d,
    DN: () => u,
    _t: () => f,
    mR: () => o,
    zP: () => c,
}),
    n(228524),
    n(896048);
var r = n(284009),
    l = n.n(r),
    i = n(735438),
    a = n.n(i),
    s = n(946116);

function o(e) {
    var t, n, r, i, a, o, c;
    return (
        l()(e.type === s.fx.GUILD, "Directory entries must be connected to a guild!"),
        {
            channelId: e.directory_channel_id,
            guildId: e.entity_id,
            type: e.type,
            authorId: e.author_id,
            createdAt: e.created_at,
            description: e.description,
            primaryCategoryId: e.primary_category_id,
            name: null == (t = e.guild) ? void 0 : t.name,
            icon: null == (n = e.guild) ? void 0 : n.icon,
            splash: null == (r = e.guild) ? void 0 : r.splash,
            features: new Set(null == (i = e.guild) ? void 0 : i.features),
            approximateMemberCount: null == (a = e.guild) ? void 0 : a.approximate_member_count,
            approximatePresenceCount: null == (o = e.guild) ? void 0 : o.approximate_presence_count,
            featurableInDirectory: null == (c = e.guild) ? void 0 : c.featurable_in_directory,
        }
    );
}
let c = 5;

function u(e) {
    return a().orderBy(e, [(e) => e.approximateMemberCount], ["desc"]);
}

function d(e) {
    var t;
    return ((t = e.filter((e) => e.featurableInDirectory)), a().orderBy(t, [(e) => e.createdAt], ["desc"])).slice(0, c);
}

function f(e) {
    return u(e);
}
