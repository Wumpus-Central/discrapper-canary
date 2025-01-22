n.d(t, {
    Z: function () {
        return x;
    }
});
var i = n(200651);
n(192379);
var r = n(120356),
    s = n.n(r),
    a = n(442837),
    l = n(481060),
    o = n(846027),
    c = n(313201),
    d = n(921801),
    u = n(131951),
    m = n(726985),
    g = n(388032),
    h = n(232186);
let p = (0, c.hQ)();
function x(e) {
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
        x = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(l.FormTitle, {
                    id: p,
                    tag: l.FormTitleTags.H5,
                    className: h.marginBottom8,
                    children: g.intl.string(g.t.oSdBvb)
                }),
                (0, i.jsx)(l.Slider, {
                    initialValue: n,
                    onValueChange: (e) => {
                        o.Z.setAttenuation(e, r, c);
                    },
                    'aria-labelledby': p
                }),
                (0, i.jsx)(l.FormText, {
                    className: s()({ [h.marginBottom20]: !t }),
                    type: l.FormText.Types.DESCRIPTION,
                    children: g.intl.string(g.t['0A/8Rk'])
                }),
                !t && (0, i.jsx)(l.FormDivider, { className: h.marginBottom20 }),
                (0, i.jsx)(l.FormSwitch, {
                    value: r,
                    onChange: (e) => o.Z.setAttenuation(n, e, c),
                    hideBorder: t,
                    children: g.intl.string(g.t['9dHxRU'])
                }),
                (0, i.jsx)(l.FormSwitch, {
                    value: c,
                    onChange: (e) => o.Z.setAttenuation(n, r, e),
                    hideBorder: t,
                    children: g.intl.string(g.t.SMt0Gh)
                })
            ]
        });
    return (0, i.jsx)(d.F, {
        setting: m.s6.VOICE_AND_VIDEO_ADVANCED_ATTENUATION,
        children: t
            ? x
            : (0, i.jsx)(l.FormSection, {
                  className: h.marginBottom20,
                  children: x
              })
    });
}
