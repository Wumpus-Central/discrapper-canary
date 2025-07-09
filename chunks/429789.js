n.d(t, { Z: () => f });
var i = n(255367);
n(73800);
var r = n(120356),
    s = n.n(r),
    a = n(442837),
    l = n(481060),
    o = n(846027),
    c = n(313201),
    d = n(921801),
    u = n(131951),
    m = n(726985),
    p = n(388032),
    g = n(20493);
let h = (0, c.hQ)();
function f(e) {
    let { refreshStyles: t } = e,
        {
            attenuation: n,
            attenuateWhileSpeakingSelf: r,
            attenuateWhileSpeakingOthers: c
        } = (0, a.cj)([u.Z], () => ({
            attenuation: u.Z.getAttenuation(),
            attenuateWhileSpeakingSelf: u.Z.getAttenuateWhileSpeakingSelf(),
            attenuateWhileSpeakingOthers: u.Z.getAttenuateWhileSpeakingOthers()
        })),
        f = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(l.vwX, {
                    id: h,
                    tag: l.RB0.H5,
                    className: g.marginBottom8,
                    children: p.intl.string(p.t.oSdBvb)
                }),
                (0, i.jsx)(l.iRW, {
                    initialValue: n,
                    onValueChange: (e) => {
                        o.Z.setAttenuation(e, r, c);
                    },
                    'aria-labelledby': h
                }),
                (0, i.jsx)(l.R94, {
                    className: s()({ [g.marginBottom20]: !t }),
                    type: l.R94.Types.DESCRIPTION,
                    children: p.intl.string(p.t['0A/8Rk'])
                }),
                !t && (0, i.jsx)(l.$i$, { className: g.marginBottom20 }),
                (0, i.jsx)(l.j7V, {
                    value: r,
                    onChange: (e) => o.Z.setAttenuation(n, e, c),
                    hideBorder: t,
                    children: p.intl.string(p.t['9dHxRU'])
                }),
                (0, i.jsx)(l.j7V, {
                    value: c,
                    onChange: (e) => o.Z.setAttenuation(n, r, e),
                    hideBorder: t,
                    children: p.intl.string(p.t.SMt0Gh)
                })
            ]
        });
    return (0, i.jsx)(d.F, {
        setting: m.s6.VOICE_AND_VIDEO_ADVANCED_ATTENUATION,
        children: t
            ? f
            : (0, i.jsx)(l.hjN, {
                  className: g.marginBottom20,
                  children: f
              })
    });
}
