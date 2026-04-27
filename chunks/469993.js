n.d(t, { ME: () => c, Z1: () => d, oS: () => E });
var i = n(17928),
    a = n(546605),
    r = n(287809),
    _ = n(615405),
    s = n(652215);
let l = new Set(["US"]);
function o() {
    return (0, a.wy)("CreatorMonetizationEligibility")
        ? (r.default.getCurrentUser()?.storeCountry?.country ?? _.A.ipCountryCode)
        : _.A.ipCountryCode;
}
function E() {
    return (0, i.bG)([r.default, _.A], () => {
        let e = o();
        return null != e && l.has(e);
    });
}
function d() {
    let e = o();
    return null != e && l.has(e);
}
function c(e) {
    let t = null != e?.id,
        n = null != e && e.features.has(s.GuildFeatures.CREATOR_MONETIZABLE_WHITEGLOVE);
    return t || n;
}
