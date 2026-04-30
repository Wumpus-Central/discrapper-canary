n.d(t, {
    DG: () => T,
    Fy: () => N,
    Iv: () => E,
    Rb: () => u,
    af: () => h,
    bM: () => A,
    do: () => _,
    kn: () => S,
    ok: () => I,
    uA: () => c,
    vI: () => d,
    wh: () => f,
});
var i = n(867051),
    a = n(329972),
    r = n(486020),
    s = n(935208),
    l = n(240248),
    o = n(652215);
let d = "Guild",
    c = new Set([o.ftr.EXPLICIT, o.ftr.AGE_RESTRICTED]),
    _ = Object.freeze({
        mfaLevel: o.EkJ.NONE,
        preferredLocale: "en-US",
        afkTimeout: 0,
        defaultMessageNotifications: o.orn.ALL_MESSAGES,
        verificationLevel: o.PvD.NONE,
        explicitContentFilter: o.gh6.DISABLED,
        premiumProgressBarEnabled: !1,
        premiumProgressBarEnabledUserUpdatedAt: null,
        systemChannelFlags: 0,
        maxStageVideoChannelUsers: -1,
        maxVideoChannelUsers: -1,
        maxMembers: -1,
        premiumTier: o.TVA.NONE,
        nsfwLevel: o.ftr.DEFAULT,
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
function E(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    return r.Ay.getGuildIconURL({ id: e.id, size: t, icon: e.icon, canAnimate: n, lossless: i });
}
function u(e) {
    return (0, l.oN)(e.name);
}
function A(e, t) {
    let n = "string" == typeof t ? t : null != t ? t.id : null;
    return e.ownerId === n;
}
function I(e, t) {
    return (!!t.mfaEnabled || e.mfaLevel !== o.EkJ.ELEVATED) && A(e, t);
}
function T(e) {
    return null == e.joinedAt;
}
function h(e) {
    return s.default.castGuildIdAsEveryoneGuildRoleId(e.id);
}
function S(e, t) {
    return (0, i.hZ)(e, "joinedAt", "string" == typeof t ? new Date(t) : t);
}
function N(e, t) {
    return (0, i.hZ)(e, "gameApplicationIds", t);
}
function f(e) {
    return (
        null != e &&
        ((0, a.v)("guild_record") ? c.has(e.nsfwLevel) : c.has(e.ownerConfiguredContentLevel ?? o.ftr.DEFAULT))
    );
}
