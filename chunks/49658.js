n.d(e, { Z: () => o });
var i = n(442837),
    r = n(846027),
    l = n(509613),
    s = n(131951),
    u = n(313789),
    a = n(388032);
let o = (0, l.qs)(u.n.VOICE_AND_VIDEO_AUDIO_RECORDING, {
    useTitle: () => a.intl.string(a.t["r6K+TL"]),
    useSubtitle: () => a.intl.string(a.t["xl9+I6"]),
    usePredicate: function () {
        return (0, i.e7)([s.Z], () => s.Z.isAecDumpSupported());
    },
    useValue: function () {
        return (0, i.e7)([s.Z], () => s.Z.getAecDump());
    },
    setValue: r.Z.setAecDump,
});
