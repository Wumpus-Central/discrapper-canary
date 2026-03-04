n.d(t, { A: () => s });
var i = n(311907),
    l = n(73153);
let r = [];
class a extends i.Ay.Store {
    static displayName = "CreatorMonetizationMarketingStore";
    getEligibleGuildsForNagActivate() {
        return r;
    }
}
let s = new a(l.h, {
    CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY_FETCH_SUCCESS: function (e) {
        let { eligibleGuilds: t } = e;
        r = t;
    },
});
