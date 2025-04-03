n.d(t, { Z: () => u }), n(47120);
var r,
    o,
    a,
    i = n(442837),
    s = n(570140);
let c = new Map();
class l extends (r = i.ZP.Store) {
    getGuildRoleConnectionEligibility(e) {
        return null != e ? c.get(e) : void 0;
    }
}
(a = 'GuildRoleConnectionEligibilityStore'),
    (o = 'displayName') in l
        ? Object.defineProperty(l, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (l[o] = a);
let u = new l(s.Z, {
    GUILD_ROLE_CONNECTION_ELIGIBILITY_FETCH_SUCCESS: (e) => {
        let { roleId: t, roleConnectionEligibility: n } = e;
        c.set(t, n);
    }
});
