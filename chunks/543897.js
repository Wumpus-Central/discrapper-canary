"use strict";
n.d(t, { A: () => l }), n(321073);
var i = n(17928),
    r = n(228366);
let a = [];
class s extends i.Ay.Store {
    static displayName = "GeoRestrictedGuildStore";
    getGeoRestrictedGuilds() {
        return a;
    }
}
let l = new s(r.h, {
    CONNECTION_OPEN: function (e) {
        a = e.geoRestrictedGuilds;
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        if (-1 === a.findIndex((e) => e.id === t.id)) return !1;
        a = a.filter((e) => e.id !== t.id);
    },
    GUILD_GEO_RESTRICTED: function (e) {
        let t = a.filter((t) => t.id !== e.guildId);
        t.push({ id: e.guildId, name: e.name, icon: e.icon, unavailable: !0, geo_restricted: !0 }), (a = t);
    },
});
