"use strict";
n.d(t, { A: () => o });
var i = n(311907),
    s = n(73153),
    l = n(71393);
let r = new Map();
class a extends i.Ay.Store {
    static displayName = "GuildRoleConnectionsConfigurationStore";
    initialize() {
        this.waitFor(l.A);
    }
    getGuildRoleConnectionsConfiguration(e) {
        return r.get(e);
    }
}
let o = new a(s.h, {
    GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS: (e) => {
        let { roleId: t, roleConnectionConfigurations: n } = e;
        r.set(t, n);
    },
});
