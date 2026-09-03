n.d(t, { ME: () => u, Z1: () => c, oS: () => d });
var i = n(17928),
    r = n(287809),
    a = n(615405),
    s = n(652215);
let l = new Set(["US"]);
function o() {
    return r.default.getCurrentUser()?.storeCountry?.country ?? a.A.ipCountryCode;
}
function d() {
    return (0, i.bG)([r.default, a.A], () => {
        let e = o();
        return null != e && l.has(e);
    });
}
function c() {
    let e = o();
    return null != e && l.has(e);
}
function u(e) {
    let t = null != e?.id,
        n = null != e && e.features.has(s.GuildFeatures.CREATOR_MONETIZABLE_WHITEGLOVE);
    return t || n;
}
