n.d(t, {
    A: () => c,
});
var r,
    i,
    l = n(311907),
    o = n(73153);
let a = [];
class s extends (i = l.Ay.Store) {
    getEligibleGuildsForNagActivate() {
        return a;
    }
}
(r = "displayName") in s
    ? Object.defineProperty(s, r, {
          value: "CreatorMonetizationMarketingStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (s[r] = "CreatorMonetizationMarketingStore");
let c = new s(o.h, {
    CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY_FETCH_SUCCESS: function (e) {
        let { eligibleGuilds: t } = e;
        a = t;
    },
});
