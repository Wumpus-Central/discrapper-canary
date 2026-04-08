"use strict";
n.d(t, { ME: () => f, Z1: () => c, oS: () => u });
var r = n(311907),
    i = n(287809),
    s = n(615405),
    a = n(652215);
let o = new Set(["US"]);
function l() {
    return i.default.getCurrentUser()?.storeCountry?.country ?? s.A.ipCountryCode;
}
function u() {
    return (0, r.bG)([i.default, s.A], () => {
        let e = l();
        return null != e && o.has(e);
    });
}
function c() {
    let e = l();
    return null != e && o.has(e);
}
function d(e) {
    return null != e;
}
function _(e) {
    return null != e && e.features.has(a.GuildFeatures.CREATOR_MONETIZABLE_WHITEGLOVE);
}
function f(e) {
    let t = d(e?.id),
        n = _(e);
    return t || n;
}
