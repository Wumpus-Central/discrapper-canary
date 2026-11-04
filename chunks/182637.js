var i = n(855986),
    r = n(71393),
    a = n(607567),
    s = n(652215);
n.d(
    t,
    {},
    {
        A: function (e) {
            return (0, i.cf)(
                [a.Ay, r.A],
                () => {
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
                },
                [e],
            );
        },
        M: function (e) {
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
        },
    },
);
