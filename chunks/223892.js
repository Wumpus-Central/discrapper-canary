n.d(t, {
    DB: () => o,
    Lm: () => m,
    Ob: () => d,
    Rw: () => f,
    Sd: () => a,
    Vm: () => h,
    gS: () => p,
    mG: () => _,
});
var r = n(586072),
    i = n(981631);
function a() {
    let { isUserEligibleForCreatorMonetization: e } = r.bT.useExperiment(
        { location: "e3bb71_1" },
        { autoTrackExposure: !1 },
    );
    return e;
}
function o() {
    let { isUserEligibleForCreatorMonetization: e } = r.bT.getCurrentConfig(
        { location: "e3bb71_2" },
        { autoTrackExposure: !1 },
    );
    return e;
}
function s(e) {
    return null != e;
}
function l(e) {
    return null != e;
}
function c(e) {
    return null != e && e.features.has(i.GuildFeatures.CREATOR_MONETIZABLE_WHITEGLOVE);
}
function u(e) {
    return null != e && e.features.has(i.GuildFeatures.CREATOR_MONETIZABLE_WHITEGLOVE);
}
function d(e) {
    let t = s(null == e ? void 0 : e.id),
        n = c(e);
    return t || n;
}
function f(e) {
    return l(null == e ? void 0 : e.id) || u(e);
}
function p(e) {
    let { enableWaitlist: t } = r.IW.useExperiment(
        {
            guildId: null != e ? e : i.lds,
            location: "e3bb71_9",
        },
        { autoTrackExposure: !1 },
    );
    return t;
}
function _(e) {
    let { enableWaitlist: t } = r.IW.getCurrentConfig({
        guildId: null != e ? e : i.lds,
        location: "e3bb71_10",
    });
    return t;
}
function m() {
    let { enableCreatorMonetizationNagActivateForUser: e } = r.aC.getCurrentConfig(
        { location: "e3bb71_11" },
        { autoTrackExposure: !0 },
    );
    return e;
}
function h(e) {
    let { hideMonetizatonOnboardingInServerSettings: t } = r.kR.getCurrentConfig(
        {
            guildId: null != e ? e : i.lds,
            location: "e3bb71_12",
        },
        { autoTrackExposure: !1 },
    );
    return t;
}
