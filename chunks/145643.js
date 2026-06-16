n.d(t, { A: () => E });
var i = n(17928),
    l = n(228366),
    r = n(71393);
let s = new Map();
class a extends i.Ay.Store {
    static displayName = "GuildRoleConnectionsConfigurationStore";
    initialize() {
        this.waitFor(r.A);
    }
    getGuildRoleConnectionsConfiguration(e) {
        return s.get(e);
    }
}
let E = new a(l.h, {
    GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS: (e) => {
        let { roleId: t, roleConnectionConfigurations: n } = e;
        s.set(t, n);
    },
});
