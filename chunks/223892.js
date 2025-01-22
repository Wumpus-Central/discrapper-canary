r.d(n, {
    DB: function () {
        return s;
    },
    Lm: function () {
        return m;
    },
    Ob: function () {
        return f;
    },
    Rw: function () {
        return p;
    },
    Sd: function () {
        return o;
    },
    gS: function () {
        return h;
    },
    mG: function () {
        return _;
    }
});
var i = r(586072),
    a = r(981631);
function o() {
    let { isUserEligibleForCreatorMonetization: e } = i.bT.useExperiment({ location: 'e3bb71_1' }, { autoTrackExposure: !1 });
    return e;
}
function s() {
    let { isUserEligibleForCreatorMonetization: e } = i.bT.getCurrentConfig({ location: 'e3bb71_2' }, { autoTrackExposure: !1 });
    return e;
}
function l(e) {
    let { enableFastMonetizationOnboardingForGuild: n } = i.z.useExperiment(
            {
                guildId: null != e ? e : a.lds,
                location: 'e3bb71_3'
            },
            { autoTrackExposure: !0 }
        ),
        { enableFastMonetizationOnboardingForUser: r } = i.AC.useExperiment({ location: 'e3bb71_4' }, { autoTrackExposure: !1 });
    return null != e && n && r;
}
function u(e) {
    let { enableFastMonetizationOnboardingForGuild: n } = i.z.getCurrentConfig({
            guildId: null != e ? e : a.lds,
            location: 'e3bb71_5'
        }),
        { enableFastMonetizationOnboardingForUser: r } = i.AC.getCurrentConfig({ location: 'e3bb71_6' });
    return null != e && n && r;
}
function c(e) {
    let { enableFastMonetizationOnboardingForUser: n } = i.AC.useExperiment({ location: 'e3bb71_7' }, { autoTrackExposure: !1 });
    return null != e && e.hasFeature(a.oNc.CREATOR_MONETIZABLE_WHITEGLOVE) && n;
}
function d(e) {
    let { enableFastMonetizationOnboardingForUser: n } = i.AC.getCurrentConfig({ location: 'e3bb71_8' });
    return null != e && e.hasFeature(a.oNc.CREATOR_MONETIZABLE_WHITEGLOVE) && n;
}
function f(e) {
    let n = l(null == e ? void 0 : e.id),
        r = c(e);
    return n || r;
}
function p(e) {
    return u(null == e ? void 0 : e.id) || d(e);
}
function h(e) {
    let { enableWaitlist: n } = i.IW.useExperiment(
        {
            guildId: null != e ? e : a.lds,
            location: 'e3bb71_9'
        },
        { autoTrackExposure: !1 }
    );
    return n;
}
function _(e) {
    let { enableWaitlist: n } = i.IW.getCurrentConfig({
        guildId: null != e ? e : a.lds,
        location: 'e3bb71_10'
    });
    return n;
}
function m() {
    let { enableCreatorMonetizationNagActivateForUser: e } = i.aC.getCurrentConfig({ location: 'e3bb71_11' }, { autoTrackExposure: !0 });
    return e;
}
