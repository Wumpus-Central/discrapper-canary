n.d(t, { Z: () => u });
var i,
    l,
    r,
    a = n(442837),
    s = n(570140);
let o = [];
class c extends (r = a.ZP.Store) {
    getEligibleGuildsForNagActivate() {
        return o;
    }
}
(l = 'CreatorMonetizationMarketingStore'),
    (i = 'displayName') in c
        ? Object.defineProperty(c, i, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (c[i] = l);
let u = new c(s.Z, {
    CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY_FETCH_SUCCESS: function (e) {
        let { eligibleGuilds: t } = e;
        o = t;
    }
});
