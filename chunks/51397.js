n.d(e, { Z: () => S });
var i = n(442837),
    r = n(846027),
    l = n(509613),
    s = n(131951),
    u = n(313789),
    a = n(65154),
    o = n(388032);
let c = (0, l.UO)(u.n.VOICE_GLOBAL_ATTENUATION_SLIDER, {
        useTitle: () => o.intl.string(o.t.AlybXj),
        minValue: 0,
        maxValue: 100,
        getInitialValue: () => s.Z.getAttenuation(),
        setValue: (t) =>
            r.Z.setAttenuation(t, s.Z.getAttenuateWhileSpeakingSelf(), s.Z.getAttenuateWhileSpeakingOthers()),
    }),
    d = (0, l.qs)(u.n.VOICE_GLOBAL_ATTENUATION_FOR_SELF_SETTING, {
        useTitle: () => o.intl.string(o.t["9dHxRY"]),
        useValue: () => (0, i.e7)([s.Z], () => s.Z.getAttenuateWhileSpeakingSelf()),
        setValue: (t) => r.Z.setAttenuation(s.Z.getAttenuation(), t, s.Z.getAttenuateWhileSpeakingOthers()),
    }),
    E = (0, l.qs)(u.n.VOICE_GLOBAL_ATTENUATION_FOR_OTHERS_SETTING, {
        useTitle: () => o.intl.string(o.t.SMt0Gr),
        useValue: () => (0, i.e7)([s.Z], () => s.Z.getAttenuateWhileSpeakingOthers()),
        setValue: (t) => r.Z.setAttenuation(s.Z.getAttenuation(), s.Z.getAttenuateWhileSpeakingSelf(), t),
    }),
    S = (0, l.Uc)(u.n.VOICE_GLOBAL_ATTENUATION_FIELD_SET, {
        useTitle: () => o.intl.string(o.t.oSdBvW),
        useSubtitle: () => o.intl.string(o.t["0A/8Rt"]),
        usePredicate: () => (0, i.e7)([s.Z], () => s.Z.supports(a.AN.ATTENUATION)),
        buildLayout: () => [c, d, E],
    });
