n.d(t, { Z: () => u });
var r,
    i,
    l,
    o = n(442837),
    a = n(570140);
let c = [];
class s extends (l = o.ZP.Store) {
    getEligibleGuildsForNagActivate() {
        return c;
    }
}
(i = 'CreatorMonetizationMarketingStore'),
    (r = 'displayName') in s
        ? Object.defineProperty(s, r, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (s[r] = i);
let u = new s(a.Z, {
    CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY_FETCH_SUCCESS: function (e) {
        let { eligibleGuilds: t } = e;
        c = t;
    }
});
