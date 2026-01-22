n.d(t, {
    DG: () => m,
    Iv: () => f,
    Rb: () => p,
    af: () => g,
    bM: () => _,
    do: () => d,
    kn: () => E,
    ok: () => h,
    uA: () => u,
    vI: () => c,
    wh: () => b,
}),
    n(896048);
var r = n(867051),
    i = n(329972),
    a = n(486020),
    s = n(661191),
    o = n(240248),
    l = n(652215);
let c = "Guild",
    u = new Set([l.ftr.EXPLICIT, l.ftr.AGE_RESTRICTED]),
    d = Object.freeze({
        mfaLevel: l.EkJ.NONE,
        preferredLocale: "en-US",
        afkTimeout: 0,
        defaultMessageNotifications: l.orn.ALL_MESSAGES,
        verificationLevel: l.PvD.NONE,
        explicitContentFilter: l.gh6.DISABLED,
        premiumProgressBarEnabled: !1,
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
    });
function f(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    return a.Ay.getGuildIconURL({
        id: e.id,
        size: t,
        icon: e.icon,
        canAnimate: n,
        lossless: r,
    });
}
function p(e) {
    return (0, o.oN)(e.name);
}
function _(e, t) {
    let n = "string" == typeof t ? t : null != t ? t.id : null;
    return e.ownerId === n;
}
function h(e, t) {
    return (!!t.mfaEnabled || e.mfaLevel !== l.EkJ.ELEVATED) && _(e, t);
}
function m(e) {
    return null == e.joinedAt;
}
function g(e) {
    return s.default.castGuildIdAsEveryoneGuildRoleId(e.id);
}
function E(e, t) {
    return (0, r.hZ)(e, "joinedAt", "string" == typeof t ? new Date(t) : t);
}
function b(e) {
    var t;
    return (
        null != e &&
        ((0, i.v)("guild_record")
            ? u.has(e.nsfwLevel)
            : u.has(null != (t = e.ownerConfiguredContentLevel) ? t : l.ftr.DEFAULT))
    );
}
