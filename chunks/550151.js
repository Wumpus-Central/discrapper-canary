"use strict";
n.d(t, { Ay: () => h, Gy: () => A, vG: () => I });
var i,
    r = n(17928),
    a = n(734057),
    s = n(71393),
    l = n(576705),
    o = n(287809),
    d = n(977997),
    c = n(147036),
    u = n(170148),
    _ = n(166352),
    E = n(652215),
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
function h(e) {
    let {
        userId: t,
        activity: n,
        application: i,
        channelId: r,
        currentUser: a,
        isActivitiesEnabledForCurrentPlatform: s,
        ChannelStore: l,
        VoiceStateStore: o,
        PermissionStore: d,
        GuildStore: u,
    } = e;
    if (null == t) return 8;
    if (a?.nsfwAllowed === !1 && i?.embeddedActivityConfig?.requires_age_gate === !0) return 7;
    if (!s) return 5;
    if (!(0, _.A)(i?.embeddedActivityConfig?.supported_platforms)) return 6;
    let A = null != r ? r : o.getVoiceStateForSession(t, n?.session_id)?.channelId;
    if (null == A) return 4;
    let h = l.getChannel(r);
    if (null == h) return 4;
    if (!h.isPrivate()) {
        let e = h.getGuildId();
        if (null == e) return 10;
        let t = u.getGuild(e);
        if (t?.afkChannelId === h.id) return 9;
        let n = o.getCurrentClientVoiceChannelId(h.getGuildId()) === A,
            i = (0, c.Pd)(h, o, u),
            r = d.can(E.xBc.CONNECT, h);
        if (!d.can(E.xBc.USE_EMBEDDED_ACTIVITIES, h)) return 1;
        if (h.isVocal() && !n) {
            if (i) return 3;
            if (!r) return 2;
        }
    }
    return 0;
}
function I(e) {
    let { userId: t, activity: n, channelId: i, application: c } = e,
        _ = (0, u.z)(),
        E = (0, r.bG)([o.default], () => o.default.getCurrentUser());
    return (0, r.bG)(
        [a.A, d.A, l.A, s.A],
        () =>
            h({
                userId: t,
                activity: n,
                application: c,
                channelId: i,
                currentUser: E,
                isActivitiesEnabledForCurrentPlatform: _,
                ChannelStore: a.A,
                VoiceStateStore: d.A,
                PermissionStore: l.A,
                GuildStore: s.A,
            }),
        [n, c, i, E, _, t],
    );
}
