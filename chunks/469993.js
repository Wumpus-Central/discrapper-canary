"use strict";
n.d(t, { ME: () => _, Z1: () => d, oS: () => c });
var i = n(17928),
    r = n(546605),
    s = n(287809),
    a = n(615405),
    o = n(652215);
let l = new Set(["US"]);
function u() {
    return (0, r.wy)("CreatorMonetizationEligibility")
        ? (s.default.getCurrentUser()?.storeCountry?.country ?? a.A.ipCountryCode)
        : a.A.ipCountryCode;
}
function c() {
    return (0, i.bG)([s.default, a.A], () => {
        let e = u();
        return null != e && l.has(e);
    });
}
function d() {
    let e = u();
    return null != e && l.has(e);
}
function _(e) {
    let t = null != e?.id,
        n = null != e && e.features.has(o.GuildFeatures.CREATOR_MONETIZABLE_WHITEGLOVE);
    return t || n;
}
