var i,
    r = n(855986),
    a = n(323073),
    s = n(734057),
    l = n(71393),
    o = n(576705),
    d = n(287809),
    c = n(977997),
    u = n(147036),
    _ = n(170148),
    E = n(166352),
    A = n(652215),
    f =
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
        (i[(i.CHANNEL_CONTENT_GATED = 11)] = "CHANNEL_CONTENT_GATED"),
        i);
function h(e) {
    let {
        userId: t,
        activity: n,
        application: i,
        channelId: r,
        currentUser: a,
        isContentGated: s,
        isActivitiesEnabledForCurrentPlatform: l,
        ChannelStore: o,
        VoiceStateStore: d,
        PermissionStore: c,
        GuildStore: _,
    } = e;
    if (null == t) return 8;
    if (a?.nsfwAllowed === !1 && i?.embeddedActivityConfig?.requires_age_gate === !0) return 7;
    if (!l) return 5;
    if (!(0, E.A)(i?.embeddedActivityConfig?.supported_platforms)) return 6;
    let f = null != r ? r : d.getVoiceStateForSession(t, n?.session_id)?.channelId;
    if (null == f) return 4;
    let h = o.getChannel(r);
    if (null == h) return 4;
    if (!h.isPrivate()) {
        let e = h.getGuildId();
        if (null == e) return 10;
        let t = _.getGuild(e);
        if (t?.afkChannelId === h.id) return 9;
        let n = d.getCurrentClientVoiceChannelId(h.getGuildId()) === f,
            i = (0, u.Pd)(h, d, _),
            r = c.can(A.xBc.CONNECT, h);
        if (!c.can(A.xBc.USE_EMBEDDED_ACTIVITIES, h)) return 1;
        if (s) return 11;
        if (h.isVocal() && !n) {
            if (i) return 3;
            if (!r) return 2;
        }
    }
    return 0;
}
n.d(
    t,
    {},
    {
        Ay: h,
        Gy: f,
        vG: function (e) {
            let { userId: t, activity: n, channelId: i, application: u } = e,
                E = (0, _.z)(),
                A = (0, r.bG)([d.default], () => d.default.getCurrentUser()),
                f = (0, r.bG)([s.A], () => s.A.getChannel(i), [i]),
                I = (0, a.vL)(f);
            return (0, r.bG)(
                [s.A, c.A, o.A, l.A],
                () =>
                    h({
                        userId: t,
                        activity: n,
                        application: u,
                        channelId: i,
                        currentUser: A,
                        isContentGated: I,
                        isActivitiesEnabledForCurrentPlatform: E,
                        ChannelStore: s.A,
                        VoiceStateStore: c.A,
                        PermissionStore: o.A,
                        GuildStore: l.A,
                    }),
                [n, u, i, A, I, E, t],
            );
        },
    },
);
