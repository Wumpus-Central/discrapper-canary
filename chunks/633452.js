n.d(t, {
    A: () => u,
}),
    n(896048);
var r,
    i = n(311907),
    a = n(73153);

function s(e, t, n) {
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
let o = new Map(),
    l = (e) => {
        let { roleId: t, roleConnectionEligibility: n } = e;
        o.set(t, n);
    };
class c extends (r = i.Ay.Store) {
    getGuildRoleConnectionEligibility(e) {
        return null != e ? o.get(e) : void 0;
    }
}
s(c, "displayName", "GuildRoleConnectionEligibilityStore");
let u = new c(a.h, {
    GUILD_ROLE_CONNECTION_ELIGIBILITY_FETCH_SUCCESS: l,
});
