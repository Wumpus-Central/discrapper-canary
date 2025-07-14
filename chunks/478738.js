(n.d(t, { Z: () => u }), n(539854));
var r,
    i,
    l,
    o = n(442837),
    s = n(570140);
let a = [];
class c extends (r = o.ZP.Store) {
    getGeoRestrictedGuilds() {
        return a;
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
let u = new c(s.Z, {
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
        (t.push({
            id: e.guildId,
            name: e.name,
            icon: e.icon,
            unavailable: !0,
            geo_restricted: !0
        }),
            (a = t));
    }
});
