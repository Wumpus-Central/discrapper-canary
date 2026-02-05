i.d(e, { e: () => S });
var n = i(311907),
    l = i(827343),
    s = i(419954),
    r = i(430452),
    a = i(780964),
    u = i(731854),
    o = i(985018);
let d = (0, s.sN)(a.X.VOICE_GLOBAL_ATTENUATION_SLIDER, {
        useTitle: () => o.intl.string(o.t.AlybXj),
        setValue: (t) =>
            l.A.setAttenuation(t, r.A.getAttenuateWhileSpeakingSelf(), r.A.getAttenuateWhileSpeakingOthers()),
        minValue: 0,
        maxValue: 100,
        getInitialValue: () => r.A.getAttenuation(),
    }),
    T = (0, s.zD)(a.X.VOICE_GLOBAL_ATTENUATION_FOR_SELF_SETTING, {
        useTitle: () => o.intl.string(o.t["9dHxRY"]),
        useValue: () => (0, n.bG)([r.A], () => r.A.getAttenuateWhileSpeakingSelf()),
        setValue: (t) => l.A.setAttenuation(r.A.getAttenuation(), t, r.A.getAttenuateWhileSpeakingOthers()),
    }),
    A = (0, s.zD)(a.X.VOICE_GLOBAL_ATTENUATION_FOR_OTHERS_SETTING, {
        useTitle: () => o.intl.string(o.t.SMt0Gr),
        useValue: () => (0, n.bG)([r.A], () => r.A.getAttenuateWhileSpeakingOthers()),
        setValue: (t) => l.A.setAttenuation(r.A.getAttenuation(), r.A.getAttenuateWhileSpeakingSelf(), t),
    }),
    S = (0, s.FW)(a.X.VOICE_GLOBAL_ATTENUATION_FIELD_SET, {
        useTitle: () => o.intl.string(o.t.oSdBvW),
        useSubtitle: () => o.intl.string(o.t["0A/8Rt"]),
        usePredicate: () => (0, n.bG)([r.A], () => r.A.supports(u.O5.ATTENUATION)),
        buildLayout: () => [d, T, A],
    });
