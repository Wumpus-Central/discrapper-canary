i.d(t, { e: () => A });
var n = i(311907),
    l = i(827343),
    s = i(419954),
    r = i(430452),
    a = i(780964),
    u = i(731854),
    o = i(985018);
let d = (0, s.sN)(a.X.VOICE_GLOBAL_ATTENUATION_SLIDER, {
        useTitle: () => o.intl.string(o.t.AlybXj),
        setValue: (e) =>
            l.A.setAttenuation(e, r.Ay.getAttenuateWhileSpeakingSelf(), r.Ay.getAttenuateWhileSpeakingOthers()),
        minValue: 0,
        maxValue: 100,
        getInitialValue: () => r.Ay.getAttenuation(),
    }),
    _ = (0, s.zD)(a.X.VOICE_GLOBAL_ATTENUATION_FOR_SELF_SETTING, {
        useTitle: () => o.intl.string(o.t["9dHxRY"]),
        useValue: () => (0, n.bG)([r.Ay], () => r.Ay.getAttenuateWhileSpeakingSelf()),
        setValue: (e) => l.A.setAttenuation(r.Ay.getAttenuation(), e, r.Ay.getAttenuateWhileSpeakingOthers()),
    }),
    T = (0, s.zD)(a.X.VOICE_GLOBAL_ATTENUATION_FOR_OTHERS_SETTING, {
        useTitle: () => o.intl.string(o.t.SMt0Gr),
        useValue: () => (0, n.bG)([r.Ay], () => r.Ay.getAttenuateWhileSpeakingOthers()),
        setValue: (e) => l.A.setAttenuation(r.Ay.getAttenuation(), r.Ay.getAttenuateWhileSpeakingSelf(), e),
    }),
    A = (0, s.FW)(a.X.VOICE_GLOBAL_ATTENUATION_FIELD_SET, {
        useTitle: () => o.intl.string(o.t.oSdBvW),
        useSubtitle: () => o.intl.string(o.t["0A/8Rt"]),
        usePredicate: () => (0, n.bG)([r.Ay], () => r.Ay.supports(u.O5.ATTENUATION)),
        buildLayout: () => [d, _, T],
    });
