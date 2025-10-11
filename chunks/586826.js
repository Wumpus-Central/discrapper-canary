t.d(n, { p: () => s });
var a = t(574583),
    l = t(51835),
    r = t(731965),
    i = t(174727);
let o = (0, l.F)((e) => ({
    audio: null,
    file: null,
    loading: !1,
    loadAudioFromFile: async (n) => {
        if (
            ((0, r.j)(() =>
                e({
                    file: n,
                    audio: null,
                    loading: null != n,
                }),
            ),
            null == n)
        )
            return;
        let t = await (0, i.lj)(n);
        null != t &&
            (0, r.j)(() =>
                e({
                    audio: t,
                    loading: !1,
                }),
            );
    },
    maxVolume: 1,
    setMaxVolume: (n) => {
        (0, r.j)(() => e({ maxVolume: n }));
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
