n.d(t, { Z: () => d });
var l = n(200651);
n(192379);
var i = n(442837),
    r = n(481060),
    a = n(846027),
    s = n(131951),
    o = n(36703),
    u = n(358085),
    c = n(388032);
function d(e) {
    let t = (0, i.e7)([s.Z], () => (0, o.P)(s.Z.getOutputVolume()));
    return (0, l.jsx)(r.II_, {
        id: 'output',
        label: c.intl.string(c.t.eATD2N),
        control: (n, i) =>
            (0, l.jsx)(r._wy, {
                ...n,
                ref: i,
                value: t,
                maxValue: u.isPlatformEmbedded ? 200 : 100,
                onChange: (t) => a.Z.setOutputVolume((0, o.A)(t), { analyticsLocations: e }),
                'aria-label': c.intl.string(c.t.eATD2N)
            })
    });
}
