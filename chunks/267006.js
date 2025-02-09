n.d(t, { Z: () => E });
var i = n(200651),
    s = n(192379),
    l = n(120356),
    r = n.n(l),
    a = n(442837),
    o = n(481060),
    c = n(846027),
    d = n(921801),
    u = n(131951),
    h = n(996073),
    m = n(526761),
    g = n(726985),
    x = n(388032),
    _ = n(814632);
function p(e) {
    let { refreshStyles: t = !1 } = e,
        n = (0, a.e7)([u.Z], () => u.Z.getExperimentalEncoders());
    return (0, i.jsx)(d.F, {
        setting: g.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_EXPERIMENTAL_ENCODERS,
        children: (0, i.jsx)(o.j7V, {
            className: r()(_.marginTop8, _.marginBottom20),
            value: n,
            onChange: c.Z.setExperimentalEncoders,
            hideBorder: t,
            children: x.intl.string(x.t.AxnPm5)
        })
    });
}
function E(e) {
    let { refreshStyles: t = !1 } = e,
        { openH264: n, hardwareEncoding: l } = (0, a.cj)([u.Z], () => ({
            openH264: u.Z.getOpenH264(),
            hardwareEncoding: u.Z.getHardwareEncoding()
        })),
        E = s.useRef(null);
    (0, h.Z)(E, m.KQ.VoiceAndVideoScrollPositions.HARDWARE_ACCELERATION);
    let C = (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(d.F, {
                setting: g.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_OPENH264,
                children: (0, i.jsx)(o.j7V, {
                    className: t ? null : r()(_.marginTop8, _.marginBottom20),
                    value: n,
                    onChange: c.Z.setOpenH264,
                    hideBorder: t,
                    children: x.intl.string(x.t['71Ve19'])
                })
            }),
            (0, i.jsx)(d.F, {
                setting: g.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_HARDWARE_ACCELERATION,
                children: (0, i.jsx)(o.j7V, {
                    style: { scrollMarginTop: '48px' },
                    containerRef: E,
                    className: t ? null : r()(_.marginTop8, _.marginBottom20),
                    value: l,
                    onChange: c.Z.setHardwareEncoding,
                    note: x.intl.string(x.t.P1UKqq),
                    hideBorder: t,
                    children: x.intl.string(x.t.Sln58f)
                })
            }),
            (0, i.jsx)(p, { refreshStyles: t })
        ]
    });
    return (0, i.jsx)(d.F, {
        setting: g.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO,
        children: t
            ? C
            : (0, i.jsx)(o.hjN, {
                  className: _.marginBottom20,
                  title: x.intl.string(x.t.Tceiq6),
                  children: C
              })
    });
}
