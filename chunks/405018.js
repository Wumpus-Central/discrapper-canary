n.d(t, { A: () => l, M: () => o });
var i = n(17928),
    a = n(71393),
    r = n(607567),
    s = n(652215);
function l(e) {
    return (0, i.cf)([r.Ay, a.A], () => {
        let t = r.Ay.countVoiceStatesForChannel(e.id),
            n = a.A.getGuild(e.getGuildId());
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
function o(e) {
    let t = r.Ay.countVoiceStatesForChannel(e.id),
        n = a.A.getGuild(e.getGuildId());
    return null == n
        ? { reachedLimit: !1, limit: -1 }
        : e.type === s.rbe.GUILD_STAGE_VOICE
          ? { reachedLimit: t > n.maxStageVideoChannelUsers, limit: n.maxStageVideoChannelUsers }
          : { reachedLimit: n.maxVideoChannelUsers > 0 && t > n.maxVideoChannelUsers, limit: n.maxVideoChannelUsers };
}
