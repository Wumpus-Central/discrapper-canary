"use strict";
n.d(t, { A: () => o, M: () => l });
var r = n(311907),
    i = n(71393),
    s = n(607567),
    a = n(652215);
function o(e) {
    return (0, r.cf)([s.Ay, i.A], () => {
        let t = s.Ay.countVoiceStatesForChannel(e.id),
            n = i.A.getGuild(e.getGuildId());
        return null == n
            ? { reachedLimit: !1, limit: -1 }
            : e.type === a.rbe.GUILD_STAGE_VOICE
              ? { reachedLimit: t > n.maxStageVideoChannelUsers, limit: n.maxStageVideoChannelUsers }
              : {
                    reachedLimit: n.maxVideoChannelUsers > 0 && t > n.maxVideoChannelUsers,
                    limit: n.maxVideoChannelUsers,
                };
    }, [e]);
}
function l(e) {
    let t = s.Ay.countVoiceStatesForChannel(e.id),
        n = i.A.getGuild(e.getGuildId());
    return null == n
        ? { reachedLimit: !1, limit: -1 }
        : e.type === a.rbe.GUILD_STAGE_VOICE
          ? { reachedLimit: t > n.maxStageVideoChannelUsers, limit: n.maxStageVideoChannelUsers }
          : { reachedLimit: n.maxVideoChannelUsers > 0 && t > n.maxVideoChannelUsers, limit: n.maxVideoChannelUsers };
}
