(n.d(t, {
    Cx: () => c,
    EB: () => u,
    VI: () => l,
    Y2: () => g,
    eM: () => _,
    gM: () => d,
    kH: () => m,
    lV: () => h,
    yn: () => f,
    zN: () => p
}),
    n(388685));
var r = n(311929),
    i = n(768581),
    a = n(709054),
    o = n(624138),
    s = n(981631);
let l = 'Guild',
    c = Object.freeze({
        mfaLevel: s.BpS.NONE,
        preferredLocale: 'en-US',
        afkTimeout: 0,
        defaultMessageNotifications: s.bL.ALL_MESSAGES,
        verificationLevel: s.sFg.NONE,
        explicitContentFilter: s.lxg.DISABLED,
        premiumProgressBarEnabled: !1,
        systemChannelFlags: 0,
        maxStageVideoChannelUsers: -1,
        maxVideoChannelUsers: -1,
        maxMembers: -1,
        premiumTier: s.Eu4.NONE,
        nsfwLevel: s.V_K.DEFAULT,
        premiumSubscriberCount: 0,
        features: new Set(),
        description: null,
        icon: null,
        ownerId: null,
        systemChannelId: null,
        joinedAt: null,
        discoverySplash: null,
        splash: null,
        banner: null,
        homeHeader: null,
        afkChannelId: null,
        application_id: null,
        vanityURLCode: null,
        rulesChannelId: null,
        safetyAlertsChannelId: null,
        publicUpdatesChannelId: null,
        ownerConfiguredContentLevel: null,
        hubType: null,
        latestOnboardingQuestionId: null,
        profile: null,
        premiumFeatures: null,
        moderatorReporting: null
    });
function u(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    return i.ZP.getGuildIconURL({
        id: e.id,
        size: t,
        icon: e.icon,
        canAnimate: n,
        lossless: r
    });
}
function d(e) {
    return (0, o.Zg)(e.name);
}
function _(e, t) {
    let n = 'string' == typeof t ? t : null != t ? t.id : null;
    return e.ownerId === n;
}
function f(e, t) {
    return (!!t.mfaEnabled || e.mfaLevel !== s.BpS.ELEVATED) && _(e, t);
}
function p(e) {
    return null == e.joinedAt;
}
function h(e) {
    return a.default.castGuildIdAsEveryoneGuildRoleId(e.id);
}
function m(e, t) {
    return (0, r.t8)(e, 'joinedAt', 'string' == typeof t ? new Date(t) : t);
}
function g(e) {
    return null != e && (e.ownerConfiguredContentLevel === s.V_K.EXPLICIT || e.ownerConfiguredContentLevel === s.V_K.AGE_RESTRICTED);
}
