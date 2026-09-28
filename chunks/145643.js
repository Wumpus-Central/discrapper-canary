n.d(t, { A: () => o });
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
let o = new a(l.h, {
    GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS: function (e) {
        let { roleId: t, roleConnectionConfigurations: n } = e;
        s.set(t, n);
    },
});
