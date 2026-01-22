i.d(e, {
    W: () => o,
});
var n = i(311907),
    l = i(827343),
    s = i(419954),
    r = i(430452),
    u = i(780964),
    a = i(985018);
let o = (0, s.zD)(u.X.VOICE_AND_VIDEO_AUDIO_RECORDING, {
    useTitle: () => a.intl.string(a.t["r6K+TL"]),
    useSubtitle: () => a.intl.string(a.t["xl9+I6"]),
    useValue: function () {
        return (0, n.bG)([r.A], () => r.A.getAecDump());
    },
    setValue: l.A.setAecDump,
    usePredicate: function () {
        return (0, n.bG)([r.A], () => r.A.isAecDumpSupported());
    },
});
