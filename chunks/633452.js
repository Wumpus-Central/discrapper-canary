"use strict";
n.d(t, { A: () => l });
var r = n(311907),
    i = n(73153);
let a = new Map(),
    s = (e) => {
        let { roleId: t, roleConnectionEligibility: n } = e;
        a.set(t, n);
    };
class o extends r.Ay.Store {
    static displayName = "GuildRoleConnectionEligibilityStore";
    getGuildRoleConnectionEligibility(e) {
        return null != e ? a.get(e) : void 0;
    }
}
let l = new o(i.h, { GUILD_ROLE_CONNECTION_ELIGIBILITY_FETCH_SUCCESS: s });
