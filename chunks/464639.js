i.d(e, {
    e: () => E,
});
var n = i(311907),
    l = i(827343),
    s = i(419954),
    r = i(430452),
    u = i(780964),
    a = i(731854),
    o = i(985018);
let T = (0, s.sN)(u.X.VOICE_GLOBAL_ATTENUATION_SLIDER, {
        useTitle: () => o.intl.string(o.t.AlybXj),
        setValue: (t) =>
            l.A.setAttenuation(t, r.A.getAttenuateWhileSpeakingSelf(), r.A.getAttenuateWhileSpeakingOthers()),
        minValue: 0,
        maxValue: 100,
        getInitialValue: () => r.A.getAttenuation(),
    }),
    A = (0, s.zD)(u.X.VOICE_GLOBAL_ATTENUATION_FOR_SELF_SETTING, {
        useTitle: () => o.intl.string(o.t["9dHxRY"]),
        useValue: () => (0, n.bG)([r.A], () => r.A.getAttenuateWhileSpeakingSelf()),
        setValue: (t) => l.A.setAttenuation(r.A.getAttenuation(), t, r.A.getAttenuateWhileSpeakingOthers()),
    }),
    S = (0, s.zD)(u.X.VOICE_GLOBAL_ATTENUATION_FOR_OTHERS_SETTING, {
        useTitle: () => o.intl.string(o.t.SMt0Gr),
        useValue: () => (0, n.bG)([r.A], () => r.A.getAttenuateWhileSpeakingOthers()),
        setValue: (t) => l.A.setAttenuation(r.A.getAttenuation(), r.A.getAttenuateWhileSpeakingSelf(), t),
    }),
    E = (0, s.FW)(u.X.VOICE_GLOBAL_ATTENUATION_FIELD_SET, {
        useTitle: () => o.intl.string(o.t.oSdBvW),
        useSubtitle: () => o.intl.string(o.t["0A/8Rt"]),
        usePredicate: () => (0, n.bG)([r.A], () => r.A.supports(a.O5.ATTENUATION)),
        buildLayout: () => [T, A, S],
    });
