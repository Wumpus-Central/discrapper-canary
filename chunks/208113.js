n.d(t, {
    Z: function () {
        return h;
    }
}),
    n(653041);
var i = n(200651);
n(192379);
var r = n(442837),
    s = n(481060),
    a = n(846027),
    l = n(921801),
    o = n(131951),
    c = n(680924),
    d = n(726985),
    u = n(65154),
    m = n(388032),
    g = n(232186);
function h(e) {
    let { refreshStyles: t = !1 } = e,
        {
            audioSubsystem: n,
            legacyAudioSubsystemSupported: h,
            experimentalAudioSubsystemSupported: p,
            automaticAudioSubsystemSupported: x
        } = (0, r.cj)([o.Z], () => ({
            audioSubsystem: o.Z.getAudioSubsystem(),
            legacyAudioSubsystemSupported: o.Z.supports(u.AN.LEGACY_AUDIO_SUBSYSTEM),
            experimentalAudioSubsystemSupported: o.Z.supports(u.AN.EXPERIMENTAL_AUDIO_SUBSYSTEM),
            automaticAudioSubsystemSupported: o.Z.supports(u.AN.AUTOMATIC_AUDIO_SUBSYSTEM)
        })),
        f = (0, i.jsx)(s.SingleSelect, {
            className: g.marginBottom20,
            value: n,
            options: (function (e, t, n) {
                let i = [
                    {
                        value: u.iA.STANDARD,
                        label: m.intl.string(m.t.dqb2JS)
                    }
                ];
                return (
                    e &&
                        i.push({
                            value: u.iA.LEGACY,
                            label: m.intl.string(m.t['TYfH+/'])
                        }),
                    t &&
                        i.push({
                            value: u.iA.EXPERIMENTAL,
                            label: m.intl.string(m.t.liQmtr)
                        }),
                    n &&
                        i.push({
                            value: u.iA.AUTOMATIC,
                            label: m.intl.string(m.t.qNgtOz)
                        }),
                    i
                );
            })(h, p, x),
            onChange: (e) => {
                (0, c.Z)(m.intl.string(m.t.uY7AcX), m.intl.string(m.t.gBqik5), () => a.Z.setAudioSubsystem(e));
            }
        });
    return (0, i.jsx)(l.F, {
        setting: d.s6.VOICE_AND_VIDEO_ADVANCED_SUBSYSTEM,
        children: t
            ? (0, i.jsx)(s.FormItem, {
                  title: m.intl.string(m.t.wVBHr6),
                  children: f
              })
            : (0, i.jsxs)(s.FormSection, {
                  className: g.marginBottom20,
                  title: m.intl.string(m.t.wVBHr6),
                  children: [f, (0, i.jsx)(s.FormDivider, { className: g.marginBottom20 })]
              })
    });
}
