n.d(t, {
    Hn: () => p,
    KF: () => h,
    e4: () => _,
    g5: () => m,
    jy: () => f
});
var r = n(442837),
    i = n(592125),
    o = n(430824),
    a = n(496675),
    s = n(979651),
    l = n(774226),
    c = n(782769),
    u = n(981631),
    d = n(388032),
    f = (function (e) {
        return (e[(e.CAN_LAUNCH = 0)] = 'CAN_LAUNCH'), (e[(e.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION = 1)] = 'NO_USE_EMBEDDED_ACTIVITIES_PERMISSION'), (e[(e.NO_CHANNEL_CONNECT_PERMISSION = 2)] = 'NO_CHANNEL_CONNECT_PERMISSION'), (e[(e.NO_CHANNEL = 3)] = 'NO_CHANNEL'), (e[(e.NO_GUILD = 4)] = 'NO_GUILD'), (e[(e.IS_AFK_CHANNEL = 5)] = 'IS_AFK_CHANNEL'), (e[(e.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS = 6)] = 'ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS'), e;
    })({});
function _(e) {
    let { channelId: t, ChannelStore: n, GuildStore: r, PermissionStore: i, VoiceStateStore: o } = e,
        a = n.getChannel(t);
    if (!(0, l.sq)() && null == a) return 3;
    if (!(0, c.a)(a)) return 6;
    if (null != a && !a.isPrivate()) {
        let e = a.getGuildId();
        if (null == e) return 4;
        let n = r.getGuild(e);
        if ((null == n ? void 0 : n.afkChannelId) === a.id) return 5;
        let s = i.can(u.Plq.CONNECT, a);
        if (!i.can(u.Plq.USE_EMBEDDED_ACTIVITIES, a)) return 1;
        let l = o.getCurrentClientVoiceChannelId(a.getGuildId()) === t;
        if (a.isVocal() && !l && !s) return 2;
    }
    return 0;
}
function p(e) {
    return _({
        channelId: e,
        ChannelStore: i.Z,
        GuildStore: o.Z,
        PermissionStore: a.Z,
        VoiceStateStore: s.Z
    });
}
function h(e) {
    return (0, r.e7)(
        [i.Z, o.Z, a.Z, s.Z],
        () =>
            _({
                channelId: e,
                ChannelStore: i.Z,
                GuildStore: o.Z,
                PermissionStore: a.Z,
                VoiceStateStore: s.Z
            }),
        [e]
    );
}
function m(e) {
    switch (e) {
        case 0:
            return d.NW.string(d.t.qJvTKS);
        case 1:
            return d.NW.string(d.t.hHGrW1);
        default:
            return d.NW.string(d.t.j29zCg);
    }
}
