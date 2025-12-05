n.d(e, { P: () => o });
var i = n(442837),
    l = n(846027),
    s = n(509613),
    r = n(131951),
    u = n(313789),
    a = n(388032);
let o = (0, s.qs)(u.n.VOICE_AND_VIDEO_AUDIO_RECORDING, {
    useTitle: () => a.intl.string(a.t["r6K+TL"]),
    useSubtitle: () => a.intl.string(a.t["xl9+I6"]),
    useValue: function () {
        return (0, i.e7)([r.Z], () => r.Z.getAecDump());
    },
    setValue: l.Z.setAecDump,
    usePredicate: function () {
        return (0, i.e7)([r.Z], () => r.Z.isAecDumpSupported());
    },
});
