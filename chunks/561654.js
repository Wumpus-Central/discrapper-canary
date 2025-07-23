(l.d(t, { Z: () => E }), l(388685));
var r,
    n,
    o,
    i = l(442837),
    a = l(570140),
    s = l(430824);
let u = new Map();
class c extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(s.Z);
    }
    getGuildRoleConnectionsConfiguration(e) {
        return u.get(e);
    }
}
((o = 'GuildRoleConnectionsConfigurationStore'),
    (n = 'displayName') in c
        ? Object.defineProperty(c, n, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (c[n] = o));
let E = new c(a.Z, {
    GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS: (e) => {
        let { roleId: t, roleConnectionConfigurations: l } = e;
        u.set(t, l);
    }
});
