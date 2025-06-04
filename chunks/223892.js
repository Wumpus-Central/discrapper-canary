n.d(t, {
    DB: () => a,
    Lm: () => h,
    Ob: () => d,
    Rw: () => f,
    Sd: () => o,
    gS: () => _,
    mG: () => p
});
var r = n(586072),
    i = n(981631);
function o() {
    let { isUserEligibleForCreatorMonetization: e } = r.bT.useExperiment({ location: 'e3bb71_1' }, { autoTrackExposure: !1 });
    return e;
}
function a() {
    let { isUserEligibleForCreatorMonetization: e } = r.bT.getCurrentConfig({ location: 'e3bb71_2' }, { autoTrackExposure: !1 });
    return e;
}
function s(e) {
    let { enableFastMonetizationOnboardingForGuild: t } = r.z.useExperiment(
            {
                guildId: null != e ? e : i.lds,
                location: 'e3bb71_3'
            },
            { autoTrackExposure: !0 }
        ),
        { enableFastMonetizationOnboardingForUser: n } = r.AC.useExperiment({ location: 'e3bb71_4' }, { autoTrackExposure: !1 });
    return null != e && t && n;
}
function l(e) {
    let { enableFastMonetizationOnboardingForGuild: t } = r.z.getCurrentConfig({
            guildId: null != e ? e : i.lds,
            location: 'e3bb71_5'
        }),
        { enableFastMonetizationOnboardingForUser: n } = r.AC.getCurrentConfig({ location: 'e3bb71_6' });
    return null != e && t && n;
}
function c(e) {
    let { enableFastMonetizationOnboardingForUser: t } = r.AC.useExperiment({ location: 'e3bb71_7' }, { autoTrackExposure: !1 });
    return null != e && e.hasFeature(i.oNc.CREATOR_MONETIZABLE_WHITEGLOVE) && t;
}
function u(e) {
    let { enableFastMonetizationOnboardingForUser: t } = r.AC.getCurrentConfig({ location: 'e3bb71_8' });
    return null != e && e.hasFeature(i.oNc.CREATOR_MONETIZABLE_WHITEGLOVE) && t;
}
function d(e) {
    let t = s(null == e ? void 0 : e.id),
        n = c(e);
    return t || n;
}
function f(e) {
    return l(null == e ? void 0 : e.id) || u(e);
}
function _(e) {
    let { enableWaitlist: t } = r.IW.useExperiment(
        {
            guildId: null != e ? e : i.lds,
            location: 'e3bb71_9'
        },
        { autoTrackExposure: !1 }
    );
    return t;
}
function p(e) {
    let { enableWaitlist: t } = r.IW.getCurrentConfig({
        guildId: null != e ? e : i.lds,
        location: 'e3bb71_10'
    });
    return t;
}
function h() {
    let { enableCreatorMonetizationNagActivateForUser: e } = r.aC.getCurrentConfig({ location: 'e3bb71_11' }, { autoTrackExposure: !0 });
    return e;
}
