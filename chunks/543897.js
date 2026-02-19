"use strict";
n.d(t, { A: () => a }), n(321073);
var i = n(311907),
    s = n(73153);
let l = [];
class r extends i.Ay.Store {
    static displayName = "GeoRestrictedGuildStore";
    getGeoRestrictedGuilds() {
        return l;
    }
}
let a = new r(s.h, {
    CONNECTION_OPEN: function (e) {
        l = e.geoRestrictedGuilds;
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        if (-1 === l.findIndex((e) => e.id === t.id)) return !1;
        l = l.filter((e) => e.id !== t.id);
    },
    GUILD_GEO_RESTRICTED: function (e) {
        let t = l.filter((t) => t.id !== e.guildId);
        t.push({ id: e.guildId, name: e.name, icon: e.icon, unavailable: !0, geo_restricted: !0 }), (l = t);
    },
});
