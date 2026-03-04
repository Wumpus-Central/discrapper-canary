"use strict";
n.d(t, { A: () => a });
var i = n(311907),
    r = n(73153);
let l = [];
class s extends i.Ay.Store {
    static displayName = "CreatorMonetizationMarketingStore";
    getEligibleGuildsForNagActivate() {
        return l;
    }
}
let a = new s(r.h, {
    CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY_FETCH_SUCCESS: function (e) {
        let { eligibleGuilds: t } = e;
        l = t;
    },
});
