n.d(t, {
    L: () => u,
});
var l = n(942381),
    i = n(265690),
    a = n(121894),
    r = n(667920);
let s = (0, i.h)((e) => ({
    audio: null,
    file: null,
    loading: !1,
    loadAudioFromFile: async (t) => {
        if (
            ((0, a.r)(() =>
                e({
                    file: t,
                    audio: null,
                    loading: null != t,
                }),
            ),
            null == t)
        )
            return;
        let n = await (0, r.Xi)(t);
        null != n &&
            (0, a.r)(() =>
                e({
                    audio: n,
                    loading: !1,
                }),
            );
    },
    maxVolume: 1,
    setMaxVolume: (t) => {
        (0, a.r)(() =>
            e({
                maxVolume: t,
            }),
        );
    },
}));

function u() {
    return s(
        (e) => ({
            audio: e.audio,
            file: e.file,
            loading: e.loading,
            loadAudioFromFile: e.loadAudioFromFile,
            maxVolume: e.maxVolume,
            setMaxVolume: e.setMaxVolume,
        }),
        l.x,
    );
}
