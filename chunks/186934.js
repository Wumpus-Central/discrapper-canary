n.d(t, { Z: () => h });
var i = n(255367);
n(73800);
var r = n(120356),
    s = n.n(r),
    l = n(442837),
    a = n(481060),
    o = n(846027),
    c = n(906732),
    d = n(921801),
    u = n(131951),
    m = n(726985),
    p = n(388032),
    g = n(20493);
function h(e) {
    let { refreshStyles: t = !1 } = e,
        { sidechainEnabled: n, sidechainStrength: r } = (0, l.cj)([u.Z], () => ({
            sidechainEnabled: u.Z.getSidechainCompression(),
            sidechainStrength: u.Z.getSidechainCompressionStrength()
        })),
        { analyticsLocations: h } = (0, c.ZP)(),
        f = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(a.j7V, {
                    className: t ? null : s()(g.marginTop8, g.marginBottom20),
                    value: n,
                    onChange: (e) => o.Z.setSidechainCompression(e, { analyticsLocations: h }),
                    note: p.intl.string(p.t.zlA23N),
                    hideBorder: t,
                    children: p.intl.string(p.t['/jwMtr'])
                }),
                (0, i.jsx)(a.xJW, {
                    title: p.intl.string(p.t.fhEzfn),
                    children: (0, i.jsx)(a.iRW, {
                        initialValue: r,
                        minValue: 1,
                        onValueChange: (e) => o.Z.setSidechainCompressionStrength(e, { analyticsLocations: h })
                    })
                })
            ]
        });
    return (0, i.jsx)(d.F, {
        setting: m.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_SIDECHAIN_COMPRESSION,
        children: t
            ? f
            : (0, i.jsx)(a.hjN, {
                  className: g.marginBottom20,
                  children: f
              })
    });
}
