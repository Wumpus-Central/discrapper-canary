"use strict";
n.d(t, { A: () => o }), n(321073);
var i = n(17928),
    r = n(228366);
let s = [];
class a extends i.Ay.Store {
    static displayName = "GeoRestrictedGuildStore";
    getGeoRestrictedGuilds() {
        return s;
    }
}
let o = new a(r.h, {
    CONNECTION_OPEN: function (e) {
        s = e.geoRestrictedGuilds;
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        if (-1 === s.findIndex((e) => e.id === t.id)) return !1;
        s = s.filter((e) => e.id !== t.id);
    },
    GUILD_GEO_RESTRICTED: function (e) {
        let t = s.filter((t) => t.id !== e.guildId);
        t.push({ id: e.guildId, name: e.name, icon: e.icon, unavailable: !0, geo_restricted: !0 }), (s = t);
    },
});
