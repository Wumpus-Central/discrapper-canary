n.d(t, {
    KF: () => p,
    e4: () => _,
    g5: () => h,
    jy: () => f
});
var i = n(442837),
    r = n(592125),
    a = n(430824),
    s = n(496675),
    o = n(979651),
    l = n(774226),
    u = n(782769),
    c = n(981631),
    d = n(388032),
    f = (function (e) {
        return (e[(e.CAN_LAUNCH = 0)] = 'CAN_LAUNCH'), (e[(e.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION = 1)] = 'NO_USE_EMBEDDED_ACTIVITIES_PERMISSION'), (e[(e.NO_CHANNEL_CONNECT_PERMISSION = 2)] = 'NO_CHANNEL_CONNECT_PERMISSION'), (e[(e.NO_CHANNEL = 3)] = 'NO_CHANNEL'), (e[(e.NO_GUILD = 4)] = 'NO_GUILD'), (e[(e.IS_AFK_CHANNEL = 5)] = 'IS_AFK_CHANNEL'), (e[(e.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS = 6)] = 'ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS'), e;
    })({});
function _(e) {
    let { channelId: t, ChannelStore: n, GuildStore: i, PermissionStore: r, VoiceStateStore: a } = e,
        s = n.getChannel(t);
    if (!(0, l.sq)() && null == s) return 3;
    if (!(0, u.a)(s)) return 6;
    if (null != s && !s.isPrivate()) {
        let e = s.getGuildId();
        if (null == e) return 4;
        let n = i.getGuild(e);
        if ((null == n ? void 0 : n.afkChannelId) === s.id) return 5;
        let o = r.can(c.Plq.CONNECT, s);
        if (!r.can(c.Plq.USE_EMBEDDED_ACTIVITIES, s)) return 1;
        let l = a.getCurrentClientVoiceChannelId(s.getGuildId()) === t;
        if (s.isVocal() && !l && !o) return 2;
    }
    return 0;
}
function p(e) {
    return (0, i.e7)(
        [r.Z, a.Z, s.Z, o.Z],
        () =>
            _({
                channelId: e,
                ChannelStore: r.Z,
                GuildStore: a.Z,
                PermissionStore: s.Z,
                VoiceStateStore: o.Z
            }),
        [e]
    );
}
function h(e) {
    switch (e) {
        case 0:
            return d.intl.string(d.t.qJvTKS);
        case 1:
            return d.intl.string(d.t.hHGrW1);
        default:
            return d.intl.string(d.t.j29zCg);
    }
}
