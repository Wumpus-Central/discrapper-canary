n.d(t, { Z: () => f });
var r = n(200651);
n(192379);
var i = n(120356),
    s = n.n(i),
    a = n(442837),
    l = n(481060),
    o = n(846027),
    c = n(313201),
    d = n(921801),
    u = n(131951),
    m = n(726985),
    g = n(388032),
    p = n(20493);
let h = (0, c.hQ)();
function f(e) {
    let { refreshStyles: t } = e,
        {
            attenuation: n,
            attenuateWhileSpeakingSelf: i,
            attenuateWhileSpeakingOthers: c
        } = (0, a.cj)([u.Z], () => ({
            attenuation: u.Z.getAttenuation(),
            attenuateWhileSpeakingSelf: u.Z.getAttenuateWhileSpeakingSelf(),
            attenuateWhileSpeakingOthers: u.Z.getAttenuateWhileSpeakingOthers()
        })),
        f = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(l.vwX, {
                    id: h,
                    tag: l.RB0.H5,
                    className: p.marginBottom8,
                    children: g.NW.string(g.t.oSdBvb)
                }),
                (0, r.jsx)(l.iRW, {
                    initialValue: n,
                    onValueChange: (e) => {
                        o.Z.setAttenuation(e, i, c);
                    },
                    'aria-labelledby': h
                }),
                (0, r.jsx)(l.R94, {
                    className: s()({ [p.marginBottom20]: !t }),
                    type: l.R94.Types.DESCRIPTION,
                    children: g.NW.string(g.t['0A/8Rk'])
                }),
                !t && (0, r.jsx)(l.$i$, { className: p.marginBottom20 }),
                (0, r.jsx)(l.j7V, {
                    value: i,
                    onChange: (e) => o.Z.setAttenuation(n, e, c),
                    hideBorder: t,
                    children: g.NW.string(g.t['9dHxRU'])
                }),
                (0, r.jsx)(l.j7V, {
                    value: c,
                    onChange: (e) => o.Z.setAttenuation(n, i, e),
                    hideBorder: t,
                    children: g.NW.string(g.t.SMt0Gh)
                })
            ]
        });
    return (0, r.jsx)(d.F, {
        setting: m.s6.VOICE_AND_VIDEO_ADVANCED_ATTENUATION,
        children: t
            ? f
            : (0, r.jsx)(l.hjN, {
                  className: p.marginBottom20,
                  children: f
              })
    });
}
