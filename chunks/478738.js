n.d(t, { Z: () => c }), n(539854);
var r,
    i,
    l = n(442837),
    o = n(570140);
let a = [];
class s extends (r = l.ZP.Store) {
    getGeoRestrictedGuilds() {
        return a;
    }
}
(i = "displayName") in s
    ? Object.defineProperty(s, i, {
          value: "GeoRestrictedGuildStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (s[i] = "GeoRestrictedGuildStore");
let c = new s(o.Z, {
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
        t.push({
            id: e.guildId,
            name: e.name,
            icon: e.icon,
            unavailable: !0,
            geo_restricted: !0,
        }),
            (a = t);
    },
});
