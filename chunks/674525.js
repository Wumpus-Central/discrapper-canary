n.d(t, { Z: () => u });
var r,
    i,
    l,
    o = n(442837),
    a = n(570140);
let s = [];
class c extends (l = o.ZP.Store) {
    getEligibleGuildsForNagActivate() {
        return s;
    }
}
(i = 'CreatorMonetizationMarketingStore'),
    (r = 'displayName') in c
        ? Object.defineProperty(c, r, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (c[r] = i);
let u = new c(a.Z, {
    CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY_FETCH_SUCCESS: function (e) {
        let { eligibleGuilds: t } = e;
        s = t;
    }
});
