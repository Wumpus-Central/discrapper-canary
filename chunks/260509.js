"use strict";
n.d(t, {
    DG: () => E,
    Fy: () => A,
    Iv: () => _,
    Rb: () => f,
    af: () => m,
    bM: () => h,
    do: () => d,
    kn: () => g,
    ok: () => p,
    uA: () => c,
    vI: () => u,
    wh: () => I,
});
var i = n(867051),
    r = n(329972),
    s = n(486020),
    a = n(935208),
    o = n(240248),
    l = n(652215);
let u = "Guild",
    c = new Set([l.ftr.EXPLICIT, l.ftr.AGE_RESTRICTED]),
    d = Object.freeze({
        mfaLevel: l.EkJ.NONE,
        preferredLocale: "en-US",
        afkTimeout: 0,
        defaultMessageNotifications: l.orn.ALL_MESSAGES,
        verificationLevel: l.PvD.NONE,
        explicitContentFilter: l.gh6.DISABLED,
        premiumProgressBarEnabled: !1,
        premiumProgressBarEnabledUserUpdatedAt: null,
        systemChannelFlags: 0,
        maxStageVideoChannelUsers: -1,
        maxVideoChannelUsers: -1,
        maxMembers: -1,
        premiumTier: l.TVA.NONE,
        nsfwLevel: l.ftr.DEFAULT,
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
        moderatorReporting: null,
        verificationRoleId: null,
        gameApplicationIds: null,
        officialMessageColor: null,
    });
function _(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    return s.Ay.getGuildIconURL({ id: e.id, size: t, icon: e.icon, canAnimate: n, lossless: i });
}
function f(e) {
    return (0, o.oN)(e.name);
}
function h(e, t) {
    let n = "string" == typeof t ? t : null != t ? t.id : null;
    return e.ownerId === n;
}
function p(e, t) {
    return (!!t.mfaEnabled || e.mfaLevel !== l.EkJ.ELEVATED) && h(e, t);
}
function E(e) {
    return null == e.joinedAt;
}
function m(e) {
    return a.default.castGuildIdAsEveryoneGuildRoleId(e.id);
}
function g(e, t) {
    return (0, i.hZ)(e, "joinedAt", "string" == typeof t ? new Date(t) : t);
}
function A(e, t) {
    return (0, i.hZ)(e, "gameApplicationIds", t);
}
function I(e) {
    return (
        null != e &&
        ((0, r.v)("guild_record") ? c.has(e.nsfwLevel) : c.has(e.ownerConfiguredContentLevel ?? l.ftr.DEFAULT))
    );
}
