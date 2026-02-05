"use strict";
n.d(t, { A: () => o, M: () => l });
var r = n(311907),
    i = n(71393),
    a = n(607567),
    s = n(652215);
function o(e) {
    return (0, r.cf)([a.Ay, i.A], () => {
        let t = a.Ay.countVoiceStatesForChannel(e.id),
            n = i.A.getGuild(e.getGuildId());
        return null == n
            ? { reachedLimit: !1, limit: -1 }
            : e.type === s.rbe.GUILD_STAGE_VOICE
              ? { reachedLimit: t > n.maxStageVideoChannelUsers, limit: n.maxStageVideoChannelUsers }
              : {
                    reachedLimit: n.maxVideoChannelUsers > 0 && t > n.maxVideoChannelUsers,
                    limit: n.maxVideoChannelUsers,
                };
    }, [e]);
}
function l(e) {
    let t = a.Ay.countVoiceStatesForChannel(e.id),
        n = i.A.getGuild(e.getGuildId());
    return null == n
        ? { reachedLimit: !1, limit: -1 }
        : e.type === s.rbe.GUILD_STAGE_VOICE
          ? { reachedLimit: t > n.maxStageVideoChannelUsers, limit: n.maxStageVideoChannelUsers }
          : { reachedLimit: n.maxVideoChannelUsers > 0 && t > n.maxVideoChannelUsers, limit: n.maxVideoChannelUsers };
}
