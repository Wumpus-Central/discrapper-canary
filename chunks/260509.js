n.d(t, {
    DG: () => T,
    Fy: () => O,
    Iv: () => c,
    Rb: () => u,
    af: () => S,
    bM: () => I,
    do: () => d,
    kn: () => N,
    ok: () => A,
    uA: () => E,
    vI: () => o,
    wh: () => R,
});
var i = n(867051),
    r = n(329972),
    a = n(486020),
    s = n(935208),
    _ = n(240248),
    l = n(652215);
let o = "Guild",
    E = new Set([l.ftr.EXPLICIT, l.ftr.AGE_RESTRICTED]),
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
function c(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    return a.Ay.getGuildIconURL({ id: e.id, size: t, icon: e.icon, canAnimate: n, lossless: i });
}
function u(e) {
    return (0, _.oN)(e.name);
}
function I(e, t) {
    let n = "string" == typeof t ? t : null != t ? t.id : null;
    return e.ownerId === n;
}
function A(e, t) {
    return (!!t.mfaEnabled || e.mfaLevel !== l.EkJ.ELEVATED) && I(e, t);
}
function T(e) {
    return null == e.joinedAt;
}
function S(e) {
    return s.default.castGuildIdAsEveryoneGuildRoleId(e.id);
}
function N(e, t) {
    return (0, i.hZ)(e, "joinedAt", "string" == typeof t ? new Date(t) : t);
}
function O(e, t) {
    return (0, i.hZ)(e, "gameApplicationIds", t);
}
function R(e) {
    return (
        null != e &&
        ((0, r.v)("guild_record") ? E.has(e.nsfwLevel) : E.has(e.ownerConfiguredContentLevel ?? l.ftr.DEFAULT))
    );
}
