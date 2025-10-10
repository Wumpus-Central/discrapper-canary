n.d(t, { Z: () => d }), n(388685);
var r,
    i,
    l = n(442837),
    s = n(570140),
    a = n(430824);
let o = new Map();
class c extends (r = l.ZP.Store) {
    initialize() {
        this.waitFor(a.Z);
    }
    getGuildRoleConnectionsConfiguration(e) {
        return o.get(e);
    }
}
(i = "displayName") in c
    ? Object.defineProperty(c, i, {
          value: "GuildRoleConnectionsConfigurationStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (c[i] = "GuildRoleConnectionsConfigurationStore");
let d = new c(s.Z, {
    GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS: (e) => {
        let { roleId: t, roleConnectionConfigurations: n } = e;
        o.set(t, n);
    },
});
