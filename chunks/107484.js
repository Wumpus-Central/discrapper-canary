n.d(t, { Z: () => c }), n(47120);
var i,
    r = n(442837),
    a = n(570140);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let o = new Map(),
    l = (e) => {
        let { roleId: t, roleConnectionEligibility: n } = e;
        o.set(t, n);
    };
class u extends (i = r.ZP.Store) {
    getGuildRoleConnectionEligibility(e) {
        return null != e ? o.get(e) : void 0;
    }
}
s(u, 'displayName', 'GuildRoleConnectionEligibilityStore');
let c = new u(a.Z, { GUILD_ROLE_CONNECTION_ELIGIBILITY_FETCH_SUCCESS: l });
