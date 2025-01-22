n.d(t, {
    Z: function () {
        return _;
    }
});
var i = n(200651),
    r = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(442837),
    o = n(481060),
    c = n(846027),
    d = n(921801),
    u = n(131951),
    m = n(996073),
    g = n(526761),
    h = n(726985),
    p = n(388032),
    x = n(232186);
function f(e) {
    let { refreshStyles: t = !1 } = e,
        n = (0, l.e7)([u.Z], () => u.Z.getExperimentalEncoders());
    return (0, i.jsx)(d.F, {
        setting: h.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_EXPERIMENTAL_ENCODERS,
        children: (0, i.jsx)(o.FormSwitch, {
            className: a()(x.marginTop8, x.marginBottom20),
            value: n,
            onChange: c.Z.setExperimentalEncoders,
            hideBorder: t,
            children: p.intl.string(p.t.AxnPm5)
        })
    });
}
function _(e) {
    let { refreshStyles: t = !1 } = e,
        { openH264: n, hardwareEncoding: s } = (0, l.cj)([u.Z], () => ({
            openH264: u.Z.getOpenH264(),
            hardwareEncoding: u.Z.getHardwareEncoding()
        })),
        _ = r.useRef(null);
    (0, m.Z)(_, g.KQ.VoiceAndVideoScrollPositions.HARDWARE_ACCELERATION);
    let E = (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(d.F, {
                setting: h.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_OPENH264,
                children: (0, i.jsx)(o.FormSwitch, {
                    className: t ? null : a()(x.marginTop8, x.marginBottom20),
                    value: n,
                    onChange: c.Z.setOpenH264,
                    hideBorder: t,
                    children: p.intl.string(p.t['71Ve19'])
                })
            }),
            (0, i.jsx)(d.F, {
                setting: h.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_HARDWARE_ACCELERATION,
                children: (0, i.jsx)(o.FormSwitch, {
                    style: { scrollMarginTop: '48px' },
                    containerRef: _,
                    className: t ? null : a()(x.marginTop8, x.marginBottom20),
                    value: s,
                    onChange: c.Z.setHardwareEncoding,
                    note: p.intl.string(p.t.P1UKqq),
                    hideBorder: t,
                    children: p.intl.string(p.t.Sln58f)
                })
            }),
            (0, i.jsx)(f, { refreshStyles: t })
        ]
    });
    return (0, i.jsx)(d.F, {
        setting: h.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO,
        children: t
            ? E
            : (0, i.jsx)(o.FormSection, {
                  className: x.marginBottom20,
                  title: p.intl.string(p.t.Tceiq6),
                  children: E
              })
    });
}
