t.d(n, { p: () => s });
var a = t(524825),
    l = t(131193),
    i = t(731965),
    r = t(174727);
let o = (0, l.F)((e) => ({
    audio: null,
    file: null,
    loading: !1,
    loadAudioFromFile: async (n) => {
        if (
            ((0, i.j)(() =>
                e({
                    file: n,
                    audio: null,
                    loading: null != n,
                }),
            ),
            null == n)
        )
            return;
        let t = await (0, r.lj)(n);
        null != t &&
            (0, i.j)(() =>
                e({
                    audio: t,
                    loading: !1,
                }),
            );
    },
    maxVolume: 1,
    setMaxVolume: (n) => {
        (0, i.j)(() => e({ maxVolume: n }));
    },
}));
function s() {
    return o(
        (e) => ({
            audio: e.audio,
            file: e.file,
            loading: e.loading,
            loadAudioFromFile: e.loadAudioFromFile,
            maxVolume: e.maxVolume,
            setMaxVolume: e.setMaxVolume,
        }),
        a.X,
    );
}
