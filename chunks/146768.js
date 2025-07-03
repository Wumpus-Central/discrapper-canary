t.d(n, { Z: () => s });
var i = t(442837),
    r = t(431328),
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
        p = (0, i.e7)(
            [a.Z, c.Z],
            () => {
                var e;
                return a.Z.getGuild(null == (e = c.Z.getChannel(n)) ? void 0 : e.getGuildId());
            },
            [n]
        ),
        f = (0, i.e7)([o.Z], () => o.Z.getStageInstanceByChannel(n), [n]),
        h = (0, r.w8)(n, l.pV.SPEAKER),
        v = (0, r.Rk)(n),
        m = null != f ? h : u,
        j = (null != f ? v : d) - m.length;
    return {
        channelId: n,
        guild: null != p ? p : t,
        stage: null != f ? f : s,
        speakers: m,
        audienceCount: j,
        context: g
    };
}
