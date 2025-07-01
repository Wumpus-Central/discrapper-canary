(n.d(t, { Z: () => u }), n(539854));
var r,
    i,
    l,
    o = n(442837),
    a = n(570140);
let s = [];
class c extends (r = o.ZP.Store) {
    getGeoRestrictedGuilds() {
        return s;
    }
}
((l = 'GeoRestrictedGuildStore'),
    (i = 'displayName') in c
        ? Object.defineProperty(c, i, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (c[i] = l));
let u = new c(a.Z, {
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
        (t.push({
            id: e.guildId,
            name: e.name,
            icon: e.icon,
            unavailable: !0,
            geo_restricted: !0
        }),
            (s = t));
    }
});
