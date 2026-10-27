n.d(t, { A: () => d });
var i = n(17928),
    a = n(73153),
    l = n(71393);
let r = new Map();
class s extends i.Ay.Store {
    static displayName = "GuildRoleConnectionsConfigurationStore";
    initialize() {
        this.waitFor(l.A);
    }
    getGuildRoleConnectionsConfiguration(e) {
        return r.get(e);
    }
}
let d = new s(a.h, {
    GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS: function (e) {
        let { roleId: t, roleConnectionConfigurations: n } = e;
        r.set(t, n);
    },
});
