n.d(t, { Z: () => x });
var i = n(200651);
n(192379);
var s = n(120356),
    r = n.n(s),
    l = n(442837),
    a = n(481060),
    o = n(846027),
    c = n(313201),
    d = n(921801),
    u = n(131951),
    m = n(726985),
    h = n(388032),
    g = n(232186);
let _ = (0, c.hQ)();
function x(e) {
    let { refreshStyles: t } = e,
        {
            attenuation: n,
            attenuateWhileSpeakingSelf: s,
            attenuateWhileSpeakingOthers: c
        } = (0, l.cj)([u.Z], () => ({
            attenuation: u.Z.getAttenuation(),
            attenuateWhileSpeakingSelf: u.Z.getAttenuateWhileSpeakingSelf(),
            attenuateWhileSpeakingOthers: u.Z.getAttenuateWhileSpeakingOthers()
        })),
        x = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(a.vwX, {
                    id: _,
                    tag: a.RB0.H5,
                    className: g.marginBottom8,
                    children: h.intl.string(h.t.oSdBvb)
                }),
                (0, i.jsx)(a.iRW, {
                    initialValue: n,
                    onValueChange: (e) => {
                        o.Z.setAttenuation(e, s, c);
                    },
                    'aria-labelledby': _
                }),
                (0, i.jsx)(a.R94, {
                    className: r()({ [g.marginBottom20]: !t }),
                    type: a.R94.Types.DESCRIPTION,
                    children: h.intl.string(h.t['0A/8Rk'])
                }),
                !t && (0, i.jsx)(a.$i$, { className: g.marginBottom20 }),
                (0, i.jsx)(a.j7V, {
                    value: s,
                    onChange: (e) => o.Z.setAttenuation(n, e, c),
                    hideBorder: t,
                    children: h.intl.string(h.t['9dHxRU'])
                }),
                (0, i.jsx)(a.j7V, {
                    value: c,
                    onChange: (e) => o.Z.setAttenuation(n, s, e),
                    hideBorder: t,
                    children: h.intl.string(h.t.SMt0Gh)
                })
            ]
        });
    return (0, i.jsx)(d.F, {
        setting: m.s6.VOICE_AND_VIDEO_ADVANCED_ATTENUATION,
        children: t
            ? x
            : (0, i.jsx)(a.hjN, {
                  className: g.marginBottom20,
                  children: x
              })
    });
}
