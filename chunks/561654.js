(n.d(t, { Z: () => d }), n(388685));
var r,
    i = n(442837),
    a = n(570140),
    o = n(430824);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let l = new Map(),
    c = (e) => {
        let { roleId: t, roleConnectionConfigurations: n } = e;
        l.set(t, n);
    };
class u extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(o.Z);
    }
    getGuildRoleConnectionsConfiguration(e) {
        return l.get(e);
    }
}
s(u, 'displayName', 'GuildRoleConnectionsConfigurationStore');
let d = new u(a.Z, { GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS: c });
