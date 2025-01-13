r.d(n, {
    KF: function () {
        return p;
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
    s = r(592125),
    o = r(430824),
    l = r(496675),
    u = r(979651),
    c = r(774226),
    d = r(782769),
    f = r(981631),
    _ = r(388032);
function h(e) {
    let { channelId: n, ChannelStore: r, GuildStore: i, PermissionStore: a, VoiceStateStore: s } = e,
        o = r.getChannel(n);
    if (!(0, c.s)() && null == o) return 3;
    if (!(0, d.a)(o)) return 6;
    if (null != o && !o.isPrivate()) {
        let e = o.getGuildId();
        if (null == e) return 4;
        let r = i.getGuild(e);
        if ((null == r ? void 0 : r.afkChannelId) === o.id) return 5;
        let l = a.can(f.Plq.CONNECT, o);
        if (!a.can(f.Plq.USE_EMBEDDED_ACTIVITIES, o)) return 1;
        let u = s.getCurrentClientVoiceChannelId(o.getGuildId()) === n;
        if (o.isVocal() && !u && !l) return 2;
    }
    return 0;
}
!(function (e) {
    (e[(e.CAN_LAUNCH = 0)] = 'CAN_LAUNCH'), (e[(e.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION = 1)] = 'NO_USE_EMBEDDED_ACTIVITIES_PERMISSION'), (e[(e.NO_CHANNEL_CONNECT_PERMISSION = 2)] = 'NO_CHANNEL_CONNECT_PERMISSION'), (e[(e.NO_CHANNEL = 3)] = 'NO_CHANNEL'), (e[(e.NO_GUILD = 4)] = 'NO_GUILD'), (e[(e.IS_AFK_CHANNEL = 5)] = 'IS_AFK_CHANNEL'), (e[(e.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS = 6)] = 'ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS');
})(i || (i = {}));
function p(e) {
    return (0, a.e7)(
        [s.Z, o.Z, l.Z, u.Z],
        () =>
            h({
                channelId: e,
                ChannelStore: s.Z,
                GuildStore: o.Z,
                PermissionStore: l.Z,
                VoiceStateStore: u.Z
            }),
        [e]
    );
}
function m(e) {
    switch (e) {
        case 0:
            return _.intl.string(_.t.qJvTKS);
        case 1:
            return _.intl.string(_.t.hHGrW1);
        default:
            return _.intl.string(_.t.j29zCg);
    }
}
