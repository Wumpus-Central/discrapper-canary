n.d(t, { Z: () => p }), n(539854);
var i = n(255367);
n(73800);
var r = n(442837),
    s = n(481060),
    l = n(846027),
    a = n(921801),
    o = n(131951),
    c = n(680924),
    d = n(726985),
    u = n(65154),
    g = n(388032),
    m = n(20493);
function p(e) {
    let { refreshStyles: t = !1 } = e,
        {
            audioSubsystem: n,
            legacyAudioSubsystemSupported: p,
            experimentalAudioSubsystemSupported: h,
            automaticAudioSubsystemSupported: f
        } = (0, r.cj)([o.Z], () => ({
            audioSubsystem: o.Z.getAudioSubsystem(),
            legacyAudioSubsystemSupported: o.Z.supports(u.AN.LEGACY_AUDIO_SUBSYSTEM),
            experimentalAudioSubsystemSupported: o.Z.supports(u.AN.EXPERIMENTAL_AUDIO_SUBSYSTEM),
            automaticAudioSubsystemSupported: o.Z.supports(u.AN.AUTOMATIC_AUDIO_SUBSYSTEM)
        })),
        b = (0, i.jsx)(s.q4e, {
            className: m.marginBottom20,
            value: n,
            options: (function (e, t, n) {
                let i = [
                    {
                        value: u.iA.STANDARD,
                        label: g.intl.string(g.t.dqb2JS)
                    }
                ];
                return (
                    e &&
                        i.push({
                            value: u.iA.LEGACY,
                            label: g.intl.string(g.t['TYfH+/'])
                        }),
                    t &&
                        i.push({
                            value: u.iA.EXPERIMENTAL,
                            label: g.intl.string(g.t.liQmtr)
                        }),
                    n &&
                        i.push({
                            value: u.iA.AUTOMATIC,
                            label: g.intl.string(g.t.qNgtOz)
                        }),
                    i
                );
            })(p, h, f),
            onChange: (e) => {
                (0, c.Z)(g.intl.string(g.t.uY7AcX), g.intl.string(g.t.gBqik5), () => l.Z.setAudioSubsystem(e));
            }
        });
    return (0, i.jsx)(a.F, {
        setting: d.s6.VOICE_AND_VIDEO_ADVANCED_SUBSYSTEM,
        children: t
            ? (0, i.jsx)(s.xJW, {
                  title: g.intl.string(g.t.wVBHr6),
                  children: b
              })
            : (0, i.jsxs)(s.hjN, {
                  className: m.marginBottom20,
                  title: g.intl.string(g.t.wVBHr6),
                  children: [b, (0, i.jsx)(s.$i$, { className: m.marginBottom20 })]
              })
    });
}
