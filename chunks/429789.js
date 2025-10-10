n.d(t, { Z: () => d });
var r = n(951288),
    i = n(442837),
    a = n(481060),
    o = n(846027),
    s = n(921801),
    l = n(131951),
    c = n(726985),
    u = n(388032);
function d() {
    let {
        attenuation: e,
        attenuateWhileSpeakingSelf: t,
        attenuateWhileSpeakingOthers: n,
    } = (0, i.cj)([l.Z], () => ({
        attenuation: l.Z.getAttenuation(),
        attenuateWhileSpeakingSelf: l.Z.getAttenuateWhileSpeakingSelf(),
        attenuateWhileSpeakingOthers: l.Z.getAttenuateWhileSpeakingOthers(),
    }));
    return (0, r.jsxs)(s.F, {
        setting: c.s6.VOICE_AND_VIDEO_ADVANCED_ATTENUATION,
        children: [
            (0, r.jsx)(a.iRW, {
                label: u.intl.string(u.t.oSdBvb),
                description: u.intl.string(u.t["0A/8Rk"]),
                initialValue: e,
                onValueChange: (e) => {
                    o.Z.setAttenuation(e, t, n);
                },
            }),
            (0, r.jsx)(a.rsf, {
                label: u.intl.string(u.t["9dHxRU"]),
                checked: t,
                onChange: (t) => o.Z.setAttenuation(e, t, n),
            }),
            (0, r.jsx)(a.rsf, {
                label: u.intl.string(u.t.SMt0Gh),
                checked: n,
                onChange: (n) => o.Z.setAttenuation(e, t, n),
            }),
        ],
    });
}
