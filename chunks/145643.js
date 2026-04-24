n.d(t, { A: () => s });
var i = n(17928),
    l = n(228366),
    r = n(71393);
let a = new Map();
class o extends i.Ay.Store {
    static displayName = "GuildRoleConnectionsConfigurationStore";
    initialize() {
        this.waitFor(r.A);
    }
    getGuildRoleConnectionsConfiguration(e) {
        return a.get(e);
    }
}
let s = new o(l.h, {
    GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS: (e) => {
        let { roleId: t, roleConnectionConfigurations: n } = e;
        a.set(t, n);
    },
});
