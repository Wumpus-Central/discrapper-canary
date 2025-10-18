n.d(t, { Z: () => f });
var r = n(951288);
n(647438);
var i = n(442837),
    a = n(481060),
    o = n(846027),
    s = n(921801),
    l = n(131951),
    c = n(726985),
    u = n(388032);
function d() {
    let e = (0, i.e7)([l.Z], () => l.Z.getExperimentalEncoders());
    return (0, r.jsx)(s.F, {
        setting: c.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_EXPERIMENTAL_ENCODERS,
        children: (0, r.jsx)(a.rsf, {
            label: u.intl.string(u.t.AxnPm5),
            checked: e,
            onChange: o.Z.setExperimentalEncoders,
        }),
    });
}
function f() {
    let { openH264: e } = (0, i.cj)([l.Z], () => ({ openH264: l.Z.getOpenH264() }));
    return (0, r.jsx)(s.F, {
        setting: c.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO,
        children: (0, r.jsxs)(a.Kqy, {
            gap: 24,
            children: [
                (0, r.jsx)(s.F, {
                    setting: c.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_OPENH264,
                    children: (0, r.jsx)(a.rsf, {
                        label: u.intl.string(u.t["71Ve19"]),
                        checked: e,
                        onChange: o.Z.setOpenH264,
                    }),
                }),
                (0, r.jsx)(d, {}),
            ],
        }),
    });
}
