l.d(t, { Z: () => c }), l(388685);
var r,
    n,
    o = l(442837),
    i = l(570140),
    a = l(430824);
let s = new Map();
class u extends (r = o.ZP.Store) {
    initialize() {
        this.waitFor(a.Z);
    }
    getGuildRoleConnectionsConfiguration(e) {
        return s.get(e);
    }
}
(n = "displayName") in u
    ? Object.defineProperty(u, n, {
          value: "GuildRoleConnectionsConfigurationStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (u[n] = "GuildRoleConnectionsConfigurationStore");
let c = new u(i.Z, {
    GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS: (e) => {
        let { roleId: t, roleConnectionConfigurations: l } = e;
        s.set(t, l);
    },
});
