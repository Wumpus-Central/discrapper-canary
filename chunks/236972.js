l.d(t, { L: () => u });
var n = l(942381),
    a = l(265690),
    i = l(121894),
    s = l(667920);
let r = (0, a.h)((e) => ({
    audio: null,
    file: null,
    loading: !1,
    loadAudioFromFile: async (t) => {
        if (((0, i.r)(() => e({ file: t, audio: null, loading: null != t })), null == t)) return;
        let l = await (0, s.Xi)(t);
        null != l && (0, i.r)(() => e({ audio: l, loading: !1 }));
    },
    maxVolume: 1,
    setMaxVolume: (t) => {
        (0, i.r)(() => e({ maxVolume: t }));
    },
}));
function u() {
    return r(
        (e) => ({
            audio: e.audio,
            file: e.file,
            loading: e.loading,
            loadAudioFromFile: e.loadAudioFromFile,
            maxVolume: e.maxVolume,
            setMaxVolume: e.setMaxVolume,
        }),
        n.x,
    );
}
