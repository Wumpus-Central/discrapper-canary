n.d(t, { Z: () => p }), n(653041);
var r = n(200651);
n(192379);
var i = n(442837),
    s = n(481060),
    a = n(846027),
    l = n(921801),
    o = n(131951),
    c = n(680924),
    d = n(726985),
    u = n(65154),
    m = n(388032),
    g = n(20493);
function p(e) {
    let { refreshStyles: t = !1 } = e,
        {
            audioSubsystem: n,
            legacyAudioSubsystemSupported: p,
            experimentalAudioSubsystemSupported: h,
            automaticAudioSubsystemSupported: f
        } = (0, i.cj)([o.Z], () => ({
            audioSubsystem: o.Z.getAudioSubsystem(),
            legacyAudioSubsystemSupported: o.Z.supports(u.AN.LEGACY_AUDIO_SUBSYSTEM),
            experimentalAudioSubsystemSupported: o.Z.supports(u.AN.EXPERIMENTAL_AUDIO_SUBSYSTEM),
            automaticAudioSubsystemSupported: o.Z.supports(u.AN.AUTOMATIC_AUDIO_SUBSYSTEM)
        })),
        b = (0, r.jsx)(s.q4e, {
            className: g.marginBottom20,
            value: n,
            options: (function (e, t, n) {
                let r = [
                    {
                        value: u.iA.STANDARD,
                        label: m.NW.string(m.t.dqb2JS)
                    }
                ];
                return (
                    e &&
                        r.push({
                            value: u.iA.LEGACY,
                            label: m.NW.string(m.t['TYfH+/'])
                        }),
                    t &&
                        r.push({
                            value: u.iA.EXPERIMENTAL,
                            label: m.NW.string(m.t.liQmtr)
                        }),
                    n &&
                        r.push({
                            value: u.iA.AUTOMATIC,
                            label: m.NW.string(m.t.qNgtOz)
                        }),
                    r
                );
            })(p, h, f),
            onChange: (e) => {
                (0, c.Z)(m.NW.string(m.t.uY7AcX), m.NW.string(m.t.gBqik5), () => a.Z.setAudioSubsystem(e));
            }
        });
    return (0, r.jsx)(l.F, {
        setting: d.s6.VOICE_AND_VIDEO_ADVANCED_SUBSYSTEM,
        children: t
            ? (0, r.jsx)(s.xJW, {
                  title: m.NW.string(m.t.wVBHr6),
                  children: b
              })
            : (0, r.jsxs)(s.hjN, {
                  className: g.marginBottom20,
                  title: m.NW.string(m.t.wVBHr6),
                  children: [b, (0, r.jsx)(s.$i$, { className: g.marginBottom20 })]
              })
    });
}
