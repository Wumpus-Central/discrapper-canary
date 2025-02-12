n.d(t, { Z: () => g }), n(653041);
var i = n(200651);
n(192379);
var s = n(442837),
    l = n(481060),
    r = n(846027),
    a = n(921801),
    o = n(131951),
    c = n(680924),
    d = n(726985),
    u = n(65154),
    h = n(388032),
    m = n(814632);
function g(e) {
    let { refreshStyles: t = !1 } = e,
        {
            audioSubsystem: n,
            legacyAudioSubsystemSupported: g,
            experimentalAudioSubsystemSupported: x,
            automaticAudioSubsystemSupported: _
        } = (0, s.cj)([o.Z], () => ({
            audioSubsystem: o.Z.getAudioSubsystem(),
            legacyAudioSubsystemSupported: o.Z.supports(u.AN.LEGACY_AUDIO_SUBSYSTEM),
            experimentalAudioSubsystemSupported: o.Z.supports(u.AN.EXPERIMENTAL_AUDIO_SUBSYSTEM),
            automaticAudioSubsystemSupported: o.Z.supports(u.AN.AUTOMATIC_AUDIO_SUBSYSTEM)
        })),
        p = (0, i.jsx)(l.q4e, {
            className: m.marginBottom20,
            value: n,
            options: (function (e, t, n) {
                let i = [
                    {
                        value: u.iA.STANDARD,
                        label: h.intl.string(h.t.dqb2JS)
                    }
                ];
                return (
                    e &&
                        i.push({
                            value: u.iA.LEGACY,
                            label: h.intl.string(h.t['TYfH+/'])
                        }),
                    t &&
                        i.push({
                            value: u.iA.EXPERIMENTAL,
                            label: h.intl.string(h.t.liQmtr)
                        }),
                    n &&
                        i.push({
                            value: u.iA.AUTOMATIC,
                            label: h.intl.string(h.t.qNgtOz)
                        }),
                    i
                );
            })(g, x, _),
            onChange: (e) => {
                (0, c.Z)(h.intl.string(h.t.uY7AcX), h.intl.string(h.t.gBqik5), () => r.Z.setAudioSubsystem(e));
            }
        });
    return (0, i.jsx)(a.F, {
        setting: d.s6.VOICE_AND_VIDEO_ADVANCED_SUBSYSTEM,
        children: t
            ? (0, i.jsx)(l.xJW, {
                  title: h.intl.string(h.t.wVBHr6),
                  children: p
              })
            : (0, i.jsxs)(l.hjN, {
                  className: m.marginBottom20,
                  title: h.intl.string(h.t.wVBHr6),
                  children: [p, (0, i.jsx)(l.$i$, { className: m.marginBottom20 })]
              })
    });
}
