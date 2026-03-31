"use strict";
n.d(t, { KD: () => h, ME: () => p, Z1: () => d, oS: () => c });
var r = n(311907),
    i = n(287809),
    s = n(615405),
    a = n(967245),
    o = n(652215);
let l = new Set(["US"]);
function u() {
    return i.default.getCurrentUser()?.storeCountry?.country ?? s.A.ipCountryCode;
}
function c() {
    return (0, r.bG)([i.default, s.A], () => {
        let e = u();
        return null != e && l.has(e);
    });
}
function d() {
    let e = u();
    return null != e && l.has(e);
}
function _(e) {
    return null != e;
}
function f(e) {
    return null != e && e.features.has(o.GuildFeatures.CREATOR_MONETIZABLE_WHITEGLOVE);
}
function p(e) {
    let t = _(e?.id),
        n = f(e);
    return t || n;
}
function h() {
    let { enableCreatorMonetizationNagActivateForUser: e } = a.w.getCurrentConfig(
        { location: "e3bb71_11" },
        { autoTrackExposure: !0 },
    );
    return e;
}
