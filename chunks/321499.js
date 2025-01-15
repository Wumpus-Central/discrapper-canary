n.d(t, {
    Z: function () {
        return b;
    }
});
var i = n(200651),
    s = n(192379),
    r = n(120356),
    a = n.n(r),
    l = n(442837),
    o = n(780384),
    c = n(481060),
    d = n(846027),
    u = n(600164),
    m = n(921801),
    g = n(131951),
    h = n(210887),
    p = n(996073),
    x = n(526761),
    f = n(726985),
    _ = n(388032),
    E = n(232186);
let C = n(651714),
    T = n(297166);
function S() {
    let { experimentalEncoders: e } = (0, l.cj)([g.Z], () => ({ experimentalEncoders: g.Z.getExperimentalEncoders() }));
    return (0, i.jsx)(m.F, {
        setting: f.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_EXPERIMENTAL_ENCODERS,
        children: (0, i.jsx)(c.FormSwitch, {
            className: a()(E.marginTop8, E.marginBottom20),
            value: e,
            onChange: (e) => d.Z.setExperimentalEncoders(e),
            disabled: !1,
            children: _.intl.string(_.t.AxnPm5)
        })
    });
}
function b() {
    let e = (0, l.e7)([h.Z], () => h.Z.theme),
        { openH264: t, hardwareEncoding: n } = (0, l.cj)([g.Z], () => ({
            openH264: g.Z.getOpenH264(),
            hardwareEncoding: g.Z.getHardwareEncoding()
        })),
        r = s.useRef(null);
    return (
        (0, p.Z)(r, x.KQ.VoiceAndVideoScrollPositions.HARDWARE_ACCELERATION),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(m.F, {
                    setting: f.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_AUDIO,
                    children: (0, i.jsx)(c.FormSection, {
                        className: E.marginBottom20,
                        title: _.intl.string(_.t.DSGme3),
                        children: (0, i.jsx)(c.FormNotice, {
                            className: E.marginBottom20,
                            type: c.FormNoticeTypes.PRIMARY,
                            imageData: {
                                src: (0, o.ap)(e) ? C : T,
                                width: 70,
                                height: 40
                            },
                            align: u.Z.Align.CENTER,
                            body: _.intl.string(_.t['2nDAzM'])
                        })
                    })
                }),
                (0, i.jsx)(m.F, {
                    setting: f.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO,
                    children: (0, i.jsxs)(c.FormSection, {
                        className: E.marginBottom20,
                        title: _.intl.string(_.t.Tceiq6),
                        children: [
                            (0, i.jsx)(m.F, {
                                setting: f.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_OPENH264,
                                children: (0, i.jsx)(c.FormSwitch, {
                                    className: a()(E.marginTop8, E.marginBottom20),
                                    value: t,
                                    onChange: (e) => d.Z.setOpenH264(e),
                                    disabled: !1,
                                    children: _.intl.string(_.t['71Ve19'])
                                })
                            }),
                            (0, i.jsx)('div', {
                                style: { scrollMarginTop: '48px' },
                                ref: r
                            }),
                            (0, i.jsx)(m.F, {
                                setting: f.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_HARDWARE_ACCELERATION,
                                children: (0, i.jsx)(c.FormSwitch, {
                                    className: a()(E.marginTop8, E.marginBottom20),
                                    value: n,
                                    onChange: (e) => d.Z.setHardwareEncoding(e),
                                    note: _.intl.string(_.t.P1UKqq),
                                    children: _.intl.string(_.t.Sln58f)
                                })
                            }),
                            (0, i.jsx)(S, {})
                        ]
                    })
                })
            ]
        })
    );
}
