n.d(t, { p: () => o });
var l = n(359959),
    a = n(993192),
    i = n(731965),
    r = n(174727);
let s = (0, a.F)((e) => ({
    audio: null,
    file: null,
    loading: !1,
    loadAudioFromFile: async (t) => {
        if (
            ((0, i.j)(() =>
                e({
                    file: t,
                    audio: null,
                    loading: null != t
                })
            ),
            null == t)
        )
            return;
        let n = await (0, r.lj)(t);
        null != n &&
            (0, i.j)(() =>
                e({
                    audio: n,
                    loading: !1
                })
            );
    },
    maxVolume: 1,
    setMaxVolume: (t) => {
        (0, i.j)(() => e({ maxVolume: t }));
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
