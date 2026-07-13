"use strict";
n.d(t, { A: () => o });
var i = n(17928),
    r = n(228366),
    a = n(71393);
let s = new Map();
class l extends i.Ay.Store {
    static displayName = "GuildRoleConnectionsConfigurationStore";
    initialize() {
        this.waitFor(a.A);
    }
    getGuildRoleConnectionsConfiguration(e) {
        return s.get(e);
    }
}
let o = new l(r.h, {
    GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS: function (e) {
        let { roleId: t, roleConnectionConfigurations: n } = e;
        s.set(t, n);
    },
});
