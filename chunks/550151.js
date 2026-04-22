"use strict";
n.d(t, { Ay: () => h, Gy: () => E, vG: () => p });
var r,
    i = n(311907),
    s = n(734057),
    a = n(71393),
    o = n(576705),
    l = n(287809),
    u = n(977997),
    d = n(147036),
    c = n(170148),
    _ = n(166352),
    f = n(652215),
    E =
        (((r = {})[(r.CAN_JOIN = 0)] = "CAN_JOIN"),
        (r[(r.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION = 1)] = "NO_USE_EMBEDDED_ACTIVITIES_PERMISSION"),
        (r[(r.NO_CHANNEL_CONNECT_PERMISSION = 2)] = "NO_CHANNEL_CONNECT_PERMISSION"),
        (r[(r.CHANNEL_FULL = 3)] = "CHANNEL_FULL"),
        (r[(r.NO_CHANNEL = 4)] = "NO_CHANNEL"),
        (r[(r.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS = 5)] = "ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS"),
        (r[(r.ACTIVITY_NOT_SUPPORTED_ON_OS = 6)] = "ACTIVITY_NOT_SUPPORTED_ON_OS"),
        (r[(r.ACTIVITY_AGE_GATED = 7)] = "ACTIVITY_AGE_GATED"),
        (r[(r.NO_USER = 8)] = "NO_USER"),
        (r[(r.IS_AFK_CHANNEL = 9)] = "IS_AFK_CHANNEL"),
        (r[(r.NO_GUILD = 10)] = "NO_GUILD"),
        r);
function h(e) {
    let {
        userId: t,
        activity: n,
        application: r,
        channelId: i,
        currentUser: s,
        isActivitiesEnabledForCurrentPlatform: a,
        ChannelStore: o,
        VoiceStateStore: l,
        PermissionStore: u,
        GuildStore: c,
    } = e;
    if (null == t) return 8;
    if (s?.nsfwAllowed === !1 && r?.embeddedActivityConfig?.requires_age_gate === !0) return 7;
    if (!a) return 5;
    if (!(0, _.A)(r?.embeddedActivityConfig?.supported_platforms)) return 6;
    let E = null != i ? i : l.getVoiceStateForSession(t, n?.session_id)?.channelId;
    if (null == E) return 4;
    let h = o.getChannel(i);
    if (null == h) return 4;
    if (!h.isPrivate()) {
        let e = h.getGuildId();
        if (null == e) return 10;
        let t = c.getGuild(e);
        if (t?.afkChannelId === h.id) return 9;
        let n = l.getCurrentClientVoiceChannelId(h.getGuildId()) === E,
            r = (0, d.Pd)(h, l, c),
            i = u.can(f.xBc.CONNECT, h);
        if (!u.can(f.xBc.USE_EMBEDDED_ACTIVITIES, h)) return 1;
        if (h.isVocal() && !n) {
            if (r) return 3;
            if (!i) return 2;
        }
    }
    return 0;
}
function p(e) {
    let { userId: t, activity: n, channelId: r, application: d } = e,
        _ = (0, c.z)(),
        f = (0, i.bG)([l.default], () => l.default.getCurrentUser());
    return (0, i.bG)(
        [s.A, u.A, o.A, a.A],
        () =>
            h({
                userId: t,
                activity: n,
                application: d,
                channelId: r,
                currentUser: f,
                isActivitiesEnabledForCurrentPlatform: _,
                ChannelStore: s.A,
                VoiceStateStore: u.A,
                PermissionStore: o.A,
                GuildStore: a.A,
            }),
        [n, d, r, f, _, t],
    );
}
