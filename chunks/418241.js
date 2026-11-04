var c = s(73153),
    e = s(91242),
    i = s(457827),
    a = s(843002);
s.d(
    p,
    {},
    {
        N: function (t) {
            for (let p of e.A.getFramesForSurface((0, a.e)(t))) (0, i.r)(p.id);
            c.h.dispatch({ type: "VOICE_CHANNEL_APP_CLOSE", channelId: t });
        },
        s: function (t) {
            c.h.dispatch({ type: "VOICE_CHANNEL_APP_SURFACE_TOGGLE", channelId: t });
        },
    },
);
