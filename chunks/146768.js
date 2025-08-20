t.d(n, { Z: () => s });
var r = t(442837),
    i = t(431328),
    l = t(501655),
    c = t(427679),
    a = t(592125),
    o = t(430824);
function s(e) {
    let {
            id: n,
            data: { guild: t, instance: s, speakers: u, participantCount: d },
            context: g,
        } = e,
        p = (0, r.e7)([o.Z, a.Z], () => {
            var e;
            return o.Z.getGuild(null == (e = a.Z.getChannel(n)) ? void 0 : e.getGuildId());
        }, [n]),
        h = (0, r.e7)([c.Z], () => c.Z.getStageInstanceByChannel(n), [n]),
        m = (0, i.w8)(n, l.pV.SPEAKER),
        v = (0, i.Rk)(n),
        j = null != h ? m : u,
        f = (null != h ? v : d) - j.length;
    return {
        channelId: n,
        guild: null != p ? p : t,
        stage: null != h ? h : s,
        speakers: j,
        audienceCount: f,
        context: g,
    };
}
