"use strict";
n.d(t, { A: () => a });
var l = n(311907),
    s = n(73153);
let i = new Map();
class r extends l.Ay.Store {
    static displayName = "GuildRoleConnectionEligibilityStore";
    getGuildRoleConnectionEligibility(e) {
        return null != e ? i.get(e) : void 0;
    }
}
let a = new r(s.h, {
    GUILD_ROLE_CONNECTION_ELIGIBILITY_FETCH_SUCCESS: (e) => {
        let { roleId: t, roleConnectionEligibility: n } = e;
        i.set(t, n);
    },
});
