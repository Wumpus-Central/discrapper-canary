n.d(t, { A: () => f });
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(397927),
    s = n(827343),
    o = n(688810),
    l = n(195043),
    c = n(430452),
    u = n(531525),
    d = n(985018);
function f() {
    let { sidechainEnabled: e, sidechainStrength: t } = (0, i.cf)([c.A], () => ({
            sidechainEnabled: c.A.getSidechainCompression(),
            sidechainStrength: c.A.getSidechainCompressionStrength(),
        })),
        { analyticsLocations: n } = (0, o.Ay)();
    return (0, r.jsxs)(l.x, {
        setting: u.H.VOICE_AND_VIDEO_ADVANCED_PROCESSING_SIDECHAIN_COMPRESSION,
        children: [
            (0, r.jsx)(a.dOG, {
                label: d.intl.string(d.t["/jwMtn"]),
                description: d.intl.string(d.t.zlA23F),
                checked: e,
                onChange: (e) => s.A.setSidechainCompression(e, { analyticsLocations: n }),
            }),
            (0, r.jsx)(a.Apm, {
                label: d.intl.string(d.t.fhEzfj),
                initialValue: t,
                minValue: 1,
                onValueChange: (e) => s.A.setSidechainCompressionStrength(e, { analyticsLocations: n }),
            }),
        ],
    });
}
