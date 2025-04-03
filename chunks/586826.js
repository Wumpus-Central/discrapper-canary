t.d(n, { p: () => o });
var l = t(788347),
    a = t(372793),
    r = t(731965),
    i = t(174727);
let s = (0, a.F)((e) => ({
    audio: null,
    file: null,
    loading: !1,
    loadAudioFromFile: async (n) => {
        if (
            ((0, r.j)(() =>
                e({
                    file: n,
                    audio: null,
                    loading: null != n
                })
            ),
            null == n)
        )
            return;
        let t = await (0, i.lj)(n);
        null != t &&
            (0, r.j)(() =>
                e({
                    audio: t,
                    loading: !1
                })
            );
    },
    maxVolume: 1,
    setMaxVolume: (n) => {
        (0, r.j)(() => e({ maxVolume: n }));
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
