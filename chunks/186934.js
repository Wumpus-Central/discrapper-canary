n.d(t, { Z: () => h });
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    o = n(442837),
    s = n(481060),
    l = n(846027),
    c = n(906732),
    u = n(921801),
    d = n(131951),
    f = n(726985),
    _ = n(388032),
    p = n(197571);
function h(e) {
    let { refreshStyles: t = !1 } = e,
        { sidechainEnabled: n, sidechainStrength: i } = (0, o.cj)([d.Z], () => ({
            sidechainEnabled: d.Z.getSidechainCompression(),
            sidechainStrength: d.Z.getSidechainCompressionStrength(),
        })),
        { analyticsLocations: h } = (0, c.ZP)(),
        m = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(s.j7V, {
                    className: t ? null : a()(p.marginTop8, p.marginBottom20),
                    value: n,
                    onChange: (e) => l.Z.setSidechainCompression(e, { analyticsLocations: h }),
                    note: _.intl.string(_.t.zlA23N),
                    hideBorder: t,
                    children: _.intl.string(_.t["/jwMtr"]),
                }),
                (0, r.jsx)(s.xJW, {
                    title: _.intl.string(_.t.fhEzfn),
                    children: (0, r.jsx)(s.iRW, {
                        initialValue: i,
                        minValue: 1,
                        onValueChange: (e) => l.Z.setSidechainCompressionStrength(e, { analyticsLocations: h }),
                    }),
                }),
            ],
        });
    return (0, r.jsx)(u.F, {
        setting: f.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_SIDECHAIN_COMPRESSION,
        children: t
            ? m
            : (0, r.jsx)(s.hjN, {
                  className: p.marginBottom20,
                  children: m,
              }),
    });
}
