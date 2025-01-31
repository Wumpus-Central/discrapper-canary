n.d(t, { Z: () => g });
var i = n(200651);
n(192379);
var s = n(120356),
    r = n.n(s),
    l = n(442837),
    a = n(481060),
    o = n(846027),
    c = n(921801),
    d = n(131951),
    u = n(726985),
    m = n(388032),
    h = n(232186);
function g(e) {
    let { refreshStyles: t = !1 } = e,
        { sidechainEnabled: n, sidechainStrength: s } = (0, l.cj)([d.Z], () => ({
            sidechainEnabled: d.Z.getSidechainCompression(),
            sidechainStrength: d.Z.getSidechainCompressionStrength()
        })),
        g = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(a.j7V, {
                    className: t ? null : r()(h.marginTop8, h.marginBottom20),
                    value: n,
                    onChange: (e) => o.Z.setSidechainCompression(e),
                    note: m.intl.string(m.t.IwZbbG),
                    hideBorder: t,
                    children: m.intl.string(m.t['/jwMtr'])
                }),
                (0, i.jsx)(a.xJW, {
                    title: m.intl.string(m.t.fhEzfn),
                    children: (0, i.jsx)(a.iRW, {
                        initialValue: s,
                        minValue: 1,
                        onValueChange: (e) => o.Z.setSidechainCompressionStrength(e)
                    })
                })
            ]
        });
    return (0, i.jsx)(c.F, {
        setting: u.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_SIDECHAIN_COMPRESSION,
        children: t
            ? g
            : (0, i.jsx)(a.hjN, {
                  className: h.marginBottom20,
                  children: g
              })
    });
}
