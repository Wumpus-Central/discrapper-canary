i.d(n, { Z: () => c });
var t = i(442837),
    l = i(431328),
    a = i(501655),
    r = i(427679),
    o = i(592125),
    s = i(430824);
function c(e) {
    let {
            id: n,
            data: { guild: i, instance: c, speakers: d, participantCount: u },
            context: g
        } = e,
        h = (0, t.e7)(
            [s.Z, o.Z],
            () => {
                var e;
                return s.Z.getGuild(null === (e = o.Z.getChannel(n)) || void 0 === e ? void 0 : e.getGuildId());
            },
            [n]
        ),
        v = (0, t.e7)([r.Z], () => r.Z.getStageInstanceByChannel(n), [n]),
        x = (0, l.w8)(n, a.pV.SPEAKER),
        Z = (0, l.Rk)(n),
        m = null != v ? x : d,
        C = (null != v ? Z : u) - m.length;
    return {
        channelId: n,
        guild: null != h ? h : i,
        stage: null != v ? v : c,
        speakers: m,
        audienceCount: C,
        context: g
    };
}
