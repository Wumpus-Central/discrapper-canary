(n.d(t, { Z: () => u }), n(388685));
var r,
    o,
    l,
    i = n(442837),
    a = n(570140);
let s = new Map();
class c extends (r = i.ZP.Store) {
    getGuildRoleConnectionEligibility(e) {
        return null != e ? s.get(e) : void 0;
    }
}
((l = 'GuildRoleConnectionEligibilityStore'),
    (o = 'displayName') in c
        ? Object.defineProperty(c, o, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (c[o] = l));
let u = new c(a.Z, {
    GUILD_ROLE_CONNECTION_ELIGIBILITY_FETCH_SUCCESS: (e) => {
        let { roleId: t, roleConnectionEligibility: n } = e;
        s.set(t, n);
    }
});
