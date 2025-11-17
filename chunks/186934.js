n.d(t, { Z: () => f });
var r = n(54381);
n(473749);
var i = n(442837),
    a = n(481060),
    o = n(846027),
    s = n(906732),
    l = n(921801),
    c = n(131951),
    u = n(726985),
    d = n(388032);
function f() {
    let { sidechainEnabled: e, sidechainStrength: t } = (0, i.cj)([c.Z], () => ({
            sidechainEnabled: c.Z.getSidechainCompression(),
            sidechainStrength: c.Z.getSidechainCompressionStrength(),
        })),
        { analyticsLocations: n } = (0, s.ZP)();
    return (0, r.jsxs)(l.F, {
        setting: u.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_SIDECHAIN_COMPRESSION,
        children: [
            (0, r.jsx)(a.rsf, {
                label: d.intl.string(d.t["/jwMtn"]),
                description: d.intl.string(d.t.zlA23F),
                checked: e,
                onChange: (e) => o.Z.setSidechainCompression(e, { analyticsLocations: n }),
            }),
            (0, r.jsx)(a.iRW, {
                label: d.intl.string(d.t.fhEzfj),
                initialValue: t,
                minValue: 1,
                onValueChange: (e) => o.Z.setSidechainCompressionStrength(e, { analyticsLocations: n }),
            }),
        ],
    });
}
