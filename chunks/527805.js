r.d(n, {
    Fw: function () {
        return i;
    },
    ZP: function () {
        return m;
    },
    s5: function () {
        return g;
    }
});
var i,
    a = r(442837),
    s = r(592125),
    o = r(430824),
    l = r(496675),
    u = r(594174),
    c = r(979651),
    d = r(934415),
    f = r(774226),
    _ = r(782769),
    h = r(983695),
    p = r(981631);
function m(e) {
    var n, r, i;
    let { userId: a, activity: s, application: o, channelId: l, currentUser: u, isActivitiesEnabledForCurrentPlatform: c, ChannelStore: _, VoiceStateStore: m, PermissionStore: g, GuildStore: E } = e;
    if (null == a) return 8;
    if ((null == u ? void 0 : u.nsfwAllowed) === !1 && (null == o ? void 0 : null === (n = o.embeddedActivityConfig) || void 0 === n ? void 0 : n.requires_age_gate) === !0) return 7;
    if (!c) return 5;
    if (!(0, h.Z)(null == o ? void 0 : null === (r = o.embeddedActivityConfig) || void 0 === r ? void 0 : r.supported_platforms)) return 6;
    let v = (0, f.s)(),
        I = null != l ? l : null === (i = m.getVoiceStateForSession(a, null == s ? void 0 : s.session_id)) || void 0 === i ? void 0 : i.channelId;
    if (!v && null == I) return 4;
    let T = _.getChannel(l);
    if (!v && null == T) return 4;
    if (null != T && !T.isPrivate()) {
        let e = T.getGuildId();
        if (null == e) return 10;
        let n = E.getGuild(e);
        if ((null == n ? void 0 : n.afkChannelId) === T.id) return 9;
        let r = m.getCurrentClientVoiceChannelId(T.getGuildId()) === I,
            i = (0, d.rY)(T, m, E),
            a = g.can(p.Plq.CONNECT, T);
        if (!g.can(p.Plq.USE_EMBEDDED_ACTIVITIES, T)) return 1;
        if (T.isVocal() && !r) {
            if (i) return 3;
            if (!a) return 2;
        }
    }
    return 0;
}
function g(e) {
    let { userId: n, activity: r, channelId: i, application: d } = e,
        f = (0, _.z)(null != i ? i : void 0),
        h = (0, a.e7)([u.default], () => u.default.getCurrentUser());
    return (0, a.e7)(
        [s.Z, c.Z, l.Z, o.Z],
        () =>
            m({
                userId: n,
                activity: r,
                application: d,
                channelId: i,
                currentUser: h,
                isActivitiesEnabledForCurrentPlatform: f,
                ChannelStore: s.Z,
                VoiceStateStore: c.Z,
                PermissionStore: l.Z,
                GuildStore: o.Z
            }),
        [r, d, i, h, f, n]
    );
}
!(function (e) {
    (e[(e.CAN_JOIN = 0)] = 'CAN_JOIN'), (e[(e.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION = 1)] = 'NO_USE_EMBEDDED_ACTIVITIES_PERMISSION'), (e[(e.NO_CHANNEL_CONNECT_PERMISSION = 2)] = 'NO_CHANNEL_CONNECT_PERMISSION'), (e[(e.CHANNEL_FULL = 3)] = 'CHANNEL_FULL'), (e[(e.NO_CHANNEL = 4)] = 'NO_CHANNEL'), (e[(e.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS = 5)] = 'ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS'), (e[(e.ACTIVITY_NOT_SUPPORTED_ON_OS = 6)] = 'ACTIVITY_NOT_SUPPORTED_ON_OS'), (e[(e.ACTIVITY_AGE_GATED = 7)] = 'ACTIVITY_AGE_GATED'), (e[(e.NO_USER = 8)] = 'NO_USER'), (e[(e.IS_AFK_CHANNEL = 9)] = 'IS_AFK_CHANNEL'), (e[(e.NO_GUILD = 10)] = 'NO_GUILD');
})(i || (i = {}));
