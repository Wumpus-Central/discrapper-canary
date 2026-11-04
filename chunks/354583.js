var i = t(855986),
    u = t(734057),
    r = t(309010);
t.d(
    n,
    {},
    {
        A: function () {
            return (0, i.bG)([r.Ay, u.A], () => {
                let e = r.Ay.getVoiceChannelId();
                if (null != e) {
                    let n = u.A.getChannel(e);
                    if (n?.isGuildStageVoice()) return n;
                }
                return null;
            });
        },
    },
);
