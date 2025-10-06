n.d(t, { Z: () => p });
var r = n(951288);
n(647438);
var i = n(442837),
    a = n(481060),
    o = n(846027),
    s = n(313201),
    l = n(921801),
    c = n(131951),
    u = n(726985),
    d = n(388032),
    f = n(10198);
let _ = (0, s.hQ)();
function p() {
    let {
        attenuation: e,
        attenuateWhileSpeakingSelf: t,
        attenuateWhileSpeakingOthers: n,
    } = (0, i.cj)([c.Z], () => ({
        attenuation: c.Z.getAttenuation(),
        attenuateWhileSpeakingSelf: c.Z.getAttenuateWhileSpeakingSelf(),
        attenuateWhileSpeakingOthers: c.Z.getAttenuateWhileSpeakingOthers(),
    }));
    return (0, r.jsxs)(l.F, {
        setting: u.s6.VOICE_AND_VIDEO_ADVANCED_ATTENUATION,
        children: [
            (0, r.jsx)(a.vwX, {
                id: _,
                className: f.marginBottom8,
                children: d.intl.string(d.t.oSdBvb),
            }),
            (0, r.jsx)(a.iRW, {
                initialValue: e,
                onValueChange: (e) => {
                    o.Z.setAttenuation(e, t, n);
                },
                "aria-labelledby": _,
            }),
            (0, r.jsx)(a.R94, {
                type: a.R94.Types.DESCRIPTION,
                children: d.intl.string(d.t["0A/8Rk"]),
            }),
            (0, r.jsx)(a.rsf, {
                label: d.intl.string(d.t["9dHxRU"]),
                checked: t,
                onChange: (t) => o.Z.setAttenuation(e, t, n),
            }),
            (0, r.jsx)(a.rsf, {
                label: d.intl.string(d.t.SMt0Gh),
                checked: n,
                onChange: (n) => o.Z.setAttenuation(e, t, n),
            }),
        ],
    });
}
