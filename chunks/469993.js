"use strict";
n.d(t, { KD: () => f, ME: () => _, Z1: () => u, oS: () => l });
var r = n(311907),
    i = n(287809),
    s = n(967245),
    a = n(652215);
let o = new Set(["US"]);
function l() {
    return (0, r.bG)([i.default], () => {
        let e = i.default.getCurrentUser()?.storeCountry?.country;
        return null != e && o.has(e);
    });
}
function u() {
    let e = i.default.getCurrentUser()?.storeCountry?.country;
    return null != e && o.has(e);
}
function c(e) {
    return null != e;
}
function d(e) {
    return null != e && e.features.has(a.GuildFeatures.CREATOR_MONETIZABLE_WHITEGLOVE);
}
function _(e) {
    let t = c(e?.id),
        n = d(e);
    return t || n;
}
function f() {
    let { enableCreatorMonetizationNagActivateForUser: e } = s.w.getCurrentConfig(
        { location: "e3bb71_11" },
        { autoTrackExposure: !0 },
    );
    return e;
}
