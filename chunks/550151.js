n.d(t, { Ay: () => I, Gy: () => A, vG: () => T });
var i,
    a = n(17928),
    r = n(734057),
    s = n(71393),
    l = n(576705),
    o = n(287809),
    d = n(977997),
    c = n(147036),
    _ = n(170148),
    E = n(166352),
    u = n(652215),
    A =
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
function I(e) {
    let {
        userId: t,
        activity: n,
        application: i,
        channelId: a,
        currentUser: r,
        isActivitiesEnabledForCurrentPlatform: s,
        ChannelStore: l,
        VoiceStateStore: o,
        PermissionStore: d,
        GuildStore: _,
    } = e;
    if (null == t) return 8;
    if (r?.nsfwAllowed === !1 && i?.embeddedActivityConfig?.requires_age_gate === !0) return 7;
    if (!s) return 5;
    if (!(0, E.A)(i?.embeddedActivityConfig?.supported_platforms)) return 6;
    let A = null != a ? a : o.getVoiceStateForSession(t, n?.session_id)?.channelId;
    if (null == A) return 4;
    let I = l.getChannel(a);
    if (null == I) return 4;
    if (!I.isPrivate()) {
        let e = I.getGuildId();
        if (null == e) return 10;
        let t = _.getGuild(e);
        if (t?.afkChannelId === I.id) return 9;
        let n = o.getCurrentClientVoiceChannelId(I.getGuildId()) === A,
            i = (0, c.Pd)(I, o, _),
            a = d.can(u.xBc.CONNECT, I);
        if (!d.can(u.xBc.USE_EMBEDDED_ACTIVITIES, I)) return 1;
        if (I.isVocal() && !n) {
            if (i) return 3;
            if (!a) return 2;
        }
    }
    return 0;
}
function T(e) {
    let { userId: t, activity: n, channelId: i, application: c } = e,
        E = (0, _.z)(),
        u = (0, a.bG)([o.default], () => o.default.getCurrentUser());
    return (0, a.bG)(
        [r.A, d.A, l.A, s.A],
        () =>
            I({
                userId: t,
                activity: n,
                application: c,
                channelId: i,
                currentUser: u,
                isActivitiesEnabledForCurrentPlatform: E,
                ChannelStore: r.A,
                VoiceStateStore: d.A,
                PermissionStore: l.A,
                GuildStore: s.A,
            }),
        [n, c, i, u, E, t],
    );
}
