n.d(t, { p: () => o });
var l = n(359959),
    a = n(993192),
    r = n(731965),
    i = n(174727);
let s = (0, a.F)((e) => ({
    audio: null,
    file: null,
    loading: !1,
    loadAudioFromFile: async (t) => {
        if (
            ((0, r.j)(() =>
                e({
                    file: t,
                    audio: null,
                    loading: null != t
                })
            ),
            null == t)
        )
            return;
        let n = await (0, i.lj)(t);
        null != n &&
            (0, r.j)(() =>
                e({
                    audio: n,
                    loading: !1
                })
            );
    },
    maxVolume: 1,
    setMaxVolume: (t) => {
        (0, r.j)(() => e({ maxVolume: t }));
    }
}));
function o() {
    return s(
        (e) => ({
            audio: e.audio,
            file: e.file,
            loading: e.loading,
            loadAudioFromFile: e.loadAudioFromFile,
            maxVolume: e.maxVolume,
            setMaxVolume: e.setMaxVolume
        }),
        l.X
    );
}
