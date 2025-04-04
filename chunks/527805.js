n.d(t, {
    Fw: () => _,
    ZP: () => p,
    s5: () => h
});
var r = n(442837),
    i = n(592125),
    o = n(430824),
    a = n(496675),
    s = n(594174),
    l = n(979651),
    c = n(934415),
    u = n(782769),
    d = n(983695),
    f = n(981631),
    _ = (function (e) {
        return (e[(e.CAN_JOIN = 0)] = 'CAN_JOIN'), (e[(e.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION = 1)] = 'NO_USE_EMBEDDED_ACTIVITIES_PERMISSION'), (e[(e.NO_CHANNEL_CONNECT_PERMISSION = 2)] = 'NO_CHANNEL_CONNECT_PERMISSION'), (e[(e.CHANNEL_FULL = 3)] = 'CHANNEL_FULL'), (e[(e.NO_CHANNEL = 4)] = 'NO_CHANNEL'), (e[(e.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS = 5)] = 'ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS'), (e[(e.ACTIVITY_NOT_SUPPORTED_ON_OS = 6)] = 'ACTIVITY_NOT_SUPPORTED_ON_OS'), (e[(e.ACTIVITY_AGE_GATED = 7)] = 'ACTIVITY_AGE_GATED'), (e[(e.NO_USER = 8)] = 'NO_USER'), (e[(e.IS_AFK_CHANNEL = 9)] = 'IS_AFK_CHANNEL'), (e[(e.NO_GUILD = 10)] = 'NO_GUILD'), e;
    })({});
function p(e) {
    var t, n, r;
    let { userId: i, activity: o, application: a, channelId: s, currentUser: l, isActivitiesEnabledForCurrentPlatform: u, ChannelStore: _, VoiceStateStore: p, PermissionStore: h, GuildStore: m } = e;
    if (null == i) return 8;
    if ((null == l ? void 0 : l.nsfwAllowed) === !1 && (null == a || null == (t = a.embeddedActivityConfig) ? void 0 : t.requires_age_gate) === !0) return 7;
    if (!u) return 5;
    if (!(0, d.Z)(null == a || null == (n = a.embeddedActivityConfig) ? void 0 : n.supported_platforms)) return 6;
    let g = null != s ? s : null == (r = p.getVoiceStateForSession(i, null == o ? void 0 : o.session_id)) ? void 0 : r.channelId;
    if (null == g) return 4;
    let E = _.getChannel(s);
    if (null == E) return 4;
    if (!E.isPrivate()) {
        let e = E.getGuildId();
        if (null == e) return 10;
        let t = m.getGuild(e);
        if ((null == t ? void 0 : t.afkChannelId) === E.id) return 9;
        let n = p.getCurrentClientVoiceChannelId(E.getGuildId()) === g,
            r = (0, c.rY)(E, p, m),
            i = h.can(f.Plq.CONNECT, E);
        if (!h.can(f.Plq.USE_EMBEDDED_ACTIVITIES, E)) return 1;
        if (E.isVocal() && !n) {
            if (r) return 3;
            if (!i) return 2;
        }
    }
    return 0;
}
function h(e) {
    let { userId: t, activity: n, channelId: c, application: d } = e,
        f = (0, u.z)(null != c ? c : void 0),
        _ = (0, r.e7)([s.default], () => s.default.getCurrentUser());
    return (0, r.e7)(
        [i.Z, l.Z, a.Z, o.Z],
        () =>
            p({
                userId: t,
                activity: n,
                application: d,
                channelId: c,
                currentUser: _,
                isActivitiesEnabledForCurrentPlatform: f,
                ChannelStore: i.Z,
                VoiceStateStore: l.Z,
                PermissionStore: a.Z,
                GuildStore: o.Z
            }),
        [n, d, c, _, f, t]
    );
}
