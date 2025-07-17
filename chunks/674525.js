n.d(t, { Z: () => u });
var i,
    r,
    l,
    o = n(442837),
    s = n(570140);
let a = [];
class c extends (l = o.ZP.Store) {
    getEligibleGuildsForNagActivate() {
        return a;
    }
}
((r = 'CreatorMonetizationMarketingStore'),
    (i = 'displayName') in c
        ? Object.defineProperty(c, i, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (c[i] = r));
let u = new c(s.Z, {
    CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY_FETCH_SUCCESS: function (e) {
        let { eligibleGuilds: t } = e;
        a = t;
    }
});
