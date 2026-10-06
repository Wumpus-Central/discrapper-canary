n.d(t, { A: () => s });
var i = n(17928),
    l = n(73153),
    a = n(71393);
let r = new Map();
class E extends i.Ay.Store {
    static displayName = "GuildRoleConnectionsConfigurationStore";
    initialize() {
        this.waitFor(a.A);
    }
    getGuildRoleConnectionsConfiguration(e) {
        return r.get(e);
    }
}
let s = new E(l.h, {
    GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS: function (e) {
        let { roleId: t, roleConnectionConfigurations: n } = e;
        r.set(t, n);
    },
});
