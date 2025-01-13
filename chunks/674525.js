var i,
    r,
    l,
    a,
    o = n(442837),
    s = n(570140);
let c = [];
class d extends (a = o.ZP.Store) {
    getEligibleGuildsForNagActivate() {
        return c;
    }
}
(l = 'CreatorMonetizationMarketingStore'),
    (r = 'displayName') in (i = d)
        ? Object.defineProperty(i, r, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[r] = l),
    (t.Z = new d(s.Z, {
        CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY_FETCH_SUCCESS: function (e) {
            let { eligibleGuilds: t } = e;
            c = t;
        }
    }));
