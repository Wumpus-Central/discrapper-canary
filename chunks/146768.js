t.d(n, { Z: () => s });
var r = t(442837),
    i = t(431328),
    l = t(501655),
    a = t(427679),
    c = t(592125),
    o = t(430824);
function s(e) {
    let {
            id: n,
            data: { guild: t, instance: s, speakers: u, participantCount: d },
            context: g,
        } = e,
        p = (0, r.e7)([o.Z, c.Z], () => {
            var e;
            return o.Z.getGuild(null == (e = c.Z.getChannel(n)) ? void 0 : e.getGuildId());
        }, [n]),
        m = (0, r.e7)([a.Z], () => a.Z.getStageInstanceByChannel(n), [n]),
        h = (0, i.w8)(n, l.pV.SPEAKER),
        v = (0, i.Rk)(n),
        j = null != m ? h : u,
        f = (null != m ? v : d) - j.length;
    return {
        channelId: n,
        guild: null != p ? p : t,
        stage: null != m ? m : s,
        speakers: j,
        audienceCount: f,
        context: g,
    };
}
