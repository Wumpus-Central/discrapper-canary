"use strict";
n.d(t, { KD: () => f, ME: () => d, Sm: () => _, Z1: () => a, oS: () => s });
var r = n(967245),
    i = n(652215);
function s() {
    let { isUserEligibleForCreatorMonetization: e } = r.i.useExperiment(
        { location: "e3bb71_1" },
        { autoTrackExposure: !1 },
    );
    return e;
}
function a() {
    let { isUserEligibleForCreatorMonetization: e } = r.i.getCurrentConfig(
        { location: "e3bb71_2" },
        { autoTrackExposure: !1 },
    );
    return e;
}
function o(e) {
    return null != e;
}
function l(e) {
    return null != e;
}
function u(e) {
    return null != e && e.features.has(i.GuildFeatures.CREATOR_MONETIZABLE_WHITEGLOVE);
}
function c(e) {
    return null != e && e.features.has(i.GuildFeatures.CREATOR_MONETIZABLE_WHITEGLOVE);
}
function d(e) {
    let t = o(e?.id),
        n = u(e);
    return t || n;
}
function _(e) {
    return l(e?.id) || c(e);
}
function f() {
    let { enableCreatorMonetizationNagActivateForUser: e } = r.w.getCurrentConfig(
        { location: "e3bb71_11" },
        { autoTrackExposure: !0 },
    );
    return e;
}
