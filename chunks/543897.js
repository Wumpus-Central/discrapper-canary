n.d(t, { A: () => l }), n(321073);
var i = n(17928),
    a = n(228366);
let r = [];
class s extends i.Ay.Store {
    static displayName = "GeoRestrictedGuildStore";
    getGeoRestrictedGuilds() {
        return r;
    }
}
let l = new s(a.h, {
    CONNECTION_OPEN: function (e) {
        r = e.geoRestrictedGuilds;
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        if (-1 === r.findIndex((e) => e.id === t.id)) return !1;
        r = r.filter((e) => e.id !== t.id);
    },
    GUILD_GEO_RESTRICTED: function (e) {
        let t = r.filter((t) => t.id !== e.guildId);
        t.push({ id: e.guildId, name: e.name, icon: e.icon, unavailable: !0, geo_restricted: !0 }), (r = t);
    },
});
