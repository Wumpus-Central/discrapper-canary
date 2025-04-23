n.d(t, { Z: () => d }), n(388685);
var r,
    i,
    l,
    s = n(442837),
    a = n(570140),
    o = n(430824);
let c = new Map();
class u extends (r = s.ZP.Store) {
    initialize() {
        this.waitFor(o.Z);
    }
    getGuildRoleConnectionsConfiguration(e) {
        return c.get(e);
    }
}
(l = 'GuildRoleConnectionsConfigurationStore'),
    (i = 'displayName') in u
        ? Object.defineProperty(u, i, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (u[i] = l);
let d = new u(a.Z, {
    GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS: (e) => {
        let { roleId: t, roleConnectionConfigurations: n } = e;
        c.set(t, n);
    }
});
