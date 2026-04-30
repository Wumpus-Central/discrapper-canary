n.d(t, { ME: () => E, Z1: () => _, oS: () => c });
var i = n(17928),
    a = n(546605),
    r = n(287809),
    s = n(615405),
    l = n(652215);
let o = new Set(["US"]);
function d() {
    return (0, a.wy)("CreatorMonetizationEligibility")
        ? (r.default.getCurrentUser()?.storeCountry?.country ?? s.A.ipCountryCode)
        : s.A.ipCountryCode;
}
function c() {
    return (0, i.bG)([r.default, s.A], () => {
        let e = d();
        return null != e && o.has(e);
    });
}
function _() {
    let e = d();
    return null != e && o.has(e);
}
function E(e) {
    let t = null != e?.id,
        n = null != e && e.features.has(l.GuildFeatures.CREATOR_MONETIZABLE_WHITEGLOVE);
    return t || n;
}
