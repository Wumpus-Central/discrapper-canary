var i = n(46653),
    r = n(734057),
    a = n(495867),
    s = n(419490),
    l = n(696016);
n.d(
    t,
    {},
    {
        A: function (e) {
            if (e.type === l.Gy.SPEAKING) {
                let e = a.A.getChannelId();
                if (null != e) {
                    let t = r.A.getChannel(e);
                    if (null == t || t.isGuildStageVoice()) return;
                }
            }
            if (
                !("userId" in e) ||
                null == e.userId ||
                e.userId === i.default.getId() ||
                s.Ay.isVoiceRecordingAllowedForUser(e.userId)
            )
                return e;
            if (e.type === l.Gy.SOUNDBOARD) {
                let t = { ...e };
                return (delete t.userId, t);
            }
        },
    },
);
