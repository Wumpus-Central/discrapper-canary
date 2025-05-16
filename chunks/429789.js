n.d(t, { Z: () => f });
var i = n(255367);
n(73800);
var r = n(120356),
    s = n.n(r),
    l = n(442837),
    a = n(481060),
    o = n(846027),
    c = n(313201),
    d = n(921801),
    u = n(131951),
    g = n(726985),
    m = n(388032),
    p = n(20493);
let h = (0, c.hQ)();
function f(e) {
    let { refreshStyles: t } = e,
        {
            attenuation: n,
            attenuateWhileSpeakingSelf: r,
            attenuateWhileSpeakingOthers: c
        } = (0, l.cj)([u.Z], () => ({
            attenuation: u.Z.getAttenuation(),
            attenuateWhileSpeakingSelf: u.Z.getAttenuateWhileSpeakingSelf(),
            attenuateWhileSpeakingOthers: u.Z.getAttenuateWhileSpeakingOthers()
        })),
        f = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(a.vwX, {
                    id: h,
                    tag: a.RB0.H5,
                    className: p.marginBottom8,
                    children: m.intl.string(m.t.oSdBvb)
                }),
                (0, i.jsx)(a.iRW, {
                    initialValue: n,
                    onValueChange: (e) => {
                        o.Z.setAttenuation(e, r, c);
                    },
                    'aria-labelledby': h
                }),
                (0, i.jsx)(a.R94, {
                    className: s()({ [p.marginBottom20]: !t }),
                    type: a.R94.Types.DESCRIPTION,
                    children: m.intl.string(m.t['0A/8Rk'])
                }),
                !t && (0, i.jsx)(a.$i$, { className: p.marginBottom20 }),
                (0, i.jsx)(a.j7V, {
                    value: r,
                    onChange: (e) => o.Z.setAttenuation(n, e, c),
                    hideBorder: t,
                    children: m.intl.string(m.t['9dHxRU'])
                }),
                (0, i.jsx)(a.j7V, {
                    value: c,
                    onChange: (e) => o.Z.setAttenuation(n, r, e),
                    hideBorder: t,
                    children: m.intl.string(m.t.SMt0Gh)
                })
            ]
        });
    return (0, i.jsx)(d.F, {
        setting: g.s6.VOICE_AND_VIDEO_ADVANCED_ATTENUATION,
        children: t
            ? f
            : (0, i.jsx)(a.hjN, {
                  className: p.marginBottom20,
                  children: f
              })
    });
}
