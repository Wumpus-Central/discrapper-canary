var i = n(46653),
    r = n(419490),
    a = n(696016);
n.d(
    t,
    {},
    {
        A: function (e) {
            if (
                !("userId" in e) ||
                null == e.userId ||
                e.userId === i.default.getId() ||
                r.Ay.isVoiceRecordingAllowedForUser(e.userId)
            )
                return e;
            if (e.type === a.Gy.SOUNDBOARD) {
                let t = { ...e };
                return (delete t.userId, t);
            }
        },
    },
);
