var i = n(855986),
    r = n(73153),
    l = n(71393);
let E = new Map();
class a extends i.Ay.Store {
    static displayName = "GuildRoleConnectionsConfigurationStore";
    initialize() {
        this.waitFor(l.A);
    }
    getGuildRoleConnectionsConfiguration(e) {
        return E.get(e);
    }
}
let d = new a(r.h, {
    GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS: function (e) {
        let { roleId: t, roleConnectionConfigurations: n } = e;
        E.set(t, n);
    },
});
n.d(t, {}, { A: d });
