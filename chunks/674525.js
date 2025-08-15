n.d(t, { Z: () => s });
var r,
    i,
    l = n(442837),
    a = n(570140);
let o = [];
class c extends (i = l.ZP.Store) {
    getEligibleGuildsForNagActivate() {
        return o;
    }
}
(r = "displayName") in c
    ? Object.defineProperty(c, r, {
          value: "CreatorMonetizationMarketingStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (c[r] = "CreatorMonetizationMarketingStore");
let s = new c(a.Z, {
    CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY_FETCH_SUCCESS: function (e) {
        let { eligibleGuilds: t } = e;
        o = t;
    },
});
