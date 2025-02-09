n.d(t, { Z: () => u }), n(47120);
var a,
    o,
    i,
    r = n(442837),
    s = n(570140);
let l = new Map();
class c extends (a = r.ZP.Store) {
    getGuildRoleConnectionEligibility(e) {
        return null != e ? l.get(e) : void 0;
    }
}
(i = 'GuildRoleConnectionEligibilityStore'),
    (o = 'displayName') in c
        ? Object.defineProperty(c, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (c[o] = i);
let u = new c(s.Z, {
    GUILD_ROLE_CONNECTION_ELIGIBILITY_FETCH_SUCCESS: (e) => {
        let { roleId: t, roleConnectionEligibility: n } = e;
        l.set(t, n);
    }
});
