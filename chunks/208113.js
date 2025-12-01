n.d(t, {
    Z: () => m,
    z: () => _,
}),
    n(539854);
var r = n(54381),
    i = n(442837),
    a = n(481060),
    o = n(846027),
    s = n(921801),
    l = n(131951),
    c = n(680924),
    u = n(726985),
    d = n(65154),
    f = n(388032),
    p = n(197571);
function _(e, t, n) {
    let r = [
        {
            value: d.iA.STANDARD,
            label: f.intl.string(f.t.dqb2JZ),
        },
    ];
    return (
        e &&
            r.push({
                value: d.iA.LEGACY,
                label: f.intl.string(f.t["TYfH+5"]),
            }),
        t &&
            r.push({
                value: d.iA.EXPERIMENTAL,
                label: f.intl.string(f.t.liQmtr),
            }),
        n &&
            r.push({
                value: d.iA.AUTOMATIC,
                label: f.intl.string(f.t.qNgtO1),
            }),
        r
    );
}
function m() {
    let {
        audioSubsystem: e,
        legacyAudioSubsystemSupported: t,
        experimentalAudioSubsystemSupported: n,
        automaticAudioSubsystemSupported: m,
    } = (0, i.cj)([l.Z], () => ({
        audioSubsystem: l.Z.getAudioSubsystem(),
        legacyAudioSubsystemSupported: l.Z.supports(d.AN.LEGACY_AUDIO_SUBSYSTEM),
        experimentalAudioSubsystemSupported: l.Z.supports(d.AN.EXPERIMENTAL_AUDIO_SUBSYSTEM),
        automaticAudioSubsystemSupported: l.Z.supports(d.AN.AUTOMATIC_AUDIO_SUBSYSTEM),
    }));
    return (0, r.jsx)(s.F, {
        setting: u.s6.VOICE_AND_VIDEO_ADVANCED_SUBSYSTEM,
        children: (0, r.jsx)(a.q4e, {
            label: f.intl.string(f.t.wVBHr0),
            className: p.marginBottom20,
            value: e,
            options: _(t, n, m),
            onChange: (e) => {
                let t = () => o.Z.setAudioSubsystem(e);
                (0, c.Z)(f.intl.string(f.t.uY7AcQ), f.intl.string(f.t.gBqik6), t);
            },
        }),
    });
}
