n.d(t, { Z: () => _ });
var i = n(200651);
n(192379);
var s = n(120356),
    l = n.n(s),
    r = n(442837),
    a = n(481060),
    o = n(846027),
    c = n(313201),
    d = n(921801),
    u = n(131951),
    h = n(726985),
    m = n(388032),
    g = n(483938);
let x = (0, c.hQ)();
function _(e) {
    let { refreshStyles: t } = e,
        {
            attenuation: n,
            attenuateWhileSpeakingSelf: s,
            attenuateWhileSpeakingOthers: c
        } = (0, r.cj)([u.Z], () => ({
            attenuation: u.Z.getAttenuation(),
            attenuateWhileSpeakingSelf: u.Z.getAttenuateWhileSpeakingSelf(),
            attenuateWhileSpeakingOthers: u.Z.getAttenuateWhileSpeakingOthers()
        })),
        _ = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(a.vwX, {
                    id: x,
                    tag: a.RB0.H5,
                    className: g.marginBottom8,
                    children: m.intl.string(m.t.oSdBvb)
                }),
                (0, i.jsx)(a.iRW, {
                    initialValue: n,
                    onValueChange: (e) => {
                        o.Z.setAttenuation(e, s, c);
                    },
                    'aria-labelledby': x
                }),
                (0, i.jsx)(a.R94, {
                    className: l()({ [g.marginBottom20]: !t }),
                    type: a.R94.Types.DESCRIPTION,
                    children: m.intl.string(m.t['0A/8Rk'])
                }),
                !t && (0, i.jsx)(a.$i$, { className: g.marginBottom20 }),
                (0, i.jsx)(a.j7V, {
                    value: s,
                    onChange: (e) => o.Z.setAttenuation(n, e, c),
                    hideBorder: t,
                    children: m.intl.string(m.t['9dHxRU'])
                }),
                (0, i.jsx)(a.j7V, {
                    value: c,
                    onChange: (e) => o.Z.setAttenuation(n, s, e),
                    hideBorder: t,
                    children: m.intl.string(m.t.SMt0Gh)
                })
            ]
        });
    return (0, i.jsx)(d.F, {
        setting: h.s6.VOICE_AND_VIDEO_ADVANCED_ATTENUATION,
        children: t
            ? _
            : (0, i.jsx)(a.hjN, {
                  className: g.marginBottom20,
                  children: _
              })
    });
}
