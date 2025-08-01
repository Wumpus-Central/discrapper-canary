n.d(t, { Z: () => u });
var r,
    i,
    l,
    a = n(442837),
    o = n(570140);
let s = [];
class c extends (l = a.ZP.Store) {
    getEligibleGuildsForNagActivate() {
        return s;
    }
}
((i = 'CreatorMonetizationMarketingStore'),
    (r = 'displayName') in c
        ? Object.defineProperty(c, r, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (c[r] = i));
let u = new c(o.Z, {
    CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY_FETCH_SUCCESS: function (e) {
        let { eligibleGuilds: t } = e;
        s = t;
    }
});
