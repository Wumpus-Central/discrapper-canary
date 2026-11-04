var i = n(46653),
    r = n(734057),
    a = n(977997);
n.d(
    t,
    {},
    {
        A: function () {
            let e = a.A.getVoiceStateForSession(i.default.getId(), i.default.getSessionId()),
                t = e?.channelId;
            return r.A.getChannel(t);
        },
    },
);
