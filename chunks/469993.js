"use strict";
n.d(t, { KD: () => h, Kw: () => p, Li: () => f, ME: () => d, Sm: () => _, Z1: () => s, oS: () => a });
var r = n(967245),
    i = n(652215);
function a() {
    let { isUserEligibleForCreatorMonetization: e } = r.i$.useExperiment(
        { location: "e3bb71_1" },
        { autoTrackExposure: !1 },
    );
    return e;
}
function s() {
    let { isUserEligibleForCreatorMonetization: e } = r.i$.getCurrentConfig(
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
function f(e) {
    let { enableWaitlist: t } = r.xQ.useExperiment(
        { guildId: e ?? i.dJq, location: "e3bb71_9" },
        { autoTrackExposure: !1 },
    );
    return t;
}
function p(e) {
    let { enableWaitlist: t } = r.xQ.getCurrentConfig({ guildId: e ?? i.dJq, location: "e3bb71_10" });
    return t;
}
function h() {
    let { enableCreatorMonetizationNagActivateForUser: e } = r.wm.getCurrentConfig(
        { location: "e3bb71_11" },
        { autoTrackExposure: !0 },
    );
    return e;
}
