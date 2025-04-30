n.d(t, { Z: () => u }), n(388685);
var r,
    o,
    a,
    i = n(442837),
    l = n(570140);
let s = new Map();
class c extends (r = i.ZP.Store) {
    getGuildRoleConnectionEligibility(e) {
        return null != e ? s.get(e) : void 0;
    }
}
(a = 'GuildRoleConnectionEligibilityStore'),
    (o = 'displayName') in c
        ? Object.defineProperty(c, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (c[o] = a);
let u = new c(l.Z, {
    GUILD_ROLE_CONNECTION_ELIGIBILITY_FETCH_SUCCESS: (e) => {
        let { roleId: t, roleConnectionEligibility: n } = e;
        s.set(t, n);
    }
});
