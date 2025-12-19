n.d(e, { b: () => E });
var i = n(442837),
    l = n(846027),
    s = n(509613),
    u = n(131951),
    r = n(313789),
    a = n(65154),
    o = n(388032);
let T = (0, s.UO)(r.n.VOICE_GLOBAL_ATTENUATION_SLIDER, {
        useTitle: () => o.intl.string(o.t.AlybXj),
        setValue: (t) =>
            l.Z.setAttenuation(t, u.Z.getAttenuateWhileSpeakingSelf(), u.Z.getAttenuateWhileSpeakingOthers()),
        minValue: 0,
        maxValue: 100,
        getInitialValue: () => u.Z.getAttenuation(),
    }),
    S = (0, s.qs)(r.n.VOICE_GLOBAL_ATTENUATION_FOR_SELF_SETTING, {
        useTitle: () => o.intl.string(o.t["9dHxRY"]),
        useValue: () => (0, i.e7)([u.Z], () => u.Z.getAttenuateWhileSpeakingSelf()),
        setValue: (t) => l.Z.setAttenuation(u.Z.getAttenuation(), t, u.Z.getAttenuateWhileSpeakingOthers()),
    }),
    c = (0, s.qs)(r.n.VOICE_GLOBAL_ATTENUATION_FOR_OTHERS_SETTING, {
        useTitle: () => o.intl.string(o.t.SMt0Gr),
        useValue: () => (0, i.e7)([u.Z], () => u.Z.getAttenuateWhileSpeakingOthers()),
        setValue: (t) => l.Z.setAttenuation(u.Z.getAttenuation(), u.Z.getAttenuateWhileSpeakingSelf(), t),
    }),
    E = (0, s.Uc)(r.n.VOICE_GLOBAL_ATTENUATION_FIELD_SET, {
        useTitle: () => o.intl.string(o.t.oSdBvW),
        useSubtitle: () => o.intl.string(o.t["0A/8Rt"]),
        usePredicate: () => (0, i.e7)([u.Z], () => u.Z.supports(a.AN.ATTENUATION)),
        buildLayout: () => [T, S, c],
    });
