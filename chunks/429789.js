n.d(t, { Z: () => m });
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    o = n(442837),
    s = n(481060),
    l = n(846027),
    c = n(313201),
    u = n(921801),
    d = n(131951),
    f = n(726985),
    _ = n(388032),
    p = n(197571);
let h = (0, c.hQ)();
function m(e) {
    let { refreshStyles: t } = e,
        {
            attenuation: n,
            attenuateWhileSpeakingSelf: i,
            attenuateWhileSpeakingOthers: c,
        } = (0, o.cj)([d.Z], () => ({
            attenuation: d.Z.getAttenuation(),
            attenuateWhileSpeakingSelf: d.Z.getAttenuateWhileSpeakingSelf(),
            attenuateWhileSpeakingOthers: d.Z.getAttenuateWhileSpeakingOthers(),
        })),
        m = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(s.vwX, {
                    id: h,
                    tag: s.RB0.H5,
                    className: p.marginBottom8,
                    children: _.intl.string(_.t.oSdBvb),
                }),
                (0, r.jsx)(s.iRW, {
                    initialValue: n,
                    onValueChange: (e) => {
                        l.Z.setAttenuation(e, i, c);
                    },
                    "aria-labelledby": h,
                }),
                (0, r.jsx)(s.R94, {
                    className: a()({ [p.marginBottom20]: !t }),
                    type: s.R94.Types.DESCRIPTION,
                    children: _.intl.string(_.t["0A/8Rk"]),
                }),
                !t && (0, r.jsx)(s.$i$, { className: p.marginBottom20 }),
                (0, r.jsx)(s.j7V, {
                    value: i,
                    onChange: (e) => l.Z.setAttenuation(n, e, c),
                    hideBorder: t,
                    children: _.intl.string(_.t["9dHxRU"]),
                }),
                (0, r.jsx)(s.j7V, {
                    value: c,
                    onChange: (e) => l.Z.setAttenuation(n, i, e),
                    hideBorder: t,
                    children: _.intl.string(_.t.SMt0Gh),
                }),
            ],
        });
    return (0, r.jsx)(u.F, {
        setting: f.s6.VOICE_AND_VIDEO_ADVANCED_ATTENUATION,
        children: t
            ? m
            : (0, r.jsx)(s.hjN, {
                  className: p.marginBottom20,
                  children: m,
              }),
    });
}
