n.d(t, {
    Fw: () => _,
    ZP: () => p,
    s5: () => h
});
var i = n(442837),
    r = n(592125),
    a = n(430824),
    s = n(496675),
    o = n(594174),
    l = n(979651),
    u = n(934415),
    c = n(782769),
    d = n(983695),
    f = n(981631),
    _ = (function (e) {
        return (e[(e.CAN_JOIN = 0)] = 'CAN_JOIN'), (e[(e.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION = 1)] = 'NO_USE_EMBEDDED_ACTIVITIES_PERMISSION'), (e[(e.NO_CHANNEL_CONNECT_PERMISSION = 2)] = 'NO_CHANNEL_CONNECT_PERMISSION'), (e[(e.CHANNEL_FULL = 3)] = 'CHANNEL_FULL'), (e[(e.NO_CHANNEL = 4)] = 'NO_CHANNEL'), (e[(e.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS = 5)] = 'ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS'), (e[(e.ACTIVITY_NOT_SUPPORTED_ON_OS = 6)] = 'ACTIVITY_NOT_SUPPORTED_ON_OS'), (e[(e.ACTIVITY_AGE_GATED = 7)] = 'ACTIVITY_AGE_GATED'), (e[(e.NO_USER = 8)] = 'NO_USER'), (e[(e.IS_AFK_CHANNEL = 9)] = 'IS_AFK_CHANNEL'), (e[(e.NO_GUILD = 10)] = 'NO_GUILD'), e;
    })({});
function p(e) {
    var t, n, i;
    let { userId: r, activity: a, application: s, channelId: o, currentUser: l, isActivitiesEnabledForCurrentPlatform: c, ChannelStore: _, VoiceStateStore: p, PermissionStore: h, GuildStore: m } = e;
    if (null == r) return 8;
    if ((null == l ? void 0 : l.nsfwAllowed) === !1 && (null == s ? void 0 : null === (t = s.embeddedActivityConfig) || void 0 === t ? void 0 : t.requires_age_gate) === !0) return 7;
    if (!c) return 5;
    if (!(0, d.Z)(null == s ? void 0 : null === (n = s.embeddedActivityConfig) || void 0 === n ? void 0 : n.supported_platforms)) return 6;
    let g = null != o ? o : null === (i = p.getVoiceStateForSession(r, null == a ? void 0 : a.session_id)) || void 0 === i ? void 0 : i.channelId;
    if (null == g) return 4;
    let E = _.getChannel(o);
    if (null == E) return 4;
    if (!E.isPrivate()) {
        let e = E.getGuildId();
        if (null == e) return 10;
        let t = m.getGuild(e);
        if ((null == t ? void 0 : t.afkChannelId) === E.id) return 9;
        let n = p.getCurrentClientVoiceChannelId(E.getGuildId()) === g,
            i = (0, u.rY)(E, p, m),
            r = h.can(f.Plq.CONNECT, E);
        if (!h.can(f.Plq.USE_EMBEDDED_ACTIVITIES, E)) return 1;
        if (E.isVocal() && !n) {
            if (i) return 3;
            if (!r) return 2;
        }
    }
    return 0;
}
function h(e) {
    let { userId: t, activity: n, channelId: u, application: d } = e,
        f = (0, c.z)(null != u ? u : void 0),
        _ = (0, i.e7)([o.default], () => o.default.getCurrentUser());
    return (0, i.e7)(
        [r.Z, l.Z, s.Z, a.Z],
        () =>
            p({
                userId: t,
                activity: n,
                application: d,
                channelId: u,
                currentUser: _,
                isActivitiesEnabledForCurrentPlatform: f,
                ChannelStore: r.Z,
                VoiceStateStore: l.Z,
                PermissionStore: s.Z,
                GuildStore: a.Z
            }),
        [n, d, u, _, f, t]
    );
}
