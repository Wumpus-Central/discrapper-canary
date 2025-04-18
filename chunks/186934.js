n.d(t, { Z: () => h });
var r = n(200651);
n(192379);
var i = n(120356),
    s = n.n(i),
    a = n(442837),
    l = n(481060),
    o = n(846027),
    c = n(906732),
    d = n(921801),
    u = n(131951),
    m = n(726985),
    g = n(388032),
    p = n(20493);
function h(e) {
    let { refreshStyles: t = !1 } = e,
        { sidechainEnabled: n, sidechainStrength: i } = (0, a.cj)([u.Z], () => ({
            sidechainEnabled: u.Z.getSidechainCompression(),
            sidechainStrength: u.Z.getSidechainCompressionStrength()
        })),
        { analyticsLocations: h } = (0, c.ZP)(),
        f = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(l.j7V, {
                    className: t ? null : s()(p.marginTop8, p.marginBottom20),
                    value: n,
                    onChange: (e) => o.Z.setSidechainCompression(e, { analyticsLocations: h }),
                    note: g.NW.string(g.t.zlA23N),
                    hideBorder: t,
                    children: g.NW.string(g.t['/jwMtr'])
                }),
                (0, r.jsx)(l.xJW, {
                    title: g.NW.string(g.t.fhEzfn),
                    children: (0, r.jsx)(l.iRW, {
                        initialValue: i,
                        minValue: 1,
                        onValueChange: (e) => o.Z.setSidechainCompressionStrength(e, { analyticsLocations: h })
                    })
                })
            ]
        });
    return (0, r.jsx)(d.F, {
        setting: m.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_SIDECHAIN_COMPRESSION,
        children: t
            ? f
            : (0, r.jsx)(l.hjN, {
                  className: p.marginBottom20,
                  children: f
              })
    });
}
