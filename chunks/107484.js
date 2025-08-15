n.d(t, { Z: () => c }), n(388685);
var r,
    l,
    o = n(442837),
    i = n(570140);
let a = new Map();
class s extends (r = o.ZP.Store) {
    getGuildRoleConnectionEligibility(e) {
        return null != e ? a.get(e) : void 0;
    }
}
(l = "displayName") in s
    ? Object.defineProperty(s, l, {
          value: "GuildRoleConnectionEligibilityStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (s[l] = "GuildRoleConnectionEligibilityStore");
let c = new s(i.Z, {
    GUILD_ROLE_CONNECTION_ELIGIBILITY_FETCH_SUCCESS: (e) => {
        let { roleId: t, roleConnectionEligibility: n } = e;
        a.set(t, n);
    },
});
