n.d(t, { A: () => d }), n(896048);
var r,
    i,
    l = n(311907),
    s = n(73153),
    a = n(71393);
let c = new Map();
class o extends (r = l.Ay.Store) {
    initialize() {
        this.waitFor(a.A);
    }
    getGuildRoleConnectionsConfiguration(e) {
        return c.get(e);
    }
}
(i = "displayName") in o
    ? Object.defineProperty(o, i, {
          value: "GuildRoleConnectionsConfigurationStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (o[i] = "GuildRoleConnectionsConfigurationStore");
let d = new o(s.h, {
    GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS: (e) => {
        let { roleId: t, roleConnectionConfigurations: n } = e;
        c.set(t, n);
    },
});
