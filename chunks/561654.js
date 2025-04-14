n.d(t, { Z: () => u }), n(388685);
var r,
    i,
    s,
    l = n(442837),
    a = n(570140),
    o = n(430824);
let c = new Map();
class d extends (r = l.ZP.Store) {
    initialize() {
        this.waitFor(o.Z);
    }
    getGuildRoleConnectionsConfiguration(e) {
        return c.get(e);
    }
}
(s = 'GuildRoleConnectionsConfigurationStore'),
    (i = 'displayName') in d
        ? Object.defineProperty(d, i, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (d[i] = s);
let u = new d(a.Z, {
    GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS: (e) => {
        let { roleId: t, roleConnectionConfigurations: n } = e;
        c.set(t, n);
    }
});
