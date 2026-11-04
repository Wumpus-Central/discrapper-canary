var i = n(46653),
    r = n(63995),
    a = n(597886),
    s = n(312006),
    l = n(446600);
n.d(
    t,
    {},
    {
        A: function (e) {
            if (!e.isGuildStageVoice() || !l.A.isLive(e.id)) return !1;
            let t = i.default.getId();
            return (
                !!s.Ay.isModerator(t, e.id) &&
                !!s.Ay.isSpeaker(t, e.id) &&
                (null ==
                    r.A.getMutableParticipants(e.id).find(
                        (n) => n.user.id !== t && s.Ay.isModerator(n.user.id, e.id),
                    ) ||
                    null ==
                        r.A.getMutableParticipants(e.id, a.ip.SPEAKER).find(
                            (n) => n.user.id !== t && s.Ay.isModerator(n.user.id, e.id),
                        ))
            );
        },
    },
);
