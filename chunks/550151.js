"use strict";
n.d(t, { Ay: () => p, Gy: () => f, vG: () => h });
var r = n(311907),
    i = n(734057),
    a = n(71393),
    s = n(576705),
    o = n(287809),
    l = n(977997),
    u = n(147036),
    c = n(170148),
    d = n(166352),
    _ = n(652215),
    f = (function (e) {
        return (
            (e[(e.CAN_JOIN = 0)] = "CAN_JOIN"),
            (e[(e.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION = 1)] = "NO_USE_EMBEDDED_ACTIVITIES_PERMISSION"),
            (e[(e.NO_CHANNEL_CONNECT_PERMISSION = 2)] = "NO_CHANNEL_CONNECT_PERMISSION"),
            (e[(e.CHANNEL_FULL = 3)] = "CHANNEL_FULL"),
            (e[(e.NO_CHANNEL = 4)] = "NO_CHANNEL"),
            (e[(e.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS = 5)] = "ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS"),
            (e[(e.ACTIVITY_NOT_SUPPORTED_ON_OS = 6)] = "ACTIVITY_NOT_SUPPORTED_ON_OS"),
            (e[(e.ACTIVITY_AGE_GATED = 7)] = "ACTIVITY_AGE_GATED"),
            (e[(e.NO_USER = 8)] = "NO_USER"),
            (e[(e.IS_AFK_CHANNEL = 9)] = "IS_AFK_CHANNEL"),
            (e[(e.NO_GUILD = 10)] = "NO_GUILD"),
            e
        );
    })({});
function p(e) {
    let {
        userId: t,
        activity: n,
        application: r,
        channelId: i,
        currentUser: a,
        isActivitiesEnabledForCurrentPlatform: s,
        ChannelStore: o,
        VoiceStateStore: l,
        PermissionStore: c,
        GuildStore: f,
    } = e;
    if (null == t) return 8;
    if (a?.nsfwAllowed === !1 && r?.embeddedActivityConfig?.requires_age_gate === !0) return 7;
    if (!s) return 5;
    if (!(0, d.A)(r?.embeddedActivityConfig?.supported_platforms)) return 6;
    let p = null != i ? i : l.getVoiceStateForSession(t, n?.session_id)?.channelId;
    if (null == p) return 4;
    let h = o.getChannel(i);
    if (null == h) return 4;
    if (!h.isPrivate()) {
        let e = h.getGuildId();
        if (null == e) return 10;
        let t = f.getGuild(e);
        if (t?.afkChannelId === h.id) return 9;
        let n = l.getCurrentClientVoiceChannelId(h.getGuildId()) === p,
            r = (0, u.Pd)(h, l, f),
            i = c.can(_.xBc.CONNECT, h);
        if (!c.can(_.xBc.USE_EMBEDDED_ACTIVITIES, h)) return 1;
        if (h.isVocal() && !n) {
            if (r) return 3;
            if (!i) return 2;
        }
    }
    return 0;
}
function h(e) {
    let { userId: t, activity: n, channelId: u, application: d } = e,
        _ = (0, c.z)(),
        f = (0, r.bG)([o.default], () => o.default.getCurrentUser());
    return (0, r.bG)(
        [i.A, l.A, s.A, a.A],
        () =>
            p({
                userId: t,
                activity: n,
                application: d,
                channelId: u,
                currentUser: f,
                isActivitiesEnabledForCurrentPlatform: _,
                ChannelStore: i.A,
                VoiceStateStore: l.A,
                PermissionStore: s.A,
                GuildStore: a.A,
            }),
        [n, d, u, f, _, t],
    );
}
