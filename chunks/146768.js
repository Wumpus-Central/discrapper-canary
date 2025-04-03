t.d(n, { Z: () => s });
var r = t(442837),
    i = t(431328),
    l = t(501655),
    o = t(427679),
    c = t(592125),
    a = t(430824);
function s(e) {
    let {
            id: n,
            data: { guild: t, instance: s, speakers: u, participantCount: d },
            context: g
        } = e,
        p = (0, r.e7)(
            [a.Z, c.Z],
            () => {
                var e;
                return a.Z.getGuild(null == (e = c.Z.getChannel(n)) ? void 0 : e.getGuildId());
            },
            [n]
        ),
        h = (0, r.e7)([o.Z], () => o.Z.getStageInstanceByChannel(n), [n]),
        f = (0, i.w8)(n, l.pV.SPEAKER),
        v = (0, i.Rk)(n),
        m = null != h ? f : u,
        j = (null != h ? v : d) - m.length;
    return {
        channelId: n,
        guild: null != p ? p : t,
        stage: null != h ? h : s,
        speakers: m,
        audienceCount: j,
        context: g
    };
}
