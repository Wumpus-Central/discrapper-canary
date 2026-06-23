"use strict";
n.d(t, { ME: () => d, Z1: () => c, oS: () => u });
var i = n(17928),
    r = n(287809),
    s = n(615405),
    a = n(652215);
let o = new Set(["US"]);
function l() {
    return r.default.getCurrentUser()?.storeCountry?.country ?? s.A.ipCountryCode;
}
function u() {
    return (0, i.bG)([r.default, s.A], () => {
        let e = l();
        return null != e && o.has(e);
    });
}
function c() {
    let e = l();
    return null != e && o.has(e);
}
function d(e) {
    let t = null != e?.id,
        n = null != e && e.features.has(a.GuildFeatures.CREATOR_MONETIZABLE_WHITEGLOVE);
    return t || n;
}
