n.d(t, { Z: () => u });
var r,
    i = n(442837),
    o = n(570140);
function a(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let s = [];
function l(e) {
    let { eligibleGuilds: t } = e;
    s = t;
}
class c extends (r = i.ZP.Store) {
    getEligibleGuildsForNagActivate() {
        return s;
    }
}
a(c, 'displayName', 'CreatorMonetizationMarketingStore');
let u = new c(o.Z, { CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY_FETCH_SUCCESS: l });
