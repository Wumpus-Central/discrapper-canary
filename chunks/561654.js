n(47120);
var i,
    r,
    l,
    a,
    s = n(442837),
    o = n(570140),
    c = n(430824);
let d = new Map();
class u extends (i = s.ZP.Store) {
    initialize() {
        this.waitFor(c.Z);
    }
    getGuildRoleConnectionsConfiguration(e) {
        return d.get(e);
    }
}
(a = 'GuildRoleConnectionsConfigurationStore'),
    (l = 'displayName') in (r = u)
        ? Object.defineProperty(r, l, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[l] = a),
    (t.Z = new u(o.Z, {
        GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS: (e) => {
            let { roleId: t, roleConnectionConfigurations: n } = e;
            d.set(t, n);
        }
    }));
