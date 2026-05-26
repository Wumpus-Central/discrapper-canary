"use strict";
n.d(t, { A: () => l });
var i = n(17928),
    r = n(228366),
    s = n(71393);
let a = new Map();
class o extends i.Ay.Store {
    static displayName = "GuildRoleConnectionsConfigurationStore";
    initialize() {
        this.waitFor(s.A);
    }
    getGuildRoleConnectionsConfiguration(e) {
        return a.get(e);
    }
}
let l = new o(r.h, {
    GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS: (e) => {
        let { roleId: t, roleConnectionConfigurations: n } = e;
        a.set(t, n);
    },
});
