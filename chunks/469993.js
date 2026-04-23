n.d(t, { ME: () => d, Z1: () => E, oS: () => o });
var i = n(17928),
    r = n(287809),
    a = n(615405),
    s = n(652215);
let _ = new Set(["US"]);
function l() {
    return r.default.getCurrentUser()?.storeCountry?.country ?? a.A.ipCountryCode;
}
function o() {
    return (0, i.bG)([r.default, a.A], () => {
        let e = l();
        return null != e && _.has(e);
    });
}
function E() {
    let e = l();
    return null != e && _.has(e);
}
function d(e) {
    let t = null != e?.id,
        n = null != e && e.features.has(s.GuildFeatures.CREATOR_MONETIZABLE_WHITEGLOVE);
    return t || n;
}
