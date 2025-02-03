t.d(n, { p: () => u });
var l = t(232713),
    a = t(65400),
    i = t(731965),
    s = t(174727);
let r = (0, a.F)((e) => ({
    audio: null,
    file: null,
    loading: !1,
    loadAudioFromFile: async (n) => {
        if (
            ((0, i.j)(() =>
                e({
                    file: n,
                    audio: null,
                    loading: null != n
                })
            ),
            null == n)
        )
            return;
        let t = await (0, s.lj)(n);
        null != t &&
            (0, i.j)(() =>
                e({
                    audio: t,
                    loading: !1
                })
            );
    },
    maxVolume: 1,
    setMaxVolume: (n) => {
        (0, i.j)(() => e({ maxVolume: n }));
    }
}));
function u() {
    return r(
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
