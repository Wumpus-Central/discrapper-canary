n.d(t, { Ay: () => A, Gy: () => I, vG: () => T });
var i,
    r = n(17928),
    a = n(734057),
    s = n(71393),
    _ = n(576705),
    l = n(287809),
    o = n(977997),
    E = n(147036),
    d = n(170148),
    c = n(166352),
    u = n(652215),
    I =
        (((i = {})[(i.CAN_JOIN = 0)] = "CAN_JOIN"),
        (i[(i.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION = 1)] = "NO_USE_EMBEDDED_ACTIVITIES_PERMISSION"),
        (i[(i.NO_CHANNEL_CONNECT_PERMISSION = 2)] = "NO_CHANNEL_CONNECT_PERMISSION"),
        (i[(i.CHANNEL_FULL = 3)] = "CHANNEL_FULL"),
        (i[(i.NO_CHANNEL = 4)] = "NO_CHANNEL"),
        (i[(i.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS = 5)] = "ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS"),
        (i[(i.ACTIVITY_NOT_SUPPORTED_ON_OS = 6)] = "ACTIVITY_NOT_SUPPORTED_ON_OS"),
        (i[(i.ACTIVITY_AGE_GATED = 7)] = "ACTIVITY_AGE_GATED"),
        (i[(i.NO_USER = 8)] = "NO_USER"),
        (i[(i.IS_AFK_CHANNEL = 9)] = "IS_AFK_CHANNEL"),
        (i[(i.NO_GUILD = 10)] = "NO_GUILD"),
        i);
function A(e) {
    let {
        userId: t,
        activity: n,
        application: i,
        channelId: r,
        currentUser: a,
        isActivitiesEnabledForCurrentPlatform: s,
        ChannelStore: _,
        VoiceStateStore: l,
        PermissionStore: o,
        GuildStore: d,
    } = e;
    if (null == t) return 8;
    if (a?.nsfwAllowed === !1 && i?.embeddedActivityConfig?.requires_age_gate === !0) return 7;
    if (!s) return 5;
    if (!(0, c.A)(i?.embeddedActivityConfig?.supported_platforms)) return 6;
    let I = null != r ? r : l.getVoiceStateForSession(t, n?.session_id)?.channelId;
    if (null == I) return 4;
    let A = _.getChannel(r);
    if (null == A) return 4;
    if (!A.isPrivate()) {
        let e = A.getGuildId();
        if (null == e) return 10;
        let t = d.getGuild(e);
        if (t?.afkChannelId === A.id) return 9;
        let n = l.getCurrentClientVoiceChannelId(A.getGuildId()) === I,
            i = (0, E.Pd)(A, l, d),
            r = o.can(u.xBc.CONNECT, A);
        if (!o.can(u.xBc.USE_EMBEDDED_ACTIVITIES, A)) return 1;
        if (A.isVocal() && !n) {
            if (i) return 3;
            if (!r) return 2;
        }
    }
    return 0;
}
function T(e) {
    let { userId: t, activity: n, channelId: i, application: E } = e,
        c = (0, d.z)(),
        u = (0, r.bG)([l.default], () => l.default.getCurrentUser());
    return (0, r.bG)(
        [a.A, o.A, _.A, s.A],
        () =>
            A({
                userId: t,
                activity: n,
                application: E,
                channelId: i,
                currentUser: u,
                isActivitiesEnabledForCurrentPlatform: c,
                ChannelStore: a.A,
                VoiceStateStore: o.A,
                PermissionStore: _.A,
                GuildStore: s.A,
            }),
        [n, E, i, u, c, t],
    );
}
