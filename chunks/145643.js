"use strict";
n.d(t, { A: () => o });
var i = n(311907),
    r = n(73153),
    l = n(71393);
let s = new Map();
class a extends i.Ay.Store {
    static displayName = "GuildRoleConnectionsConfigurationStore";
    initialize() {
        this.waitFor(l.A);
    }
    getGuildRoleConnectionsConfiguration(e) {
        return s.get(e);
    }
}
let o = new a(r.h, {
    GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS: (e) => {
        let { roleId: t, roleConnectionConfigurations: n } = e;
        s.set(t, n);
    },
});
