l.d(r, { Z: () => c }), l(388685);
var t,
    n,
    o = l(442837),
    i = l(570140),
    u = l(430824);
let a = new Map();
class _ extends (t = o.ZP.Store) {
    initialize() {
        this.waitFor(u.Z);
    }
    getGuildRoleConnectionsConfiguration(e) {
        return a.get(e);
    }
}
(n = "displayName") in _
    ? Object.defineProperty(_, n, {
          value: "GuildRoleConnectionsConfigurationStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (_[n] = "GuildRoleConnectionsConfigurationStore");
let c = new _(i.Z, {
    GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS: (e) => {
        let { roleId: r, roleConnectionConfigurations: l } = e;
        a.set(r, l);
    },
});
