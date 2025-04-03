n.d(t, { Z: () => N });
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(442837),
    o = n(481060),
    c = n(846027),
    d = n(921801),
    u = n(131951),
    m = n(996073),
    g = n(526761),
    p = n(726985),
    h = n(388032),
    f = n(20493);
function b(e) {
    let { refreshStyles: t = !1 } = e,
        n = (0, l.e7)([u.Z], () => u.Z.getExperimentalEncoders());
    return (0, r.jsx)(d.F, {
        setting: p.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_EXPERIMENTAL_ENCODERS,
        children: (0, r.jsx)(o.j7V, {
            className: a()(f.marginTop8, f.marginBottom20),
            value: n,
            onChange: c.Z.setExperimentalEncoders,
            hideBorder: t,
            children: h.NW.string(h.t.AxnPm5)
        })
    });
}
function N(e) {
    let { refreshStyles: t = !1 } = e,
        { openH264: n, hardwareEncoding: s } = (0, l.cj)([u.Z], () => ({
            openH264: u.Z.getOpenH264(),
            hardwareEncoding: u.Z.getHardwareEncoding()
        })),
        N = i.useRef(null);
    (0, m.Z)(N, g.KQ.VoiceAndVideoScrollPositions.HARDWARE_ACCELERATION);
    let x = (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(d.F, {
                setting: p.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_OPENH264,
                children: (0, r.jsx)(o.j7V, {
                    className: t ? null : a()(f.marginTop8, f.marginBottom20),
                    value: n,
                    onChange: c.Z.setOpenH264,
                    hideBorder: t,
                    children: h.NW.string(h.t['71Ve19'])
                })
            }),
            (0, r.jsx)(d.F, {
                setting: p.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_HARDWARE_ACCELERATION,
                children: (0, r.jsx)(o.j7V, {
                    style: { scrollMarginTop: '48px' },
                    containerRef: N,
                    className: t ? null : a()(f.marginTop8, f.marginBottom20),
                    value: s,
                    onChange: c.Z.setHardwareEncoding,
                    note: h.NW.string(h.t.P1UKqq),
                    hideBorder: t,
                    children: h.NW.string(h.t.Sln58f)
                })
            }),
            (0, r.jsx)(b, { refreshStyles: t })
        ]
    });
    return (0, r.jsx)(d.F, {
        setting: p.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO,
        children: t
            ? x
            : (0, r.jsx)(o.hjN, {
                  className: f.marginBottom20,
                  title: h.NW.string(h.t.Tceiq6),
                  children: x
              })
    });
}
