n.d(t, { A: () => _, M: () => l });
var i = n(17928),
    r = n(71393),
    a = n(607567),
    s = n(652215);
function _(e) {
    return (0, i.cf)([a.Ay, r.A], () => {
        let t = a.Ay.countVoiceStatesForChannel(e.id),
            n = r.A.getGuild(e.getGuildId());
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
        n = r.A.getGuild(e.getGuildId());
    return null == n
        ? { reachedLimit: !1, limit: -1 }
        : e.type === s.rbe.GUILD_STAGE_VOICE
          ? { reachedLimit: t > n.maxStageVideoChannelUsers, limit: n.maxStageVideoChannelUsers }
          : { reachedLimit: n.maxVideoChannelUsers > 0 && t > n.maxVideoChannelUsers, limit: n.maxVideoChannelUsers };
}
