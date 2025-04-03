n.d(t, { Z: () => u }), n(47120);
var r,
    i,
    s,
    a = n(442837),
    l = n(570140),
    o = n(430824);
let c = new Map();
class d extends (r = a.ZP.Store) {
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
let u = new d(l.Z, {
    GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS: (e) => {
        let { roleId: t, roleConnectionConfigurations: n } = e;
        c.set(t, n);
    }
});
