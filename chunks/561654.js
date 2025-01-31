n.d(t, { Z: () => u }), n(47120);
var i,
    r,
    l,
    s = n(442837),
    a = n(570140),
    o = n(430824);
let c = new Map();
class d extends (i = s.ZP.Store) {
    initialize() {
        this.waitFor(o.Z);
    }
    getGuildRoleConnectionsConfiguration(e) {
        return c.get(e);
    }
}
(l = 'GuildRoleConnectionsConfigurationStore'),
    (r = 'displayName') in d
        ? Object.defineProperty(d, r, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (d[r] = l);
let u = new d(a.Z, {
    GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS: (e) => {
        let { roleId: t, roleConnectionConfigurations: n } = e;
        c.set(t, n);
    }
});
