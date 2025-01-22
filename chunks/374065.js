r.d(n, {
    KF: function () {
        return _;
    },
    e4: function () {
        return h;
    },
    g5: function () {
        return m;
    },
    jy: function () {
        return i;
    }
});
var i,
    a = r(442837),
    o = r(592125),
    s = r(430824),
    l = r(496675),
    u = r(979651),
    c = r(774226),
    d = r(782769),
    f = r(981631),
    p = r(388032);
function h(e) {
    let { channelId: n, ChannelStore: r, GuildStore: i, PermissionStore: a, VoiceStateStore: o } = e,
        s = r.getChannel(n);
    if (!(0, c.s)() && null == s) return 3;
    if (!(0, d.a)(s)) return 6;
    if (null != s && !s.isPrivate()) {
        let e = s.getGuildId();
        if (null == e) return 4;
        let r = i.getGuild(e);
        if ((null == r ? void 0 : r.afkChannelId) === s.id) return 5;
        let l = a.can(f.Plq.CONNECT, s);
        if (!a.can(f.Plq.USE_EMBEDDED_ACTIVITIES, s)) return 1;
        let u = o.getCurrentClientVoiceChannelId(s.getGuildId()) === n;
        if (s.isVocal() && !u && !l) return 2;
    }
    return 0;
}
!(function (e) {
    (e[(e.CAN_LAUNCH = 0)] = 'CAN_LAUNCH'), (e[(e.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION = 1)] = 'NO_USE_EMBEDDED_ACTIVITIES_PERMISSION'), (e[(e.NO_CHANNEL_CONNECT_PERMISSION = 2)] = 'NO_CHANNEL_CONNECT_PERMISSION'), (e[(e.NO_CHANNEL = 3)] = 'NO_CHANNEL'), (e[(e.NO_GUILD = 4)] = 'NO_GUILD'), (e[(e.IS_AFK_CHANNEL = 5)] = 'IS_AFK_CHANNEL'), (e[(e.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS = 6)] = 'ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS');
})(i || (i = {}));
function _(e) {
    return (0, a.e7)(
        [o.Z, s.Z, l.Z, u.Z],
        () =>
            h({
                channelId: e,
                ChannelStore: o.Z,
                GuildStore: s.Z,
                PermissionStore: l.Z,
                VoiceStateStore: u.Z
            }),
        [e]
    );
}
function m(e) {
    switch (e) {
        case 0:
            return p.intl.string(p.t.qJvTKS);
        case 1:
            return p.intl.string(p.t.hHGrW1);
        default:
            return p.intl.string(p.t.j29zCg);
    }
}
