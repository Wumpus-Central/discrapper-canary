n.d(t, {
    DB: () => s,
    Lm: () => h,
    Ob: () => d,
    Rw: () => f,
    Sd: () => a,
    gS: () => _,
    mG: () => p
});
var i = n(586072),
    r = n(981631);
function a() {
    let { isUserEligibleForCreatorMonetization: e } = i.bT.useExperiment({ location: 'e3bb71_1' }, { autoTrackExposure: !1 });
    return e;
}
function s() {
    let { isUserEligibleForCreatorMonetization: e } = i.bT.getCurrentConfig({ location: 'e3bb71_2' }, { autoTrackExposure: !1 });
    return e;
}
function o(e) {
    let { enableFastMonetizationOnboardingForGuild: t } = i.z.useExperiment(
            {
                guildId: null != e ? e : r.lds,
                location: 'e3bb71_3'
            },
            { autoTrackExposure: !0 }
        ),
        { enableFastMonetizationOnboardingForUser: n } = i.AC.useExperiment({ location: 'e3bb71_4' }, { autoTrackExposure: !1 });
    return null != e && t && n;
}
function l(e) {
    let { enableFastMonetizationOnboardingForGuild: t } = i.z.getCurrentConfig({
            guildId: null != e ? e : r.lds,
            location: 'e3bb71_5'
        }),
        { enableFastMonetizationOnboardingForUser: n } = i.AC.getCurrentConfig({ location: 'e3bb71_6' });
    return null != e && t && n;
}
function u(e) {
    let { enableFastMonetizationOnboardingForUser: t } = i.AC.useExperiment({ location: 'e3bb71_7' }, { autoTrackExposure: !1 });
    return null != e && e.hasFeature(r.oNc.CREATOR_MONETIZABLE_WHITEGLOVE) && t;
}
function c(e) {
    let { enableFastMonetizationOnboardingForUser: t } = i.AC.getCurrentConfig({ location: 'e3bb71_8' });
    return null != e && e.hasFeature(r.oNc.CREATOR_MONETIZABLE_WHITEGLOVE) && t;
}
function d(e) {
    let t = o(null == e ? void 0 : e.id),
        n = u(e);
    return t || n;
}
function f(e) {
    return l(null == e ? void 0 : e.id) || c(e);
}
function _(e) {
    let { enableWaitlist: t } = i.IW.useExperiment(
        {
            guildId: null != e ? e : r.lds,
            location: 'e3bb71_9'
        },
        { autoTrackExposure: !1 }
    );
    return t;
}
function p(e) {
    let { enableWaitlist: t } = i.IW.getCurrentConfig({
        guildId: null != e ? e : r.lds,
        location: 'e3bb71_10'
    });
    return t;
}
function h() {
    let { enableCreatorMonetizationNagActivateForUser: e } = i.aC.getCurrentConfig({ location: 'e3bb71_11' }, { autoTrackExposure: !0 });
    return e;
}
