var i = n(643501),
    r = n(964404),
    a = n(46653),
    s = n(71393),
    l = n(977997);
n.d(
    t,
    {},
    {
        H: function (e) {
            if (r.Ay.disableVoiceChannelChangeAlert) return !1;
            let t = i.default.getRemoteSessionId();
            if (
                null != l.A.getVoiceStateForSession(a.default.getId(), t) ||
                !l.A.isCurrentClientInVoiceChannel() ||
                l.A.isInChannel(e.id)
            )
                return !1;
            let n = s.A.getGuild(e.getGuildId());
            return !(n?.afkChannelId != null && l.A.isInChannel(n.afkChannelId));
        },
    },
);
