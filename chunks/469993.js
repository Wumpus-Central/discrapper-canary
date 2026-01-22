n.d(t, {
    KD: () => h,
    Kw: () => _,
    Li: () => p,
    ME: () => d,
    Sm: () => f,
    Z1: () => s,
    Zy: () => m,
    oS: () => a,
});
var r = n(967245),
    i = n(652215);

function a() {
    let { isUserEligibleForCreatorMonetization: e } = r.i$.useExperiment(
        {
            location: "e3bb71_1",
        },
        {
            autoTrackExposure: !1,
        },
    );
    return e;
}

function s() {
    let { isUserEligibleForCreatorMonetization: e } = r.i$.getCurrentConfig(
        {
            location: "e3bb71_2",
        },
        {
            autoTrackExposure: !1,
        },
    );
    return e;
}

function o(e) {
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
    let t = o(null == e ? void 0 : e.id),
        n = c(e);
    return t || n;
}

function f(e) {
    return l(null == e ? void 0 : e.id) || u(e);
}

function p(e) {
    let { enableWaitlist: t } = r.xQ.useExperiment(
        {
            guildId: null != e ? e : i.dJq,
            location: "e3bb71_9",
        },
        {
            autoTrackExposure: !1,
        },
    );
    return t;
}

function _(e) {
    let { enableWaitlist: t } = r.xQ.getCurrentConfig({
        guildId: null != e ? e : i.dJq,
        location: "e3bb71_10",
    });
    return t;
}

function h() {
    let { enableCreatorMonetizationNagActivateForUser: e } = r.wm.getCurrentConfig(
        {
            location: "e3bb71_11",
        },
        {
            autoTrackExposure: !0,
        },
    );
    return e;
}

function m(e) {
    let { hideMonetizatonOnboardingInServerSettings: t } = r.yz.getCurrentConfig(
        {
            guildId: null != e ? e : i.dJq,
            location: "e3bb71_12",
        },
        {
            autoTrackExposure: !1,
        },
    );
    return t;
}
