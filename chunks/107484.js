n.d(t, { Z: () => u }), n(388685);
var r,
    i = n(442837),
    a = n(570140);
function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let s = new Map(),
    l = (e) => {
        let { roleId: t, roleConnectionEligibility: n } = e;
        s.set(t, n);
    };
class c extends (r = i.ZP.Store) {
    getGuildRoleConnectionEligibility(e) {
        return null != e ? s.get(e) : void 0;
    }
}
o(c, "displayName", "GuildRoleConnectionEligibilityStore");
let u = new c(a.Z, { GUILD_ROLE_CONNECTION_ELIGIBILITY_FETCH_SUCCESS: l });
