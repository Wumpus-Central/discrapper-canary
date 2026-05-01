l.d(t, { A: () => u });
var n = l(17928),
    i = l(228366),
    r = l(71393);
let s = new Map();
class a extends n.Ay.Store {
    static displayName = "GuildRoleConnectionsConfigurationStore";
    initialize() {
        this.waitFor(r.A);
    }
    getGuildRoleConnectionsConfiguration(e) {
        return s.get(e);
    }
}
let u = new a(i.h, {
    GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS: (e) => {
        let { roleId: t, roleConnectionConfigurations: l } = e;
        s.set(t, l);
    },
});
