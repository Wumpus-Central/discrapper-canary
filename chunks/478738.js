n.d(t, { Z: () => c }), n(539854);
var r,
    i,
    l = n(442837),
    a = n(570140);
let o = [];
class s extends (r = l.ZP.Store) {
    getGeoRestrictedGuilds() {
        return o;
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
let c = new s(a.Z, {
    CONNECTION_OPEN: function (e) {
        o = e.geoRestrictedGuilds;
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        if (-1 === o.findIndex((e) => e.id === t.id)) return !1;
        o = o.filter((e) => e.id !== t.id);
    },
    GUILD_GEO_RESTRICTED: function (e) {
        let t = o.filter((t) => t.id !== e.guildId);
        t.push({
            id: e.guildId,
            name: e.name,
            icon: e.icon,
            unavailable: !0,
            geo_restricted: !0,
        }),
            (o = t);
    },
});
