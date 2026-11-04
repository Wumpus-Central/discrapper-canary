var i = n(867051),
    r = n(329972),
    a = n(486020),
    s = n(811091),
    l = n(240248),
    o = n(652215);
let d = new Set([o.ftr.EXPLICIT, o.ftr.AGE_RESTRICTED]),
    c = Object.freeze({
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
        guildTheme: null,
        premiumFeatures: null,
        moderatorReporting: null,
        guildSpaceSettings: null,
        verificationRoleId: null,
        gameApplicationIds: null,
        officialMessageColor: null,
        incidentsData: null,
        linkedGameOrganization: null,
    });
function u(e, t) {
    let n = "string" == typeof t ? t : null != t ? t.id : null;
    return e.ownerId === n;
}
n.d(
    t,
    {},
    {
        DG: function (e) {
            return null == e.joinedAt;
        },
        Fy: function (e, t) {
            return (0, i.hZ)(e, "gameApplicationIds", t);
        },
        Iv: function (e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            return a.Ay.getGuildIconURL({ id: e.id, size: t, icon: e.icon, canAnimate: n, lossless: i });
        },
        Rb: function (e) {
            return (0, l.oN)(e.name);
        },
        af: function (e) {
            return s.default.castGuildIdAsEveryoneGuildRoleId(e.id);
        },
        bM: u,
        do: c,
        kn: function (e, t) {
            return (0, i.hZ)(e, "joinedAt", "string" == typeof t ? new Date(t) : t);
        },
        ok: function (e, t) {
            return (!!t.mfaEnabled || e.mfaLevel !== o.EkJ.ELEVATED) && u(e, t);
        },
        uA: d,
        wh: function (e) {
            return (
                null != e &&
                ((0, r.v)("guild_record") ? d.has(e.nsfwLevel) : d.has(e.ownerConfiguredContentLevel ?? o.ftr.DEFAULT))
            );
        },
    },
);
