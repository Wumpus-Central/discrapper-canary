n.d(t, { Z: () => h }), n(539854);
var r = n(951288);
n(647438);
var i = n(442837),
    a = n(481060),
    o = n(846027),
    s = n(921801),
    l = n(131951),
    c = n(680924),
    u = n(726985),
    d = n(65154),
    f = n(388032),
    _ = n(197571);
function p(e, t, n) {
    let r = [
        {
            value: d.iA.STANDARD,
            label: f.intl.string(f.t.dqb2JS),
        },
    ];
    return (
        e &&
            r.push({
                value: d.iA.LEGACY,
                label: f.intl.string(f.t["TYfH+/"]),
            }),
        t &&
            r.push({
                value: d.iA.EXPERIMENTAL,
                label: f.intl.string(f.t.liQmtr),
            }),
        n &&
            r.push({
                value: d.iA.AUTOMATIC,
                label: f.intl.string(f.t.qNgtOz),
            }),
        r
    );
}
function h(e) {
    let { refreshStyles: t = !1 } = e,
        {
            audioSubsystem: n,
            legacyAudioSubsystemSupported: h,
            experimentalAudioSubsystemSupported: m,
            automaticAudioSubsystemSupported: g,
        } = (0, i.cj)([l.Z], () => ({
            audioSubsystem: l.Z.getAudioSubsystem(),
            legacyAudioSubsystemSupported: l.Z.supports(d.AN.LEGACY_AUDIO_SUBSYSTEM),
            experimentalAudioSubsystemSupported: l.Z.supports(d.AN.EXPERIMENTAL_AUDIO_SUBSYSTEM),
            automaticAudioSubsystemSupported: l.Z.supports(d.AN.AUTOMATIC_AUDIO_SUBSYSTEM),
        })),
        E = (0, r.jsx)(a.q4e, {
            className: _.marginBottom20,
            value: n,
            options: p(h, m, g),
            onChange: (e) => {
                let t = () => o.Z.setAudioSubsystem(e);
                (0, c.Z)(f.intl.string(f.t.uY7AcX), f.intl.string(f.t.gBqik5), t);
            },
        });
    return (0, r.jsx)(s.F, {
        setting: u.s6.VOICE_AND_VIDEO_ADVANCED_SUBSYSTEM,
        children: t
            ? (0, r.jsx)(a.xJW, {
                  title: f.intl.string(f.t.wVBHr6),
                  children: E,
              })
            : (0, r.jsxs)(a.hjN, {
                  className: _.marginBottom20,
                  title: f.intl.string(f.t.wVBHr6),
                  children: [E, (0, r.jsx)(a.$i$, { className: _.marginBottom20 })],
              }),
    });
}
