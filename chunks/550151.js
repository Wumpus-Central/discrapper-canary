"use strict";
n.d(t, { Ay: () => p, Gy: () => h, vG: () => E });
var i,
    r = n(17928),
    s = n(734057),
    a = n(71393),
    o = n(576705),
    l = n(287809),
    u = n(977997),
    c = n(871237),
    d = n(170148),
    _ = n(166352),
    f = n(652215),
    h =
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
function p(e) {
    let {
        userId: t,
        activity: n,
        application: i,
        channelId: r,
        currentUser: s,
        isActivitiesEnabledForCurrentPlatform: a,
        ChannelStore: o,
        VoiceStateStore: l,
        PermissionStore: u,
        GuildStore: d,
    } = e;
    if (null == t) return 8;
    if (s?.nsfwAllowed === !1 && i?.embeddedActivityConfig?.requires_age_gate === !0) return 7;
    if (!a) return 5;
    if (!(0, _.A)(i?.embeddedActivityConfig?.supported_platforms)) return 6;
    let h = null != r ? r : l.getVoiceStateForSession(t, n?.session_id)?.channelId;
    if (null == h) return 4;
    let p = o.getChannel(r);
    if (null == p) return 4;
    if (!p.isPrivate()) {
        let e = p.getGuildId();
        if (null == e) return 10;
        let t = d.getGuild(e);
        if (t?.afkChannelId === p.id) return 9;
        let n = l.getCurrentClientVoiceChannelId(p.getGuildId()) === h,
            i = (0, c.Pd)(p, l, d),
            r = u.can(f.xBc.CONNECT, p);
        if (!u.can(f.xBc.USE_EMBEDDED_ACTIVITIES, p)) return 1;
        if (p.isVocal() && !n) {
            if (i) return 3;
            if (!r) return 2;
        }
    }
    return 0;
}
function E(e) {
    let { userId: t, activity: n, channelId: i, application: c } = e,
        _ = (0, d.z)(),
        f = (0, r.bG)([l.default], () => l.default.getCurrentUser());
    return (0, r.bG)(
        [s.A, u.A, o.A, a.A],
        () =>
            p({
                userId: t,
                activity: n,
                application: c,
                channelId: i,
                currentUser: f,
                isActivitiesEnabledForCurrentPlatform: _,
                ChannelStore: s.A,
                VoiceStateStore: u.A,
                PermissionStore: o.A,
                GuildStore: a.A,
            }),
        [n, c, i, f, _, t],
    );
}
