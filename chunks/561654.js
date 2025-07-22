(r.d(t, { Z: () => d }), r(388685));
var l,
    n,
    o,
    i = r(442837),
    a = r(570140),
    s = r(430824);
let u = new Map();
class c extends (l = i.ZP.Store) {
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
let d = new c(a.Z, {
    GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS: (e) => {
        let { roleId: t, roleConnectionConfigurations: r } = e;
        u.set(t, r);
    }
});
