n.d(t, { A: () => u });
var r,
    i = n(311907),
    a = n(73153);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let o = [];
function l(e) {
    let { eligibleGuilds: t } = e;
    o = t;
}
class c extends (r = i.Ay.Store) {
    getEligibleGuildsForNagActivate() {
        return o;
    }
}
s(c, "displayName", "CreatorMonetizationMarketingStore");
let u = new c(a.h, { CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY_FETCH_SUCCESS: l });
