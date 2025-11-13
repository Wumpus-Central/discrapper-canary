n.d(e, { Z: () => d });
var i = n(442837),
    l = n(846027),
    u = n(509613),
    r = n(131951),
    s = n(313789),
    a = n(65154),
    o = n(388032);
let c = (0, u.UO)(s.n.VOICE_GLOBAL_ATTENUATION_SLIDER, {
        useTitle: () => o.intl.string(o.t.AlybXj),
        minValue: 0,
        maxValue: 100,
        getInitialValue: () => r.Z.getAttenuation(),
        setValue: (t) =>
            l.Z.setAttenuation(t, r.Z.getAttenuateWhileSpeakingSelf(), r.Z.getAttenuateWhileSpeakingOthers()),
    }),
    E = (0, u.qs)(s.n.VOICE_GLOBAL_ATTENUATION_FOR_SELF_SETTING, {
        useTitle: () => o.intl.string(o.t["9dHxRY"]),
        useValue: () => (0, i.e7)([r.Z], () => r.Z.getAttenuateWhileSpeakingSelf()),
        setValue: (t) => l.Z.setAttenuation(r.Z.getAttenuation(), t, r.Z.getAttenuateWhileSpeakingOthers()),
    }),
    S = (0, u.qs)(s.n.VOICE_GLOBAL_ATTENUATION_FOR_OTHERS_SETTING, {
        useTitle: () => o.intl.string(o.t.SMt0Gr),
        useValue: () => (0, i.e7)([r.Z], () => r.Z.getAttenuateWhileSpeakingOthers()),
        setValue: (t) => l.Z.setAttenuation(r.Z.getAttenuation(), r.Z.getAttenuateWhileSpeakingSelf(), t),
    }),
    d = (0, u.Uc)(s.n.VOICE_GLOBAL_ATTENUATION_FIELD_SET, {
        useTitle: () => o.intl.string(o.t.oSdBvW),
        useSubtitle: () => o.intl.string(o.t["0A/8Rt"]),
        usePredicate: () => (0, i.e7)([r.Z], () => r.Z.supports(a.AN.ATTENUATION)),
        buildLayout: () => [c, E, S],
    });
